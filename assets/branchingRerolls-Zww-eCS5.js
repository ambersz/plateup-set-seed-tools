import{A as M,S as J}from"./shop-_L9XUQ4m.js";import{G as Q}from"./GhostBlueprints-EE1LIZ_k.js";import{u as X}from"./usePersistentState-Y-n-ZTXD.js";import{h as Z,F as ee,T as ne,u as e,g as U,a as te,p as se}from"./main-TpGtq39p.js";import{U as re,R as V,S as $,e as j}from"./prng-JpF06ZO8.js";import{u as k,a as S,U as le}from"./UnlockSelect-M0ZmVEkK.js";const G=[...M].filter(t=>t.IsPurchasable||t.IsPurchasableAsUpgrade||t.Name==="Teleporter");console.log({options:G.length,unique:new Set(G.map(t=>t.ID)).size});function ae(t,r,o,n){const l=r.toLowerCase();return G.filter(function(c){return o&&c.AllowRefreshes&&!c.SellOnlyAsDuplicate&&t.some(u=>u.AllowRefreshes)?!1:(n||!t.some(u=>u.ID===c.ID))&&c.Name.toLowerCase().includes(l)&&(!o||c.StapleWhenMissing||c.SellOnlyAsUnique||!c.SellOnlyAsDuplicate&&c.AllowRefreshes)}).sort((s,c)=>s.Name<c.Name?-1:1)}function ie({onSelectionChange:t,label:r,placeholder:o,include:n=!0,appliances:l=[],shopModifiersOnly:s=!0,allowDupes:c=!1}){const[u,N]=Z(""),b=ee(()=>ae(l,u,s,c),[l,u]),{getSelectedItemProps:w,getDropdownProps:a,removeSelectedItem:I}=k({selectedItems:l,onStateChange({selectedItems:d,type:h}){switch(h){case k.stateChangeTypes.SelectedItemKeyDownBackspace:case k.stateChangeTypes.SelectedItemKeyDownDelete:case k.stateChangeTypes.DropdownKeyDownBackspace:case k.stateChangeTypes.FunctionRemoveSelectedItem:t(d??[]);break}}}),{isOpen:m,getToggleButtonProps:D,getLabelProps:E,getMenuProps:v,getInputProps:R,highlightedIndex:A,getItemProps:P,selectedItem:T}=S({items:b,itemToString(d){return d?d.Name:""},defaultHighlightedIndex:-1,selectedItem:null,inputValue:u,stateReducer(d,h){const{changes:C,type:y}=h;switch(y){case S.stateChangeTypes.InputChange:return h.inputValue?{...C,highlightedIndex:0}:{...C,highlightedIndex:-1};case S.stateChangeTypes.InputKeyDownEnter:return{...C,isOpen:!1,highlightedIndex:-1};case S.stateChangeTypes.ItemClick:return{...C,isOpen:!0,highlightedIndex:-1};default:return C}},onStateChange({inputValue:d,type:h,selectedItem:C}){switch(h){case S.stateChangeTypes.InputKeyDownEnter:case S.stateChangeTypes.ItemClick:case S.stateChangeTypes.InputBlur:C&&(t([...l,C]),N(""));break;case S.stateChangeTypes.InputChange:N(d??"");break}}}),O=ne(()=>{t([])},[]);return e("div",{className:"combo-container",children:[e("div",{className:"",children:[e("label",{className:"",...E(),children:r??"Select desired appliances"}),e("div",{children:e("button",{onClick:O,children:"Clear Appliances"})}),e("div",{className:"",children:[l.map(function(h,C){return e("span",{className:"selected-items"+(n?" include":" exclude"),...w({selectedItem:h,index:C}),children:[h.Name,e("span",{class:"x",onClick:y=>{y.stopPropagation(),I(h)},children:"✕"})]},`selected-item-${C}`)}),e("div",{className:"",children:e("input",{placeholder:o??"Appliance Selection(s)",className:"",...R(a({preventKeyAction:m}))})})]})]}),e("ul",{className:`dropdown ${m&&b.length?"":"hidden"}`,...v(),children:[!1,m&&b.map((d,h)=>e("li",{className:oe(A===h&&"bg-blue-300",T===d&&"font-bold","py-2 px-3 shadow-sm flex flex-col"),...P({item:d,index:h}),children:e("span",{children:d.Name})},`${d.ID}${h}`))]})]})}const oe=(...t)=>t.filter(r=>r).join(" "),de=({onConfigChange:t,config:r,mode:o})=>{const{seed:n,day:l,solo:s,appliances:c=z,cards:u,searchDepth:N,simpleBPSettings:b=!1}=r,w=(a,I)=>{t(m=>{let D={...m};return D[a]=I,D})};return e("div",{children:[e("div",{children:[e("div",{children:"Run Config:"}),e("label",{for:"solo",children:"Solo:"}),e("input",{type:"checkbox",id:"solo",checked:s,onChange:()=>{w("solo",!s)}}),o==="rerolls"&&e(U,{children:[e("span",{style:"margin:0 20px",children:[e("label",{for:"simpleRerollSettings",children:"Spawn setting configs: "}),e("select",{value:b===!0?"insideOnly":b===!1?"full":b,onChange:a=>{var I;w("simpleBPSettings",((I=a.target)==null?void 0:I.value)??"full")},children:[e("option",{value:"full",children:"All spawn settings"}),e("option",{value:"insideOnly",children:"Spawn Inside only"}),e("option",{value:"noSwitching",children:"Don't switch bp settings after spawn"})]})]}),e("div",{children:[e("label",{for:"searchDepth",children:"Number of Rerolls"})," ",e("input",{id:"searchDepth",type:"number",value:N,onChange:a=>{w("searchDepth",Number(a.target.value))}})]})]}),e("label",{for:"seed",value:n,children:["Seed:"," "]}),e("input",{type:"text",id:"seed",value:n,onChange:a=>{w("seed",a.target.value)}})]}),e("div",{children:[o==="rerolls"&&e(U,{children:[e("label",{for:"day",value:l,children:["Prep of Day:"," "]}),e("input",{type:"number",id:"day",value:l+1,onChange:a=>{w("day",Number(a.target.value)-1)}})]}),e(le,{id:"cardSchedule",label:"Enter all cards in order, beginning with your map setting and starting dish:",onSelectionChange:a=>{w("cards",a.cards)},showSelectionMode:!1,cards:u,include:!0,modes:["themes","settings","dishes","customerCards"]}),o==="rerolls"&&e(ie,{label:"Select owned appliances:",placeholder:"",onSelectionChange:a=>{w("appliances",a)},appliances:c})]})]})},z=M.filter(t=>t.Name==="Booking Desk"||t.Name==="Blueprint Cabinet").sort((t,r)=>t.Name<r.Name?1:-1);function ce(t){let r="";if(!t.length)r="Spawn: any settings";else{for(let n=0;n<t.length;n++){const l=t[n];let s=n?`Reroll ${n}`:"Spawn";s+=": ",s+="Blueprints "+(l.spawnInside?"Spawn Inside":"Spawn Outside, "+(l.playerInside?"Someone Inside":"All Players Stand Outside")),n&&(s+=`, reroll ${t[n].blueprintCount} blueprints`),r+=s+`
`}r+=`Reroll ${t.length}: any settings`}const o=r.split(`
`);return e("div",{class:"reroll-instructions",onClick:n=>{if(n.detail<2)return;const l=document.createRange();l.selectNodeContents(n.currentTarget);const s=document.getSelection();s==null||s.removeAllRanges(),s==null||s.addRange(l)},children:o.map(n=>e("div",{children:n}))})}function ue(t,r,o){const n=t.at(-1);if(r==="insideOnly"||o&&r==="noSwitching"||r==="noSwitching"&&(n!=null&&n.spawnInside))switch(((n==null?void 0:n.blueprintCount)??0)%3){case 0:return"I";case 1:return"OI";default:return"OO"}return n!=null&&n.spawnInside?"I":n!=null&&n.playerInside?"OI":"OO"}const he=[0,3,5,6,9,12,15,18,21,24,27,30],pe=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],ge=({seed:t,day:r,startingConfig:o=[],searchDepth:n=2,ghostBlueprints:l=2,blueprintCabinets:s=1,solo:c,cards:u=[],appliances:N=[],simpleBPSettings:b=!1})=>{var _,F,K;const w=u.some(i=>i.Name==="Turbo"),a=w?7:5;t=t.toLocaleLowerCase().trim();const I={blueprintCount:a+l,spawnInside:!0},m=new J(t,0);let D=[];const E=w?pe:he,v=[];let R=!1,A=!1,P=!1,T=!1,O=!1;{let i=u.filter(p=>V.some(g=>g.ID===p.ID)).length;for(let p=0;p<i;p++)m.addCard(u[p]);for(const p of E){if(p>r)break;const g=u[i];g===void 0?(v.push(p),O=!0):p===0?$.some(f=>f.ID===g.ID)||(R=g,O=!0):p===5?g.UnlockGroup!==j.PrimaryTheme&&(A=g,O=!0):(g.UnlockGroup===j.PrimaryTheme&&(P=g),$.some(f=>f.ID===g.ID)&&m.Cards.every(f=>f.Name!=="Community")&&(T=g)),p===r?(D.push(g),m.handleNewCardSpawnEffects(g)):m.addCard(g),i++}}m.OwnedAppliances=[...m.OwnedAppliances,...N];const d=[],h=[];for(let i=-s-1;i<=s;i++){const p={spawnInside:!0,blueprintCount:a+i};i===0&&h.push(p),d.push(p),b!=="insideOnly"&&(i===0&&(h.push({spawnInside:!1,playerInside:!0,blueprintCount:a+i}),h.push({spawnInside:!1,playerInside:!1,blueprintCount:a+i})),c||d.push({spawnInside:!1,playerInside:!0,blueprintCount:a+i}),d.push({spawnInside:!1,playerInside:!1,blueprintCount:a+i}))}let C=[],y=[o];for(let i=0;i<=n;i++){if(i)for(const f of D)m.handleNewCardRerollEffects(f);let p=[],g=[];for(let f=0;f<y.length;f++){const L={...I};L.blueprintCount=y[f].length?(((_=y[f].at(-1))==null?void 0:_.blueprintCount)??a)+l:a;const H=m.getAppliances([...y[f],L],r).map(x=>x.Name),Y=b==="noSwitching"?c||(K=(F=y[f])==null?void 0:F[0])!=null&&K.spawnInside?d.length/(c?2:3):d.length*2/3:d.length;g.push(e("td",{class:"reroll-cell "+ue(y[f],b,c),colspan:Y**(n-i),children:[e(Q,{bps:H,ghostCount:i===0?0:l}),ce(y[f])]}));const W=o.length+i===0?h:d;for(const x of W){const B=[...y[f]];b==="noSwitching"&&B.length&&B[0].spawnInside!==x.spawnInside||(B.push(x),p.push(B))}}C.push(e("tr",{children:[e("td",{children:i?`Reroll ${i}`:"Spawns"}),g]})),y=p}return e(U,{children:[O&&e("div",{class:"error-background",children:["Card Path Configuration Errors:",R&&e("div",{children:["Starting card (",R.Name,") is not a valid starting dish. Please enter your starting dish (and map setting if running Turbo) as the first card(s)"]}),v.length&&e("div",{children:["Missing card",v.length>1&&"s"," for day",v.length>1&&"s"," ",v.join(", "),". Please enter your full card path"]}),A&&e("div",{children:["Card added for day 5 (",A.Name,") is not a theme card. You may have entered your card path in the wrong order, or forgotten to add the Turbo map setting card"]}),T&&e("div",{children:["Added starting dish ",T.Name," in the middle of a non-Autumn run. You may have entered your card path in the wrong order or forgotten to include the Community card"]}),P&&e("div",{children:["Added ",P.Name,", but not on day 5. You may have entered your card path in the wrong order, or have the wrong map setting card entered."]})]}),e("table",{children:[" ",C," "]})]})},q={seed:"az",day:1,cards:[],initialRerollConfig:[],solo:!1,appliances:z,searchDepth:2,simpleBPSettings:"full"},fe=()=>{const[t,r]=X(q,"BRANCH_CONFIG",l=>{let s={...l};if(typeof s.simpleBPSettings=="boolean"){debugger;s={...s,simpleBPSettings:l.simpleBPSettings?"insideOnly":"full"}}return s={...s,searchDepth:2},s}),[o,n]=te();return se(()=>{if(o.has("cards")){const l=o.get("cards").split(",").map(s=>re.filter(u=>u.Name===s)[0]??V.filter(u=>u.Name===s)[0]??$.filter(u=>u.Name===s)[0]);r(s=>({...s,seed:o.get("seed")??s.seed,cards:l,solo:!!Number(o.get("solo"))})),n(new URLSearchParams,{replace:!0})}},[o]),e(U,{children:[e("div",{children:["Hover over a cell for instructions on how to get those blueprints. Getting the blueprints in grey requires taking extra blueprints out of cabinets."," ",e("span",{style:"font-size:small",children:"(Rerolls are inaccurate if you bought a blueprint desk)"})]}),e(de,{onConfigChange:r,config:t,mode:"rerolls"}),e(ge,{...t,blueprintCabinets:1}),!1]})},Se=Object.freeze(Object.defineProperty({__proto__:null,default:fe,defaultBranchingRerollConfig:q},Symbol.toStringTag,{value:"Module"}));export{ie as A,de as S,Se as b,q as d};
