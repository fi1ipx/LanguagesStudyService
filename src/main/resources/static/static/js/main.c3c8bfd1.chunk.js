(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l);a(28);function c(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Words")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/example"},"Examples")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/groups"},"Groups")))))}var s=a(5),d=a(6),m=a(8),i=a(7),u=a(9);function h(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"The word"),r.a.createElement("th",{scope:"col",className:"d-lg-none"},"Word id"),r.a.createElement("th",{scope:"col"},"Added"),r.a.createElement("th",{scope:"col"},"Practiced"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Dictionaries"),r.a.createElement("th",{scope:"col"},"Practice"),r.a.createElement("th",{scope:"col"},"Manage")))}function p(e){var t=e.word;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://translate.google.ru/#view=home&op=translate&sl=en&tl=ru&text="+t,className:"badge badge-primary",rel:"noopener noreferrer",target:"_blank"},"G"),"\xa0",r.a.createElement("a",{href:"https://dictionary.cambridge.org/dictionary/english/"+t,className:"badge badge-secondary",rel:"noopener noreferrer",target:"_blank"},"C"),"\xa0",r.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term="+t,className:"badge badge-info",rel:"noopener noreferrer",target:"_blank"},"U"),"\xa0",r.a.createElement("a",{href:"https://www.dictionary.com/browse/"+t,className:"badge badge-light",rel:"noopener noreferrer",target:"_blank"},"D"),"\xa0",r.a.createElement("a",{href:"https://youglish.com/search/"+t+"/us",className:"badge badge-danger",rel:"noopener noreferrer",target:"_blank"},"Y"))}var f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).textareaHandleChange=function(e){a.setState({wordsToAdd:e.target.value})},a.handleCheckBoxSelect=function(e){var t=a.state.selectedWords.slice();if(e.target.checked)t.push(e.target.value);else{var n=t.indexOf(e.target.value);t.splice(n,1)}var r=t.length>0;a.setState({selectedWords:t,showAddWordsToGroup:r})},a.handleSubmit=function(e){fetch("".concat("","/api/word/create-word-list"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({words:a.state.wordsToAdd})}).then(function(){a.setState({wordsToAdd:""}),a.fetchWords()}).catch(function(e){return console.log(e)}),e.preventDefault()},a.handleAddToTheGroup=function(e){fetch("".concat("","/api/group/add-group-members"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({groupId:a.state.selectedGroupId,wordIds:a.state.selectedWords})}).then(function(){a.setState({selectedWords:[],selectedGroupId:null})}).catch(function(e){return console.log(e)})},a.handleChangeGroup=function(e){a.setState({selectedGroupId:e.target.value})},a.state={words:[],groups:[],selectedWords:[],wordsToAdd:"",showAddWordsToGroup:!1,selectedGroupId:null},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchWords(),this.fetchGroups()}},{key:"fetchWords",value:function(){var e=this;fetch("".concat("","/api/word")).then(function(e){return e.json()}).then(function(t){e.setState({words:t})})}},{key:"fetchGroups",value:function(){var e=this;fetch("".concat("","/api/group")).then(function(e){return e.json()}).then(function(t){e.setState({groups:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.words,n=t.showAddWordsToGroup,l=t.groups,o=n?"block":"none";return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"Put new words here"),r.a.createElement("textarea",{className:"form-control",rows:"3",value:this.state.wordsToAdd,onChange:this.textareaHandleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add words")),r.a.createElement("br",null),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(h,null),r.a.createElement("tbody",{id:"tbody"},a?a.map(function(t,a){var n;return n=t.examples.length>0?t.examples[t.examples.length-1].createdAt:"never",r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.createdAt),r.a.createElement("td",null,t.examples.length),r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(p,{word:t.name})),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+t.id},"Practice")),r.a.createElement("td",null,r.a.createElement("input",{value:t.id,type:"checkbox",onChange:e.handleCheckBoxSelect}),"\xa0|\xa0",r.a.createElement("a",{href:"#"},"Del"),"\xa0|\xa0",r.a.createElement("a",{href:"#"},"Edit")))}):null)),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group",style:{display:o}},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"Select a word group\xa0"),r.a.createElement("select",{onChange:this.handleChangeGroup,value:this.state.selectedGroupId},l?l.map(function(e,t){return r.a.createElement("option",{key:e.id,value:e.id},"[",e.createdAt,"] \xa0\xa0\xa0\xa0\xa0",e.name)}):null),"\xa0",r.a.createElement("button",{className:"btn btn-outline-success",onClick:this.handleAddToTheGroup},"Add words to the group")))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){if(e.preventDefault(),a.state.newGroupName.length>0){fetch("".concat("","/api/group"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({name:a.state.newGroupName})}).then(function(){a.setState({newGroupName:""}),a.fetchGroups()}).catch(function(e){return console.log(e)})}},a.newGroupNameHandleChange=function(e){a.setState({newGroupName:e.target.value})},a.handleGroupClick=function(e,t){e.preventDefault(),console.log("handleGroupClick",t);var n=a.state.groups[t];a.setState({words:a.state.groups[t].words,selectedGroup:n})},a.state={words:[],groups:[],selectedWords:[],newGroupName:"",selectedGroup:null},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchGroups()}},{key:"fetchGroups",value:function(){var e=this;fetch("".concat("","/api/group")).then(function(e){return e.json()}).then(function(t){e.setState({groups:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.groups,n=t.words,l=t.selectedGroup;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("h2",null,"Manage groups"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"newWordsTextarea"},"New group name\xa0"),r.a.createElement("input",{value:this.state.newGroupName,onChange:this.newGroupNameHandleChange,type:"text"}),"\xa0",r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Create group"))),r.a.createElement("ul",null,a?a.map(function(t,a){return r.a.createElement("li",null,"[",t.createdAt,"] \xa0\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"#",onClick:function(t){return e.handleGroupClick(t,a)},key:a},t.name))}):null),l?r.a.createElement("div",null,r.a.createElement("h1",null,l.name),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(h,null),r.a.createElement("tbody",null,n?n.map(function(e,t){var a;return a=e.examples.length>0?e.examples[e.examples.length-1].createdAt:"never",r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.createdAt),r.a.createElement("td",null,e.examples.length),r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement(p,{word:e.name})),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+e.id},"Practice")),r.a.createElement("td",null,r.a.createElement("a",{href:"#"},"Del"),"\xa0|\xa0",r.a.createElement("a",{href:"#"},"Edit")))}):null))):null)}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={examples:[]},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchExamples()}},{key:"fetchExamples",value:function(){console.log(this);var e=this;fetch("".concat("","/api/example")).then(function(e){return e.json()}).then(function(t){e.setState({examples:t}),console.log(t)})}},{key:"render",value:function(){var e=this.state.examples;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"The word"),r.a.createElement("th",{scope:"col"},"Example"),r.a.createElement("th",{scope:"col"},"Dictionaries"),r.a.createElement("th",{scope:"col"},"Example date"),r.a.createElement("th",{scope:"col"},"Word date"))),r.a.createElement("tbody",{id:"tbody"},e?e.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/practice/"+e.wordId},e.word)),r.a.createElement("td",null,e.text),r.a.createElement("td",null,r.a.createElement(p,{word:e.word})),r.a.createElement("td",null,e.createdAt),r.a.createElement("td",null,e.wordCreatedAt))}):null)))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).textareaHandleChange=function(e){a.setState({exampleToAdd:e.target.value})},a.handleSubmit=function(e){fetch("".concat("","/api/word/example"),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({wordId:a.state.wordId,text:a.state.exampleToAdd})}).then(function(){a.setState({exampleToAdd:""}),a.fetchTheWord()}).catch(function(e){return console.log(e)}),e.preventDefault()},a.state={word:"",wordCreatedAt:"",wordId:Number(e.match.params.id),examples:[],exampleToAdd:""},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchTheWord()}},{key:"fetchTheWord",value:function(){var e=this;fetch("".concat("","/api/word/").concat(this.state.wordId)).then(function(e){return e.json()}).then(function(t){e.setState({examples:t.examples,word:t.name,wordCreatedAt:t.createdAt})})}},{key:"render",value:function(){var e=this.state.examples;return r.a.createElement("div",{id:"test",className:"container"},r.a.createElement("h2",null,this.state.word," [added ",this.state.wordCreatedAt,"]"),r.a.createElement(p,{word:this.state.word}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleTextarea"},"Type example here"),r.a.createElement("textarea",{className:"form-control",value:this.state.exampleToAdd,onChange:this.textareaHandleChange,rows:"3"})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add example")),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group list-group-flush",id:"examplesList"},e?e.map(function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},"[",e.createdAt,"] \xa0\xa0\xa0\xa0\xa0",e.text)}):null)))}}]),t}(r.a.Component),w=a(20),v=a(10);var x=function(){return r.a.createElement(w.a,null,r.a.createElement(c,null),r.a.createElement(v.a,{exact:!0,path:"/",component:f}),r.a.createElement(v.a,{exact:!0,path:"/example",component:g}),r.a.createElement(v.a,{exact:!0,path:"/practice/:id",component:b}),r.a.createElement(v.a,{exact:!0,path:"/groups",component:E}),r.a.createElement("footer",null,"\xa0\xa9 2019 Language study service"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.c3c8bfd1.chunk.js.map