(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),l=(n(14),n(2)),c=n(3),s=function(){return o.a.createElement("div",null,"Hi! My name is Jake")},u=n(7),m=c.a.div({enter:{y:200,opacity:1,delay:300},exit:{y:400,opacity:.2,delay:300},transition:{type:"physics",velocity:1e3}}),d=c.a.div({enter:{y:400,opacity:1,delay:200},exit:{y:1e3,opacity:0,delay:450},transition:{type:"physics",velocity:1e3}}),p={drag:{y:10,transition:function(e){var t=e.charInWordIndex;return{type:"spring",velocity:100*Math.sin(1+t),damping:0,scale:2}}},dragEnd:{y:100,transition:{type:"spring",damping:10,stiffness:1e3}}},f={draggable:!0},b=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1];return o.a.createElement("div",{className:"pageTransition"},o.a.createElement("div",{className:"pageTitle"},o.a.createElement(m,{className:"box",pose:n?"enter":"exit",onClick:function(){i(!n)}},o.a.createElement(s,null)),o.a.createElement(d,{className:"wholder",pose:n?"enter":"exit"},o.a.createElement(u.a,{wordPoses:f,charPoses:p},"Welcome"))))},x=function(){return o.a.createElement("div",{className:"pageTransition"},o.a.createElement("h1",null,"About Page"))},g=function(){return o.a.createElement("div",{className:"pageTransition"},o.a.createElement("h1",null,"Portfolio Page"))},y=function(){return o.a.createElement("div",{className:"pageTransition"},o.a.createElement("h1",null,"Contact Page"))},h=Object(a.createContext)(),v=function(e){var t=Object(a.useState)("Home"),n=Object(l.a)(t,2),i=n[0],r=n[1];return o.a.createElement(h.Provider,{value:[i,r]},e.children)},E=Object(a.createContext)(),j=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1];return o.a.createElement(E.Provider,{value:[i,r]},e.children)},w=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1],c=Object(a.useContext)(h),s=Object(l.a)(c,2),u=(s[0],s[1]),m=Object(a.useContext)(E),d=Object(l.a)(m,2),p=d[0],f=d[1],b=function(){r(!i)},x={container:{opacity:0,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",animation:"1s appear forwards",animationDelay:"".concat(e.delay,"s")},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"2rem",fontWeight:800,padding:"1rem 0",cursor:"crosshair",opacity:1,color:i?"#af1f24":"black",transition:"color 0.2s ease-in-out",animation:"1s slideIn forwards",animationDelay:"".concat(e.delay,"s")},line:{height:"1px",boxShadow:"1px 1px 3px",background:i?"#af1f24":"#808080",margin:"0 auto",transition:"color 0.2s ease-in-out",animation:"0.5s shrink forwards",animationDelay:"".concat(e.delay+.1,"s")}};return o.a.createElement("div",{style:x.container},o.a.createElement("div",{style:x.menuItem,onMouseEnter:function(){b()},onMouseLeave:function(){b()},onClick:function(){u(e.val),f(!p)}},e.children),o.a.createElement("div",{style:x.line}))},O=function(e){var t=Object(a.useState)(!!e.open&&e.open),n=Object(l.a)(t,2),i=n[0],r=n[1];Object(a.useEffect)(function(){r(e.open)},[e.open]);var c={container:{position:"absolute",bottom:0,right:0,height:i?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"#daa520",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{zindex:5,height:"100%",width:"100&",color:"black",display:"flex",flexDirection:"column",justifyContent:"space-Around",alignItems:"space-around",opacity:1,background:"#daa520"}};return o.a.createElement("div",{style:c.container},i?o.a.createElement("div",{id:"menuitemlist",style:c.menuList}," ",e.menuItems):null)},k=n(4),C=function(e){var t=Object(a.useState)(!!e.open&&e.open),n=Object(l.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)(e.color?e.color:"black"),s=Object(l.a)(c,2),u=s[0];s[1];Object(a.useEffect)(function(){e.open!==i&&r(e.open)},[e.open]);var m={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"crosshair",padding:"4px"},line:{height:"2px",width:"20px",background:u,transition:"all .8s ease"},lineTop:{transform:i?"translateX(3px) rotate(405deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:i?0:1,transform:i?"translateX(20px)":"none"},lineBottom:{transform:i?"translateX(2px) rotate(315deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return o.a.createElement("div",{style:m.container,onClick:e.onClick?e.onClick:function(){r(!i)}},o.a.createElement("div",{style:Object(k.a)({},m.line,m.lineTop)}),o.a.createElement("div",{style:Object(k.a)({},m.line,m.lineMiddle)}),o.a.createElement("div",{style:Object(k.a)({},m.line,m.lineBottom)}))},S=(n(15),c.a.div({hoverable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.5,boxShadow:"0px 10px 10px rgba(0,0,0,0.2)"}})),I=(c.a.div({hoverable:!0,pressable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.2,boxShadow:"0px 5px 10px rgba(0,0,0,0.2)"},press:{scale:1.1,boxShadow:"0px 2px 5px rgba(0,0,0,0.1)"}}),function(e){var t=Object(a.useContext)(E),n=Object(l.a)(t,2),i=n[0],r=n[1],c=function(){console.log("this is menu open before click     ",i),r(!1),console.log("this is menu open after click     ",i)},s={container:{position:"absolute",bottom:"30px",right:"10px",zIndex:"99",opacity:.9,display:"flex",alignItems:"center",background:"grey",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{background:"black",display:"flex",textAlign:"center",flexDirection:"column",alignContent:"center",width:"100vw",height:"100vh",filter:i?"blur(2px)":null,transition:"filter 1s ease"}},u=["Home","About","Portfolio","Contact"].map(function(e,t){return o.a.createElement(S,{key:3.141592659589*t},o.a.createElement(w,{key:3.141592659589*t,val:e,index:t,onClick:function(){c()},delay:.1*t},e))});return o.a.createElement("div",null,o.a.createElement("div",{className:"circleBase",id:"navMenuBtn",style:s.container},o.a.createElement(C,{open:i,onClick:function(){r(!i)},color:"white"})),o.a.createElement(O,{menuItems:u,open:i,onClick:function(){c()}}))}),P=function(){var e=Object(a.useContext)(h),t=Object(l.a)(e,2),n=t[0];t[1];switch(n){case"Home":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(b,null));case"About":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(x,null));case"Portfolio":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(g,null));case"Contact":return o.a.createElement(a.Fragment,null,o.a.createElement(I,null),o.a.createElement(y,null))}return o.a.createElement(a.Fragment,null,o.a.createElement("h1",null,n))},N=(n(16),function(){return o.a.createElement("div",{id:"particles-js"})});n(17);var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,null),o.a.createElement(v,null,o.a.createElement(j,null,o.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.f5b55005.chunk.js.map