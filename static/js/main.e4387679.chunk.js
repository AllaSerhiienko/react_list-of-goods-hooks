(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),a=n.n(o),c=n(6),r=n(8),l=n(1),i=(n(13),n(4)),u=n.n(i),b=(n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.none="",t.alphabet="alphabet",t.length="length"}(s||(s={}));var d=function(){var t=Object(l.useState)(s.none),e=Object(c.a)(t,2),n=e[0],o=e[1],a=Object(l.useState)(!1),i=Object(c.a)(a,2),d=i[0],j=i[1],g=Object(l.useMemo)((function(){return function(t,e){var n=e.sortField,o=e.isReversed,a=Object(r.a)(t);return n&&a.sort((function(t,e){switch(n){case s.alphabet:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),o&&a.reverse(),a}(h,{sortField:n,isReversed:d})}),[h,n,d]);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return o(s.alphabet)},className:u()("button","is-info",{"is-light":n!==s.alphabet}),"aria-label":"Sort goods alphabetically",children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return o(s.length)},className:u()("button","is-success",{"is-light":n!==s.length}),"aria-label":"Sort goods by length",children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){j((function(t){return!t}))},className:u()("button","is-warning",{"is-light":!d}),"aria-label":"Reverse sort",children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{type:"button",onClick:function(){o(s.none),j(!1)},className:"button is-danger is-light","aria-label":"Reset sort",children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};a.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e4387679.chunk.js.map