import React from 'react';
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";
import Loader from "../loader/loader";

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchExamples();
    }

    fetchExamples() {
        this.setState({isLoading: true});
        const that = this;
        fetch(`${window.rest.apiUrl}/api/example`)
            .then((resp) => resp.json())
            .then(function (data) {
                that.setState({examples: data, isLoading: false});
            })
    }

    deleteExample = (e, id) => {
        e.preventDefault();
        fetch(`${window.rest.apiUrl}/api/example/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
        })
            .then(() => {
                this.fetchExamples();
            })
            .catch(err => console.log(err));
    };

    render() {
        const {examples, isLoading} = this.state;

        return (
            <div id="test" className="container">
                {
                    isLoading ? <Loader/> :
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">The word</th>
                                <th scope="col">Example</th>
                                <th scope="col">Dictionaries</th>
                                <th scope="col">Example date</th>
                                <th scope="col">Word date</th>
                                <th scope="col">Manage</th>
                            </tr>
                            </thead>
                            <tbody id="tbody">
                            {
                                examples ?
                                    examples.map((item, key) => {

                                        return <tr key={item.id}>
                                            <th scope="row">{key + 1}</th>
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
                                            <td>
                                                <a href={"delete/" + item.id} onClick={e => {
                                                    this.deleteExample(e, item.id)
                                                }}>Del</a>
                                            </td>
                                        </tr>
                                    })
                                    :
                                    null
                            }
                            </tbody>
                        </table>
                }
            </div>
        )
    }
}