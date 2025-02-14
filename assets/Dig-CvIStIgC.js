import{k as d,_ as M,n as J,p as _,R as K,b as Q,r as W,u as n,l as X,s as Y,g as Z}from"./main-DrYS2HM0.js";import{a as P,u as $}from"./usePersistentState-DW_kTIkw.js";import{defaultBranchingRerollConfig as ee}from"./branchingRerolls-2lqXXgPO.js";import{t as ne,d as te}from"./getCardPaths-ClEgjRKK.js";import"./GhostBlueprints-DEOuPyE2.js";const k={spawnInside:!0,blueprintCount:0},E={spawnInside:!1,playerInside:!0,blueprintCount:0},F={spawnInside:!1,playerInside:!1,blueprintCount:0},oe=()=>{const c=P([],"DIG_TARGET_APPLIANCES"),i=d(1),v=P(1,"DIG_BLUEPRINT_CABS"),m=P(0,"DIG_AVAILABLE_FODDER"),g=d(0),h=d(0),C=d(0),A=d(0),D=d(0),[r,L]=$(ee,"BRANCH_CONFIG",e=>{let t={...e};return typeof t.simpleBPSettings=="boolean"&&(t={...t,simpleBPSettings:e.simpleBPSettings?"insideOnly":"full"}),t={...t,searchDepth:2},t}),p=d(),N=d(0),O=M(r.day),b=d(r.searchDepth);J(()=>{p.value&&(N.value?p.value.numTiles=N.value:p.value.numTiles=p.value.getLayoutInfo()[1])}),_(()=>{b.value=r.searchDepth},[r]);const w=M([]);_(()=>{const e=[];let t=r.cards.filter(a=>K.some(o=>o.ID===a.ID)).length;for(let a=0;a<t;a++)e.push(r.cards[a]);const I=e.some(a=>a.Name==="Turbo"),u=I?ne:te;for(const a of u){if(a>r.day)break;const o=r.cards[t];o&&e.push(o),t++}if(w.current.length===e.length){let a=!0;for(let o=0;o<e.length;o++)if(w.current[o]!==e[o].ID){a=!1;break}if(a&&O.current===r.day)return}const f=new Q(r.seed,I?.25:0);f.OwnedAppliances=[...r.appliances];for(let a=0;a<e.length;a++)f.addCard(e[a]);O.current=r.day,w.current=e.map(a=>a.ID),p.value=f},[r]);const x=W(()=>{var o;if(!p.value)return[];N.value;const e=p.value.Cards.some(l=>l.Name==="Turbo"),t=p.value.getAppliances([{spawnInside:!0,blueprintCount:e?7:5}],1).length,I=b.value-g.value-h.value-C.value;let u=[0,0];const f=[];for(let l=0;l<g.value;l++)f.push(k);for(let l=0;l<h.value;l++)f.push(E);for(let l=0;l<C.value;l++)f.push(F);let a=[];if(b.value===0)return a.push([[0,0,0],0,p.value.getAppliances([{spawnInside:!0,blueprintCount:e?7:5}],O.current).map(l=>l.Name)]),a;for(;;){const l=[...f];for(let s=0;s<u[0];s++)l.push(k);for(let s=0;s<u[1];s++)l.push(E);for(let s=u[0]+u[1];s<I;s++)l.push(F);l.splice(0,1,{...l[0]}),l.push({spawnInside:!0,blueprintCount:(e?7:5)+m.value-(b.value-1)*i.value*0});const H=Math.max(b.value-1,A.value),j=Math.min(D.value||1/0,G(t+m.value,b.value-1,-i.value*0));for(let s=j;s>=H;s--){l[0].blueprintCount=s+t;const y=(o=p.value)==null?void 0:o.getAppliances(l,O.current);if(y===void 0)debugger;const U=Math.floor(s/(b.value-1))+m.value+v.value;for(;y.length>U;)y.pop();let B=-1,R=Math.min(c.value.length,i.value);if(R){for(let S=0;S<y.length;S++)if(c.value.some(z=>z.Name===y[S].Name)&&(R--,!R)){B=S;break}if(B===-1)continue;const T=Math.max(1,B+1-Math.max(v.value,m.value)),q=G(T,b.value-1,i.value*0);if(s<q){console.log("not reachable with this blueprint cabinet setup");continue}}const V=[[u[0]+g.value,u[1]+h.value,I-u[0]-u[1]+C.value],s,y.map(T=>T.Name)];a.push(V)}if(u[1]++,u[0]+u[1]>I&&(u[0]++,u[1]=0),u[0]+u[1]>I)break}return a});return n("div",{class:"search-container",children:[n("div",{class:"search-config",children:[n("label",{children:"Blueprint Cabs:"}),n("input",{value:v,type:"number",onChange:e=>{var t;return v.value=((t=e.target)==null?void 0:t.valueAsNumber)||0}}),n("label",{children:"Fodder available:"}),n("input",{value:m,type:"number",onChange:e=>{var t;return m.value=((t=e.target)==null?void 0:t.valueAsNumber)||0}}),n("div",{children:[n("label",{children:"Min Inside/OI/OO"}),n("input",{value:g,onChange:e=>{g.value=e.target.valueAsNumber||0},type:"number"}),n("input",{value:h,onChange:e=>{h.value=e.target.valueAsNumber||0},type:"number"}),n("input",{value:C,onChange:e=>{C.value=e.target.valueAsNumber||0},type:"number"})]}),n("div",{children:[n("label",{children:"Rerolled blueprint bounds"}),n("input",{value:A,onChange:e=>{const t=e.target.valueAsNumber||0;A.value=t},type:"number"}),n("input",{value:D,onChange:e=>{const t=e.target.valueAsNumber;D.value=t||0},type:"number"})]}),n(X,{onConfigChange:L,config:r,mode:"rerolls"}),n("label",{children:"Number of indoor tiles (0 to default to normal layout):"}),n("input",{value:N,type:"number",onChange:e=>{N.value=e.target.valueAsNumber}})]}),n("div",{class:"search-results",children:[n(Y,{label:"Target Appliances",onSelectionChange:e=>c.value=e,appliances:c.value,shopModifiersOnly:!1}),n("div",{children:[n("label",{children:"Minimum number of target appliances"}),n("input",{type:"number",value:i,onChange:e=>i.value=e.target.valueAsNumber||0})]}),x.value.length?x.value.map(e=>n(ae,{hit:e})):"No hits",!1]})]})},ae=({hit:c})=>{const[[i,v,m],g,h]=c;return n("div",{children:["I: ",i,", OI: ",v,", OO: ",m,", total blueprints rerolled: ",g,n("br",{}),h.map((C,A)=>n(Z,{children:[n("span",{style:{display:"inline-block"},children:[C,A===h.length-1?"":","]})," "]}))]})};function G(c,i,v=-1){return i<0?0:(c+c+v*(i-1))*i/2}export{oe as default};
