(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[6],{116:function(t,c,e){},117:function(t,c,e){},118:function(t,c,e){},119:function(t,c,e){},127:function(t,c,e){"use strict";e.r(c);var n=e(1),a=e(128),s=e(126),i=(e(116),e(17)),r=e(7),o=e(6),l=e.n(o),u=(e(117),100),j=1,m=e(0),b=function(t){return l()("icon-btn",{"button-dis":t})},d=function(t){var c=t.name,e=t.image,n=t.delCard,a=t.price,s=t.category,i=t.phoneId,o=t.count,l=t.id,d=t.changeCardCount,h=function(t){d(l,t)};return Object(m.jsxs)("li",{className:"cart-item",children:[Object(m.jsx)("button",{type:"button",className:"cart-item__cancel",onClick:function(){return n(c)},"data-cy":"cartDeleteButton",children:Object(m.jsx)("img",{src:"./icons/cancelDis.svg",alt:"icon"})}),Object(m.jsxs)(r.b,{className:"cart-item__link",to:"/".concat(s,"/").concat(i),children:[Object(m.jsx)("img",{className:"cart-item__img",src:e,alt:"product"}),Object(m.jsx)("h3",{className:"cart-item__name",children:c})]}),Object(m.jsxs)("div",{className:"cart-item__count-block",children:[Object(m.jsx)("button",{type:"button",className:b(o===j),onClick:function(){return h(-1)},children:Object(m.jsx)("img",{src:"./icons/minus.svg",alt:"icon"})}),Object(m.jsx)("span",{className:"cart-item__count","data-cy":"productQauntity",children:o}),Object(m.jsx)("button",{type:"button",className:b(o===u),onClick:function(){return h(1)},children:Object(m.jsx)("img",{src:"./icons/plus.svg",alt:"icon"})})]}),Object(m.jsx)("span",{className:"cart-item__price",children:"$".concat(a)})]})},h=e(4),p=(e(118),e(119),function(){return Object(m.jsx)("div",{className:"modal",children:"Not implemented yet"})}),O=function(t){var c=t.totalPrice,e=t.visibleCartLength,a=Object(n.useState)(!1),s=Object(h.a)(a,2),i=s[0],r=s[1];Object(n.useEffect)((function(){i&&setTimeout((function(){r(!1)}),3e3)}),[i]);return Object(m.jsxs)(m.Fragment,{children:[i&&Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"cart-total",children:[Object(m.jsx)("span",{className:"cart-total__price",children:"$".concat(c)}),Object(m.jsx)("span",{className:"cart-total__for",children:"Total for ".concat(e," items")}),Object(m.jsx)("div",{className:"line cart-total__line"}),Object(m.jsx)("button",{className:"btn cart-total__checkout",type:"button",onClick:function(){r(!0)},children:"Checkout"})]})]})},x=e(40),_=e(26);c.default=function(){var t=Object(n.useContext)(i.a),c=t.cart,e=t.delCard,r=t.changeCardCount,o=Object(n.useMemo)((function(){return c.reduce((function(t,c){return(t+c.product.price)*c.count}),0)}),[c]);return Object(m.jsx)("section",{className:"page__section cart",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(x.a,{}),Object(m.jsx)("h3",{className:"page__title",children:"Cart"}),c.length?Object(m.jsxs)("div",{className:"cart__flex",children:[Object(m.jsx)("ul",{children:Object(m.jsx)(a.a,{className:"cart__list",children:c.map((function(t){var c=t.product,n=c.name,a=c.image,i=c.price,o=c.phoneId,l=c.category,u=t.count,j=t.id;return Object(m.jsx)(s.a,{timeout:500,classNames:"item",children:Object(m.jsx)(d,{phoneId:o,category:l,name:n,image:a,price:i,delCard:e,count:u,id:j,changeCardCount:r})},n)}))})}),!!c.length&&Object(m.jsx)(O,{totalPrice:o,visibleCartLength:c.length})]}):Object(m.jsx)(_.a,{name:"Your cart is empty"})]})})}}}]);
//# sourceMappingURL=6.a7ebb919.chunk.js.map