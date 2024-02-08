import{u as e,q as O,g as $}from"./jsxRuntime.module-wfZfYPmn.js";import"./compat.module-qsrks2fs.js";import{A as P,S as K,G as L}from"./GhostBlueprints-tEGkeiHO.js";import{h as m,F as V,p as M}from"./unlocks-Gx_wR1Yr.js";import{u as x,a as S,U}from"./UnlockSelect-8NUdvTgn.js";import"./prng-1rWzft78.js";const B=s=>{const[a,o]=m(s);return[a,t=>{o(t.target.value)}]},E=[...P];function G(s,a,o){const i=a.toLowerCase();return E.filter(function(c){return!s.some(p=>p.ID===c.ID)&&c.Name.toLowerCase().includes(i)&&(!o||c.StapleWhenMissing)})}function q({onSelectionChange:s,label:a,placeholder:o,include:i=!0,appliances:t=[],stapleRelatedOnly:c=!0}){const[p,f]=m(""),C=V(()=>G(t,p,c),[t,p]),{getSelectedItemProps:v,getDropdownProps:N,removeSelectedItem:y}=x({selectedItems:t,onStateChange({selectedItems:r,type:l}){switch(l){case x.stateChangeTypes.SelectedItemKeyDownBackspace:case x.stateChangeTypes.SelectedItemKeyDownDelete:case x.stateChangeTypes.DropdownKeyDownBackspace:case x.stateChangeTypes.FunctionRemoveSelectedItem:s(r??[]);break}}}),{isOpen:h,getToggleButtonProps:g,getLabelProps:b,getMenuProps:I,getInputProps:d,highlightedIndex:D,getItemProps:n,selectedItem:w}=S({items:C,itemToString(r){return r?r.Name:""},defaultHighlightedIndex:0,selectedItem:null,inputValue:p,stateReducer(r,l){const{changes:u,type:k}=l;switch(k){case S.stateChangeTypes.InputKeyDownEnter:case S.stateChangeTypes.ItemClick:return{...u,isOpen:!0,highlightedIndex:0};default:return u}},onStateChange({inputValue:r,type:l,selectedItem:u}){switch(l){case S.stateChangeTypes.InputKeyDownEnter:case S.stateChangeTypes.ItemClick:case S.stateChangeTypes.InputBlur:u&&(s([...t,u]),f(""));break;case S.stateChangeTypes.InputChange:f(r??"");break}}});return e("div",{className:"combo-container",children:[e("div",{className:"",children:[e("label",{className:"",...b(),children:a??"Select desired cards"}),e("div",{className:"",children:[t.map(function(l,u){return e("span",{className:"selected-items"+(i?" include":" exclude"),...v({selectedItem:l,index:u}),children:[l.Name,e("span",{class:"x",onClick:k=>{k.stopPropagation(),y(l)},children:"✕"})]},`selected-item-${u}`)}),e("div",{className:"",children:e("input",{placeholder:o??"Card Selection(s)",className:"",...d(N({preventKeyAction:h}))})})]})]}),e("ul",{className:`dropdown ${h&&C.length?"":"hidden"}`,...I(),children:[!1,h&&C.map((r,l)=>e("li",{className:z(D===l&&"bg-blue-300",w===r&&"font-bold","py-2 px-3 shadow-sm flex flex-col"),...n({item:r,index:l}),children:e("span",{children:r.Name})},`${r.ID}${l}`))]})]})}const z=(...s)=>s.filter(a=>a).join(" ");function F(s){let a="";if(!s.length)return"Spawn: any settings";for(let o=0;o<s.length;o++){const i=s[o];let t=o?`Reroll ${o}`:"Spawn";t+=": ",t+="Blueprints "+(i.spawnInside?"Spawn Inside":"Spawn Outside, "+(i.playerInside?"Someone Inside":"All Players Stand Outside")),o&&(t+=`, reroll ${s[o].blueprintCount} blueprints`),a+=t+`
`}return a+=`Reroll ${s.length}: any settings`,a}const H=({seed:s,day:a,startingConfig:o=[],baseUpgradeChance:i=0,blueprintCount:t=5,searchDepth:c=2,ghostBlueprints:p=2,blueprintCabinets:f=1,solo:C,cards:v=[],appliances:N=[]})=>{var D;s=s.toLocaleLowerCase();const y={blueprintCount:t+p,spawnInside:!0},h=new K(s,i);for(const n of v)h.addCard(n);h.OwnedAppliances=[...h.OwnedAppliances,...N];const g=[],b=[];for(let n=-f-1;n<=f;n++){const w={spawnInside:!0,blueprintCount:t+n};g.push(w),C||g.push({spawnInside:!1,playerInside:!0,blueprintCount:t+n}),g.push({spawnInside:!1,playerInside:!1,blueprintCount:t+n}),n===0&&(b.push(w),b.push({spawnInside:!1,playerInside:!0,blueprintCount:t+n}),b.push({spawnInside:!1,playerInside:!1,blueprintCount:t+n}))}let I=[],d=[o];for(let n=0;n<=c;n++){let w=[],r=[];for(let l=0;l<d.length;l++){const u={...y};u.blueprintCount=d[l].length?(((D=d[l].at(-1))==null?void 0:D.blueprintCount)??t)+p:t;const k=h.getAppliances([...d[l],u],a).map(T=>T.Name);r.push(e("td",{colspan:g.length**(c-n),title:F(d[l]),children:e(L,{bps:k,ghostCount:n===0?0:p})}));const R=o.length+n===0?b:g;for(const T of R){const A=[...d[l],T];w.push(A)}}I.push(e("tr",{children:[e("td",{children:n?`Reroll ${n}`:"Spawns"}),r]})),d=w}return e("table",{children:[" ",I," "]})},_=({onConfigChange:s})=>{const[a,o]=m(2),[i,t]=B("az"),[c,p]=B("2"),[f,C]=m(5),[v,N]=m(0),[y,h]=m(!1),[g,b]=m([P.filter(n=>n.Name==="Blueprint Cabinet")[0]]),[I,d]=m([]),D=n=>{n.target.checked?(C(7),N(.25)):(C(5),N(0))};return M(()=>{s({seed:i,day:Number(c)-1,initialRerollConfig:[],blueprintCount:f,baseUpgradeChance:v,solo:y,appliances:g,cards:I,searchDepth:a})},[i,c,f,v,y,g,I,a]),e("div",{children:[e("div",{children:[e("div",{children:"Run Config:"}),e("label",{for:"solo",children:"Solo:"}),e("input",{type:"checkbox",checked:y,onChange:()=>h(n=>!n)}),e("label",{for:"searchDepth",children:"Number of Rerolls"})," ",e("input",{id:"searchDepth",type:"number",value:a,onChange:n=>o(Number(n.target.value))}),e("br",{}),e("label",{for:"seed",value:i,children:["Seed:"," "]}),e("input",{type:"text",value:i,onChange:t}),e("label",{for:"setting",children:"Turbo?"}),e("input",{id:"setting",type:"checkbox",checked:f===7,onChange:D})]}),e("div",{children:[e("label",{for:"day",value:c,children:["Prep of Day:"," "]}),e("input",{type:"number",value:c,onChange:p}),e(U,{label:"Selected cards:",onSelectionChange:n=>{d(n.cards)},showSelectionMode:!1,cards:I,include:!0}),e(q,{label:"Select owned appliances:",placeholder:"",onSelectionChange:b,appliances:g})]})]})},j=()=>{const[s,a]=m({seed:"az",day:1});return e($,{children:[e("div",{children:"Hover over a cell for instructions on how to get those blueprints. Getting the blueprints in grey requires taking extra blueprints out of cabinets"}),e(_,{onConfigChange:a}),e(H,{...s,blueprintCabinets:1}),!1]})};O(e(j,{}),document.getElementById("app"));
