(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(50)},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),i=a(4),l=a(14),o=a(12),u=a(13),m="userData/LOAD",p="userData/DONE",d={user:{}},h=Object(l.b)({userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{user:t.userData};case"userData/UPDATE":return Object(u.a)({},e,{user:Object(u.a)({},e.user,Object(o.a)({},t.key,t.newData))});case"userData/WORKOUT":return Object(u.a)({},e,{user:Object(u.a)({},e.user,{schedule:e.user.schedule.map(function(e){return e.workout=e.active?!e.workout:e.workout,e})})});case p:return Object(u.a)({},e,{user:Object(u.a)({},e.user,{schedule:e.user.schedule.map(function(e){return e.diet?(e.diet[t.key].done=e.active&&e.diet?!e.diet[t.key].done:e.diet[t.key].done,e):e})})});default:return e}}}),v=Object(l.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=a(52),f=a(7),_=a(8),b=a(10),g=a(9),N=a(11),k=a(54),y=a(53),O=a(51),w=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={active:1},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.setState({active:this.props.active})}},{key:"render",value:function(){var e=this,t=function(t){e.setState({active:parseInt(t.target.getAttribute("data-id"),10)||e.state.active})};return r.a.createElement("div",{className:"nav-container"},r.a.createElement("nav",{className:"nav"},r.a.createElement("span",{className:"decoration-line"}," "),r.a.createElement("ul",{className:"nav__items",onClick:t},r.a.createElement("li",{className:"".concat(1!==this.state.active?"nav__item":"nav__item nav__item--active")},r.a.createElement(O.a,{to:"/dashboard",className:"nav__link","data-id":1},"Dashboard")),r.a.createElement("li",{className:"".concat(2!==this.state.active?"nav__item":"nav__item nav__item--active")},r.a.createElement(O.a,{to:"/recipes",className:"nav__link","data-id":2},"Recipes")),r.a.createElement("li",{className:"".concat(3!==this.state.active?"nav__item":"nav__item nav__item--active")},r.a.createElement(O.a,{to:"/challenge",className:"nav__link","data-id":3},"Challenge")))),r.a.createElement("nav",{className:"hamburger-nav",onClick:t},r.a.createElement("input",{type:"checkbox",id:"open-menu-input",className:"menu-input-checkbox"}),r.a.createElement("label",{htmlFor:"open-menu-input",className:"menu-input-label"},r.a.createElement("img",{className:"menu-icon",src:"media/icons/menu.svg",alt:"menu"})),r.a.createElement("ul",{className:"menu--expanded"},r.a.createElement("label",{htmlFor:"open-menu-input",className:"menu-input-label"},r.a.createElement("span",{className:"icon-close"},"x")),r.a.createElement("li",{className:"".concat(1!==this.state.active?"nav__item":"nav__item nav__item--active")},r.a.createElement(O.a,{to:"/dashboard",className:"nav__link","data-id":1},"Dashboard")),r.a.createElement("li",{className:"".concat(2!==this.state.active?"nav__item":"nav__item nav__item--active")},r.a.createElement(O.a,{to:"/recipes",className:"nav__link","data-id":2},"Recipes")),r.a.createElement("li",{className:"".concat(3!==this.state.active?"nav__item":"nav__item nav__item--active")},r.a.createElement(O.a,{to:"/challenge",className:"nav__link","data-id":3},"Challenge")))))}}]),t}(r.a.Component),j=Object(i.b)(function(e){return{user:e.userData.user}})(function(e){return r.a.createElement("div",{className:"user-panel"},r.a.createElement("div",{className:"user-panel__avatar"},r.a.createElement("img",{className:"user-panel__image",src:"media/avatars/".concat(e.user.avatar),alt:e.user.name})),r.a.createElement("div",{className:"user-panel__name"},r.a.createElement("p",null,"".concat(e.user.name," ").concat(e.user.surname)),r.a.createElement("img",{className:"icon-arrow",src:"media/icons/chevron-up.png",alt:"icon-arrow"})))}),D=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container header__container"},r.a.createElement(w,{active:e.active}),r.a.createElement(j,null)))},C=function(e){for(var t=[],a=1;a<=12;a++)t.push(a);return r.a.createElement("div",{className:"progress"},r.a.createElement("h3",null,"YOUR 12 WEEK PROGRESS"),r.a.createElement("div",{className:"progress__indicator"},t.map(function(t){return t===e.user.progress?r.a.createElement("span",{key:t,className:"week-indicator week-indicator--active"},r.a.createElement("span",{className:"progress__number"},t)):t<e.user.progress?r.a.createElement("span",{key:t,className:"week-indicator week-indicator--past"},r.a.createElement("span",{className:"progress__number"},t)):t>e.user.progress?r.a.createElement("span",{key:t,className:"week-indicator week-indicator--future"},r.a.createElement("span",{className:"progress__number"},t)):null})))},S=a(5),x=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={currentPage:null},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.user.progress!==e.user.progress&&this.props.user.proteins!==e.user.proteins&&this.setState({currentPage:this.props.user.progress})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"slider"},r.a.createElement("button",{className:"btn btn-prev",onClick:function(){e.state.currentPage>1?e.setState({currentPage:e.state.currentPage-1}):e.setState({currentPage:e.state.currentPage})}},r.a.createElement(S.a,{path:"media/icons/Arrow.svg",svgClassName:"icon-arrow"})),r.a.createElement("h2",{className:"counter"},"Week ",this.state.currentPage),r.a.createElement("button",{className:"btn btn-next",onClick:function(){e.state.currentPage<12?e.setState({currentPage:e.state.currentPage+1}):e.setState({currentPage:e.state.currentPage})}},r.a.createElement(S.a,{path:"media/icons/Arrow.svg",svgClassName:"icon-arrow"})))}}]),t}(r.a.Component),P=function(e){var t=[];for(var a in e)t.push(a);return t},U=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={proteins:{}},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.user!==e.user&&this.setState({proteins:this.props.user.proteins})}},{key:"render",value:function(){var e=this,t=function(t){var a=t.currentTarget.classList[0];e.setState({proteins:Object(u.a)({},e.state.proteins,Object(o.a)({},a,!e.state.proteins[a]))},function(){this.props.userDataUpdate("proteins",this.state.proteins)})},a=P(this.props.user.proteins);return r.a.createElement("div",{className:"protein-options"},r.a.createElement("h3",{className:"protein-options__title"}," SELECT YOUR PROTEIN OPTIONS"),r.a.createElement("ul",{className:"protein-list"},a.map(function(a,n){return r.a.createElement(S.a,{path:"media/icons/".concat(a,".svg"),evalScripts:"always",key:n,svgClassName:e.state.proteins[a]?"protein protein--active":"protein protein--inactive",className:"".concat(a," ").concat(e.state.proteins[a]?"protein--active":"protein--inactive"),onClick:t})})))}}]),t}(r.a.Component),A=Object(i.b)(function(e){return{}},function(e){return{userDataUpdate:function(t,a){return e(function(e,t){return{type:"userData/UPDATE",key:e,newData:t}}(t,a))}}})(U),T=Object(i.b)(function(e){return{user:e.userData.user}})(function(e){return r.a.createElement("div",{className:"state-bar"},r.a.createElement(C,{user:e.user}),r.a.createElement(x,{user:e.user}),r.a.createElement(A,{user:e.user}))}),R=function(e){var t=e.split("");return"a"===t[1]||"p"===t[1]?t.splice(1,0,":00"):t.splice(2,0,":00"),t.join(),t},L=function(e){var t=P(e.diet),a={};return t.map(function(t){return a[t]=e.diet[t].done}),a},I=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={workout:!1,dayActivities:{"6am":!1,"9am":!1,"12pm":!1,"3pm":!1,"6pm":!1}},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.setState({dayActivities:L(this.props.schedule[this.props.index]),workout:this.props.schedule[this.props.index].workout})}},{key:"componentDidUpdate",value:function(e){this.props.schedule!==e.schedule&&this.setState({workout:this.props.schedule[this.props.index].workout,dayActivities:L(this.props.schedule[this.props.index])})}},{key:"render",value:function(){var e=this,t=function(){e.props.workoutUpdate()};return r.a.createElement("tr",{className:this.props.schedule[this.props.index].active?"table__column table__column--active":"table__column"},r.a.createElement("th",{className:"column__header"},"Day ",this.props.schedule[this.props.index].day),P(this.props.schedule[this.props.index].diet).map(function(t,a){return r.a.createElement("td",{className:"Bod\u2022\u0113 Shake"===e.props.schedule[e.props.index].diet[t].content?"grid shake":"grid",key:a,onClick:e.props.schedule[e.props.index].active?function(t){return function(t){var a=t.currentTarget.getAttribute("data-id");e.props.doneUpdate(a,!e.state.dayActivities[a])}(t)}:null,"data-id":t},r.a.createElement("div",{className:"time-indicator"},r.a.createElement("span",{className:"table__time"},R(t))),e.state.dayActivities[t]?r.a.createElement("span",{className:"icon-done"}):null,e.props.schedule[e.props.index].diet[t].content)}),r.a.createElement("td",{className:"grid grid--short"},this.props.schedule[this.props.index].carbon),r.a.createElement("td",{className:"grid grid--short"},this.state.workout?r.a.createElement(S.a,{path:"media/icons/dumbbell.svg",svgClassName:"icon-dumbbell icon-dumbbell--done",className:"icon-dumbbell icon-dumbbell--done",onClick:this.props.schedule[this.props.index].active?function(e){return t()}:null}):r.a.createElement(S.a,{path:"media/icons/dumbbell.svg",svgClassName:"icon-dumbbell",className:"icon-dumbbell",onClick:this.props.schedule[this.props.index].active?function(e){return t()}:null})))}}]),t}(r.a.Component),W=Object(i.b)(function(e){return{schedule:e.userData.user.schedule}},function(e){return{workoutUpdate:function(t,a){return e({type:"userData/WORKOUT"})},doneUpdate:function(t,a){return e(function(e,t){return{type:p,key:e,newData:t}}(t,a))}}})(I),M=function(e){return r.a.createElement("tr",{className:e.day.active?"table__column table__column--active":"table__column"},r.a.createElement("th",{className:"column__header"},"Day ",e.day.day),r.a.createElement("td",{className:"grid free-day"},r.a.createElement("div",{className:"free-day__content"},r.a.createElement(S.a,{path:"media/icons/Happy.svg",svgClassName:"icon-happy"}),"GUILT-FREE DAY")),r.a.createElement("td",{className:"grid print-grid"},r.a.createElement("span",{className:"print",onClick:function(){window.print()}},r.a.createElement(S.a,{path:"media/icons/print.svg",svgClassName:"icon-print"}),r.a.createElement("span",null,"Print"))))},B=function(e){return e.day.diet?r.a.createElement(W,{index:e.index}):r.a.createElement(M,{day:e.day})},F=function(){return r.a.createElement("tr",{className:"table__column table__headers"},r.a.createElement("th",{className:"grid"},r.a.createElement("span",{className:"table__time"},"6:00")," AM"),r.a.createElement("th",{className:"grid"},r.a.createElement("span",{className:"table__time"},"9:00")," AM"),r.a.createElement("th",{className:"grid"},r.a.createElement("span",{className:"table__time"},"12:00")," PM"),r.a.createElement("th",{className:"grid"},r.a.createElement("span",{className:"table__time"},"3:00")," PM"),r.a.createElement("th",{className:"grid"},r.a.createElement("span",{className:"table__time"},"6:00")," PM"),r.a.createElement("td",{className:"grid grid--short workout"},"Workout"))},q=Object(i.b)(function(e){return{user:e.userData.user}})(function(e){return r.a.createElement("table",{className:"schedule"},r.a.createElement("tbody",{className:"table"},r.a.createElement(F,null),e.user.schedule?e.user.schedule.map(function(e,t){return r.a.createElement(B,{key:t,day:e,index:t})}):null))}),X=function(e){return r.a.createElement("div",{className:"reference"},r.a.createElement("h2",{className:"reference__title"},e.title),r.a.createElement("h2",{className:"reference__content"},e.content),r.a.createElement("div",{className:"reference__buttons"},e.buttons.map(function(e,t){return r.a.createElement("a",{key:t,className:"btn btn--primary ".concat(e.class),href:e.url},e.icon?r.a.createElement("img",{className:"btn-logo",src:e.icon,alt:"icon"}):null,e.title," ",r.a.createElement(S.a,{path:"media/icons/Arrow.svg",svgClassName:"btn-arrow"}))})))},K=function(){return r.a.createElement("div",{className:"references"},r.a.createElement(X,{title:"Running out of products?",content:"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.",buttons:[{title:"Buy now",icon:null,url:"#",class:null}]}),r.a.createElement(X,{title:"Bod\u2022e Trainer in your pocket",content:"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.",buttons:[{title:"iOS",icon:"media/icons/apple.png",url:"#",class:"btn--short"},{title:"Android",icon:"media/icons/android.png",url:"#",class:null}]}),r.a.createElement(X,{title:"Frequently Asked Questions",content:"Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.",buttons:[{title:"Read FAQs",icon:null,url:"#",class:null}]}))},Q=function(){return r.a.createElement("div",null,r.a.createElement(D,{active:1}),r.a.createElement("div",{className:"container"},r.a.createElement(T,null),r.a.createElement(q,null),r.a.createElement(K,null)))},Y=function(){return r.a.createElement(D,{active:2})},G=function(){return r.a.createElement(D,{active:3})},J=function(){return r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement(y.a,{exact:!0,path:"".concat("/healthy_lifestyle_app","/"),component:Q}),r.a.createElement(y.a,{path:"".concat("/healthy_lifestyle_app","/dashboard"),component:Q}),r.a.createElement(y.a,{path:"".concat("/healthy_lifestyle_app","/recipes"),component:Y}),r.a.createElement(y.a,{path:"".concat("/healthy_lifestyle_app","/challenge"),component:G}),r.a.createElement(y.a,{render:function(){return r.a.createElement("h1",null,"Not found")}})))},V=(a(47),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={userData:a.props.userData.users[0]},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.userDataLoad(this.state.userData)}},{key:"render",value:function(){return r.a.createElement(J,null)}}]),t}(n.Component)),H=Object(i.b)(function(e){return{}},function(e){return{userDataLoad:function(t){return e(function(e){return{type:m,userData:e}}(t))}}})(V),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("span",{className:"loader"}," "))},ee=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={data:null,fetching:!1,error:null},a}return Object(N.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({fetching:!0,error:null}),fetch(this.props.dataUrl).then(function(e){return e.json()}).then(function(t){return e.setState({data:t,fetching:!1,error:null})}).catch(function(t){return e.setState({error:t,fetching:!1})})}},{key:"render",value:function(){var e,t=this.state,a=t.data,n=t.fetching,c=t.error,s=this.props,i=s.component,l=s.propName,u=s.propCategories,m=s.propInitialName;return r.a.createElement("div",null,!1===n?null:r.a.createElement(Z,null),null===c?null:r.a.createElement("p",null,c.message),null===a?null:0===a.length?r.a.createElement("p",null,"No data found"):r.a.createElement(i,(e={},Object(o.a)(e,l,a),Object(o.a)(e,m,u),e)))}}]),t}(r.a.Component);s.a.render(r.a.createElement(i.a,{store:v},r.a.createElement(E.a,null,r.a.createElement(ee,{component:H,dataUrl:"data.json",propName:"userData"}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/healthy_lifestyle_app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/healthy_lifestyle_app","/service-worker.js");$?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):z(e)})}}()}},[[30,2,1]]]);
//# sourceMappingURL=main.cd1b40c6.chunk.js.map