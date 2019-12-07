(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l);a(28);function c(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Words")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/example"},"Examples")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/groups"},"Groups")))))}var s=a(5),i=a(6),d=a(8),u=a(7),m=a(9);function h(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"The word"),r.a.createElement("th",{scope:"col",className:"d-lg-none"},"Word id"),r.a.createElement("th",{scope:"col"},"Added"),r.a.createElement("th",{scope:"col"},"Practiced"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Dictionaries"),r.a.createElement("th",{scope:"col"},"Practice"),r.a.createElement("th",{scope:"col"},"Manage")))}function p(e){var t=e.word;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://translate.google.ru/#view=home&op=translate&sl=en&tl=ru&text="+t,className:"badge badge-primary",rel:"noopener noreferrer",target:"_blank"},"G"),"\xa0",r.a.createElement("a",{href:"https://dictionary.cambridge.org/dictionary/english/"+t,className:"badge badge-secondary",rel:"noopener noreferrer",target:"_blank"},"C"),"\xa0",r.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term="+t,className:"badge badge-info",rel:"noopener noreferrer",target:"_blank"},"U"),"\xa0",r.a.createElement("a",{href:"https://www.dictionary.com/browse/"+t,className:"badge badge-light",rel:"noopener noreferrer",target:"_blank"},"D"),"\xa0",r.a.createElement("a",{href:"https://youglish.com/search/"+t+"/us",className:"badge badge-danger",rel:"noopener noreferrer",target:"_blank"},"Y"))}function f(){return r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}var E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).trackScrolling=function(){var e=document.getElementById("root");a.isBottom(e)&&(a.fetchWords(a.state.pageNumber+1),document.removeEventListener("scroll",a.trackScrolling))},a.textareaHandleChange=function(e){a.setState({wordsToAdd:e.target.value})},a.handleCheckBoxSelect=function(e){var t=a.state.selectedWords.slice();if(e.target.checked)t.push(e.target.value);else{var n=t.indexOf(e.target.value);t.splice(n,1)}var r=t.length>0;a.setState({selectedWords:t,showAddWordsToGroup:r})},a.handleSubmit=function(e){fetch("".concat(window.rest.apiUrl,"/api/word/create-word-list"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({words:a.state.wordsToAdd})}).then(function(){a.setState({wordsToAdd:""}),a.fetchWords()}).catch(function(e){return console.log(e)}),e.preventDefault()},a.handleAddToTheGroup=function(e){fetch("".concat(window.rest.apiUrl,"/api/group/add-group-members"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({groupId:a.state.selectedGroupId,wordIds:a.state.selectedWords})}).then(function(){a.setState({selectedWords:[],selectedGroupId:null})}).catch(function(e){return console.log(e)})},a.handleChangeGroup=function(e){a.setState({selectedGroupId:e.target.value})},a.deleteWord=function(e,t){e.preventDefault(),fetch("".concat(window.rest.apiUrl,"/api/word/").concat(t),{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin"}).then(function(){a.fetchWords()}).catch(function(e){return console.log(e)})},a.state={words:[],groups:[],selectedWords:[],wordsToAdd:"",showAddWordsToGroup:!1,selectedGroupId:void 0,isLoading:!1,totalPages:0,pageNumber:0,pageSize:20},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchWords(0),this.fetchGroups(),window.addEventListener("scroll",this.trackScrolling,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.trackScrolling,!1)}},{key:"isBottom",value:function(e){return e.getBoundingClientRect().bottom-350<=window.innerHeight}},{key:"fetchWords",value:function(e){var t=this,a=this.state,n=a.totalPages,r=a.isLoading;(0===e||n>e)&&!r&&(this.setState({isLoading:!0}),fetch("".concat(window.rest.apiUrl,"/api/word?size=").concat(this.state.pageSize,"&page=").concat(e)).then(function(e){return e.json()}).then(function(a){t.setState({words:t.state.words.concat(a.content),isLoading:!1,totalPages:a.totalPages,pageNumber:e})}))}},{key:"fetchGroups",value:function(){var e=this;fetch("".concat(window.rest.apiUrl,"/api/group")).then(function(e){return e.json()}).then(function(t){e.setState({groups:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.words,n=t.showAddWordsToGroup,l=t.groups,o=t.isLoading,c=n?"block":"none";return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"Put new words here"),r.a.createElement("textarea",{className:"form-control",rows:"3",value:this.state.wordsToAdd,onChange:this.textareaHandleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add words")),r.a.createElement("br",null),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(h,null),r.a.createElement("tbody",{id:"tbody"},a?a.map(function(t,a){var n;return n=t.examples.length>0?t.examples[t.examples.length-1].createdAt:"never",r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.createdAt),r.a.createElement("td",null,r.a.createElement("div",{"data-toggle":"tooltip","data-placement":"top",title:t.examples.map(function(e){return e.text}).join("\n")},t.examples.length)),r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(p,{word:t.name})),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+t.id},"Practice")),r.a.createElement("td",null,r.a.createElement("input",{value:t.id,type:"checkbox",onChange:e.handleCheckBoxSelect}),"\xa0|\xa0",r.a.createElement("a",{href:"delete/"+t.id,onClick:function(a){e.deleteWord(a,t.id)}},"Del"),"\xa0|\xa0",r.a.createElement("a",{href:t.id,onClick:function(e){e.preventDefault()}},"Edit")))}):null,o?r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(f,null))):null)),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group",style:{display:c}},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"Select a word group\xa0"),r.a.createElement("select",{onChange:this.handleChangeGroup,value:this.state.selectedGroupId},l?l.map(function(e,t){return r.a.createElement("option",{key:e.id,value:e.id},"[",e.createdAt,"] \xa0\xa0\xa0\xa0\xa0",e.name)}):null),"\xa0",r.a.createElement("button",{className:"btn btn-outline-success",onClick:this.handleAddToTheGroup},"Add words to the group")))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.state.newGroupName.length>0&&fetch("".concat(window.rest.apiUrl,"/api/group"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({name:a.state.newGroupName})}).then(function(){a.setState({newGroupName:""}),a.fetchGroups()}).catch(function(e){return console.log(e)})},a.newGroupNameHandleChange=function(e){a.setState({newGroupName:e.target.value})},a.handleGroupClick=function(e,t){e.preventDefault();var n=a.state.groups[t];a.setState({words:a.state.groups[t].words,selectedGroup:n})},a.deleteGroup=function(e,t){e.preventDefault(),e.preventDefault(),fetch("".concat(window.rest.apiUrl,"/api/group/").concat(t),{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin"}).then(function(){a.fetchGroups()}).catch(function(e){return console.log(e)})},a.state={words:[],groups:[],selectedWords:[],newGroupName:"",selectedGroup:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchGroups()}},{key:"fetchGroups",value:function(){var e=this;fetch("".concat(window.rest.apiUrl,"/api/group")).then(function(e){return e.json()}).then(function(t){e.setState({groups:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.groups,n=t.words,l=t.selectedGroup;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("h2",null,"Manage groups"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"New group name\xa0"),r.a.createElement("input",{value:this.state.newGroupName,onChange:this.newGroupNameHandleChange,type:"text"}),"\xa0",r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Create group"))),r.a.createElement("ul",null,a?a.map(function(t,a){return r.a.createElement("li",{key:t.id},r.a.createElement("a",{href:"delete/"+t.id,onClick:function(a){e.deleteGroup(a,t.id)}},"Del"),"[",t.createdAt,"] \xa0\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:t.id,onClick:function(t){return e.handleGroupClick(t,a)},key:a},t.name))}):null),l?r.a.createElement("div",null,r.a.createElement("h1",null,l.name),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(h,null),r.a.createElement("tbody",null,n?n.map(function(e,t){var a;return a=e.examples.length>0?e.examples[e.examples.length-1].createdAt:"never",r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.createdAt),r.a.createElement("td",null,e.examples.length),r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement(p,{word:e.name})),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+e.id},"Practice")),r.a.createElement("td",null,r.a.createElement("a",{href:e.id,onClick:function(e){e.preventDefault()}},"Del"),"\xa0|\xa0",r.a.createElement("a",{href:e.id,onClick:function(e){e.preventDefault()}},"Edit")))}):null))):null)}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).deleteExample=function(e,t){e.preventDefault(),fetch("".concat(window.rest.apiUrl,"/api/example/").concat(t),{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin"}).then(function(){a.fetchExamples()}).catch(function(e){return console.log(e)})},a.state={examples:[],isLoading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchExamples()}},{key:"fetchExamples",value:function(){this.setState({isLoading:!0});var e=this;fetch("".concat(window.rest.apiUrl,"/api/example")).then(function(e){return e.json()}).then(function(t){e.setState({examples:t,isLoading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.examples,n=t.isLoading;return r.a.createElement("div",{id:"test",className:"container"},n?r.a.createElement(f,null):r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"The word"),r.a.createElement("th",{scope:"col"},"Example"),r.a.createElement("th",{scope:"col"},"Dictionaries"),r.a.createElement("th",{scope:"col"},"Example date"),r.a.createElement("th",{scope:"col"},"Word date"),r.a.createElement("th",{scope:"col"},"Manage"))),r.a.createElement("tbody",{id:"tbody"},a?a.map(function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+t.wordId},t.word)),r.a.createElement("td",null,t.text),r.a.createElement("td",null,r.a.createElement(p,{word:t.word})),r.a.createElement("td",null,t.createdAt),r.a.createElement("td",null,t.wordCreatedAt),r.a.createElement("td",null,r.a.createElement("a",{href:"delete/"+t.id,onClick:function(a){e.deleteExample(a,t.id)}},"Del")))}):null)))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).textareaHandleChange=function(e){a.setState({exampleToAdd:e.target.value})},a.handleSubmit=function(e){fetch("".concat(window.rest.apiUrl,"/api/word/example"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({wordId:a.state.wordId,text:a.state.exampleToAdd})}).then(function(){a.setState({exampleToAdd:""}),a.fetchTheWord()}).catch(function(e){return console.log(e)}),e.preventDefault()},a.state={word:"",wordCreatedAt:"",wordId:Number(e.match.params.id),examples:[],exampleToAdd:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchTheWord()}},{key:"fetchTheWord",value:function(){var e=this;fetch("".concat(window.rest.apiUrl,"/api/word/").concat(this.state.wordId)).then(function(e){return e.json()}).then(function(t){e.setState({examples:t.examples,word:t.name,wordCreatedAt:t.createdAt})})}},{key:"render",value:function(){var e=this.state.examples;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("h2",null,this.state.word," [added ",this.state.wordCreatedAt,"]"),r.a.createElement(p,{word:this.state.word}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleTextarea"},"Type example here"),r.a.createElement("textarea",{className:"form-control",value:this.state.exampleToAdd,onChange:this.textareaHandleChange,rows:"3"})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add example")),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group list-group-flush",id:"examplesList"},e?e.map(function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},"[",e.createdAt,"] \xa0\xa0\xa0\xa0\xa0",e.text)}):null)))}}]),t}(r.a.Component),v=a(20),x=a(10);var y=function(){return r.a.createElement(v.a,null,r.a.createElement(c,null),r.a.createElement(x.a,{exact:!0,path:"/",component:E}),r.a.createElement(x.a,{exact:!0,path:"/example",component:w}),r.a.createElement(x.a,{exact:!0,path:"/practice/:id",component:b}),r.a.createElement(x.a,{exact:!0,path:"/groups",component:g}),r.a.createElement("footer",null,"\xa0\xa9 2019 Language study service"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.82eb469f.chunk.js.map