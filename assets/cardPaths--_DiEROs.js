import{q as p,u as t,g as u}from"./jsxRuntime.module-wfZfYPmn.js";import{u as S}from"./usePersistentState-s2tyx5_E.js";import{R as C,U as b,h as m,p as y}from"./unlocks-p--6mpzb.js";import{F as w}from"./cards-uoFXVtEL.js";import{U}from"./UnlockSelect-1N4f5MQK.js";import"./prng-1rWzft78.js";const k=[C.filter(e=>e.Name==="Community")[0],b.filter(e=>e.Name==="Salad")[0]];function P(e,g=k,s=!1){let o=[g];const i=s?D:N;for(const d of o[0])e.addCard(d);for(let d=0;d<i.length;d++){let r=[];for(;o.length;){const h=o.shift();e.cards=h,e.getUnlockOptions(i[d]).forEach(a=>{r.push([...h,a])})}o=r}return o}const N=[3,5,6,9,12],D=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,14],E={include:!0,cards:[]},q=()=>{var h;const[e,g]=S("","CARD_PATHS_SEED"),[s,o]=m([]),[i,d]=m(E);y(()=>{const n=new w(e);if(i.cards.length)debugger;let a=P(n,i.cards,!1);o(a)},[e,i.cards]);let r=[[t(u,{})]];r.shift();for(let n=0;n<((h=s[0])==null?void 0:h.length)&&s.length;n++){let a="",f=0,l=0;for(let c=0;c<s.length;c++){if(!s[c]||!s[c][n])debugger;s[c][n].Name===a?f++:(a&&(r[l]||(r[l]=[]),r[l].push(t("td",{rowSpan:f,children:a}))),a=s[c][n].Name,l+=f,f=1)}r[l]||(r[l]=[]),r[l].push(t("td",{rowSpan:f,children:a}))}return t(u,{children:[t("label",{for:"seed",children:"Seed:"}),t("input",{onChange:n=>g(n.target.value),value:e,id:"seed"}),"Starting config",t(U,{label:"Starting Card(s)",cards:i.cards,onSelectionChange:d,modes:["startingDishes","settings"]}),t("table",{children:[t("thead",{children:t("tr",{children:t("th",{children:e})})}),t("tbody",{children:r.map(n=>t("tr",{children:n}))})]})]})};p(t(q,{}),document.getElementById("app"));
