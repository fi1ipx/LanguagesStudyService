import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Button, Divider, Form, Input, Popconfirm, Table } from 'antd';
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";

const EditableContext = React.createContext();

const { TextArea } = Input;

class EditableCell extends React.Component {
  getInput = () => {
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

class Words extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      groups: [],
      selectedWords: [],
      wordsToAdd: '',
      showAddWordsToGroup: false,
      selectedGroupId: undefined,
      isLoading: false,
      totalPages: 0,
      pageNumber: 0,
      pageSize: 1000,
      editingKey: '',
    };

    this.columns = [
      {
        title: 'The word',
        dataIndex: 'name',
        width: '10%',
        editable: true,
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Practiced',
        dataIndex: 'practiced',
        width: '10%',
        editable: false,
        sorter: (a, b) => a.practiced - b.practiced,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Last',
        dataIndex: 'last',
        width: '10%',
        editable: false,
        sorter: (a, b) => new Date(a.last) - new Date(b.last),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Added',
        dataIndex: 'createdAt',
        width: '10%',
        editable: false,
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Dictionaries',
        dataIndex: 'dictionaries',
        width: '10%',
        render: (text, record) => {
          return (
            <span>
              <DictionaryLinks word={record.name} />
            </span>
          );
        },
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        width: '20%',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    href={'no-action'}
                    onClick={(e) => this.save(e, form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                <a href={'no-action'}>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <>
              <a
                rel="noopener noreferrer" target="_blank"
                href={'/practice/' + record.key}>
                Practice
              </a> - <a href={'no-action'} disabled={editingKey !== ''} onClick={
              (e) => this.edit(record.key, e)}>
              Edit
              </a> - <a href={"delete/" + record.key} onClick={e => {
              this.deleteWord(e, record.key)
            }}>Del</a>
            </>
          );
        },
      },
    ];
  }

  componentDidMount() {
    this.fetchWords(0);
  }

  fetchWords(pageNumber) {
    fetch(`${window.rest.apiUrl}/api/word?size=${this.state.pageSize}&page=${pageNumber}`)
    .then((resp) => resp.json())
    .then((data) => {
      let words = [];
      data.content.forEach(item => {
        const pullLastPracticedDate = (exampleArr) => {
          if (exampleArr !== undefined && exampleArr.length > 0) {
            const val = exampleArr.map(function (e) {
              return e.createdAt;
            }).sort().reverse()[0];
            return val.toLocaleString('ru-RU')
          } else {
            return null;
          }
        };
        const convertedWord = {
          key: item.id.toString(),
          practiced: item.examples.length,
          last: pullLastPracticedDate(item.examples),
          ...item
        };
        words.push(convertedWord);
      });
      this.setState({
        words,
      })
    })
  }

  fetchGroups() {
    fetch(`${window.rest.apiUrl}/api/group`)
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ groups: data })
    })
  }

  textareaHandleChange = (e) => {
    this.setState({ wordsToAdd: e.target.value });
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
      body: JSON.stringify({ words: this.state.wordsToAdd })
    })
    .then(() => {
      this.setState({ wordsToAdd: '' });
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
      this.setState({ selectedWords: [], selectedGroupId: null });
    })
    .catch(err => console.log(err));
  };

  handleChangeGroup = (e) => {
    this.setState({ selectedGroupId: e.target.value });
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

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(e, form, key) {
    e.preventDefault();
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.words];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.saveOnTheServer(item, row);
        this.setState({ words: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ words: newData, editingKey: '' });
      }
    });
  }

  saveOnTheServer = (item, row) => {
    console.log(item, row);
    fetch(`${window.rest.apiUrl}/api/word/${item.id}`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(row)
    })
    .then(() => {
      //
    })
    .catch(err => console.log(err));
  };

  edit(key, e) {
    e.preventDefault();
    this.setState({ editingKey: key });
  }

  render() {
    const { words } = this.state;

    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <TextArea
          className="form-control"
          rows="3"
          value={this.state.wordsToAdd}
          onChange={this.textareaHandleChange}
        />
        <Button type="submit" onClick={this.handleSubmit}>
          Add words
        </Button>
        <Divider />
        <Table
          components={components}
          bordered
          dataSource={words}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel,
            defaultPageSize: 100,
          }}
        />
      </EditableContext.Provider>
    );
  }
}

export default Form.create()(Words);
