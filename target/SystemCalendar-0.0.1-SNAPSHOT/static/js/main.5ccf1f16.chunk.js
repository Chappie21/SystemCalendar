(this.webpackJsonpcalendarclint=this.webpackJsonpcalendarclint||[]).push([[0],{28:function(e,r,t){},35:function(e,r,t){},36:function(e,r,t){},37:function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),c=t(22),a=t.n(c),s=t(18),i=t(2),l=t(11),j=t(12),d=t(15),u=t(13),b=(t(28),t(0)),m=Object(i.f)((function(e){var r=e.history;return Object(b.jsx)(n.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"cardContainer",children:[Object(b.jsxs)("div",{className:"textHeader",children:[Object(b.jsx)("header",{className:"Title",children:Object(b.jsx)("h1",{children:e.Title})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e.Text})})]}),Object(b.jsxs)("div",{className:"button-container",children:[Object(b.jsx)("button",{name:"login",className:"button-menu",onClick:function(){return r.push("/login")},children:"Iniciar Sesion"}),Object(b.jsx)("button",{name:"register",className:"button-menu",onClick:function(){return r.push("/register")},children:"Registrarse"})]})]})})})})),h=["Comience una vida m\xe1s organziada, cree su propio sistema de calendario","\xbfDepende mucho de su tiempo? \xa1es hora de distribuirlo!","El tiempo es valioso, y organizarlo har\xe1 que valga la pena","\xa1Comparta su tiempo con sus amigos o colegas!"],O=h[Math.floor(Math.random()*h.length)],g=function(e){Object(d.a)(t,e);var r=Object(u.a)(t);function t(){return Object(l.a)(this,t),r.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(m,{Title:"SystemCalendar",Text:O})})}}]),t}(o.a.Component),x=t(8),p=t(7),v=t(14),f=(t(35),function(e){return Object(b.jsx)(n.Fragment,{children:function(){var r={backgroundColor:"",color:"",fontSize:"15px",border:"",borderRadius:"5px",padding:"8px"};return e.status>=200&&e.status<=207||"green"===e.color?(r.backgroundColor="rgb(154, 205, 50)",r.color="green",r.border="solid green 3px"):e.status>=400&&e.status<=413||"yellow"===e.color?(r.backgroundColor="rgb(250, 250, 210)",r.color="rgb(255, 215, 0)",r.border="solid rgb(255, 215, 0) 3px"):(e.status>=500&&e.status<=503||"red"===e.color)&&(r.backgroundColor="rgb(240, 128, 128)",r.color="rgb(178, 34, 34)",r.border="solid rgb(178, 34, 34) 3px"),Object(b.jsx)("div",{style:r,children:Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:e.msg})})})}()})}),C=function(){var e=Object(n.useState)({UserName:"",Clave:"",ResultServer:{}}),r=Object(v.a)(e,2),t=r[0],o=r[1],c=function(e){o(Object(p.a)(Object(p.a)({},t),{},Object(x.a)({},e.target.name,e.target.value))),console.log(t)};return Object(b.jsx)("div",{className:"p-container",children:Object(b.jsxs)("div",{className:"p-container",children:[Object(b.jsx)("div",{className:"container-form-login",children:Object(b.jsxs)("form",{id:"form-login",onSubmit:function(e){e.preventDefault();var r=new FormData(document.getElementById("form-login"));fetch("Login",{method:"POST",mode:"cors",body:r}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){var r={exito:200===e.status,msg:e.message};o(Object(p.a)(Object(p.a)({},t),{},Object(x.a)({},"ResultServer",r)))})),console.log(t)},children:[Object(b.jsx)("header",{children:Object(b.jsx)("h2",{children:"Iniciar de Sesion"})}),Object(b.jsx)("input",{type:"text",name:"UserName",placeholder:"Nombre de usuario o correo",value:t.UserName,onChange:c}),Object(b.jsx)("input",{type:"password",name:"Clave",placeholder:"Contrase\xf1a",value:t.Clave,onChange:c}),Object(b.jsx)("div",{children:!1===t.ResultServer.exito?Object(b.jsx)(f,{color:"red",msg:t.ResultServer.msg}):""}),Object(b.jsx)("button",{type:"submit",children:"Iniciar"})]})}),Object(b.jsx)("div",{children:t.ResultServer.exito?Object(b.jsx)(i.a,{to:"/sesion"}):""})]})})},y=function(e){return Object(b.jsx)(n.Fragment,{children:Object(b.jsxs)("div",{style:{backgroundImage:"url(".concat(e.img,")"),backgroundSize:"auto"},children:[Object(b.jsx)("header",{children:Object(b.jsx)("h3",{children:e.title})}),Object(b.jsx)("p",{children:e.message})]})})},N=(t(36),t.p+"static/media/RegisterFondo.9679f7b7.png"),R=function(e){var r=Object(n.useState)({UserName:"",Correo:"",Clave:"",ConfirmarClave:"",serverResponse:{},FormError:{}}),t=Object(v.a)(r,2),o=t[0],c=t[1],a=e.history,s=function(e){var r;c(Object(p.a)(Object(p.a)({},o),{},(r={},Object(x.a)(r,e.target.name,e.target.value),Object(x.a)(r,"FormError",l()),r)))},i=function(){return 0!==o.ConfirmarClave.length&&o.Clave===o.ConfirmarClave},l=function(){var e={color:"",msg:""};return""===o.UserName||""===o.Correo||""===o.Clave?(e.color="red",e.msg="Rellene todo el formulario"):i()?(e.color="red",e.msg="Claves no coinciden"):e={},e};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"container-img",children:Object(b.jsx)(y,{img:N})}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container-form",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h2",{children:"\xa1Registrarse Ahora!"})}),Object(b.jsxs)("form",{id:"form-register",onSubmit:function(e){if(e.preventDefault(),i()){var r=document.getElementById("form-register"),t={method:"POST",body:new FormData(r)};fetch("Register",t).then((function(e){return e.json()})).then((function(e){c(Object(p.a)(Object(p.a)({},o),{},Object(x.a)({},"serverResponse",e)))}))}else console.log("Contrase\xf1as no congruentes")},children:[Object(b.jsx)("input",{name:"UserName",type:"text",placeholder:"Nombre de usuario",onChange:s,value:o.UserName}),Object(b.jsx)("input",{name:"Correo",type:"email",placeholder:"Correo Electronico",onChange:s,value:o.Correo}),Object(b.jsx)("input",{name:"Clave",type:"password",placeholder:"Contrase\xf1a",onChange:s,value:o.Clave}),Object(b.jsx)("input",{name:"ConfirmarClave",type:"password",placeholder:"Confirmar Contrase\xf1a",onChange:s,value:o.ConfirmarClave}),Object(b.jsx)("div",{children:o.serverResponse||o.FormError?Object(b.jsx)(f,{status:o.serverResponse.status,color:o.FormError.color,msg:o.serverResponse.message||o.FormError.msg}):""}),Object(b.jsx)("button",{type:"submit",children:"Relizar registro"}),Object(b.jsx)("div",{children:200===o.serverResponse.status?Object(b.jsx)("button",{onClick:function(){return a.push("/login")},children:"Ir al login"}):""})]})]})})]})},S=function(e){Object(d.a)(t,e);var r=Object(u.a)(t);function t(){return Object(l.a)(this,t),r.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"PAGINA DE INICIO"})})}}]),t}(o.a.Component),k=function(){return Object(b.jsxs)(s.a,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",component:g}),Object(b.jsx)(i.b,{exact:!0,path:"/login",component:C}),Object(b.jsx)(i.b,{exact:!0,path:"/register",component:R}),Object(b.jsx)(i.b,{exact:!0,path:"/sesion",component:S})]})},I=document.getElementById("root");a.a.render(Object(b.jsx)(k,{}),I)}},[[37,1,2]]]);
//# sourceMappingURL=main.5ccf1f16.chunk.js.map