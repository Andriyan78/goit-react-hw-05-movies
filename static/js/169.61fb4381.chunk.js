"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[169],{169:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,o,a,i,c,s,p=r(439),l=r(791),u=r(168),d=r(444),x=d.ZP.ul(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  justify-content: space-evenly;\n  gap: 30px;\n  color: black;\n  padding: 0;\n"]))),h=d.ZP.section(o||(o=(0,u.Z)(["\n  padding: 15px;\n  background-color: beige;\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n"]))),f=r(87),g=d.ZP.li(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  height: auto;\n  width: 240px;\n  background-color: rgb(201 27 108 / 25%);\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 10px 10px 8px 1px rgba(0, 0, 0, 0.2);\n  transform: scale(1);\n  transition: transform 250ms linear;\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),b=d.ZP.img(i||(i=(0,u.Z)(["\n  display: block;\n  width: 100%;\n  height: 360px;\n  border-radius: 10px;\n  color: black;\n"]))),m=d.ZP.p(c||(c=(0,u.Z)(["\n  margin: 0;\n  padding: 10px;\n  font-size: 18px;\n"]))),v=(0,d.ZP)(f.rU)(s||(s=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),Z=r(605),y=r(689),w=r(184);var k=function(n){var e=n.movie,r=e.id,t=e.title,o=e.poster_path,a=(n.query,(0,y.TH)());return(0,w.jsx)(g,{children:(0,w.jsxs)(v,{to:"/movies/".concat(r,"/"),state:{from:a},children:[null===o?(0,w.jsx)(b,{src:Z,alt:t}):(0,w.jsx)(b,{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:t}),(0,w.jsx)(m,{children:t})]})})};var j,P,q,_,S=function(n){var e=n.movies;return(0,w.jsx)(h,{children:(0,w.jsx)(x,{children:e&&e.map((function(n){return(0,w.jsx)(k,{movie:n},n.id)}))})})},C=r(126),z=d.ZP.form(j||(j=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  border: 1px solid black;\n  margin: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: rgb(134 42 46) 0px 8px 8px 4px;\n  background-color: rgb(84 79 81 / 25%);\n"]))),T=d.ZP.input(P||(P=(0,u.Z)(["\n  display: inline-flex;\n  width: 100%;\n  padding: 8px 32px 8px 8px;\n  border-radius: 10px;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 18px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),E=(0,d.ZP)(C.dVI)(q||(q=(0,u.Z)(["\n  width: 25px;\n  height: 25px;\n"]))),L=d.ZP.button(_||(_=(0,u.Z)(["\n  width: 60px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  border: 0;\n  transition: background-color 250ms linear;\n  :hover,\n  :focus-visible {\n    background-color: rgb(168 148 160);\n  }\n"]))),U=r(861),D=r(757),H=r.n(D);function I(){return I=(0,U.Z)(H().mark((function n(e){var r,t,o,a,i,c=arguments;return H().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,t="https://api.themoviedb.org/3/search/movie",o="?api_key=".concat("2fcb6a5f5ebbb13b312482f3f13e0e10","&query=").concat(e,"&language=en-US&page=").concat(r,"&include_adult=false"),n.next=6,fetch("".concat(t).concat(o));case 6:return a=n.sent,n.next=9,a.json();case 9:return i=n.sent,n.abrupt("return",i.results);case 11:case"end":return n.stop()}}),n)}))),I.apply(this,arguments)}var M=function(n){return I.apply(this,arguments)},V=function(){var n,e=(0,l.useState)([]),r=(0,p.Z)(e,2),t=r[0],o=r[1],a=(0,f.lr)(),i=(0,p.Z)(a,2),c=i[0],s=i[1],u=(0,l.useState)(""),d=(0,p.Z)(u,2),x=d[0],h=d[1],g=null!==(n=c.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){g&&M(g).then(o).catch((function(n){console.log("Error: "+n)}))}),[g]);return t?(0,w.jsxs)("main",{children:[(0,w.jsxs)(z,{onSubmit:function(n){if(x){n.preventDefault();var e=n.currentTarget;s(""!==x?{query:e.elements.query.value}:{}),h(""),e.reset()}else o([])},children:[(0,w.jsx)(T,{name:"query",type:"text",value:x,onChange:function(n){return e=n.currentTarget.value.toLocaleLowerCase(),void h(e);var e},placeholder:"SearchMovies"}),(0,w.jsx)(L,{type:"submit",children:(0,w.jsx)(E,{})})]}),t&&(0,w.jsx)(S,{query:g,movies:t})]}):null}},605:function(n,e,r){n.exports=r.p+"static/media/no-thumb.09ea9f6b1352b3452d9d.jpg"}}]);
//# sourceMappingURL=169.61fb4381.chunk.js.map