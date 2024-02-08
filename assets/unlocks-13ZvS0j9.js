var De=Object.defineProperty;var Ee=(e,a,s)=>a in e?De(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;var _=(e,a,s)=>(Ee(e,typeof a!="symbol"?a+"":a,s),s);import{l as o,b as P,y as S,g as B,$ as v,F as Ae,_ as Ie,q as w,B as xe,E as we,u as se}from"./jsxRuntime.module-wfZfYPmn.js";var b,c,W,le,R=0,ve=[],A=[],Fe=o.__b,re=o.__r,ne=o.diffed,te=o.__c,ue=o.unmount;function N(e,a){o.__h&&o.__h(c,e,R||a),R=0;var s=c.__H||(c.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({__V:A}),s.__[e]}function Se(e){return R=1,be(Ce,e)}function be(e,a,s){var l=N(b++,2);if(l.t=e,!l.__c&&(l.__=[s?s(a):Ce(void 0,a),function(u){var n=l.__N?l.__N[0]:l.__[0],i=l.t(n,u);n!==i&&(l.__N=[i,l.__[1]],l.__c.setState({}))}],l.__c=c,!c.u)){var F=function(u,n,i){if(!l.__c.__H)return!0;var f=l.__c.__H.__.filter(function(d){return d.__c});if(f.every(function(d){return!d.__N}))return!r||r.call(this,u,n,i);var p=!1;return f.forEach(function(d){if(d.__N){var h=d.__[0];d.__=d.__N,d.__N=void 0,h!==d.__[0]&&(p=!0)}}),!(!p&&l.__c.props===u)&&(!r||r.call(this,u,n,i))};c.u=!0;var r=c.shouldComponentUpdate,t=c.componentWillUpdate;c.componentWillUpdate=function(u,n,i){if(this.__e){var f=r;r=void 0,F(u,n,i),r=f}t&&t.call(this,u,n,i)},c.shouldComponentUpdate=F}return l.__N||l.__}function ge(e,a){var s=N(b++,3);!o.__s&&J(s.__H,a)&&(s.__=e,s.i=a,c.__H.__h.push(s))}function O(e,a){var s=N(b++,4);!o.__s&&J(s.__H,a)&&(s.__=e,s.i=a,c.__h.push(s))}function He(e){return R=5,Z(function(){return{current:e}},[])}function Oe(e,a,s){R=6,O(function(){return typeof e=="function"?(e(a()),function(){return e(null)}):e?(e.current=a(),function(){return e.current=null}):void 0},s==null?s:s.concat(e))}function Z(e,a){var s=N(b++,7);return J(s.__H,a)?(s.__V=e(),s.i=a,s.__h=e,s.__V):s.__}function qe(e,a){return R=8,Z(function(){return e},a)}function Ue(e){var a=c.context[e.__c],s=N(b++,9);return s.c=e,a?(s.__==null&&(s.__=!0,a.sub(c)),a.props.value):e.__}function $e(e,a){o.useDebugValue&&o.useDebugValue(a?a(e):e)}function Le(){var e=N(b++,11);if(!e.__){for(var a=c.__v;a!==null&&!a.__m&&a.__!==null;)a=a.__;var s=a.__m||(a.__m=[0,0]);e.__="P"+s[0]+"-"+s[1]++}return e.__}function We(){for(var e;e=ve.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(I),e.__H.__h.forEach(G),e.__H.__h=[]}catch(a){e.__H.__h=[],o.__e(a,e.__v)}}o.__b=function(e){c=null,Fe&&Fe(e)},o.__r=function(e){re&&re(e),b=0;var a=(c=e.__c).__H;a&&(W===c?(a.__h=[],c.__h=[],a.__.forEach(function(s){s.__N&&(s.__=s.__N),s.__V=A,s.__N=s.i=void 0})):(a.__h.forEach(I),a.__h.forEach(G),a.__h=[],b=0)),W=c},o.diffed=function(e){ne&&ne(e);var a=e.__c;a&&a.__H&&(a.__H.__h.length&&(ve.push(a)!==1&&le===o.requestAnimationFrame||((le=o.requestAnimationFrame)||Ve)(We)),a.__H.__.forEach(function(s){s.i&&(s.__H=s.i),s.__V!==A&&(s.__=s.__V),s.i=void 0,s.__V=A})),W=c=null},o.__c=function(e,a){a.some(function(s){try{s.__h.forEach(I),s.__h=s.__h.filter(function(l){return!l.__||G(l)})}catch(l){a.some(function(F){F.__h&&(F.__h=[])}),a=[],o.__e(l,s.__v)}}),te&&te(e,a)},o.unmount=function(e){ue&&ue(e);var a,s=e.__c;s&&s.__H&&(s.__H.__.forEach(function(l){try{I(l)}catch(F){a=F}}),s.__H=void 0,a&&o.__e(a,s.__v))};var ie=typeof requestAnimationFrame=="function";function Ve(e){var a,s=function(){clearTimeout(l),ie&&cancelAnimationFrame(a),setTimeout(e)},l=setTimeout(s,100);ie&&(a=requestAnimationFrame(s))}function I(e){var a=c,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),c=a}function G(e){var a=c;e.__c=e.__(),c=a}function J(e,a){return!e||e.length!==a.length||a.some(function(s,l){return s!==e[l]})}function Ce(e,a){return typeof a=="function"?a(e):a}function ye(e,a){for(var s in a)e[s]=a[s];return e}function z(e,a){for(var s in e)if(s!=="__source"&&!(s in a))return!0;for(var l in a)if(l!=="__source"&&e[l]!==a[l])return!0;return!1}function K(e){this.props=e}function Ge(e,a){function s(F){var r=this.props.ref,t=r==F.ref;return!t&&r&&(r.call?r(null):r.current=null),a?!a(this.props,F)||!t:z(this.props,F)}function l(F){return this.shouldComponentUpdate=s,S(e,F)}return l.displayName="Memo("+(e.displayName||e.name)+")",l.prototype.isReactComponent=!0,l.__f=!0,l}(K.prototype=new P).isPureReactComponent=!0,K.prototype.shouldComponentUpdate=function(e,a){return z(this.props,e)||z(this.state,a)};var oe=o.__b;o.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),oe&&oe(e)};var ze=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ke(e){function a(s){var l=ye({},s);return delete l.ref,e(l,s.ref||null)}return a.$$typeof=ze,a.render=a,a.prototype.isReactComponent=a.__f=!0,a.displayName="ForwardRef("+(e.displayName||e.name)+")",a}var ce=function(e,a){return e==null?null:v(v(e).map(a))},je={map:ce,forEach:ce,count:function(e){return e?v(e).length:0},only:function(e){var a=v(e);if(a.length!==1)throw"Children.only";return a[0]},toArray:v},Ye=o.__e;o.__e=function(e,a,s,l){if(e.then){for(var F,r=a;r=r.__;)if((F=r.__c)&&F.__c)return a.__e==null&&(a.__e=s.__e,a.__k=s.__k),F.__c(e,a)}Ye(e,a,s,l)};var _e=o.unmount;function ke(e,a,s){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),e.__c.__H=null),(e=ye({},e)).__c!=null&&(e.__c.__P===s&&(e.__c.__P=a),e.__c=null),e.__k=e.__k&&e.__k.map(function(l){return ke(l,a,s)})),e}function Pe(e,a,s){return e&&s&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(l){return Pe(l,a,s)}),e.__c&&e.__c.__P===a&&(e.__e&&s.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=s)),e}function x(){this.__u=0,this.t=null,this.__b=null}function Be(e){var a=e.__.__c;return a&&a.__a&&a.__a(e)}function Ze(e){var a,s,l;function F(r){if(a||(a=e()).then(function(t){s=t.default||t},function(t){l=t}),l)throw l;if(!s)throw a;return S(s,r)}return F.displayName="Lazy",F.__f=!0,F}function D(){this.u=null,this.o=null}o.unmount=function(e){var a=e.__c;a&&a.__R&&a.__R(),a&&32&e.__u&&(e.type=null),_e&&_e(e)},(x.prototype=new P).__c=function(e,a){var s=a.__c,l=this;l.t==null&&(l.t=[]),l.t.push(s);var F=Be(l.__v),r=!1,t=function(){r||(r=!0,s.__R=null,F?F(u):u())};s.__R=t;var u=function(){if(!--l.__u){if(l.state.__a){var n=l.state.__a;l.__v.__k[0]=Pe(n,n.__c.__P,n.__c.__O)}var i;for(l.setState({__a:l.__b=null});i=l.t.pop();)i.forceUpdate()}};l.__u++||32&a.__u||l.setState({__a:l.__b=l.__v.__k[0]}),e.then(t,t)},x.prototype.componentWillUnmount=function(){this.t=[]},x.prototype.render=function(e,a){if(this.__b){if(this.__v.__k){var s=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=ke(this.__b,s,l.__O=l.__P)}this.__b=null}var F=a.__a&&S(B,null,e.fallback);return F&&(F.__u&=-33),[S(B,null,a.__a?null:e.children),F]};var fe=function(e,a,s){if(++s[1]===s[0]&&e.o.delete(a),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(s=e.u;s;){for(;s.length>3;)s.pop()();if(s[1]<s[0])break;e.u=s=s[2]}};function Je(e){return this.getChildContext=function(){return e.context},e.children}function Qe(e){var a=this,s=e.i;a.componentWillUnmount=function(){w(null,a.l),a.l=null,a.i=null},a.i&&a.i!==s&&a.componentWillUnmount(),a.l||(a.i=s,a.l={nodeType:1,parentNode:s,childNodes:[],appendChild:function(l){this.childNodes.push(l),a.i.appendChild(l)},insertBefore:function(l,F){this.childNodes.push(l),a.i.appendChild(l)},removeChild:function(l){this.childNodes.splice(this.childNodes.indexOf(l)>>>1,1),a.i.removeChild(l)}}),w(S(Je,{context:a.context},e.__v),a.l)}function Xe(e,a){var s=S(Qe,{__v:e,i:a});return s.containerInfo=a,s}(D.prototype=new P).__a=function(e){var a=this,s=Be(a.__v),l=a.o.get(e);return l[0]++,function(F){var r=function(){a.props.revealOrder?(l.push(F),fe(a,e,l)):F()};s?s(r):r()}},D.prototype.render=function(e){this.u=null,this.o=new Map;var a=v(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&a.reverse();for(var s=a.length;s--;)this.o.set(a[s],this.u=[1,0,this.u]);return e.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(a,s){fe(e,s,a)})};var Re=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ea=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,aa=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,sa=/[A-Z0-9]/g,la=typeof document<"u",Fa=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function ra(e,a,s){return a.__k==null&&(a.textContent=""),w(e,a),typeof s=="function"&&s(),e?e.__c:null}function na(e,a,s){return xe(e,a),typeof s=="function"&&s(),e?e.__c:null}P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(a){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:a})}})});var he=o.event;function ta(){}function ua(){return this.cancelBubble}function ia(){return this.defaultPrevented}o.event=function(e){return he&&(e=he(e)),e.persist=ta,e.isPropagationStopped=ua,e.isDefaultPrevented=ia,e.nativeEvent=e};var Q,oa={enumerable:!1,configurable:!0,get:function(){return this.class}},de=o.vnode;o.vnode=function(e){typeof e.type=="string"&&function(a){var s=a.props,l=a.type,F={};for(var r in s){var t=s[r];if(!(r==="value"&&"defaultValue"in s&&t==null||la&&r==="children"&&l==="noscript"||r==="class"||r==="className")){var u=r.toLowerCase();r==="defaultValue"&&"value"in s&&s.value==null?r="value":r==="download"&&t===!0?t="":u==="ondoubleclick"?r="ondblclick":u!=="onchange"||l!=="input"&&l!=="textarea"||Fa(s.type)?u==="onfocus"?r="onfocusin":u==="onblur"?r="onfocusout":aa.test(r)?r=u:l.indexOf("-")===-1&&ea.test(r)?r=r.replace(sa,"-$&").toLowerCase():t===null&&(t=void 0):u=r="oninput",u==="oninput"&&F[r=u]&&(r="oninputCapture"),F[r]=t}}l=="select"&&F.multiple&&Array.isArray(F.value)&&(F.value=v(s.children).forEach(function(n){n.props.selected=F.value.indexOf(n.props.value)!=-1})),l=="select"&&F.defaultValue!=null&&(F.value=v(s.children).forEach(function(n){n.props.selected=F.multiple?F.defaultValue.indexOf(n.props.value)!=-1:F.defaultValue==n.props.value})),s.class&&!s.className?(F.class=s.class,Object.defineProperty(F,"className",oa)):(s.className&&!s.class||s.class&&s.className)&&(F.class=F.className=s.className),a.props=F}(e),e.$$typeof=Re,de&&de(e)};var pe=o.__r;o.__r=function(e){pe&&pe(e),Q=e.__c};var Te=o.diffed;o.diffed=function(e){Te&&Te(e);var a=e.props,s=e.__e;s!=null&&e.type==="textarea"&&"value"in a&&a.value!==s.value&&(s.value=a.value==null?"":a.value),Q=null};var ca={ReactCurrentDispatcher:{current:{readContext:function(e){return Q.__n[e.__c].props.value}}}};function _a(e){return S.bind(null,e)}function q(e){return!!e&&e.$$typeof===Re}function fa(e){return q(e)&&e.type===B}function ha(e){return q(e)?we.apply(null,arguments):e}function da(e){return!!e.__k&&(w(null,e),!0)}function pa(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ta=function(e,a){return e(a)},ma=function(e,a){return e(a)},va=B;function Ne(e){e()}function Sa(e){return e}function ba(){return[!1,Ne]}var ga=O,Ca=q;function ya(e,a){var s=a(),l=Se({h:{__:s,v:a}}),F=l[0].h,r=l[1];return O(function(){F.__=s,F.v=a,V(F)&&r({h:F})},[e,s,a]),ge(function(){return V(F)&&r({h:F}),e(function(){V(F)&&r({h:F})})},[e]),s}function V(e){var a,s,l=e.v,F=e.__;try{var r=l();return!((a=F)===(s=r)&&(a!==0||1/a==1/s)||a!=a&&s!=s)}catch{return!0}}var qa={useState:Se,useId:Le,useReducer:be,useEffect:ge,useLayoutEffect:O,useInsertionEffect:ga,useTransition:ba,useDeferredValue:Sa,useSyncExternalStore:ya,startTransition:Ne,useRef:He,useImperativeHandle:Oe,useMemo:Z,useCallback:qe,useContext:Ue,useDebugValue:$e,version:"17.0.2",Children:je,render:ra,hydrate:na,unmountComponentAtNode:da,createPortal:Xe,createElement:S,createContext:Ae,createFactory:_a,cloneElement:ha,createRef:Ie,Fragment:B,isValidElement:q,isElement:Ca,isFragment:fa,findDOMNode:pa,Component:P,PureComponent:K,memo:Ge,forwardRef:Ke,flushSync:ma,unstable_batchedUpdates:Ta,StrictMode:va,Suspense:x,SuspenseList:D,lazy:Ze,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ca};const ka=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False\r
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False\r
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False\r
1329097317,True,False,Mixer,False,False,,,64,0,0,False\r
-1013770159,True,False,Supplies,False,False,,,256,0,1,False\r
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False\r
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False\r
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False\r
481495292,False,False,Starter Bin,False,False,,,256,0,0,False\r
1551609169,True,False,Bin,False,False,,,256,0,0,False\r
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False\r
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False\r
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False\r
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False\r
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False\r
-1993346570,True,False,Mop,False,False,,,256,0,0,False\r
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False\r
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False\r
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False\r
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False\r
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False\r
-17368064,False,False,,False,False,,,0,0,0,False\r
1973114260,True,False,Conveyor,False,False,,,64,0,0,False\r
-1906799936,True,False,Combiner,False,False,,,64,0,0,False\r
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False\r
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False\r
-1029710921,False,True,Grabber,False,False,,,64,0,0,False\r
-1462602185,True,False,Portioner,False,False,,,64,0,0,False\r
459840623,False,False,Teleporter,False,False,,,64,0,0,False\r
-1248669347,True,False,Counter,False,False,,,1,0,0,False\r
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False\r
-1573577293,False,True,Workstation,False,False,,,32,0,0,False\r
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False\r
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False\r
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False\r
371247235,True,False,Neon Sign,False,False,,,2,2,0,False\r
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False\r
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False\r
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False\r
1569358344,True,False,Barrel,False,False,,,2,4,0,False\r
-60168847,True,False,Bookcase,False,False,,,2,4,0,False\r
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False\r
-441525746,True,False,Fireplace,False,False,,,2,4,0,False\r
591400026,True,False,Rug,False,False,,,2,4,0,False\r
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False\r
-1380985631,True,False,Banner,False,False,,,8192,0,0,False\r
1797739089,True,False,Christmas Tree,False,False,,,8192,0,0,False\r
-4737636,True,False,Fairy Lights,False,False,,,8192,0,0,False\r
-13481890,True,False,Candelabra,False,False,,,2,1,0,False\r
1233091186,True,False,Chandelier,False,False,,,2,1,0,False\r
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False\r
642318074,True,False,Classical Globe,False,False,,,2,1,0,False\r
-1486785449,True,False,Painting,False,False,,,2,1,0,False\r
2076966627,True,False,Rug,False,False,,,2,1,0,False\r
-972644436,True,False,Statue,False,False,,,2,1,0,False\r
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False\r
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False\r
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False\r
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False\r
531866927,True,False,Vase,False,False,,,2,8,0,False\r
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False\r
668664567,True,False,Calm Painting,False,False,,,2,0,0,False\r
756364626,True,False,Plant,False,False,,,2,0,0,False\r
-648349801,False,False,Rug,False,False,,,2,0,0,False\r
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False\r
-2100580689,False,False,,False,False,,,0,0,0,False\r
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False\r
892856538,False,False,,False,False,,,0,0,0,False\r
-544237849,False,False,Beehive,False,False,,,0,0,0,False\r
188952245,False,False,,False,False,,,0,0,0,False\r
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False\r
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False\r
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False\r
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False\r
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False\r
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False\r
-441141351,False,False,,False,False,,1972879238,32,0,0,False\r
805530854,False,False,,False,False,,1972879238,0,0,0,False\r
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False\r
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False\r
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False\r
1630557157,False,False,,False,False,,,0,0,0,False\r
-1324288299,False,False,,False,False,,,0,0,0,False\r
-374077567,False,False,,False,False,,,0,0,0,False\r
147181555,False,False,,False,False,,,0,0,0,False\r
31731938,False,False,,False,False,,,0,0,0,False\r
1419995156,False,False,,False,False,,,0,0,0,False\r
34773971,False,False,,False,False,,,0,0,0,False\r
-1424385600,False,False,,False,False,,,0,0,0,False\r
377065033,False,False,,False,False,,,0,0,0,False\r
-483535085,False,False,,False,False,,,0,0,0,False\r
1553046198,False,False,,False,False,,,0,0,0,False\r
1063254979,False,False,,False,False,,,0,0,0,False\r
1732122842,False,False,,False,False,,,0,0,0,False\r
-1936421857,False,False,,False,False,,,0,0,0,False\r
2041631136,False,False,,False,False,,,0,0,0,False\r
949631021,False,False,,False,False,,,0,0,0,False\r
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True\r
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False\r
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False\r
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False\r
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False\r
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True\r
238041352,True,False,Booking Desk,False,True,,,8,0,0,False\r
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False\r
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False\r
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False\r
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False\r
944301512,False,False,,False,False,,,0,0,0,False\r
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False\r
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False\r
1147639502,False,False,Balloons,False,False,,,8192,0,0,False\r
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False\r
-326328571,False,False,Piano,False,False,,,0,0,0,False\r
-905438738,True,False,Apples,True,False,,,288,0,0,False\r
1807525572,True,False,Beans,True,False,,,288,0,0,False\r
269523389,True,False,Meat,True,False,,,288,0,0,False\r
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False\r
759552160,True,False,Burger Buns,True,False,,,288,0,0,False\r
385684499,False,False,Patties,False,False,,,288,0,0,False\r
-452101383,True,False,Carrots,True,False,,,288,0,0,False\r
-117339838,True,False,Cheese,True,False,,,288,0,0,False\r
961148621,True,False,Eggs,True,False,,,288,0,0,False\r
-1735137431,False,False,Fish,False,False,,,288,0,0,False\r
-609358791,False,False,Fish,False,False,,,288,0,0,False\r
925796718,True,False,Flour,True,False,,,288,0,0,False\r
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False\r
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False\r
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False\r
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False\r
1193867305,True,False,Lettuce,True,False,,,288,0,0,False\r
-484165118,True,False,Meat,True,False,,,288,0,0,False\r
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False\r
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False\r
1834063794,True,False,Nuts,True,False,,,288,0,0,False\r
-1963699221,True,False,Oil,True,False,,,288,0,0,False\r
-1434800013,True,False,Olives,True,False,,,288,0,0,False\r
-2042103798,True,False,Onion,True,False,,,288,0,0,False\r
44541785,True,False,Potato,True,False,,,288,0,0,False\r
-1201769154,True,False,Rice,True,False,,,288,0,0,False\r
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False\r
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False\r
-712909563,True,False,Tomato,True,False,,,288,0,0,False\r
-1506824829,True,False,Turkey,True,False,,,288,0,0,False\r
-1353971407,True,False,Wine,True,False,,,288,0,0,False\r
-101564005,False,False,,False,False,,,0,0,0,False\r
-897970831,False,False,,False,False,,,0,0,0,False\r
-996680732,False,False,Counter,False,False,,,0,0,0,False\r
946079892,False,False,,False,False,,,0,0,0,False\r
1171429989,False,False,,False,False,,,0,0,0,False\r
161402590,False,False,,False,False,,,0,0,0,False\r
739504637,False,True,Auto Plater,False,False,,,256,0,0,False\r
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False\r
434150763,True,False,Dish Rack,False,False,,,16,0,0,False\r
1270423542,False,False,,False,False,,,0,0,0,False\r
-1474018107,False,False,,False,False,,,0,0,0,False\r
380220741,False,False,Starter Plates,False,False,,,256,0,0,False\r
1313469794,True,False,Plates,False,False,,,256,0,0,True\r
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False\r
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False\r
314862254,True,False,Woks,False,False,314862254,,0,0,0,False\r
-1291027873,False,False,,False,False,,,0,0,0,False\r
-214921468,False,False,,False,False,,,0,0,0,False\r
-2135829561,False,False,,False,False,,,0,0,0,False\r
-372462424,False,False,,False,False,,,0,0,0,False\r
933445633,False,False,,False,False,,,0,0,0,False\r
-1555334152,False,False,,False,False,,,0,0,0,False\r
1980900762,False,False,,False,False,,,0,0,0,False\r
1855052205,False,False,,False,False,,,0,0,0,False\r
-68388422,False,False,,False,False,,,0,0,0,False\r
-1200192498,False,False,,False,False,,,0,0,0,False\r
-194750543,False,False,,False,False,,,0,0,0,False\r
1911132834,False,False,,False,False,,,0,0,0,False\r
1365126444,False,False,,False,False,,,0,0,0,False\r
-1265562836,False,False,,False,False,,,0,0,0,False\r
-2046940874,False,False,,False,False,,,0,0,0,False\r
-923570273,False,False,,False,False,,,0,0,0,False\r
-488268556,False,False,,False,False,,,0,0,0,False\r
-548432204,False,False,,False,False,,,0,0,0,False\r
-758567246,False,False,,False,False,,,0,0,0,False\r
532701855,False,False,,False,False,,,0,0,0,False\r
-1857890774,False,True,Freezer,False,False,,,4,0,0,False\r
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False\r
1656358740,True,False,Prep Station,False,False,,,256,0,0,False\r
-262439022,False,False,,False,False,,,0,0,0,False\r
1890408483,False,False,,False,False,,,0,0,0,False\r
639111696,True,False,Breadsticks,False,False,,,8,0,0,False\r
1358522063,True,False,Candle Box,False,False,,,8,0,0,False\r
221442949,True,False,Flower Pot,False,False,,,8,0,0,False\r
1528688658,True,False,Napkins,False,False,,,8,0,0,False\r
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False\r
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False\r
938247786,False,False,Chair,False,False,,,0,0,0,False\r
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False\r
-1979922052,False,False,Chair,False,False,,,0,0,0,False\r
-3721951,False,True,Bar Table,False,False,,,8,0,0,False\r
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False\r
-203679687,False,True,Metal Table,False,False,,,8,0,0,False\r
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False\r
209074140,True,False,Dining Table,False,False,,,1,0,0,False\r
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False\r
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False\r
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False\r
723626409,True,False,Trainers,False,False,,,256,0,0,False\r
1796077718,True,False,Wellies,False,False,,,256,0,0,False\r
230848637,True,False,Work Boots,False,False,,,256,0,0,False\r
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False\r
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False\r
-214126192,False,True,Wash Basin,False,False,,,16,0,0,False\r
1083874952,True,False,Sink,False,False,,,17,0,0,False\r
1467371088,False,True,Power Sink,False,False,,,16,0,0,False\r
1860904347,False,True,Soaking Sink,False,False,,,16,0,0,False\r
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False\r
2073091578,False,False,,False,False,,,0,0,0,False\r
-469149429,False,False,,False,False,,,0,0,0,False\r
834743908,False,False,,False,False,,,0,0,0,False\r
951367272,False,False,,False,False,,,0,0,0,False\r
1771016910,False,False,,False,False,,,0,0,0,False\r
-2122624266,False,False,,False,False,,,0,0,0,False\r
-404095277,False,False,,False,False,,,0,0,0,False\r
-1949016360,False,False,,False,False,,,0,0,0,False\r
-581219245,False,False,,False,False,,,0,0,0,False\r
-148578487,False,False,,False,False,,,0,0,0,False\r
-1125517450,False,False,,False,False,,,0,0,0,False\r
-233558851,False,False,,False,False,,,0,0,0,False\r
-342718019,False,False,,False,False,,,0,0,0,False\r
174737401,False,False,,False,False,,,0,0,0,False\r
310022384,False,False,,False,False,,,0,0,0,False\r
-1425710426,False,False,,False,False,,,0,0,0,False\r
-1807971648,False,False,,False,False,,,0,0,0,False\r
268640447,False,False,,False,False,,,0,0,0,False\r
1199575543,False,False,,False,False,,,0,0,0,False\r
-1451048989,False,False,,False,False,,,0,0,0,False\r
-1820794030,False,False,,False,False,,,0,0,0,False\r
871235082,False,False,,False,False,,,0,0,0,False\r
387240739,False,False,,False,False,,,0,0,0,False\r
1159228054,False,False,Bin,False,False,,,0,0,0,False\r
-626547002,False,False,,False,False,,,0,0,0,False\r
359655899,False,False,,False,False,,,0,0,0,False\r
-232172209,False,False,,False,False,,,0,0,0,False\r
-1528441435,False,False,,False,False,,,0,0,0,False\r
564388954,False,False,,False,False,,,0,0,0,False\r
1363960331,False,False,,False,False,,,0,0,0,False\r
-760874610,False,False,,False,False,,,0,0,0,False\r
1823459359,False,False,,False,False,,,0,0,0,False\r
1659152562,False,False,,False,False,,,0,0,0,False\r
477050702,False,False,,False,False,,,0,0,0,False\r
1485375733,False,False,,False,False,,,0,0,0,False\r
-1114059052,False,False,,False,False,,,0,0,0,False\r
-62256073,False,False,,False,False,,,0,0,0,False\r
1636658728,False,False,,False,False,,,0,0,0,False\r
-1518462324,False,False,,False,False,,,0,0,0,False\r
-1260306608,False,False,,False,False,,,0,0,0,False\r
1425494045,False,False,,False,False,,,0,0,0,False\r
-1614041568,False,False,,False,False,,,0,0,0,False\r
-1051912790,False,False,,False,False,,,0,0,0,False\r
1010867759,False,False,,False,False,,,0,0,0,False\r
-720353319,False,False,,False,False,,,0,0,0,False\r
-1997868587,False,False,,False,False,,,0,0,0,False\r
-1920103064,False,False,,False,False,,,0,0,0,False\r
-1235624607,False,False,,False,False,,,0,0,0,False\r
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False\r
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False\r
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False\r
115181910,False,False,Skeleton,False,False,,,8192,0,0,False\r
976574457,True,False,Corn,True,False,,,288,0,0,False\r
235355384,False,False,Bananas,False,False,,,0,0,0,False\r
-699333907,False,False,Strawberries,False,False,,,0,0,0,False\r
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False\r
148543530,True,False,Cherries,True,False,,,288,0,0,False\r
-1382019219,False,False,,False,False,,,0,0,0,False\r
-1403625488,False,False,,False,False,,,0,0,0,False\r
-1673904972,False,False,,False,False,,,0,0,0,False\r
1752654754,False,False,,False,False,,,0,0,0,False\r
-1748395084,False,False,,False,False,,,0,0,0,False\r
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False\r
735786885,True,False,Cranberry,True,False,,,288,0,0,False\r
-2133205155,True,False,Sugar,True,False,,,288,0,0,False\r
-667884240,False,False,Conveyor,False,False,,,64,0,0,False\r
-697441390,False,False,,False,False,,,64,0,0,False\r
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False\r
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False\r
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False\r
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False\r
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False\r
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False\r
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False\r
595306349,True,False,Seaweed,True,False,,,288,0,0,False\r
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False\r
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False\r
-184765154,False,False,,False,False,,,0,0,0,False\r
-707206359,False,False,,False,False,,,0,0,0,False\r
1134699240,False,False,,False,False,,,0,0,0,False\r
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False\r
142298503,False,False,Friends Poster,False,False,,,2,0,0,False\r
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False\r
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False\r
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False\r
645876063,False,False,,False,False,,,0,0,0,False\r
-916942203,False,False,,False,False,,,0,0,0,False\r
345407921,False,False,,False,False,,,0,0,0,False\r
-509190559,False,False,,False,False,,,0,0,0,False\r
1274763392,False,False,,False,False,,,0,0,0,False\r
965503721,False,False,,False,False,,,0,0,0,False\r
260380903,False,False,,False,False,,,0,0,0,False\r
-89571330,False,False,,False,False,,,0,0,0,False\r
2114150010,False,False,,False,False,,,0,0,0,False\r
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False\r
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False\r
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False\r
120342736,True,False,Milk,True,False,,,288,0,0,False\r
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False\r
1377093570,True,False,Tea cups,True,False,,,288,0,0,False\r
-762638188,True,False,Tea pots,True,False,,,288,0,0,False\r
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False\r
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False\r
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False\r
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False\r
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False\r
783588616,False,False,Chocolate,False,False,,,0,0,0,False\r
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False\r
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False\r
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False\r
-1552572658,False,False,Candles,False,False,,,8192,0,0,False\r
-119593913,False,False,Pumpkin Stack,False,False,,,8192,0,0,False\r
-379172217,False,False,Witch Shelf,False,False,,,8192,0,0,False\r
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False\r
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False\r
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False\r
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False\r
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False\r
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False\r
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False\r
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False\r
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False\r
119166501,False,False,Levitation Station,False,False,,,0,0,0,False\r
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False\r
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False\r
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False\r
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False\r
-1835366879,False,False,,False,False,,,0,0,0,False\r
2031496644,False,False,,False,False,,,0,0,0,False\r
1391464545,False,False,,False,False,,,0,0,0,False\r
477535207,False,False,,False,False,,,0,0,0,False\r
923307040,False,False,,False,False,,,0,0,0,False\r
-1090855913,False,False,,False,False,,,0,0,0,False\r
50273892,False,False,,False,False,,,0,0,0,False\r
-70663877,False,False,,False,False,,,0,0,0,False\r
-2123542635,False,False,,False,False,,,0,0,0,False\r
423254987,False,False,Preserving Station,False,False,,,256,0,0,False\r
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False\r
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False\r
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False\r
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False\r
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False\r
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False\r
-872135723,False,False,,False,False,,,0,0,0,False\r
-1879606524,False,False,,False,False,,,0,0,0,False\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False`,Pa=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing"],Ba=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean"],j=ka.split(`\r
`).map(e=>{const a=e.split(",");let s={};for(let l=0;l<a.length;l++){let F;switch(Ba[l]){case"number":F=Number(a[l]);break;case"boolean":F=a[l]==="True";break;case"number[]":a[l]===""?F=[]:F=a[l].split(":").map(r=>Number(r));break;default:F=a[l]}s[Pa[l]]=F}return s});class Ra{constructor(a){_(this,"Staple");_(this,"Tags");_(this,"StapleWhenMissing");_(this,"Appliance");_(this,"IsRemoved");_(this,"Filter");_(this,"DecorationRequired");_(this,"SellAsUpgrade");this.Appliance=a,this.Tags=a.ShoppingTags,this.DecorationRequired=a.ThemeRequired,this.SellAsUpgrade=a.IsPurchasableAsUpgrade,this.Filter=a.ShopRequirementFilter,this.StapleWhenMissing=a.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(a){return a&1?this.Staple!==0:a&this.Tags?this.Staple===0:!1}}var g=(e=>(e[e.NonStaple=0]="NonStaple",e[e.FixedStaple=1]="FixedStaple",e[e.BonusStaple=2]="BonusStaple",e[e.WhenMissing=3]="WhenMissing",e))(g||{}),y=(e=>(e[e.None=0]="None",e[e.Basic=1]="Basic",e[e.Decoration=2]="Decoration",e[e.Technology=4]="Technology",e[e.FrontOfHouse=8]="FrontOfHouse",e[e.Plumbing=16]="Plumbing",e[e.Cooking=32]="Cooking",e[e.Automation=64]="Automation",e[e.Christmas=128]="Christmas",e[e.Misc=256]="Misc",e[e.Office=512]="Office",e[e.BlueprintUpgrader=1024]="BlueprintUpgrader",e[e.BlueprintStore=2048]="BlueprintStore",e[e.Halloween=4096]="Halloween",e[e.SpecialEvent=8192]="SpecialEvent",e))(y||{});const me={DefaultShoppingTag:892};var Me=(e=>(e[e.None=0]="None",e[e.RefreshableProvider=1]="RefreshableProvider",e))(Me||{}),Y=(e=>(e[e.Null=0]="Null",e[e.Exclusive=1]="Exclusive",e[e.Affordable=2]="Affordable",e[e.Charming=4]="Charming",e[e.Formal=8]="Formal",e[e.Kitchen=16]="Kitchen",e))(Y||{});const Na=38;function Ma(e,a){let s=e.length;for(;s-- >1;){let l=a.range(0,s+1);[e[s],e[l]]=[e[l],e[s]]}return e}const Ua="bdghjmqrtvwxy346789";class H{constructor(a,s){_(this,"fixedSeed");_(this,"instance");_(this,"random");typeof a=="string"&&(a=Ea(a)),this.fixedSeed=a,this.instance=s,this.random=new Da(a+Math.imul(124192293,s))}useSubcontext(a){return new H(this.fixedSeed,124192293*a+this.instance)}}class Da{constructor(a){_(this,"seed");const s=u=>Math.imul(1812433253,u)+1>>0,l=a>>0,F=s(l),r=s(F),t=s(r);this.seed=[l,F,r,t]}get value(){let a=this.seed.shift(),s=this.seed[2];return a^=a<<11,a^=a>>>8,s^=s>>>19,s=(s^a)>>0,this.seed.push(s),s}range(a,s){return(this.value>>>0)%(s-a)+a}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(a){return a[this.range(0,a.length)]}}function Ea(e){const s=new TextEncoder().encode(e);let l=5381,F=s.length;for(;F>0;){let r=--F;l=(l<<5)+l+s[r]}return l>>0}const Aa=j.filter(e=>e.IsPurchasable||e.IsPurchasableAsUpgrade).length;class $a{constructor(a,s=0){_(this,"seed");_(this,"mapSize");_(this,"numTiles");_(this,"baseUpgradeChance");_(this,"OwnedAppliances");_(this,"Cards");this.seed=a,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=s,this.OwnedAppliances=[],this.Cards=[]}getLayoutInfo(){const s=new H(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,F;switch(s){case 0:F=70,l=2;break;case 4:F=84,l=2;break;case 1:case 5:F=60,l=1;break;case 2:case 6:F=9*13,l=3;break;case 3:case 7:F=12*16,l=4;break;default:throw new Error}return[l,F]}addCard(a){a!==void 0&&(this.Cards.push(a),this.OwnedAppliances=this.OwnedAppliances.concat(a.IngredientProviders.flatMap(s=>j.filter(l=>l.ID===s))))}getPrngAdvancements(a){let s=0;for(const l of a)s+=l.blueprintCount*(Aa-1+1),l.spawnInside||(s+=Ia(l.playerInside,this.numTiles)),s+=Na;return s}buildShopOptions(a,s,l){let F=[];for(const t of j)if(!(!t.IsPurchasable&&!t.IsPurchasableAsUpgrade)){var r=new Ra(t);if(r.Staple==g.NonStaple||r.Staple==g.WhenMissing){if((r.Tags&y.Basic)>y.None)r.Staple=g.FixedStaple;else if(r.StapleWhenMissing){const i=r.Appliance.Name;i!="Research Desk"&&i!="Blueprint Cabinet"&&i!="Plates"&&console.log(`Unexpected ${r.Appliance.Name} StapleWhenMissing Appliance`),a.includes(r.Appliance)?r.Staple=g.NonStaple:r.Staple=g.WhenMissing}}const n=r.Appliance;if(n.SellOnlyAsDuplicate)a.includes(n)||(r.IsRemoved=!0);else if(n.RequiresForShop.length>0){let i=!1;for(const f of n.RequiresForShop)a.some(p=>p.ID===f)&&(i=!0);r.IsRemoved=!i}else n.SellOnlyAsUnique&&(n.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${n.Name}, ${n.ID}`),r.IsRemoved=!0);r.Filter==Me.RefreshableProvider&&(r.IsRemoved=!0),r.DecorationRequired!=Y.Null&&r.DecorationRequired!=s&&(r.IsRemoved=!0),n.RequiresProcessForShop.length>0&&(n.RequiresProcessForShop.some(i=>l.some(f=>f.RequiredProcesses.includes(i)))||(r.IsRemoved=!0)),F.push(r)}return F}initRandom(a){return new H(this.seed,823828*1231231+a)}getAppliances(a,s){const l=a.length===1,F=this.buildShopOptions(this.OwnedAppliances,Y.Null,this.Cards),r=this.initRandom(s).random;let t=this.getPrngAdvancements(a.slice(0,a.length-1));for(;t--;)r.value;let u=a[a.length-1].blueprintCount,n;if(s%5==0){l&&(u=8),n=[];for(let i=0;i<u;i++)n[i]=y.Decoration}else if(a.length>1){n=[];for(let i=0;i<u;i++)n[i]=me.DefaultShoppingTag}else{const i=me.DefaultShoppingTag,f=Math.max(1,u),p=Math.max(0,Math.min(4,Math.max(2,4-Math.floor(s/5)),f)),d=Math.max(0,f-p);u=f,n=[];for(let h=0;h<p;h++)n[h]=y.Basic;for(let h=p;h<p+d;h++)n[h]=i}{const i=[...F],f=[],p=1-(1-Math.floor(s/5)*.1)*(1-this.baseUpgradeChance),d=[];for(let h=0;h<u;h++){const E=n[h],U=r.valueFloat<p;Ma(i,r);for(let M=0;M<i.length;M++){const T=i[M];if(!T.IsRemoved&&!d.includes(T.Appliance)&&!!T.MatchesRequestTags(E)&&!(!U&&T.Staple==g.NonStaple&&T.SellAsUpgrade)){E!=y.Decoration&&d.push(T.Appliance),f[h]=T.Appliance;break}}f[h]==null&&console.log(`Wasn't able to find a valid roll for blueprint ${h}`)}return f}}}function Ia(e,a){return e?a-2:a-1}function La({ghostCount:e=2,bps:a}){return se(B,{children:a.map((s,l)=>se("span",{class:l+e<a.length?"":"ghost",children:s+(l<a.length-1?", ":"")}))})}var k=(e=>(e[e.Generic=0]="Generic",e[e.Dish=1]="Dish",e[e.PrimaryTheme=3]="PrimaryTheme",e[e.SecondaryTheme=4]="SecondaryTheme",e[e.Franchise=5]="Franchise",e[e.Special=6]="Special",e))(k||{}),C=(e=>(e[e.Base=0]="Base",e[e.Main=1]="Main",e[e.Extra=2]="Extra",e[e.Side=3]="Side",e[e.Starter=4]="Starter",e[e.Dessert=5]="Dessert",e[e.Null=6]="Null",e))(C||{});const xa=`373996608,Ice Cream,1,,,,-1533430406,False,False,5\r
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0\r
-1199743580,Breakfast Beans,1,-2075899,,1972879238,1807525572:-957949759,False,False,2\r
1436814208,Breakfast Eggs,1,-2075899,,1972879238:2087693779,961148621,False,False,2\r
-1998930853,Breakfast Extras,1,-2075899,,2087693779,-712909563:-1097889139,False,False,2\r
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0\r
965292477,Cheeseburgers,1,-1778969928,,1972879238:2087693779,759552160:380220741:385684499:-117339838,False,False,2\r
-1091625127,Fresh Patties,1,-1778969928,,1972879238:2087693779,759552160:380220741:961148621:-484165118,False,False,2\r
1298035216,Burger Toppings,1,-1778969928,,1972879238:2087693779,759552160:380220741:-712909563:385684499:-2042103798,False,False,2\r
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2\r
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1\r
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1\r
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-266993023:-905438738,False,False,5\r
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0\r
-1992316049,Mushroom Pie,1,-133939790,,2087693779:1972879238:-523839730,-1097889139:925796718:-266993023,False,False,1\r
-1802123036,Vegetable Pies,1,-133939790,,2087693779:1972879238:-523839730,925796718:-266993023:-452101383:-1573812073,False,False,1\r
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1\r
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1\r
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,1972879238:2087693779,-1097889139:-266993023:-2042103798:-957949759,False,False,2\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,1972879238,-957949759:-2042103798:-266993023:-1353971407,False,False,2\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,2087693779,-1097889139,False,False,2\r
-851525606,Steak Topping - Tomato,1,-959076098,,2087693779,-712909563,False,False,2\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1\r
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0\r
-204178430,Steak Stir Fry,1,-1653221873,,2087693779:1972879238,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5\r
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0\r
1434421325,Mushroom Pizza,1,550743424,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2\r
-2071275506,Onion Pizza,1,550743424,,2087693779:-1706154991:-523839730,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2\r
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3\r
1642577536,Herd Mentality,0,,,,,False,False,6\r
-1737101581,Health and Safety,0,,,,,False,False,6\r
-2040314977,Picky Eaters,0,,,,,False,False,6\r
73422455,Tipping Culture,0,,,,,False,False,6\r
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3\r
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718,False,False,5\r
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4\r
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4\r
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6\r
61056284,Trick - Risky Reservations,6,,,,,False,False,6\r
2112990883,Trick - Freak Fires,6,,,,,False,False,6\r
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6\r
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6\r
83673522,Trick - Spooky Solos,6,,,,,False,False,6\r
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6\r
79859072,Trick - Cowardly Customers,6,,,,,False,False,6\r
-2123879305,Trick - Full of Friends,6,,,,,False,False,6\r
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6\r
-1839415999,Trick - Spatial Scares,6,,,,,False,False,6\r
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6\r
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6\r
524188336,Trick - Foggy Food,6,,,,,False,False,6\r
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6\r
561747534,Trick - Careful Conveyance,6,,,,,False,False,6\r
-1921275517,Trick - Tiring Times,6,,,,,False,False,6\r
319209671,Community,6,,,,,False,False,6\r
536093200,Nut Roast,1,1551533879,,2087693779:-1706154991,1834063794:380220741:-2042103798,True,False,1\r
-1405391769,Affogato,1,16318784,,,-1609758240:-1533430406,False,False,5\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4\r
12170609,Cherry Pie,1,,,1972879238,148543530:925796718,False,False,5\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3\r
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0\r
-361249036,Christmas Rush,6,,,,,False,False,6\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,2087693779,735786885:-2133205155,False,False,2\r
-1460640973,Turkey - Gravy,1,1551533879,,1972879238,-2042103798:-957949759:-266993023,False,False,2\r
-1243742384,Turkey - Stuffing,1,1551533879,,2087693779:1972879238:-523839730,-2042103798:925796718:-266993023,False,False,2\r
-1273613313,Lucky Gift,6,,,,,False,False,6\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3\r
-437161441,Bamboo Stir Fry,1,-1653221873,,2087693779:1972879238,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0\r
137627410,Seaweed,1,367917843,,1972879238,595306349,False,False,2\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4\r
1642878331,Mushroom Stir Fry,1,-1653221873,,2087693779:1972879238,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1\r
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2\r
-2106646073,Couples,6,,,,,False,False,6\r
2028238661,Double Dates,0,-2106646073,,,,False,False,6\r
587399881,First Dates,0,-2106646073,,,,False,False,6\r
251686519,Double Brew,0,746549422,,,,False,False,6\r
2079359756,Slow Brew Coffee,1,746549422,,,,False,False,6\r
1103885337,Cake Stand,1,16318784,,,143484231,False,False,2\r
16318784,Black Coffee,1,,,-1316622579,-1609758240,False,False,0\r
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2\r
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2\r
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,2\r
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,2\r
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2\r
1316998108,Sponge Cake,1,1113735761,,-1706154991:-523839730,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5\r
1609120418,Brownies,1,1113735761,,-1706154991:-523839730,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5\r
627241196,Cupcake,1,1113735761,,-1706154991:-523839730,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5\r
-1166412657,Doughnut,1,1113735761,,-523839730:1972879238,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5\r
1113735761,Cakes,0,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0\r
2055765569,Double Helpings,0,-347199069,,,,False,False,6\r
-347199069,All You Can Eat,0,,,,,False,False,6\r
233335391,Personalised Waiting,0,,,,,False,False,6\r
-1815978981,Closing Time?,0,,,,,False,False,6\r
-287956430,Leisurely Eating,0,,,,,False,False,6\r
220354841,Sedate Atmosphere,0,,,,,False,False,6\r
-37551439,Dinner Rush,0,,1958825350,,,False,False,6\r
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6\r
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6\r
-523195599,Large Groups,0,-1183014556,,,,False,False,6\r
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6\r
165138001,Photographic Memory,0,,,,,False,False,6\r
-28708234,Empathy,0,,,,,False,False,6\r
-1617744928,Blindfolded Chefs,0,,,,,False,False,6\r
1530184692,Instant Service,0,,746549422,,,False,False,6\r
113582858,Discounts,0,,,,,False,False,6\r
-913531466,Victorian Standards,0,,,,,False,False,6\r
-53330922,Lunch Rush,0,,1958825350,,,False,False,6\r
-491994319,Splash Zone,0,,,,,False,False,6\r
1151685289,Relaxed Atmosphere,0,,,,,False,False,6\r
73387665,Advertising,0,1765310572,,,,False,False,6\r
1765310572,Advertising,0,,,,,False,False,6\r
2079763934,Morning Rush,0,,1958825350,,,False,False,6\r
1914014233,Simplicity,0,,,,,False,False,6\r
-534291083,High Expectations,0,,,,,False,False,6\r
-957080051,High Standards,0,,1356267749,,,False,False,6\r
1103452725,High Quality,0,,,,,False,False,6\r
-1857686620,Affordable,3,,,,,False,False,6\r
1293847744,Charming,3,,,,,False,False,6\r
-1323758054,Exclusive,3,,,,,False,False,6\r
-1641333859,Formal,3,,,,,False,False,6\r
409052852,Variety,5,,319209671:16318784,,,False,False,6\r
-1205203705,Careful Accounting,5,,,,,False,False,6\r
-947047181,Mandatory Tips,5,,,,,False,False,6\r
1298492736,Grabber,5,,,,,False,False,6\r
1173444265,Wash Basin,5,,,,,False,False,6\r
-1096314451,Savings,5,,,,,False,False,6\r
2022427578,Reincarnation,5,,,,,False,False,6\r
-401283600,Preparation Time,5,,,,,False,False,6\r
-357483693,Double Homework,5,,,,,False,False,6\r
868780472,Catalogue,5,,,,,False,False,6\r
-1418317596,Coupons,5,,,,,False,False,6\r
-98765415,Supplier Error,5,,,,,False,False,6\r
1618418478,Bootstrapping,5,,,,,False,False,6\r
1543829883,Second Helpings,5,,,,,False,False,6\r
-1010143518,Loyal Customer,5,,,,,False,False,6\r
-1269806478,High Tech Suppliers,5,,,,,False,False,6\r
1818403570,Conveyors,5,,,,,False,False,6\r
-1121427945,Coffee Tables,5,,,,,False,False,6\r
1101419251,Floor Protectors,5,,,,,False,False,6\r
-220105135,Flower Pots,5,,,,,False,False,6\r
-178381693,Metal Table,5,,,,,False,False,6\r
-373772933,Simple Cloth Table,5,,,,,False,False,6`,X=xa.split(`\r
`).filter(e=>e).map(e=>{var $,L;const[a,s,l,F,r,t,u,n,i,f]=e.split(","),p=Number(a),d=Number(l),h=F!=null&&F.length?F.split(":").map(m=>Number(m)):[],E=r.length?r.split(":").map(m=>Number(m)):[],ee=t!=null&&t.length?($=t==null?void 0:t.split(":"))==null?void 0:$.map(m=>Number(m)):[],U=u!=null&&u.length?(L=u==null?void 0:u.split(":"))==null?void 0:L.map(m=>Number(m)):[],M=n==="True",T=i==="True",ae=Number(f);return{ID:p,Name:s,UnlockGroup:d,Requires:h,BlockedBy:E,RequiredProcesses:ee,IngredientProviders:U,isMain:M,isStarterOrSide:T,DishType:ae}});function Wa(e,a=!0){const s=a&&e.some(l=>l.Name==="Community");return X.filter(l=>!(e.some(F=>F.ID===l.ID)||l.BlockedBy.some(F=>e.some(r=>r.ID===F))||l.Requires.some(F=>!e.some(r=>r.ID===F))||l.isStarterOrSide&&!e.some(F=>F.isMain)||!s&&l.DishType===C.Base)).sort((l,F)=>l.ID-F.ID)}const Va=[{ID:447437163,Name:"Country",UnlockGroup:k.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:C.Null},{ID:2002876295,Name:"City",UnlockGroup:k.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:C.Null},{ID:-1864906012,Name:"Alpine",UnlockGroup:k.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:C.Null},X.filter(e=>e.Name==="Community")[0],{ID:1766067755,Name:"Romantic",UnlockGroup:k.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:C.Null},{ID:1958825350,Name:"Turbo",UnlockGroup:k.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:C.Null}],Ga=["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(e=>X.filter(a=>a.Name===e)[0]);export{j as A,C as D,Z as F,La as G,Ua as I,Va as R,$a as S,qe as T,X as U,He as _,H as a,k as b,Ga as c,Da as d,Wa as g,Se as h,ge as p,be as s,qa as w,O as y};
