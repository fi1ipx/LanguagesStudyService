import React from 'react';

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordId: Number(props.match.params.id),
            examples: [],
            exampleToAdd: '',
        }
    }

    componentDidMount() {
        this.fetchExamples();
    }

    fetchExamples() {
        const that = this;
        fetch('/api/word/' + this.state.wordId + '/examples')
            .then((response) => response.json())
            .then(function (data) {
                that.setState({examples: data});
            })
    }

    textareaHandleChange = (e) => {
        this.setState({exampleToAdd: e.target.value});
    };

    handleSubmit = (e) => {
        fetch('/api/word/example', {
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
                this.fetchExamples();
            })
            .catch(err => console.log(err));
        e.preventDefault();
    };

    render() {
        const {examples} = this.state;
        return (
            <div id="test" className="container">
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