import{h as k,p as w,b as l,g as b}from"./main-K6qAnffD.js";import{F as y}from"./cards-CavSNVjX.js";import{g as N}from"./getCardPaths-DrlIfc-0.js";const x=()=>{},D=({chooseCardPath:h=!1,onSelectCardPath:i=x,highlightCardPath:f,seed:s,startingCards:u})=>{var d;const[n,a]=k([]);w(()=>{const e=new y(s);if(u.length)debugger;let r=N(e,u,!1);a(r)},[s,u]);let t=[[l(b,{})]];t.shift();for(let e=0;e<((d=n[0])==null?void 0:d.length)&&n.length;e++){let r="",p=0,m=f===0,o=0;for(let c=0;c<n.length;c++){if(!n[c]||!n[c][e])debugger;n[c][e].Name===r?(f===c&&(m=!0),p++):(r&&(t[o]||(t[o]=[]),t[o].push(g(p,r,o,m,h,e,n,f,c-1,i))),r=n[c][e].Name,o+=p,p=1,m=c===f)}t[o]||(t[o]=[]),t[o].push(g(p,r,o,m,h,e,n,f,n.length-1,i))}return l(b,{children:l("table",{children:[l("thead",{children:l("tr",{children:l("th",{children:s})})}),l("tbody",{children:t.map(e=>l("tr",{children:e}))})]})})},U={include:!0,cards:[]};function g(h,i,f,s,u,n,a,t,d,e){return l("td",{rowSpan:h,children:[l("label",{for:i+f,children:s?l("b",{children:i}):i}),u&&n===a[0].length-1&&l(b,{children:l("input",{id:i+f,type:"checkbox",checked:t===d,onChange:r=>{r.preventDefault(),e(a[d],d)}})})]})}export{D as C,U as d};
