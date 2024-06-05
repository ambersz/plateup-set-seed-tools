import{U as d,R as D}from"./unlocks-ENjzZK3S.js";import{h as u,p as W,u as r,g as f}from"./main-6HxNyRsa.js";import{U as v}from"./UnlockSelect--TjmsLYf.js";import{u as m}from"./usePersistentState-p1hQe-K2.js";import{S as x}from"./SeedSearchResult-VWvItVnT.js";import"./run-TYMocAmz.js";import"./prng-ACD5049E.js";d.filter(t=>t.Name==="Cakes")[0];const C=[],I=1;for(let t=0;t<I;t++)C.push(new Worker(new URL("/plateup-set-seed-tools/assets/seedSearchWorker-qVFqjPCL.js",import.meta.url),{type:"module"}));function p(t){for(const a of C)a.postMessage(t)}const g=[{include:!0,cards:[D.filter(t=>t.Name==="Turbo")[0]]}],P={include:!0,cards:["Ice Cream","Instant Service","All You Can Eat","Victorian Standards","Sedate Atmosphere","Roast Potato","Broccoli","Bamboo","Mashed Potato","Chips","Corn on the Cob","Onion Rings"].flatMap(t=>d.filter(a=>a.Name===t))},U={include:!1,cards:["Apple Pie","Cherry","Pumpkin","Leisurely","Mandarin","Bread","Closing Time?","Picky","Medium","Advertising","Cheese ","Soup"].flatMap(t=>d.filter(a=>a.Name.includes(t)))};{let t=1;for(;t<=9;t++)g[t]=t===5?{include:!0,cards:d.filter(a=>a.Name==="Affordable")}:P;for(;t<=14;t++)g[t]=U}const F=()=>{const[t,a]=u(0),[S,b]=m([],"SEED_SEARCHER_RESULTS"),[y,h]=u(!1),[o,k]=m([1,2,3,4],"SEED_SEARCHER_ALLOWED_TABLES"),T=[1,2,3,4];W(()=>{console.log("useEffect registering message done");const e=s=>{const l=s;switch(l.data.type){case"error":break;case"result":const c=l.data.data;b(i=>(i.length>=1/0&&(p({type:"stop"}),h(!1)),[...i,c]));break;case"progress":a(l.data.data);break}};for(const s of C)s.onmessage=e},[]);const E=[];for(let e=1;e<=14;e++)E.push(e);const B=()=>{if(y)p({type:"stop"}),h(!1);else{if(n[0].cards.length<2){alert("No starting dish selected.");return}else n[0].cards.length>2;const e=[];for(let s=1;s<15;s++)(!n[s]||n[s].include&&n[s].cards.length===0)&&e.push(s);if(e.length){e.length>1&&(e[e.length-1]="and "+e[e.length-1]),alert(`Empty card configurations for day${e.length>1?"s":""} `+e.join(e.length>2?", ":" ")+". Add cards, or switch to exclude cards mode.");return}p({type:"start",data:{mapSizes:o,goalCards:n,goalAppliances:H}}),h(!0)}},[n,w]=m(g,"SEED_SEARCHER_CARDS_BY_DAY"),R=e=>s=>{w(l=>{var i;const c=[...l];return e===0&&((i=s.cards[0])==null?void 0:i.Name)!=="Turbo"&&s.cards.push(D.filter(L=>L.Name==="Turbo")[0]),c[e]=s,c})},[A,M]=u(P),N=e=>{const s=[...n];s[e]={include:A.include,cards:[...A.cards]},w(s)},_=e=>()=>{o.includes(e)?k(o.filter(s=>s!==e)):k([...o,e])};return r(f,{children:[r("div",{style:{maxWidth:"50vw"},children:"When more than one starting dish is selected, the searcher will alternate among all of them"}),r("div",{style:{maxWidth:"50vw"},children:["On include/green card mode, the searcher prioritizes the cards which were added first (e.g. if a seed offers Ice Cream and Herd Mentality on Day N, and Ice Cream is before Herd Mentality in the card list for Day N, the searcher will ",r("i",{children:"always"})," choose Ice Cream.)"]}),r("div",{class:"search-container",children:[r("div",{class:"search-config",children:[r("div",{style:"min-width:fit-content;",children:[r("label",{children:"Starting Tables: "}),T.map(e=>{const s=e+"-table";return r(f,{children:[r("label",{for:s,children:e}),r("input",{id:s,type:"checkbox",onChange:_(e),checked:o.includes(e)})]})})]}),r(f,{children:[r(v,{onSelectionChange:R(0),id:0,showSelectionMode:!1,label:"Starting Cards",...n[0],modes:["startingDishes","settings"]}),E.map(e=>r(v,{onSelectionChange:R(e),label:"After Day "+e,id:e,showCopyPaste:e!==5,handleCopy:M,handlePaste:()=>N(e),...n[e]??{},modes:e===5?["themes"]:["unlocks"]}))]})]}),r("div",{class:"search-results",children:[r("div",{children:[t," seeds checked"]}),r("button",{onClick:B,children:[y?"Stop":"Start"," Search"]}),r("div",{class:"results",children:[S.length?r("button",{onClick:()=>b([]),children:"Clear Previous Results"}):"",r("div",{children:r("code",{children:"seed (starting tables): cards"})}),S.map(e=>r(x,{turbo:!0,result:e}))]})]})]})]})},H=[];export{F as default};
