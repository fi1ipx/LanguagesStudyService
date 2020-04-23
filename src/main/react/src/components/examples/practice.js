import React from 'react';
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";
import axios from 'axios';

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
    axios.get(`${window.rest.apiUrl}/api/word/${this.state.wordId}`)
    .then(function (resp) {
      that.setState({
        examples: resp.data.examples,
        word: resp.data.name,
        wordCreatedAt: resp.data.createdAt,
      });
    })
  }

  textareaHandleChange = (e) => {
    this.setState({ exampleToAdd: e.target.value });
  };

  handleSubmit = (e) => {
    axios.post(`${window.rest.apiUrl}/api/word/example`, JSON.stringify(
        {
          wordId: this.state.wordId,
          text: this.state.exampleToAdd
        }
      ), {headers: {
      'Content-Type': 'application/json',
    }})
    .then(() => {
      this.setState({ exampleToAdd: '' });
      this.fetchTheWord();
    })
    .catch(err => console.log(err));
    e.preventDefault();
  };

  render() {
    const { examples } = this.state;
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
              rows="3" />
          </div>
          <button type="submit" className="btn btn-outline-success">Add example</button>
        </form>
        <br />
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