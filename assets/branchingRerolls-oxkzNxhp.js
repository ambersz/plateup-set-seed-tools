import{A as O,S as $}from"./shop-GGQk6rn8.js";import{G as K}from"./GhostBlueprints-suS0naQ1.js";import{u as v,a as b,U as L}from"./UnlockSelect-MhIAyh39.js";import{h as E,F,u as n,a as V,p as G,g as M}from"./main-4dXWvrgo.js";import{u as H}from"./usePersistentState-LhM0PFpU.js";import{U as _}from"./unlocks-fGSP_DLg.js";import"./prng-1rWzft78.js";const j=[...O];function q(s,t,i){const o=t.toLowerCase();return j.filter(function(l){return!s.some(u=>u.ID===l.ID)&&l.Name.toLowerCase().includes(o)&&(!i||l.StapleWhenMissing||l.SellOnlyAsUnique)}).sort((a,l)=>a.Name<l.Name?-1:1)}function z({onSelectionChange:s,label:t,placeholder:i,include:o=!0,appliances:a=[],stapleRelatedOnly:l=!0}){const[u,I]=E(""),w=F(()=>q(a,u,l),[a,u]),{getSelectedItemProps:m,getDropdownProps:h,removeSelectedItem:d}=v({selectedItems:a,onStateChange({selectedItems:p,type:e}){switch(e){case v.stateChangeTypes.SelectedItemKeyDownBackspace:case v.stateChangeTypes.SelectedItemKeyDownDelete:case v.stateChangeTypes.DropdownKeyDownBackspace:case v.stateChangeTypes.FunctionRemoveSelectedItem:s(p??[]);break}}}),{isOpen:c,getToggleButtonProps:N,getLabelProps:k,getMenuProps:x,getInputProps:y,highlightedIndex:S,getItemProps:D,selectedItem:g}=b({items:w,itemToString(p){return p?p.Name:""},defaultHighlightedIndex:-1,selectedItem:null,inputValue:u,stateReducer(p,e){const{changes:r,type:C}=e;switch(C){case b.stateChangeTypes.InputChange:return e.inputValue?{...r,highlightedIndex:0}:{...r,highlightedIndex:-1};case b.stateChangeTypes.InputKeyDownEnter:return{...r,isOpen:!1,highlightedIndex:-1};case b.stateChangeTypes.ItemClick:return{...r,isOpen:!0,highlightedIndex:-1};default:return r}},onStateChange({inputValue:p,type:e,selectedItem:r}){switch(e){case b.stateChangeTypes.InputKeyDownEnter:case b.stateChangeTypes.ItemClick:case b.stateChangeTypes.InputBlur:r&&(s([...a,r]),I(""));break;case b.stateChangeTypes.InputChange:I(p??"");break}}});return n("div",{className:"combo-container",children:[n("div",{className:"",children:[n("label",{className:"",...k(),children:t??"Select desired cards"}),n("div",{className:"",children:[a.map(function(e,r){return n("span",{className:"selected-items"+(o?" include":" exclude"),...m({selectedItem:e,index:r}),children:[e.Name,n("span",{class:"x",onClick:C=>{C.stopPropagation(),d(e)},children:"✕"})]},`selected-item-${r}`)}),n("div",{className:"",children:n("input",{placeholder:i??"Card Selection(s)",className:"",...y(h({preventKeyAction:c}))})})]})]}),n("ul",{className:`dropdown ${c&&w.length?"":"hidden"}`,...x(),children:[!1,c&&w.map((p,e)=>n("li",{className:W(S===e&&"bg-blue-300",g===p&&"font-bold","py-2 px-3 shadow-sm flex flex-col"),...D({item:p,index:e}),children:n("span",{children:p.Name})},`${p.ID}${e}`))]})]})}const W=(...s)=>s.filter(t=>t).join(" ");function J(s){let t="";if(!s.length)t="Spawn: any settings";else{for(let o=0;o<s.length;o++){const a=s[o];let l=o?`Reroll ${o}`:"Spawn";l+=": ",l+="Blueprints "+(a.spawnInside?"Spawn Inside":"Spawn Outside, "+(a.playerInside?"Someone Inside":"All Players Stand Outside")),o&&(l+=`, reroll ${s[o].blueprintCount} blueprints`),t+=l+`
`}t+=`Reroll ${s.length}: any settings`}const i=t.split(`
`);return n("div",{class:"reroll-instructions",onClick:o=>{if(o.detail<2)return;const a=document.createRange();a.selectNodeContents(o.currentTarget);const l=document.getSelection();l==null||l.removeAllRanges(),l==null||l.addRange(a)},children:i.map(o=>n("div",{children:o}))})}const P=O.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,t)=>s.Name<t.Name?1:-1);function Q(s){const t=s.at(-1);return t!=null&&t.spawnInside?"I":t!=null&&t.playerInside?"OI":"OO"}const X=[0,3,5,6,9,12],Y=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],Z=({seed:s,day:t,startingConfig:i=[],baseUpgradeChance:o=0,blueprintCount:a=5,searchDepth:l=2,ghostBlueprints:u=2,blueprintCabinets:I=1,solo:w,cards:m=[],appliances:h=[]})=>{var p;s=s.toLocaleLowerCase().trim();const d={blueprintCount:a+u,spawnInside:!0},c=new $(s,o),N=a===7;let k=[];const x=N?Y:X;{let e=0;for(const r of x){if(r>t){console.log(`added up to card ${e}: ${m.slice(0,e).map(C=>C.Name).join(", ")}`);break}r===t?(k.push(m[e]),c.handleNewCardSpawnEffects(m[e])):c.addCard(m[e]),e++}}c.OwnedAppliances=[...c.OwnedAppliances,...h];const y=[],S=[];for(let e=-I-1;e<=I;e++){const r={spawnInside:!0,blueprintCount:a+e};y.push(r),w||y.push({spawnInside:!1,playerInside:!0,blueprintCount:a+e}),y.push({spawnInside:!1,playerInside:!1,blueprintCount:a+e}),e===0&&(S.push(r),S.push({spawnInside:!1,playerInside:!0,blueprintCount:a+e}),S.push({spawnInside:!1,playerInside:!1,blueprintCount:a+e}))}let D=[],g=[i];for(let e=0;e<=l;e++){if(e)for(const f of k)c.handleNewCardRerollEffects(f);let r=[],C=[];for(let f=0;f<g.length;f++){const T={...d};T.blueprintCount=g[f].length?(((p=g[f].at(-1))==null?void 0:p.blueprintCount)??a)+u:a;const B=c.getAppliances([...g[f],T],t).map(R=>R.Name);C.push(n("td",{class:"reroll-cell "+Q(g[f]),colspan:y.length**(l-e),children:[n(K,{bps:B,ghostCount:e===0?0:u}),J(g[f])]}));const A=i.length+e===0?S:y;for(const R of A){const U=[...g[f],R];r.push(U)}}D.push(n("tr",{children:[n("td",{children:e?`Reroll ${e}`:"Spawns"}),C]})),g=r}return n("table",{children:[" ",D," "]})},ee=({onConfigChange:s,config:t})=>{const{seed:i,day:o,blueprintCount:a,solo:l,appliances:u=P,cards:I,searchDepth:w}=t,m=d=>{let c={...t};d.target.checked?(c.blueprintCount=7,c.baseUpgradeChance=.25):(c.blueprintCount=5,c.baseUpgradeChance=0),s(c)},h=(d,c)=>{let N={...t};N[d]=c,s(N)};return n("div",{children:[n("div",{children:[n("div",{children:"Run Config:"}),n("label",{for:"solo",children:"Solo:"}),n("input",{type:"checkbox",id:"solo",checked:l,onChange:()=>{h("solo",!l)}}),n("label",{for:"searchDepth",children:"Number of Rerolls"})," ",n("input",{id:"searchDepth",type:"number",value:w,onChange:d=>{h("searchDepth",Number(d.target.value))}}),n("br",{}),n("label",{for:"seed",value:i,children:["Seed:"," "]}),n("input",{type:"text",id:"seed",value:i,onChange:d=>{h("seed",d.target.value)}}),n("label",{for:"setting",children:"Turbo?"}),n("input",{id:"setting",type:"checkbox",checked:a===7,onChange:m})]}),n("div",{children:[n("label",{for:"day",value:o,children:["Prep of Day:"," "]}),n("input",{type:"number",id:"day",value:o+1,onChange:d=>{h("day",Number(d.target.value)-1)}}),n(L,{id:"",label:"Enter all cards in order, including your starting dish:",onSelectionChange:d=>{h("cards",d.cards)},showSelectionMode:!1,cards:I,include:!0,modes:["themes","dishes","customerCards"]}),n(z,{label:"Select owned appliances:",placeholder:"",onSelectionChange:d=>{h("appliances",d)},appliances:u})]})]})},ne={seed:"az",day:2,cards:[],initialRerollConfig:[],blueprintCount:5,baseUpgradeChance:0,solo:!1,appliances:P,searchDepth:2},ce=()=>{const[s,t]=H(ne,"BRANCH_CONFIG"),[i,o]=V();return G(()=>{i.has("cards")&&(t(a=>({...a,seed:i.get("seed")??a.seed,cards:i.get("cards").split(",").map(l=>_.filter(u=>u.Name===l)[0]),blueprintCount:i.get("turbo")?7:5,baseUpgradeChance:i.get("turbo")?.25:0,solo:!!Number(i.get("solo"))})),o(new URLSearchParams,{replace:!0}))},[i]),n(M,{children:[n("div",{children:"Hover over a cell for instructions on how to get those blueprints. Getting the blueprints in grey requires taking extra blueprints out of cabinets"}),n(ee,{onConfigChange:t,config:s}),n(Z,{...s,blueprintCabinets:1}),!1]})};export{ce as default};
