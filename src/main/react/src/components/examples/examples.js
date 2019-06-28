import React from 'react';
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: [],
        }
    }

    componentDidMount() {
        this.fetchExamples();
    }

    fetchExamples() {
        console.log(this);
        const that = this;
        const serviceUrl = '';
        fetch(`${serviceUrl}/api/example`)
            .then((resp) => resp.json())
            .then(function (data) {
                that.setState({examples: data});
                console.log(data);
            })
    }

    render() {
        const { examples } = this.state;

        return (
            <div id="test" className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">The word</th>
                        <th scope="col">Example</th>
                        <th scope="col">Dictionaries</th>
                        <th scope="col">Example date</th>
                        <th scope="col">Word date</th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    {
                        examples ?
                            examples.map((item, key) => {

                                return <tr key={item.id}>
                                    <th scope="row">{key+1}</th>
                                    <td>
                                        <a
                                            rel="noopener noreferrer" target="_blank"
                                            href={'/practice/' + item.wordId}>
                                            {item.word}
                                        </a>
                                    </td>
                                    <td>{item.text}</td>
                                    <td><DictionaryLinks word={item.word}/></td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.wordCreatedAt}</td>
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