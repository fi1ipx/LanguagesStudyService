import React from 'react';
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            wordCreatedAt: '',
            wordId: Number(props.match.params.id),
            examples: [],
            exampleToAdd: '',
        }
    }

    componentDidMount() {
        this.fetchTheWord();
    }

    fetchTheWord() {
        const that = this;
        fetch(`${window.rest.apiUrl}/api/word/${this.state.wordId}`)
            .then((response) => response.json())
            .then(function (data) {
                that.setState({
                    examples: data.examples,
                    word: data.name,
                    wordCreatedAt: data.createdAt,
                });
            })
    }

    textareaHandleChange = (e) => {
        this.setState({exampleToAdd: e.target.value});
    };

    handleSubmit = (e) => {
        fetch(`${window.rest.apiUrl}/api/word/example`, {
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
                    wordId: this.state.wordId,
                    text: this.state.exampleToAdd
                }
            )
        })
            .then(() => {
                this.setState({exampleToAdd: ''});
                this.fetchTheWord();
            })
            .catch(err => console.log(err));
        e.preventDefault();
    };

    render() {
        const {examples} = this.state;
        return (
            <div id="test" className="container">
                <h2>{this.state.word} [added {this.state.wordCreatedAt}]</h2>
                <DictionaryLinks word={this.state.word} />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Type example here</label>
                        <textarea
                            className="form-control"
                            value={this.state.exampleToAdd}
                            onChange={this.textareaHandleChange}
                            rows="3"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Add example</button>
                </form>
                <div>
                    <ul className="list-group list-group-flush" id="examplesList">
                        {
                            examples ?
                                examples.map((item, key) => {
                                    return <li className="list-group-item" key={key}>
                                        [{item.createdAt}]
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {item.text}
                                    </li>
                                })
                                :
                                null
                        }
                    </ul>
                </div>
            </div>
        );
    }
}