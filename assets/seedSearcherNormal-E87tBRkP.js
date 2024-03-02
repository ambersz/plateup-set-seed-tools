import{h as g,p as B,u as t,g as _}from"./main-4dXWvrgo.js";import{U as D}from"./UnlockSelect-MhIAyh39.js";import{u as i}from"./usePersistentState-LhM0PFpU.js";import{S as x}from"./SeedSearchResult-YgwkmZtU.js";import"./unlocks-fGSP_DLg.js";const S=[],N=1;for(let n=0;n<N;n++)S.push(new Worker(new URL("/plateup-set-seed-tools/assets/seedSearchWorker-AdsGF9X2.js",import.meta.url),{type:"module"}));function p(n){for(const d of S)d.postMessage(n)}const f=[];for(let n=0;n<12;n++)f.push({include:n!==6&&n!==11,cards:[]});const Y=()=>{const[n,d]=g(0),[h,w]=i(!1,"SEED_SEARCHER_NORMAL_OT15"),[m,C]=i([],"SEED_SEARCHER_NORMAL_RESULTS"),[b,u]=g(!1),[a,E]=i([1,2,3,4],"SEED_SEARCHER_NORMAL_ALLOWED_TABLES"),v=[1,2,3,4];B(()=>{console.log("useEffect registering message done");const e=s=>{const l=s;switch(l.data.type){case"error":break;case"result":const c=l.data.data;C(A=>(A.length>=1/0&&(p({type:"stop"}),u(!1)),[...A,c]));break;case"progress":d(l.data.data);break}};for(const s of S)s.onmessage=e},[]);const o=h?[3,5,6,9,12,15,18,21,24,27]:[3,5,6,9,12],T=()=>{if(b)p({type:"stop"}),u(!1);else{if(r[0].cards.length<1){alert("No starting dish selected.");return}else r[0].cards.length>2;const e=[];for(let s=1;s<o.length;s++)(!r[s]||r[s].include&&r[s].cards.length===0)&&e.push(o[s]);if(e.length){e.length>1&&(e[e.length-1]="and "+e[e.length-1]),alert(`Empty card configurations for day${e.length>1?"s":""} `+e.join(e.length>2?", ":" ")+". Add cards, or switch to exclude cards mode.");return}p({type:"start",data:{mapSizes:a,goalCards:r.slice(0,o.length+1),goalAppliances:P}}),u(!0)}},[r,R]=i(f,"SEED_SEARCHER_NORMAL_CARDS_BY_DAY"),k=e=>s=>{R(l=>{const c=[...l];return c[e]=s,c})},L=e=>()=>{a.includes(e)?E(a.filter(s=>s!==e)):E([...a,e])},[y,O]=g(f[1]),M=e=>{const s=[...r];s[e]={include:y.include,cards:[...y.cards]},R(s)};return t("div",{class:"search-container",children:[t("div",{class:"search-config",children:[t("div",{children:[t("label",{for:"ot15",children:"Search until OT15"}),t("input",{type:"checkbox",id:"ot15",onChange:()=>{w(!h)},checked:h})]}),t("div",{style:"min-width:fit-content;",children:[t("label",{children:"Starting Tables: "}),v.map(e=>{const s=e+"-table";return t(_,{children:[t("label",{for:s,children:e}),t("input",{id:s,type:"checkbox",onChange:L(e),checked:a.includes(e)})]})})]}),t(_,{children:[t(D,{id:0,onSelectionChange:k(0),showSelectionMode:!1,label:"Starting Cards",...r[0],modes:["startingDishes","settings"]}),o.map((e,s)=>t(D,{id:e,onSelectionChange:k(s+1),label:"After Day "+(e>15?`OT${e-15}`:e),...r[s+1]??{},modes:e===5?["themes"]:e===15?["franchise"]:["unlocks"],showCopyPaste:e!==5&&e!==15,handleCopy:O,handlePaste:()=>M(s+1)}))]})]}),t("div",{class:"search-results",children:[t("div",{children:[t("div",{children:[n," seeds checked"]}),t("button",{onClick:T,children:[b?"Stop":"Start"," Search"]})]}),t("div",{class:"results",children:[m.length?t("button",{onClick:()=>C([]),children:"Clear Previous Results"}):"",t("div",{children:t("code",{children:"seed (starting tables): cards"})}),m.map(e=>t(x,{result:e},e.seed))]})]})]})},P=[];export{Y as default};
