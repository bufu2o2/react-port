(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/avatar.58c8a96f.png"},26:function(e,t,a){e.exports=a.p+"static/media/chibiIronman.406697de.png"},27:function(e,t,a){e.exports=a.p+"static/media/myTime.df373e19.png"},33:function(e,t,a){e.exports=a(57)},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),c=a.n(o),l=(a(38),a(1)),r=a(4),m=function(){return i.a.createElement("div",null,"Hi! My name is Jake")},s=a(25),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)("Home"),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(u.Provider,{value:[o,c]},e.children)},p=Object(n.createContext)(),b=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(p.Provider,{value:[o,c]},e.children)},g=Object(n.createContext)(),f=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(g.Provider,{value:[o,c]},e.children)},y=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(y.Provider,{value:[o,c]},e.children)},h=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(h.Provider,{value:[o,c]},e.children)},x=Object(n.createContext)(),k=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(x.Provider,{value:[o,c]},e.children)},E=function(e){var t=Object(n.useState)(e.xpos),a=Object(l.a)(t,2),o=a[0],c=a[1],r=Object(n.useState)(e.ypos),m=Object(l.a)(r,2),s=m[0],u=m[1];return o!==e.xpos&&c(e.xpos),s!==e.ypos&&u(e.ypos),i.a.createElement(n.Fragment,null,i.a.createElement("div",{style:{opacity:2*e.opacityLeft},id:"navGuide-L",className:"navGuide"},i.a.createElement("i",{style:o>0?{left:"calc(100%/165*".concat(o,")")}:{right:"calc(100%/-165*".concat(o,")")},className:"right"}),i.a.createElement("div",{id:"l"},i.a.createElement("div",null,e.left))),i.a.createElement("div",{style:{opacity:2*e.opacityRight},id:"navGuide-R",className:"navGuide"},i.a.createElement("i",{style:o>0?{left:"calc(100%/165*".concat(o,")")}:{right:"calc(100%/-165*".concat(o,")")},className:"left"}),i.a.createElement("div",{id:"r"},i.a.createElement("div",null,e.right))),i.a.createElement("div",{style:{opacity:2*e.opacityUp},id:"navGuide-U",className:"navGuide"},i.a.createElement("i",{style:s>0?{top:"calc(100%/165*".concat(s,")")}:{bottom:"calc(100%/-165*".concat(s,")")},className:"down"}),i.a.createElement("div",{id:"u"},i.a.createElement("div",null,e.up))),i.a.createElement("div",{style:{opacity:2*e.opacityDown},id:"navGuide-D",className:"navGuide"},i.a.createElement("i",{style:s>0?{top:"calc(100%/165*".concat(s,")")}:{bottom:"calc(100%/-165*".concat(s,")")},className:"up"}),i.a.createElement("div",{id:"d"},i.a.createElement("div",null,e.down))))},j=function(e){var t=Object(n.useContext)(u),a=Object(l.a)(t,2),o=(a[0],a[1]),c=Object(n.useContext)(p),r=Object(l.a)(c,2),m=(r[0],r[1]),d=Object(n.useContext)(g),b=Object(l.a)(d,2),f=(b[0],b[1]),v=Object(n.useContext)(h),w=Object(l.a)(v,2),k=(w[0],w[1]),j=Object(n.useContext)(y),O=Object(l.a)(j,2),C=(O[0],O[1],Object(n.useContext)(x)),z=Object(l.a)(C,2),S=z[0],T=z[1],N=Object(n.useState)(0),I=Object(l.a)(N,2),A=I[0],M=I[1],P=Object(n.useState)(0),_=Object(l.a)(P,2),q=_[0],F=_[1],L=Object(n.useState)(0),B=Object(l.a)(L,2),H=B[0],D=B[1],R=Object(n.useState)(0),G=Object(l.a)(R,2),U=G[0],J=G[1],W=Object(n.useState)(0),X=Object(l.a)(W,2),V=X[0],K=X[1],Q=Object(n.useState)(0),Z=Object(l.a)(Q,2),$=Z[0],Y=Z[1],ee=Object(n.useState)(""),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ie=function(){ne(""),J(0),K(0),Y(0),D(0),M(0),F(0)};return i.a.createElement(n.Fragment,null,i.a.createElement(E,{xpos:A,ypos:q,opacityUp:H,opacityDown:U,opacityLeft:V,opacityRight:$,left:e.swipeRight,right:e.swipeLeft,down:"Nav",up:e.swipeDown||"Contact"}),i.a.createElement(s.a,{onSwipeEnd:function(){switch(ae){case"d":T(!S),ie();break;case"l":setTimeout(function(){k(!1)},300),setTimeout(function(){k(!0),o(e.swipeLeft)},1e3),ie();break;case"r":setTimeout(function(){f(!1)},300),setTimeout(function(){f(!0),o(e.swipeRight)},1e3),ie();break;case"u":T(!1),m(!0),ie();break;default:T(!1),m(!1),ie()}},detectMouse:!1,detectTouch:!0,delta:150,onSwipingLeft:function(e){M(e),ne("l")},onSwipingRight:function(e){M(e),ne("r")},onSwipingUp:function(e){F(e),ne("u")},onSwipingDown:function(e){F(e),ne("d")},onSwipe:function(e){if(0!==e.x){M(e.x);var t=Math.floor(e.x)/2/100;t>0?K(t):Y(Math.abs(t))}if(0!==e.y){F(e.y);var a=Math.floor(e.y)/2/100;a>0?D(a):J(Math.abs(a))}}},i.a.createElement("div",{id:"testdiv"})))},O=Object(n.createContext)(),C=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return i.a.createElement(O.Provider,{value:[o,c]},e.children)},z=r.a.div({init:{scale:1},open:{y:"calc(100vh * .25)",opacity:1,delay:200,filter:"blur(0px)",display:"inline-flex"},close:{y:"calc(100vh * .5)",opacity:.2,delay:300,filter:"blur(0px)",display:"inline-flex"},transition:{type:"physics",stiffness:1e3},load:{filter:"blur(5px)"},loaded:{filter:"blur(0px)"}}),S=r.a.div({open:{y:"calc(100vh * .45)",opacity:1,delay:200},close:{y:"calc(100vh * 1)",opacity:1,delay:400},load:{filter:"blur(5px)"},loaded:{filter:"blur(0px)"}}),T=r.a.div({init:{fiilter:"blur(0px)"},enter:{filter:"blur(0px)"},exit:{filter:"blur(5px)"}}),N=r.a.div({draggable:!0,hoverable:!0,hover:{scale:2},init:{scale:1},drag:{scale:3},dragEnd:{x:0,y:0,transition:{type:"spring"}},start:{x:0,opacity:1,color:"goldenrod"},change:{x:"-100vw",opacity:0,color:"#FF4C3F"}}),I=function(){window.mobilecheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!!window.mobilecheck()),r=Object(l.a)(c,2),s=r[0],u=r[1],d=Object(n.useState)("click around a bit"),p=Object(l.a)(d,2),b=p[0],g=p[1],f=Object(n.useState)(!0),y=Object(l.a)(f,2),v=y[0],h=y[1],w=Object(n.useContext)(O),x=Object(l.a)(w,2),k=x[0],E=x[1],C=["click around a bit","pull up a chair","bring the pups","pour yourself some tea","curious minds are welcome","grab a nitro cold brew","shh, the toddler is sleeping","90's music encouraged"],I=function e(){var t,a=(t=C.length,Math.floor(Math.random()*t));C[a]!==b?(h(!1),setTimeout(function(){g(C[a])},200),setTimeout(function(){h(!0)},300)):e()};return Object(n.useEffect)(function(){k||(setTimeout(function(){u(!1)},300),setTimeout(function(){u(!0)},1800),E(!0))},[]),i.a.createElement("div",{className:"pageTransition"},i.a.createElement(j,{swipeLeft:"About",swipeRight:"Portfolio"}),i.a.createElement(T,{pose:s?"enter":"exit",className:"pageText"},i.a.createElement(z,{className:"pointerHover homeText",pose:a?"close":"open",onClick:function(){o(!a)}},i.a.createElement(N,null,i.a.createElement(m,null))),i.a.createElement(S,{className:"pointerHover homeText",pose:a?"close":"open"},i.a.createElement(N,{pose:v?"start":"change",onClick:function(){I()}}," ",b," "))))},A=a(26),M=a.n(A),P=a(13),_=(a(44),r.a.div({show:{y:0,opacity:1},hide:{y:"-100vh",opacity:0}})),q=r.a.ul({show:{y:"0",opacity:1},hide:{y:"100vh",opacity:0}}),F=r.a.div({show:{x:"0",opacity:1},hide:{x:"-100vw",opacity:0}}),L=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("Intro"),r=Object(l.a)(c,2),m=r[0],s=r[1],u=Object(n.useContext)(p),d=Object(l.a)(u,2),b=d[0],g=(d[1],Object(n.useState)(!0)),f=Object(l.a)(g,2),y=f[0],v=f[1];window.mobilecheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};var h={Intro:"Hey! Thanks for stopping by - please allow me to introduce myself! My name is Jake Huang and \n        I am a highly motivated and extremely hard working individual.",Programming:"I began my journey in full stack web development at UCLA Extension completing their full stack web development course \n        with an A+ and a love for programming! I truely enjoy all aspects of web development from the conceptualization to the creation of a project. \n        My personal challange is to make everything as intuitive and efficient as possible",Film:"For the past 10 years I have been a Hollywood Stuntman / Stunt Rigger for film and TV. \n        Working on big budget films and having extremely tight deadlines has taught me to work well under high pressure situations ie Michael Bay \n        shouting at you while explosions are going off. \n        I commonly have to manage large teams of people while coordinating with other deparment heads. \n        Through all of this I have learned that I love to be creative, solve problems, and quick on my feet.",Business:"I've always had a desire for creation, and a need to solve problems. After opening my first business in 2011 \n        (Joining All Movement, aka JAM), this desire and need have grown exponentially. \n        Now I find myself putting together new business ideas for myself and others constantly - I'm addicted to creation and problem solving - \n        one day I would love to be a part of a team/group/company who is solving major world problems; for now I will continue doing what I can!",Personal:"Things I love: Jumping, Climbing, Scuba, GOT, Marvel Universe, Food Network, Pixar, Anime, SonyA7RIII, Tea, Nitro Cold Brew, 90's Rock, \n        Escape Rooms, Puzzles, Learning, Thinking, Challenges, Kingdom Hearts, Final Fantasy, Traveling, Experience, Adventures, \n        Building, Thinking, Creating, Problem Solving, Growth, My Pups (Tum Tum & Munchkin)  -  \n        and most importantly, being the best Father / Significant Other / Role Model that I can be"},w=[{title:"UCLA Extension",icon:"graduation-cap",type:"fas"},{title:"GMU",icon:"graduation-cap",type:"fas"},{title:"React",icon:"react",type:"fab"},{title:"Javascript",icon:"js-square",type:"fab"},{title:"Mongo Db",icon:"database",type:"fas"},{title:"My Sql",icon:"database",type:"fas"},{title:"Node JS",icon:"node",type:"fab"},{title:"HTML5",icon:"html5",type:"fab"},{title:"CSS3",icon:"css3-alt",type:"fab"},{title:"JQuery",icon:"js",type:"fab"},{title:"Google Firebase",icon:"gripfire",type:"fab"},{title:"Adobe Photoshop",icon:"image",type:"fas"},{title:"Adobe Premiere",icon:"video",type:"fas"},{title:"Adobe After Effects",icon:"adobe",type:"fab"},{title:"Final Cut Pro",icon:"video",type:"fas"}].map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(P.a,{id:"aboutCredIcon",className:"fa",icon:[e.type,e.icon]}),"   "+e.title)}),x=["Intro","Programming","Film","Business","Personal"].map(function(e,t){return i.a.createElement("div",{key:t,onClick:function(){v(!1),setTimeout(function(){s(e),v(!0)},200)},style:m===e?{backgroundColor:"goldenrod"}:{backgroundColor:null}},e)}),k=function(){return a?i.a.createElement("div",null,i.a.createElement("nav",{id:"aboutnav"},x),i.a.createElement(F,{id:"aboutP",pose:y?"show":"hide"},h[m])):i.a.createElement(n.Fragment,null,w)};return i.a.createElement("div",null,i.a.createElement(j,{swipeLeft:"Portfolio",swipeRight:"Home"}),i.a.createElement("div",{id:"aboutContainer"},i.a.createElement("h1",{className:"pageTitle",style:{fontFamily:"Poiret One, cursive"}},"this.Guy"),i.a.createElement("div",{id:"aboutPic"},i.a.createElement("img",{src:M.a,alt:"Iron Man Avatar"})),i.a.createElement(_,{id:"aboutText",pose:a?"show":"hide",style:window.mobilecheck()?{margin:"0"}:{margin:"0 10vw"}},k()),i.a.createElement(q,{id:"aboutCredentials",pose:a?"hide":"show"},k()),i.a.createElement("div",{id:"aboutMoreContainer",style:b?{display:"none"}:null,onClick:function(){o(!a)}},i.a.createElement("i",{id:"aboutMore"}),i.a.createElement("div",{id:"aboutMoreLabel"},"more"))))},B=(a(45),r.a.div({small:{x:0,y:0,scale:"1",opacity:.8},large:{x:0,y:0,scale:1,opacity:1}})),H=function(e){var t=Object(n.useState)("all"),a=Object(l.a)(t,2),o=a[0],c=a[1],r=Object(n.useContext)(p),m=Object(l.a)(r,2),s=m[0];m[1];window.mobilecheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};return i.a.createElement("div",{id:"portCardContainer",onClick:"all"===o?function(){c(e.num)}:null,style:"all"!==o||s?"all"===o&&s?{zIndex:-500}:o===e.num&&s?{zIndex:-500}:o!==e.num||s?{backgroundColor:"red"}:window.mobilecheck()?{transform:"scale(1)",position:"absolute",zIndex:100,top:"10vh",left:0,transition:"transform .25s ease-in-out"}:{transform:"scale(1)",position:"absolute",zIndex:100,top:"10vh",margin:"0 10vw",left:0,transition:"transform .25s ease-in-out"}:{transform:"scale(.33)",position:"static",height:"5vh",zIndex:20,transition:"transform .25s ease-in-out"}},i.a.createElement(B,{className:"portCard",pose:"all"===o?"small":"large"},i.a.createElement("div",{id:"portClose",onClick:function(){c("all")}},"\xd7"),i.a.createElement("img",{src:e.img,alt:e.title}),i.a.createElement("div",{className:"portCardTitle",style:"all"===o?{color:"goldenrod",bottom:"calc(50% - 5vh)",fontSize:"10vh"}:{color:"goldenrod",bottom:"-8vh",fontSize:"8vh",backgroundColor:"transparent"}},e.title),i.a.createElement("div",{id:"appearContainer",style:"all"===o?{display:"none",transform:"scale(.33)"}:{display:"grid",transform:"scale(1)"}},i.a.createElement("p",null,e.summary," "),i.a.createElement("a",{href:e.url,target:"_blank"}," Link "),i.a.createElement("a",{href:e.git,target:"_blank"}," GitHub "))))},D=a(19),R=a.n(D),G=a(27),U=a.n(G),J=function(){var e=[{title:"myTime",url:"https://timecardstaging.herokuapp.com/login",git:"https://github.com/twistedx/timecard-app",img:U.a,summary:"The myTime app was built using the MERN stack to keep track of timecards for freelancers and to give \n            clients a way to feel more secure with what they are paying. \n\n            This is the MVP of this app; future iterations will allow you to pick your industry and gear the app towards most types of industries.\n\n            My responsibilities with this project were conceptualization of the app, UI/UX, database set up + manipulation, \n            and management + organization of team members."},{title:"Test1",url:"#",git:"#",img:R.a,summary:"dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy "},{title:"Test2",url:"#",git:"#",img:R.a,summary:"dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy "}].map(function(e,t){return i.a.createElement(H,{key:t,num:t,img:e.img,title:e.title,summary:e.summary,url:e.url,git:e.git})});return i.a.createElement("div",null,i.a.createElement(j,{swipeLeft:"Home",swipeRight:"About"}),i.a.createElement("div",{className:"portPage"},i.a.createElement("h1",{className:"pageTitle",id:"portTitle",style:{fontFamily:"Poiret One, cursive"}},"myWork"),e))},W=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],r=Object(n.useContext)(u),m=Object(l.a)(r,2),s=m[0],d=m[1],b=Object(n.useContext)(p),f=Object(l.a)(b,2),y=f[0],v=f[1],h=Object(n.useContext)(g),w=Object(l.a)(h,2),k=(w[0],w[1]),E=Object(n.useContext)(x),j=Object(l.a)(E,2),O=(j[0],j[1]),C=function(){c(!o)},z={container:{opacity:0,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",animation:"1s appear forwards",animationDelay:"".concat(e.delay,"s")},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"2rem",fontWeight:800,padding:"1rem 0",cursor:"crosshair",opacity:1,color:o?"#af1f24":"black",transition:"color 0.2s ease-in-out",animation:".5s slideIn forwards",animationDelay:"".concat(e.delay,"s")},line:{height:"1px",boxShadow:"1px 1px 3px",background:o?"#af1f24":"#808080",margin:"0 auto",transition:"color 0.2s ease-in-out",animation:"0.5s shrink forwards",animationDelay:"".concat(e.delay+.1,"s")}};return i.a.createElement("div",{style:z.container},i.a.createElement("div",{style:z.menuItem,onMouseEnter:function(){C()},onMouseLeave:function(){C()},onClick:function(){v(!y),setTimeout(function(){"Contact"!==e.val&&e.val!==s&&k(!1)},500),setTimeout(function(){"Contact"===e.val?O(!0):(k(!0),d(e.val))},1e3)}},e.children),i.a.createElement("div",{style:z.line}))},X=function(e){var t=Object(n.useContext)(p),a=Object(l.a)(t,2),o=a[0],c=(a[1],{container:{position:"absolute",bottom:0,right:0,height:o?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"#daa520",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{zindex:5,height:"100%",width:"100&",color:"black",display:"flex",flexDirection:"column",justifyContent:"space-Around",alignItems:"space-around",opacity:1,background:"#daa520"}});return i.a.createElement("div",{style:c.container},o?i.a.createElement("div",{id:"menuitemlist",style:c.menuList}," ",e.menuItems):null)},V=a(10),K=function(e){var t=Object(n.useState)(!!e.open&&e.open),a=Object(l.a)(t,2),o=a[0],c=a[1],r=Object(n.useState)(e.color?e.color:"black"),m=Object(l.a)(r,2),s=m[0];m[1];Object(n.useEffect)(function(){e.open!==o&&c(e.open)},[e.open]);var u={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"crosshair",padding:"4px"},line:{height:"2px",width:"20px",background:s,transition:"all .8s ease"},lineTop:{transform:o?"translateX(3px) rotate(405deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:o?0:1,transform:o?"translateX(20px)":"none"},lineBottom:{transform:o?"translateX(2px) rotate(315deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return i.a.createElement("div",{style:u.container,onClick:e.onClick?e.onClick:function(){c(!o)}},i.a.createElement("div",{style:Object(V.a)({},u.line,u.lineTop)}),i.a.createElement("div",{style:Object(V.a)({},u.line,u.lineMiddle)}),i.a.createElement("div",{style:Object(V.a)({},u.line,u.lineBottom)}))},Q=function(e){var t=Object(n.useContext)(x),a=Object(l.a)(t,2),o=(a[0],a[1]);return i.a.createElement("div",{id:"modalContainer"},i.a.createElement("div",{id:"close",onClick:function(){return o(!1)}},"\xd7"),i.a.createElement("div",{id:"modalTop"},e.title),i.a.createElement("div",{id:"modalBottom"},e.component))},Z=a(16),$=a(67),Y=a(28),ee=function(){var e=Object(n.useContext)(x),t=Object(l.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)(!1),c=Object(l.a)(o,2),r=(c[0],c[1]),m=Object(n.useState)({name:"",subject:"",email:"",phone:"",message:""}),s=Object(l.a)(m,2),u=s[0],d=s[1],p=u.name,b=u.subject,g=u.email,f=u.phone,y=u.message,v=function(e){return d(Object(V.a)({},u,Object(Z.a)({},e.target.name,e.target.value)))},h={from_name:"from_name_value",from_subject:"from_subject_value",reply_to:"reply_to_value",to_name:"to_name_value",message_html:"message_html_value"},w="bufu2o2",k="Portfolio_contact-Me",E="user_hz3FeZv9n0eggWA6hV8a6";return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Object(V.a)({},u,{name:p,subject:b,email:g,phone:f,message:y});console.log(t),r(!0),h={from_name:p,from_subject:b,reply_to:g,phone:f,to_name:"jake",message_html:y},Y.send(w,k,h,E).then(function(e){console.log("SUCCESS!",e.status,e.text)},function(e){console.log("FAILED...",e)}),d({name:"",subject:"",email:"",phone:"",message:""}),a(!1),r(!1)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Name"),i.a.createElement("input",{className:"form-half",id:"form-name",type:"text",name:"name",placeholder:"Name",required:!0,value:p,onChange:v})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Subject"),i.a.createElement("input",{className:"form-half",id:"form-subject",type:"text",name:"subject",placeholder:"Subject",required:!0,value:b,onChange:v})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Email"),i.a.createElement("input",{className:"form-half",id:"form-email",type:"email",name:"email",placeholder:"Email",required:!0,value:g,onChange:v})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Phone"),i.a.createElement("input",{className:"form-half",id:"form-phone",type:"phone",name:"phone",placeholder:"Phone Number",value:f,onChange:v})),i.a.createElement("div",{className:"form-group",id:"-message"},i.a.createElement("label",null,"Message"),i.a.createElement("textarea",{id:"form-message",type:"textarea",name:"message",placeholder:"Message",required:!0,value:y,onChange:v})),i.a.createElement("div",{className:"center"},i.a.createElement("button",{type:"submit",value:"submit",id:"form-submit"},i.a.createElement($.a,{id:"form-submit-icon"},"send"))))))},te=(a(52),r.a.nav({enter:{x:"0%",opacity:1,delay:500},exit:{x:"-100%",opacity:0,delay:400,transition:{duration:300}}})),ae=function(e){var t=[{name:"facebook",link:"https://www.facebook.com/huangjake",color:"#3b5998"},{name:"instagram",link:"https://www.instagram.com/actionjake/",color:"#E56969"},{name:"linkedin",link:"https://www.linkedin.com/in/jake-huang-52a8a8b4/",color:"#027AB6"},{name:"github",link:"https://github.com/bufu2o2/",color:"#161414"}].map(function(e,t){return i.a.createElement("li",{key:t+e},i.a.createElement("a",{href:e.link,target:"_blank",className:"btn .social-btns",value:e.name},i.a.createElement(P.a,{style:{color:e.color,border:"2px inset "+e.color},id:"fai",className:"fa",icon:["fab",e.name]})))});return i.a.createElement(te,{className:"social",pose:e.mis?"enter":"exit"},i.a.createElement("ul",null,t))},ne=(a(53),function(){var e=Object(n.useContext)(x),t=Object(l.a)(e,2),a=t[0],o=t[1];return window.mobilecheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},i.a.createElement(n.Fragment,null,i.a.createElement("div",{id:"contactMeArrow"},i.a.createElement(P.a,{className:"fa",icon:["fas","angle-double-down"],onClick:function(){document.getElementById("contactMeArrow").className="contactMeArrowAnimation",document.getElementById("clickme").className="clickmeAnimation",setTimeout(function(){document.getElementById("contactMeArrow").classList.remove("contactMeArrowAnimation"),document.getElementById("clickme").classList.remove("clickmeAnimation")},500),o(!a)}})),i.a.createElement("div",{id:"clickme",style:window.mobilecheck()?{opacity:.5}:null},"Click Me"))}),ie=(a(54),r.a.div({hoverable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.5,boxShadow:"0px 10px 10px rgba(0,0,0,0.2)"}})),oe=r.a.div({enter:{opacity:1,y:0},down:{opacity:0,y:"-300%"},transition:{type:"physics",velocity:200}}),ce=r.a.div({enter:{opacity:0,y:"-100vh",duration:500},exit:{opacity:1,y:0,duration:500}}),le=function(e){window.mobilecheck=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};var t=Object(n.useContext)(p),a=Object(l.a)(t,2),o=a[0],c=a[1],r=Object(n.useContext)(x),m=Object(l.a)(r,2),s=m[0],d=m[1],b=Object(n.useContext)(u),f=Object(l.a)(b,2),y=f[0],v=f[1],h=Object(n.useContext)(g),w=Object(l.a)(h,2),k=(w[0],w[1]),E=function(){c(!1)},j={container:{position:"fixed",bottom:"30px",right:"10px",float:"center",zIndex:"200",opacity:.9,display:"flex",alignItems:"center",background:"grey",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{background:"black",display:"flex",textAlign:"center",flexDirection:"column",alignContent:"center",width:"100vw",height:"100vh",filter:o||s?"blur(2px)":null,transition:"filter 1s ease"},modal:{display:"flex",textAlign:"center",flexDirection:"column",alignContent:"center",width:"100vw",height:"100vh",transition:"filter 1s ease"}},O=Object(n.useState)(!0),C=Object(l.a)(O,2),z=C[0],S=C[1],T=function e(t){t&&(S(!0),window.removeEventListener("click",e))};Object(n.useEffect)(function(){window.mobilecheck()&&setTimeout(function(){S(!z)},500)},[]),setTimeout(function(){window.addEventListener("click",T)},2e3);var N=function(){return"Home"===y?"Portfolio":"Portfolio"===y?"About":"Home"},I=function(){return"Home"===y?"About":"Portfolio"===y?"Home":"About"===y?"Portfolio":"Home"},A=["Home","About","Portfolio","Contact"].map(function(e,t){return i.a.createElement(ie,{key:3.141592659589*t},i.a.createElement(W,{key:3.141592659589*t,val:e,index:t,onClick:function(){E()},delay:.1*t},e))});return i.a.createElement("div",null,window.mobilecheck()?null:i.a.createElement("div",null,i.a.createElement("div",{id:"leftBtnContainer",onClick:function(){setTimeout(function(){"Contact"!==N()&&N()!==y&&k(!1)},200),setTimeout(function(){"Contact"===N()?d(!0):(k(!0),v(N()))},800)}},i.a.createElement("i",{id:"leftBtn"}),i.a.createElement("div",{id:"leftBtnLabel"},N())),i.a.createElement("div",{id:"rightBtnContainer",onClick:function(){setTimeout(function(){"Contact"!==I()&&I()!==y&&k(!1)},200),setTimeout(function(){"Contact"===I()?d(!0):(k(!0),v(I()))},800)}},i.a.createElement("i",{id:"rightBtn"}),i.a.createElement("div",{id:"rightBtnLabel"},I()))),i.a.createElement(ce,{pose:z?"enter":"exit",onClick:function(){S(!0)},id:"swipetonav"},"Swipe to Navigate"),i.a.createElement(ne,{style:o?{display:"none"}:null}),i.a.createElement("div",{id:"socialmedia"},i.a.createElement(ae,{mis:s})),i.a.createElement("div",{className:"circleBase",id:"navMenuBtn",style:j.container},i.a.createElement(K,{open:o,onClick:function(){return d(!1),void c(!o)},color:"white"})),i.a.createElement(X,{menuItems:A,open:o,onClick:function(){E()}}),i.a.createElement(oe,{id:"modal",pose:s?"enter":"down"},i.a.createElement(Q,{open:s,component:i.a.createElement(ee,null),title:"Lets Talk!"})))},re=r.a.div({enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:"-200%"},left:{opacity:0,x:"-200%"},down:{opacity:0,y:"1000%"},right:{opacity:0,x:"200%"},transition:{type:"physics",velocity:200}}),me=function(){var e=Object(n.useContext)(u),t=Object(l.a)(e,2),a=t[0],o=(t[1],Object(n.useContext)(g)),c=Object(l.a)(o,2),r=c[0],m=(c[1],Object(n.useContext)(h)),s=Object(l.a)(m,2),d=s[0],p=(s[1],Object(n.useContext)(y)),b=Object(l.a)(p,2),f=b[0],v=(b[1],Object(n.useContext)(x)),w=Object(l.a)(v,2),k=w[0],E=(w[1],function(){return d?r?f?f||r||d?f?"enter":"down":void 0:f?"enter":"down":r?"enter":"right":d?"enter":"left"}),j={filter:k?"blur(3px)":null};switch(a){case"Home":return i.a.createElement(n.Fragment,null,i.a.createElement(le,null),i.a.createElement(re,{style:j,pose:E()},i.a.createElement(I,null)));case"About":return i.a.createElement(n.Fragment,null,i.a.createElement(le,null),i.a.createElement(re,{style:j,pose:E()},i.a.createElement(L,null)));case"Portfolio":return i.a.createElement(n.Fragment,null,i.a.createElement(le,null),i.a.createElement(re,{style:j,pose:E()},i.a.createElement(J,null)))}return i.a.createElement(n.Fragment,null,i.a.createElement("h1",null,a))},se=a(14),ue=a(30),de=a(31),pe=(a(55),r.a.div({hoverable:!0,pressable:!0,init:{background:"radial-gradient(circle at 75% 25%, white 1px, #ff6347 3%, #8b0000 60%, #ff6347 100%)",scale:1,boxShadow:"0px 0px 0px 0px #ff6347"},hover:{scale:1,boxShadow:"0px 0px 20px 5px #ff6347"},press:{scale:1.1,boxShadow:"0px 0px 10px 10px #ff6347"}})),be=r.a.div({hoverable:!0,pressable:!0,init:{background:"radial-gradient(circle at 75% 25%, white 1px, #90ee90 3%, #0ab10a 60%, #90ee90 100%)",scale:1,boxShadow:"0px 0px 0px 0px #90ee90"},hover:{scale:1,boxShadow:"0px 0px 20px 5px #90ee90"},press:{scale:1.1,boxShadow:"0px 0px 5px 2px #90ee90"}}),ge=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1];return console.log("particle status: ",a),i.a.createElement(n.Fragment,null,a?null:i.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",background:"#000",zIndex:"-1"}}),i.a.createElement("div",{id:"particles-js"}),a?i.a.createElement(be,{className:"particleToggle greenToggle",onClick:function(){o(!a)}}):i.a.createElement(pe,{className:"particleToggle redToggle",onClick:function(){o(!a)}}))};a(56);var fe=function(){return se.b.add(ue.a,de.a),i.a.createElement("div",{className:"App"},i.a.createElement(ge,null),i.a.createElement(f,null,i.a.createElement(C,null,i.a.createElement(d,null,i.a.createElement(k,null,i.a.createElement(w,null,i.a.createElement(v,null,i.a.createElement(b,null,i.a.createElement(me,null)))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.0bb8ad5a.chunk.js.map