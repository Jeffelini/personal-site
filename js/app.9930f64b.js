(function(t){function e(e){for(var i,r,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],o[r]&&f.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},a=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"78c6925e"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=i);var a,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t),a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}o[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,s.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/personal-site/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0729":function(t,e,n){t.exports=n.p+"img/linkedin_logo.42fe7788.png"},"08ef":function(t,e,n){},"0966":function(t,e,n){t.exports=n.p+"img/me2.428524d6.jpg"},"135b":function(t,e,n){t.exports=n.p+"img/stuco-logo.c580ff19.png"},2229:function(t,e,n){t.exports=n.p+"img/h4h-logo.08985afb.png"},2856:function(t,e,n){},"37f7":function(t,e,n){"use strict";var i=n("08ef"),o=n.n(i);o.a},"4ae8":function(t,e,n){t.exports=n.p+"img/fgf-logo.640b5e63.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("5c0b"),n("2877")),c={},s=Object(r["a"])(c,o,a,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"nav"},[n("a",{staticClass:"upperNav",attrs:{href:"#intro"},on:{click:function(e){e.preventDefault(),t.scrollToID("intro")}}},[t._v("JL")]),n("div",{staticClass:"lowerNav"},[n("a",{attrs:{href:"#about-me"},on:{click:function(e){e.preventDefault(),t.scrollToID("about-me")}}},[t._v("About")]),n("a",{attrs:{href:"#projects"},on:{click:function(e){e.preventDefault(),t.scrollToID("projects")}}},[t._v("Projects(WIP)")]),n("a",{attrs:{href:"#contact-me"},on:{click:function(e){e.preventDefault(),t.scrollToID("contact-me")}}},[t._v("Contact me(WIP)")])])]),n("Introduction",{attrs:{id:"intro"}}),n("AboutMe",{attrs:{id:"about-me"}}),n("Projects",{attrs:{id:"projects"}}),n("ContactMe",{attrs:{id:"contact-me"}})],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("particles",{attrs:{lineColor:"#a54040"}}),t._m(0)],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"whoAmI"}},[t._v("\n    Hi, my name is\n    "),n("span",{staticStyle:{color:"#8B0000"}},[t._v("Jeffrey")]),t._v(".\n    "),n("br"),t._v("Let's learn something new.\n    "),n("br"),n("span",{staticStyle:{"font-size":"20px"}},[t._v("This site is still a work in progress(WIP).")])])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"particles",attrs:{id:t.uniqID}})},v=[],b=(n("f751"),n("c437")),g=n.n(b),_=n("fccd"),y={props:{uniqID:{type:String,default:function(){return"particles-".concat(g()())}},lineColor:String,config:Object},mounted:function(){var t=Object.assign(_,this.config);this.lineColor&&(t.particles.line_linked.color=this.lineColor),window.particlesJS(this.uniqID,t)}},w=y,C=(n("f965"),Object(r["a"])(w,m,v,!1,null,"a8f71444",null));C.options.__file="index.vue";var j=C.exports,k={name:"Introduction",components:{Particles:j}},S=k,x=(n("b8a2"),Object(r["a"])(S,p,h,!1,null,"0d01f68f",null));x.options.__file="Introduction.vue";var I=x.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutMe"},[i("h1",{staticStyle:{color:"#8B0000"}},[t._v("About Me")]),i("div",{staticClass:"content"},[i("img",{attrs:{src:n("0966"),height:"250"}}),i("p",[t._v("Heyo! I'm a third year Computer Science and\n      "),i("br"),t._v("Business Administration Double Degree\n      "),i("br"),t._v("student attending the University of Waterloo\n      "),i("br"),t._v("and Wilfrid Laurier University.\n      "),i("br"),i("br"),t._v("I am interested in software and web development.\n      "),i("br"),t._v("In my free time I enjoy connecting with friends,\n      "),i("br"),t._v("and going to the gym so I can drink more bubble tea.\n    ")])])])}],E={name:"AboutMe"},T=E,D=(n("9209"),Object(r["a"])(T,P,M,!1,null,"281c07ec",null));D.options.__file="AboutMe.vue";var O=D.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"experience"},[i("div",{ref:"modal",staticClass:"modal",class:{visible:t.modalVisible},on:{click:t.hideModal}},[i("div",{staticClass:"card"},[i("div",{staticClass:"content"},[i("h2",[t._v(t._s(t.cardTitle))]),i("h3",[t._v(t._s(t.cardPosition))]),i("h4",[t._v(t._s(t.cardDate))]),i("p",[t._v(t._s(t.cardBody))])])])]),i("img",{attrs:{src:n("135b"),height:"250",width:"250",id:"stuco"},on:{click:function(e){t.showModal("stuco")}}}),i("img",{attrs:{src:n("4ae8"),height:"250",width:"250",id:"fgf"},on:{click:function(e){t.showModal("fgf")}}}),i("img",{attrs:{src:n("2229"),height:"250",width:"250",id:"h4h"},on:{click:function(e){t.showModal("h4h")}}})])},H=[],$={name:"Experience",data:function(){return{modalVisible:!1,cardTitle:"",cardPosition:"",cardDate:"",cardBody:""}},methods:{showModal:function(t){switch(t){case"stuco":this.cardTitle="St.Robert CHS Student Council",this.cardPosition="Vice President",this.cardDate="September 2016 to June 2017",this.cardBody="Voted by the entire high school student body to be the Student Council Vice President.As the Vice President, I was in charge of managing the overall council, directing and motivating the team to plan events for students.\nIn addition, I was in charge of managing the Marketing team as well as council inventory.\n\n";break;case"fgf":this.cardTitle="FGF Brands",this.cardPosition="Content Data Management Specialist",this.cardDate="May 2018 to August 2018",this.cardBody="As Content Data Management Specialist co-op, I assisted in the company-wide transition from our legacy ERP software to SAP S/4HANA. This involved creating SQL queries used for ETLs as well as creating training documentations which were used company-wide. In addition, I also created SharePoint team using HTML/CSS and JavaScript.";break;case"h4h":this.cardTitle="Habitat For Humanity - UW Campus Chapter",this.cardPosition="Web Developer",this.cardDate="September 2018 to PRESENT",this.cardBody="Created and maintained the Habitats for Humanity website for the H4H UW Campus Chapter using React, HTML, and CSS.\n\nCheck out our site: http://www.uofwhabitat.clubs.feds.ca/index.html";break}this.modalVisible=!0},hideModal:function(t){t.toElement===this.$refs.modal&&(this.modalVisible=!1)}}},B=$,L=(n("827f"),Object(r["a"])(B,A,H,!1,null,"2a6245cc",null));L.options.__file="Experience.vue";var V=L.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("p",[t._v("Hi. This section is still a work in progress.")])])}],q=(n("bc17"),{}),z=Object(r["a"])(q,W,J,!1,null,"0706a7d9",null);z.options.__file="Projects.vue";var N=z.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("h3",[t._v("Let's get in touch")]),i("div",{staticClass:"links"},[i("a",{attrs:{href:"mailto: jeffrey.liu@uwaterloo.ca"}},[i("img",{attrs:{src:n("b05c"),height:"50",width:"50"}})]),i("a",{attrs:{href:"https://www.linkedin.com/in/liu-jeffrey/",target:"_blank"}},[i("img",{attrs:{src:n("0729"),height:"50",width:"50"}})]),i("a",{attrs:{href:"http://github.com/liu-jeffrey",target:"_blank"}},[i("img",{attrs:{src:n("8125"),height:"50",width:"50"}})])])])}],F=(n("37f7"),{}),G=Object(r["a"])(F,R,U,!1,null,"bf03af40",null);G.options.__file="ContactMe.vue";var Q=G.exports,X={name:"home",methods:{scrollToID:function(t){var e=document.getElementById(t);e.scrollIntoView({behavior:"smooth"})}},components:{Introduction:I,AboutMe:O,Experience:V,Projects:N,ContactMe:Q}},Y=X,K=(n("b3d3"),Object(r["a"])(Y,d,f,!1,null,"57b2aeaf",null));K.options.__file="Home.vue";var Z=K.exports;i["a"].use(u["a"]);var tt=new u["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});i["a"].config.productionTip=!1,new i["a"]({router:tt,render:function(t){return t(l)}}).$mount("#app")},"58e6":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("2856"),o=n.n(i);o.a},7215:function(t,e,n){},8125:function(t,e,n){t.exports=n.p+"img/github_logo.22bcfc01.png"},"827f":function(t,e,n){"use strict";var i=n("97d6"),o=n.n(i);o.a},9209:function(t,e,n){"use strict";var i=n("7215"),o=n.n(i);o.a},"97d6":function(t,e,n){},b05c:function(t,e,n){t.exports=n.p+"img/email_logo.a92d8b5c.png"},b3d3:function(t,e,n){"use strict";var i=n("faca"),o=n.n(i);o.a},b8a2:function(t,e,n){"use strict";var i=n("58e6"),o=n.n(i);o.a},bc17:function(t,e,n){"use strict";var i=n("eef2"),o=n.n(i);o.a},cd4c:function(t,e,n){},eef2:function(t,e,n){},f965:function(t,e,n){"use strict";var i=n("cd4c"),o=n.n(i);o.a},faca:function(t,e,n){},fccd:function(t){t.exports={particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:"#9e9e9e"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#7a7a7a",opacity:.25,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4}}},retina_detect:!0}}});
//# sourceMappingURL=app.9930f64b.js.map