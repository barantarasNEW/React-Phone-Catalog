(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[6],{108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n,s=c(1);!function(e){e[e.BRAND=0]="BRAND",e[e.HOT=1]="HOT",e[e.LIKE=2]="LIKE"}(n||(n={}));var r,a=c(25),i=c(79),o=c(82),l=function(e,t){switch(t){case n.BRAND:return Object(o.a)(e,i.a.PRICE).reverse().slice(0,8);case n.HOT:return Object(o.a)(e,i.a.PRICE).slice(0,8);default:return e}},u=c(40),b=c(19),g=(c(91),c(92)),j=c.n(g);c(107),c(108);!function(e){e[e.prev=0]="prev",e[e.next=1]="next"}(r||(r={}));c(109);var p=c(0),m=function(e){var t=e.onClick,c=e.type===r.prev?"./icons/left.svg":"./icons/right.svg";return Object(p.jsx)("button",{type:"button",className:"button-block main-slider-button",onClick:t,"aria-label":"arrow",children:Object(p.jsx)("img",{src:c,alt:"icon"})})},h=["./img/banners/banner-phones.png","./img/banners/banner-tablets.png","./img/banners/banner-accessories.png"],d={dots:!0,dotsClass:"main-slider-dots",infinite:!0,speed:400,fade:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!0,slidesToShow:1,slidesToScroll:1,nextArrow:Object(p.jsx)(m,{type:r.next}),prevArrow:Object(p.jsx)(m,{type:r.prev}),customPaging:function(){return Object(p.jsx)("button",{type:"button","aria-label":"paging"})}},O=function(){return Object(p.jsx)("section",{className:"page__section main-slider",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(j.a,Object(b.a)(Object(b.a)({},d),{},{children:h.map((function(e){return Object(p.jsx)("img",{className:"main-slider__img",src:e,alt:"banner"},e)}))}))})})},f=(c(110),c(8)),x=function(e){var t=e.phonesLength,c=e.tabletsLength,n=e.accessoriesLength,r=Object(s.useMemo)((function(){return[{href:"/phones",img:"./img/categories/category-phones.png",title:"Mobile phones",count:t},{href:"/tablets",img:"./img/categories/category-tablets.png",title:"Tablets",count:c},{href:"/accessories",img:"./img/categories/category-accessories.png",title:"Accessories",count:n}]}),[t,c,n]);return Object(p.jsx)("section",{className:"page__section category",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h2",{className:"page__title",children:"Shop by category"}),Object(p.jsx)("ul",{className:"category__list",children:r.map((function(e){var t=e.href,c=e.img,n=e.title,s=e.count;return Object(p.jsx)("li",{className:"category__item",children:Object(p.jsx)(f.b,{className:"category__link",to:t,"data-cy":"categoryLinksContainer",children:Object(p.jsxs)("figure",{children:[Object(p.jsx)("div",{className:"category__img-block",children:Object(p.jsx)("img",{className:"category__img",src:c,alt:"category"})}),Object(p.jsxs)("figcaption",{children:[Object(p.jsx)("h3",{className:"category__name",children:n}),Object(p.jsx)("span",{className:"category__models",children:"".concat(s," models")})]})]})})},t)}))})]})})};t.default=function(){var e=Object(s.useContext)(a.a),t=e.phones,c=e.tablets,r=e.accessories,i=Object(s.useMemo)((function(){return l(t,n.HOT)}),[t,l]),o=Object(s.useMemo)((function(){return l(t,n.BRAND)}),[t,l]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{}),Object(p.jsx)(u.a,{products:i,title:"Hot prices"}),Object(p.jsx)(x,{phonesLength:t.length,tabletsLength:c.length,accessoriesLength:r.length}),Object(p.jsx)(u.a,{products:o,title:"Brand new models"})]})}},79:function(e,t,c){"use strict";var n;c.d(t,"a",(function(){return n})),function(e){e.AGE="age",e.PRICE="price",e.ALPHABETIC="name"}(n||(n={}))},82:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(9),s=c(79),r=function(e,t){return Object(n.a)(e).sort((function(e,c){switch(t){case s.a.AGE:return c.price-e.price;case s.a.PRICE:return e.price-c.price;default:return e.name.localeCompare(c.name)}}))}}}]);
//# sourceMappingURL=6.90b7e663.chunk.js.map