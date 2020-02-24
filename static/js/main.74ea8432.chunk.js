(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),r=n.n(l),c=(n(15),n(16),n(6)),d=n(9),s=n(1),i=n(2),u=n(4),m=n(3),p=n(5),f=n(17),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={newTodo:""},n.handleChange=function(e){var t=e.target.value;n.setState({newTodo:t})},n.handleEnter=function(e){var t=n.state.newTodo;"Enter"===e.key&&t.trim().length>0&&(n.props.addTodo({title:t,completed:!1,id:f()}),n.setState({newTodo:""}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.newTodo;return o.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.handleChange,onKeyDown:this.handleEnter})}}]),t}(a.Component),E=function(e){var t=e.title,n=e.id,a=e.completed,l=e.deleteTodo,r=e.updateCompleted;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",id:n,onChange:r,checked:a}),o.a.createElement("label",{htmlFor:n},t),o.a.createElement("button",{type:"button",className:"destroy",onClick:l})))},g=function(e){var t=e.todos,n=e.deleteTodo,a=e.updateCompleted,l=e.handleToggleAll;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:l}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(E,Object.assign({},e,{deleteTodo:function(){return n(e.id)},updateCompleted:function(){return a(e.id)}})))}))))};g.defaultProps={todos:[]};var C=g,b=function(e){var t=e.handleSelect,n=e.handleClearCompleted;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:"selected",name:"all",onClick:t},"All")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/active",name:"false",onClick:t},"Active")),o.a.createElement("li",null,o.a.createElement("a",{name:"true",href:"#/completed",onClick:t},"Completed"))),o.a.createElement("button",{type:"button",className:"clear-completed",onClick:n},"Clear completed"))},v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],filter:"all"},n.onHandleFilter=function(e){switch(e.target.name){case"false":n.setState({filter:!1});break;case"true":n.setState({filter:!0});break;case"all":n.setState({filter:"all"})}},n.countNotCompleted=function(){return n.state.todos.filter((function(e){return!e.completed})).length},n.onAddTodo=function(e){n.setState((function(t){return{todos:[].concat(Object(d.a)(t.todos),[e])}}))},n.onDeleteTodo=function(e){n.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},n.onUpdateCompleted=function(e){n.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(c.a)({},t,{completed:!t.completed}):t}))}}))},n.onClearCompleted=function(){n.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},n.onHandleToggleAll=function(){n.setState((function(e){return{todos:e.todos.map((function(e){return Object(c.a)({},e,{completed:!0})}))}}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.filter,n=function(e,t){return"all"===t?e:e.filter((function(e){return e.completed===t}))}(e.todos,t);return o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(h,{addTodo:this.onAddTodo})),o.a.createElement("section",{className:"main"},o.a.createElement(C,{todos:n,deleteTodo:this.onDeleteTodo,updateCompleted:this.onUpdateCompleted,handleToggleAll:this.onHandleToggleAll})),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},"".concat(this.countNotCompleted()," items left")),o.a.createElement(b,{handleSelect:this.onHandleFilter,handleClearCompleted:this.onClearCompleted})))}}]),t}(a.Component);r.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.74ea8432.chunk.js.map