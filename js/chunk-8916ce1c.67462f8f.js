(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8916ce1c"],{"54e2":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"min-h-screen flex items-center justify-center",attrs:{id:"SignIn"}},[o("div",{staticClass:"flex flex-col items-center justify-center"},[o("Logo"),o("button",{staticClass:"flex items-center my-10 px-6 py-2 rounded-full border",attrs:{id:"google-button"},on:{click:e.SignIn}},[o("img",{staticClass:"w-6 mr-2",attrs:{src:n("c95d")}}),o("span",{staticClass:"text-lg font-bold text-gray-800"},[e._v(" Sign In ")])])],1)])},c=[],s=(n("d3b7"),n("b0c0"),n("2241")),a=n("ea7b"),i=n("e71f"),r=n("dc59"),u={name:"",title:"Sign In - La Casa de Tesoro",components:{Logo:s["a"]},data:function(){return{}},methods:{random:function(e,t){var n=Math.random()*(t-e)+e;return Math.floor(n)},SignIn:function(){var e=this,t=Object(a["b"])(),n=new a["a"];Object(a["d"])(t,n).then((function(t){var n=t.user;fetch("http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off&offset=".concat(e.random(0,23687))).then((function(e){return e.json()})).then((function(t){console.log(t),Object(i["d"])(Object(i["a"])(r["a"],"users",n.uid),{id:n.uid,code:t.data[0].name,name:n.displayName,email:n.email,progress:0,completed:!1,completedTime:null}).then((function(t){e.$router.push({name:"Home"})})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}))})).catch((function(e){console.log(e)}))}}},l=u,d=(n("edcc"),n("2877")),f=Object(d["a"])(l,o,c,!1,null,"3ffd3d6d",null);t["default"]=f.exports},c95d:function(e,t,n){e.exports=n.p+"img/icons8-google.648fa9fa.svg"},e13c:function(e,t,n){},edcc:function(e,t,n){"use strict";n("e13c")}}]);
//# sourceMappingURL=chunk-8916ce1c.67462f8f.js.map