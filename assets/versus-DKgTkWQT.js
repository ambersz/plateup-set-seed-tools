import{u as e,g as d,q as S}from"./jsxRuntime.module-wfZfYPmn.js";import{U as k,D as h,h as i,p as C,R as D}from"./unlocks-p--6mpzb.js";import{U as T}from"./UnlockSelect-1N4f5MQK.js";const x=[1,2,3,4],M=({setAllowedTables:s,allowedTables:n})=>{const a=r=>()=>{n.includes(r)?s(n.filter(o=>o!==r)):s([...n,r])};return e(d,{children:[e("label",{children:"Starting Tables: "}),x.map(r=>{const o=r+"-table";return e(d,{children:[e("label",{for:o,children:r}),e("input",{id:o,type:"checkbox",onChange:a(r),checked:n.includes(r)})]})})]})},w=k.filter(s=>s.DishType===h.Base&&s.Name!=="Slow Brew Coffee"),R={include:!0,cards:w},m=new Worker(new URL("/plateup-set-seed-tools/assets/versusWorker-IiHdLXWW.js",import.meta.url),{type:"module"});function B(s){m.postMessage(s)}const U=()=>{const[s,n]=i(R),[a,r]=i(!0),[o,p]=i(!1),[u,f]=i([1,2,3,4]),[g,y]=i([]);C(()=>{m.onmessage=t=>{y(c=>[...c,t.data.data])}},[]);const b=()=>{let t=s.cards.filter(l=>l.DishType===h.Base);const c=[];o&&c.push(D.filter(l=>l.Name==="Community")[0]),B({type:a?"strict":"flex",data:{mapSettings:c,startingDishes:t,allowedTables:u}})};return e(d,{children:["Strict Mode: The same 2 cards are offered each day, no matter which card path you took on previous days (Side effect: you will never get offered a card that you passed up earlier in the run) ",e("br",{}),"Flex Mode: Across all card paths, there are at most 10 unique cards.",e("br",{}),e("label",{for:"autumn",children:"Autumn:"}),e("input",{type:"checkbox",id:"autumn",checked:o,onClick:()=>p(t=>!t)}),e("br",{}),e("label",{for:"modeToggle",children:"Mode Toggle:"}),e("input",{type:"checkbox",id:"modeToggle",checked:a,onClick:()=>r(t=>!t)}),"Currently on ",a?"Strict":"Flex"," Mode",e("br",{}),e(M,{setAllowedTables:f,allowedTables:u}),e(T,{onSelectionChange:n,showSelectionMode:!1,label:"Starting Cards",...s,modes:["startingDishes"]}),e("button",{onClick:b,children:"Run Search"}),e("br",{}),"Results:",g.map(t=>e("div",{children:[t.startingDish,": ",t.seed," (",t.mapSize,")"]}))]})};S(e(U,{}),document.getElementById("app"));
