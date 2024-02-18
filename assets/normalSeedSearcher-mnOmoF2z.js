import{q as L,u as t,g as C}from"./jsxRuntime.module-cxiL4QXa.js";import{h as k,p as O}from"./unlocks-GKf5w4qn.js";import{U as R}from"./UnlockSelect-fJPwRvZ2.js";import{u as i}from"./usePersistentState-NvnfWn0P.js";const p=[],B=1;for(let n=0;n<B;n++)p.push(new Worker(new URL("/plateup-set-seed-tools/assets/seedSearchWorker-KppLhxnF.js",import.meta.url),{type:"module"}));function g(n){for(const d of p)d.postMessage(n)}const A=[];for(let n=0;n<12;n++)A.push({include:n!==6&&n!==11,cards:[]});const M=()=>{const[n,d]=k(0),[h,_]=i(!1,"SEED_SEARCHER_NORMAL_OT15"),[f,S]=i([],"SEED_SEARCHER_NORMAL_RESULTS"),[m,u]=k(!1),[a,E]=i([1,2,3,4],"SEED_SEARCHER_NORMAL_ALLOWED_TABLES"),D=[1,2,3,4];O(()=>{console.log("useEffect registering message done");const e=s=>{const l=s;switch(l.data.type){case"error":break;case"result":const c=l.data.data;S(y=>(y.length>=1/0&&(g({type:"stop"}),u(!1)),[...y,c]));break;case"progress":d(l.data.data);break}};for(const s of p)s.onmessage=e},[]);const o=h?[3,5,6,9,12,15,18,21,24,27]:[3,5,6,9,12],v=()=>{if(m)g({type:"stop"}),u(!1);else{if(r[0].cards.length<1){alert("No starting dish selected.");return}else r[0].cards.length>2;const e=[];for(let s=1;s<o.length;s++)(!r[s]||r[s].include&&r[s].cards.length===0)&&e.push(o[s]);if(e.length){e.length>1&&(e[e.length-1]="and "+e[e.length-1]),alert(`Empty card configurations for day${e.length>1?"s":""} `+e.join(e.length>2?", ":" ")+". Add cards, or switch to exclude cards mode.");return}g({type:"start",data:{mapSizes:a,goalCards:r.slice(0,o.length+1),goalAppliances:N}}),u(!0)}},[r,w]=i(A,"SEED_SEARCHER_NORMAL_CARDS_BY_DAY"),b=e=>s=>{w(l=>{const c=[...l];return c[e]=s,c})},T=e=>()=>{a.includes(e)?E(a.filter(s=>s!==e)):E([...a,e])};return t("div",{class:"search-container",children:[t("div",{class:"search-config",children:[t("div",{children:[t("label",{for:"ot15",children:"Search until OT15"}),t("input",{type:"checkbox",id:"ot15",onChange:()=>{_(!h)},checked:h})]}),t("div",{style:"min-width:fit-content;",children:[t("label",{children:"Starting Tables: "}),D.map(e=>{const s=e+"-table";return t(C,{children:[t("label",{for:s,children:e}),t("input",{id:s,type:"checkbox",onChange:T(e),checked:a.includes(e)})]})})]}),t(C,{children:[t(R,{onSelectionChange:b(0),showSelectionMode:!1,label:"Starting Cards",...r[0],modes:["startingDishes","settings"]}),o.map((e,s)=>t(R,{onSelectionChange:b(s+1),label:"After Day "+(e>15?`OT${e-15}`:e),...r[s+1]??{},modes:e===5?["themes"]:["unlocks"]}))]})]}),t("div",{class:"search-results",children:[t("div",{children:[t("div",{children:[n," seeds checked"]}),t("button",{onClick:v,children:[m?"Stop":"Start"," Search"]})]}),t("div",{class:"results",children:[f.length?t("button",{onClick:()=>S([]),children:"Clear Previous Results"}):"",t("div",{children:t("code",{children:"seed (starting tables): cards"})}),f.map(e=>t("div",{children:[e.seed," (",e.mapSize,"): ",t("div",{children:e.cards.join(", ")}),e.blueprints.map(s=>s.Name).join(", ")]}))]})]})]})};L(t(M,{}),document.getElementById("app"));const N=[];