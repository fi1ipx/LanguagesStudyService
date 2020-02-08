import React from 'react';
import DictionaryLinks from "../dictionaryLinks/dictionaryLinks";
import { Button, Divider, Form, Icon, Input, Popconfirm, Table } from "antd";
import Highlighter from "react-highlight-words";

const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    return <Input/>;
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

class Examples extends React.Component {
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }}/>
    ),
    onFilter: (value, record) => {
      if (record[dataIndex] !== null) {
        return record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
      }
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log(selectedKeys, confirm, dataIndex);
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  constructor(props) {
    super(props);
    this.state = {
      examples: [],
      editingKey: '',
      isLoading: true,
    };

    this.columns = [
      {
        title: 'The word',
        dataIndex: 'word',
        width: '8%',
        editable: false,
        sorter: (a, b) => a.word.localeCompare(b.word),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Example',
        dataIndex: 'text',
        width: '24%',
        editable: true,
        sorter: (a, b) => a.text.localeCompare(b.text),
        sortDirections: ['descend', 'ascend'],
        ...this.getColumnSearchProps('text')
      },
      {
        title: 'Dictionaries',
        dataIndex: 'dictionaries',
        width: '8%',
        render: (text, record) => {
          return (
            <span>
              <DictionaryLinks word={record.word}/>
            </span>
          );
        },
      },
      {
        title: 'Example date',
        dataIndex: 'createdAt',
        width: '10%',
        editable: false,
        sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Word date',
        dataIndex: 'wordCreatedAt',
        width: '10%',
        editable: false,
        sorter: (a, b) => new Date(a.wordCreatedAt) - new Date(b.wordCreatedAt),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        width: '10%',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    href={'no-action'}
                    onClick={(e) => this.save(e, form, record.id)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.id)}>
                <a href={'no-action'}>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <>
              <a
                rel="noopener noreferrer" target="_blank"
                href={'/practice/' + record.wordId}>
                Practice
              </a> - <a href={'no-action'} disabled={editingKey !== ''} onClick={
              (e) => this.edit(record.id, e)}>
              Edit
            </a> - <a href={"delete/" + record.id} onClick={e => {
              this.deleteExample(e, record.id)
            }}>Del</a>
            </>
          );
        },
      },
    ];
  }

  componentDidMount() {
    this.fetchExamples();
  }

  fetchExamples() {
    this.setState({ isLoading: true });
    const that = this;
    fetch(`${window.rest.apiUrl}/api/example`)
    .then((resp) => resp.json())
    .then(function (data) {
      that.setState({ examples: data, isLoading: false });
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

  isEditing = record => record.id === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(e, form, key) {
    e.preventDefault();
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.examples];
      const index = newData.findIndex(item => key === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.saveOnTheServer(item, row);
        this.setState({ examples: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ examples: newData, editingKey: '' });
      }
    });
  }

  saveOnTheServer = (item, row) => {
    console.log(item, row);
    fetch(`${window.rest.apiUrl}/api/example/${item.id}`, {
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
    const { examples } = this.state;

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
        <Divider/>
        <Table
          components={components}
          bordered
          dataSource={examples}
          columns={columns}
          rowKey={"id"}
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

export default Form.create()(Examples);
