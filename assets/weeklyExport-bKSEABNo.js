import{g as I}from"./weekly-ePA4unSy.js";import{C as k}from"./CardPaths-h1Gdbi06.js";import{h,A as u,u as r,b as v,g as S}from"./main-rfMzoLYX.js";import"./cards-wu6MfbbE.js";const C=e=>{const[a,i]=h(e);return[a,o=>{i(o.target.value)}]},D=[{spawnInside:!0,blueprintCount:5}],A={spawnInside:!0,blueprintCount:10},P=[{spawnInside:!0,blueprintCount:5},{spawnInside:!1,playerInside:!0,blueprintCount:5},{spawnInside:!1,playerInside:!1,blueprintCount:5}],j=[3,5,6,9,12],p=I(),x=u.filter(e=>e.Name==="Booking Desk"||e.Name==="Blueprint Cabinet").sort((e,a)=>e.Name<a.Name?1:-1),m=["Counter","Dining Table","Sink","Hob","Research Desk"];function R(e){const a=[];for(let l=0;l<m.length;l++){const o=m[l];for(let d=0;d<e.length;d++)e[d].Name===o&&(a[l]=e.splice(d,1)[0])}e.sort((l,o)=>(l.StapleWhenMissing?1:0)-(o.StapleWhenMissing?1:0));let i=0;for(;e.length;){for(;a[i];)i++;a[i]=e.shift(),i++}return a}const M=()=>{const[e,a]=h([]),[i,l]=h(),[o,d]=C("2"),[f,b]=C("2");return r(S,{children:[r("div",{children:r("button",{onClick:()=>{let c=[e.map(t=>t.Name).join("	"),["prep of day","reroll #","blueprints spawn inside","at least one player inside the restaurant","blueprints"].join("	")];const n=new v(p.seed);n.OwnedAppliances=x,n.addCard(p.dish),n.addCard(p.setting);const y=[...e].slice(n.Cards.length);for(let t=1;t<15;t++){j.includes(t)&&n.addCard(y.shift()),c.push((t+1).toString()+"	0			"+R(n.getAppliances(D,t)).map(s=>s.Name).join("	")),Number(o)-1===t&&n.OwnedAppliances.push(u.filter(s=>s.Name==="Plates")[0]),Number(f)-1===t&&n.OwnedAppliances.push(u.filter(s=>s.Name==="Research Desk")[0]);for(const s of P){const g=[s,A];for(const w of[1,2])c.push(t+1+"	"+w+"	"+s.spawnInside+"	"+!!s.playerInside+"	"+n.getAppliances(g,t).map(N=>N.Name).join("	")),g.splice(0,0,s)}}navigator.clipboard.writeText(c.join(`
`))},children:"Export tsv to clipboard"})}),r("div",{children:[r("label",{for:"plates",children:"Buy plates on prep of day"}),r("input",{type:"number",id:"plates",value:o,onChange:d})]}),r("div",{children:[r("label",{for:"research",children:"Buy research desk on prep of day"}),r("input",{type:"number",id:"research",value:f,onChange:b})]}),r(k,{chooseCardPath:!0,onSelectCardPath:(c,n)=>{l(n),a(c)},highlightCardPath:i,seed:p.seed,startingCards:[p.setting,p.dish]})]})};export{M as default};