var N=Object.defineProperty;var G=(b,e,t)=>e in b?N(b,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):b[e]=t;var k=(b,e,t)=>G(b,typeof e!="symbol"?e+"":e,t);import{D as C,n as M,f as T,F as y,e as V}from"./main-DAguCJPX.js";const S={};function v(b){const{starters:e,main:t,doubleOrderChance:s,desserts:r,sides:n,groupSizes:o}=b,c=[e,t,s,r,o].join("|");if(S[c])return S[c];let i=[0,0,0],a=[0,0,0,0],f=1-.75**n;if(e>0){i[0]=1;let g=1-.75**e;s===.5&&(g*=1.25,f*=1.25),a[0]=o.reduce((u,d)=>u+1+(d-1)*g,0)}const m=o.reduce((g,u)=>g+u);t&&(i[1]=1,a[1]=m),r>0&&(a[2]=m,t?(i[2]=1-.75**r,s===.5&&(i[2]*=1.25)):i[2]=1);let h=1;e>0&&(i[0]*=1+s,h*=1-s,a[0]*=i[0]),t&&(i[1]*=1+h*s,h*=1-s,a[1]*=i[1],a[3]=a[1]*f),r>0&&(i[2]*=1+h*s,h*=1-s,a[2]*=i[2]);const D=[i,a];return S[c]=D,D}function E(b){const{starters:e,main:t,doubleOrderChance:s,desserts:r,sides:n,groupSizes:o}=b;let c=[0,0,0],i=[0,0,0,0],a=1-.75**e,f=1-.75**r,m=1-.75**n;s===.5&&(a*=1.25,f*=1.25,m*=1.25);const h=d=>{c[0]++,i[0]++;for(let p=0;p<d-1;p++)Math.random()<a&&i[0]++},D=d=>{c[1]++,i[1]+=d;for(let p=0;p<d;p++)Math.random()<m&&i[3]++},g=d=>{c[2]++,i[2]+=d};for(const d of o){let p=!1;e>0&&(h(d),!p&&Math.random()<s&&(p=!0,h(d))),D(d),!p&&Math.random()<s&&(p=!0,D(d)),r>0&&Math.random()<f&&(g(d),!p&&Math.random()<s&&(p=!0,g(d)))}return[c,i]}const H={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},R={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(b=>R[b]=!0);class A{constructor(e,t=[],s=[]){k(this,"seed");k(this,"mapSize");k(this,"frontDoor");k(this,"startingCards");k(this,"cards");k(this,"playerCount");k(this,"turbo");k(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=t,this.cards=s,this.playerCount=H[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:t});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const t=this.getCardsByDay(e),s=this.getGroupSizes(e);let r=!1,n=!1,o=0,c=[],i=[],a=0,f=[],m=0,h=[];for(const l of t)switch(l.Name==="All You Can Eat"&&(r=!0),l.Name==="Double Helpings"&&(n=!0),l.DishType){case C.Dessert:a++,l.DishValue&&f.push(l.DishValue);break;case C.Starter:l.DishValue&&c.push(l.DishValue),o++;break;case C.Side:l.DishValue&&h.push(l.DishValue),m++;break;case C.Main:case C.Base:l.Name==="Tacos"?(i.push(2),i.push(3)):l.DishValue&&i.push(l.DishValue)}let D=n?.5:r?.25:0,g=[0,0,0,0];if(g[0]=M(c),g[1]=M(i),g[2]=M(f),g[3]=M(h),n)for(let l=0;l<3;l++)g[l]&&(g[l]+=3);const[u,d]=v({starters:o,main:!!g[1],doubleOrderChance:D,desserts:a,sides:m,groupSizes:s});let p=0;for(let l=0;l<d.length;l++)p+=d[l]*g[l];const z=B(this.playerCount),w=this.getBookingDeskCount(e),x=this.getBookingDeskMoney(e);return z*(p+w*x)}simulateMoney(e){if(e===0)return this.turbo?30:0;const t=this.getCardsByDay(e),s=this.getGroupSizes(e);let r=!1,n=!1,o=[[],[],[],[]];for(const u of t)switch(u.Name==="All You Can Eat"&&(r=!0),u.Name==="Double Helpings"&&(n=!0),u.DishType){case C.Dessert:u.DishValue&&o[2].push(u.DishValue);break;case C.Starter:u.DishValue&&o[0].push(u.DishValue);break;case C.Side:u.DishValue&&o[3].push(u.DishValue);break;case C.Main:case C.Base:u.Name==="Tacos"?(o[1].push(2),o[1].push(3)):u.DishValue&&o[1].push(u.DishValue)}let c=n?.5:r?.25:0,i=0;n&&(i+=3);const[a,f]=E({starters:o[0].length,main:!!o[1].length,doubleOrderChance:c,desserts:o[2].length,sides:o[3].length,groupSizes:s});let m=0;for(let u=0;u<f.length;u++){let d=f[u];for(;d--;)u<3&&(m+=i),m+=o[u][Math.floor(Math.random()*o[u].length)]}const h=B(this.playerCount),D=this.getBookingDeskCount(e),g=this.getBookingDeskMoney(e);return h*(m+D*g)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let t;this.turbo?t=e-1:(t=Math.max(0,Math.floor((e-1)/3)),e>5&&t++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,t)]}return this._cardsByDay[e]}getBookingDeskCount(e,t=1){const s=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(a=>a.Name==="Herd Mentality"))return Math.min(s,3)+1;const r=[],n=this.getCardsByDay(e);let o=1;(this.turbo||n.some(a=>a.Name==="Morning Rush"))&&(r.push(.2),o++),(this.turbo||n.some(a=>a.Name==="Lunch Rush"))&&(r.push(.5),o++),(this.turbo||n.some(a=>a.Name==="Dinner Rush"))&&(r.push(.8),o++);const c=t/this.getDayLength(e),i=.1/s;for(let a=1;a<s;a++){const f=a/s,m=f-i-c,h=f+i+c;let D=!1;for(const g of r)if(m<=g&&h>=g){D=!0;break}D||o++}return o}getNonRushGroupCount(e){const t=this.getExpectedCustomers(e),s=this.getCardsByDay(e).filter(o=>o.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),n=t*(1+s)/r;return Math.ceil(n)}getCustomerCount(e){return this.getGroupSizes(e).reduce((t,s)=>t+s,0)}getGroupSizes(e){const t=T(1997821,e,this.seed).random,s=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(h=>h.Name==="Herd Mentality");let n=s,o=[],[c,i]=this.getGroupSizeRange(e);{let h=n-1;for(;h--;)t.value}for(;n--;)o.push(t.range(c,i+1)),!r&&n!==s-1&&t.value;let a=this.turbo?3:this.getCardsByDay(e).filter(h=>R[h.Name]).length;const f=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let m=a*f;for(;m--;)o.push(t.range(c,i+1));return o}getExpectedGroupSize(e){const t=this.getGroupSizeRange(e);return(t[0]+t[1])/2}getGroupSizeRange(e){let t=1,s=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":s--;break;case"Medium Groups":t++,s+=2;break;case"Large Groups":t+=2,s+=2;break;case"Flexible Dining":t--,s++;break;case"Community":const n=Math.floor((e-1)/3);t+=n,s+=n;break}return[t,s]}getExpectedCustomers(e){const t=this.getReductions(e),s=this.getDayLength(e),r=this.getPlayerModifier(),n=this.getCourseModifier(e),o=this.getDayRate(e),c=this.getCustomersPerHour(e),i=this.getAdvertisingModifier(e);return .85**t*(s/25*o*r)/n*c*i}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(s=>s.Name==="Advertising").length}getDayRate(e){let t=1;switch(e){case 1:t=1.25;break;case 2:t=1.5;break;default:t=1.5+.15*(e-3);break}return e>15&&(t+=(this.turbo?.1:0)*(e-15)**1.5),t}getCourseModifier(e){let t=1;const s=this.getCardsByDay(e);return s.some(r=>r.DishType===C.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(t+=.25),s.some(r=>r.DishType===C.Starter)&&(t+=.25),t}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let t=1;return this.turbo&&(t=1.5,t*=1+e/10),t}getReductions(e){return this.getCardsByDay(e).reduce((s,r)=>s+r.CustomerMultiplier,0)}getMapSize(){const t=new y(this.seed,5078598).useSubcontext(0).random.range(0,8);let s;switch(t){case 0:s="Small (2)";break;case 4:s="Medium (2)";break;case 1:case 5:s="Diner (1)";break;case 2:case 6:s="Large (3)";break;case 3:case 7:s="Huge (4)";break;default:throw new Error}return s}getLayoutInfo(){const t=new y(this.seed,5078598).useSubcontext(0).random.range(0,8);let s,r;switch(t){case 0:r=70,s=2;break;case 4:r=84,s=2;break;case 1:case 5:r=60,s=1;break;case 2:case 6:r=9*13,s=3;break;case 3:case 7:r=12*16,s=4;break;default:throw new Error}return[s,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new V(new y(this.seed,98234234).useSubcontext(0).random.value),t=23;for(;t--;)e.value;return e.range(0,4)}}function B(b){switch(b){case 1:return 1.25;case 2:return 1.1;default:return 1}}const O=["Diner (1)","Small (2)","Medium (2)","Large (3)","Huge (4)"];export{A as R,O as t};
