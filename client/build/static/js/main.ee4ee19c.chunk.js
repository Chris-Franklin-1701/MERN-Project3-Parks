(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n,c,i,s,r=a(0),o=a.n(r),l=a(20),d=a.n(l),j=(a(40),a(3)),b=a(28),h=a(17),u=a(130),m=a(166),O=a(188),p=a(183),x=a(129),g=a(11),f=a(187),v=a(175),k=a(189),w=a(191),N=a(190),y=a(49),C=a.n(y),S=a(63),F=a(14),I=a(185),P=a(173),L=a(174),A=a(184),T=a(54),V=a(55),D=a(109),M=a.n(D),E=new(function(){function e(){Object(T.a)(this,e)}return Object(V.a)(e,[{key:"getProfile",value:function(){return M()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return M()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/Home")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),U=a(61),W=a(186),$=Object(W.a)(n||(n=Object(U.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),q=Object(W.a)(c||(c=Object(U.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),B=(Object(W.a)(i||(i=Object(U.a)(["\n  mutation addVisitedPark($input: VisitedPark!) {\n    addVisitedPark(input: $input) {\n      _id\n      username\n      email\n      visitedParks {\n        parkId\n        url\n        fullName\n        description\n        designation\n        latitude\n        longitude\n        activities\n        phoneNumber\n        address\n        # entranceFees\n        # entrancePasses\n        # images\n      }\n    }\n  }\n"]))),Object(W.a)(s||(s=Object(U.a)(["\nmutation saveVisited($parkId: String!) {\n    saveVisited(parkId: $parkId) {\n      email\n    }\n  }\n"])))),K=a(1),R=function(){var e=Object(r.useState)({username:"",email:"",password:""}),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),i=Object(g.a)(c,1)[0],s=Object(r.useState)(!1),o=Object(g.a)(s,2),l=o[0],d=o[1],b=Object(A.a)(q),h=Object(g.a)(b,2),u=h[0],m=(h[1].error,function(e){var t=e.target,c=t.name,i=t.value;n(Object(j.a)(Object(j.a)({},a),{},Object(F.a)({},c,i)))}),O=function(){var e=Object(S.a)(C.a.mark((function e(t){var c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,u({variables:Object(j.a)({},a)});case 6:c=e.sent,i=c.data,E.login(i.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(I.a,{noValidate:!0,validated:i,onSubmit:O,children:[Object(K.jsx)(P.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"username",children:"Username"}),Object(K.jsx)(I.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:m,value:a.username,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)(I.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:m,value:a.email,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:m,value:a.password,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(L.a,{disabled:!(a.username&&a.email&&a.password),type:"submit",variant:"success",children:"Submit"})]})})},G=function(){var e=Object(r.useState)({email:"",password:""}),t=Object(g.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),i=Object(g.a)(c,1)[0],s=Object(r.useState)(!1),o=Object(g.a)(s,2),l=o[0],d=o[1],b=Object(A.a)($),h=Object(g.a)(b,2),u=h[0],m=(h[1].error,function(e){var t=e.target,c=t.name,i=t.value;n(Object(j.a)(Object(j.a)({},a),{},Object(F.a)({},c,i)))}),O=function(){var e=Object(S.a)(C.a.mark((function e(t){var c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,u({variables:Object(j.a)({},a)});case 6:c=e.sent,i=c.data,E.login(i.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("img",{id:"login-img",src:"https://i.imgur.com/ScrFDBm.png"}),Object(K.jsxs)(I.a,{noValidate:!0,validated:i,onSubmit:O,children:[Object(K.jsx)(P.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)(I.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:m,value:a.email,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:m,value:a.password,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(L.a,{disabled:!(a.email&&a.password),type:"submit",variant:"success",children:"Submit"})]})]})},H=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(f.a,{id:"navbar-background",bg:"dark",variant:"dark",expand:"lg",children:Object(K.jsxs)(v.a,{fluid:!0,children:[Object(K.jsx)(f.a.Brand,{as:b.b,to:"/",children:Object(K.jsx)("img",{src:"https://i.imgur.com/ScrFDBm.png",style:{height:"4.6em",width:"20em"}})}),Object(K.jsx)(f.a.Toggle,{"aria-controls":"navbar"}),Object(K.jsx)(f.a.Collapse,{id:"navbar",style:{justifyContent:"flex-end"},children:Object(K.jsx)(k.a,{className:"ml-auto",children:E.loggedIn()?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("span",{children:["Hey there, ",E.getProfile().data.username,"!"]}),Object(K.jsx)(k.a.Link,{className:"btn btn-lg btn-link m=2 text-light",as:b.b,to:"/visited",children:"Prev Visited"}),Object(K.jsx)(k.a.Link,{className:"btn btn-lg btn-link m=2 text-light",as:b.b,to:"/home",children:"US Map"}),Object(K.jsx)("button",{className:"btn btn-lg btn-link m=2 text-light",onClick:E.logout,children:"Logout"})]}):Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(k.a.Link,{className:"btn btn-lg btn-link m=2 text-light",onClick:function(){return n(!0)},children:"Login/Sign Up"})})})})]})}),Object(K.jsx)(w.a,{size:"lg",show:a,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal",children:Object(K.jsxs)(N.a.Container,{defaultActiveKey:"login",children:[Object(K.jsx)(w.a.Header,{closeButton:!0,children:Object(K.jsx)(w.a.Title,{id:"signup-modal",children:Object(K.jsxs)(k.a,{variant:"pills",children:[Object(K.jsx)(k.a.Item,{children:Object(K.jsx)(k.a.Link,{eventKey:"login",children:"Login"})}),Object(K.jsx)(k.a.Item,{children:Object(K.jsx)(k.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(K.jsx)(w.a.Body,{children:Object(K.jsxs)(N.a.Content,{children:[Object(K.jsx)(N.a.Pane,{eventKey:"login",children:Object(K.jsx)(G,{handleModalClose:function(){return n(!1)}})}),Object(K.jsx)(N.a.Pane,{eventKey:"signup",children:Object(K.jsx)(R,{handleModalClose:function(){return n(!1)}})})]})})]})})]})};var _,Y=function(){return Object(K.jsx)("footer",{className:"bg-dark fixed-bottom",children:Object(K.jsx)("div",{className:"container",children:Object(K.jsxs)("p",{className:"m-0 text-center text-white",children:[Object(K.jsx)(b.b,{className:"btn btn-lg btn-link m=2 text-light",to:"/portfolio",children:Object(K.jsx)("img",{className:"footer-img",src:"https://i.imgur.com/jBk4CCe.png"})}),Object(K.jsx)(b.b,{className:"btn btn-lg btn-link m=2 text-light",to:"/contact",children:Object(K.jsx)("img",{className:"footer-img",src:"https://i.imgur.com/X5PRHtt.png"})}),Object(K.jsx)("a",{className:"btn btn-lg btn-link m=2 text-light",href:"https://github.com/Chris-Franklin-1701/MERN-Project3-Parks",children:Object(K.jsx)("img",{className:"footer-img",src:"https://i.imgur.com/Ze9kryd.png"})})]})})})},z=a(126),J=a.n(z),Z=function(){return Object(K.jsx)("div",{id:"home",className:"overlay",children:Object(K.jsx)(J.a,{customize:{NJ:{clickHandler:function(e){return console.log("Custom handler for NJ",e.target.dataset)}},NY:{}},onClick:function(e){window.location.assign("/state/".concat(e.target.dataset.name))}})})},X=function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{className:"overlay"}),Object(K.jsx)("header",{id:"landing-header",children:Object(K.jsxs)("div",{className:"parksText",children:[Object(K.jsx)(k.a.Link,{as:b.b,to:"/home",children:Object(K.jsx)("img",{src:"https://i.imgur.com/ACg9toi.png",className:"logo-animation"})}),Object(K.jsx)("h1",{children:"Parks for Rec"})]})})]})},Q=a(131),ee=a(176),te=function(e){var t=e.parkData,a=Object(ee.a)(B),n=Object(g.a)(a,2),c=n[0],i=(n[1].error,Object(r.useState)(!1)),s=Object(g.a)(i,2),o=s[0],l=s[1],d=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),l(!0),E.loggedIn()?E.getToken():null){e.next=5;break}return e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,c({variables:{parkId:t.parkId}});case 8:if(a=e.sent,console.log(a),a){e.next=12;break}throw new Error("Something went wrong");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)("div",{className:"info col-4",children:[void 0!==t.fullName?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h2",{children:t.fullName}),Object(K.jsx)("p",{children:t.designation}),Object(K.jsx)("p",{children:t.description}),Object(K.jsxs)("a",{href:"tel:".concat(t.phoneNumber),children:["Phone Number: ",t.phoneNumber]}),Object(K.jsx)("p",{children:t.address}),Object(K.jsx)("a",{href:t.url,children:"Click here for more information"}),Object(K.jsx)("h4",{children:"Activities"}),Object(K.jsx)("ul",{children:t.activities.map((function(e){return Object(K.jsxs)("li",{children:[" ",e.name," "]},e.id)}))}),Object(K.jsx)("h4",{children:"EntranceFees"}),Object(K.jsx)("ul",{children:t.entranceFees.map((function(e){return Object(K.jsxs)("li",{children:["$",e.cost," - ",e.description," "]},e.description)}))}),Object(K.jsxs)("button",{onClick:function(){return d(t)},className:"",children:[" ","Add to Previously Visited"," "]}),Object(K.jsx)("div",{style:{height:95}})]}):Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("h2",{children:"Click on marker to see info"})}),Object(K.jsxs)(w.a,{size:"lg",show:o,onHide:function(){return l(!1)},children:[Object(K.jsx)(w.a.Header,{closeButton:!0,children:Object(K.jsx)(w.a.Title,{children:"Park added successful"})}),Object(K.jsx)(w.a.Body,{children:Object(K.jsx)("p",{children:"This park has been add to your visited park"})}),Object(K.jsx)(w.a.Footer,{children:Object(K.jsx)(L.a,{variant:"primary",onClick:function(){return l(!1)},children:"Ok"})})]})]})},ae=a(181),ne=Object(W.a)(_||(_=Object(U.a)(["\n    query me {\n        me {\n            _id\n            username\n            email\n            saveVisited {\n                parkId\n            }\n        }\n    }\n"])));a(107).config();var ce=function(e){var t=e.zoomLevel,a=Object(r.useState)({}),n=Object(g.a)(a,2),c=n[0],i=n[1],s=Object(h.f)().state;Object(r.useEffect)((function(){b(s)}),[s]);var o=Object(r.useState)([]),l=Object(g.a)(o,2),d=l[0],j=l[1],b=function(e){var t="https://developer.nps.gov/api/v1/parks?stateCode=".concat(e,"&api_key=").concat("W0dzOmktZaPugUJXF0onKGeCb2WwALwKOFLwMtgR");fetch(t).then((function(e){if(e.ok){var t=[];e.json().then((function(e){for(var a=0;a<e.data.length;a++){var n={};n.parkId=e.data[a].id,n.url=e.data[a].url,n.fullName=e.data[a].fullName,n.description=e.data[a].description,n.designation=e.data[a].designation,n.latitude=e.data[a].latitude,n.longitude=e.data[a].longitude,n.activities=e.data[a].activities,n.phoneNumber=e.data[a].contacts.phoneNumbers[0].phoneNumber,n.address="".concat(e.data[a].addresses[0].line1,", ").concat(e.data[a].addresses[0].line2,", ").concat(e.data[a].addresses[0].line3," ").concat(e.data[a].addresses[0].city," ").concat(e.data[a].addresses[0].stateCode," ").concat(e.data[a].addresses[0].postalCode),n.entranceFees=e.data[a].entranceFees,n.entrancePasses=e.data[a].entrancePasses,n.images=e.data[a].images,t.push(n)}j(t)}))}else console.error("Error: ".concat(e.statusText))}))},u=Object(ae.a)(ne),m=(u.loading,u.data),O=(u.errors,(null===m||void 0===m?void 0:m.me)||[]);return Object(K.jsx)("div",{className:"map-and-info container-fluid",children:Object(K.jsxs)("div",{className:"row",children:[Object(K.jsx)("div",{className:"google-map col-8",children:Object(K.jsx)(Q.a,{bootstrapURLKeys:{key:"AIzaSyBr1ZLjeqx0GNBqMDnxBUA7ZM3xI9dgDrE"},defaultCenter:{WI:[44.5,-89.5],WV:[39,-80.5],VT:[44,-72.699997],TX:[31,-100],SD:[44.5,-100],RI:[41.700001,-71.5],OR:[44,-120.5],NY:[43,-75],NH:[44,-71.5],NE:[41.5,-100],KS:[38.5,-98],MS:[33,-90],IL:[40,-89],DE:[39,-75.5],CT:[41.599998,-72.699997],AR:[34.799999,-92.199997],IN:[40.273502,-86.126976],MO:[38.573936,-92.60376],FL:[27.994402,-81.760254],NV:[39.876019,-117.224121],ME:[45.367584,-68.972168],MI:[44.182205,-84.506836],GA:[33.247875,-83.441162],HI:[19.741755,-155.844437],AK:[66.160507,-153.369141],TN:[35.860119,-86.660156],VA:[37.926868,-78.024902],NJ:[39.833851,-74.871826],KY:[37.839333,-84.27002],ND:[47.650589,-100.437012],MN:[46.39241,-94.63623],OK:[36.084621,-96.921387],MT:[46.96526,-109.533691],WA:[47.751076,-120.740135],UT:[39.41922,-111.950684],CO:[39.113014,-105.358887],OH:[40.367474,-82.996216],AL:[32.31823,-86.902298],IA:[42.032974,-93.581543],NM:[34.307144,-106.018066],SC:[33.836082,-81.163727],PA:[41.203323,-77.194527],AZ:[34.048927,-111.093735],MD:[39.045753,-76.641273],MA:[42.407211,-71.382439],CA:[36.778259,-119.417931],ID:[44.068203,-114.742043],WY:[43.07597,-107.290283],NC:[35.782169,-80.793457],LA:[30.39183,-92.329102]}[s],defaultZoom:t,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){return function(e,t){for(var a=function(a){var n=void 0;d.map((function(c){return console.log(n),c.parkId===O.saveVisited[a].parkId?(n=new t.Marker({position:{lat:Number(c.latitude),lng:Number(c.longitude)},map:e,title:c.fullName,icon:{url:"http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png"}})).addListener("click",(function(){i(c)})):c.parkId!==O.saveVisited[a].parkId&&(n=new t.Marker({position:{lat:Number(c.latitude),lng:Number(c.longitude)},map:e,title:c.fullName,icon:{url:"http://maps.google.com/mapfiles/kml/pal2/icon12.png"}})).addListener("click",(function(){i(c)})),console.log(n),n}))},n=0;n<O.saveVisited.length;n++)a(n)}(e.map,e.maps)}})}),Object(K.jsx)(te,{parkData:c})]})})},ie=function(){return Object(K.jsx)("div",{className:"overlay",children:Object(K.jsxs)("div",{id:"portfolio",className:"portfolio",children:[Object(K.jsx)("h1",{children:"Please visit our team's portfolios:"}),Object(K.jsx)("a",{href:"https://alexcwik.github.io/my_portfolio/",target:"blank",children:"Alex Cwiklinski"}),Object(K.jsx)("a",{href:"https://christopherfranklin.dev",target:"blank",children:"Christopher Franklin"}),Object(K.jsx)("a",{href:"https://seancraig.me",target:"blank",children:"Sean Craig"}),Object(K.jsx)("a",{href:"https://stewsabatino.github.io//",children:"Stew Sabatino"})]})})},se=a(31),re=a(83),oe=a(52),le=function(){return Object(K.jsx)("div",{className:"overlay",children:Object(K.jsxs)("div",{id:"contact",className:"contact",children:[Object(K.jsx)("h1",{children:"Contact Information:"}),Object(K.jsxs)("div",{className:"contact-name",children:[Object(K.jsx)("h3",{children:"Alex Cwiklinski"}),Object(K.jsxs)("a",{className:"Icons",children:[Object(K.jsx)("a",{href:"mailto:alexcwik1490@gmail.com",children:Object(K.jsx)(se.a,{icon:re.a,className:"fa-2x"})}),Object(K.jsx)("a",{href:"http://www.linkedin.com/in/alexander-cwiklinski-7b4955186",children:Object(K.jsx)(se.a,{icon:oe.b,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://github.com/alexcwik",children:Object(K.jsx)(se.a,{icon:oe.a,className:"fa-2x"})})]})]}),Object(K.jsxs)("div",{className:"contact-name",children:[Object(K.jsx)("h3",{children:"Christopher Franklin"}),Object(K.jsxs)("a",{className:"Icons",children:[Object(K.jsx)("a",{href:"mailto:contact@christopherfranklin.dev",children:Object(K.jsx)(se.a,{icon:re.a,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://www.linkedin.com/in/christopher-franklin-a44957a4/",children:Object(K.jsx)(se.a,{icon:oe.b,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://github.com/Chris-Franklin-1701",children:Object(K.jsx)(se.a,{icon:oe.a,className:"fa-2x"})})]})]}),Object(K.jsxs)("div",{className:"contact-name",children:[Object(K.jsx)("h3",{children:"Sean Craig"}),Object(K.jsxs)("a",{className:"Icons",children:[Object(K.jsx)("a",{href:"mailto:seancraig21@gmail.com",children:Object(K.jsx)(se.a,{icon:re.a,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://www.linkedin.com/in/sean-craig-bb219861/",children:Object(K.jsx)(se.a,{icon:oe.b,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://github.com/seanscraig",children:Object(K.jsx)(se.a,{icon:oe.a,className:"fa-2x"})})]})]}),Object(K.jsxs)("div",{className:"contact-name",children:[Object(K.jsx)("h3",{children:"Stew Sabatino"}),Object(K.jsxs)("a",{className:"Icons",children:[Object(K.jsx)("a",{href:"mailto:stewsabatino@gmail.com",children:Object(K.jsx)(se.a,{icon:re.a,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://www.linkedin.com/in/stew-sabatino-62358a220/",children:Object(K.jsx)(se.a,{icon:oe.b,className:"fa-2x"})}),Object(K.jsx)("a",{href:"https://github.com/stewsabatino",children:Object(K.jsx)(se.a,{icon:oe.a,className:"fa-2x"})})]})]})]})})},de=a(182);a(107).config();var je=function(e){var t=e.userData;return Object(K.jsxs)(K.Fragment,{children:[console.log("userData: ".concat(t)),Object(K.jsx)("div",{className:"visited-parks-list",children:t.map((function(e){return Object(K.jsxs)("div",{className:"park-preview",children:[Object(K.jsx)("h2",{children:e.fullName}),Object(K.jsx)("p",{children:e.designation}),Object(K.jsx)("p",{children:e.description}),Object(K.jsxs)("a",{href:"tel:".concat(e.phoneNumber),children:["Phone Number: ",e.phoneNumber]}),Object(K.jsx)("p",{children:e.address}),Object(K.jsx)("a",{href:e.url,children:"Click here for more information"}),Object(K.jsx)("h4",{children:"Activities"}),Object(K.jsx)("ul",{children:e.activities.map((function(e){return Object(K.jsxs)("li",{children:[" ",e.name," "]},e.id)}))}),Object(K.jsx)("h4",{children:"EntranceFees"}),Object(K.jsx)("ul",{children:e.entranceFees.map((function(e){return Object(K.jsxs)("li",{children:["$",e.cost," - ",e.description," "]},e.description)}))})]})}))})]})};a(107).config();var be=function(){var e=Object(de.a)(ne),t=e.loading,a=e.data,n=(null===a||void 0===a?void 0:a.me)||[],c=[];return Object(K.jsx)("div",{children:t?Object(K.jsx)("div",{children:"Loading..."}):Object(K.jsxs)(K.Fragment,{children:[function(e){console.log("calling getParksData");for(var t=0;t<e.saveVisited.length;t++){var a="https://developer.nps.gov/api/v1/parks?id=".concat(e.saveVisited[t].parkId,"&api_key=").concat("W0dzOmktZaPugUJXF0onKGeCb2WwALwKOFLwMtgR");fetch(a).then((function(e){e.ok&&(e.json().then((function(e){var t={};t.url=e.data[0].url,t.fullName=e.data[0].fullName,t.description=e.data[0].description,t.designation=e.data[0].designation,t.latitude=e.data[0].latitude,t.longitude=e.data[0].longitude,t.activities=e.data[0].activities,t.phoneNumber=e.data[0].contacts.phoneNumbers[0].phoneNumber,t.address="".concat(e.data[0].addresses[0].line1,", ").concat(e.data[0].addresses[0].line2,", ").concat(e.data[0].addresses[0].line3," ").concat(e.data[0].addresses[0].city," ").concat(e.data[0].addresses[0].stateCode," ").concat(e.data[0].addresses[0].postalCode),t.entranceFees=e.data[0].entranceFees,t.entrancePasses=e.data[0].entrancePasses,t.images=e.data[0].images,c.push(t)})),console.log(c))}))}}(n),console.log("visitedParksData: ".concat(c)),"You have ",n.saveVisited.length," visited parks",Object(K.jsx)(je,{userData:c})]})})},he=Object(u.a)({uri:"/graphql"}),ue=Object(x.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(j.a)(Object(j.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),me=new m.a({link:ue.concat(he),cache:new O.a});var Oe=function(){return Object(K.jsx)(p.a,{client:me,children:Object(K.jsx)(b.a,{children:Object(K.jsxs)("div",{children:[Object(K.jsx)(H,{}),Object(K.jsxs)(h.c,{children:[Object(K.jsx)(h.a,{exact:!0,path:"/",children:Object(K.jsx)(X,{})}),Object(K.jsx)(h.a,{exact:!0,path:"/state/:state",children:Object(K.jsx)(ce,{zoomLevel:6})}),Object(K.jsx)(h.a,{exact:!0,path:"/home",children:Object(K.jsx)(Z,{})}),Object(K.jsx)(h.a,{exact:!0,path:"/visited",children:Object(K.jsx)(be,{})}),Object(K.jsx)(h.a,{exact:!0,path:"/portfolio",children:Object(K.jsx)(ie,{})}),Object(K.jsx)(h.a,{exact:!0,path:"/contact",children:Object(K.jsx)(le,{})})]}),Object(K.jsx)(Y,{})]})})})},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(163);d.a.render(Object(K.jsx)(o.a.StrictMode,{children:Object(K.jsx)(Oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):xe(t,e)}))}}()},40:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.ee4ee19c.chunk.js.map