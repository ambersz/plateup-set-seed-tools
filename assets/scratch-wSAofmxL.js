import{p as l,u as i,g as n}from"./main-9t52hhpQ.js";import{u}from"./usePersistentState-qQ9Sp8_x.js";let s,t=!0;const c=()=>{const[o,r]=u([],"SCRATCH_RESULTS");return l(()=>{s===void 0&&(s=new Worker(new URL("/plateup-set-seed-tools/assets/scratchworker-turbo-bf-uvOzXPvi.js",import.meta.url),{type:"module"})),s.onmessage=a=>{if(r(e=>[...e,a.data]),t){t=!1;const e=JSON.parse(localStorage.SCRATCH_RESULTS);console.log({m:"sending message",mess:e}),s.postMessage(e)}}},[]),i(n,{children:JSON.stringify(o,null,2)})};export{c as default};
