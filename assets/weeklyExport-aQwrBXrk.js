import{q as I,u as e,g as C}from"./jsxRuntime.module-AOkfKomP.js";import{g as N}from"./weekly-NUT2Har9.js";import{C as v}from"./CardPaths-ghDSytu3.js";import{h as d}from"./compat.module-HTaeRODX.js";import{A as c,S as k}from"./shop-tiDH0Ubk.js";import"./unlocks-7WnRp8yW.js";import"./cards-k-sYdUg-.js";import"./prng-1rWzft78.js";const f=s=>{const[o,p]=d(s);return[o,l=>{p(l.target.value)}]},A=[{spawnInside:!0,blueprintCount:5}],P={spawnInside:!0,blueprintCount:10},D=[{spawnInside:!0,blueprintCount:5},{spawnInside:!1,playerInside:!0,blueprintCount:5},{spawnInside:!1,playerInside:!1,blueprintCount:5}],j=[3,5,6,9,12],r=N(),x=c.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,o)=>s.Name<o.Name?1:-1),B=()=>{const[s,o]=d([]),[p,u]=d(),[l,g]=f("2"),[h,y]=f("2");return e(C,{children:[e("div",{children:e("button",{onClick:()=>{let i=[s.map(t=>t.Name).join("	"),["prep of day","blueprints spawn inside","at least one player inside the restaurant","blueprints"].join("	")];const n=new k(r.seed);n.OwnedAppliances=x,n.addCard(r.dish),n.addCard(r.setting);const b=[...s].slice(n.Cards.length);for(let t=1;t<15;t++){i.push((t+1).toString()+"			"+n.getAppliances(A,t).map(a=>a.Name).join("	")),Number(l)-1===t&&n.OwnedAppliances.push(c.filter(a=>a.Name==="Plates")[0]),Number(h)-1===t&&n.OwnedAppliances.push(c.filter(a=>a.Name==="Research Desk")[0]);for(const a of D){const m=[a,P];for(const{}of[1,2])i.push(t+1+"	"+a.spawnInside+"	"+!!a.playerInside+"	"+n.getAppliances(m,t).map(w=>w.Name).join("	")),m.splice(0,0,a)}j.includes(t)&&n.addCard(b.shift())}navigator.clipboard.writeText(i.join(`
`))},children:"Export tsv to clipboard"})}),e("div",{children:[e("label",{for:"plates",children:"Buy plates on prep of day"}),e("input",{type:"number",id:"plates",value:l,onChange:g})]}),e("div",{children:[e("label",{for:"research",children:"Buy research desk on prep of day"}),e("input",{type:"number",id:"research",value:h,onChange:y})]}),e(v,{chooseCardPath:!0,onSelectCardPath:(i,n)=>{u(n),o(i)},highlightCardPath:p,seed:r.seed,startingCards:[r.setting,r.dish]})]})};I(e(C,{children:e(B,{})}),document.getElementById("app"));
