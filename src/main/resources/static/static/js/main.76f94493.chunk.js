(this["webpackJsonplang-study-front"]=this["webpackJsonplang-study-front"]||[]).push([[0],{197:function(e,t,a){e.exports=a(407)},203:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=(a(202),a(100)),i=a(44),s=a(101),d=a(38),u=a(32),m=a(39),p=a(40),h=(a(203),a(141),a(414)),f=a(413),g=a(41),E=a(6),w=a(408),v=a(409),y=a(410),b=a(412);function x(e){var t=e.word;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://translate.google.ru/#view=home&op=translate&sl=en&tl=ru&text="+t,className:"badge badge-primary",rel:"noopener noreferrer",target:"_blank"},"G"),"\xa0",r.a.createElement("a",{href:"https://dictionary.cambridge.org/dictionary/english/"+t,className:"badge badge-secondary",rel:"noopener noreferrer",target:"_blank"},"C"),"\xa0",r.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term="+t,className:"badge badge-info",rel:"noopener noreferrer",target:"_blank"},"U"),"\xa0",r.a.createElement("a",{href:"https://www.dictionary.com/browse/"+t,className:"badge badge-light",rel:"noopener noreferrer",target:"_blank"},"D"),"\xa0",r.a.createElement("a",{href:"https://youglish.com/search/"+t+"/us",className:"badge badge-danger",rel:"noopener noreferrer",target:"_blank"},"Y"))}var C=a(96),S=a.n(C),k=a(23),D=a.n(k),T=r.a.createContext(),O=h.a.TextArea,I=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getInput=function(){return r.a.createElement(h.a,null)},e.renderCell=function(t){var a=t.getFieldDecorator,n=e.props,o=n.editing,c=n.dataIndex,l=n.title,i=(n.inputType,n.record),d=(n.index,n.children),u=Object(s.a)(n,["editing","dataIndex","title","inputType","record","index","children"]);return r.a.createElement("td",u,o?r.a.createElement(f.a.Item,{style:{margin:0}},a(c,{rules:[{required:!0,message:"Please Input ".concat(l,"!")}],initialValue:i[c]})(e.getInput())):d)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(T.Consumer,null,this.renderCell)}}]),a}(r.a.Component),j=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,o=t.selectedKeys,c=t.confirm,l=t.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(h.a,{ref:function(e){n.searchInput=e},placeholder:"Search ".concat(e),value:o[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return n.handleSearch(o,c,e)},style:{width:188,marginBottom:8,display:"block"}}),r.a.createElement(g.a,{type:"primary",onClick:function(){return n.handleSearch(o,c,e)},icon:"search",size:"small",style:{width:90,marginRight:8}},"Search"),r.a.createElement(g.a,{onClick:function(){return n.handleReset(l)},size:"small",style:{width:90}},"Reset"))},filterIcon:function(e){return r.a.createElement(E.a,{type:"search",style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){if(null!==a[e])return a[e].toString().toLowerCase().includes(t.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return n.searchInput.select()}))},render:function(t){return n.state.searchedColumn===e?r.a.createElement(S.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[n.state.searchText],autoEscape:!0,textToHighlight:t.toString()}):t}}},n.handleSearch=function(e,t,a){console.log(e,t,a),t(),n.setState({searchText:e[0],searchedColumn:a})},n.handleReset=function(e){e(),n.setState({searchText:""})},n.textareaHandleChange=function(e){n.setState({wordsToAdd:e.target.value})},n.handleSubmit=function(e){D.a.post("".concat(window.rest.apiUrl,"/api/word/create-word-list"),JSON.stringify({words:n.state.wordsToAdd}),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){n.setState({wordsToAdd:""}),n.fetchWords()})).catch((function(e){return console.log(e)})),e.preventDefault()},n.deleteWord=function(e,t){e.preventDefault(),D.a.delete("".concat(window.rest.apiUrl,"/api/word/").concat(t)).then((function(){n.fetchWords()})).catch((function(e){return console.log(e)}))},n.isEditing=function(e){return e.key===n.state.editingKey},n.cancel=function(){n.setState({editingKey:""})},n.saveOnTheServer=function(e,t){console.log(e,t),D.a.patch("".concat(window.rest.apiUrl,"/api/word/").concat(e.id),JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).then((function(){})).catch((function(e){return console.log(e)}))},n.state={words:[],groups:[],selectedWords:[],wordsToAdd:"",showAddWordsToGroup:!1,selectedGroupId:void 0,isLoading:!1,totalPages:0,pageNumber:0,pageSize:2e3,editingKey:"",searchText:"",searchedColumn:""},n.columns=[Object(i.a)({title:"The word",dataIndex:"name",width:"10%",editable:!0,sorter:function(e,t){return e.name.localeCompare(t.name)},sortDirections:["descend","ascend"]},n.getColumnSearchProps("name")),{title:"Practiced",dataIndex:"practiced",width:"10%",render:function(e,t){return r.a.createElement(w.a,{placement:"bottomLeft",content:n.convertExamplesArrToStr(t.examples),trigger:"hover"},t.practiced)},editable:!1,sorter:function(e,t){return e.practiced-t.practiced},sortDirections:["descend","ascend"]},{title:"Last",dataIndex:"last",width:"10%",editable:!1,sorter:function(e,t){return new Date(e.last)-new Date(t.last)},sortDirections:["descend","ascend"]},{title:"Added",dataIndex:"createdAt",width:"10%",editable:!1,sorter:function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)},sortDirections:["descend","ascend"]},{title:"Dictionaries",dataIndex:"dictionaries",width:"10%",render:function(e,t){return r.a.createElement("span",null,r.a.createElement(x,{word:t.name}))}},{title:"Operation",dataIndex:"operation",width:"20%",render:function(e,t){var a=n.state.editingKey;return n.isEditing(t)?r.a.createElement("span",null,r.a.createElement(T.Consumer,null,(function(e){return r.a.createElement("a",{href:"no-action",onClick:function(a){return n.save(a,e,t.key)},style:{marginRight:8}},"Save")})),r.a.createElement(v.a,{title:"Sure to cancel?",onConfirm:function(){return n.cancel(t.key)}},r.a.createElement("a",{href:"no-action"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+t.key},"Practice")," - ",r.a.createElement("a",{href:"no-action",disabled:""!==a,onClick:function(e){return n.edit(t.key,e)}},"Edit")," - ",r.a.createElement("a",{href:"delete/"+t.key,onClick:function(e){n.deleteWord(e,t.key)}},"Del"))}}],n}return Object(u.a)(a,[{key:"convertExamplesArrToStr",value:function(e){var t=[];return e.forEach((function(e){return t.push(r.a.createElement("p",null,e.text))})),r.a.createElement("div",null,t)}}]),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchWords(0)}},{key:"fetchWords",value:function(e){var t=this;D.a.get("".concat(window.rest.apiUrl,"/api/word?size=").concat(this.state.pageSize,"&page=").concat(e)).then((function(e){var a=[];e.data.content.forEach((function(e){var t,n=Object(i.a)({key:e.id.toString(),practiced:e.examples.length,last:(t=e.examples,void 0!==t&&t.length>0?t.map((function(e){return e.createdAt})).sort().reverse()[0].toLocaleString("ru-RU"):null)},e);a.push(n)})),t.setState({words:a})}))}},{key:"fetchGroups",value:function(){var e=this;D.a.get("".concat(window.rest.apiUrl,"/api/group")).then((function(t){e.setState({groups:t.data})}))}},{key:"save",value:function(e,t,a){var n=this;e.preventDefault(),t.validateFields((function(e,t){if(!e){var r=Object(l.a)(n.state.words),o=r.findIndex((function(e){return a===e.key}));if(o>-1){var c=r[o];r.splice(o,1,Object(i.a)({},c,{},t)),n.saveOnTheServer(c,t),n.setState({words:r,editingKey:""})}else r.push(t),n.setState({words:r,editingKey:""})}}))}},{key:"edit",value:function(e,t){t.preventDefault(),this.setState({editingKey:e})}},{key:"render",value:function(){var e=this,t=this.state.words,a={body:{cell:I}},n=this.columns.map((function(t){return t.editable?Object(i.a)({},t,{onCell:function(a){return{record:a,dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(a)}}}):t}));return r.a.createElement(T.Provider,{value:this.props.form},r.a.createElement(O,{className:"form-control",rows:"3",value:this.state.wordsToAdd,onChange:this.textareaHandleChange}),r.a.createElement(g.a,{type:"submit",onClick:this.handleSubmit},"Add words"),r.a.createElement(y.a,null),r.a.createElement(b.a,{components:a,bordered:!0,dataSource:t,columns:n,rowClassName:"editable-row",pagination:{onChange:this.cancel,defaultPageSize:100}}))}}]),a}(r.a.Component),A=f.a.create()(j);function N(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"The word"),r.a.createElement("th",{scope:"col",className:"d-lg-none"},"Word id"),r.a.createElement("th",{scope:"col"},"Added"),r.a.createElement("th",{scope:"col"},"Practiced"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Dictionaries"),r.a.createElement("th",{scope:"col"},"Practice"),r.a.createElement("th",{scope:"col"},"Manage")))}var G=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.state.newGroupName.length>0&&fetch("".concat(window.rest.apiUrl,"/api/group"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({name:n.state.newGroupName})}).then((function(){n.setState({newGroupName:""}),n.fetchGroups()})).catch((function(e){return console.log(e)}))},n.newGroupNameHandleChange=function(e){n.setState({newGroupName:e.target.value})},n.handleGroupClick=function(e,t){e.preventDefault();var a=n.state.groups[t];n.setState({words:n.state.groups[t].words,selectedGroup:a})},n.deleteGroup=function(e,t){e.preventDefault(),e.preventDefault(),fetch("".concat(window.rest.apiUrl,"/api/group/").concat(t),{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin"}).then((function(){n.fetchGroups()})).catch((function(e){return console.log(e)}))},n.state={words:[],groups:[],selectedWords:[],newGroupName:"",selectedGroup:null},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchGroups()}},{key:"fetchGroups",value:function(){var e=this;D.a.get("".concat(window.rest.apiUrl,"/api/group")).then((function(t){e.setState({groups:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.groups,n=t.words,o=t.selectedGroup;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("h2",null,"Manage groups"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"New group name\xa0"),r.a.createElement("input",{value:this.state.newGroupName,onChange:this.newGroupNameHandleChange,type:"text"}),"\xa0",r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Create group"))),r.a.createElement("ul",null,a?a.map((function(t,a){return r.a.createElement("li",{key:t.id},r.a.createElement("a",{href:"delete/"+t.id,onClick:function(a){e.deleteGroup(a,t.id)}},"Del"),"[",t.createdAt,"] \xa0\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:t.id,onClick:function(t){return e.handleGroupClick(t,a)},key:a},t.name))})):null),o?r.a.createElement("div",null,r.a.createElement("h1",null,o.name),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(N,null),r.a.createElement("tbody",null,n?n.map((function(e,t){var a;return a=e.examples.length>0?e.examples[e.examples.length-1].createdAt:"never",r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.createdAt),r.a.createElement("td",null,e.examples.length),r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement(x,{word:e.name})),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+e.id},"Practice")),r.a.createElement("td",null,r.a.createElement("a",{href:e.id,onClick:function(e){e.preventDefault()}},"Del"),"\xa0|\xa0",r.a.createElement("a",{href:e.id,onClick:function(e){e.preventDefault()}},"Edit")))})):null))):null)}}]),a}(r.a.Component),W=r.a.createContext(),K=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getInput=function(){return r.a.createElement(h.a,null)},e.renderCell=function(t){var a=t.getFieldDecorator,n=e.props,o=n.editing,c=n.dataIndex,l=n.title,i=(n.inputType,n.record),d=(n.index,n.children),u=Object(s.a)(n,["editing","dataIndex","title","inputType","record","index","children"]);return r.a.createElement("td",u,o?r.a.createElement(f.a.Item,{style:{margin:0}},a(c,{rules:[{required:!0,message:"Please Input ".concat(l,"!")}],initialValue:i[c]})(e.getInput())):d)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(W.Consumer,null,this.renderCell)}}]),a}(r.a.Component),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,o=t.selectedKeys,c=t.confirm,l=t.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(h.a,{ref:function(e){n.searchInput=e},placeholder:"Search ".concat(e),value:o[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return n.handleSearch(o,c,e)},style:{width:188,marginBottom:8,display:"block"}}),r.a.createElement(g.a,{type:"primary",onClick:function(){return n.handleSearch(o,c,e)},icon:"search",size:"small",style:{width:90,marginRight:8}},"Search"),r.a.createElement(g.a,{onClick:function(){return n.handleReset(l)},size:"small",style:{width:90}},"Reset"))},filterIcon:function(e){return r.a.createElement(E.a,{type:"search",style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){if(null!==a[e])return a[e].toString().toLowerCase().includes(t.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return n.searchInput.select()}))},render:function(t){return n.state.searchedColumn===e?r.a.createElement(S.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[n.state.searchText],autoEscape:!0,textToHighlight:t.toString()}):t}}},n.handleSearch=function(e,t,a){console.log(e,t,a),t(),n.setState({searchText:e[0],searchedColumn:a})},n.handleReset=function(e){e(),n.setState({searchText:""})},n.deleteExample=function(e,t){e.preventDefault(),D.a.delete("".concat(window.rest.apiUrl,"/api/example/").concat(t)).then((function(){n.fetchExamples()})).catch((function(e){return console.log(e)}))},n.isEditing=function(e){return e.id===n.state.editingKey},n.cancel=function(){n.setState({editingKey:""})},n.saveOnTheServer=function(e,t){console.log(e,t),D.a.patch("".concat(window.rest.apiUrl,"/api/example/").concat(e.id),JSON.stringify(t),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){})).catch((function(e){return console.log(e)}))},n.state={examples:[],editingKey:"",isLoading:!0},n.columns=[{title:"The word",dataIndex:"word",width:"8%",editable:!1,sorter:function(e,t){return e.word.localeCompare(t.word)},sortDirections:["descend","ascend"]},Object(i.a)({title:"Example",dataIndex:"text",width:"24%",editable:!0,sorter:function(e,t){return e.text.localeCompare(t.text)},sortDirections:["descend","ascend"]},n.getColumnSearchProps("text")),{title:"Dictionaries",dataIndex:"dictionaries",width:"8%",render:function(e,t){return r.a.createElement("span",null,r.a.createElement(x,{word:t.word}))}},{title:"Example date",dataIndex:"createdAt",width:"10%",editable:!1,sorter:function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)},sortDirections:["descend","ascend"]},{title:"Word date",dataIndex:"wordCreatedAt",width:"10%",editable:!1,sorter:function(e,t){return new Date(e.wordCreatedAt)-new Date(t.wordCreatedAt)},sortDirections:["descend","ascend"]},{title:"Operation",dataIndex:"operation",width:"10%",render:function(e,t){var a=n.state.editingKey;return n.isEditing(t)?r.a.createElement("span",null,r.a.createElement(W.Consumer,null,(function(e){return r.a.createElement("a",{href:"no-action",onClick:function(a){return n.save(a,e,t.id)},style:{marginRight:8}},"Save")})),r.a.createElement(v.a,{title:"Sure to cancel?",onConfirm:function(){return n.cancel(t.id)}},r.a.createElement("a",{href:"no-action"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+t.wordId},"Practice")," - ",r.a.createElement("a",{href:"no-action",disabled:""!==a,onClick:function(e){return n.edit(t.id,e)}},"Edit")," - ",r.a.createElement("a",{href:"delete/"+t.id,onClick:function(e){n.deleteExample(e,t.id)}},"Del"))}}],n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchExamples()}},{key:"fetchExamples",value:function(){this.setState({isLoading:!0});var e=this;D.a.get("".concat(window.rest.apiUrl,"/api/example")).then((function(e){return e.data})).then((function(t){e.setState({examples:t,isLoading:!1})}))}},{key:"save",value:function(e,t,a){var n=this;e.preventDefault(),t.validateFields((function(e,t){if(!e){var r=Object(l.a)(n.state.examples),o=r.findIndex((function(e){return a===e.id}));if(o>-1){var c=r[o];r.splice(o,1,Object(i.a)({},c,{},t)),n.saveOnTheServer(c,t),n.setState({examples:r,editingKey:""})}else r.push(t),n.setState({examples:r,editingKey:""})}}))}},{key:"edit",value:function(e,t){t.preventDefault(),this.setState({editingKey:e})}},{key:"render",value:function(){var e=this,t=this.state.examples,a={body:{cell:K}},n=this.columns.map((function(t){return t.editable?Object(i.a)({},t,{onCell:function(a){return{record:a,dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(a)}}}):t}));return r.a.createElement(W.Provider,{value:this.props.form},r.a.createElement(y.a,null),r.a.createElement(b.a,{components:a,bordered:!0,dataSource:t,columns:n,rowKey:"id",rowClassName:"editable-row",pagination:{onChange:this.cancel,defaultPageSize:100}}))}}]),a}(r.a.Component),F=f.a.create()(P),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).textareaHandleChange=function(e){n.setState({exampleToAdd:e.target.value})},n.handleSubmit=function(e){D.a.post("".concat(window.rest.apiUrl,"/api/word/example"),JSON.stringify({wordId:n.state.wordId,text:n.state.exampleToAdd}),{headers:{"Content-Type":"application/json"}}).then((function(){n.setState({exampleToAdd:""}),n.fetchTheWord()})).catch((function(e){return console.log(e)})),e.preventDefault()},n.state={word:"",wordCreatedAt:"",wordId:Number(e.match.params.id),examples:[],exampleToAdd:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchTheWord()}},{key:"fetchTheWord",value:function(){var e=this;D.a.get("".concat(window.rest.apiUrl,"/api/word/").concat(this.state.wordId)).then((function(t){e.setState({examples:t.data.examples,word:t.data.name,wordCreatedAt:t.data.createdAt})}))}},{key:"render",value:function(){var e=this.state.examples;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("h2",null,this.state.word," [added ",this.state.wordCreatedAt,"]"),r.a.createElement(x,{word:this.state.word}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleTextarea"},"Type example here"),r.a.createElement("textarea",{className:"form-control",value:this.state.exampleToAdd,onChange:this.textareaHandleChange,rows:"3"})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add example")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group list-group-flush",id:"examplesList"},e?e.map((function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},"[",e.createdAt,"] \xa0\xa0\xa0\xa0\xa0",e.text)})):null)))}}]),a}(r.a.Component),U=a(81),R=a(49),z=a(411),H=a(138),_=z.a.Content,J=z.a.Footer,M=z.a.Sider;var B=function(){return r.a.createElement(U.a,null,r.a.createElement(z.a,null,r.a.createElement(M,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},r.a.createElement("div",{className:"logo"}),r.a.createElement(H.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"]},r.a.createElement(H.a.Item,{key:"1"},r.a.createElement(U.b,{to:"/"},r.a.createElement("span",{className:"nav-text"},"Words"))),r.a.createElement(H.a.Item,{key:"2"},r.a.createElement(U.b,{to:"/example"},r.a.createElement("span",{className:"nav-text"},"Examples"))),r.a.createElement(H.a.Item,{key:"3"},r.a.createElement(U.b,{to:"/groups"},r.a.createElement("span",{className:"nav-text"},"Groups"))))),r.a.createElement(z.a,null,r.a.createElement(_,{style:{margin:"24px 16px 0"}},r.a.createElement(R.a,{exact:!0,path:"/",component:A}),r.a.createElement(R.a,{exact:!0,path:"/example",component:F}),r.a.createElement(R.a,{exact:!0,path:"/practice/:id",component:L}),r.a.createElement(R.a,{exact:!0,path:"/groups",component:G})),r.a.createElement(J,{style:{textAlign:"center"}},"\xa0\xa9 2020 Language study service"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[197,1,2]]]);
//# sourceMappingURL=main.76f94493.chunk.js.map