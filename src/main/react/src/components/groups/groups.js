import React from 'react';
import TableHeader from "../words/tableHeader";
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";
import axios from 'axios';

export default class Groups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            groups: [],
            selectedWords: [],
            newGroupName: '',
            selectedGroup: null,
        }
    }

    componentDidMount() {
        this.fetchGroups();
    }

    fetchGroups() {
        axios.get(`${window.rest.apiUrl}/api/group`)
            .then((resp) => {
                this.setState({groups: resp.data})
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.newGroupName.length > 0) {
            fetch(`${window.rest.apiUrl}/api/group`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrer: 'no-referrer',
                body: JSON.stringify(
                    {
                        name: this.state.newGroupName,
                    }
                )
            })
                .then(() => {
                    this.setState({newGroupName: ''});
                    this.fetchGroups();
                })
                .catch(err => console.log(err));
        }
    };

    newGroupNameHandleChange = (e) => {
        this.setState({newGroupName: e.target.value});
    };

    handleGroupClick = (e, key) => {
        e.preventDefault();
        const selectedGroup = this.state.groups[key];
        this.setState({words: this.state.groups[key].words, selectedGroup: selectedGroup});
    };

    deleteGroup = (e, id) => {
        e.preventDefault();
        e.preventDefault();
        fetch(`${window.rest.apiUrl}/api/group/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
        })
            .then(() => {
                this.fetchGroups()
            })
            .catch(err => console.log(err));
    };

    render() {
        const {groups, words, selectedGroup} = this.state;

        return (
            <div id="test" className="container">
                <h2>Manage groups</h2>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="newWordsTextarea">New group name&nbsp;</label>
                        <input
                            value={this.state.newGroupName}
                            onChange={this.newGroupNameHandleChange}
                            type={"text"}
                        />&nbsp;
                        <button type="submit" className="btn btn-outline-success">
                            Create group
                        </button>
                    </div>
                </form>
                <ul>
                    {
                        groups ?
                            groups.map((item, key) => {
                                return <li key={item.id}>
                                    <a href={"delete/" + item.id} onClick={e => {
                                        this.deleteGroup(e, item.id)
                                    }}>Del</a>
                                    [{item.createdAt}]
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href={item.id} onClick={(e) => this.handleGroupClick(e, key)} key={key}>
                                        {item.name}
                                    </a>
                                </li>

                            })
                            :
                            null
                    }
                </ul>
                {selectedGroup ?
                    <div>
                        <h1>{selectedGroup.name}</h1>
                        <table className="table table-striped">
                            <TableHeader/>
                            <tbody>
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
                                            <td>{item.examples.length}</td>
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
                                                <a href={item.id} onClick={e => {e.preventDefault()}}>Del</a>
                                                &nbsp;|&nbsp;
                                                <a href={item.id} onClick={e => {e.preventDefault()}}>Edit</a>
                                            </td>
                                        </tr>
                                    })
                                    :
                                    null
                            }
                            </tbody>
                        </table>
                    </div>
                    : null}
            </div>
        )
    }
}