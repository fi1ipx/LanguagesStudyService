import React from 'react';
import TableHeader from "./tableHeader";
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";

export default class Words extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            wordsToAdd: '',
        }
    }

    componentDidMount() {
        this.fetchWords();
    }

    fetchWords() {
        fetch('/api/word')
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({words: data})
            })
    }

    textareaHandleChange = (e) => {
        this.setState({wordsToAdd: e.target.value});
    };

    handleSubmit = (e) => {
        fetch('/api/word/create-word-list', {
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

    render() {
        const {words} = this.state;

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
                <table className="table table-striped">
                    <TableHeader/>
                    <tbody id="tbody">
                    {
                        words ?
                            words.map((item, key) => {
                                let lastPractice;
                                if (item.examples.length > 0) {
                                    lastPractice = item.examples[item.examples.length-1].createdAt
                                } else {
                                    lastPractice = 'never';
                                }
                                return <tr key={item.id}>
                                    <th scope="row">{key+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.examples.length}</td>
                                    <td>{lastPractice}</td>
                                    <td><DictionaryLinks word={item.name} /></td>
                                    <td><a href={'/practice/' + item.id}>Practice</a></td>
                                    <td>{item.name}</td>
                                </tr>
                            })
                            :
                            null
                    }
                    </tbody>
                </table>
            </div>
        )

    }
}