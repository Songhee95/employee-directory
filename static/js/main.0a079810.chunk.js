(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(16),i=c.n(s),l=c(7),j=c(18),o=c(3),u=c(17),b=c.n(u);var d=function(){return b.a.get("https://randomuser.me/api/?nat=us&results=30")};c(42);var h=function(e){return e.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.picture,alt:"user"})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.cell}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.dob})]},e.cell)}))};var O=function(e,t){return t?e.sort((function(e,t){var c=e.name.toUpperCase(),n=t.name.toUpperCase();return c<n?-1:c>n?1:0})):t?void 0:e.sort((function(e,t){var c=e.name.toUpperCase(),n=t.name.toUpperCase();return c<n?1:c>n?-1:0}))};var m=function(e){var t=e.valueToTable,c=Object(a.useState)(!1),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(),j=Object(o.a)(l,2),u=j[0],b=j[1];return Object(a.useEffect)((function(){b(t)}),[t]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"table-container table",children:Object(n.jsxs)("table",{className:"table-striped table-box",children:[Object(n.jsx)("thead",{className:"table-primary",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Picture"}),Object(n.jsxs)("th",{className:"th-name",children:["Name",Object(n.jsx)("i",{className:"fa fa-fw fa-sort",onClick:function(){i(!s),b(O(u,s))}})]}),Object(n.jsx)("th",{children:"Phone"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"DOB"})]})}),Object(n.jsx)("tbody",{children:u&&h(u)})]})})})};c(43);var f=function(e,t,c,n,a){var r=e.target.value;"1"===t?(c(r=r.replace(/\d+/g,"")),n(r)):"2"===t&&(a(r=r.replace(/^[a-zA-Z]+$/,"")),n(r))};var x=function(e){var t=e.user,c=Object(a.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),O=h[0],m=h[1];return Object(n.jsx)("div",{className:"search-container",children:Object(n.jsx)("form",{className:"search-form row g-3",children:Object(n.jsxs)("div",{className:"col-auto input",children:[Object(n.jsx)("label",{htmlFor:"search",className:"search-box",children:Object(n.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){i(e.target.value)},children:[Object(n.jsx)("option",{defaultValue:!0,children:"Select Search Option"}),Object(n.jsx)("option",{value:"1",children:"Name"}),Object(n.jsx)("option",{value:"2",children:"Phone"})]})}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"search",name:"cellNum",value:"1"===s?O:u,onChange:function(e){f(e,s,m,t,b)}})]})})})};c(44);var p=function(){return Object(n.jsxs)("div",{className:"header-container bg-dark",children:[Object(n.jsx)("h1",{className:"title",children:"Employee directory"}),Object(n.jsx)("p",{children:"Search to Filter by name or Phone Number"})]})};var v=function(e,t,c){return isNaN(e)?t(c.filter((function(t){return t.name.toLowerCase().startsWith(e)}))):Number(e)?t(c.filter((function(t){return t.cell.startsWith("("+e)}))):t("")};var N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],b=i[1];return Object(a.useEffect)((function(){d().then((function(e){var t=e.data.results;r(Object(j.a)(t).map((function(e){return Object(l.a)(Object(l.a)({},c),{},{name:e.name.first+" "+e.name.last,picture:e.picture.medium,cell:e.cell,email:e.email,dob:e.dob.date.slice(0,10)})})))})).catch((function(e){r(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsx)(x,{user:function(e){return v(e,b,c)}}),Object(n.jsx)(m,{valueToTable:0===u.length?c:u})]})};var g=function(){return Object(n.jsx)(N,{})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.0a079810.chunk.js.map