(this["webpackJsonptest-app-contactlist"]=this["webpackJsonptest-app-contactlist"]||[]).push([[0],{158:function(e,t,n){e.exports=n(283)},163:function(e,t,n){},164:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),i=(n(163),n(164),n(19)),l=n(322),u=n(342),s=n(341),m=Object(s.a)({form:"login"})((function(e){e.handleSubmit;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Hello!"),c.a.createElement("span",null,"If you want to try using this app, enter:"),c.a.createElement("div",null,"email: test@gmail.com"),c.a.createElement("div",null,"password: test"),c.a.createElement("div",null,"Never enter your real data"),c.a.createElement("br",null),c.a.createElement(l.a,{onSubmit:e.handleSubmit},c.a.createElement(u.a,{component:"input",name:"email",placeholder:"Email"}),c.a.createElement("br",null),c.a.createElement(u.a,{component:"input",name:"password",placeholder:"Password",type:"password"}),c.a.createElement("div",null,c.a.createElement("button",null,"Sing in"))))})),d=n(76),f=n.n(d),p=n(15);var E=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return n?c.a.createElement(p.a,{to:"/contactsList"}):c.a.createElement("div",null,c.a.createElement(m,{onSubmit:function(e){f.a.post("https://test-app-contacts.herokuapp.com/login",e),"test@gmail.com"===e.email&&"test"===e.password?a(!0):(alert("error"),a(!1))}}))},h=n(50),b=n(326),v=n(328),g=n(330),C=n(331),O=n(323),T=n(344),j=n(18),w=n(45),y=n(329),L=Object(O.a)((function(e){return Object(T.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})})}));function S(){var e=L();return c.a.createElement("div",{className:e.root},c.a.createElement(b.a,{position:"static"},c.a.createElement(v.a,null,c.a.createElement(w.b,{to:"/login"},c.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary"},"Login")),c.a.createElement(g.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"}),c.a.createElement(C.a,{className:e.title,variant:"h6",noWrap:!0},"Your contacts"))))}var k=n(339),N=n(332),A=n(144),I=n(64),R=f.a.create({baseURL:"https://test-app-contacts.herokuapp.com/contactsList"}),x=function(e){return R.post("/",{title:e,tel:"Entry number"}).then((function(e){return e.data}))},H=function(){return R.get("/").then((function(e){return e.data}))},D=function(e){return R.delete("/".concat(e)).then((function(e){return e.data}))},G=function(e,t){return R.patch("/".concat(e),{title:t}).then((function(e){return e.data}))},B=function(e,t){return R.patch("/".concat(e),{tel:t}).then((function(e){return e.data}))},F=[],W=n(24),K=n(340),M=n(333);var P=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),s=u[0],m=(u[1],Object(a.useState)(null)),d=Object(i.a)(m,2),f=d[0],p=d[1];return c.a.createElement("div",{className:"addItemForm"},c.a.createElement(K.a,{variant:"outlined",value:r,onChange:function(e){o(e.currentTarget.value)},onKeyPress:function(t){p(null),t.ctrlKey&&13===t.charCode&&(e.addItem(r,s),o(""))},error:!!f,label:"Add new contact"}),c.a.createElement(g.a,{color:"primary",onClick:function(){""!==r.trim()?(e.addItem(r,s),o("")):p("Title is required")}},c.a.createElement(M.a,null)))},J=n(335),V=n(336),q=n(334),z=n(337),U=n(338),Y=n(147),$=n.n(Y),Q=n(146),X=n.n(Q),Z=n(145),_=n.n(Z);var ee=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(e.value),u=Object(i.a)(l,2),s=u[0],m=u[1],d=function(){o(!1),e.onChange(s)};return r?c.a.createElement(K.a,{variant:"outlined",value:s,autoFocus:!0,onChange:function(e){m(e.currentTarget.value)},onKeyPress:function(t){13===t.charCode&&(e.onChange(s),d())},onBlur:d}):c.a.createElement("span",null,e.value," ",c.a.createElement(_.a,{onClick:function(){o(!0),m(e.value)},fontSize:"small",color:"inherit"}))};var te=function(e){var t=c.a.useState(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],o=function(){r(!a)};return c.a.createElement("div",null,c.a.createElement(q.a,{key:e.contact.id},c.a.createElement(ee,{value:e.contact.title,onChange:e.onChangeTitle}),a?c.a.createElement(J.a,{onClick:o}):c.a.createElement(V.a,{onClick:o}),c.a.createElement(g.a,{onClick:e.onRemoveHandler},c.a.createElement(X.a,{color:"error"}))),c.a.createElement(z.a,{in:a,timeout:"auto",unmountOnExit:!0},c.a.createElement(q.a,null,c.a.createElement(U.a,null,c.a.createElement($.a,null)),c.a.createElement(ee,{value:e.contact.tel,onChange:e.onChangeTel}))))},ne=n(148),ae=n.n(ne);var ce=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],l=Object(W.d)((function(e){return e.contactList})),u=Object(a.useState)(l),s=Object(i.a)(u,2),m=s[0],d=s[1],f=Object(a.useState)(!0),p=Object(i.a)(f,2),E=p[0],h=p[1],b=function(){h(!E)};return Object(a.useEffect)((function(){d(l.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())})))}),[r,l]),c.a.createElement("div",null,E?c.a.createElement(ae.a,{onClick:b}):c.a.createElement("input",{onDoubleClick:b,type:"text",placeholder:"Search contact...",onChange:function(e){return o(e.target.value)}}),m.map((function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(te,{key:t.id,onRemoveHandler:function(){e.removeContact(t.id)},onChangeTitle:function(n){e.changeTitle(t.id,n)},onChangeTel:function(n){e.changeTel(t.id,n)},contact:t}))})))};var re=function(){var e=Object(W.d)((function(e){return e.contactList})),t=Object(W.c)();return Object(a.useEffect)((function(){e&&t((function(e){H().then((function(t){e({type:"SET-CONTACT-LIST",contactList:t})}))}))}),[]),c.a.createElement("div",{className:"contactList"},c.a.createElement(k.a,{item:!0},c.a.createElement(N.a,{style:{padding:"10px"}},c.a.createElement(P,{addItem:function(e){t(function(e){return function(t){x(e).then((function(e){t(function(e){return{type:"ADD-CONTACT",newContact:e}}(e))}))}}(e))}}),c.a.createElement(ce,{contactList:e,removeContact:function(e){t(function(e){return function(t){D(e).then((function(n){t({type:"REMOVE-CONTACT",id:e})}))}}(e))},changeTitle:function(e,n){t(function(e,t){return function(n,a){G(e,t).then((function(a){n(function(e,t){return{type:"CHANGE-CONTACT-TITLE",id:e,title:t}}(e,t))}))}}(e,n))},changeTel:function(e,n){t(function(e,t){return function(n,a){B(e,t).then((function(a){n(function(e,t){return{type:"CHANGE-CONTACT-TEL",id:e,tel:t}}(e,t))}))}}(e,n))}}))))};var oe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(S,null),c.a.createElement("div",null,c.a.createElement(p.b,{path:"/login",render:function(){return c.a.createElement(E,null)}}),c.a.createElement(p.b,{path:"/contactsList",render:function(){return c.a.createElement(re,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(14),le=n(149),ue=n(150),se=n(343),me=Object(ie.combineReducers)({contactList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-CONTACT":return e.filter((function(e){return e.id!=t.id}));case"ADD-CONTACT":return[].concat(Object(I.a)(e),[{id:t.newContact.id,title:t.newContact.title,tel:"Entry number"}]);case"CHANGE-CONTACT-TITLE":var n=e.find((function(e){return e.id===t.id}));return n&&(n.title=t.title),Object(I.a)(e);case"CHANGE-CONTACT-TEL":var a=e.find((function(e){return e.id===t.id}));return a&&(a.tel=t.tel),Object(I.a)(e);case"SET-CONTACT-LIST":var c=t.contactList.map((function(e){return Object(A.a)({},e)}));return Object(I.a)(c);default:return e}},form:se.a}),de=Object(ie.createStore)(me,Object(ue.composeWithDevTools)(Object(ie.applyMiddleware)(le.a)));o.a.render(c.a.createElement(w.a,null,c.a.createElement(W.a,{store:de},c.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[158,1,2]]]);
//# sourceMappingURL=main.69a6c992.chunk.js.map