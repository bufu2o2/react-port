(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(45)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),l=n.n(i),c=(n(17),n(1)),r=n(3),s=function(){return o.a.createElement("div",null,"Hi! My name is Jake")},u=n(6),m=Object(a.createContext)(),p=function(e){var t=Object(a.useState)("Home"),n=Object(c.a)(t,2),i=n[0],l=n[1];return o.a.createElement(m.Provider,{value:[i,l]},e.children)},d=Object(a.createContext)(),f=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],l=n[1];return o.a.createElement(d.Provider,{value:[i,l]},e.children)},g=function(e){var t=Object(a.useContext)(m),n=Object(c.a)(t,2),i=(n[0],n[1]),l=Object(a.useContext)(d),r=Object(c.a)(l,2),s=r[0],p=r[1],f=Object(a.useState)(0),g=Object(c.a)(f,2),b=(g[0],g[1]),y=Object(a.useState)(0),E=Object(c.a)(y,2),h=(E[0],E[1]);return o.a.createElement(u.a,{onSwipingLeft:function(t){b(t),t<-250&&(console.log("Swiped left",t),i(e.swipeLeft))},onSwipingRight:function(t){b(t),t>250&&(console.log("Swiped right",t),i(e.swipeRight))},onSwipingUp:function(e){h(e),e<-250&&(p(!s),console.log("Swiped up",e))},onSwipingDown:function(t){h(t),t>250&&(console.log("Swiped down",t),i(e.swipeDown||"Contact"))},onSwipeListener:function(e){0!==e.x&&console.log("Swipe x: ".concat(e.x)),0!==e.y&&console.log("Swipe y: ".concat(e.y))}},o.a.createElement("div",{id:"testdiv"}))},b=r.a.div({init:{scale:1},enter:{y:200,opacity:1,delay:300},exit:{y:400,opacity:.2,delay:300},transition:{type:"physics",velocity:1e3}}),y=r.a.div({enter:{y:400,opacity:1,delay:200},exit:{y:1e3,opacity:0,delay:450},transition:{type:"physics",velocity:1e3}}),E=r.a.div({draggable:!0,hoverable:!0,hover:{scale:2},init:{scale:1},drag:{scale:3},dragEnd:{x:0,y:0,transition:{type:"spring"}}}),h=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],i=t[1];return o.a.createElement("div",{className:"pageTransition"},o.a.createElement(g,{swipeLeft:"About",swipeRight:"Portfolio"}),o.a.createElement("div",{className:"pageTitle"},o.a.createElement(b,{className:"box",pose:n?"enter":"exit",onClick:function(){i(!n)}},o.a.createElement(E,null,o.a.createElement(s,null))),o.a.createElement(y,{className:"wholder",pose:n?"enter":"exit"},o.a.createElement(E,null," Welcome "))))},x=function(){return o.a.createElement("div",{className:"pageTransition"},o.a.createElement(g,{swipeLeft:"Portfolio",swipeRight:"Home"}),o.a.createElement("h1",null,"About Page"))},v=function(){return o.a.createElement("div",{className:"pageTransition"},o.a.createElement(g,{swipeLeft:"Home",swipeRight:"About"}),o.a.createElement("h1",null,"Portfolio Page"))},w=function(){return o.a.createElement("div",{className:"pageTransition"},o.a.createElement(g,{swipeLeft:"About",swipeRight:"Portfolio",swipeDown:"Home"}),o.a.createElement("h1",null,"Contact Page"))},j=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],l=n[1],r=Object(a.useContext)(m),s=Object(c.a)(r,2),u=(s[0],s[1]),p=Object(a.useContext)(d),f=Object(c.a)(p,2),g=f[0],b=f[1],y=function(){l(!i)},E={container:{opacity:0,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",animation:"1s appear forwards",animationDelay:"".concat(e.delay,"s")},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"2rem",fontWeight:800,padding:"1rem 0",cursor:"crosshair",opacity:1,color:i?"#af1f24":"black",transition:"color 0.2s ease-in-out",animation:"1s slideIn forwards",animationDelay:"".concat(e.delay,"s")},line:{height:"1px",boxShadow:"1px 1px 3px",background:i?"#af1f24":"#808080",margin:"0 auto",transition:"color 0.2s ease-in-out",animation:"0.5s shrink forwards",animationDelay:"".concat(e.delay+.1,"s")}};return o.a.createElement("div",{style:E.container},o.a.createElement("div",{style:E.menuItem,onMouseEnter:function(){y()},onMouseLeave:function(){y()},onClick:function(){u(e.val),b(!g)}},e.children),o.a.createElement("div",{style:E.line}))},O=function(e){var t=Object(a.useState)(!!e.open&&e.open),n=Object(c.a)(t,2),i=n[0],l=n[1];Object(a.useEffect)(function(){l(e.open)},[e.open]);var r={container:{position:"absolute",bottom:0,right:0,height:i?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"#daa520",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{zindex:5,height:"100%",width:"100&",color:"black",display:"flex",flexDirection:"column",justifyContent:"space-Around",alignItems:"space-around",opacity:1,background:"#daa520"}};return o.a.createElement("div",{style:r.container},i?o.a.createElement("div",{id:"menuitemlist",style:r.menuList}," ",e.menuItems):null)},k=n(4),S=function(e){var t=Object(a.useState)(!!e.open&&e.open),n=Object(c.a)(t,2),i=n[0],l=n[1],r=Object(a.useState)(e.color?e.color:"black"),s=Object(c.a)(r,2),u=s[0];s[1];Object(a.useEffect)(function(){e.open!==i&&l(e.open)},[e.open]);var m={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"crosshair",padding:"4px"},line:{height:"2px",width:"20px",background:u,transition:"all .8s ease"},lineTop:{transform:i?"translateX(3px) rotate(405deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:i?0:1,transform:i?"translateX(20px)":"none"},lineBottom:{transform:i?"translateX(2px) rotate(315deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return o.a.createElement("div",{style:m.container,onClick:e.onClick?e.onClick:function(){l(!i)}},o.a.createElement("div",{style:Object(k.a)({},m.line,m.lineTop)}),o.a.createElement("div",{style:Object(k.a)({},m.line,m.lineMiddle)}),o.a.createElement("div",{style:Object(k.a)({},m.line,m.lineBottom)}))},C=(n(18),r.a.div({hoverable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.5,boxShadow:"0px 10px 10px rgba(0,0,0,0.2)"}})),I=function(e){var t=Object(a.useContext)(d),n=Object(c.a)(t,2),i=n[0],l=n[1],r=function(){console.log("this is menu open before click     ",i),l(!1),console.log("this is menu open after click     ",i)},s={container:{position:"absolute",bottom:"30px",right:"10px",zIndex:"99",opacity:.9,display:"flex",alignItems:"center",background:"grey",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{background:"black",display:"flex",textAlign:"center",flexDirection:"column",alignContent:"center",width:"100vw",height:"100vh",filter:i?"blur(2px)":null,transition:"filter 1s ease"}},u=["Home","About","Portfolio","Contact"].map(function(e,t){return o.a.createElement(C,{key:3.141592659589*t},o.a.createElement(j,{key:3.141592659589*t,val:e,index:t,onClick:function(){r()},delay:.1*t},e))});return o.a.createElement("div",null,o.a.createElement("div",{className:"circleBase",id:"navMenuBtn",style:s.container},o.a.createElement(S,{open:i,onClick:function(){l(!i)},color:"white"})),o.a.createElement(O,{menuItems:u,open:i,onClick:function(){r()}}))},D=function(){var e=Object(a.useContext)(m),t=Object(c.a)(e,2),n=t[0];t[1];switch(n){case"Home":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(h,null));case"About":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(x,null));case"Portfolio":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(v,null));case"Contact":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(w,null))}return o.a.createElement(a.Fragment,null,o.a.createElement("h1",null,n))},L=(n(19),function(){return o.a.createElement("div",{id:"particles-js"})});n(20),n(21);var P=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(L,null),o.a.createElement(p,null,o.a.createElement(f,null,o.a.createElement(D,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.d061acd8.chunk.js.map