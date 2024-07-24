import{A as U,S as j}from"./shop-_L9XUQ4m.js";import{G as z}from"./GhostBlueprints-7pAiULHV.js";import{u as G}from"./usePersistentState-Wof0CgTh.js";import{h as M,F as q,T as H,u as e,g as T,a as W,p as J}from"./main-lDfI0dqc.js";import{U as Q,R as _,S as X}from"./prng-JpF06ZO8.js";import{u as D,a as y,U as Y}from"./UnlockSelect-Xcigifsi.js";const B=[...U].filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade||s.Name==="Teleporter");console.log({options:B.length,unique:new Set(B.map(s=>s.ID)).size});function Z(s,i,u,t){const a=i.toLowerCase();return B.filter(function(d){return u&&d.AllowRefreshes&&!d.SellOnlyAsDuplicate&&s.some(c=>c.AllowRefreshes)?!1:(t||!s.some(c=>c.ID===d.ID))&&d.Name.toLowerCase().includes(a)&&(!u||d.StapleWhenMissing||d.SellOnlyAsUnique||!d.SellOnlyAsDuplicate&&d.AllowRefreshes)}).sort((l,d)=>l.Name<d.Name?-1:1)}function ee({onSelectionChange:s,label:i,placeholder:u,include:t=!0,appliances:a=[],shopModifiersOnly:l=!0,allowDupes:d=!1}){const[c,S]=M(""),g=q(()=>Z(a,c,l,d),[a,c]),{getSelectedItemProps:f,getDropdownProps:o,removeSelectedItem:w}=D({selectedItems:a,onStateChange({selectedItems:p,type:n}){switch(n){case D.stateChangeTypes.SelectedItemKeyDownBackspace:case D.stateChangeTypes.SelectedItemKeyDownDelete:case D.stateChangeTypes.DropdownKeyDownBackspace:case D.stateChangeTypes.FunctionRemoveSelectedItem:s(p??[]);break}}}),{isOpen:h,getToggleButtonProps:N,getLabelProps:P,getMenuProps:b,getInputProps:v,highlightedIndex:O,getItemProps:m,selectedItem:R}=y({items:g,itemToString(p){return p?p.Name:""},defaultHighlightedIndex:-1,selectedItem:null,inputValue:c,stateReducer(p,n){const{changes:r,type:I}=n;switch(I){case y.stateChangeTypes.InputChange:return n.inputValue?{...r,highlightedIndex:0}:{...r,highlightedIndex:-1};case y.stateChangeTypes.InputKeyDownEnter:return{...r,isOpen:!1,highlightedIndex:-1};case y.stateChangeTypes.ItemClick:return{...r,isOpen:!0,highlightedIndex:-1};default:return r}},onStateChange({inputValue:p,type:n,selectedItem:r}){switch(n){case y.stateChangeTypes.InputKeyDownEnter:case y.stateChangeTypes.ItemClick:case y.stateChangeTypes.InputBlur:r&&(s([...a,r]),S(""));break;case y.stateChangeTypes.InputChange:S(p??"");break}}}),A=H(()=>{s([])},[]);return e("div",{className:"combo-container",children:[e("div",{className:"",children:[e("label",{className:"",...P(),children:i??"Select desired appliances"}),e("div",{children:e("button",{onClick:A,children:"Clear Appliances"})}),e("div",{className:"",children:[a.map(function(n,r){return e("span",{className:"selected-items"+(t?" include":" exclude"),...f({selectedItem:n,index:r}),children:[n.Name,e("span",{class:"x",onClick:I=>{I.stopPropagation(),w(n)},children:"✕"})]},`selected-item-${r}`)}),e("div",{className:"",children:e("input",{placeholder:u??"Appliance Selection(s)",className:"",...v(o({preventKeyAction:h}))})})]})]}),e("ul",{className:`dropdown ${h&&g.length?"":"hidden"}`,...b(),children:[!1,h&&g.map((p,n)=>e("li",{className:ne(O===n&&"bg-blue-300",R===p&&"font-bold","py-2 px-3 shadow-sm flex flex-col"),...m({item:p,index:n}),children:e("span",{children:p.Name})},`${p.ID}${n}`))]})]})}const ne=(...s)=>s.filter(i=>i).join(" "),te=({onConfigChange:s,config:i,mode:u})=>{const{seed:t,day:a,solo:l,appliances:d=F,cards:c,searchDepth:S,simpleBPSettings:g=!1}=i,f=(o,w)=>{s(h=>{let N={...h};return N[o]=w,N})};return e("div",{children:[e("div",{children:[e("div",{children:"Run Config:"}),e("label",{for:"solo",children:"Solo:"}),e("input",{type:"checkbox",id:"solo",checked:l,onChange:()=>{f("solo",!l)}}),u==="rerolls"&&e(T,{children:[e("span",{style:"margin:0 20px",children:[e("label",{for:"simpleRerollSettings",children:"Spawn setting configs: "}),e("select",{value:g===!0?"insideOnly":g===!1?"full":g,onChange:o=>{var w;f("simpleBPSettings",((w=o.target)==null?void 0:w.value)??"full")},children:[e("option",{value:"full",children:"All spawn settings"}),e("option",{value:"insideOnly",children:"Spawn Inside only"}),e("option",{value:"noSwitching",children:"Don't switch bp settings after spawn"})]})]}),e("div",{children:[e("label",{for:"searchDepth",children:"Number of Rerolls"})," ",e("input",{id:"searchDepth",type:"number",value:S,onChange:o=>{f("searchDepth",Number(o.target.value))}})]})]}),e("label",{for:"seed",value:t,children:["Seed:"," "]}),e("input",{type:"text",id:"seed",value:t,onChange:o=>{f("seed",o.target.value)}})]}),e("div",{children:[u==="rerolls"&&e(T,{children:[e("label",{for:"day",value:a,children:["Prep of Day:"," "]}),e("input",{type:"number",id:"day",value:a+1,onChange:o=>{f("day",Number(o.target.value)-1)}})]}),e(Y,{id:"cardSchedule",label:"Enter all cards in order, beginning with your map setting and starting dish:",onSelectionChange:o=>{f("cards",o.cards)},showSelectionMode:!1,cards:c,include:!0,modes:["themes","settings","dishes","customerCards"]}),u==="rerolls"&&e(ee,{label:"Select owned appliances:",placeholder:"",onSelectionChange:o=>{f("appliances",o)},appliances:d})]})]})},F=U.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,i)=>s.Name<i.Name?1:-1);function se(s){let i="";if(!s.length)i="Spawn: any settings";else{for(let t=0;t<s.length;t++){const a=s[t];let l=t?`Reroll ${t}`:"Spawn";l+=": ",l+="Blueprints "+(a.spawnInside?"Spawn Inside":"Spawn Outside, "+(a.playerInside?"Someone Inside":"All Players Stand Outside")),t&&(l+=`, reroll ${s[t].blueprintCount} blueprints`),i+=l+`
`}i+=`Reroll ${s.length}: any settings`}const u=i.split(`
`);return e("div",{class:"reroll-instructions",onClick:t=>{if(t.detail<2)return;const a=document.createRange();a.selectNodeContents(t.currentTarget);const l=document.getSelection();l==null||l.removeAllRanges(),l==null||l.addRange(a)},children:u.map(t=>e("div",{children:t}))})}function le(s,i,u){const t=s.at(-1);if(i==="insideOnly"||u&&i==="noSwitching"||i==="noSwitching"&&(t!=null&&t.spawnInside))switch(((t==null?void 0:t.blueprintCount)??0)%3){case 0:return"I";case 1:return"OI";default:return"OO"}return t!=null&&t.spawnInside?"I":t!=null&&t.playerInside?"OI":"OO"}const ae=[0,3,5,6,9,12],re=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],ie=({seed:s,day:i,startingConfig:u=[],searchDepth:t=2,ghostBlueprints:a=2,blueprintCabinets:l=1,solo:d,cards:c=[],appliances:S=[],simpleBPSettings:g=!1})=>{var R,A,p;const f=c.some(n=>n.Name==="Turbo"),o=f?7:5;s=s.toLocaleLowerCase().trim();const w={blueprintCount:o+a,spawnInside:!0},h=new j(s,0);let N=[];const P=f?re:ae;{let n=c.filter(r=>_.some(I=>I.ID===r.ID)).length;for(let r=0;r<n;r++)h.addCard(c[r]);for(const r of P){if(r>i)break;r===i?(N.push(c[n]),h.handleNewCardSpawnEffects(c[n])):h.addCard(c[n]),n++}}h.OwnedAppliances=[...h.OwnedAppliances,...S];const b=[],v=[];for(let n=-l-1;n<=l;n++){const r={spawnInside:!0,blueprintCount:o+n};n===0&&v.push(r),b.push(r),g!=="insideOnly"&&(n===0&&(v.push({spawnInside:!1,playerInside:!0,blueprintCount:o+n}),v.push({spawnInside:!1,playerInside:!1,blueprintCount:o+n})),d||b.push({spawnInside:!1,playerInside:!0,blueprintCount:o+n}),b.push({spawnInside:!1,playerInside:!1,blueprintCount:o+n}))}let O=[],m=[u];for(let n=0;n<=t;n++){if(n)for(const C of N)h.handleNewCardRerollEffects(C);let r=[],I=[];for(let C=0;C<m.length;C++){const $={...w};$.blueprintCount=m[C].length?(((R=m[C].at(-1))==null?void 0:R.blueprintCount)??o)+a:o;const L=h.getAppliances([...m[C],$],i).map(k=>k.Name),E=g==="noSwitching"?d||(p=(A=m[C])==null?void 0:A[0])!=null&&p.spawnInside?b.length/(d?2:3):b.length*2/3:b.length;I.push(e("td",{class:"reroll-cell "+le(m[C],g,d),colspan:E**(t-n),children:[e(z,{bps:L,ghostCount:n===0?0:a}),se(m[C])]}));const V=u.length+n===0?v:b;for(const k of V){const x=[...m[C]];g==="noSwitching"&&x.length&&x[0].spawnInside!==k.spawnInside||(x.push(k),r.push(x))}}O.push(e("tr",{children:[e("td",{children:n?`Reroll ${n}`:"Spawns"}),I]})),m=r}return e("table",{children:[" ",O," "]})},K={seed:"az",day:1,cards:[],initialRerollConfig:[],solo:!1,appliances:F,searchDepth:2,simpleBPSettings:!1},oe=()=>{const[s,i]=G(K,"BRANCH_CONFIG",a=>{if(typeof a.simpleBPSettings=="boolean"){debugger;return{...a,simpleBPSettings:a.simpleBPSettings?"insideOnly":"full"}}return a}),[u,t]=W();return J(()=>{if(u.has("cards")){const a=u.get("cards").split(",").map(l=>Q.filter(c=>c.Name===l)[0]??_.filter(c=>c.Name===l)[0]??X.filter(c=>c.Name===l)[0]);i(l=>({...l,seed:u.get("seed")??l.seed,cards:a,solo:!!Number(u.get("solo"))})),t(new URLSearchParams,{replace:!0})}},[u]),e(T,{children:[e("div",{children:["Hover over a cell for instructions on how to get those blueprints. Getting the blueprints in grey requires taking extra blueprints out of cabinets."," ",e("span",{style:"font-size:small",children:"(Rerolls are inaccurate if you bought a blueprint desk)"})]}),e(te,{onConfigChange:i,config:s,mode:"rerolls"}),e(ie,{...s,blueprintCabinets:1}),!1]})},fe=Object.freeze(Object.defineProperty({__proto__:null,default:oe,defaultBranchingRerollConfig:K},Symbol.toStringTag,{value:"Module"}));export{ee as A,te as S,fe as b,K as d};
