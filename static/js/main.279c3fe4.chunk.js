(this.webpackJsonppostmaster=this.webpackJsonppostmaster||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),l=c.n(a),n=c(15),s=c.n(n),r=(c(22),c(7)),o=(c(23),c(0));function i(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h1",{style:{color:"light"===e.send?"white":"black"},children:"Welcome to prince Text World!"})})}var d=c(9);function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.send," bg-").concat(e.send),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarScroll",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"},children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/form",children:"Text analyser"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/about",children:"about"})})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]}),Object(o.jsxs)("div",{id:"radio",style:{color:e.fontColor},children:[Object(o.jsx)("input",{type:"button",onClick:e.value1,className:"theme",id:"option1",autoComplete:"off",style:{backgroundColor:"red"}})," Red",Object(o.jsx)("input",{type:"button",onClick:e.value2,className:"theme",id:"option2",autoComplete:"off",style:{backgroundColor:"yellow"}}),"yellow",Object(o.jsx)("input",{type:"button",onClick:e.value3,className:"theme",id:"option3",autoComplete:"off",style:{backgroundColor:"green"}})," green"]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat(e.mode),style:{position:"relative",right:"30px"},children:[Object(o.jsx)("input",{type:"checkbox",onClick:e.toggleMode,className:"form-control-input",id:"toggleSwitch"}),Object(o.jsx)("label",{className:"form-control-label",htmlFor:"customSwitches",children:"enable dark"})]})]})})}function j(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),l=c[0],n=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h1",{children:[e.data," "]}),Object(o.jsx)("textarea",{value:l,id:"text",onChange:function(e){n(e.target.value)},placeholder:"please enter your String Here",style:{backgroundColor:"#f3a532",width:"70vw",height:"50%",rows:"8",color:"black"}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:e.className,onClick:function(t){if(""===document.getElementById("text").value)alert("please enter the text value");else{var c=l.toUpperCase();n(c),e.bhejna(" coverted in capital","success")}},children:"convert in Capital"}),Object(o.jsx)("button",{className:e.className,onClick:function(){if(""===document.getElementById("text").value)alert("OOps! first enter your text");else{var t=l.toLowerCase();n(t),e.bhejna("converted in lower case","success ")}},children:"convert in lowercase"}),Object(o.jsx)("button",{className:e.className,onClick:function(){""===document.getElementById("text").value?alert("Text is already clear"):(n(""),e.bhejna("Text Cleared","success "))},children:"Clear Text"}),Object(o.jsx)("button",{className:e.className,onClick:function(){if(""===document.getElementById("text").value)alert("please first enter your text");else{var t=document.getElementById("text").value.split(/[ ]+/);n(t.join(" ")),e.bhejna("removed spaces successfully","success ")}},children:"Clear Extra spaces"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(t){if(""===document.getElementById("text").value)alert("Oops! first enter your Text");else{var c=document.getElementById("text");c.select(),navigator.clipboard.writeText(c.value)}e.bhejna("text copied successfully","success ")},children:"copy your text"})]})}),Object(o.jsxs)("div",{className:"container my-4 mx-2",style:{backgroundColor:"#f3a532",color:"black",width:"70vw"},children:[Object(o.jsx)("h2",{className:"head",children:"length of data  "}),Object(o.jsx)("p",{children:l.length}),Object(o.jsx)("h2",{className:"head",children:"take time to read"}),Object(o.jsxs)("p",{children:[.008*l.length," minutes"]})]}),Object(o.jsxs)("div",{className:"container my-4 mx-2",style:{backgroundColor:"#f3a532",color:"black",width:"70vw"},children:[Object(o.jsx)("h2",{className:"head",children:"no of words in text area"}),Object(o.jsx)("p",{children:l.split(" ").filter((function(e){return 0!==e.length})).length})]}),Object(o.jsxs)("div",{className:"container my-4 mx-2",style:{backgroundColor:"#f3a532",color:"black",width:"70vw"},children:[Object(o.jsx)("input",{type:"text",className:"my-2",id:"input",placeholder:"enter your desire value"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(e){var t=document.getElementById("input").value;if(""===t)alert(" please enter your replace value");else if(l.includes(t)){var c=l.replace(t,"");n(c)}else alert("Oops : your given string does not exist\nwrite correct Text!")},children:"replace desire data"}),Object(o.jsx)("p",{children:l})]})]})}function u(e){var t=Object(a.useState)({color:"black",backgroundColor:"white",border:"2px solid",borderColor:"black"}),c=Object(r.a)(t,2),l=c[0],n=c[1],s=Object(a.useState)("dark"),i=Object(r.a)(s,2),d=i[0],b=i[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",style:l,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"head",children:"about my website:"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:Object(o.jsxs)("strong",{children:["hello guys, this is prince jain from Agra.",Object(o.jsx)("br",{}),"here i made for you to analyse with your text very easily."]})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Details:"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("strong",{children:["  ",Object(o.jsxs)("p",{children:[" Name:Prince jain ",Object(o.jsx)("br",{})," contact_no: 8171369835 ",Object(o.jsx)("br",{}),"Address: jaitpur kalan Agra UP",Object(o.jsx)("br",{}),"email: princejain817111@gmail.com   "]})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:Object(o.jsx)("center",{children:Object(o.jsx)("strong",{children:"Thank You"})})})}),Object(o.jsx)("div",{className:"container ",children:Object(o.jsxs)("button",{className:"btn btn-primary ",id:"bata",onClick:function(){"white"===l.color?(n({color:"black",backgroundColor:"white",border:"2px solid black"}),b("dark")):(n({color:"white",backgroundColor:"black",border:"2px solid white"}),b("light"))},children:[" enable ",d," mode"]})})]})})}function h(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),id:"alert",role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type}),e.alert.msg]})})})}var m=c(2);var x=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],l=t[1],n=function e(t,c){l({msg:t,type:c}),setTimeout((function(){e(null)}),3e3)},s=Object(a.useState)("light"),x=Object(r.a)(s,2),O=x[0],g=x[1],p=Object(a.useState)("black"),v=Object(r.a)(p,2),y=v[0],f=v[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{fontColor:y,value1:function(e){document.body.style.backgroundColor="red"},value2:function(e){document.body.style.backgroundColor="yellow"},value3:function(e){document.body.style.backgroundColor="green"},send:O,mode:"dark"===O?"light":"dark",title:"Home",toggleMode:function(e){"dark"===O?(g("light"),document.body.style.backgroundColor="white",n("your light theme hasbeen changed","success"),f("black")):(g("dark"),document.body.style.backgroundColor="#1d296d",n("the dark theme hasbeen changed","success"),f("white"))}}),Object(o.jsx)(h,{alert:c}),Object(o.jsx)(i,{}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{exact:!0,path:"/form",children:Object(o.jsx)("div",{id:"black",className:"container",children:Object(o.jsx)(j,{bhejna:n,className:"btn btn-primary mx-2 my-2",send:O,data:"hello guys"})})}),Object(o.jsx)(m.a,{exact:!0,path:"/about",children:Object(o.jsx)(u,{})})]})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),l(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.279c3fe4.chunk.js.map