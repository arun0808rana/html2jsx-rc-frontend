(this["webpackJsonphtml2jsx-frontend"]=this["webpackJsonphtml2jsx-frontend"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),o=n(13),a=n.n(o),l=(n(20),n(4)),i=n.n(l),r=n(14),u=(n.p,n(22),n(15)),d=n.n(u),m=n.p+"static/media/copy.eb91ca11.svg",j=(n.p,n(0));var p=function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.readText();case 2:t=e.sent,document.querySelector("#htmlID").value=t;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row p-5",children:[Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{spellcheck:"false",className:"form-control",id:"htmlID"})}),Object(j.jsx)("div",{class:"paste-btn ml-auto",children:Object(j.jsx)("button",{onClick:e,type:"button",className:"btn btn-outline-warning ml-auto d-block",children:"Paste"})})]}),Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsxs)("div",{className:"position-relative",children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{spellcheck:"false",className:"form-control",id:"outputID"})}),Object(j.jsx)("div",{className:"position-absolute copyBtn",title:"Copy",children:Object(j.jsx)("img",{src:m,onClick:function(){document.querySelector("#outputID").select(),document.execCommand("copy"),window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}})})]}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){var e=document.getElementById("htmlID").value;d.a.post("https://html2jsx-node.herokuapp.com/convert",{html:e}).then((function(e){document.getElementById("outputID").value=e.data.jsx}))},type:"button",className:"btn btn-outline-success",children:"Convert"})})})]})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.6be86971.chunk.js.map