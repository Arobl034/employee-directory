(this.webpackJsonpemployeedirectoryapp=this.webpackJsonpemployeedirectoryapp||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),s=a(2),o=a(13),i=a(14),m=a(17),u=a(16),d=a(15),E=a.n(d),f=function(){return E.a.get("https://randomuser.me/api/?results=20&nat=us")};a(40);var p=function(e){return console.log(e.name),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{alt:e.name,src:e.image,className:"rounded"})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name:")," ",e.name),r.a.createElement("li",null,r.a.createElement("strong",null,"Email:")," ",e.email),r.a.createElement("li",null,r.a.createElement("strong",null,"Phone:")," ",e.phone)))))},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:null,order:"descending"},e.handleBtnClick=function(t){if("ascending"===e.state.order){e.setState(Object(s.a)(Object(s.a)({},e.state),{},{order:"descending"}));var a=e.state.results.sort((function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase();return a<n?-1:a>n?1:0}));e.setState({results:a})}else if("descending"===e.state.order){e.setState(Object(s.a)(Object(s.a)({},e.state),{},{order:"ascending"}));var n=e.state.results.sort((function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase();return a<n?1:a>n?-1:0}));console.log(n),e.setState({results:n})}else console.log("Error with state")},e.loadNextUser=function(){f().then((function(t){e.setState({results:t.data.results}),console.log(t.data.results)})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadNextUser()}},{key:"render",value:function(){var e=this;return this.state.results?r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("table",null,r.a.createElement("th",null,r.a.createElement("button",{className:"btn-danger",onClick:this.handleBtnClick},"Sort by Name - ",this.state.order))))),r.a.createElement("div",{className:"row"},this.state.results.map((function(t){return r.a.createElement(p,{name:t.name.title+" "+t.name.first+" "+t.name.last,key:t.id,image:t.picture.large,email:t.email,phone:t.phone,handleBtnClick:e.handleBtnClick})}))))):r.a.createElement("div",null)}}]),a}(n.Component);a(41);var h=function(){return r.a.createElement("nav",{className:"navbar-nav"},r.a.createElement("nav",null,"Employee Directory"))};a(42);var g=function(){return r.a.createElement("footer",{className:"footer"})};a(43);var N=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var b=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(N,null,r.a.createElement(v,null)),r.a.createElement(g,null))};a(44);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.46c9112c.chunk.js.map