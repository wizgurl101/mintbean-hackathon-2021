(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},151:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},195:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(24),s=n.n(a),i=n(7),o=(n(151),n(226)),j=n(9),l=n.n(j),u=n(17),b=n(4),d=n(13),O=n(12),h=n(1),x=n(23),p=n(122),m=n.n(p);function f(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t){var n,c,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=r.length>1&&void 0!==r[1]?r[1]:{}).method=n.method||"GET",n.headers=n.headers||{},"GET"!==n.method.toUpperCase()&&(n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=m.a.get("XSRF-TOKEN")),e.next=6,window.fetch(t,n);case 6:if(!((c=e.sent).status>=400)){e.next=9;break}throw c;case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g="session/SET_USER",w="session/REMOVE_USER",S="session/UPDATE_USER_NUMBER_OF_GAME_WON",y=function(e){return{type:g,payload:e}},N=function(e){return{type:S,payload:e}},k=function(e,t){return function(){var n=Object(u.a)(l.a.mark((function n(c){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});case 2:return r=n.sent,n.next=5,r.json();case 5:if(!(a=n.sent).errors){n.next=8;break}return n.abrupt("return",a);case 8:c(y(a.username));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},C=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/api/users/logout",{method:"DELETE"});case 2:t({type:w});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e,t){return function(){var n=Object(u.a)(l.a.mark((function n(c){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,c(y(a.name));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E={user:null};var z="modal/show",P="modal/hide",T="modal/current",R="modal/mount";n(157);var G=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.modal.mount})),n=Object(i.c)((function(e){return e.modal.display})),c=Object(i.c)((function(e){return e.modal.current}));return t&&n&&s.a.createPortal(Object(h.jsx)("div",{onClick:function(){e({type:P})},className:"modal-background",children:Object(h.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:"modal-content",id:"modal-content",children:Object(h.jsx)(c,{})})}),t)},L="modal2/show",A="modal2/hide",J="modal2/current",U="modal2/mount",D=function(){return{type:L}},M=function(){return{type:A}},W=function(e){return{type:J,current:e}};n(158);var B=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.modal2.mount2})),n=Object(i.c)((function(e){return e.modal2.display2})),c=Object(i.c)((function(e){return e.modal2.current2}));return t&&n&&s.a.createPortal(Object(h.jsx)("div",{onClick:function(){e(M())},className:"modal2-background",children:Object(h.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:"modal2-content",id:"modal2-content",children:Object(h.jsx)(c,{})})}),t)},F=n(6),H=n(227),I=n(219),K=n(228),Q=n(229),X=n(221),Y=n(222),q=n(225),V=n(223);var Z=function(){var e,t,n=Object(c.useState)([]),r=Object(b.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)([]),j=Object(b.a)(o,2),d=j[0],O=j[1],x=Object(c.useState)([]),p=Object(b.a)(x,2),m=p[0],v=p[1],g=Object(c.useState)(0),w=Object(b.a)(g,2),S=w[0],y=w[1],k=Object(c.useState)(0),C=Object(b.a)(k,2),_=C[0],E=C[1],z=Object(c.useState)(!1),P=Object(b.a)(z,2),T=P[0],R=P[1],G=Object(c.useState)(!1),L=Object(b.a)(G,2),A=L[0],J=L[1],U=Object(c.useState)(!1),D=Object(b.a)(U,2),M=D[0],W=D[1],B=Object(c.useState)(!1),Z=Object(b.a)(B,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!0),ne=Object(b.a)(te,2),ce=ne[0],re=ne[1],ae=Object(H.a)(),se=ae.isOpen,ie=ae.onOpen,oe=ae.onClose,je=Object(c.useState)(!1),le=Object(b.a)(je,2),ue=le[0],be=le[1],de=Object(c.useState)(!1),Oe=Object(b.a)(de,2),he=Oe[0],xe=Oe[1],pe=Object(c.useState)(!1),me=Object(b.a)(pe,2),fe=me[0],ve=me[1],ge=Object(i.c)((function(e){return e.session.user})),we=Object(i.b)();Object(c.useEffect)((function(){!function(){E(0),y(0);for(var e=[],t=["2.","3.","4.","5.","6.","7.","8.","9.","10.","J.","Q.","K.","A."],n=["\u2663","\u2665","\u2660","\u2666"],c=0;c<t.length;c++)for(var r=t[c],a=0;a<n.length;a++){var s=r+n[a];e.push(s)}Se(e)}()}),[$]);var Se=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[n],e[n]=c}s(e)},ye=function(){ie(),re(!0),W(!1),ee(!1)};return Object(c.useEffect)((function(){21===_&&21===S&&(console.log("It's a tie!"),be(!1),xe(!1),ve(!0),ye())}),[_,S]),Object(c.useEffect)((function(){for(var e=0,t=0;t<d.length;t++){var n=d[t].split(".")[0];e+="J"===n||"Q"===n||"K"===n?10:"A"===n?11:Number(n)}y(e)}),[d.length,$]),Object(c.useEffect)((function(){for(var e=0,t=0;t<m.length;t++){var n=m[t].split(".")[0];e+="J"===n||"Q"===n||"K"===n?10:"A"===n?11:Number(n)}E(e),e>21&&(xe(!0),ye()),21===e&&(be(!0),ye())}),[m.length,$]),Object(h.jsxs)(I.a,{mt:16,centerContent:!0,children:[Object(h.jsxs)(K.a,{mb:8,children:[Object(h.jsx)(Q.a,{colorScheme:"teal",size:"lg",disabled:M,onClick:function(){be(!1),xe(!1),ve(!1),ee(!0),re(!1),R(!0),W(!0),J((function(e){return!e})),O([]),v([]);var e=a[0],t=a[1],n=a[2],c=a[3];v([e,n]),O([t,c]);var r=a.slice(4);s(r)},children:"Start Game"}),Object(h.jsx)(Q.a,(e={colorScheme:"purple",size:"md",disabled:ce},Object(F.a)(e,"size","md"),Object(F.a)(e,"onClick",(function(){var e=a[0],t=a.slice(1),n=m;n.push(e),v(n),s(t)})),Object(F.a)(e,"children","Hit!"),e)),Object(h.jsx)(Q.a,(t={colorScheme:"purple",size:"md",disabled:ce},Object(F.a)(t,"size","md"),Object(F.a)(t,"ml",16),Object(F.a)(t,"onClick",(function(){for(var e=_,t=S,n=d,c=a;e>=t&&t<20;){var r=c[0],i=c.slice(1),o=n;o.push(r);var j=(n=o)[n.length-1].split(".")[0];t+="J"===j||"Q"===j||"K"===j?10:"A"===j?11:Number(j),c=i,O(o),s(i)}t<e||t>21?(we(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){var c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f("/api/users/updateGameStat",{method:"PUT",body:JSON.stringify({user:e})});case 2:return c=t.sent,t.next=5,c.json();case 5:if(!(r=t.sent).errors){t.next=8;break}return t.abrupt("return",r);case 8:n(N(r));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(ge)),be(!0),ye()):(xe(!0),ye())})),Object(F.a)(t,"children","Hold"),t))]}),_>0&&Object(h.jsxs)(K.a,{mb:10,children:[Object(h.jsxs)(X.a,{fontSize:"3xl",textColor:"white",mr:32,children:["Player: ",_]}),Object(h.jsxs)(X.a,{fontSize:"3xl",textColor:"white",ml:32,children:["Dealer: ",S]})]}),Object(h.jsxs)(Y.a,{hidden:T,bg:"#a41d1d",color:"white",w:"100px",h:"150px",border:"2px",borderRadius:"10",fontSize:"2xl",templateRows:"repeat(3, 1fr)",children:[Object(h.jsx)(Y.b,{}),Object(h.jsx)(Y.b,{align:"center",children:"Deck"}),Object(h.jsx)(Y.b,{})]}),A&&Object(h.jsx)(X.a,{textColor:"white",fontSize:"xl",children:"Dealer Hand"}),Object(h.jsx)(K.a,{mb:10,children:d.length>0&&d.map((function(e){return Object(h.jsxs)(Y.a,{bg:"white",color:"red",w:"100px",h:"150px",border:"1px",borderRadius:"10",fontSize:"2xl",templateRows:"repeat(3, 1fr)",children:[Object(h.jsx)(Y.b,{align:"left",ml:2,children:e.split(".")[0]}),Object(h.jsx)(Y.b,{align:"center",children:e.split(".")[1]}),Object(h.jsx)(Y.b,{align:"left",mr:2,mt:4,transform:"scale(-1)",children:e.split(".")[0]})]})}))}),A&&Object(h.jsx)(X.a,{textColor:"white",fontSize:"xl",children:"Player Hand"}),Object(h.jsx)(K.a,{children:m.length>0&&m.map((function(e){return Object(h.jsxs)(Y.a,{bg:"white",color:"black",w:"100px",h:"150px",border:"1px",borderRadius:"10",fontSize:"2xl",templateRows:"repeat(3, 1fr)",children:[Object(h.jsx)(Y.b,{align:"left",ml:2,children:e.split(".")[0]}),Object(h.jsx)(Y.b,{align:"center",children:e.split(".")[1]}),Object(h.jsx)(Y.b,{align:"left",mr:2,mt:4,transform:"scale(-1)",children:e.split(".")[0]})]})}))}),Object(h.jsxs)(q.a,{isOpen:se,onClose:oe,children:[Object(h.jsx)(q.g,{}),Object(h.jsxs)(q.d,{children:[Object(h.jsx)(q.f,{}),Object(h.jsx)(q.c,{}),Object(h.jsxs)(q.b,{children:[Object(h.jsx)(V.a,{mb:4,children:Object(h.jsxs)(X.a,{noOfLines:2,children:["Player's Score: ",_," vs Dealer's Score: ",S]})}),ue&&Object(h.jsxs)(X.a,{children:[" ","You win!! Go and boast about you being smart! Press on 'Start Game' to play another round!"]}),he&&Object(h.jsxs)(X.a,{children:[" ","Womp, womp, you lost. Practice some more! Press on 'Start Game' to play another round!"]}),fe&&Object(h.jsxs)(X.a,{children:[" ","It's a tie! Press on 'Start Game' to play another round!"]})]}),Object(h.jsx)(q.e,{children:Object(h.jsx)(Q.a,{colorScheme:"teal",mr:3,onClick:function(){E(0),y(0),oe()},children:"Okay"})})]})]})]})},$=(n(160),function(){var e=Object(O.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.session.user})),r=Object(c.useState)([]),a=Object(b.a)(r,2),s=a[0],o=(a[1],Object(c.useState)("")),j=Object(b.a)(o,2),d=j[0],x=j[1],p=Object(c.useState)(""),m=Object(b.a)(p,2),f=m[0],v=m[1],g=function(){var n=Object(u.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.preventDefault(),t(k(d,f)),t(M()),e.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return n?Object(h.jsx)(O.a,{to:"/"}):Object(h.jsx)("div",{className:"login_form",children:Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"login",onSubmit:g,children:[Object(h.jsx)("div",{children:s.map((function(e){return Object(h.jsx)("div",{children:e})}))}),Object(h.jsx)(X.a,{textColor:"white",noOfLines:2,maxW:"75%",textAlign:"center",mb:4,fontSize:"xl",children:" Welcome back! Please add your username and password."}),Object(h.jsx)("div",{className:"login_input",children:Object(h.jsx)("input",{className:"input",name:"username",type:"text",placeholder:" Username",value:d,onChange:function(e){x(e.target.value)}})}),Object(h.jsx)("div",{className:"login_input",children:Object(h.jsx)("input",{className:"input",name:"password",type:"password",placeholder:" Password",value:f,onChange:function(e){v(e.target.value)}})}),Object(h.jsx)("div",{className:"login_input",children:Object(h.jsx)(Q.a,{colorScheme:"teal",className:"input2",type:"submit",value:"Login",children:"Log In"})})]})})})}),ee=(n(161),function(){var e=Object(i.b)(),t=Object(O.g)(),n=Object(i.c)((function(e){return e.session.user})),r=Object(c.useState)(""),a=Object(b.a)(r,2),s=a[0],o=a[1],j=Object(c.useState)(""),d=Object(b.a)(j,2),x=d[0],p=d[1],m=Object(c.useState)(""),f=Object(b.a)(m,2),v=f[0],g=f[1],w=function(){var n=Object(u.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),x!==v){n.next=8;break}return n.next=4,e(_(s,x));case 4:return n.next=6,e(M());case 6:alert("Your account has been successfully made. Please log in using the 'Log In' button. Thank you!"),t.push("/");case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return n?Object(h.jsx)(O.a,{to:"/"}):Object(h.jsx)("div",{className:"signup_form",children:Object(h.jsxs)("form",{className:"signup",onSubmit:w,children:[Object(h.jsx)("div",{}),Object(h.jsx)(X.a,{textColor:"white",noOfLines:2,maxW:"75%",textAlign:"center",mb:4,fontSize:"xl",children:" Welcome! Please make an account below."}),Object(h.jsx)("div",{className:"signup_input",children:Object(h.jsx)("input",{className:"input",placeholder:" Username",type:"text",name:"username",onChange:function(e){o(e.target.value)},value:s})}),Object(h.jsx)("div",{className:"signup_input",children:Object(h.jsx)("input",{className:"input",placeholder:" Password",type:"password",name:"password",onChange:function(e){p(e.target.value)},value:x})}),Object(h.jsx)("div",{className:"signup_input",children:Object(h.jsx)("input",{className:"input",placeholder:" Repeat Password",type:"password",name:"repeat_password",onChange:function(e){g(e.target.value)},value:v,required:!0})}),Object(h.jsx)("div",{className:"signup_input",children:Object(h.jsx)(Q.a,{colorScheme:"teal",className:"input2",type:"submit",value:"SignUp",children:"Sign Up"})})]})})});n(103);var te=function(){var e=Object(O.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.session.user}));return Object(h.jsxs)("div",{className:"Navbar",children:[n&&Object(h.jsx)("div",{children:Object(h.jsx)(X.a,{textColor:"white",fontSize:"xl",children:"BlackJack!"})}),Object(h.jsx)(x.b,{to:"/",children:Object(h.jsx)(Q.a,{colorScheme:"teal",children:"Home"})}),Object(h.jsxs)("div",{children:[!n&&Object(h.jsxs)(K.b,{direction:"row",spacing:3,children:[Object(h.jsx)(Q.a,{colorScheme:"teal",onClick:function(){t(W($)),t(D())},children:"Login"}),Object(h.jsx)(Q.a,{colorScheme:"teal",onClick:function(){t(W(ee)),t(D())},children:"Signup"})]}),n&&Object(h.jsx)(Q.a,{colorScheme:"gray",onClick:function(){t(C()),e.push("/")},children:"Logout"})]})]})};var ne=function(){return Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)(te,{}),Object(h.jsx)(Z,{})]})},ce=n(126);var re=function(){var e=Object(ce.io)("http://localhost:8000"),t=Object(c.useState)(0),n=Object(b.a)(t,2),r=(n[0],n[1],Object(c.useState)(0)),a=Object(b.a)(r,2),s=a[0];return a[1],Object(c.useEffect)((function(){e.on("message",(function(e){})),console.log(s,"value")}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(ne,{})})};n(192);var ae=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.session.user}));return Object(h.jsxs)("div",{className:"Navbar",children:[!t&&Object(h.jsx)("div",{}),t&&Object(h.jsx)("div",{children:Object(h.jsxs)(X.a,{textColor:"white",fontSize:"lg",children:["Welcome, ",t,"!"]})}),t&&Object(h.jsxs)(K.b,{direction:"row",spacing:3,children:[Object(h.jsx)(x.b,{to:"gameboard",children:Object(h.jsx)(Q.a,{colorScheme:"teal",size:"md",children:"Game Board"})}),Object(h.jsx)(x.b,{to:"leaderboard",children:Object(h.jsx)(Q.a,{colorScheme:"teal",size:"md",children:"Leader Board"})})]}),Object(h.jsxs)("div",{children:[!t&&Object(h.jsxs)(K.b,{direction:"row",spacing:3,children:[Object(h.jsx)(Q.a,{colorScheme:"teal",onClick:function(){e(W($)),e(D())},children:"Login"}),Object(h.jsx)(Q.a,{colorScheme:"teal",size:"md",onClick:function(){e(W(ee)),e(D())},children:"Signup"})]}),t&&Object(h.jsx)(Q.a,{colorScheme:"gray",size:"md",onClick:function(){e(C())},children:"Logout"})]})]})};var se=function(){return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(ae,{}),Object(h.jsx)(x.b,{to:"/about",children:Object(h.jsx)("button",{className:"developers",children:"Development Team"})}),Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"devicon-react-original-wordmark colored"})}),Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"devicon-redux-original colored"})}),Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"devicon-mongodb-plain-wordmark colored"})}),Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"devicon-express-original-wordmark colored"})}),Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"devicon-nodejs-plain-wordmark colored"})})]})]})},ie=n(77),oe=n.n(ie),je=n(78),le=n.n(je),ue=n(94),be=n.n(ue);n(193);var de=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(te,{}),Object(h.jsxs)("div",{className:"about_container",children:[Object(h.jsxs)("div",{className:"about_box",children:[Object(h.jsx)("span",{}),Object(h.jsxs)("div",{className:"about_content",children:[Object(h.jsx)("div",{children:Object(h.jsx)(X.a,{fontSize:"2xl",children:"Jairo Calderon"})}),Object(h.jsxs)("div",{className:"about_icons",children:[Object(h.jsx)("a",{href:"https://github.com/JairoCal",target:"_blank",children:Object(h.jsx)(oe.a,{})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/jairo-calderon-44512ba5/",target:"_blank",children:Object(h.jsx)(le.a,{})}),Object(h.jsx)("a",{href:"https://jairocal.github.io/Portfolio/",target:"_blank",children:Object(h.jsx)(be.a,{})})]})]})]}),Object(h.jsxs)("div",{className:"about_box",children:[Object(h.jsx)("span",{}),Object(h.jsxs)("div",{className:"about_content",children:[Object(h.jsx)("div",{children:Object(h.jsx)(X.a,{fontSize:"2xl",children:"Maira Garcia"})}),Object(h.jsxs)("div",{className:"about_icons",children:[Object(h.jsx)("a",{href:"https://github.com/mairagee524",children:Object(h.jsx)(oe.a,{})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/mairagarcia524/",target:"_blank",children:Object(h.jsx)(le.a,{})}),Object(h.jsx)("a",{href:"https://mairagee524.github.io/portfolio/",target:"_blank",children:Object(h.jsx)(be.a,{})})]})]})]}),Object(h.jsxs)("div",{className:"about_box",children:[Object(h.jsx)("span",{}),Object(h.jsxs)("div",{className:"about_content",children:[Object(h.jsx)("div",{children:Object(h.jsx)(X.a,{fontSize:"2xl",children:"Nhu Phan"})}),Object(h.jsxs)("div",{className:"about_icons",children:[Object(h.jsx)("a",{href:"https://github.com/wizgurl101",target:"_blank",children:Object(h.jsx)(oe.a,{})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/nhu-phan-canada/",target:"_blank",children:Object(h.jsx)(le.a,{})})]})]})]})]})]})},Oe=n(230),he=n(224),xe=(n(195),"leaderboard/GET_LEADER_BOARD_INFO"),pe={users:[]};var me=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){a(!0),e(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/leaderboard",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t({type:xe,payload:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a(!1)}),[e]);var s=Object(i.c)((function(e){return e.leaderboard.users}));return Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)(te,{}),Object(h.jsxs)(I.a,{className:"container",children:[r&&Object(h.jsx)(Oe.a,{thickness:"5px",speed:"0.5s",emptyColor:"white",color:"teal",size:"xl"}),Object(h.jsxs)(he.a,{className:"table",size:"lg",variant:"striped",colorScheme:"teal",children:[Object(h.jsx)(he.b,{className:"caption",placement:"top",children:"Top 10 Players"}),Object(h.jsx)(he.f,{children:Object(h.jsxs)(he.g,{className:"tableHeader",children:[Object(h.jsx)(he.e,{children:"USERNAME"}),Object(h.jsx)(he.e,{children:"GAMES WON"})]})}),Object(h.jsx)(he.c,{className:"tablebody",children:s.map((function(e){return Object(h.jsxs)(he.g,{children:[Object(h.jsx)(he.d,{children:e.username}),Object(h.jsx)(he.d,{children:e.numOfGameWon})]},e._id)}))})]})]})]})};var fe,ve=function(){var e=Object(i.b)(),t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/api/users/restore",{headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(c=e.sent).errors){e.next=8;break}return e.abrupt("return");case 8:c.user&&t(y(c.user.username));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:a(!0);case 3:case"end":return t.stop()}}),t)})))()}),[e]),r?Object(h.jsxs)(x.a,{children:[Object(h.jsx)(G,{}),Object(h.jsx)(B,{}),Object(h.jsxs)(O.d,{children:[Object(h.jsx)(O.b,{path:"/",exact:!0,children:Object(h.jsx)(se,{})}),Object(h.jsx)(O.b,{path:"/gameboard",exact:!0,children:Object(h.jsx)(ne,{})}),Object(h.jsx)(O.b,{path:"/gameboard/online",children:Object(h.jsx)(re,{})}),Object(h.jsx)(O.b,{path:"/about",exact:!0,children:Object(h.jsx)(de,{})}),Object(h.jsx)(O.b,{path:"/leaderboard",exact:!0,children:Object(h.jsx)(me,{})})]})]}):null},ge=n(79),we=n(127),Se=Object(ge.b)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{user:t.payload};case w:return{user:null};case S:return{user:t.payload};default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:null,mount:null,display:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(d.a)(Object(d.a)({},e),{},{display:!0});case P:return Object(d.a)(Object(d.a)({},e),{},{display:!1});case T:return Object(d.a)(Object(d.a)({},e),{},{current:t.current});case R:return Object(d.a)(Object(d.a)({},e),{},{mount:t.mount});default:return e}},modal2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current2:null,mount2:null,display2:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(d.a)(Object(d.a)({},e),{},{display2:!0});case A:return Object(d.a)(Object(d.a)({},e),{},{display2:!1});case J:return Object(d.a)(Object(d.a)({},e),{},{current2:t.current});case U:return Object(d.a)(Object(d.a)({},e),{},{mount2:t.mount});default:return e}},leaderboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return{users:t.payload};default:return e}}});fe=Object(ge.a)(we.a);var ye=function(e){return Object(ge.c)(Se,e,fe)}(),Ne=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(i.b)();return Object(c.useEffect)((function(){var t;n((t=e.current,{type:R,mount:t}))}),[n]),Object(c.useEffect)((function(){var e;n((e=t.current,{type:U,mount:e}))}),[n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ve,{}),Object(h.jsx)("div",{ref:e,className:"modal"}),Object(h.jsx)("div",{ref:t,className:"modal2"})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(i.a,{store:ye,children:Object(h.jsx)(Ne,{})})})}),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.5cf84c1f.chunk.js.map