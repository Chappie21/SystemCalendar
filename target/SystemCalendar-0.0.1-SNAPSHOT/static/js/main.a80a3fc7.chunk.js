(this.webpackJsonpcalendarclint=this.webpackJsonpcalendarclint||[]).push([[0],{28:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(18),s=r.n(a),o=r(12),i=r(2),l=r(19),j=r(20),d=r(23),b=r(22),u=(r(28),r(0)),m=Object(i.f)((function(e){var t=e.history;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"cardContainer",children:[Object(u.jsxs)("div",{className:"textHeader",children:[Object(u.jsx)("header",{className:"Title",children:Object(u.jsx)("h1",{children:e.Title})}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:e.Text})})]}),Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)("button",{name:"login",className:"button-menu",onClick:function(){return t.push("/login")},children:"Iniciar Sesion"}),Object(u.jsx)("button",{name:"register",className:"button-menu",onClick:function(){return t.push("/register")},children:"Registrarse"})]})]})})})})),h=["Comience una vida m\xe1s organziada, cree su propio sistema de calendario","\xbfDepende mucho de su tiempo? \xa1es hora de distribuirlo!","El tiempo es valioso, y organizarlo har\xe1 que valga la pena","\xa1Comparta su tiempo con sus amigos o colegas!"],O=h[Math.floor(Math.random()*h.length)],x=function(e){Object(d.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Big-container",children:Object(u.jsx)(m,{Title:"SystemCalendar",Text:O})})}}]),r}(c.a.Component),p=r(4),v=function(e){var t=Object(n.useState)({Login:!1,Calendarios:[]}),r=Object(p.a)(t,2),c=r[0],a=r[1];return Object(u.jsx)("div",{children:Object(u.jsx)(g.Provider,{value:[c,a],children:e.children})})},g=Object(n.createContext)(),f=r(9),C=r(7),N=(r(35),function(e){return Object(u.jsx)(n.Fragment,{children:function(){var t={backgroundColor:"",color:"",fontSize:"15px",border:"",borderRadius:"5px",padding:"8px"};return e.status>=200&&e.status<=207||"green"===e.color?(t.backgroundColor="rgb(154, 205, 50)",t.color="green",t.border="solid green 3px"):e.status>=400&&e.status<=413||"yellow"===e.color?(t.backgroundColor="rgb(250, 250, 210)",t.color="rgb(255, 215, 0)",t.border="solid rgb(255, 215, 0) 3px"):(e.status>=500&&e.status<=503||"red"===e.color)&&(t.backgroundColor="rgb(240, 128, 128)",t.color="rgb(178, 34, 34)",t.border="solid rgb(178, 34, 34) 3px"),Object(u.jsx)("div",{style:t,children:Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e.msg})})})}()})}),y=function(){var e=Object(n.useState)({UserName:"",Clave:"",ResultServer:{}}),t=Object(p.a)(e,2),r=t[0],c=t[1],a=Object(n.useContext)(g),s=Object(p.a)(a,2),o=s[0],l=s[1],j=function(e){c(Object(C.a)(Object(C.a)({},r),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{className:"p-container",children:Object(u.jsxs)("div",{className:"p-container",children:[Object(u.jsx)("div",{className:"container-form-login",children:Object(u.jsxs)("form",{id:"form-login",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("form-login"));fetch("http://localhost:8080/Login",{method:"POST",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){var t={exito:200===e.status,msg:e.message,UserName:e.UserName};c(Object(C.a)(Object(C.a)({},r),{},Object(f.a)({},"ResultServer",t))),l(Object(C.a)(Object(C.a)({},o),{},{Login:t.exito,UserName:t.UserName}))}))},children:[Object(u.jsx)("header",{children:Object(u.jsx)("h2",{children:"Iniciar de Sesion"})}),Object(u.jsx)("input",{type:"text",name:"UserName",placeholder:"Nombre de usuario o correo",value:r.UserName,onChange:j}),Object(u.jsx)("input",{type:"password",name:"Clave",placeholder:"Contrase\xf1a",value:r.Clave,onChange:j}),Object(u.jsx)("div",{children:!1===r.ResultServer.exito?Object(u.jsx)(N,{color:"red",msg:r.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Iniciar"})]})}),Object(u.jsx)("div",{children:o.Login?Object(u.jsx)(i.a,{to:"/sesion"}):""})]})})},U=(r(36),function(e){var t=Object(n.useState)({UserName:"",Correo:"",Clave:"",ConfirmarClave:"",serverResponse:{},FormError:{}}),r=Object(p.a)(t,2),c=r[0],a=r[1],s=e.history,o=function(e){var t;a(Object(C.a)(Object(C.a)({},c),{},(t={},Object(f.a)(t,e.target.name,e.target.value),Object(f.a)(t,"FormError",l()),t)))},i=function(){return 0!==c.ConfirmarClave.length&&c.Clave===c.ConfirmarClave},l=function(){var e={color:"",msg:""};return""===c.UserName||""===c.Correo||""===c.Clave?(e.color="red",e.msg="Rellene todo el formulario"):i()?(e.color="red",e.msg="Claves no coinciden"):e={},e};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"container-img"}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"\xa1Registrarse Ahora!"}),Object(u.jsx)("p",{children:"Comience a organizar su vida, y a compartirla con sus amigos"})]}),Object(u.jsxs)("form",{id:"form-register",onSubmit:function(e){if(e.preventDefault(),i()){var t=document.getElementById("form-register"),r={method:"POST",body:new FormData(t)};fetch("http://localhost:8080/Register",r).then((function(e){return e.json()})).then((function(e){a(Object(C.a)(Object(C.a)({},c),{},Object(f.a)({},"serverResponse",e)))}))}else console.log("Contrase\xf1as no congruentes")},children:[Object(u.jsx)("input",{name:"UserName",type:"text",placeholder:"Nombre de usuario",onChange:o,value:c.UserName}),Object(u.jsx)("input",{name:"Correo",type:"email",placeholder:"Correo Electronico",onChange:o,value:c.Correo}),Object(u.jsx)("input",{name:"Clave",type:"password",placeholder:"Contrase\xf1a",onChange:o,value:c.Clave}),Object(u.jsx)("input",{name:"ConfirmarClave",type:"password",placeholder:"Confirmar Contrase\xf1a",onChange:o,value:c.ConfirmarClave}),Object(u.jsx)("div",{children:c.serverResponse||c.FormError?Object(u.jsx)(N,{status:c.serverResponse.status,color:c.FormError.color,msg:c.serverResponse.message||c.FormError.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Relizar registro"}),Object(u.jsx)("div",{children:200===c.serverResponse.status?Object(u.jsx)("button",{onClick:function(){return s.push("/login")},children:"Ir al login"}):""})]})]})})]})}),S=function(){var e=Object(n.useContext)(g),t=Object(p.a)(e,2),r=t[0];t[1];return Object(u.jsx)(n.Fragment,{children:r.Login?"":Object(u.jsx)(i.a,{to:"/login"})})},F=(r(37),function(e){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:1===e.type?Object(u.jsxs)("div",{id:"Navbar",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("img",{src:e.img}),Object(u.jsx)("label",{className:"NameUser",children:e.UserName})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"mes",children:Object(u.jsx)("p",{children:"Jun - Julio 2021"})}),Object(u.jsx)("div",{className:"actividad",children:Object(u.jsx)("p",{children:"Siguiente tarea: "})})]})]}):Object(u.jsxs)("div",{id:"Navbar",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("img",{src:e.img}),Object(u.jsx)("label",{className:"NameUser",children:e.UserName})]}),Object(u.jsx)("div",{className:"items",children:Object(u.jsx)("button",{onClick:function(){return e.history.push("/sesion")},children:"Volver"})})]})})})}),R=(r(38),r(39),function(e){var t=!0;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"lista",id:e.type,children:[Object(u.jsx)("li",{onClick:function(r){var n=document.getElementById(e.type);t?(n.className="",t=!1):t=!0,console.log("sucede")},children:Object(u.jsx)("strong",{children:e.title})}),e.calendar.map((function(t){if(t.rol===e.type)return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",name:e.type}),Object(u.jsx)("label",{style:{color:t.Color_calendario,padding:"5px"},children:t.Nombre_calendario})]})},t.Nombre_calendario)}))]})})})}),k=function(e){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"bar-container",children:Object(u.jsxs)("div",{className:"bar-calendar",children:[Object(u.jsx)(R,{title:"Calendarios",calendar:e.calendar,type:"prop"}),Object(u.jsx)(R,{title:"Calendarios invitados",calendar:e.calendar,type:"inv"}),Object(u.jsx)("button",{onClick:function(){return e.history.push("/createcalendar")},children:"Crear calendario"})]})})})},E=r.p+"static/media/user.e4db1f65.svg",w=function(e){var t=e.history,r=Object(n.useContext)(g),c=Object(p.a)(r,2),a=c[0];c[1];return Object(n.useEffect)((function(){}),[]),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(F,{type:1,img:E,UserName:a.UserName}),Object(u.jsx)(k,{calendar:a.Calendarios,history:t})]})]})},D=(r(40),function(e){var t=e.history,r=Object(n.useContext)(g),c=Object(p.a)(r,2),a=c[0];c[1];return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(F,{type:2,UserName:a.UserName,img:E,history:t}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"\xa1Crear nuevo calendario!"})}),Object(u.jsxs)("form",{id:"form-calendar",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("form-calendar"));fetch("http://localhost:8080/Calendar",{method:"POST",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){console.log(e.status)}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nombre del calendario",name:"Name_Calendar"}),Object(u.jsx)("textarea",{type:"textarea",placeholder:"Descripcion del calendario",name:"Description_Calendar"}),Object(u.jsx)("input",{type:"color",name:"Color_Calendar"}),Object(u.jsx)("button",{type:"submit",children:"Crear calendario"})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{})})]})]})}),I=function(){return Object(u.jsx)(v,{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",component:x}),Object(u.jsx)(i.b,{exact:!0,path:"/login",component:y}),Object(u.jsx)(i.b,{exact:!0,path:"/register",component:U}),Object(u.jsx)(i.b,{exact:!0,path:"/sesion",component:w}),Object(u.jsx)(i.b,{exact:!0,path:"/createcalendar",component:D})]})})},T=document.getElementById("root");s.a.render(Object(u.jsx)(I,{}),T)}},[[41,1,2]]]);
//# sourceMappingURL=main.a80a3fc7.chunk.js.map