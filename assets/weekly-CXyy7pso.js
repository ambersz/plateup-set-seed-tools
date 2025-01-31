import{h as b,u as a,g as R,b as A,U as P,A as E}from"./main-DuVFAb8A.js";import{G as T}from"./GhostBlueprints-CH8J7_Z3.js";import{g as W,a as j}from"./weekly-BqEPnpn6.js";import"./cards-BX1j7ajS.js";const S=W(),I=j(),N={[S.setting.Name]:!0,[S.dish.Name]:!0};for(let s=0;s<I[0].length;s++)for(const i of I)N[i[s].Name]===void 0&&(N[i[s].Name]=!1);console.log({weeklyConfig:S,cardPaths:I});const U=({defaultSeed:s=S.seed,disableSeedInput:i=!0,cardDefaults:u=N,maxRerolls:k})=>{const[c,p]=b(s),[h,f]=b(1),[g,o]=b(v),[l,d]=b(u),m=e=>{d(t=>({...t,[e.target.id]:e.target.checked}))};let w=[];for(const[e,t]of Object.entries(l))t&&w.push(e);const y={seed:c,day:h,upgradeChance:c.indexOf("az")>-1?.25:0,blueprintCount:c.indexOf("az")>-1?7:5,ownedAppliances:g,cards:w},O=e=>{f(Number(e.target.value))},C=e=>{p(e.target.value)},n=e=>{const t=e.target;o(r=>({...r,[t.id]:t.checked}))};return a(R,{children:[a("h3",{children:["Seed:"," ",i?c:a("input",{disabled:i,value:c,onChange:C})]}),a("label",{children:"Shop after completing day "}),a("input",{style:"border:none;width:2.5em",type:"number",value:h,onChange:O}),a("div",{children:Object.entries(l).map(([e,t])=>a("span",{style:"margin:0 20px 0 0",children:[a("label",{for:e,children:e}),a("input",{type:"checkbox",id:e,checked:t,onChange:m})]}))}),a("div",{children:x.map(e=>a("span",{style:"margin:0 25px 0 0",children:[a("label",{for:e,children:["Own ",e,"?"]}),a("input",{type:"checkbox",checked:g[e],id:e,onChange:n})]}))}),a(_,{...y,maxRerolls:k??H(h)})]})},v={},x=["Blueprint Cabinet","Plates","Research Desk"];for(const s of x)v[s]=!1;v["Blueprint Cabinet"]=!0;const D=[!0,!1],G=[!0,!1],_=({seed:s,day:i=1,blueprintCount:u,upgradeChance:k,ownedAppliances:c,cards:p,maxRerolls:h})=>{const f=new A(s,k);for(let n=0;n<=p.length;n++)if(p[n]){const e=P.filter(t=>t.Name===p[n])[0];e&&f.addCard(e)}const g=Object.entries(c).filter(n=>n[1]).map(n=>n[0]).map(n=>E.filter(e=>e.Name===n)[0]);for(const n of g)n&&f.OwnedAppliances.push(n);let o=[];for(const n of G)for(const e of D)if(o.push({spawnInside:n,playerInside:n?void 0:e,blueprintCount:u}),n)break;const l=[];let d=[[],[],[],[]];for(let n=0;n<o.length;n++)for(let e=0;e<o.length;e++){l.push([o[n],o[e]]);const t=[o[n].spawnInside,o[n].playerInside,o[e].spawnInside,o[e].playerInside];for(let r=0;r<t.length;r++)d[r].length&&d[r].at(-1).val===t[r]?d[r].at(-1).run+=1:d[r].push({val:t[r],run:1})}let m=[];const w=u,y=4,O=h;for(let n=0;n<O;n++){const e=[];for(const t of n?l:l.map(r=>[r[0]])){const r=[...t];n&&r.splice(-1,1,{...r.at(-1),blueprintCount:w+y}),e.push(f.getAppliances(r,i).map(B=>B.Name))}if(m.push(e),n)for(let t=0;t<l.length;t++)l[t].push(l[t][l[t].length-1])}const C=(n,e)=>{switch(n){case 0:return e?"Spawn Inside":"Spawn Outside";case 1:return e===void 0?"":e?"Stand Inside at End of Day":"Everyone Outside at End of Day";case 2:return e?"Spawn Inside for Rerolls":"Spawn Outside for Rerolls";case 3:return e===void 0?"":e?"Someone Inside when Rerolling":"Everyone Outside when Rerolling";default:throw new Error("Too Many Headers")}};return a("table",{children:[a("thead",{children:d.map((n,e)=>a("tr",{children:[!e&&a("th",{colSpan:1,rowSpan:4,children:"Reroll #"}),n.map(t=>t.val!==void 0&&a("th",{colSpan:t.run,rowSpan:C(e,t.val).indexOf("Spawn Inside")>-1?2:1,scope:"colgroup",children:C(e,t.val)}))]}))}),m.map((n,e)=>a("tr",{children:[a("th",{children:e||"Spawn"}),e?n.map(t=>a("td",{colspan:1,children:a(T,{ghostCount:y,bps:t})})):a("td",{style:"text-align:center;",colSpan:16,children:n[0].join(", ")})]}))]})};function H(s){return[5,8,10,12,13,15,16,18,19,20,21,22,23,24,25][s-1]+1}const L=["Breakfast","Breakfast Eggs","Breakfast Extras","Breakfast Beans","Pumpkin Seed"];for(const s of L);const q=()=>a(U,{disableSeedInput:!0,maxRerolls:5});export{q as default};
