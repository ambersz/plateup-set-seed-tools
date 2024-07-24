import{U as d,R as A}from"./prng-JpF06ZO8.js";import{h as u,p as _,u as s,g as f}from"./main-TTwjzSTe.js";import{U as v}from"./UnlockSelect-aET4Vi1C.js";import{u as m}from"./usePersistentState-VZeU38ZR.js";import{S as H}from"./SeedSearchResult-UfmFS-Ul.js";import{t as I}from"./run-GDuNuyou.js";d.filter(r=>r.Name==="Cakes")[0];const C=[],W=1;for(let r=0;r<W;r++)C.push(new Worker(new URL("/plateup-set-seed-tools/assets/seedSearchWorker-GoEc4Gvi.js",import.meta.url),{type:"module"}));function p(r){for(const a of C)a.postMessage(r)}const g=[{include:!0,cards:[A.filter(r=>r.Name==="Turbo")[0]]}],M={include:!0,cards:["Ice Cream","Instant Service","All You Can Eat","Victorian Standards","Sedate Atmosphere","Roast Potato","Broccoli","Bamboo","Mashed Potato","Chips","Corn on the Cob","Onion Rings"].flatMap(r=>d.filter(a=>a.Name===r))},x={include:!1,cards:["Apple Pie","Cherry","Pumpkin","Leisurely","Mandarin","Bread","Closing Time?","Picky","Medium","Advertising","Cheese ","Soup"].flatMap(r=>d.filter(a=>a.Name.includes(r)))};{let r=1;for(;r<=9;r++)g[r]=r===5?{include:!0,cards:d.filter(a=>a.Name==="Affordable")}:M;for(;r<=14;r++)g[r]=x}const $=()=>{const[r,a]=u(0),[S,y]=m([],"SEED_SEARCHER_RESULTS"),[b,h]=u(!1),[o,k]=m(["Diner (1)","Small (2)","Medium (2)","Large (3)","Huge (4)"],"SEED_SEARCHER_ALLOWED_TABLES",e=>e.flatMap(t=>{if(typeof t=="number")switch(t){case 1:return"Diner (1)";case 2:return["Medium (2)","Small (2)"];case 3:return"Large (3)";case 4:return"Huge (4)"}return t}));_(()=>{console.log("useEffect registering message done");const e=t=>{const l=t;switch(l.data.type){case"error":break;case"result":const c=l.data.data;y(i=>(i.length>=1/0&&(p({type:"stop"}),h(!1)),[...i,c]));break;case"progress":a(l.data.data);break}};for(const t of C)t.onmessage=e},[]);const w=[];for(let e=1;e<=14;e++)w.push(e);const B=()=>{if(b)p({type:"stop"}),h(!1);else{if(n[0].cards.length<2){if(!confirm("No starting dish selected. Run search anyway? (If you're doing that ridiculous no food run 🤣)"))return}else n[0].cards.length>2;const e=[];for(let t=1;t<15;t++)(!n[t]||n[t].include&&n[t].cards.length===0)&&e.push(t);if(e.length){e.length>1&&(e[e.length-1]="and "+e[e.length-1]),alert(`Empty card configurations for day${e.length>1?"s":""} `+e.join(e.length>2?", ":" ")+". Add cards, or switch to exclude cards mode.");return}p({type:"start",data:{mapSizes:o,goalCards:n,goalAppliances:U}}),h(!0)}},[n,E]=m(g,"SEED_SEARCHER_CARDS_BY_DAY"),R=e=>t=>{E(l=>{var i;const c=[...l];return e===0&&((i=t.cards[0])==null?void 0:i.Name)!=="Turbo"&&t.cards.push(A.filter(L=>L.Name==="Turbo")[0]),c[e]=t,c})},[D,N]=u(M),P=e=>{const t=[...n];t[e]={include:D.include,cards:[...D.cards]},E(t)},T=e=>()=>{o.includes(e)?k(o.filter(t=>t!==e)):k([...o,e])};return s(f,{children:[s("div",{style:{maxWidth:"50vw"},children:"When more than one starting dish is selected, the searcher will alternate among all of them"}),s("div",{style:{maxWidth:"50vw"},children:["On include/green card mode, the searcher prioritizes the cards which were added first (e.g. if a seed offers Ice Cream and Herd Mentality on Day N, and Ice Cream is before Herd Mentality in the card list for Day N, the searcher will ",s("i",{children:"always"})," choose Ice Cream.)"]}),s("div",{class:"search-container",children:[s("div",{class:"search-config",children:[s("div",{style:"min-width:fit-content;",children:[s("label",{children:"Map Layout: "}),I.map(e=>{const t=e+"-table";return s(f,{children:[s("label",{for:t,children:e}),s("input",{id:t,type:"checkbox",onChange:T(e),checked:o.includes(e)})]})})]}),s(f,{children:[s(v,{onSelectionChange:R(0),id:0,showSelectionMode:!1,label:"Starting Cards",...n[0],modes:["startingDishes","settings"]}),w.map(e=>s(v,{onSelectionChange:R(e),label:"After Day "+e,id:e,showCopyPaste:e!==5,handleCopy:N,handlePaste:()=>P(e),...n[e]??{},modes:e===5?["themes"]:["unlocks"]}))]})]}),s("div",{class:"search-results",children:[s("div",{children:[r," seeds checked"]}),s("button",{onClick:B,children:[b?"Stop":"Start"," Search"]}),s("div",{class:"results",children:[S.length?s("button",{onClick:()=>y([]),children:"Clear Previous Results"}):"",s("div",{children:s("code",{children:"seed | layout (tables): cards"})}),S.map(e=>s(H,{turbo:!0,result:e}))]})]})]})]})},U=[];export{$ as default};
