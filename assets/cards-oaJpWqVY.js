var U=Object.defineProperty;var C=(i,e,t)=>e in i?U(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var p=(i,e,t)=>(C(i,typeof e!="symbol"?e+"":e,t),t);import{a as u,g as d,D as G}from"./unlocks-fGSP_DLg.js";import{F}from"./prng-1rWzft78.js";class g{constructor(){p(this,"encourageGroups",[u.Special])}GetOptions(e,t,r){const s=r.random;let n=0;for(t!==15&&(n=this.getPad(e,t));n--;)s.value;let h=this.sortCandidates(e,t,r.random);const[f,c]=this.getUnlockGroups(t);let o=null,a=null;for(const l of h)if(!(l.UnlockGroup!==f&&l.UnlockGroup!==c)&&(o===null||o.UnlockGroup!==f&&l.UnlockGroup===f?o=l:(a===null||a.UnlockGroup!==c&&l.UnlockGroup===c)&&(a=l),o&&o.UnlockGroup===f&&a&&a.UnlockGroup===c))break;return[o,a]}getPad(e,t){if(t===15)return 0;let r=d(e).length+1;return t===5&&(r*=2),r}sortCandidates(e,t,r){let s=d(e),n=P(s,r);return r.valueFloat<.5&&n.sort((f,c)=>{let o=0;return k(f)&&o--,k(c)&&o++,o}),n}getUnlockGroups(e){return e===15?[u.Franchise,u.Franchise]:e===5?[u.PrimaryTheme,u.PrimaryTheme]:[u.Dish,u.Generic]}}class v extends g{getPad(e,t){let r=d(e,!1).length+1;return t!==5&&(r*=2),r}sortCandidates(e,t,r){let s=d(e),n=P(s,r);return r.valueFloat<.1&&n.sort((c,o)=>{let a=0;return c.Requires.length&&a--,o.Requires.length&&a++,a}),n}}class T extends g{constructor(){super(...arguments);p(this,"ThanksgivingCards",["Turkey","Nut Roast"])}getPad(t,r){if(r===15)return 0;let s=d(t,!1).length+1;if(r===5){let n=d(t);s+=n.length+2}return s}sortCandidates(t,r,s){let n=r===5||r===15?d(t,!1):d(t),h=P(n,s);return s.valueFloat<.5&&h.sort((o,a)=>{let l=0;return k(o,!1)&&l--,k(a,!1)&&l++,l}),r!==5&&r!==15&&s.valueFloat<.25&&h.sort((a,l)=>{let m=0;return this.ThanksgivingCards.includes(a.Name)&&m++,this.ThanksgivingCards.includes(l.Name)&&m--,m}),h}getUnlockGroups(t){return t===15?[u.Franchise,u.Franchise]:t===5?[u.PrimaryTheme,u.PrimaryTheme]:[u.Dish,u.Dish]}}function P(i,e){return i.map(r=>[r,e.valueFloat]).sort((r,s)=>r[1]-s[1]).map(r=>r[0])}class D{constructor(e){p(this,"cards");p(this,"unlockPack");p(this,"seed");this.cards=[],this.unlockPack=new g,this.seed=e}addCard(e){if(e!==void 0){switch(e.Name){case"Community":this.unlockPack=new T;break;case"Turbo":this.unlockPack=new v;break}this.cards.push(e)}}getUnlockOptions(e){const r=y(848292,e,this.seed).useSubcontext(1);return this.unlockPack.GetOptions(this.cards,e,r)}getCustomers(e,t=1){return[]}getGroupSizeRange(e){if(this.cards.some(n=>n.Name==="Community")){const n=Math.floor((e-1)/3);return[n+1,n+2]}let r=1,s=2;return this.cards.some(n=>n.Name==="Individual Dining")?[1,1]:(this.cards.some(n=>n.Name==="Medium Groups")&&(r++,s+=2),this.cards.some(n=>n.Name==="Large Groups")&&(r+=2,s+=4),this.cards.some(n=>n.Name==="Flexible Groups")&&(r--,s++),[r,s])}}function y(i,e,t){return new F(t,i*1231231+e)}function k(i,e=!0){return i.UnlockGroup===u.Special||i.DishType===G.Main||i.DishType===G.Extra?!0:e?!!i.Requires.length:!1}export{D as F};