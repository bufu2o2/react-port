(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),l=a.n(o),i=(a(31),a(1)),r=a(7),s=function(){return c.a.createElement("div",null,"Hi! My name is Jake")},u=a(22),m=Object(n.createContext)(),d=function(e){var t=Object(n.useState)("Home"),a=Object(i.a)(t,2),o=a[0],l=a[1];return c.a.createElement(m.Provider,{value:[o,l]},e.children)},p=Object(n.createContext)(),f=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],l=a[1];return c.a.createElement(p.Provider,{value:[o,l]},e.children)},b=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),o=a[0],l=a[1];return c.a.createElement(b.Provider,{value:[o,l]},e.children)},y=Object(n.createContext)(),E=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),o=a[0],l=a[1];return c.a.createElement(y.Provider,{value:[o,l]},e.children)},h=Object(n.createContext)(),g=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),o=a[0],l=a[1];return c.a.createElement(h.Provider,{value:[o,l]},e.children)},j=Object(n.createContext)(),O=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],l=a[1];return c.a.createElement(j.Provider,{value:[o,l]},e.children)},x=function(e){var t=Object(n.useState)(e.xpos),a=Object(i.a)(t,2),o=a[0],l=a[1],r=Object(n.useState)(e.ypos),s=Object(i.a)(r,2),u=s[0],m=s[1];return o!==e.xpos&&l(e.xpos),u!==e.ypos&&m(e.ypos),c.a.createElement(n.Fragment,null,c.a.createElement("div",{style:{opacity:e.opacityLeft},id:"navGuide-L",className:"navGuide"},c.a.createElement("i",{style:o>0?{left:"calc(100%/215*".concat(o,")")}:{right:"calc(100%/-215*".concat(o,")")},className:"right"}),c.a.createElement("div",{id:"l"},c.a.createElement("div",null,e.left))),c.a.createElement("div",{style:{opacity:e.opacityRight},id:"navGuide-R",className:"navGuide"},c.a.createElement("i",{style:o>0?{left:"calc(100%/215*".concat(o,")")}:{right:"calc(100%/-215*".concat(o,")")},className:"left"}),c.a.createElement("div",{id:"r"},c.a.createElement("div",null,e.right))),c.a.createElement("div",{style:{opacity:e.opacityUp},id:"navGuide-U",className:"navGuide"},c.a.createElement("i",{style:u>0?{top:"calc(100%/215*".concat(u,")")}:{bottom:"calc(100%/-215*".concat(u,")")},className:"down"}),c.a.createElement("div",{id:"u"},c.a.createElement("div",null,e.up))),c.a.createElement("div",{style:{opacity:e.opacityDown},id:"navGuide-D",className:"navGuide"},c.a.createElement("i",{style:u>0?{top:"calc(100%/215*".concat(u,")")}:{bottom:"calc(100%/-215*".concat(u,")")},className:"up"}),c.a.createElement("div",{id:"d"},c.a.createElement("div",null,e.down))))},w=function(e){var t=Object(n.useContext)(m),a=Object(i.a)(t,2),o=(a[0],a[1]),l=Object(n.useContext)(p),r=Object(i.a)(l,2),s=r[0],d=r[1],f=Object(n.useContext)(b),v=Object(i.a)(f,2),E=(v[0],v[1]),g=Object(n.useContext)(h),O=Object(i.a)(g,2),w=(O[0],O[1]),C=Object(n.useContext)(y),S=Object(i.a)(C,2),k=(S[0],S[1],Object(n.useContext)(j)),N=Object(i.a)(k,2),_=N[0],D=N[1],P=Object(n.useState)(0),T=Object(i.a)(P,2),L=T[0],M=T[1],I=Object(n.useState)(0),A=Object(i.a)(I,2),F=A[0],R=A[1],B=Object(n.useState)(0),G=Object(i.a)(B,2),H=G[0],W=G[1],z=Object(n.useState)(0),U=Object(i.a)(z,2),q=U[0],J=U[1],X=Object(n.useState)(0),V=Object(i.a)(X,2),Z=V[0],$=V[1],K=Object(n.useState)(0),Q=Object(i.a)(K,2),Y=Q[0],ee=Q[1],te=Object(n.useState)(""),ae=Object(i.a)(te,2),ne=ae[0],ce=ae[1],oe=function(){ce(""),J(0),$(0),ee(0),W(0),M(0),R(0)};return c.a.createElement(n.Fragment,null,c.a.createElement(x,{xpos:L,ypos:F,opacityUp:H,opacityDown:q,opacityLeft:Z,opacityRight:Y,left:e.swipeRight,right:e.swipeLeft,down:"Nav",up:e.swipeDown||"Contact"}),c.a.createElement(u.a,{onSwipeEnd:function(){switch(ne){case"d":D(!_),oe();break;case"l":setTimeout(function(){w(!1)},300),setTimeout(function(){w(!0),o(e.swipeLeft)},1e3),oe();break;case"r":setTimeout(function(){E(!1)},300),setTimeout(function(){E(!0),o(e.swipeRight)},1e3),oe();break;case"u":D(!1),d(!s),oe();default:D(!1),d(!1),oe()}},detectMouse:!1,detectTouch:!0,delta:200,onSwipingLeft:function(e){M(e),ce("l")},onSwipingRight:function(e){M(e),ce("r")},onSwipingUp:function(e){R(e),ce("u")},onSwipingDown:function(e){R(e),ce("d")},onSwipe:function(e){if(0!==e.x){M(e.x);var t=Math.floor(e.x)/2/100;t>0?$(t):ee(Math.abs(t))}if(0!==e.y){R(e.y);var a=Math.floor(e.y)/2/100;a>0?W(a):J(Math.abs(a))}}},c.a.createElement("div",{id:"testdiv"})))},C=r.a.div({init:{scale:1},enter:{y:200,opacity:1,delay:300},exit:{y:400,opacity:.2,delay:300},transition:{type:"physics",velocity:1e3}}),S=r.a.div({enter:{y:400,opacity:1,delay:200},exit:{y:1e3,opacity:0,delay:450},transition:{type:"physics",velocity:1e3}}),k=(r.a.div({enter:{opacity:1},exit:{opacity:0}}),r.a.div({draggable:!0,hoverable:!0,hover:{scale:2},init:{scale:1},drag:{scale:3},dragEnd:{x:0,y:0,transition:{type:"spring"}}})),N=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",{className:"pageTransition"},c.a.createElement(w,{swipeLeft:"About",swipeRight:"Portfolio"}),c.a.createElement("div",{className:"pageTitle"},c.a.createElement(C,{className:"pointerHover",pose:a?"enter":"exit",onClick:function(){o(!a)}},c.a.createElement(k,null,c.a.createElement(s,null))),c.a.createElement(S,{className:"pointerHover",pose:a?"enter":"exit"},c.a.createElement(k,null," Welcome "))))},_=function(){return c.a.createElement("div",{className:"pageTransition"},c.a.createElement(w,{swipeLeft:"Portfolio",swipeRight:"Home"}),c.a.createElement("h1",null,"About Page"))},D=function(){return c.a.createElement("div",{className:"pageTransition"},c.a.createElement(w,{swipeLeft:"Home",swipeRight:"About"}),c.a.createElement("h1",null,"Portfolio Page"))},P=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],l=a[1],r=Object(n.useContext)(m),s=Object(i.a)(r,2),u=s[0],d=s[1],f=Object(n.useContext)(p),v=Object(i.a)(f,2),y=v[0],E=v[1],h=Object(n.useContext)(b),g=Object(i.a)(h,2),O=(g[0],g[1]),x=Object(n.useContext)(j),w=Object(i.a)(x,2),C=(w[0],w[1]),S=function(){l(!o)},k={container:{opacity:0,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",animation:"1s appear forwards",animationDelay:"".concat(e.delay,"s")},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"2rem",fontWeight:800,padding:"1rem 0",cursor:"crosshair",opacity:1,color:o?"#af1f24":"black",transition:"color 0.2s ease-in-out",animation:"1s slideIn forwards",animationDelay:"".concat(e.delay,"s")},line:{height:"1px",boxShadow:"1px 1px 3px",background:o?"#af1f24":"#808080",margin:"0 auto",transition:"color 0.2s ease-in-out",animation:"0.5s shrink forwards",animationDelay:"".concat(e.delay+.1,"s")}};return c.a.createElement("div",{style:k.container},c.a.createElement("div",{style:k.menuItem,onMouseEnter:function(){S()},onMouseLeave:function(){S()},onClick:function(){E(!y),setTimeout(function(){"Contact"!==e.val&&e.val!==u&&O(!1)},500),setTimeout(function(){"Contact"===e.val?C(!0):(O(!0),d(e.val))},1e3)}},e.children),c.a.createElement("div",{style:k.line}))},T=function(e){var t=Object(n.useState)(!!e.open&&e.open),a=Object(i.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)(function(){l(e.open)},[e.open]);var r={container:{position:"absolute",bottom:0,right:0,height:o?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"#daa520",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{zindex:5,height:"100%",width:"100&",color:"black",display:"flex",flexDirection:"column",justifyContent:"space-Around",alignItems:"space-around",opacity:1,background:"#daa520"}};return c.a.createElement("div",{style:r.container},o?c.a.createElement("div",{id:"menuitemlist",style:r.menuList}," ",e.menuItems):null)},L=a(9),M=function(e){var t=Object(n.useState)(!!e.open&&e.open),a=Object(i.a)(t,2),o=a[0],l=a[1],r=Object(n.useState)(e.color?e.color:"black"),s=Object(i.a)(r,2),u=s[0];s[1];Object(n.useEffect)(function(){e.open!==o&&l(e.open)},[e.open]);var m={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"crosshair",padding:"4px"},line:{height:"2px",width:"20px",background:u,transition:"all .8s ease"},lineTop:{transform:o?"translateX(3px) rotate(405deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:o?0:1,transform:o?"translateX(20px)":"none"},lineBottom:{transform:o?"translateX(2px) rotate(315deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return c.a.createElement("div",{style:m.container,onClick:e.onClick?e.onClick:function(){l(!o)}},c.a.createElement("div",{style:Object(L.a)({},m.line,m.lineTop)}),c.a.createElement("div",{style:Object(L.a)({},m.line,m.lineMiddle)}),c.a.createElement("div",{style:Object(L.a)({},m.line,m.lineBottom)}))},I=function(e){var t=Object(n.useContext)(j),a=Object(i.a)(t,2),o=(a[0],a[1]);return console.log(e.open),c.a.createElement("div",{id:"modalContainer"},c.a.createElement("div",{id:"close",onClick:function(){return o(!1)}},"\xd7"),c.a.createElement("div",{id:"modalTop"}),c.a.createElement("div",{id:"modalBottom"},e.component))},A=a(12),F=a(53),R=a(23),B=function(){var e=Object(n.useContext)(j),t=Object(i.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)({name:"",subject:"",email:"",phone:"",message:""}),l=Object(i.a)(o,2),r=l[0],s=l[1],u=r.name,m=r.subject,d=r.email,p=r.phone,f=r.message,b=function(e){return s(Object(L.a)({},r,Object(A.a)({},e.target.name,e.target.value)))},v={from_name:"from_name_value",from_subject:"from_subject_value",reply_to:"reply_to_value",to_name:"to_name_value",message_html:"message_html_value"},y="bufu2o2",E="Portfolio_contact-Me",h="user_hz3FeZv9n0eggWA6hV8a6";return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Object(L.a)({},r,{name:u,subject:m,email:d,phone:p,message:f});console.log(t),v={from_name:u,from_subject:m,reply_to:d,phone:p,to_name:"jake",message_html:f},R.send(y,E,v,h).then(function(e){console.log("SUCCESS!",e.status,e.text)},function(e){console.log("FAILED...",e)}),s({name:"",subject:"",email:"",phone:"",message:""}),a(!1)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Name"),c.a.createElement("input",{className:"form-half",id:"form-name",type:"text",name:"name",placeholder:"Name",required:!0,value:u,onChange:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Subject"),c.a.createElement("input",{className:"form-half",id:"form-subject",type:"text",name:"subject",placeholder:"Subject",required:!0,value:m,onChange:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email"),c.a.createElement("input",{className:"form-half",id:"form-email",type:"email",name:"email",placeholder:"Email",required:!0,value:d,onChange:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Phone"),c.a.createElement("input",{className:"form-half",id:"form-phone",type:"phone",name:"phone",placeholder:"Phone Number",value:p,onChange:b})),c.a.createElement("div",{className:"form-group",id:"-message"},c.a.createElement("label",null,"Message"),c.a.createElement("textarea",{id:"form-message",type:"textarea",name:"message",placeholder:"Message",required:!0,value:f,onChange:b})),c.a.createElement("div",{className:"center"},c.a.createElement("button",{type:"submit",value:"submit",id:"form-submit"},c.a.createElement(F.a,{id:"form-submit-icon"},"send"))))))},G=(a(40),r.a.div({hoverable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.5,boxShadow:"0px 10px 10px rgba(0,0,0,0.2)"}})),H=r.a.div({enter:{opacity:1,y:0},down:{opacity:0,y:"-300%"},transition:{type:"physics",velocity:200}}),W=function(e){var t=Object(n.useContext)(p),a=Object(i.a)(t,2),o=a[0],l=a[1],r=Object(n.useContext)(j),s=Object(i.a)(r,2),u=s[0],m=s[1],d=function(){l(!1)},f={container:{position:"fixed",bottom:"30px",right:"10px",float:"center",zIndex:"99",opacity:.9,display:"flex",alignItems:"center",background:"grey",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{background:"black",display:"flex",textAlign:"center",flexDirection:"column",alignContent:"center",width:"100vw",height:"100vh",filter:o||u?"blur(2px)":null,transition:"filter 1s ease"},modal:{display:"flex",textAlign:"center",flexDirection:"column",alignContent:"center",width:"100vw",height:"100vh",transition:"filter 1s ease"}},b=["Home","About","Portfolio","Contact"].map(function(e,t){return c.a.createElement(G,{key:3.141592659589*t},c.a.createElement(P,{key:3.141592659589*t,val:e,index:t,onClick:function(){d()},delay:.1*t},e))});return c.a.createElement("div",null,c.a.createElement("div",{className:"circleBase",id:"navMenuBtn",style:f.container},c.a.createElement(M,{open:o,onClick:function(){return m(!1),void l(!o)},color:"white"})),c.a.createElement(T,{menuItems:b,open:o,onClick:function(){d()}}),c.a.createElement(H,{id:"modal",pose:u?"enter":"down"},c.a.createElement(I,{open:u,component:c.a.createElement(B,null),title:"Lets Work Together!"})))},z=r.a.div({enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:"-200%"},left:{opacity:0,x:"-200%"},down:{opacity:0,y:"1000%"},right:{opacity:0,x:"200%"},transition:{type:"physics",velocity:200}}),U=function(){var e=Object(n.useContext)(m),t=Object(i.a)(e,2),a=t[0],o=(t[1],Object(n.useContext)(b)),l=Object(i.a)(o,2),r=l[0],s=(l[1],Object(n.useContext)(h)),u=Object(i.a)(s,2),d=u[0],p=(u[1],Object(n.useContext)(y)),f=Object(i.a)(p,2),v=f[0],E=(f[1],Object(n.useContext)(j)),g=Object(i.a)(E,2),O=g[0],x=(g[1],function(){return d?r?v?v||r||d?v?"enter":"down":void 0:v?"enter":"down":r?"enter":"right":d?"enter":"left"}),w={filter:O?"blur(3px)":null};switch(a){case"Home":return c.a.createElement(n.Fragment,null,c.a.createElement(W,null),c.a.createElement(z,{style:w,pose:x()},c.a.createElement(N,null)));case"About":return c.a.createElement(n.Fragment,null,c.a.createElement(W,null),c.a.createElement(z,{style:w,pose:x()},c.a.createElement(_,null)));case"Portfolio":return c.a.createElement(n.Fragment,null,c.a.createElement(W,null),c.a.createElement(z,{style:w,pose:x()},c.a.createElement(D,null)))}return c.a.createElement(n.Fragment,null,c.a.createElement("h1",null,a))},q=(a(41),function(){return c.a.createElement("div",{id:"particles-js"})});a(42);var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(q,null),c.a.createElement(v,null,c.a.createElement(d,null,c.a.createElement(O,null,c.a.createElement(g,null,c.a.createElement(E,null,c.a.createElement(f,null,c.a.createElement(U,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.5deca8a6.chunk.js.map