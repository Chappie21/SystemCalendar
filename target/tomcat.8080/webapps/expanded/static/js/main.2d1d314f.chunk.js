(this.webpackJsonpcalendarclint=this.webpackJsonpcalendarclint||[]).push([[0],{15:function(e,r,t){},31:function(e,r,t){},38:function(e,r,t){},39:function(e,r,t){},40:function(e,r,t){},41:function(e,r,t){},42:function(e,r,t){},43:function(e,r,t){},44:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),c=t(20),o=t.n(c),i=t(16),s=t(3),l=t(21),d=t(22),j=t(26),b=t(25),u=(t(31),t(0)),m=Object(s.f)((function(e){var r=e.history;return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"cardContainer",children:[Object(u.jsxs)("div",{className:"textHeader",children:[Object(u.jsx)("header",{className:"Title",children:Object(u.jsx)("h1",{children:e.Title})}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:e.Text})})]}),Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)("button",{name:"login",className:"button-menu",onClick:function(){return r.push("/login")},children:"Iniciar Sesion"}),Object(u.jsx)("button",{name:"register",className:"button-menu",onClick:function(){return r.push("/register")},children:"Registrarse"})]})]})})})})),O=["Comience una vida m\xe1s organziada, cree su propio sistema de calendario","\xbfDepende mucho de su tiempo? \xa1es hora de distribuirlo!","El tiempo es valioso, y organizarlo har\xe1 que valga la pena","\xa1Comparta su tiempo con sus amigos o colegas!"],h=O[Math.floor(Math.random()*O.length)],x=function(e){Object(j.a)(t,e);var r=Object(b.a)(t);function t(){return Object(l.a)(this,t),r.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Big-container",children:Object(u.jsx)(m,{Title:"SystemCalendar",Text:h})})}}]),t}(a.a.Component),p=t(4),v=function(e){var r=Object(n.useState)({Login:!1,Calendarios:[]}),t=Object(p.a)(r,2),a=t[0],c=t[1];return Object(u.jsx)("div",{children:Object(u.jsx)(g.Provider,{value:[a,c],children:e.children})})},g=Object(n.createContext)(),C=t(6),f=t(2),N=(t(38),function(e){return Object(u.jsx)(n.Fragment,{children:function(){var r={backgroundColor:"",color:"",fontSize:"15px",border:"",borderRadius:"5px",padding:"8px"};return e.status>=200&&e.status<=207||"green"===e.color?(r.backgroundColor="rgb(154, 205, 50)",r.color="green",r.border="solid green 3px"):e.status>=400&&e.status<=413||"yellow"===e.color?(r.backgroundColor="rgb(250, 250, 210)",r.color="rgb(255, 215, 0)",r.border="solid rgb(255, 215, 0) 3px"):(e.status>=500&&e.status<=503||"red"===e.color)&&(r.backgroundColor="rgb(240, 128, 128)",r.color="rgb(178, 34, 34)",r.border="solid rgb(178, 34, 34) 3px"),Object(u.jsx)("div",{style:r,children:Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e.msg})})})}()})}),y=function(){var e=Object(n.useState)({UserName:"",Clave:"",ResultServer:{}}),r=Object(p.a)(e,2),t=r[0],a=r[1],c=Object(n.useContext)(g),o=Object(p.a)(c,2),i=o[0],l=o[1],d=function(e){a(Object(f.a)(Object(f.a)({},t),{},Object(C.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{className:"p-container",children:Object(u.jsxs)("div",{className:"p-container",children:[Object(u.jsx)("div",{className:"container-form-login",children:Object(u.jsxs)("form",{id:"form-login",onSubmit:function(e){e.preventDefault();var r=new FormData(document.getElementById("form-login"));fetch("/Login",{method:"POST",mode:"cors",body:r}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){var r={exito:200===e.status,msg:e.message,UserName:e.UserName};a(Object(f.a)(Object(f.a)({},t),{},Object(C.a)({},"ResultServer",r))),l(Object(f.a)(Object(f.a)({},i),{},{Login:r.exito,UserName:r.UserName}))}))},children:[Object(u.jsx)("header",{children:Object(u.jsx)("h2",{children:"Iniciar de Sesion"})}),Object(u.jsx)("input",{type:"text",name:"UserName",placeholder:"Nombre de usuario o correo",value:t.UserName,onChange:d}),Object(u.jsx)("input",{type:"password",name:"Clave",placeholder:"Contrase\xf1a",value:t.Clave,onChange:d}),Object(u.jsx)("div",{children:!1===t.ResultServer.exito?Object(u.jsx)(N,{color:"red",msg:t.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Iniciar"})]})}),Object(u.jsx)("div",{children:i.Login?Object(u.jsx)(s.a,{to:"/sesion"}):""})]})})},_=(t(39),function(e){var r=Object(n.useState)({UserName:"",Correo:"",Clave:"",ConfirmarClave:"",serverResponse:{},FormError:{}}),t=Object(p.a)(r,2),a=t[0],c=t[1],o=e.history,i=function(e){var r;c(Object(f.a)(Object(f.a)({},a),{},(r={},Object(C.a)(r,e.target.name,e.target.value),Object(C.a)(r,"FormError",l()),r)))},s=function(){return 0!==a.ConfirmarClave.length&&a.Clave===a.ConfirmarClave},l=function(){var e={color:"",msg:""};return""===a.UserName||""===a.Correo||""===a.Clave?(e.color="red",e.msg="Rellene todo el formulario"):s()?(e.color="red",e.msg="Claves no coinciden"):e={},e};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"container-img"}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"\xa1Registrarse Ahora!"}),Object(u.jsx)("p",{children:"Comience a organizar su vida, y a compartirla con sus amigos"})]}),Object(u.jsxs)("form",{id:"form-register",onSubmit:function(e){if(e.preventDefault(),s()){var r=document.getElementById("form-register"),t={method:"POST",body:new FormData(r)};fetch("Register",t).then((function(e){return e.json()})).then((function(e){c(Object(f.a)(Object(f.a)({},a),{},Object(C.a)({},"serverResponse",e)))}))}else console.log("Contrase\xf1as no congruentes")},children:[Object(u.jsx)("input",{name:"UserName",type:"text",placeholder:"Nombre de usuario",onChange:i,value:a.UserName}),Object(u.jsx)("input",{name:"Correo",type:"email",placeholder:"Correo Electronico",onChange:i,value:a.Correo}),Object(u.jsx)("input",{name:"Clave",type:"password",placeholder:"Contrase\xf1a",onChange:i,value:a.Clave}),Object(u.jsx)("input",{name:"ConfirmarClave",type:"password",placeholder:"Confirmar Contrase\xf1a",onChange:i,value:a.ConfirmarClave}),Object(u.jsx)("div",{children:a.serverResponse||a.FormError?Object(u.jsx)(N,{status:a.serverResponse.status,color:a.FormError.color,msg:a.serverResponse.message||a.FormError.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Relizar registro"}),Object(u.jsx)("div",{children:200===a.serverResponse.status?Object(u.jsx)("button",{onClick:function(){return o.push("/login")},children:"Ir al login"}):""})]})]})})]})}),I=function(){var e=Object(n.useContext)(g),r=Object(p.a)(e,2),t=r[0];r[1];return Object(u.jsx)(n.Fragment,{children:t.Login?"":Object(u.jsx)(s.a,{to:"/login"})})},D=(t(40),function(e){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:1===e.type?Object(u.jsxs)("div",{id:"Navbar",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("img",{src:e.img}),Object(u.jsx)("label",{className:"NameUser",children:e.UserName})]}),Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"mes",children:Object(u.jsx)("p",{children:"Jun - Julio 2021"})}),Object(u.jsx)("div",{className:"actividad",children:Object(u.jsx)("p",{children:"Siguiente tarea: "})})]})]}):Object(u.jsxs)("div",{id:"Navbar",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("img",{src:e.img}),Object(u.jsx)("label",{className:"NameUser",children:e.UserName})]}),Object(u.jsx)("div",{className:"items",children:Object(u.jsx)("button",{onClick:function(){return e.history.push("/sesion")},children:"Volver"})})]})})})}),R=(t(41),t(24)),S=(t(42),t.p+"static/media/edit.ad7b095d.svg"),E=function(e){var r=!0,t=Object(n.useContext)(g),a=Object(p.a)(t,2),c=a[0],o=a[1],i=function(r){var t,n=Object(R.a)(e.calendar);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.Id_calendario===parseInt(r.target.id)&&(o(Object(f.a)(Object(f.a)({},c),{},{EditCalendar:a})),e.history.push("/editcalendar"))}}catch(i){n.e(i)}finally{n.f()}};return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"lista",children:[Object(u.jsx)("li",{name:"title",onClick:function(t){var n=document.getElementById(e.type);r?(n.className="lista-interna",r=!1):(n.className="lista-interna-down",r=!0)},children:Object(u.jsx)("strong",{children:e.title})}),Object(u.jsx)("ul",{className:"lista-interna-down",id:e.type,children:e.calendar.map((function(r){if(r.rol===e.type)return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",name:e.type}),Object(u.jsx)("label",{id:r.Id_calendario,style:{color:r.Color_calendario,padding:"5px"},children:r.Nombre_calendario}),"prop"===r.rol?Object(u.jsx)("label",{id:r.Id_calendario,onClick:i,children:Object(u.jsx)("img",{src:S,id:r.Id_calendario})}):""]})},r.Nombre_calendario)}))})]})})})},A=function(e){return Object(u.jsx)(n.Fragment,{children:Object(u.jsx)("div",{className:"bar-container",children:Object(u.jsxs)("div",{className:"bar-calendar",children:[Object(u.jsx)(E,{title:"Calendarios",calendar:e.calendar,type:"prop",history:e.history}),Object(u.jsx)(E,{title:"Calendarios invitados",calendar:e.calendar,type:"inv"}),Object(u.jsx)("button",{onClick:function(){return e.history.push("/createcalendar")},children:"Crear calendario"})]})})})},U=t.p+"static/media/user.e4db1f65.svg",F=[{Id_calendario:1,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"red",rol:"prop"},{Id_calendario:2,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"blue",rol:"prop"},{Id_calendario:3,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"pink",rol:"prop"},{Id_calendario:4,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"green",rol:"prop"},{Id_calendario:5,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"yellow",rol:"prop"},{Id_calendario:6,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"brown",rol:"inv"},{Id_calendario:7,Nombre_calendario:"Algo",Descripcion_calendario:"DESCRIPCION DE CALENDARIO",Color_calendario:"blue",rol:"inv"}],k=function(e){var r=e.history,t=Object(n.useContext)(g),a=Object(p.a)(t,2),c=a[0];a[1];return Object(n.useEffect)((function(){}),[]),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(I,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(D,{type:1,img:U,UserName:c.UserName}),Object(u.jsx)(A,{calendar:F,history:r})]})]})},w=(t(15),function(e){var r=e.history,t=Object(n.useContext)(g),a=Object(p.a)(t,2),c=a[0],o=(a[1],Object(n.useState)({ResultServer:null})),i=Object(p.a)(o,2),s=i[0],l=i[1];return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(I,{}),Object(u.jsx)(D,{type:2,UserName:c.UserName,img:U,history:r}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"\xa1Crear nuevo calendario!"})}),Object(u.jsxs)("form",{id:"form-calendar",onSubmit:function(e){e.preventDefault();var r=new FormData(document.getElementById("form-calendar"));fetch("Calendar",{method:"POST",mode:"cors",body:r}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){l(Object(f.a)(Object(f.a)({},s),{},{ResultServer:e}))}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nombre del calendario",name:"Name_Calendar"}),Object(u.jsx)("textarea",{type:"textarea",placeholder:"Descripcion del calendario",name:"Description_Calendar"}),Object(u.jsx)("input",{type:"color",name:"Color_Calendar"}),Object(u.jsx)("div",{children:s.ResultServer?Object(u.jsx)(N,{status:s.ResultServer.status,msg:s.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Crear calendario"})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{})})]})]})}),L=(t(43),function(e){var r=Object(n.useState)({ResultServer:null}),t=Object(p.a)(r,2),a=t[0],c=t[1];return Object(u.jsx)(n.Fragment,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"\xa1Invitar usuarios!"})}),Object(u.jsxs)("form",{id:"form-invited",onSubmit:function(r){r.preventDefault();var t=new FormData(document.getElementById("form-invited"));t.append("Id_calendario",e.idCalendar),fetch("InviteCalendar",{method:"PUT",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){c(Object(f.a)(Object(f.a)({},a),{},{ResultServer:e}))})),setTimeout((function(){c({ResultServer:null})}),2e3)},children:[Object(u.jsx)("input",{type:"email",name:"Correo_usuario",placeholder:"Correo de usuario a invitar",value:a.Correo_usuario}),a.ResultServer?Object(u.jsx)(N,{status:a.ResultServer.status,msg:a.ResultServer.msg}):"",Object(u.jsx)("button",{type:"submit",children:"A\xf1adir usuario"})]})]})})}),P=function(e){var r=e.history,t=Object(n.useContext)(g),a=Object(p.a)(t,2),c=a[0],o=(a[1],Object(n.useState)({ResultServer:null,Id_calendrio:c.EditCalendar.Id_calendario,Nombre_calendario:c.EditCalendar.Nombre_calendario,Descripcion_calendario:c.EditCalendar.Descripcion_calendario,Color_calendario:c.EditCalendar.Color_calendario})),i=Object(p.a)(o,2),s=i[0],l=i[1],d=function(e){l(Object(f.a)(Object(f.a)({},s),{},Object(C.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(I,{}),Object(u.jsx)(D,{type:2,UserName:c.UserName,img:U,history:r}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"container-form",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"\xa1Editar Calendario!"})}),Object(u.jsxs)("form",{id:"form-calendar",onSubmit:function(e){e.preventDefault();var r=new FormData(document.getElementById("form-calendar"));r.append("Id_calendario",s.Id_calendrio),fetch("Calendar",{method:"PUT",mode:"cors",body:r}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){l(Object(f.a)(Object(f.a)({},s),{},{ResultServer:e}))}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nombre del calendario",name:"Nombre_calendario",onChange:d,value:s.Nombre_calendario}),Object(u.jsx)("textarea",{type:"textarea",placeholder:"Descripcion del calendario",name:"Descripcion_calendario",onChange:d,value:s.Descripcion_calendario}),Object(u.jsx)("input",{type:"color",name:"Color_calendario",onChange:d,value:s.Color_calendario}),Object(u.jsx)("div",{children:s.ResultServer?Object(u.jsx)(N,{status:s.ResultServer.status,msg:s.ResultServer.msg}):""}),Object(u.jsx)("button",{type:"submit",children:"Editar calendario"}),Object(u.jsx)("button",{name:"borrar",onClick:function(e){var t=new FormData;t.append("Id_calendario",s.Id_calendrio),fetch("Calendar",{method:"DELETE",mode:"cors",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){l(Object(f.a)(Object(f.a)({},s),{},{ResultServer:e})),setTimeout((function(){r.push("/sesion")}),1800)}))},children:"Borrar calendario"})]})]}),Object(u.jsx)("div",{className:"invited-container",children:Object(u.jsx)(L,{idCalendar:s.Id_calendrio})})]})]})},T=function(){return Object(u.jsx)(v,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(s.b,{exact:!0,path:"/",component:x}),Object(u.jsx)(s.b,{exact:!0,path:"/login",component:y}),Object(u.jsx)(s.b,{exact:!0,path:"/register",component:_}),Object(u.jsx)(s.b,{exact:!0,path:"/sesion",component:k}),Object(u.jsx)(s.b,{exact:!0,path:"/createcalendar",component:w}),Object(u.jsx)(s.b,{exact:!0,path:"/editcalendar",component:P})]})})},B=document.getElementById("root");o.a.render(Object(u.jsx)(T,{}),B)}},[[44,1,2]]]);
//# sourceMappingURL=main.2d1d314f.chunk.js.map