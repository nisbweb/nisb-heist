(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,h=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,a=1;a<s.length;a++){var i=s[a];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2722ffd9":"09f3aec0","chunk-6e352bc4":"3cda7fef","chunk-f039f598":"3ca11856"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-2722ffd9":1,"chunk-6e352bc4":1,"chunk-f039f598":1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=new Promise((function(t,s){for(var n="css/"+({}[e]||e)+"."+{"chunk-2722ffd9":"32f38308","chunk-6e352bc4":"4773d970","chunk-f039f598":"628006af"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){l=h[i],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],d.parentNode.removeChild(d),s(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,s){n=r[e]=[t,s]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var s=r[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,s[1](h)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},2019:function(e,t,s){},2241:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cursor-pointer",class:{"logo-animate":e.animate},attrs:{id:"Logo"}},[e._m(0)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"text-6xl flex items-center w-max text-gray-800"},[e._v("LA CASA "),s("span",{staticClass:"px-3 py-2 mx-1 text-4xl bg-primary-red text-white"},[e._v("DE")]),e._v(" TESORO")])}],r={name:"Logo",props:{animate:{type:Boolean,default:!0}},data:function(){return{}}},o=r,i=(s("b5a8"),s("2877")),c=Object(i["a"])(o,n,a,!1,null,"5e3d3e41",null);t["a"]=c.exports},4785:function(e,t,s){e.exports=s.p+"img/icons8-money-heist-dali.066bbe1c.svg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),s("transition",{attrs:{name:"fade"}},[e.loading?s("div",{staticClass:"min-h-screen w-full flex  flex-col items-center justify-center fixed top-0 left-0 bg-white z-50",attrs:{id:"loading"}},[s("Logo",{staticClass:"mb-48"}),s("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 50 50"}},[s("circle",{staticClass:"path",attrs:{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"}})])],1):e._e()])],1)},r=[],o=s("5530"),i=s("2f62"),c=s("2241"),l={data:function(){return{}},components:{Logo:c["a"]},computed:Object(o["a"])({},Object(i["b"])({loading:"GET_LOADING"})),created:function(){}},u=l,h=(s("5c0b"),s("2877")),d=Object(h["a"])(u,a,r,!1,null,null,null),m=d.exports,p=s("1da1"),f=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),s("b0c0"),s("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"min-h-screen pt-20 2xl:pt-32",attrs:{id:"Home"}},[n("nav",{staticClass:"flex items-center justify-between fixed top-0 left-0 w-full py-2"},[n("Logo",{staticClass:"transform scale-50 -translate-x-16",attrs:{animate:!1}}),n("div",{staticClass:"flex flex-row items-center justify-center px-10",attrs:{id:"profile"}},[n("span",{staticClass:"font-semi-bold text-xl mr-4"},[e._v(e._s(e.user.code))]),n("img",{attrs:{src:s("4785"),alt:""}}),n("button",{staticClass:"ml-2",on:{click:e.signOut}},[e._v("Sign out")])])],1),n("div",{staticClass:"flex flex-wrap",attrs:{id:"content"}},[n("Phone",{staticClass:"w-1/2 h-full relative height-phone",attrs:{id:"phone"}}),n("div",{staticClass:"w-5/12",attrs:{id:"question"}},[n("Question")],1)],1),e.galleryItem?n("div",{staticClass:"fixed top-0 left-0 w-full h-screen p-32 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 cursor-pointer",attrs:{id:"popup"},on:{click:e.closePopup}},["image"===e.galleryItem.type?n("img",{staticClass:"h-full object-center object-contain",attrs:{src:e.galleryItem.item,alt:""},on:{click:function(e){e.stopPropagation()}}}):e._e(),"video"===e.galleryItem.type?n("video",{staticClass:"h-full object-center object-contain",attrs:{controls:""},on:{click:function(e){e.stopPropagation()}}},[n("source",{attrs:{src:e.galleryItem.item,type:"video/mp4"}})]):e._e()]):e._e()])},y=[],b=s("ea7b"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.route,attrs:{id:"Phone"}},[n("img",{staticClass:"height-phone width-phone absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-none",attrs:{src:s("8731"),alt:""}}),n("div",{staticClass:"rounded-3xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 pt-0",staticStyle:{height:"632px !important",width:"291px !important"},attrs:{id:"phone-screen"}},[n("div",{staticClass:"flex flex-row justify-end pt-2 pr-1 mb-gray-100 pb-2",attrs:{id:"statusbar"}},[n("box-icon",{staticClass:"mr-2",attrs:{color:"white",size:"xs",name:"wifi"}}),n("box-icon",{staticClass:"mr-4",attrs:{color:"white",size:"xs",name:"battery",type:"solid"}})],1),n("div",{staticClass:"app-screen pt-0 px-4",attrs:{id:"app-screen"}},["home"===e.route?n("div",{staticClass:"flex flex-wrap",attrs:{id:"home-screen"}},e._l(e.apps,(function(t){return n("div",{key:t.name,staticClass:"app cursor-pointer flex flex-col items-center justify-center mt-8 w-1/2",on:{click:function(s){return e.redirect(t.name)}}},[n("div",{staticClass:"app-icon flex items-center justify-center py-2 px-2 rounded-lg mb-1 bg-primary-red"},[n("box-icon",{attrs:{color:"white",name:t.icon}})],1),n("span",{staticClass:"app-name text-white"},[e._v(" "+e._s(t.name)+" ")])])})),0):"messages"===e.route?n("Messages"):"news"===e.route?n("News"):"gallery"===e.route?n("Gallery"):e._e()],1)])])},E=[],w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full",attrs:{id:"Messages"}},[s("div",{staticClass:"text-gray-100 h-full relative",attrs:{id:"messages-screen"}},[null===e.whoChat?s("div",{staticClass:"chats h-full overflow-y-scroll hide-scrollbar pt-10"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:e.closeMessages}}),s("span",[e._v(" Messages ")]),s("span",{staticClass:"w-10"})],1),e._l(e.messages,(function(t,n,a){return s("div",{key:a,on:{click:function(t){return e.openChat(n)}}},[s("div",{staticClass:"chat-name flex items-center justify-between py-2 hover:bg-blue-900 px-4 my-2 rounded-lg cursor-pointer"},[s("span",{staticClass:"flex flex-col"},[s("span",{},[e._v(" "+e._s(n)+" ")]),s("span",{staticClass:"text-xs text-gray-300"},[e._v(" "+e._s(t[0].message)+" ")])]),0!==e.unreadCount(n)?s("div",{staticClass:"chat-count text-xs bg-gray-600 px-2 py-1 rounded-2xl"},[e._v(e._s(e.unreadCount(n)))]):e._e()])])}))],2):s("div",{staticClass:"personal-chat flex flex-col items-start justify-between h-full"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:function(t){e.whoChat=null}}}),s("span",[e._v(" "+e._s(e.whoChat)+" ")]),s("span",{staticClass:"w-10"})],1),s("div",{staticClass:"messages pb-5 flex flex-col-reverse overflow-y-scroll hide-scrollbar w-full"},e._l(e.messages[e.whoChat],(function(t,n){return s("div",{key:n,staticClass:"message w-max my-2 mr-6 bg-indigo-800 px-4 py-2 rounded-lg rounded-bl-none"},[e._v(" "+e._s(t.message)+" ")])})),0)])])])},_=[],T=(s("4de4"),{name:"",data:function(){return{whoChat:null}},mounted:function(){this.questions[this.progress].events&&"message"===this.questions[this.progress].events[this.currentEvent].type&&this.$store.dispatch("NEXT_EVENT")},computed:Object(o["a"])({},Object(i["b"])({route:"GET_ROUTE",messages:"GET_MESSAGES",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT",questions:"GET_QUESTIONS"})),methods:{closeMessages:function(){this.$store.commit("SET_ROUTE","home")},openChat:function(e){this.$store.commit("MARK_AS_READ",e),this.whoChat=e},unreadCount:function(e){return this.messages[e].filter((function(e){return!e.read})).length}}}),x=T,S=Object(h["a"])(x,w,_,!1,null,null,null),C=S.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full",attrs:{id:"News"}},[s("div",{staticClass:"text-gray-100 h-full relative",attrs:{id:"news-screen"}},[s("div",{staticClass:" overflow-y-scroll hide-scrollbar h-full pt-10"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:e.closeApp}}),s("span",[e._v(" News ")]),s("span",{staticClass:"w-10"})],1),s("div",{staticClass:"posts-wrapper flex flex-col-reverse mt-4"},e._l(e.posts,(function(t,n){return s("div",{key:n,staticClass:"post bg-red-600 bg-opacity-40 rounded-lg py-3 px-4 my-4"},[s("h4",{staticClass:"title text-lg font-bold mb-1"},[e._v(e._s(t.title))]),s("p",{staticClass:"description text-normal leading-5"},[e._v(" "+e._s(t.description)+" ")])])})),0)])])])},k=[],j={name:"",data:function(){return{}},mounted:function(){this.questions[this.progress].events&&"news"===this.questions[this.progress].events[this.currentEvent].type&&this.$store.dispatch("NEXT_EVENT")},computed:Object(o["a"])({},Object(i["b"])({route:"GET_ROUTE",posts:"GET_POSTS",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT",questions:"GET_QUESTIONS"})),methods:{closeApp:function(){this.$store.commit("SET_ROUTE","home")}}},A=j,I=Object(h["a"])(A,O,k,!1,null,null,null),N=I.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-full",attrs:{id:"Gallery"}},[s("div",{staticClass:"text-gray-100 h-full relative",attrs:{id:"gallery-screen"}},[s("div",{staticClass:" overflow-y-scroll hide-scrollbar h-full pt-10"},[s("div",{staticClass:"header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2"},[s("box-icon",{staticClass:"mr-6 mb-2 cursor-pointer",attrs:{size:"xs",name:"left-arrow",color:"white"},on:{click:e.closeApp}}),s("span",[e._v(" Gallery ")]),s("span",{staticClass:"w-10"})],1),s("div",{staticClass:"gallery-wrapper flex mt-4 flex-wrap"},e._l(e.gallery,(function(t,n){return s("div",{key:n,staticClass:"w-1/2 px-2 overflow-hidden rounded-xl my-2"},["image"===t.type?s("div",{staticClass:"image w-1/2 h-32 flex items-center justify-centera w-full cursor-pointer my-4",on:{click:function(s){return e.openPopup(t.result,t.type)}}},[s("img",{staticClass:"h-full w-full object-center object-cover",attrs:{src:t.result,alt:""}})]):e._e(),"video"===t.type?s("div",{staticClass:"video w-1/2 h-32 bg-gray-700 flex items-center justify-centera rounded-xl w-full cursor-pointer",on:{click:function(s){return e.openPopup(t.result,t.type)}}},[s("video",{staticClass:"w-full object-center object-cover"},[s("source",{attrs:{src:t.result,type:"video/mp4"}})])]):e._e()])})),0)])])])},M=[],P={name:"",data:function(){return{}},mounted:function(){this.questions[this.progress].events&&"gallery"===this.questions[this.progress].events[this.currentEvent].type&&this.$store.dispatch("NEXT_EVENT")},computed:Object(o["a"])({},Object(i["b"])({route:"GET_ROUTE",gallery:"GET_GALLERY",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT",questions:"GET_QUESTIONS"})),methods:{openPopup:function(e,t){this.$store.commit("SET_GALLERY_ITEM",{item:e,type:t})},closeApp:function(){this.$store.commit("SET_ROUTE","home")}}},G=P,L=Object(h["a"])(G,R,M,!1,null,null,null),H=L.exports,D={name:"Phone",components:{Messages:C,News:N,Gallery:H},data:function(){return{apps:[{name:"messages",icon:"chat"},{name:"gallery",icon:"image"},{name:"news",icon:"news"}]}},methods:{redirect:function(e){this.$store.commit("SET_ROUTE",e)}},computed:Object(o["a"])({},Object(i["b"])({route:"GET_ROUTE"}))},q=D,B=(s("68ef"),Object(h["a"])(q,v,E,!1,null,null,null)),U=B.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.questions[e.progress].last&&e.isDisabled?e._e():s("div",{attrs:{id:"Question px-10"}},[s("div",[s("h2",{staticClass:"text-2xl font-bold text-center mt-32"},e._l(e.questions[e.progress].question.split("\n"),(function(t,n){return s("span",{key:n},[e._v(" "+e._s(t)),s("br")])})),0),"MCQ"===e.questions[e.progress].type?s("div",{staticClass:"flex flex-col items-center justify-between mt-20",attrs:{id:"MCQ-wrapper"}},[e._l(e.questions[e.progress].options,(function(t,n){return s("div",{key:n,staticClass:"text-center my-2 w-full rounded-xl text-gray-800 px-6 py-2 transition-all duration-200 ease-in-out border hover:bg-blue-100 bg-opacity-10",class:{"bg-blue-800":e.answer===t},on:{click:function(s){return e.selectOption(t)}}},[e._v(e._s(t))])})),s("button",{staticClass:"w-full rounded-xl text-white px-6 py-2 transform hover:-translate-y-1 transition-all duration-200 ease-in-out my-2",class:{"bg-red-300":e.isDisabled,"bg-red-700":!e.isDisabled},attrs:{disabled:e.isDisabled},on:{click:e.submitAnswer}},[e._v("Submit")])],2):s("div",{staticClass:"flex items-center justify-between mt-20",attrs:{id:"input-wrapper"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"appearance-none w-full px-6 py-2 rounded-xl bg-gray-100 font-gray-800 focus:outline-none mr-4",attrs:{type:"text",placeholder:"Enter your answer here"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}}),s("button",{staticClass:"rounded-xl text-white px-6 py-2 transform hover:-translate-y-1 transition-all duration-200 ease-in-out",class:{"bg-red-300":e.isDisabled,"bg-red-700":!e.isDisabled},attrs:{disabled:e.isDisabled||null==e.answer},on:{click:e.submitAnswer}},[e._v("Submit")])])])])},$=[],W=s("beb6"),z={name:"",data:function(){return{loading:!1,answer:null}},mounted:function(){for(var e=0;e<=this.progress;e++)if(e===this.progress)this.questions[this.progress].events&&this.$store.dispatch("LOAD_EVENT",{event:this.questions[this.progress].events[0],options:{silent:!1,setCurrentEvent:!0,currentEvent:0}});else if(this.questions[e].events)for(var t=0;t<this.questions[e].events.length;t++)this.$store.dispatch("LOAD_EVENT",{event:this.questions[e].events[t],options:{silent:!0}})},methods:{selectOption:function(e){this.answer=e},submitAnswer:function(){var e=this;this.loading=!0,!0===this.questions[this.progress].elimination&&this.$toast(this.questions[this.progress].message),fetch("https://us-central1-la-casa-de-tesoro.cloudfunctions.net/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:"question_".concat(this.progress+1),answer:this.answer})}).then((function(e){return e.json()})).then((function(t){console.log(t),!0===t.success&&!0===t.submission?e.$store.dispatch("NEXT_QUESTION"):(e.$toast.error("Incorrect answer"),!0===e.questions[e.progress].elimination&&e.$store.dispatch("WRONG_ATTEMPT"))})).catch((function(t){console.error(t),t.response&&e.$toast.error(t.response.error)})).finally((function(){e.loading=!1,e.answer=null}))}},computed:Object(o["a"])(Object(o["a"])({},Object(i["b"])({questions:"GET_QUESTIONS",progress:"GET_PROGRESS",currentEvent:"GET_CURRENT_EVENT"})),{},{isDisabled:function(){return!0===this.loading||!!W[this.progress].events&&this.currentEvent!==W[this.progress].events.length}})},Q=z,Y=Object(h["a"])(Q,V,$,!1,null,null,null),K=Y.exports,J={name:"Home",components:{Phone:U,Logo:c["a"],Question:K},methods:{signOut:function(){var e=this,t=Object(b["b"])();Object(b["e"])(t).then((function(){e.$router.push({name:"Sign-In"})})).catch((function(e){console.error(e)}))},closePopup:function(){this.$store.commit("SET_GALLERY_ITEM",null)}},computed:Object(o["a"])({},Object(i["b"])({user:"GET_USER",galleryItem:"GET_GALLERY_ITEM"}))},F=J,X=(s("fb26"),Object(h["a"])(F,g,y,!1,null,"e335d4be",null)),Z=X.exports,ee=s("dc59"),te=s("e71f"),se=s("2909"),ne=(s("d81d"),s("99af"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Messages-Icon"}},[s("box-icon",{attrs:{color:"white",size:"sm",name:"chat"}})],1)}),ae=[],re={name:"",data:function(){return{}}},oe=re,ie=Object(h["a"])(oe,ne,ae,!1,null,null,null),ce=ie.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"News-Icon"}},[s("box-icon",{attrs:{color:"white",size:"sm",name:"news"}})],1)},ue=[],he={name:"",data:function(){return{}}},de=he,me=Object(h["a"])(de,le,ue,!1,null,null,null),pe=me.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Gallery-Icon"}},[s("box-icon",{attrs:{color:"white",size:"sm",name:"image"}})],1)},ge=[],ye={name:"",data:function(){return{}}},be=ye,ve=Object(h["a"])(be,fe,ge,!1,null,null,null),Ee=ve.exports,we={state:{route:"home",messages:[{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1},{name:"Madhu",content:"Hello guys",read:!1}],posts:[],gallery:[]},mutations:{SET_ROUTE:function(e,t){e.route=t},PUSH_MESSAGE:function(e,t){e.messages.push(t)},PUSH_POST:function(e,t){e.posts.push(t)},PUSH_GALLERY_ITEM:function(e,t){e.gallery.push(t)},MARK_AS_READ:function(e,t){e.messages=e.messages.map((function(e){return e.name===t&&(e.read=!0),e}))}},actions:{LOAD_EVENT:function(e,t){var s=e.dispatch,n=t.event,a=t.options;switch(n.type){case"message":s("LOAD_MESSAGES",{event:n,options:a});break;case"news":s("LOAD_NEWS",{event:n,options:a});break;case"gallery":s("LOAD_GALLERY",{event:n,options:a});break}},LOAD_MESSAGES:function(e,t){for(var s=e.commit,a=t.event,r=t.options,i=0;i<a.messages.length;i++)s("PUSH_MESSAGE",Object(o["a"])(Object(o["a"])({},a.messages[i]),{},{read:r.silent})),r.setCurrentEvent&&s("SET_CURRENT_EVENT",r.currentEvent),r.silent||n["a"].$toast("".concat(a.messages[i].name,": ").concat(a.messages[i].content),{icon:ce})},LOAD_NEWS:function(e,t){for(var s=e.commit,a=t.event,r=t.options,o=0;o<a.posts.length;o++)s("PUSH_POST",a.posts[o]),r.setCurrentEvent&&s("SET_CURRENT_EVENT",r.currentEvent),r.silent||n["a"].$toast("News: ".concat(a.posts[o].title),{icon:pe})},LOAD_GALLERY:function(e,t){for(var s=e.commit,a=t.event,r=t.options,o=0;o<a.items.length;o++)s("PUSH_GALLERY_ITEM",a.items[o]),r.setCurrentEvent&&s("SET_CURRENT_EVENT",r.currentEvent),r.silent||n["a"].$toast("Gallery: there is a new ".concat(a.items[o].type),{icon:Ee})}},getters:{GET_ROUTE:function(e){return e.route},GET_POSTS:function(e){return e.posts},GET_GALLERY:function(e){return e.gallery.map((function(e){switch(e.src){case"vp_tied":e.result=s("c6aa");break;case"poster":e.result=s("7490");break;case"cctv":e.result=s("9225");break;case"prof":e.result=s("9d8c");break}return e}))},GET_MESSAGES:function(e){var t={};return Object(se["a"])(e.messages).reverse().forEach((function(e){t[e.name]||(t[e.name]=[]),t[e.name].push({message:e.content,read:e.read})})),t}}};n["a"].use(i["a"]);var _e=new i["a"].Store({state:{loading:!1,user:null,galleryItem:null,progress:null,currentEvent:null,questions:W},mutations:{SET_LOADING:function(e,t){e.loading=t},SET_USER:function(e,t){e.user=t,e.progress=t.progress},SET_GALLERY_ITEM:function(e,t){e.galleryItem=t},SET_CURRENT_EVENT:function(e,t){e.currentEvent=t},INCREMENT_EVENT:function(e){e.currentEvent+=1},INCREMENT_PROGRESS:function(e){e.progress+=1},INCREMENT_WRONG_ATTEMPT:function(e){e.user.wrongAttempts+=1},RESET_WRONG_ATTEMPT:function(e){e.user.wrongAttempts=0}},actions:{NEXT_QUESTION:function(e){var t=e.commit,s=e.dispatch,n=e.state;n.progress+1<n.questions.length?(t("INCREMENT_PROGRESS"),t("RESET_WRONG_ATTEMPT"),Object(te["j"])(Object(te["b"])(ee["a"],"users",n.user.id),{progress:n.progress,wrongAttempts:0}).then((function(e){})).catch((function(e){console.error(e)})),n.questions[n.progress].events?s("LOAD_EVENT",{event:n.questions[n.progress].events[0],options:{silent:!1,setCurrentEvent:!0,currentEvent:0}}):t("SET_CURRENT_EVENT",null)):Object(te["j"])(Object(te["b"])(ee["a"],"users",n.user.id),{completed:!0,completedTime:new Date}).then((function(e){Ce.push({name:"Result"})})).catch((function(e){console.error(e)}))},NEXT_EVENT:function(e){var t=e.commit,s=e.dispatch,n=e.state;n.currentEvent<W[n.progress].events.length-1?(t("INCREMENT_EVENT"),s("LOAD_EVENT",{event:W[n.progress].events[n.currentEvent],options:{silent:!1}})):n.currentEvent===W[n.progress].events.length-1&&t("INCREMENT_EVENT")},WRONG_ATTEMPT:function(e){var t=e.commit,s=e.state;t("INCREMENT_WRONG_ATTEMPT"),Object(te["j"])(Object(te["b"])(ee["a"],"users",s.user.id),{wrongAttempts:Object(te["e"])(1)}).then((function(e){})).catch((function(e){console.error(e)})),s.user.wrongAttempts>=3?Object(te["j"])(Object(te["b"])(ee["a"],"users",s.user.id),{eliminated:!0}).then((function(e){n["a"].$toast.error(s.questions[s.progress].endMessage),Ce.push({name:"Result"})})).catch((function(e){console.error(e)})):n["a"].$toast.error("".concat(s.questions[s.progress].attempts-s.user.wrongAttempts," attempts left!"))}},getters:{GET_LOADING:function(e){return e.loading},GET_USER:function(e){return e.user},GET_GALLERY_ITEM:function(e){return e.galleryItem},GET_QUESTIONS:function(e){return e.questions},GET_PROGRESS:function(e){return e.progress},GET_CURRENT_EVENT:function(e){return e.currentEvent}},modules:{phone:we}});n["a"].use(f["a"]);var Te=[{path:"/",name:"Home",component:Z,meta:{requiresAuth:!0}},{path:"/lobby",name:"Lobby",component:function(){return s.e("chunk-6e352bc4").then(s.bind(null,"417e"))},meta:{requiresAuth:!0}},{path:"/result",name:"Result",component:function(){return s.e("chunk-2722ffd9").then(s.bind(null,"eeac"))},meta:{requiresAuth:!0}},{path:"/sign-in",name:"Sign-In",component:function(){return s.e("chunk-f039f598").then(s.bind(null,"54e2"))}}],xe=new f["a"]({mode:"history",base:"/",routes:Te}),Se=function(){return new Promise((function(e,t){var s=Object(b["b"])(),n=Object(b["c"])(s,(function(t){n(),e(t)}),t)}))};xe.beforeEach(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,s,n){var a,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return _e.commit("SET_LOADING",!0),a=t.matched.some((function(e){return e.meta.requiresAuth})),e.next=4,Se();case 4:if(r=e.sent,!a){e.next=18;break}if(r){e.next=10;break}n("Sign-In"),e.next=16;break;case 10:return o=[Object(te["c"])(Object(te["b"])(ee["a"],"admin","admin")),Object(te["c"])(Object(te["b"])(ee["a"],"users",r.uid))],e.next=13,Promise.all(o);case 13:i=e.sent,_e.commit("SET_USER",i[1].data()),!0===i[1].data().admin?n():!0===i[1].data().eliminated?"Result"===t.name?n():n("Result"):i[0].data().started?!0!==i[1].data().completed?"Home"===t.name?n():n({name:"Home"}):"Result"===t.name?n():n("Result"):"Lobby"===t.name?n():n("Lobby");case 16:e.next=19;break;case 18:n();case 19:_e.commit("SET_LOADING",!1);case 20:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}());var Ce=xe;function Oe(e){var t=e.$options.title;if(t){var s="function"===typeof t?t.call(e):t;return s+" - La Casa de Tesoro"}return"La Casa de Tesoro"}var ke={created:function(){var e=Oe(this);e&&(document.title=e)}},je=s("6c42"),Ae=(s("b972"),s("3357"),s("da96"),{transition:"Vue-Toastification__bounce",maxToasts:20,newestOnTop:!0,position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button"});n["a"].use(je["a"],Ae),n["a"].mixin(ke),n["a"].config.productionTip=!1,new n["a"]({router:Ce,store:_e,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"68ef":function(e,t,s){"use strict";s("8828")},7490:function(e,t,s){e.exports=s.p+"media/3 Poster from shreesh.2fcadfe7.mp4"},8731:function(e,t,s){e.exports=s.p+"img/iphone-transparent.92a497b2.png"},8828:function(e,t,s){},9225:function(e,t,s){e.exports=s.p+"media/2 cctv vid.1eb527da.mp4"},"9c0c":function(e,t,s){},"9d8c":function(e,t,s){e.exports=s.p+"media/1 prof.4c95ed0d.mp4"},b5a8:function(e,t,s){"use strict";s("cc66")},beb6:function(e){e.exports=JSON.parse('[{"question":"Hello! This is your personalized AI assistant.  Rule of life is the survival of the fittest and the elimination of the weakest. The weakest is usually well hidden but enjoys the best position in the circle. Who do you see enjoying the best role right now?","elimination":false,"afterevent":false,"events":[{"type":"gallery","items":[{"name":"Professor\'s Video","type":"video","src":"prof"}]},{"type":"message","messages":[{"name":"Professor","content":"Creo que el tesorero está disfrutando más."}]},{"type":"news","posts":[{"title":"Success of sinB","description":"The Story of sinB (Society of Intellectuals and Noble Benefits), the biggest investing company worth more than 300 billion dollars, reveals the story from rags to riches. CEO Mr. Shreesh K along with colleague and close friend Treasurer Mr. Varun B started the company in an underground cellar which now has more than 2000 offices all around the globe.  "},{"title":"Brute OS, the new generation life-saver:","description":"Brute OS, the new generation operating system that offers best performance and security is now being used in all computers. Kinar S, the genius behind this, assured the world of its anti-hacking features, platform cross abilities and futuristic AI applications while flipping off a portrait of Bill Gates and Steve Jobs who rejected his job application and ideas."}]}]},{"question":" Our system being powered by the Brute OS can virtually attempt and achieve the impossible. Privacy is now a myth. Did you say Mr. Varun B and root? I have successfully intercepted his message log and this matches your search results. x^2 = 151.249043772225 y^2 = 5881.7211500644 Waiting for input results in decimals. ___________,____________","last":true,"elimination":false,"events":[{"type":"news","posts":[{"title":"My 5 mantras of his success: Treasurer of sinB reveals","description":"Varun B, the treasurer of sinB reveals his 5 tips for success - * Perfect knowledge of numbers.*Absolute trust among the colleagues. * Eight hours of sleep.* Zero alcohol, no party during  the weekdays.* Enjoy the success of your efforts"}]},{"type":"message","messages":[{"name":"Professor","content":"Ah! Varun B, What route do we take now?"}]}]},{"question":"Location for x,y? ____________(12)","last":false,"elimination":false,"events":[{"type":"message","messages":[{"name":"Professor","content":"These look like some coordinates. If only we had a map."}]},{"type":"news","posts":[{"title":"Will Shih Tzu become the National Dog of India?","description":"The short fluffy hairy dog has captured the hearts of all, specially of two hardworking CS engineers Miss Vaishnavi R. and Miss Bhumika S. Their tweet about the Shih Tzu has stirred a great deal of activity on Twitter."}]}]},{"question":" One does not realise that we have our eyes on everybody. I have managed to access the sinB CCTV hard drive, However the recordings folder denies entry.  Here’s the hint for the 4 digit security pin code: HEX BAD","last":true,"elimination":false,"events":[{"type":"message","messages":[{"name":"Professor","content":"Great! I’ll send my men there"}]},{"type":"news","posts":[{"title":"Breaking! Varun B Missing","description":"Treasurer of sinB, Varun B has been reported missing. According to the complaint lodged by his Partner and close Friend Mr. Shreesh K., Varun has missed the day’s important meetings and has not answered to any of his calls. sinB team is worried about his sudden disappearance."}]},{"type":"message","messages":[{"name":"Professor","content":"We have managed to capture Varun. He refuses to reveal any information.To make him cooperate we need solid evidence against him"}]},{"type":"news","posts":[{"title":"Education Minister’s reality check:","description":"Education a barrier for stopping children from finding their real dreams and unleashing their potential states Education Minister of India Miss. Arpitha P. Grades can never tell a person how talented an individual really is, she claimed. Her statements received major praise throughout the world."}]}]},{"question":"Searching for “IMPOSTERAMONGUS” Match found in folder : sinB account Details : Account number hint : The number of ways of arranging the word without repeating the letters ______(12)","last":true,"elimination":false,"events":[{"type":"gallery","items":[{"name":"CCTV Video","type":"video","src":"cctv"}]},{"type":"news","posts":[{"title":"Bijoy diagnostics mobilises around 8 billion USD from Pedality","description":"Pedality Investments, one of the leading finance organizations headed by the young business tycoon  Mr.Pradyoth P has recently signed a deal with Bijoy diagnostics and has reportedly managed to have a turnover of over 7.98 billion USD. The chairperson of the management board Mr.Madhusudan J has confirmed good relations with foreign investors."},{"title":"Insane writer sent to asylum:","description":"Crazy writer Adeep K.K. has been sent to an asylum after claiming the Geeta to be satanic. His review essay received massive negative responses and the reason behind his “outburst” was perhaps his recent firing from Adobe. Adeep claims to start a music band after he gets out of the nuthouse"}]},{"type":"message","messages":[{"name":"Professor","content":" The video has rattled him. After my men have threatened him for a great deal of time all he is saying is “Imposter among us”."}]}]},{"question":"According to crackstation.net this hashcode is hashed in MD5 algorithm. For more details visit the website. Enter the Password ________","last":true,"elimination":false,"events":[{"type":"news","posts":[{"title":"Actress’s actions warmed our hearts!","description":"Five major blockbusters haven\'t pumped the ego of actress Khushi S. who selflessly gave her Starbucks Coffee  and Meal to a hungry couple in the countryside where the actress was taking a break after her shooting."}]},{"type":"message","messages":[{"name":"Professor","content":"Great Job! My hackers have extracted the hashed password of this bank account from the sinB database. The hashcode is: 565b410b44e179a14d3b82f7821508db "}]}]},{"question":"Seems like the tables have turned now! It\'s hard to answer the question \'What is wrong?\' when nothing is right! Did you say Mr. Varun B and Mr. Shreesh K though?  Scanning through last message, Shreesh : Varun, let’s meet at x and y x+y=88.924694  y-x=64.35578      X = ?  Y = ? Where do you think they meet? ______(5)","last":true,"elimination":false,"events":[{"type":"message","messages":[{"name":"Professor","content":"You are a very valuable member of my team now! Thanks for your help. You’ll get what you deserve!"}]},{"type":"news","posts":[{"title":"Big Breaking! sinB reduced to dust:","description":"Society of intellectuals and noble benefits - sinB which had seen enormous growth in the past few months has been reportedly looted and the organization is now bankrupt. Allegedly a team of investors and members headed by a mastermind behind a dali mask have devastated the sinB treasury. Details are unknown."},{"title":"MTech student scores!","description":"MTech student of IITB Bharath J. has been awarded a full scholarship to pursue a PhD at the prestigious Stanford University. He celebrated by building free websites for needy companies."}]},{"type":"message","messages":[{"name":"Jitendra ","content":"How dare you?!"},{"name":"Madhusudan","content":"How can you betray us?!"},{"name":"Arpitha ","content":"OMG! Is this why we gave you the membership?"},{"name":"Ashish","content":"We helped you so much! Is this how you repay us?!"},{"name":"Jagruth","content":"I thought you were my friend!"},{"name":"Shreenidhi K","content":"Ever since Varun was reported missing, all of us are upset and especially Shreesh!"}]}]},{"question":"Did you say Shreesh and phone?  Checking recent activity.. Image found in gallery. Extracting data from gallery: Poster suggesting link. Sorry, the AI is not human. Type YES once you manage to open the website. ___ ","last":true,"events":[{"type":"message","messages":[{"name":"Shreesh","content":"Why are you bothering me now? I am the CS guy and I will get to know if you track my location. I am busy now! Don\'t you dare track my phone again!"}]},{"type":"gallery","items":[{"name":"Poster image","type":"Image","src":"poster"}]}]},{"question":"Detected 6 names from recent website activity. Choose the suspect. ____________","last":false,"elimination":true,"attempts":3,"events":[{"type":"news","posts":[{"title":"Monkey found on Mars!","description":"The space shuttle that took the EC-5743i Crawler to Mars had sent an absurd image of a monkey on Mars. Ashish S, Head of the Crawler and team were thunderstruck by this find. “It’s a space monkey!” he reported. “The former rockets had released some humans who were tragically eaten by the aliens and now a monkey or an alien in guise… I feel that Mars is a dangerous place”."}]}]},{"question":"Did you say CHAI? I am not allowed to drink CHAI or COFFEE,  Here are some interesting CHAI facts from the web : 1) Chai - persons simply cannot function without their morning cup of tea! 2) They will order a cup of tea even in a coffee shop. 3) Chai is also a fuel for many creative thinkers. 4) The Chairperson of a leading coffee brand, Tejas Enterprises is also a Chai Person! Did you find it useful? 1) Yes 2) No","last":true,"events":[{"type":"message","messages":[{"name":"Shreesh","content":"What? How dare you insult my friend?!"}]},{"name":"Shreesh","content":"But… I think it could make sense! I remember signing a deal with Pradyoth and Varun. I think I must go to Pradyoth’s office right now!"},{"type":"message","messages":[{"name":"Shreesh","content":"WTH! I CAN’T BELIEVE THIS! I am sending you the picture!"}]},{"type":"gallery","items":[{"name":"V&P Tied up image","type":"Image","src":"vp_tied"}]},{"type":"message","messages":[{"name":"Shreesh","content":"Did you see their condition? Both were drugged and masked! I managed to get them to talk, all they say is He was wearing a dali mask, a black hoodie and there was \'CHAI\' on his back!"}]}]},{"question":"Detecting system breach from unknown-user.Activating resistance mechanism. System Protected.  Detecting system breach from unknown-user. Activating resistance mechanism. System Protected.   Detecting system breach from unknown-user. Activating resistance mechanism. System Protected. This seems to be our last chance to prove our innocence. We got one chance before the CBI gained access to our data files and location. WHO IS THE PROFESSOR?","last":false,"attempts":1,"type":"MCQ","options":["Jitendra Bhat","Madhusudan Joshi","Nipunya D","Shreenidhi Kulkarni","Shreesh Kulkarni"],"elimination":true,"events":[{"type":"message","messages":[{"name":"Nipunya D - CASS Chairperson","content":"He insulted the Society and now he’s trying to blame us for his criminal work? How dare you!!"}]},{"type":"message","messages":[{"name":"Nipunya D - CASS Chairperson","content":"He insulted the Society and now he’s trying to blame us for his criminal work? How dare you!!"}]},{"type":"message","messages":[{"name":"Shreenidhi - WiE Chairperson","content":"We’ve dedicated our entire career to build our friend’s dream and our dreams were also fulfilled. How could you now cause a nightmare to all of us?"}]},{"type":"message","messages":[{"name":"Madhusudan Joshi - Chairperson","content":"Chance after chance, we were there with you, nurtured you. Stabbing one in the back is rotten and now false blaming us? There’s a limit to our patience with you.."}]},{"type":"message","messages":[{"name":" Jitendra Bhat- Vice Chairperson","content":"I completely agree.. I can’t tolerate this rogue anymore… I am going to lodge a complaint to the Authorities and have this scumbag behind bars!!"}]}]}]')},c6aa:function(e,t,s){e.exports=s.p+"img/4 v&p tied.8fbdb6ce.png"},cc66:function(e,t,s){},dc59:function(e,t,s){"use strict";var n=s("260b"),a=s("e71f"),r={apiKey:"AIzaSyBmrQKOUHkhD7Q-v1ghxrWjmwvPLPRikQk",authDomain:"la-casa-de-tesoro.firebaseapp.com",projectId:"la-casa-de-tesoro",storageBucket:"la-casa-de-tesoro.appspot.com",messagingSenderId:"749398179945",appId:"1:749398179945:web:86d82f2b49c8ca92ec22f8"},o=Object(n["a"])(r),i=Object(a["d"])(o);t["a"]=i},fb26:function(e,t,s){"use strict";s("2019")}});
//# sourceMappingURL=app.1249d85d.js.map