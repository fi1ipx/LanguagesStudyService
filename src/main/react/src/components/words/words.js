import React from 'react';
import TableHeader from "./tableHeader";
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";
import Loader from "../loader/loader";

export default class Words extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            groups: [],
            selectedWords: [],
            wordsToAdd: '',
            showAddWordsToGroup: false,
            selectedGroupId: undefined,
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchWords();
        this.fetchGroups();
    }

    fetchWords() {
        this.setState({isLoading: true});
        fetch(`${window.rest.apiUrl}/api/word`)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({words: data, isLoading: false})
            })
    }

    fetchGroups() {
        fetch(`${window.rest.apiUrl}/api/group`)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({groups: data})
            })
    }

    textareaHandleChange = (e) => {
        this.setState({wordsToAdd: e.target.value});
    };

    handleCheckBoxSelect = (e) => {
        const selectedValues = this.state.selectedWords.slice();
        if (e.target.checked) {
            selectedValues.push(e.target.value);
        } else {
            const delIndex = selectedValues.indexOf(e.target.value);
            selectedValues.splice(delIndex, 1);
        }
        const showAddWordsToGroup = selectedValues.length > 0;
        this.setState({
            selectedWords: selectedValues,
            showAddWordsToGroup,
        })
    };

    handleSubmit = (e) => {
        fetch(`${window.rest.apiUrl}/api/word/create-word-list`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({words: this.state.wordsToAdd})
        })
            .then(() => {
                this.setState({wordsToAdd: ''});
                this.fetchWords();
            })
            .catch(err => console.log(err));
        e.preventDefault();
    };

    handleAddToTheGroup = (e) => {
        fetch(`${window.rest.apiUrl}/api/group/add-group-members`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                groupId: this.state.selectedGroupId,
                wordIds: this.state.selectedWords,
            })
        })
            .then(() => {
                this.setState({selectedWords: [], selectedGroupId: null});
            })
            .catch(err => console.log(err));
    };

    handleChangeGroup = (e) => {
        this.setState({selectedGroupId: e.target.value});
    };

    deleteWord = (e, wordId) => {
        e.preventDefault();
        fetch(`${window.rest.apiUrl}/api/word/${wordId}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
        })
            .then(() => {
                this.fetchWords();
            })
            .catch(err => console.log(err));
    };

    render() {
        const {words, showAddWordsToGroup, groups, isLoading} = this.state;
        const addToGroupVisible = showAddWordsToGroup ? 'block' : 'none';

        return (
            <div id="test" className="container">
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="newWordsTextarea">Put new words here</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={this.state.wordsToAdd}
                            onChange={this.textareaHandleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-success">
                        Add words
                    </button>
                </form>
                <br/>
                {
                    isLoading ? <Loader/> :
                    <table className="table table-striped">
                        <TableHeader/>
                        <tbody id="tbody">
                        {
                            words ?
                                words.map((item, key) => {
                                    let lastPractice;
                                    if (item.examples.length > 0) {
                                        lastPractice = item.examples[item.examples.length - 1].createdAt
                                    } else {
                                        lastPractice = 'never';
                                    }
                                    return <tr key={item.id}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.createdAt}</td>
                                        <td>
                                            <div data-toggle="tooltip"
                                                 data-placement="top"
                                                 title={
                                                     item.examples.map(function (el) {
                                                         return el.text;
                                                     }).join('\n')}
                                            >
                                                {item.examples.length}
                                            </div>
                                        </td>
                                        <td>{lastPractice}</td>
                                        <td><DictionaryLinks word={item.name}/></td>
                                        <td>
                                            <a
                                                rel="noopener noreferrer" target="_blank"
                                                href={'/practice/' + item.id}>
                                                Practice
                                            </a>
                                        </td>
                                        <td>
                                            <input value={item.id} type="checkbox"
                                                   onChange={this.handleCheckBoxSelect}/>
                                            &nbsp;|&nbsp;
                                            <a href={"delete/" + item.id} onClick={e => {
                                                this.deleteWord(e, item.id)
                                            }}>Del</a>
                                            &nbsp;|&nbsp;
                                            <a href={item.id} onClick={e => {
                                                e.preventDefault()
                                            }}>Edit</a>
                                        </td>
                                    </tr>
                                })
                                :
                                null
                        }
                        </tbody>
                    </table>
                }
                <br/>
                <div className="form-group" style={{display: addToGroupVisible}}>
                    <label htmlFor="newWordsTextarea">Select a word group&nbsp;</label>
                    <select onChange={this.handleChangeGroup} value={this.state.selectedGroupId}>
                        {
                            groups ?
                                groups.map((item, key) => {
                                    return <option key={item.id} value={item.id}>
                                        [{item.createdAt}]
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {item.name}
                                    </option>
                                })
                                :
                                null
                        }
                    </select>
                    &nbsp;
                    <button className="btn btn-outline-success" onClick={this.handleAddToTheGroup}>
                        Add words to the group
                    </button>
                </div>
            </div>
        )

    }
}