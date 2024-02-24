import{U as Ve,a as $e,b as Ft,R as mn}from"./unlocks-8mfgXCLy.js";import{_ as A,T as O,p as _,F as Ke,w as Ot,y as In,s as yn,h as bn}from"./compat.module-HTaeRODX.js";import{u as H,g as Rt}from"./jsxRuntime.module-AOkfKomP.js";function he(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},I.apply(this,arguments)}function wn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=Symbol.for("react.element"),Ze=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Le=Symbol.for("react.context"),xn=Symbol.for("react.server_context"),We=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Cn=Symbol.for("react.offscreen"),Lt;Lt=Symbol.for("react.module.reference");function X(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qe:switch(e=e.type,e){case Ae:case Be:case Ne:case Ue:case je:return e;default:switch(e=e&&e.$$typeof,e){case xn:case Le:case We:case qe:case _e:case Fe:return e;default:return t}}case Ze:return t}}}S.ContextConsumer=Le;S.ContextProvider=Fe;S.Element=Qe;S.ForwardRef=We;S.Fragment=Ae;S.Lazy=qe;S.Memo=_e;S.Portal=Ze;S.Profiler=Be;S.StrictMode=Ne;S.Suspense=Ue;S.SuspenseList=je;S.isAsyncMode=function(){return!1};S.isConcurrentMode=function(){return!1};S.isContextConsumer=function(e){return X(e)===Le};S.isContextProvider=function(e){return X(e)===Fe};S.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qe};S.isForwardRef=function(e){return X(e)===We};S.isFragment=function(e){return X(e)===Ae};S.isLazy=function(e){return X(e)===qe};S.isMemo=function(e){return X(e)===_e};S.isPortal=function(e){return X(e)===Ze};S.isProfiler=function(e){return X(e)===Be};S.isStrictMode=function(e){return X(e)===Ne};S.isSuspense=function(e){return X(e)===Ue};S.isSuspenseList=function(e){return X(e)===je};S.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ae||e===Be||e===Ne||e===Ue||e===je||e===Cn||typeof e=="object"&&e!==null&&(e.$$typeof===qe||e.$$typeof===_e||e.$$typeof===Fe||e.$$typeof===Le||e.$$typeof===We||e.$$typeof===Lt||e.getModuleId!==void 0)};S.typeOf=X;const Tt=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Kt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ye=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Kt(n.overflowY,t)||Kt(n.overflowX,t)||(i=>{const r=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(i);return!!r&&(r.clientHeight<i.scrollHeight||r.clientWidth<i.scrollWidth)})(e)}return!1},Oe=(e,t,n,i,r,a,o,u)=>a<e&&o>t||a>e&&o<t?0:a<=e&&u<=n||o>=t&&u>=n?a-e-i:o>t&&u<n||a<e&&u>n?o-t+r:0,Sn=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},kn=(e,t)=>{var n,i,r,a;if(typeof document>"u")return[];const{scrollMode:o,block:u,inline:p,boundary:l,skipOverflowHiddenElements:s}=t,m=typeof l=="function"?l:W=>W!==l;if(!Tt(e))throw new TypeError("Invalid target");const x=document.scrollingElement||document.documentElement,R=[];let k=e;for(;Tt(k)&&m(k);){if(k=Sn(k),k===x){R.push(k);break}k!=null&&k===document.body&&Ye(k)&&!Ye(document.documentElement)||k!=null&&Ye(k,s)&&R.push(k)}const V=(i=(n=window.visualViewport)==null?void 0:n.width)!=null?i:innerWidth,N=(a=(r=window.visualViewport)==null?void 0:r.height)!=null?a:innerHeight,{scrollX:B,scrollY:F}=window,{height:$,width:C,top:q,right:T,bottom:ie,left:Y}=e.getBoundingClientRect(),{top:oe,right:K,bottom:g,left:b}=(W=>{const w=window.getComputedStyle(W);return{top:parseFloat(w.scrollMarginTop)||0,right:parseFloat(w.scrollMarginRight)||0,bottom:parseFloat(w.scrollMarginBottom)||0,left:parseFloat(w.scrollMarginLeft)||0}})(e);let y=u==="start"||u==="nearest"?q-oe:u==="end"?ie+g:q+$/2-oe+g,D=p==="center"?Y+C/2-b+K:p==="end"?T+K:Y-b;const Z=[];for(let W=0;W<R.length;W++){const w=R[W],{height:ee,width:te,top:J,right:ae,bottom:ne,left:re}=w.getBoundingClientRect();if(o==="if-needed"&&q>=0&&Y>=0&&ie<=N&&T<=V&&q>=J&&ie<=ne&&Y>=re&&T<=ae)return Z;const h=getComputedStyle(w),d=parseInt(h.borderLeftWidth,10),f=parseInt(h.borderTopWidth,10),v=parseInt(h.borderRightWidth,10),M=parseInt(h.borderBottomWidth,10);let P=0,E=0;const U="offsetWidth"in w?w.offsetWidth-w.clientWidth-d-v:0,L="offsetHeight"in w?w.offsetHeight-w.clientHeight-f-M:0,G="offsetWidth"in w?w.offsetWidth===0?0:te/w.offsetWidth:0,z="offsetHeight"in w?w.offsetHeight===0?0:ee/w.offsetHeight:0;if(x===w)P=u==="start"?y:u==="end"?y-N:u==="nearest"?Oe(F,F+N,N,f,M,F+y,F+y+$,$):y-N/2,E=p==="start"?D:p==="center"?D-V/2:p==="end"?D-V:Oe(B,B+V,V,d,v,B+D,B+D+C,C),P=Math.max(0,P+F),E=Math.max(0,E+B);else{P=u==="start"?y-J-f:u==="end"?y-ne+M+L:u==="nearest"?Oe(J,ne,ee,f,M+L,y,y+$,$):y-(J+ee/2)+L/2,E=p==="start"?D-re-d:p==="center"?D-(re+te/2)+U/2:p==="end"?D-ae+v+U:Oe(re,ae,te,d,v+U,D,D+C,C);const{scrollLeft:ve,scrollTop:ue}=w;P=z===0?0:Math.max(0,Math.min(ue+P/z,w.scrollHeight-ee/z+L)),E=G===0?0:Math.max(0,Math.min(ve+E/G,w.scrollWidth-te/G+U)),y+=ue-P,D+=ve-E}Z.push({el:w,top:P,left:E})}return Z};var Wt={exports:{}},Dn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mn=Dn,On=Mn;function Ut(){}function jt(){}jt.resetWarningCache=Ut;var Rn=function(){function e(i,r,a,o,u,p){if(p!==On){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jt,resetWarningCache:Ut};return n.PropTypes=n,n};Wt.exports=Rn();var Tn=Wt.exports;const c=wn(Tn);var we=function(){return we=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},we.apply(this,arguments)};var Kn=0;function Ge(){}function En(e,t){if(e){var n=kn(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(i){var r=i.el,a=i.top,o=i.left;r.scrollTop=a,r.scrollLeft=o})}}function Et(e,t,n){var i=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return i}function _t(e,t){var n;function i(){n&&clearTimeout(n)}function r(){for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];i(),n=setTimeout(function(){n=null,e.apply(void 0,o)},t)}return r.cancel=i,r}function j(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return t.some(function(u){return u&&u.apply(void 0,[i].concat(a)),i.preventDownshiftDefault||i.hasOwnProperty("nativeEvent")&&i.nativeEvent.preventDownshiftDefault})}}function ye(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){t.forEach(function(r){typeof r=="function"?r(i):r&&(r.current=i)})}}function Pn(){return String(Kn++)}function Hn(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function Ee(e,t){return Object.keys(e).reduce(function(n,i){return n[i]=qt(t,i)?t[i]:e[i],n},{})}function qt(e,t){return e[t]!==void 0}function Je(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function Re(e,t,n,i,r){r===void 0&&(r=!1);var a=n.length;if(a===0)return-1;var o=a-1;(typeof e!="number"||e<0||e>o)&&(e=t>0?-1:o+1);var u=e+t;u<0?u=r?o:0:u>o&&(u=r?0:o);var p=Pe(u,t<0,n,i,r);return p===-1?e>=a?-1:e:p}function Pe(e,t,n,i,r){r===void 0&&(r=!1);var a=n.length;if(t){for(var o=e;o>=0;o--)if(!i(n[o],o))return o}else for(var u=e;u<a;u++)if(!i(n[u],u))return u;return r?Pe(t?a-1:0,t,n,i):-1}function Pt(e,t,n,i){return i===void 0&&(i=!0),n&&t.some(function(r){return r&&(Et(r,e,n)||i&&Et(r,n.document.activeElement,n))})}var Vn=_t(function(e){Gt(e).textContent=""},500);function Gt(e){var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}function zt(e,t){if(!(!e||!t)){var n=Gt(t);n.textContent=e,Vn(t)}}var $n=["isInitialMount","highlightedIndex","items","environment"],Xt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function An(e,t,n){var i=e.props,r=e.type,a={};Object.keys(t).forEach(function(o){Nn(o,e,t,n),n[o]!==t[o]&&(a[o]=n[o])}),i.onStateChange&&Object.keys(a).length&&i.onStateChange(I({type:r},a))}function Nn(e,t,n,i){var r=t.props,a=t.type,o="on"+et(e)+"Change";r[o]&&i[e]!==void 0&&i[e]!==n[e]&&r[o](I({type:a},i))}function Bn(e,t){return t.changes}function Fn(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var Ln=_t(function(e,t){zt(e(),t)},200),Wn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?In:_,Un="useId"in Ot?function(t){var n=t.id,i=t.labelId,r=t.menuId,a=t.getItemId,o=t.toggleButtonId,u=t.inputId,p="downshift-"+Ot.useId();n||(n=p);var l=A({labelId:i||n+"-label",menuId:r||n+"-menu",getItemId:a||function(s){return n+"-item-"+s},toggleButtonId:o||n+"-toggle-button",inputId:u||n+"-input"});return l.current}:function(t){var n=t.id,i=n===void 0?"downshift-"+Pn():n,r=t.labelId,a=t.menuId,o=t.getItemId,u=t.toggleButtonId,p=t.inputId,l=A({labelId:r||i+"-label",menuId:a||i+"-menu",getItemId:o||function(s){return i+"-item-"+s},toggleButtonId:u||i+"-toggle-button",inputId:p||i+"-input"});return l.current};function Yt(e,t,n,i){var r,a;if(e===void 0){if(t===void 0)throw new Error(i);r=n[t],a=t}else a=t===void 0?n.indexOf(e):t,r=e;return[r,a]}function jn(e){return e?String(e):""}function et(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function tt(e){var t=A(e);return t.current=e,t}function Jt(e,t,n){var i=A(),r=A(),a=O(function(x,R){r.current=R,x=Ee(x,R.props);var k=e(x,R),V=R.props.stateReducer(x,I({},R,{changes:k}));return V},[e]),o=yn(a,t,n),u=o[0],p=o[1],l=tt(t),s=O(function(x){return p(I({props:l.current},x))},[l]),m=r.current;return _(function(){m&&i.current&&i.current!==u&&An(m,Ee(i.current,m.props),u),i.current=u},[u,t,m]),[u,s]}function _n(e,t,n){var i=Jt(e,t,n),r=i[0],a=i[1];return[Ee(r,t),a]}var Ce={itemToString:jn,stateReducer:Bn,getA11ySelectionMessage:Fn,scrollIntoView:En,environment:typeof window>"u"?void 0:window};function Q(e,t,n){n===void 0&&(n=Xt);var i=e["default"+et(t)];return i!==void 0?i:n[t]}function be(e,t,n){n===void 0&&(n=Xt);var i=e[t];if(i!==void 0)return i;var r=e["initial"+et(t)];return r!==void 0?r:Q(e,t,n)}function qn(e){var t=be(e,"selectedItem"),n=be(e,"isOpen"),i=be(e,"highlightedIndex"),r=be(e,"inputValue");return{highlightedIndex:i<0&&t&&n?e.items.indexOf(t):i,isOpen:n,selectedItem:t,inputValue:r}}function Se(e,t,n){var i=e.items,r=e.initialHighlightedIndex,a=e.defaultHighlightedIndex,o=t.selectedItem,u=t.highlightedIndex;return i.length===0?-1:r!==void 0&&u===r?r:a!==void 0?a:o?i.indexOf(o):n===0?-1:n<0?i.length-1:0}function Gn(e,t,n,i){var r=A({isMouseDown:!1,isTouchMove:!1});return _(function(){if(n){var a=function(){r.current.isMouseDown=!0},o=function(m){r.current.isMouseDown=!1,e&&!Pt(m.target,t.map(function(x){return x.current}),n)&&i()},u=function(){r.current.isTouchMove=!1},p=function(){r.current.isTouchMove=!0},l=function(m){e&&!r.current.isTouchMove&&!Pt(m.target,t.map(function(x){return x.current}),n,!1)&&i()};return n.addEventListener("mousedown",a),n.addEventListener("mouseup",o),n.addEventListener("touchstart",u),n.addEventListener("touchmove",p),n.addEventListener("touchend",l),function(){n.removeEventListener("mousedown",a),n.removeEventListener("mouseup",o),n.removeEventListener("touchstart",u),n.removeEventListener("touchmove",p),n.removeEventListener("touchend",l)}}},[e,n]),r}var Qt=function(){return Ge};function Ht(e,t,n){var i=n.isInitialMount,r=n.highlightedIndex,a=n.items,o=n.environment,u=he(n,$n);_(function(){i||!(o!=null&&o.document)||Ln(function(){return e(I({highlightedIndex:r,highlightedItem:a[r],resultCount:a.length},u))},o.document)},t)}function zn(e){var t=e.highlightedIndex,n=e.isOpen,i=e.itemRefs,r=e.getItemNodeFromIndex,a=e.menuElement,o=e.scrollIntoView,u=A(!0);return Wn(function(){t<0||!n||!Object.keys(i.current).length||(u.current===!1?u.current=!0:o(r(t),a))},[t]),u}var Zt=Ge;function Vt(e,t,n){var i;n===void 0&&(n=!0);var r=((i=e.items)==null?void 0:i.length)&&t>=0;return I({isOpen:!1,highlightedIndex:-1},r&&I({selectedItem:e.items[t],isOpen:Q(e,"isOpen"),highlightedIndex:Q(e,"highlightedIndex")},n&&{inputValue:e.itemToString(e.items[t])}))}var en={environment:c.shape({addEventListener:c.func.isRequired,removeEventListener:c.func.isRequired,document:c.shape({createElement:c.func.isRequired,getElementById:c.func.isRequired,activeElement:c.any.isRequired,body:c.any.isRequired}).isRequired,Node:c.func.isRequired}),itemToString:c.func,stateReducer:c.func},tn=I({},en,{getA11yStatusMessage:c.func,highlightedIndex:c.number,defaultHighlightedIndex:c.number,initialHighlightedIndex:c.number,isOpen:c.bool,defaultIsOpen:c.bool,initialIsOpen:c.bool,selectedItem:c.any,initialSelectedItem:c.any,defaultSelectedItem:c.any,id:c.string,labelId:c.string,menuId:c.string,getItemId:c.func,toggleButtonId:c.string,onSelectedItemChange:c.func,onHighlightedIndexChange:c.func,onStateChange:c.func,onIsOpenChange:c.func,scrollIntoView:c.func});function Xn(e,t,n){var i=t.type,r=t.props,a;switch(i){case n.ItemMouseMove:a={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:a={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:a={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Se(r,e,0)};break;case n.FunctionOpenMenu:a={isOpen:!0,highlightedIndex:Se(r,e,0)};break;case n.FunctionCloseMenu:a={isOpen:!1};break;case n.FunctionSetHighlightedIndex:a={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:a={inputValue:t.inputValue};break;case n.FunctionReset:a={highlightedIndex:Q(r,"highlightedIndex"),isOpen:Q(r,"isOpen"),selectedItem:Q(r,"selectedItem"),inputValue:Q(r,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return I({},e,a)}we(we({},tn),{items:c.array.isRequired,isItemDisabled:c.func,getA11ySelectionMessage:c.func});function Yn(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}we(we({},Ce),{getA11yStatusMessage:Yn,isItemDisabled:function(){return!1}});var nt=0,rt=1,it=2,ot=3,at=4,ut=5,st=6,lt=7,ct=8,He=9,dt=10,nn=11,rn=12,ft=13,on=14,an=15,un=16,sn=17,ln=18,gt=19,cn=20,dn=21,pt=22,fn=Object.freeze({__proto__:null,InputKeyDownArrowDown:nt,InputKeyDownArrowUp:rt,InputKeyDownEscape:it,InputKeyDownHome:ot,InputKeyDownEnd:at,InputKeyDownPageUp:ut,InputKeyDownPageDown:st,InputKeyDownEnter:lt,InputChange:ct,InputBlur:He,InputClick:dt,MenuMouseLeave:nn,ItemMouseMove:rn,ItemClick:ft,ToggleButtonClick:on,FunctionToggleMenu:an,FunctionOpenMenu:un,FunctionCloseMenu:sn,FunctionSetHighlightedIndex:ln,FunctionSelectItem:gt,FunctionSetInputValue:cn,FunctionReset:dn,ControlledPropUpdatedSelectedItem:pt});function Jn(e){var t=qn(e),n=t.selectedItem,i=t.inputValue;return i===""&&n&&e.defaultInputValue===void 0&&e.initialInputValue===void 0&&e.inputValue===void 0&&(i=e.itemToString(n)),I({},t,{inputValue:i})}I({},tn,{items:c.array.isRequired,isItemDisabled:c.func,selectedItemChanged:c.func,getA11ySelectionMessage:c.func,inputValue:c.string,defaultInputValue:c.string,initialInputValue:c.string,inputId:c.string,onInputValueChange:c.func});function Qn(e,t,n){var i=A(),r=Jt(e,t,n),a=r[0],o=r[1];return _(function(){qt(t,"selectedItem")&&(t.selectedItemChanged(i.current,t.selectedItem)&&o({type:pt,inputValue:t.itemToString(t.selectedItem)}),i.current=a.selectedItem===i.current?t.selectedItem:a.selectedItem)},[a.selectedItem,t.selectedItem]),[Ee(a,t),o]}var Zn=Ge,er=I({},Ce,{selectedItemChanged:function(t,n){return t!==n},getA11yStatusMessage:Hn,isItemDisabled:function(){return!1}});function tr(e,t){var n,i=t.type,r=t.props,a=t.altKey,o;switch(i){case ft:o={isOpen:Q(r,"isOpen"),highlightedIndex:Q(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case nt:e.isOpen?o={highlightedIndex:Re(e.highlightedIndex,1,r.items,r.isItemDisabled,!0)}:o={highlightedIndex:a&&e.selectedItem==null?-1:Se(r,e,1),isOpen:r.items.length>=0};break;case rt:e.isOpen?a?o=Vt(r,e.highlightedIndex):o={highlightedIndex:Re(e.highlightedIndex,-1,r.items,r.isItemDisabled,!0)}:o={highlightedIndex:Se(r,e,-1),isOpen:r.items.length>=0};break;case lt:o=Vt(r,e.highlightedIndex);break;case it:o=I({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case ut:o={highlightedIndex:Re(e.highlightedIndex,-10,r.items,r.isItemDisabled,!0)};break;case st:o={highlightedIndex:Re(e.highlightedIndex,10,r.items,r.isItemDisabled,!0)};break;case ot:o={highlightedIndex:Pe(0,!1,r.items,r.isItemDisabled)};break;case at:o={highlightedIndex:Pe(r.items.length-1,!0,r.items,r.isItemDisabled)};break;case He:o=I({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((n=r.items)==null?void 0:n.length)&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case ct:o={isOpen:!0,highlightedIndex:Q(r,"highlightedIndex"),inputValue:t.inputValue};break;case dt:o={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Se(r,e,0)};break;case gt:o={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)};break;case pt:o={inputValue:t.inputValue};break;default:return Xn(e,t,fn)}return I({},e,o)}var nr=["onMouseLeave","refKey","ref"],rr=["item","index","refKey","ref","onMouseMove","onMouseDown","onClick","onPress","disabled"],ir=["onClick","onPress","refKey","ref"],or=["onKeyDown","onChange","onInput","onBlur","onChangeText","onClick","refKey","ref"];fe.stateChangeTypes=fn;function fe(e){e===void 0&&(e={}),Zn();var t=I({},er,e),n=t.items,i=t.scrollIntoView,r=t.environment,a=t.getA11yStatusMessage,o=t.getA11ySelectionMessage,u=t.itemToString,p=Qn(tr,t,Jn),l=p[0],s=p[1],m=l.isOpen,x=l.highlightedIndex,R=l.selectedItem,k=l.inputValue,V=A(null),N=A({}),B=A(null),F=A(null),$=A(!0),C=Un(t),q=A(),T=tt({state:l,props:t}),ie=O(function(h){return N.current[C.getItemId(h)]},[C]);Ht(a,[m,x,k,n],I({isInitialMount:$.current,previousResultCount:q.current,items:n,environment:r,itemToString:u},l)),Ht(o,[R],I({isInitialMount:$.current,previousResultCount:q.current,items:n,environment:r,itemToString:u},l));var Y=zn({menuElement:V.current,highlightedIndex:x,isOpen:m,itemRefs:N,scrollIntoView:i,getItemNodeFromIndex:ie});Zt({isInitialMount:$.current,props:t,state:l}),_(function(){var h=be(t,"isOpen");h&&B.current&&B.current.focus()},[]),_(function(){$.current||(q.current=n.length)});var oe=Gn(m,[B,V,F],r,function(){s({type:He,selectItem:!1})}),K=Qt();_(function(){return $.current=!1,function(){$.current=!0}},[]),_(function(){m||(N.current={})},[m]),_(function(){var h;!m||!(r!=null&&r.document)||!(B!=null&&(h=B.current)!=null&&h.focus)||r.document.activeElement!==B.current&&B.current.focus()},[m,r]);var g=Ke(function(){return{ArrowDown:function(d){d.preventDefault(),s({type:nt,altKey:d.altKey})},ArrowUp:function(d){d.preventDefault(),s({type:rt,altKey:d.altKey})},Home:function(d){T.current.state.isOpen&&(d.preventDefault(),s({type:ot}))},End:function(d){T.current.state.isOpen&&(d.preventDefault(),s({type:at}))},Escape:function(d){var f=T.current.state;(f.isOpen||f.inputValue||f.selectedItem||f.highlightedIndex>-1)&&(d.preventDefault(),s({type:it}))},Enter:function(d){var f=T.current.state;!f.isOpen||d.which===229||(d.preventDefault(),s({type:lt}))},PageUp:function(d){T.current.state.isOpen&&(d.preventDefault(),s({type:ut}))},PageDown:function(d){T.current.state.isOpen&&(d.preventDefault(),s({type:st}))}}},[s,T]),b=O(function(h){return I({id:C.labelId,htmlFor:C.inputId},h)},[C]),y=O(function(h,d){var f,v=h===void 0?{}:h,M=v.onMouseLeave,P=v.refKey,E=P===void 0?"ref":P,U=v.ref,L=he(v,nr),G=d===void 0?{}:d;return G.suppressRefError,I((f={},f[E]=ye(U,function(z){V.current=z}),f.id=C.menuId,f.role="listbox",f["aria-labelledby"]=L&&L["aria-label"]?void 0:""+C.labelId,f.onMouseLeave=j(M,function(){s({type:nn})}),f),L)},[s,K,C]),D=O(function(h){var d,f,v=h===void 0?{}:h,M=v.item,P=v.index,E=v.refKey,U=E===void 0?"ref":E,L=v.ref,G=v.onMouseMove,z=v.onMouseDown,ve=v.onClick;v.onPress;var ue=v.disabled,ze=he(v,rr);ue!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');var se=T.current,ke=se.props,De=se.state,Me=Yt(M,P,ke.items,"Pass either item or index to getItemProps!"),Xe=Me[0],le=Me[1],me=ke.isItemDisabled(Xe,le),ce="onClick",ge=ve,de=function(){le!==De.highlightedIndex&&(Y.current=!1,s({type:rn,index:le,disabled:me}))},pe=function(){s({type:ft,index:le})},hn=function(vn){return vn.preventDefault()};return I((d={},d[U]=ye(L,function(xe){xe&&(N.current[C.getItemId(le)]=xe)}),d["aria-disabled"]=me,d["aria-selected"]=""+(le===De.highlightedIndex),d.id=C.getItemId(le),d.role="option",d),!me&&(f={},f[ce]=j(ge,pe),f),{onMouseMove:j(G,de),onMouseDown:j(z,hn)},ze)},[s,T,Y,C]),Z=O(function(h){var d,f=h===void 0?{}:h,v=f.onClick;f.onPress;var M=f.refKey,P=M===void 0?"ref":M,E=f.ref,U=he(f,ir),L=T.current.state,G=function(){s({type:on})};return I((d={},d[P]=ye(E,function(z){F.current=z}),d["aria-controls"]=C.menuId,d["aria-expanded"]=L.isOpen,d.id=C.toggleButtonId,d.tabIndex=-1,d),!U.disabled&&I({},{onClick:j(v,G)}),U)},[s,T,C]),W=O(function(h,d){var f,v=h===void 0?{}:h,M=v.onKeyDown,P=v.onChange,E=v.onInput,U=v.onBlur;v.onChangeText;var L=v.onClick,G=v.refKey,z=G===void 0?"ref":G,ve=v.ref,ue=he(v,or),ze=d===void 0?{}:d;ze.suppressRefError;var se=T.current.state,ke=function(de){var pe=Je(de);pe&&g[pe]&&g[pe](de)},De=function(de){s({type:ct,inputValue:de.target.value})},Me=function(de){if(r!=null&&r.document&&se.isOpen&&!oe.current.isMouseDown){var pe=de.relatedTarget===null&&r.document.activeElement!==r.document.body;s({type:He,selectItem:!pe})}},Xe=function(){s({type:dt})},le="onInput",me={};if(!ue.disabled){var ce;me=(ce={},ce[le]=j(P,E,De),ce.onKeyDown=j(M,ke),ce.onBlur=j(U,Me),ce.onClick=j(L,Xe),ce)}return I((f={},f[z]=ye(ve,function(ge){B.current=ge}),f["aria-activedescendant"]=se.isOpen&&se.highlightedIndex>-1?C.getItemId(se.highlightedIndex):"",f["aria-autocomplete"]="list",f["aria-controls"]=C.menuId,f["aria-expanded"]=se.isOpen,f["aria-labelledby"]=ue&&ue["aria-label"]?void 0:C.labelId,f.autoComplete="off",f.id=C.inputId,f.role="combobox",f.value=se.inputValue,f),me,ue)},[K,T,C,g,s,oe,r]),w=O(function(){s({type:an})},[s]),ee=O(function(){s({type:sn})},[s]),te=O(function(){s({type:un})},[s]),J=O(function(h){s({type:ln,highlightedIndex:h})},[s]),ae=O(function(h){s({type:gt,selectedItem:h})},[s]),ne=O(function(h){s({type:cn,inputValue:h})},[s]),re=O(function(){s({type:dn})},[s]);return{getItemProps:D,getLabelProps:b,getMenuProps:y,getInputProps:W,getToggleButtonProps:Z,toggleMenu:w,openMenu:te,closeMenu:ee,setHighlightedIndex:J,setInputValue:ne,selectItem:ae,reset:re,highlightedIndex:x,isOpen:m,selectedItem:R,inputValue:k}}var gn={activeIndex:-1,selectedItems:[]};function $t(e,t){return be(e,t,gn)}function At(e,t){return Q(e,t,gn)}function ar(e){var t=$t(e,"activeIndex"),n=$t(e,"selectedItems");return{activeIndex:t,selectedItems:n}}function Nt(e){if(e.shiftKey||e.metaKey||e.ctrlKey||e.altKey)return!1;var t=e.target;return!(t instanceof HTMLInputElement&&t.value!==""&&(t.selectionStart!==0||t.selectionEnd!==0))}function ur(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}I({},en,{selectedItems:c.array,initialSelectedItems:c.array,defaultSelectedItems:c.array,getA11yRemovalMessage:c.func,activeIndex:c.number,initialActiveIndex:c.number,defaultActiveIndex:c.number,onActiveIndexChange:c.func,onSelectedItemsChange:c.func,keyNavigationNext:c.string,keyNavigationPrevious:c.string});var sr={itemToString:Ce.itemToString,stateReducer:Ce.stateReducer,environment:Ce.environment,getA11yRemovalMessage:ur,keyNavigationNext:"ArrowRight",keyNavigationPrevious:"ArrowLeft"},lr=Ge,ht=0,vt=1,mt=2,It=3,yt=4,bt=5,wt=6,xt=7,Ct=8,St=9,kt=10,Dt=11,Mt=12,cr=Object.freeze({__proto__:null,SelectedItemClick:ht,SelectedItemKeyDownDelete:vt,SelectedItemKeyDownBackspace:mt,SelectedItemKeyDownNavigationNext:It,SelectedItemKeyDownNavigationPrevious:yt,DropdownKeyDownNavigationPrevious:bt,DropdownKeyDownBackspace:wt,DropdownClick:xt,FunctionAddSelectedItem:Ct,FunctionRemoveSelectedItem:St,FunctionSetSelectedItems:kt,FunctionSetActiveIndex:Dt,FunctionReset:Mt});function dr(e,t){var n=t.type,i=t.index,r=t.props,a=t.selectedItem,o=e.activeIndex,u=e.selectedItems,p;switch(n){case ht:p={activeIndex:i};break;case yt:p={activeIndex:o-1<0?0:o-1};break;case It:p={activeIndex:o+1>=u.length?-1:o+1};break;case mt:case vt:{if(o<0)break;var l=o;u.length===1?l=-1:o===u.length-1&&(l=u.length-2),p=I({selectedItems:[].concat(u.slice(0,o),u.slice(o+1))},{activeIndex:l});break}case bt:p={activeIndex:u.length-1};break;case wt:p={selectedItems:u.slice(0,u.length-1)};break;case Ct:p={selectedItems:[].concat(u,[a])};break;case xt:p={activeIndex:-1};break;case St:{var s=o,m=u.indexOf(a);if(m<0)break;u.length===1?s=-1:m===u.length-1&&(s=u.length-2),p={selectedItems:[].concat(u.slice(0,m),u.slice(m+1)),activeIndex:s};break}case kt:{var x=t.selectedItems;p={selectedItems:x};break}case Dt:{var R=t.activeIndex;p={activeIndex:R};break}case Mt:p={activeIndex:At(r,"activeIndex"),selectedItems:At(r,"selectedItems")};break;default:throw new Error("Reducer called without proper action type.")}return I({},e,p)}var fr=["refKey","ref","onClick","onKeyDown","selectedItem","index"],gr=["refKey","ref","onKeyDown","onClick","preventKeyAction"];Ie.stateChangeTypes=cr;function Ie(e){e===void 0&&(e={}),lr();var t=I({},sr,e),n=t.getA11yRemovalMessage,i=t.itemToString,r=t.environment,a=t.keyNavigationNext,o=t.keyNavigationPrevious,u=_n(dr,t,ar),p=u[0],l=u[1],s=p.activeIndex,m=p.selectedItems,x=A(!0),R=A(null),k=A(m),V=A();V.current=[];var N=tt({state:p,props:t});_(function(){if(!(x.current||!(r!=null&&r.document))){if(m.length<k.current.length){var g=k.current.find(function(b){return m.indexOf(b)<0});zt(n({itemToString:i,resultCount:m.length,removedSelectedItem:g,activeIndex:s,activeSelectedItem:m[s]}),r.document)}k.current=m}},[m.length]),_(function(){x.current||(s===-1&&R.current?R.current.focus():V.current[s]&&V.current[s].focus())},[s]),Zt({isInitialMount:x.current,props:t,state:p});var B=Qt();_(function(){return x.current=!1,function(){x.current=!0}},[]);var F=Ke(function(){var g;return g={},g[o]=function(){l({type:yt})},g[a]=function(){l({type:It})},g.Delete=function(){l({type:vt})},g.Backspace=function(){l({type:mt})},g},[l,a,o]),$=Ke(function(){var g;return g={},g[o]=function(b){Nt(b)&&l({type:bt})},g.Backspace=function(y){Nt(y)&&l({type:wt})},g},[l,o]),C=O(function(g){var b,y=g===void 0?{}:g,D=y.refKey,Z=D===void 0?"ref":D,W=y.ref,w=y.onClick,ee=y.onKeyDown,te=y.selectedItem,J=y.index,ae=he(y,fr),ne=N.current.state,re=Yt(te,J,ne.selectedItems,"Pass either item or index to getSelectedItemProps!"),h=re[1],d=h>-1&&h===ne.activeIndex,f=function(){l({type:ht,index:h})},v=function(P){var E=Je(P);E&&F[E]&&F[E](P)};return I((b={},b[Z]=ye(W,function(M){M&&V.current.push(M)}),b.tabIndex=d?0:-1,b.onClick=j(w,f),b.onKeyDown=j(ee,v),b),ae)},[l,N,F]),q=O(function(g,b){var y,D=g===void 0?{}:g,Z=D.refKey,W=Z===void 0?"ref":Z,w=D.ref,ee=D.onKeyDown,te=D.onClick,J=D.preventKeyAction,ae=J===void 0?!1:J,ne=he(D,gr),re=b===void 0?{}:b;re.suppressRefError;var h=function(v){var M=Je(v);M&&$[M]&&$[M](v)},d=function(){l({type:xt})};return I((y={},y[W]=ye(w,function(f){f&&(R.current=f)}),y),!ae&&{onKeyDown:j(ee,h),onClick:j(te,d)},ne)},[l,$,B]),T=O(function(g){l({type:Ct,selectedItem:g})},[l]),ie=O(function(g){l({type:St,selectedItem:g})},[l]),Y=O(function(g){l({type:kt,selectedItems:g})},[l]),oe=O(function(g){l({type:Dt,activeIndex:g})},[l]),K=O(function(){l({type:Mt})},[l]);return{getSelectedItemProps:C,getDropdownProps:q,addSelectedItem:T,removeSelectedItem:ie,setSelectedItems:Y,setActiveIndex:oe,reset:K,selectedItems:m,activeIndex:s}}const pn=Ve.filter(e=>e.UnlockGroup===$e.Dish).sort((e,t)=>e.Name<t.Name?-1:1),pr=pn.concat(Ve.filter(e=>e.UnlockGroup===$e.Generic).sort((e,t)=>e.Name<t.Name?-1:1)),Te=[];{const e={};for(const t of pn)e[t.ID]||(e[t.ID]=!0,Te.push(t));for(const t of Ft)e[t.ID]||(e[t.ID]=!0,Te.push(t));Te.sort((t,n)=>t.Name<n.Name?-1:1)}const hr=Ve.filter(e=>e.UnlockGroup===$e.PrimaryTheme).sort((e,t)=>e.Name<t.Name?-1:1),vr=Ve.filter(e=>e.UnlockGroup===$e.Franchise).sort((e,t)=>e.Name<t.Name?-1:1);function mr(e,t,n){const i=t.toLowerCase();let r=[];for(const a of n)switch(a){case"unlocks":r=[...r,...pr];break;case"settings":r=[...r,...mn];break;case"startingDishes":r=[...r,...Ft];break;case"themes":r=[...r,...hr];break;case"dishes":r=[...r,...Te];break;case"franchise":r=[...r,...vr];break}return r.filter(function(o){return!e.some(u=>u.ID===o.ID)&&o.Name.toLowerCase().includes(i)})}const Ir=["unlocks"],Bt=()=>{};function Cr({onSelectionChange:e,showSelectionMode:t=!0,label:n,placeholder:i,include:r=!0,cards:a,modes:o=Ir,showCopyPaste:u=!1,handleCopy:p=Bt,handlePaste:l=Bt}){const[s,m]=bn(""),x=Ke(()=>mr(a,s,o),[a,s]),{getSelectedItemProps:R,getDropdownProps:k,removeSelectedItem:V}=Ie({selectedItems:a,onStateChange({selectedItems:K,type:g}){switch(g){case Ie.stateChangeTypes.SelectedItemKeyDownBackspace:case Ie.stateChangeTypes.SelectedItemKeyDownDelete:case Ie.stateChangeTypes.DropdownKeyDownBackspace:case Ie.stateChangeTypes.FunctionRemoveSelectedItem:e({include:r,cards:K??[]});break}}}),{isOpen:N,getToggleButtonProps:B,getLabelProps:F,getMenuProps:$,getInputProps:C,highlightedIndex:q,getItemProps:T,selectedItem:ie}=fe({items:x,itemToString(K){return K?K.Name:""},defaultHighlightedIndex:0,selectedItem:null,inputValue:s,stateReducer(K,g){const{changes:b,type:y}=g;switch(y){case fe.stateChangeTypes.InputKeyDownEnter:case fe.stateChangeTypes.ItemClick:return{...b,isOpen:!0,highlightedIndex:0};default:return b}},onStateChange({inputValue:K,type:g,selectedItem:b}){switch(g){case fe.stateChangeTypes.InputKeyDownEnter:case fe.stateChangeTypes.ItemClick:case fe.stateChangeTypes.InputBlur:b&&(e({include:r,cards:[...a,b]}),m(""));break;case fe.stateChangeTypes.InputChange:m(K??"");break}}}),Y=()=>{e({include:!r,cards:a})},oe=()=>{e({include:r,cards:[]})};return H("div",{className:"combo-container",children:[H("div",{className:"",children:[H("label",{className:"",...F(),children:n??"Select desired cards"}),H("div",{children:[H("button",{onClick:oe,children:"Clear Cards"}),u&&H(Rt,{children:[H("button",{onClick:()=>{p({include:r,cards:a})},children:"Copy Settings"}),H("button",{onClick:l,children:"Paste Settings"})]})]}),H("div",{className:"",children:[a.map(function(g,b){return H("span",{className:"selected-items"+(r?" include":" exclude"),...R({selectedItem:g,index:b}),children:[g.Name,H("span",{class:"x",onClick:y=>{y.stopPropagation(),V(g)},children:"✕"})]},`selected-item-${b}`)}),H("div",{className:"",children:H("input",{placeholder:i??"Card Selection(s)",className:"",...C(k({preventKeyAction:N}))})}),t&&H(Rt,{children:[H("label",{for:"selectionMode",children:"Include/Exclude Selected Cards"}),H("input",{id:"selectionMode",type:"checkbox",checked:r,onChange:Y})]})]})]}),H("ul",{className:`dropdown ${N&&x.length?"":"hidden"}`,...$(),children:[!1,N&&x.map((K,g)=>H("li",{className:yr(q===g&&"bg-blue-300",ie===K&&"font-bold","py-2 px-3 shadow-sm flex flex-col"),...T({item:K,index:g}),children:H("span",{children:K.Name})},`${K.ID}${g}`))]})]})}const yr=(...e)=>e.filter(t=>t).join(" ");export{Cr as U,fe as a,Ie as u};
