(this.webpackJsonpcalendarclint=this.webpackJsonpcalendarclint||[]).push([[0],{15:function(e,t,r){},31:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(20),s=r.n(c),o=r(16),i=r(3),l=r(21),d=r(22),j=r(26),b=r(25),u=(r(31),r(0)),m=Object(i.f)((function(e){var t=e.history;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"cardContainer",children:[Object(u.jsxs)("div",{className:"textHeader",children:[Object(u.jsx)("header",{className:"Title",children:Object(u.jsx)("h1",{children:e.Title})}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:e.Text})})]}),Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)("button",{name:"login",className:"button-menu",onClick:function(){return t.push("/login")},children:"Iniciar Sesion"}),Object(u.jsx)("button",{name:"register",className:"button-menu",onClick:function(){return t.push("/register")},children:"Registrarse"})]})]})})})})),O=["Comience una vida m\xe1s organziada, cree su propio sistema de calendario","\xbfDepende mucho de su tiempo? \xa1es hora de distribuirlo!","El tiempo es valioso, y organizarlo har\xe1 que valga la pena","\xa1Comparta su tiempo con sus amigos o colegas!"],h=O[Math.floor(Math.random()*O.length)],x=function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Big-container",children:Object(u.jsx)(m,{Title:"SystemCalendar",Text:h})})}}]),r}(a.a.Component),v=r(4),p=function(e){var t=Object(n.useState)({Login:!1,Calendarios:[]}),r=Object(v.a)(t,2),a=r[0],c=r[1];return Object(u.jsx)("div",{children:Object(u.jsx)(f.Provider,{value:[a,c],children:e.children})})},f=Object(n.createContext)(),g=r(6),C=r(2),N=(r(38),function(e){return Object(u.jsx)(n.Fragment,{children:function(){var t={backgroundColor:"",color:"",fontSize:"15px",border:"",borderRadius:"5px",padding:"8px"};return e.status>=200&&e.status<=207||"green"===e.color?(t.backgroundColor="rgb(154, 205, 50)",t.color="green",t.border="solid green 3px"):e.status>=400&&e.status<=413||"yellow"===e.color?(t.backgroundColor="rgb(250, 250, 210)",t.color="rgb(255, 215, 0)",t.border="solid rgb(255, 215, 0) 3px"):(e.status>=500&&e.status<=503||"red"===e.color)&&(t.backgroundColor="rgb(240, 128, 128)",t.color="rgb(178, 34, 34)",t.border="solid rgb(178, 34, 34) 3px"),Object(u.jsx)("div",{style:t,children:Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e.msg})})})}()})}),y=function(){var e=Object(n.useState)({UserName:"",Clave:"",ResultServer:{}}),t=Object(v.a)(e,2),r=t[0],a=t[1],c=Object(n.useContext)(f),s=Object(v.a)(c,2),o=s[0],l=s[1],d=function(e){a(Object(C.a)(Object(C.a)({},r),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{className:"p-container",children:Object(u.jsxs)("div",{className:"p-container",children:[Object(u.jsx)("div",{className:"container-form-login",children:Object(u.jsxs)("form",{id:"form-login",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("form-login"));fetch("/Login",{method:"POST",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){var t={exito:200===e.status,msg:e.message,UserName:e.UserName};a(Object(C.a)(Object(C.a)({},r),{},Object(g.a)({},"ResultServer",t))),l(Object(C.a)(Object(C.a)({},o),{},{Login:t.exito,UserName:t.UserName}))}))},children:[Object(u.jsx)("header",{children:Object(u.jsx)("h2",{children:"Iniciar de Sesion"})}),Object(u.jsx)("input",{type:"text",name:"UserName",placeholder:"Nombre de usuario o correo",value:r.UserName,onChange:d}),Object(u.jsx)("input",{type:"password",name:"Clave",placeholder:"Contrase\xf1a",value:r.Clave,onChange:d}),Object(u.jsx)("div",{children:!1===r.ResultServer.exito?Object(u.jsx)(N,{color:"red",msg:r.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Iniciar"})]})}),Object(u.jsx)("div",{children:o.Login?Object(u.jsx)(i.a,{to:"/sesion"}):""})]})})},S=(r(39),function(e){var t=Object(n.useState)({UserName:"",Correo:"",Clave:"",ConfirmarClave:"",serverResponse:{},FormError:{}}),r=Object(v.a)(t,2),a=r[0],c=r[1],s=e.history,o=function(e){var t;c(Object(C.a)(Object(C.a)({},a),{},(t={},Object(g.a)(t,e.target.name,e.target.value),Object(g.a)(t,"FormError",l()),t)))},i=function(){return 0!==a.ConfirmarClave.length&&a.Clave===a.ConfirmarClave},l=function(){var e={color:"",msg:""};return""===a.UserName||""===a.Correo||""===a.Clave?(e.color="red",e.msg="Rellene todo el formulario"):i()?(e.color="red",e.msg="Claves no coinciden"):e={},e};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"container-img"}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"\xa1Registrarse Ahora!"}),Object(u.jsx)("p",{children:"Comience a organizar su vida, y a compartirla con sus amigos"})]}),Object(u.jsxs)("form",{id:"form-register",onSubmit:function(e){if(e.preventDefault(),i()){var t=document.getElementById("form-register"),r={method:"POST",body:new FormData(t)};fetch("Register",r).then((function(e){return e.json()})).then((function(e){c(Object(C.a)(Object(C.a)({},a),{},Object(g.a)({},"serverResponse",e)))}))}else console.log("Contrase\xf1as no congruentes")},children:[Object(u.jsx)("input",{name:"UserName",type:"text",placeholder:"Nombre de usuario",onChange:o,value:a.UserName}),Object(u.jsx)("input",{name:"Correo",type:"email",placeholder:"Correo Electronico",onChange:o,value:a.Correo}),Object(u.jsx)("input",{name:"Clave",type:"password",placeholder:"Contrase\xf1a",onChange:o,value:a.Clave}),Object(u.jsx)("input",{name:"ConfirmarClave",type:"password",placeholder:"Confirmar Contrase\xf1a",onChange:o,value:a.ConfirmarClave}),Object(u.jsx)("div",{children:a.serverResponse||a.FormError?Object(u.jsx)(N,{status:a.serverResponse.status,color:a.FormError.color,msg:a.serverResponse.message||a.FormError.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Relizar registro"}),Object(u.jsx)("div",{children:200===a.serverResponse.status?Object(u.jsx)("button",{onClick:function(){return s.push("/login")},children:"Ir al login"}):""})]})]})})]})}),R=function(){var e=Object(n.useContext)(f),t=Object(v.a)(e,2),r=t[0];t[1];return Object(u.jsx)(n.Fragment,{children:r.Login?"":Object(u.jsx)(i.a,{to:"/login"})})},_=(r(40),function(e){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:1===e.type?Object(u.jsxs)("div",{id:"Navbar",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("img",{src:e.img}),Object(u.jsx)("label",{className:"NameUser",children:e.UserName})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"mes",children:Object(u.jsx)("p",{children:"Jun - Julio 2021"})}),Object(u.jsx)("div",{className:"actividad",children:Object(u.jsx)("p",{children:"Siguiente tarea: "})})]})]}):Object(u.jsxs)("div",{id:"Navbar",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("img",{src:e.img}),Object(u.jsx)("label",{className:"NameUser",children:e.UserName})]}),Object(u.jsx)("div",{className:"items",children:Object(u.jsx)("button",{onClick:function(){return e.history.push("/sesion")},children:"Volver"})})]})})})}),E=(r(41),r(24)),I=(r(42),r.p+"static/media/edit.ad7b095d.svg"),U=function(e){var t=!0,r=Object(n.useContext)(f),a=Object(v.a)(r,2),c=a[0],s=a[1],o=function(t){var r,n=Object(E.a)(e.calendar);try{for(n.s();!(r=n.n()).done;){var a=r.value;a.Id_calendario===parseInt(t.target.id)&&(s(Object(C.a)(Object(C.a)({},c),{},{EditCalendar:a})),e.history.push("/editcalendar"))}}catch(o){n.e(o)}finally{n.f()}};return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"lista",children:[Object(u.jsx)("li",{name:"title",onClick:function(r){var n=document.getElementById(e.type);t?(n.className="lista-interna",t=!1):(n.className="lista-interna-down",t=!0)},children:Object(u.jsx)("strong",{children:e.title})}),Object(u.jsx)("ul",{className:"lista-interna-down",id:e.type,children:e.calendar.map((function(t){if(t.rol===e.type)return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",name:e.type}),Object(u.jsx)("label",{id:t.Id_calendario,style:{color:t.Color_calendario,padding:"5px"},children:t.Nombre_calendario}),"prop"===t.rol?Object(u.jsx)("label",{id:t.Id_calendario,onClick:o,children:Object(u.jsx)("img",{src:I,id:t.Id_calendario})}):""]})},t.Nombre_calendario)}))})]})})})},F=function(e){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"bar-container",children:Object(u.jsxs)("div",{className:"bar-calendar",children:[Object(u.jsx)(U,{title:"Calendarios",calendar:e.calendar,type:"prop",history:e.history}),Object(u.jsx)(U,{title:"Calendarios invitados",calendar:e.calendar,type:"inv"}),Object(u.jsx)("button",{onClick:function(){return e.history.push("/createcalendar")},children:"Crear calendario"})]})})})},D=r.p+"static/media/user.e4db1f65.svg",k=function(e){var t=e.history,r=Object(n.useContext)(f),a=Object(v.a)(r,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){fetch("Calendar",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){s(Object(C.a)(Object(C.a)({},c),{},{Calendarios:e.Calendarios}))}))}),[]),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(R,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{type:1,img:D,UserName:c.UserName}),Object(u.jsx)(F,{calendar:c.Calendarios,history:t})]})]})},w=(r(15),function(e){var t=e.history,r=Object(n.useContext)(f),a=Object(v.a)(r,2),c=a[0],s=(a[1],Object(n.useState)({ResultServer:null})),o=Object(v.a)(s,2),i=o[0],l=o[1];return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(R,{}),Object(u.jsx)(_,{type:2,UserName:c.UserName,img:D,history:t}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"\xa1Crear nuevo calendario!"})}),Object(u.jsxs)("form",{id:"form-calendar",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("form-calendar"));fetch("Calendar",{method:"POST",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){l(Object(C.a)(Object(C.a)({},i),{},{ResultServer:e}))}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nombre del calendario",name:"Name_Calendar"}),Object(u.jsx)("textarea",{type:"textarea",placeholder:"Descripcion del calendario",name:"Description_Calendar"}),Object(u.jsx)("input",{type:"color",name:"Color_Calendar"}),Object(u.jsx)("div",{children:i.ResultServer?Object(u.jsx)(N,{status:i.ResultServer.status,msg:i.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Crear calendario"})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{})})]})]})}),T=(r(43),function(e){var t=Object(n.useState)({ResultServer:null}),r=Object(v.a)(t,2),a=r[0],c=r[1];return Object(u.jsx)(n.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"\xa1Invitar usuarios!"})}),Object(u.jsxs)("form",{id:"form-invited",onSubmit:function(t){t.preventDefault();var r=new FormData(document.getElementById("form-invited"));r.append("Id_calendario",e.idCalendar),fetch("InviteCalendar",{method:"PUT",mode:"cors",body:r}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){c(Object(C.a)(Object(C.a)({},a),{},{ResultServer:e}))})),setTimeout((function(){c({ResultServer:null})}),2e3)},children:[Object(u.jsx)("input",{type:"email",name:"Correo_usuario",placeholder:"Correo de usuario a invitar",value:a.Correo_usuario}),a.ResultServer?Object(u.jsx)(N,{status:a.ResultServer.status,msg:a.ResultServer.msg}):"",Object(u.jsx)("button",{type:"submit",children:"A\xf1adir usuario"})]})]})})}),B=function(e){var t=e.history,r=Object(n.useContext)(f),a=Object(v.a)(r,2),c=a[0],s=(a[1],Object(n.useState)({ResultServer:null,Id_calendrio:c.EditCalendar.Id_calendario,Nombre_calendario:c.EditCalendar.Nombre_calendario,Descripcion_calendario:c.EditCalendar.Descripcion_calendario,Color_calendario:c.EditCalendar.Color_calendario})),o=Object(v.a)(s,2),i=o[0],l=o[1],d=function(e){l(Object(C.a)(Object(C.a)({},i),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(R,{}),Object(u.jsx)(_,{type:2,UserName:c.UserName,img:D,history:t}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"\xa1Editar Calendario!"})}),Object(u.jsxs)("form",{id:"form-calendar",onSubmit:function(e){e.preventDefault();var t=new FormData(document.getElementById("form-calendar"));t.append("Id_calendario",i.Id_calendrio),fetch("Calendar",{method:"PUT",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){l(Object(C.a)(Object(C.a)({},i),{},{ResultServer:e}))}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nombre del calendario",name:"Nombre_calendario",onChange:d,value:i.Nombre_calendario}),Object(u.jsx)("textarea",{type:"textarea",placeholder:"Descripcion del calendario",name:"Descripcion_calendario",onChange:d,value:i.Descripcion_calendario}),Object(u.jsx)("input",{type:"color",name:"Color_calendario",onChange:d,value:i.Color_calendario}),Object(u.jsx)("div",{children:i.ResultServer?Object(u.jsx)(N,{status:i.ResultServer.status,msg:i.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Editar calendario"}),Object(u.jsx)("button",{name:"borrar",onClick:function(e){var r=new FormData;r.append("Id_calendario",i.Id_calendrio),fetch("Calendar",{method:"DELETE",mode:"cors",body:r}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){l(Object(C.a)(Object(C.a)({},i),{},{ResultServer:e})),setTimeout((function(){t.push("/sesion")}),1800)}))},children:"Borrar calendario"})]})]}),Object(u.jsx)("div",{className:"invited-container",children:Object(u.jsx)(T,{idCalendar:i.Id_calendrio})})]})]})},L=function(){return Object(u.jsx)(p,{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",component:x}),Object(u.jsx)(i.b,{exact:!0,path:"/login",component:y}),Object(u.jsx)(i.b,{exact:!0,path:"/register",component:S}),Object(u.jsx)(i.b,{exact:!0,path:"/sesion",component:k}),Object(u.jsx)(i.b,{exact:!0,path:"/createcalendar",component:w}),Object(u.jsx)(i.b,{exact:!0,path:"/editcalendar",component:B})]})})},P=document.getElementById("root");s.a.render(Object(u.jsx)(L,{}),P)}},[[44,1,2]]]);
//# sourceMappingURL=main.ad5fc2d9.chunk.js.map