import{u as i,L as a}from"./main-4dXWvrgo.js";import{R as n}from"./unlocks-fGSP_DLg.js";const l=({turbo:o=!1,result:e})=>i("div",{children:[e.seed,e.mapSize&&` (${e.mapSize})`,":"," ",i("div",{children:[e.cards.join(", "),i(a,{to:`../branching-rerolls.html?turbo=${o?1:0}&seed=${e.seed}&cards=${e.cards.filter(s=>!n.some(t=>t.Name===s)).map(s=>encodeURIComponent(s)).join(",")}&solo=${e.mapSize===1?1:0}`,children:" (Blueprints)"})]})]});export{l as S};
