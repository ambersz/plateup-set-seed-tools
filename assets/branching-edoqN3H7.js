import{h as C,F as R,u as e,q as K,g as $,p as V}from"./jsxRuntime.module-6iCSpIbC.js";import{A as P,G as E,S as L}from"./GhostBlueprints-b_TuWfVm.js";import{u as x,a as S,U as M}from"./UnlockSelect-vSdR-iaP.js";const B=a=>{const[l,o]=C(a);return[l,t=>{o(t.target.value)}]},U=[...P];function z(a,l,o){const i=l.toLowerCase();return U.filter(function(r){return!a.some(p=>p.ID===r.ID)&&r.Name.toLowerCase().includes(i)&&(!o||r.StapleWhenMissing)})}function F({onSelectionChange:a,label:l,placeholder:o,include:i=!0,appliances:t=[],stapleRelatedOnly:r=!0}){const[p,f]=C(""),m=R(()=>z(t,p,r),[t,p]),{getSelectedItemProps:v,getDropdownProps:D,removeSelectedItem:b}=x({selectedItems:t,onStateChange({selectedItems:c,type:s}){switch(s){case x.stateChangeTypes.SelectedItemKeyDownBackspace:case x.stateChangeTypes.SelectedItemKeyDownDelete:case x.stateChangeTypes.DropdownKeyDownBackspace:case x.stateChangeTypes.FunctionRemoveSelectedItem:a(c??[]);break}}}),{isOpen:u,getToggleButtonProps:h,getLabelProps:I,getMenuProps:y,getInputProps:g,highlightedIndex:N,getItemProps:n,selectedItem:w}=S({items:m,itemToString(c){return c?c.Name:""},defaultHighlightedIndex:0,selectedItem:null,inputValue:p,stateReducer(c,s){const{changes:d,type:k}=s;switch(k){case S.stateChangeTypes.InputKeyDownEnter:case S.stateChangeTypes.ItemClick:return{...d,isOpen:!0,highlightedIndex:0};default:return d}},onStateChange({inputValue:c,type:s,selectedItem:d}){switch(s){case S.stateChangeTypes.InputKeyDownEnter:case S.stateChangeTypes.ItemClick:case S.stateChangeTypes.InputBlur:d&&(a([...t,d]),f(""));break;case S.stateChangeTypes.InputChange:f(c??"");break}}});return e("div",{className:"combo-container",children:[e("div",{className:"",children:[e("label",{className:"",...I(),children:l??"Select desired cards"}),e("div",{className:"",children:[t.map(function(s,d){return e("span",{className:"selected-items"+(i?" include":" exclude"),...v({selectedItem:s,index:d}),children:[s.Name,e("span",{class:"x",onClick:k=>{k.stopPropagation(),b(s)},children:"✕"})]},`selected-item-${d}`)}),e("div",{className:"",children:e("input",{placeholder:o??"Card Selection(s)",className:"",...g(D({preventKeyAction:u}))})})]})]}),e("ul",{className:`dropdown ${u&&m.length?"":"hidden"}`,...y(),children:[!1,u&&m.map((c,s)=>e("li",{className:G(N===s&&"bg-blue-300",w===c&&"font-bold","py-2 px-3 shadow-sm flex flex-col"),...n({item:c,index:s}),children:e("span",{children:c.Name})},`${c.ID}${s}`))]})]})}const G=(...a)=>a.filter(l=>l).join(" ");function _(a){let l="";if(!a.length)return"Spawn: any settings";for(let o=0;o<a.length;o++){const i=a[o];let t=o?`Reroll ${o}`:"Spawn";t+=": ",t+=i.spawnInside?"Spawn Inside":"Spawn Outside, "+(i.playerInside?"Someone Inside":"Everyone Outside"),o&&(t+=`, reroll ${a[o].blueprintCount} blueprints`),l+=t+`
`}return l+="Last Reroll: any settings",l}const j=({seed:a,day:l,startingConfig:o=[],baseUpgradeChance:i=0,blueprintCount:t=5,searchDepth:r=2,ghostBlueprints:p=2,blueprintCabinets:f=1,solo:m,cards:v=[],appliances:D=[]})=>{var N;console.log({baseUpgradeChance:i,blueprintCount:t});const b={blueprintCount:t+p,spawnInside:!0},u=new L(a,i);for(const n of v)u.addCard(n);u.OwnedAppliances=[...u.OwnedAppliances,...D];const h=[],I=[];for(let n=-f-1;n<=f;n++){const w={spawnInside:!0,blueprintCount:t+n};h.push(w),m||h.push({spawnInside:!1,playerInside:!0,blueprintCount:t+n}),h.push({spawnInside:!1,playerInside:!1,blueprintCount:t+n}),n===0&&(I.push(w),I.push({spawnInside:!1,playerInside:!0,blueprintCount:t+n}),I.push({spawnInside:!1,playerInside:!1,blueprintCount:t+n}))}let y=[],g=[o];for(let n=0;n<=r;n++){let w=[],c=[];for(let s=0;s<g.length;s++){const d={...b};d.blueprintCount=(((N=g[s].at(-1))==null?void 0:N.blueprintCount)??t)+p;const k=u.getAppliances([...g[s],d],l).map(T=>T.Name);c.push(e("td",{colspan:h.length**(r-n),title:_(g[s]),children:e(E,{bps:k,ghostCount:p})}));const A=o.length+n===0?I:h;for(const T of A){const O=[...g[s],T];w.push(O)}}y.push(e("tr",{children:c})),g=w}return e("table",{children:[" ",y," "]})},q=({onConfigChange:a})=>{const[l,o]=C(2),[i,t]=B("az"),[r,p]=B("1"),[f,m]=C(5),[v,D]=C(0),[b,u]=C(!1),[h,I]=C([P.filter(n=>n.Name==="Blueprint Cabinet")[0]]),[y,g]=C([]),N=n=>{n.target.checked?(m(7),D(.25)):(m(5),D(0))};return V(()=>{a({seed:i,day:Number(r),initialRerollConfig:[],blueprintCount:f,baseUpgradeChance:v,solo:b,appliances:h,cards:y,searchDepth:l})},[i,r,f,v,b,h,y,l]),e("div",{children:[e("div",{children:[e("div",{children:"Run Config:"}),e("label",{for:"solo",children:"Solo:"}),e("input",{type:"checkbox",checked:b,onChange:()=>u(n=>!n)}),e("label",{for:"searchDepth",children:"Search Depth"})," ",e("input",{id:"searchDepth",type:"number",value:l,onChange:n=>o(Number(n.target.value))}),e("br",{}),e("label",{for:"seed",value:i,children:["Seed:"," "]}),e("input",{type:"text",value:i,onChange:t}),e("label",{for:"setting",children:"Turbo?"}),e("input",{id:"setting",type:"checkbox",checked:f===7,onChange:N})]}),e("div",{children:[e("label",{for:"day",value:r,children:["Day:"," "]}),e("input",{type:"number",value:r,onChange:p}),e(M,{label:"Selected cards:",onSelectionChange:n=>{g(n.cards)},showSelectionMode:!1,cards:y,include:!0}),e(F,{label:"Select owned appliances:",placeholder:"",onSelectionChange:I,appliances:h})]})]})},H=()=>{const[a,l]=C({seed:"az",day:1});return e($,{children:[e(q,{onConfigChange:l}),e(j,{...a,blueprintCabinets:1})]})};K(e(H,{}),document.getElementById("app"));