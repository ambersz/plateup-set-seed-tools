import{h as y,p as k,u as l,g}from"./main-lDfI0dqc.js";import{F as w}from"./cards-fjYVlvt6.js";import{R as N,U}from"./prng-JpF06ZO8.js";const x=[N.filter(o=>o.Name==="Community")[0],U.filter(o=>o.Name==="Salad")[0]];function S(o,c=x,s=!1){let r=[c];const d=s?D:q;for(const e of r[0])o.addCard(e);for(let e=0;e<d.length;e++){let u=[];for(;r.length;){const n=r.shift();o.cards=n,o.getUnlockOptions(d[e]).forEach(t=>{u.push([...n,t])})}r=u}return r}const q=[3,5,6,9,12],D=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,14],F=()=>{},E=({chooseCardPath:o=!1,onSelectCardPath:c=F,highlightCardPath:s,seed:r,startingCards:d})=>{var h;const[e,u]=y([]);k(()=>{const t=new w(r);if(d.length)debugger;let i=S(t,d,!1);u(i)},[r,d]);let n=[[l(g,{})]];n.shift();for(let t=0;t<((h=e[0])==null?void 0:h.length)&&e.length;t++){let i="",p=0,m=s===0,f=0;for(let a=0;a<e.length;a++){if(!e[a]||!e[a][t])debugger;e[a][t].Name===i?(s===a&&(m=!0),p++):(i&&(n[f]||(n[f]=[]),n[f].push(b(p,i,f,m,o,t,e,s,a-1,c))),i=e[a][t].Name,f+=p,p=1,m=a===s)}n[f]||(n[f]=[]),n[f].push(b(p,i,f,m,o,t,e,s,e.length-1,c))}return l(g,{children:l("table",{children:[l("thead",{children:l("tr",{children:l("th",{children:r})})}),l("tbody",{children:n.map(t=>l("tr",{children:t}))})]})})},O={include:!0,cards:[]};function b(o,c,s,r,d,e,u,n,h,t){return l("td",{rowSpan:o,children:[l("label",{for:c+s,children:r?l("b",{children:c}):c}),d&&e===u[0].length-1&&l(g,{children:l("input",{id:c+s,type:"checkbox",checked:n===h,onChange:i=>{i.preventDefault(),t(u[h],h)}})})]})}export{E as C,O as d};
