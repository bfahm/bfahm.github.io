(function(t){function e(e){for(var o,i,u=e[0],c=e[1],d=e[2],s=0,f=[];s<u.length;s++)i=u[s],r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"383f":function(t,e,n){"use strict";var o=n("cfdb"),r=n.n(o);r.a},"442d":function(t,e,n){"use strict";var o=n("8e07"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("AddTodo",{on:{"add-todo":t.affectDatabase}}),n("Todos",{attrs:{todos:t.todosData},on:{"del-todo-from-main":t.deleteTodo}})],1)},a=[],i=n("75fc"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.todos,function(e){return n("div",{key:e.id},[n("TodoItem",{attrs:{inputParameter:e},on:{"del-todo-from-item":function(n){return t.$emit("del-todo-from-main",e.id)}}})],1)}),0)},c=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item",class:{"is-complete":t.inputParameter.completed}},[n("p",[n("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v("\n        "+t._s(t.inputParameter.title)+"\n        "),n("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo-from-item",t.inputParameter.id)}}},[t._v("X")])])])},l=[],s={name:"TodoItem",props:["inputParameter"],methods:{markComplete:function(){this.inputParameter.completed=!this.inputParameter.completed}}},f=s,p=(n("a4cf"),n("2877")),m=Object(p["a"])(f,d,l,!1,null,"084dd0f2",null),v=m.exports,h={name:"Todos",components:{TodoItem:v},props:["todos"]},b=h,_=Object(p["a"])(b,u,c,!1,null,"3643e746",null),y=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:t.addTodo}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},T=[],O=n("11c1"),j=n.n(O),x={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault(),console.log(t);var e={id:j.a.v4(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},P=x,w=(n("383f"),Object(p["a"])(P,g,T,!1,null,"7c304dee",null)),$=w.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",[t._v("TodoList")])])}],C={name:"Header"},E=C,S=(n("442d"),Object(p["a"])(E,D,k,!1,null,"2edd39cc",null)),A=S.exports,M={name:"app",components:{Todos:y,Header:A,AddTodo:$},data:function(){return{todosData:[]}},methods:{deleteTodo:function(t){this.todosData=this.todosData.filter(function(e){return e.id!==t})},affectDatabase:function(t){this.todosData=[].concat(Object(i["a"])(this.todosData),[t])}}},H=M,I=(n("034f"),Object(p["a"])(H,r,a,!1,null,null,null)),J=I.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(J)}}).$mount("#app")},"64a9":function(t,e,n){},"663c":function(t,e,n){},"8e07":function(t,e,n){},a4cf:function(t,e,n){"use strict";var o=n("663c"),r=n.n(o);r.a},cfdb:function(t,e,n){}});
//# sourceMappingURL=app.db27d7e2.js.map