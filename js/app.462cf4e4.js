(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var i=s[r];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},r={app:0},o={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2722ffd9":"09f3aec0","chunk-6e352bc4":"3cda7fef","chunk-7680b808":"b0b00d72"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-2722ffd9":1,"chunk-6e352bc4":1,"chunk-7680b808":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var n="css/"+({}[e]||e)+"."+{"chunk-2722ffd9":"32f38308","chunk-6e352bc4":"4773d970","chunk-7680b808":"6aeaddd8"}[e]+".css",o=c.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],m.parentNode.removeChild(m),s(a)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,s){n=o[e]=[t,s]}));t.push(n[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,s[1](p)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var m=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"06da":function(e,t,s){},2241:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cursor-pointer",class:{"logo-animate":e.animate},attrs:{id:"Logo"}},[e._m(0)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"text-6xl flex items-center w-max text-gray-800"},[e._v("LA CASA "),s("span",{staticClass:"px-3 py-2 mx-1 text-4xl bg-primary-red text-white"},[e._v("DE")]),e._v(" TESORO")])}],o={name:"Logo",props:{animate:{type:Boolean,default:!0}},data:function(){return{}}},a=o,i=(s("b5a8"),s("2877")),c=Object(i["a"])(a,n,r,!1,null,"5e3d3e41",null);t["a"]=c.exports},4785:function(e,t,s){e.exports=s.p+"img/icons8-money-heist-dali.066bbe1c.svg"},"48a1":function(e,t,s){"use strict";s("06da")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),s("transition",{attrs:{name:"fade"}},[e.loading?s("div",{staticClass:"min-h-screen w-full flex  flex-col items-center justify-center fixed top-0 left-0 bg-white z-50",attrs:{id:"loading"}},[s("Logo",{staticClass:"mb-48"}),s("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 50 50"}},[s("circle",{staticClass:"path",attrs:{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"}})])],1):e._e()])],1)},o=[],a=s("5530"),i=s("2f62"),c=s("2241"),l={data:function(){return{}},components:{Logo:c["a"]},computed:Object(a["a"])({},Object(i["b"])({loading:"GET_LOADING"})),created:function(){}},u=l,p=(s("5c0b"),s("2877")),m=Object(p["a"])(u,r,o,!1,null,null,null),d=m.exports,f=s("1da1"),h=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),s("b0c0"),s("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"min-h-screen pt-20 2xl:pt-32",attrs:{id:"Home"}},[n("nav",{staticClass:"flex items-center justify-between fixed top-0 left-0 w-full py-2"},[n("Logo",{staticClass:"transform scale-50 -translate-x-16",attrs:{animate:!1}}),n("div",{staticClass:"flex flex-row items-center justify-center px-10",attrs:{id:"profile"}},[n("span",{staticClass:"font-semi-bold text-xl mr-4"},[e._v(e._s(e.user.code))]),n("img",{attrs:{src:s("4785"),alt:""}})])],1),n("div",{staticClass:"flex flex-wrap",attrs:{id:"content"}},[n("Phone",{staticClass:"w-1/2 h-full relative height-phone",attrs:{id:"phone"}}),n("div",{staticClass:"w-5/12",attrs:{id:"question"}},[n("Question")],1)],1),e.galleryItem?n("div",{staticClass:"fixed top-0 left-0 w-full h-screen p-32 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 cursor-pointer",attrs:{id:"popup"},on:{click:e.closePopup}},["image"===e.galleryItem.type?n("img",{staticClass:"h-full object-center object-contain",attrs:{src:e.galleryItem.item,alt:""},on:{click:function(e){e.stopPropagation()}}}):e._e(),"video"===e.galleryItem.type?n("video",{staticClass:"h-full object-center object-contain",attrs:{controls:""},on:{click:function(e){e.stopPropagation()}}},[n("source",{attrs:{src:e.galleryItem.item,type:"video/mp4"}})]):e._e()]):e._e()])},E=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.route,attrs:{id:"Phone"}},[n("img",{staticClass:"height-phone width-phone absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-none",attrs:{src:s("8731"),alt:""}}),n("div",{staticClass:"rounded-3xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 pt-0",staticStyle:{height:"632px !important",width:"291px !important"},attrs:{id:"phone-screen"}},[n("div",{staticClass:"flex flex-row justify-end pt-2 pr-1 mb-gray-100 pb-2",attrs:{id:"statusbar"}},[n("box-icon",{staticClass:"mr-2",attrs:{color:"white",size:"xs",name:"wifi"}}),n("box-icon",{staticClass:"mr-4",attrs:{color:"white",size:"xs",name:"battery",type:"solid"}})],1),n("div",{staticClass:"app-screen pt-0 px-4",attrs:{id:"app-screen"}},["home"===e.route?n("div",{staticClass:"flex flex-wrap",attrs:{id:"home-screen"}},e._l(e.apps,(function(t){return n("div",{key:t.name,staticClass:"app cursor-pointer flex flex-col items-center justify-center mt-8 w-1/2",on:{click:function(s){return e.redirect(t.name)}}},[n("div",{staticClass:"app-icon flex items-center justify-center py-2 px-2 rounded-lg mb-1 bg-primary-red"},[n("box-icon",{attrs:{color:"white",name:t.icon}})],1),n("span",{staticClass:"app-name text-white"},[e._v(" "+e._s(t.name)+" ")])])})),0):"messages"===e.route?n("Messages"):"news"===e.route?n("News"):"gallery"===e.route?n("Gallery"):e._e()],1)])])},v=[],y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full",attrs:{id:"Messages"}},[s("div",{staticClass:"text-gray-100 h-full relative",attrs:{id:"messages-screen"}},[null===e.whoChat?s("div",{staticClass:"chats h-full overflow-y-scroll hide-scrollbar pt-10"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:e.closeMessages}}),s("span",[e._v(" Messages ")]),s("span",{staticClass:"w-10"})],1),e._l(e.messages,(function(t,n,r){return s("div",{key:r,on:{click:function(t){return e.openChat(n)}}},[s("div",{staticClass:"chat-name flex items-center justify-between py-2 hover:bg-blue-900 px-4 my-2 rounded-lg cursor-pointer"},[s("span",{staticClass:"flex flex-col"},[s("span",{},[e._v(" "+e._s(n)+" ")]),s("span",{staticClass:"text-xs text-gray-300"},[e._v(" "+e._s(t[0].message)+" ")])]),0!==e.unreadCount(n)?s("div",{staticClass:"chat-count text-xs bg-gray-600 px-2 py-1 rounded-2xl"},[e._v(e._s(e.unreadCount(n)))]):e._e()])])}))],2):s("div",{staticClass:"personal-chat flex flex-col items-start justify-between h-full"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:function(t){e.whoChat=null}}}),s("span",[e._v(" "+e._s(e.whoChat)+" ")]),s("span",{staticClass:"w-10"})],1),s("div",{staticClass:"messages pb-5 flex flex-col-reverse"},e._l(e.messages[e.whoChat],(function(t,n){return s("div",{key:n,staticClass:"message my-2 mr-6 bg-indigo-800 px-4 py-2 rounded-lg rounded-bl-none"},[e._v(" "+e._s(t.message)+" ")])})),0)])])])},_=[],w=(s("4de4"),{name:"",data:function(){return{whoChat:null}},mounted:function(){this.questions[this.progress].events&&"message"===this.questions[this.progress].events[this.currentEvent].type&&this.$store.dispatch("NEXT_EVENT")},computed:Object(a["a"])({},Object(i["b"])({route:"GET_ROUTE",messages:"GET_MESSAGES",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT",questions:"GET_QUESTIONS"})),methods:{closeMessages:function(){this.$store.commit("SET_ROUTE","home")},openChat:function(e){this.$store.commit("MARK_AS_READ",e),this.whoChat=e},unreadCount:function(e){return this.messages[e].filter((function(e){return!e.read})).length}}}),x=w,T=Object(p["a"])(x,y,_,!1,null,null,null),O=T.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full",attrs:{id:"News"}},[s("div",{staticClass:"text-gray-100 h-full relative",attrs:{id:"news-screen"}},[s("div",{staticClass:" overflow-y-scroll hide-scrollbar h-full pt-10"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:e.closeApp}}),s("span",[e._v(" News ")]),s("span",{staticClass:"w-10"})],1),s("div",{staticClass:"posts-wrapper flex flex-col-reverse mt-4"},e._l(e.posts,(function(t,n){return s("div",{key:n,staticClass:"post bg-red-600 bg-opacity-40 rounded-lg py-3 px-4 my-4"},[s("h4",{staticClass:"title text-lg font-bold mb-1"},[e._v(e._s(t.title))]),s("p",{staticClass:"description text-normal leading-5"},[e._v(" "+e._s(t.description)+" ")])])})),0)])])])},S=[],j={name:"",data:function(){return{}},mounted:function(){this.questions[this.progress].events&&"news"===this.questions[this.progress].events[this.currentEvent].type&&this.$store.dispatch("NEXT_EVENT")},computed:Object(a["a"])({},Object(i["b"])({route:"GET_ROUTE",posts:"GET_POSTS",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT",questions:"GET_QUESTIONS"})),methods:{closeApp:function(){this.$store.commit("SET_ROUTE","home")}}},N=j,R=Object(p["a"])(N,C,S,!1,null,null,null),k=R.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full",attrs:{id:"Gallery"}},[s("div",{staticClass:"text-gray-100 h-full relative",attrs:{id:"gallery-screen"}},[s("div",{staticClass:" overflow-y-scroll hide-scrollbar h-full pt-10"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:e.closeApp}}),s("span",[e._v(" Gallery ")]),s("span",{staticClass:"w-10"})],1),s("div",{staticClass:"gallery-wrapper flex mt-4 flex-wrap"},e._l(e.gallery,(function(t,n){return s("div",{key:n,staticClass:"w-1/2 px-2 overflow-hidden rounded-xl"},["image"===t.type?s("div",{staticClass:"image w-1/2 h-32 flex items-center justify-centera w-full cursor-pointer my-4",on:{click:function(s){return e.openPopup(t.result,t.type)}}},[s("img",{staticClass:"h-full w-full object-center object-cover",attrs:{src:t.result,alt:""}})]):e._e(),"video"===t.type?s("div",{staticClass:"video w-1/2 h-32 bg-white flex items-center justify-centera rounded-xl w-full cursor-pointer",on:{click:function(s){return e.openPopup(t.result,t.type)}}},[s("video",{staticClass:"w-full object-center object-cover"},[s("source",{attrs:{src:t.result,type:"video/mp4"}})])]):e._e()])})),0)])])])},A=[],L={name:"",data:function(){return{}},mounted:function(){this.questions[this.progress].events&&"gallery"===this.questions[this.progress].events[this.currentEvent].type&&this.$store.dispatch("NEXT_EVENT")},computed:Object(a["a"])({},Object(i["b"])({route:"GET_ROUTE",gallery:"GET_GALLERY",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT",questions:"GET_QUESTIONS"})),methods:{openPopup:function(e,t){this.$store.commit("SET_GALLERY_ITEM",{item:e,type:t})},closeApp:function(){this.$store.commit("SET_ROUTE","home")}}},I=L,P=Object(p["a"])(I,G,A,!1,null,null,null),M=P.exports,U={name:"Phone",components:{Messages:O,News:k,Gallery:M},data:function(){return{apps:[{name:"messages",icon:"chat"},{name:"gallery",icon:"image"},{name:"news",icon:"news"}]}},methods:{redirect:function(e){this.$store.commit("SET_ROUTE",e)}},computed:Object(a["a"])({},Object(i["b"])({route:"GET_ROUTE"}))},q=U,$=(s("68ef"),Object(p["a"])(q,b,v,!1,null,null,null)),D=$.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Question px-10"}},[s("h2",{staticClass:"text-2xl font-bold text-center mt-32"},[e._v(" "+e._s(e.questions[e.progress].question)+" ")]),s("div",{staticClass:"flex items-center justify-between mt-20",attrs:{id:"input-wrapper"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"appearance-none w-full px-6 py-2 rounded-xl bg-gray-100 font-gray-800 focus:outline-none mr-4",attrs:{type:"text",placeholder:"Enter your answer here"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}}),s("button",{staticClass:"rounded-xl text-white px-6 py-2 transform hover:-translate-y-1 transition-all duration-200 ease-in-out",class:{"bg-red-300":e.isDisabled,"bg-red-700":!e.isDisabled},on:{click:e.submitAnswer}},[e._v("Submit")])])])},H=[],z=s("beb6"),Q={name:"",data:function(){return{answer:null}},mounted:function(){for(var e=0;e<this.questions.length;e++)if(e===this.progress)this.questions[this.progress].events&&this.$store.dispatch("LOAD_EVENT",{event:this.questions[e].events[0],options:{silent:!1,setCurrentEvent:!0,currentEvent:0}});else if(this.questions[e].events)for(var t=0;t<this.questions.length;t++)this.$store.dispatch("LOAD_EVENT",{event:this.questions[e].events[t],options:{silent:!0}})},methods:{submitAnswer:function(){this.$toast("Sending information to shreesh"),!0===this.questions[this.progress].elimination?this.$store.dispatch("WRONG_ATTEMPT"):this.$store.dispatch("NEXT_QUESTION")}},computed:Object(a["a"])(Object(a["a"])({},Object(i["b"])({questions:"GET_QUESTIONS",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT"})),{},{isDisabled:function(){return!!z[this.progress].events&&this.currentEvent!==z[this.progress].events.length}})},Y=Q,B=Object(p["a"])(Y,V,H,!1,null,null,null),W=B.exports,X={name:"Home",components:{Phone:D,Logo:c["a"],Question:W},methods:{closePopup:function(){this.$store.commit("SET_GALLERY_ITEM",null)}},computed:Object(a["a"])({},Object(i["b"])({user:"GET_USER",galleryItem:"GET_GALLERY_ITEM"}))},K=X,J=(s("48a1"),Object(p["a"])(K,g,E,!1,null,"48d7d5c2",null)),F=J.exports,Z=s("dc59"),ee=s("e71f"),te=s("ea7b"),se=s("2909"),ne=(s("d81d"),s("99af"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Messages-Icon"}},[s("box-icon",{attrs:{color:"white",size:"sm",name:"chat"}})],1)}),re=[],oe={name:"",data:function(){return{}}},ae=oe,ie=Object(p["a"])(ae,ne,re,!1,null,null,null),ce=ie.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"News-Icon"}},[s("box-icon",{attrs:{color:"white",size:"sm",name:"news"}})],1)},ue=[],pe={name:"",data:function(){return{}}},me=pe,de=Object(p["a"])(me,le,ue,!1,null,null,null),fe=de.exports,he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Gallery-Icon"}},[s("box-icon",{attrs:{color:"white",size:"sm",name:"image"}})],1)},ge=[],Ee={name:"",data:function(){return{}}},be=Ee,ve=Object(p["a"])(be,he,ge,!1,null,null,null),ye=ve.exports,_e={state:{route:"home",messages:[],posts:[],gallery:[]},mutations:{SET_ROUTE:function(e,t){e.route=t},PUSH_MESSAGE:function(e,t){e.messages.push(t)},PUSH_POST:function(e,t){e.posts.push(t)},PUSH_GALLERY_ITEM:function(e,t){e.gallery.push(t)},MARK_AS_READ:function(e,t){e.messages=e.messages.map((function(e){return e.name===t&&(e.read=!0),e}))}},actions:{LOAD_EVENT:function(e,t){var s=e.dispatch,n=t.event,r=t.options;switch(n.type){case"message":s("LOAD_MESSAGES",{event:n,options:r});break;case"news":s("LOAD_NEWS",{event:n,options:r});break;case"gallery":s("LOAD_GALLERY",{event:n,options:r});break}},LOAD_MESSAGES:function(e,t){for(var s=e.commit,r=t.event,o=t.options,i=0;i<r.messages.length;i++)s("PUSH_MESSAGE",Object(a["a"])(Object(a["a"])({},r.messages[i]),{},{read:o.silent})),o.setCurrentEvent&&s("SET_CURRENT_EVENT",o.currentEvent),o.silent||n["a"].$toast("".concat(r.messages[i].name,": ").concat(r.messages[i].content),{icon:ce})},LOAD_NEWS:function(e,t){for(var s=e.commit,r=t.event,o=t.options,a=0;a<r.posts.length;a++)s("PUSH_POST",r.posts[a]),o.setCurrentEvent&&s("SET_CURRENT_EVENT",o.currentEvent),o.silent||n["a"].$toast("News: ".concat(r.posts[a].title),{icon:fe})},LOAD_GALLERY:function(e,t){for(var s=e.commit,r=t.event,o=t.options,a=0;a<r.items.length;a++)s("PUSH_GALLERY_ITEM",r.items[a]),o.setCurrentEvent&&s("SET_CURRENT_EVENT",o.currentEvent),o.silent||n["a"].$toast("Gallery: there is a new ".concat(r.items[a].type),{icon:ye})}},getters:{GET_ROUTE:function(e){return e.route},GET_POSTS:function(e){return e.posts},GET_GALLERY:function(e){return e.gallery.map((function(e){switch(e.src){case"something":e.result=s("cf05");break;case"somethingelse":e.result=s("7e30");break;case"video":e.result=s("ef65");break}return e}))},GET_MESSAGES:function(e){var t={};return Object(se["a"])(e.messages).reverse().forEach((function(e){t[e.name]||(t[e.name]=[]),t[e.name].push({message:e.content,read:e.read})})),t}}};n["a"].use(i["a"]);var we=new i["a"].Store({state:{loading:!1,user:null,galleryItem:null,progress:null,currentEvent:null,questions:z},mutations:{SET_LOADING:function(e,t){e.loading=t},SET_USER:function(e,t){e.user=t,e.progress=t.progress},SET_GALLERY_ITEM:function(e,t){e.galleryItem=t},SET_CURRENT_EVENT:function(e,t){e.currentEvent=t},INCREMENT_EVENT:function(e){e.currentEvent+=1},INCREMENT_PROGRESS:function(e){e.progress+=1},INCREMENT_WRONG_ATTEMPT:function(e){e.user.wrongAttempts+=1}},actions:{NEXT_QUESTION:function(e){var t=e.commit,s=e.dispatch,n=e.state;n.progress+1<n.questions.length?(t("INCREMENT_PROGRESS"),Object(ee["j"])(Object(ee["b"])(Z["a"],"users",n.user.id),{progress:n.progress}).then((function(e){})).catch((function(e){console.error(e)})),n.questions[n.progress].events?s("LOAD_EVENT",{event:n.questions[n.progress].events[0],options:{silent:!1,setCurrentEvent:!0,currentEvent:0}}):t("SET_CURRENT_EVENT",null)):Object(ee["j"])(Object(ee["b"])(Z["a"],"users",n.user.id),{completed:!0,completedTime:new Date}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},NEXT_EVENT:function(e){var t=e.commit,s=e.dispatch,n=e.state;n.currentEvent<z[n.progress].events.length-1?(t("INCREMENT_EVENT"),s("LOAD_EVENT",{event:z[n.progress].events[n.currentEvent],options:{silent:!1}})):n.currentEvent===z[n.progress].events.length-1&&t("INCREMENT_EVENT")},WRONG_ATTEMPT:function(e){var t=e.commit,s=e.state;t("INCREMENT_WRONG_ATTEMPT"),Object(ee["j"])(Object(ee["b"])(Z["a"],"users",s.user.id),{wrongAttempts:Object(ee["e"])(1)}).then((function(e){})).catch((function(e){console.error(e)})),s.user.wrongAttempts>=3?Object(ee["j"])(Object(ee["b"])(Z["a"],"users",s.user.id),{eliminated:!0}).then((function(e){n["a"].$toast.error("Shreesh bloked you!"),Ce.push({name:"Result"})})).catch((function(e){console.error(e)})):n["a"].$toast.error("".concat(3-s.user.wrongAttempts," attempts left!"))}},getters:{GET_LOADING:function(e){return e.loading},GET_USER:function(e){return e.user},GET_GALLERY_ITEM:function(e){return e.galleryItem},GET_QUESTIONS:function(e){return e.questions},GET_PROGRESS:function(e){return e.progress},GET_CURRENT_EVENT:function(e){return e.currentEvent}},modules:{phone:_e}});n["a"].use(h["a"]);var xe=[{path:"/",name:"Home",component:F,meta:{requiresAuth:!0}},{path:"/lobby",name:"Lobby",component:function(){return s.e("chunk-6e352bc4").then(s.bind(null,"417e"))},meta:{requiresAuth:!0}},{path:"/result",name:"Result",component:function(){return s.e("chunk-2722ffd9").then(s.bind(null,"eeac"))},meta:{requiresAuth:!0}},{path:"/sign-in",name:"Sign-In",component:function(){return s.e("chunk-7680b808").then(s.bind(null,"54e2"))}}],Te=new h["a"]({mode:"history",base:"/",routes:xe}),Oe=function(){return new Promise((function(e,t){var s=Object(te["b"])(),n=Object(te["c"])(s,(function(t){n(),e(t)}),t)}))};Te.beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,s,n){var r,o,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.name,s.name),we.commit("SET_LOADING",!0),r=t.matched.some((function(e){return e.meta.requiresAuth})),e.next=5,Oe();case 5:if(o=e.sent,!r){e.next=19;break}if(o){e.next=11;break}n("Sign-In"),e.next=17;break;case 11:return a=[Object(ee["c"])(Object(ee["b"])(Z["a"],"admin","admin")),Object(ee["c"])(Object(ee["b"])(Z["a"],"users",o.uid))],e.next=14,Promise.all(a);case 14:i=e.sent,we.commit("SET_USER",i[1].data()),!0===i[1].data().admin?n():!0===i[1].data().eliminated?"Result"===t.name?n():n("Result"):i[0].data().started?!0!==i[1].data().completed?"Home"===t.name?n():n({name:"Home"}):"Result"===t.name?n():n("Result"):"Lobby"===t.name?n():n("Lobby");case 17:e.next=20;break;case 19:n();case 20:we.commit("SET_LOADING",!1);case 21:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}());var Ce=Te;function Se(e){var t=e.$options.title;if(t){var s="function"===typeof t?t.call(e):t;return s+" - La Casa de Tesoro"}return"La Casa de Tesoro"}var je={created:function(){var e=Se(this);e&&(document.title=e)}},Ne=s("6c42"),Re=(s("b972"),s("3357"),s("da96"),{transition:"Vue-Toastification__bounce",maxToasts:20,newestOnTop:!0,position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button"});n["a"].use(Ne["a"],Re),n["a"].mixin(je),n["a"].config.productionTip=!1,new n["a"]({router:Ce,store:we,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"68ef":function(e,t,s){"use strict";s("8828")},"7e30":function(e,t,s){e.exports=s.p+"img/Screenshot.d1f004b8.png"},8731:function(e,t,s){e.exports=s.p+"img/iphone-transparent.92a497b2.png"},8828:function(e,t,s){},"9c0c":function(e,t,s){},b5a8:function(e,t,s){"use strict";s("cc66")},beb6:function(e){e.exports=JSON.parse('[{"question":"This is a question and there is an answer to this so you better think!","events":[{"type":"gallery","items":[{"name":"Something","type":"image","src":"something"},{"name":"Something else","type":"image","src":"somethingelse"},{"name":"Video","type":"video","src":"video"}]},{"type":"news","posts":[{"title":"this is the title of the news post","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}]},{"type":"message","messages":[{"name":"Shreesh","content":"Hey how you doing"},{"name":"Madhu","content":"YO shreesh is the culprit"}]}]},{"question":"This is also a question and there is an answer to this also so you better think again!","elimination":true,"events":[{"type":"gallery","items":[{"name":"Something","type":"image","src":"something"},{"name":"Something else","type":"image","src":"somethingelse"},{"name":"Video","type":"video","src":"video"}]},{"type":"news","posts":[{"title":"this is the title of the news post","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}]},{"type":"message","messages":[{"name":"Shreesh","content":"Hey how you doing"},{"name":"Madhu","content":"YO shreesh is the culprit"}]}]},{"question":"Now answer this goddamn question already!"}]')},cc66:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},dc59:function(e,t,s){"use strict";var n=s("260b"),r=s("e71f"),o={apiKey:"AIzaSyBmrQKOUHkhD7Q-v1ghxrWjmwvPLPRikQk",authDomain:"la-casa-de-tesoro.firebaseapp.com",projectId:"la-casa-de-tesoro",storageBucket:"la-casa-de-tesoro.appspot.com",messagingSenderId:"749398179945",appId:"1:749398179945:web:86d82f2b49c8ca92ec22f8"},a=Object(n["a"])(o),i=Object(r["d"])(a);t["a"]=i},ef65:function(e,t,s){e.exports=s.p+"media/Video.c52df787.mp4"}});
//# sourceMappingURL=app.462cf4e4.js.map