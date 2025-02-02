import{a as R}from"./usePersistentState-0gGw1jhM.js";import{k as p,l as O,o as S,u as e,L as w,g as k}from"./main-DAguCJPX.js";const _=["0nwgp558","2lg135el","wlekw94l","6njy11vn","wl3d19v8"],I={"9qj3rrgl":"Set Seed",jq6dmm71:"Random Seed","5lm5yy4q":"Breakfast","81wygg5q":"Burgers","139xem31":"Cakes",q752kvp1:"Coffee","0q53pe71":"Dumplings",zqo40021:"Fish","013g003l":"Hot Dogs",rqv877w1:"Pies","5lejooz1":"Pizza","0q5r66n1":"Salad",q8kenokq:"Spaghetti","4lxnzzr1":"Steak","814zjjjl":"Stir Fry",qyz46g41:"Tacos",jqz3yeg1:"Turkey",z19n33kq:"Solo",p127nnkq:"Duo","81p9jjkq":"Trio",xqkvddyl:"Quad",lx5gv6r1:"Pre 1.1.6b","14o95wjq":"1.1.6b ",q8k48jgq:"1.1.7-1.1.9",q5v5kj2l:"1.2.0+",qvvx3vrq:"Normal","139x39r1":"Autumn","192x6ykq":"Turbo",q5v4kv7l:"Lake",le2nd2ml:"North Pole",qoxjdx5q:"Halloween"},j=({run:r})=>e(k,{children:[e("a",{href:r.weblink,children:r.primary})," by"," ",r.players.map(i=>i.weblink?e(k,{children:[e("a",{href:i.weblink,children:i.name})," "]}):e(k,{children:[i.name," "]})),"(",r.category[0],")"]}),F=()=>{const r=R("","OPPORTUNITY_OLDEST_UNVERIFIED_ID"),i=R([],"OPPORTUNITY_RUNS_CACHE"),t=p({}),y=p("Pre 1.1.6b"),g=p(!1),f=p(!1);O(()=>{if(Object.keys(t.peek()).length)return;let h=Object.assign({},t.peek());for(const s of i.value){const d=v(s);s.status==="verified"&&s.primary_t<(h[d]??1/0)&&(h[d]=s.primary_t)}t.value=h});const l=S(()=>{const h=r.value,s=Object.assign({},t.value),d=i.value;return()=>{f.value=!0,T(h).then(m=>{let n="";for(const a of m){const u=v(a);a.status==="verified"&&a.primary_t<(s[u]??1/0)&&(s[u]=a.primary_t)}const o=[],c={};for(const a of m){const u=v(a);a.status==="new"&&(n=a.id),a.primary_t<=(s[u]??1/0)&&(o.push(a),c[a.id]=!0)}for(const a of d){if(c[a.id])continue;const u=v(a);a.primary_t<=(s[u]??1/0)&&o.push(a)}i.value=o,t.value=s,r.value=n,f.value=!1})}}),b=S(()=>{var m;let h=[];const s=[],d={"Set Seed":{},"Random Seed":{}};for(const n of i.value){if(n.status==="rejected"||n.status!=="verified"&&g.value||!P(n.category[0],y.value))continue;const o=n.category.slice(2).join(" "),c=n.category[1];n.primary_t<(((m=d[c][o])==null?void 0:m.primary_t)??1/0)&&(d[c][o]=n)}for(const n of Object.keys(d["Random Seed"])){const o=d["Set Seed"][n],c=d["Random Seed"][n];if(((o==null?void 0:o.primary_t)??1/0)<c.primary_t)continue;let a=e(w,{to:"../normal-seed-searcher.html",children:"Searcher"});n.includes(" Lake ")&&(a=e(k,{})),n.includes(" Turbo ")&&(a=e(w,{to:"../turbo-seed-searcher.html",children:"Searcher"}));const u=o?o.primary_t/c.primary_t:1/0;s.push(n),h.push([e("tr",{children:[e("td",{children:[n," ",a]}),e("td",{children:o?" "+(u*100).toFixed(2)+"%":""}),e("td",{children:o?e(j,{run:o}):"No Set Seed Run"}),e("td",{children:e(j,{run:c})})]}),u])}return[h.sort((n,o)=>-o[1]+n[1]).map(n=>n[0]),s]}),q=p(""),C=S(()=>()=>{q.value=b.value[1][Math.floor(Math.random()*b.value[1].length)]});return e("div",{children:[e("h2",{children:"Set Seed Opportunities"}),e("div",{children:"Categories where the set seed record is not faster than the random seed record, or there is no set seed run at all."}),e("pre",{children:"// TODO: autofill starting cards in searcher link: dish + Autumn-Community & North Pole-Christmas Rush"}),e("button",{onClick:l.value,disabled:f,children:f.value?"Fetching Data...":i.value.length?"Update Run Data":"Fetch All Runs"}),e("div",{children:[e("button",{onClick:C.value,children:"Pick Random Category"}),e("span",{children:[" ",q]})]}),e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Category"}),e("th",{children:"Ratio"}),e("th",{children:"Fastest Seeded Run"}),e("th",{children:"Fastest Unseeded Run"})]})}),e("tbody",{children:b.value[0]})]})]})};function v(r){return r.category.join(",")}const x=["Pre 1.1.6b","1.1.6b","1.1.7-1.1.9","1.2.0+"];function P(r,i){return x.indexOf(r)>=x.indexOf(i)}async function T(r){let i=[],t=0;e:for(;;){const g=await(await fetch(`https://www.speedrun.com/api/v1/runs?orderby=submitted&direction=desc&game=yd4kq3k6&category=z275n0gk&max=200&embed=players&offset=${t}`)).json(),f=g.data;for(let l=0;l<f.length;l++)if(i.push(f[l]),f[l].id===r)break e;if(!g.pagination.links.some(l=>l.rel==="next"))break;await new Promise(l=>{setTimeout(()=>{l(!0)},60*1e3/100)}),t+=200}return i.map(y=>z(y))}function z(r){const i={id:r.id,category:_.map(t=>I[r.values[t]]),weblink:r.weblink,primary:r.times.primary.split(/[a-z]+/i).filter(t=>t).map((t,y)=>y?t.padStart(2,"0"):t).join(":"),primary_t:r.times.primary_t,players:r.players.data.map(t=>t.rel==="guest"?{name:t.name}:{name:t.names.international,weblink:t.weblink}),status:r.status.status};return i.category[3]===void 0&&(i.category[3]="Normal"),i.category.some(t=>t===void 0)&&alert("go tell ambersz to actually pull the variable data from the API instead of hardcoding it..."),i}export{F as default};
