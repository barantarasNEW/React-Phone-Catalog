(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[1],{111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},79:function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),function(e){e.AGE="age",e.PRICE="price",e.ALPHABETIC="name"}(c||(c={}))},81:function(e,t,n){"use strict";var c=n(4),r=n(1),a=n(8),i=n(129),s=n(127),o=(n(111),n(83)),u=function(e,t){var n;return(null===(n=e.find((function(e){return e.value===t})))||void 0===n?void 0:n.name)||e[0].name},l=n(6),j=n(7),b=n.n(j),m=(n(112),n(12)),f=n(80);function p(e,t){if(null==e)return{};var n,c,r=Object(f.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d,O=n(33),h=n(0),v=function(e){var t=e.children,n=e.params,r=p(e,["children","params"]),i=Object(a.d)(),s=Object(c.a)(i,1)[0];return Object(h.jsx)(a.b,Object(m.a)(Object(m.a)({to:{search:Object(O.a)(s,n)}},r),{},{children:t}))},g=function(e){var t=e.width,n=e.height,a=e.subTitle,i=e.options,s=e.paramsName,o=e.initialName,u=Object(r.useState)(!1),j=Object(c.a)(u,2),m=j[0],f=j[1],p=Object(r.useState)(o),d=Object(c.a)(p,2),O=d[0],g=d[1],x=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(e){x.current&&!x.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[x]);var y=function(){f((function(e){return!e}))};return Object(h.jsxs)("div",{className:"select",ref:x,children:[Object(h.jsx)("span",{className:"select__subtitle",children:a}),Object(h.jsxs)("div",{className:"select__wrapper",style:{width:t,height:n},children:[Object(h.jsxs)("button",{type:"button",className:"select__button",onClick:y,children:[O,m?Object(h.jsx)("img",{src:"./icons/upDis.svg",alt:"icon"}):Object(h.jsx)("img",{src:"./icons/downDis.svg",alt:"icon"})]}),m&&Object(h.jsx)("ul",{className:"select__list",children:i.map((function(e){var t,n=e.name,c=e.value;return Object(h.jsx)("li",{children:Object(h.jsx)(v,{params:(t={},Object(l.a)(t,s,c),Object(l.a)(t,"page","1"),t),type:"button",className:b()("select__item",{"select__item--active":O===n}),onClick:function(){return function(e){g(e),y()}(n)},children:n})},c)}))})]})]})},x=n(36),y={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},_=new Uint8Array(16);function N(){if(!d&&!(d="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(_)}for(var w=[],E=0;E<256;++E)w.push((E+256).toString(16).slice(1));function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}var S=function(e,t,n){if(y.randomUUID&&!t&&!e)return y.randomUUID();var c=(e=e||{}).random||(e.rng||N)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=c[r];return t}return D(c)},I=(n(113),n(38)),U=function(e){return b()("button-block",{"button-dis":e})},k=function(e){var t=e.isDis,n=e.move,c=e.img,r=p(e,["isDis","move","img"]);return Object(h.jsx)(v,Object(m.a)(Object(m.a)({},r),{},{className:U(t),params:{page:"".concat(n)},children:Object(h.jsx)("img",{src:c,alt:"icon"})}))},T=function(e){var t=e.pages,n=Object(a.d)(),i=Object(c.a)(n,1)[0].get("page")||"1",s=Object(r.useMemo)((function(){return Array.from({length:t}).map((function(e,t){return t+1}))}),[t]),o=Object(r.useState)(0),u=Object(c.a)(o,2),l=u[0],j=u[1],m=Object(r.useState)(5),f=Object(c.a)(m,2),p=f[0],d=f[1],O=Object(r.useMemo)((function(){return s.length<=5?s:s.slice(l,p)}),[s,l,p]);return Object(r.useEffect)((function(){Object(I.a)(),O[0]===+i&&1!==+i?(j((function(e){return e-1})),d((function(e){return e-1}))):O[O.length-1]===+i&&+i!==s[s.length-1]&&(j((function(e){return e+1})),d((function(e){return e+1})))}),[i]),t?Object(h.jsxs)("ul",{className:"pagination",children:[Object(h.jsx)("li",{className:"pagination__item",children:Object(h.jsx)(k,{img:"./icons/left.svg",move:+i-1,isDis:1===+i,"data-cy":"paginationLeft"})}),O.map((function(e){return Object(h.jsx)("li",{className:"pagination__item",children:Object(h.jsx)(v,{className:(t=e===+i,b()("button-block pagination__link",{active:t})),params:{page:"".concat(e)},children:e})},S());var t})),Object(h.jsx)("li",{className:"pagination__item",children:Object(h.jsx)(k,{img:"./icons/right.svg",move:+i+1,isDis:+i===t,"data-cy":"paginationRight"})})]}):null},C=n(26),A=(n(114),n(82)),M=n.n(A),R=n(17),L=function(e){var t=e.products,n=Object(a.d)(),i=Object(c.a)(n,1)[0].get("query")||"",s=Object(r.useState)([]),o=Object(c.a)(s,2),u=o[0],l=o[1],j=Object(r.useState)(!1),b=Object(c.a)(j,2),m=b[0],f=b[1],p=Object(r.useCallback)(M()((function(e){if(f(!0),!e.length)return l([]),void f(!1);var n=new RegExp("".concat(e,".+$"),"i"),c=t.filter((function(e){return-1!==e.name.search(n)}));l(c),f(!1)}),500),[t]);return Object(r.useEffect)((function(){f(!0),p(i)}),[i,p]),m?Object(h.jsx)(R.a,{}):Object(h.jsx)("section",{className:"page__section search",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("span",{className:"search__count",children:u.length?"".concat(u.length," results"):Object(h.jsx)(C.a,{})}),Object(h.jsx)("ul",{className:"search__list",children:u.map((function(e){return Object(h.jsx)("li",{className:"search__item",children:Object(h.jsx)(x.a,{product:e})},e.id)}))})]})})},P=[{name:"Newest",value:"age"},{name:"Alphabetically",value:"name"},{name:"Cheapest",value:"price"}],$=[{name:"4",value:"4"},{name:"8",value:"8"},{name:"16",value:"16"},{name:"All",value:"all"}];t.a=function(e){var t=e.products,n=e.title,l=e.isDisSelects,j=e.isDisPag,b=e.emptyName,m=void 0===b?"Not found":b,f=e.isFavorites,p=void 0!==f&&f,d=Object(a.d)(),O=Object(c.a)(d,1)[0],v=O.get("sort")||P[0].value,y=O.get("items")||$[1].value,_=O.get("page")||"1",N=O.get("query")||"",w=Object(r.useMemo)((function(){return l?t:Object(o.a)(t,v)}),[v,t,o.a,l]),E=Object(r.useMemo)((function(){return"all"===y||j?w:w.slice(+y*(+_-1),+y*+_)}),[y,_,w,j]),D=Object(r.useMemo)((function(){return Math.ceil(t.length/+y)}),[y,t]);return N.length?Object(h.jsx)(L,{products:w}):Object(h.jsx)("section",{className:"page__section products",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"page__title products__title",children:n}),Object(h.jsx)("span",{className:"products__subtitle",children:"".concat(t.length," models")}),0===t.length?Object(h.jsx)(C.a,{name:m}):Object(h.jsxs)(h.Fragment,{children:[!l&&Object(h.jsxs)("div",{className:"products__selects",children:[Object(h.jsx)(g,{width:176,height:40,subTitle:"Sort by",options:P,paramsName:"sort",initialName:u(P,v)}),Object(h.jsx)(g,{width:128,height:40,subTitle:"Items on page",options:$,paramsName:"items",initialName:u($,y)})]}),Object(h.jsx)("ul",{"data-cy":"productList",className:p?"":"products__list",children:p?Object(h.jsx)(i.a,{className:"products__list",children:E.map((function(e){return Object(h.jsx)(s.a,{timeout:500,classNames:"item",children:Object(h.jsx)("li",{className:"products__item",children:Object(h.jsx)(x.a,{product:e})})},e.id)}))}):E.map((function(e){return Object(h.jsx)("li",{className:"products__item",children:Object(h.jsx)(x.a,{product:e})},e.id)}))}),(!j||t.length>8)&&Object(h.jsx)(T,{pages:D})]})]})})}},82:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,u=s||o||Function("return this")(),l=Object.prototype.toString,j=Math.max,b=Math.min,m=function(){return u.Date.now()};function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=r.test(e);return s||a.test(e)?i(e.slice(2),s?2:8):c.test(e)?NaN:+e}e.exports=function(e,t,n){var c,r,a,i,s,o,u=0,l=!1,d=!1,O=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=c,a=r;return c=r=void 0,u=t,i=e.apply(a,n)}function v(e){return u=e,s=setTimeout(x,t),l?h(e):i}function g(e){var n=e-o;return void 0===o||n>=t||n<0||d&&e-u>=a}function x(){var e=m();if(g(e))return y(e);s=setTimeout(x,function(e){var n=t-(e-o);return d?b(n,a-(e-u)):n}(e))}function y(e){return s=void 0,O&&c?h(e):(c=r=void 0,i)}function _(){var e=m(),n=g(e);if(c=arguments,r=this,o=e,n){if(void 0===s)return v(o);if(d)return s=setTimeout(x,t),h(o)}return void 0===s&&(s=setTimeout(x,t)),i}return t=p(t)||0,f(n)&&(l=!!n.leading,a=(d="maxWait"in n)?j(p(n.maxWait)||0,t):a,O="trailing"in n?!!n.trailing:O),_.cancel=function(){void 0!==s&&clearTimeout(s),u=0,c=o=r=s=void 0},_.flush=function(){return void 0===s?i:y(m())},_}}).call(this,n(35))},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(9),r=n(79),a=function(e,t){return Object(c.a)(e).sort((function(e,n){switch(t){case r.a.AGE:return n.price-e.price;case r.a.PRICE:return e.price-n.price;default:return e.name.localeCompare(n.name)}}))}}}]);
//# sourceMappingURL=1.3ad0fdc4.chunk.js.map