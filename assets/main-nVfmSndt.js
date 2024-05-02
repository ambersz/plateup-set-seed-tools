var Dl=Object.defineProperty;var Bl=(e,a,l)=>a in e?Dl(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;var k=(e,a,l)=>(Bl(e,typeof a!="symbol"?a+"":a,l),l);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();var me,p,Oa,Z,sa,Ia,Ae,Ma,he={},Aa=[],Ol=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,we=Array.isArray;function U(e,a){for(var l in a)e[l]=a[l];return e}function La(e){var a=e.parentNode;a&&a.removeChild(e)}function b(e,a,l){var s,r,t,n={};for(t in a)t=="key"?s=a[t]:t=="ref"?r=a[t]:n[t]=a[t];if(arguments.length>2&&(n.children=arguments.length>3?me.call(arguments,2):l),typeof e=="function"&&e.defaultProps!=null)for(t in e.defaultProps)n[t]===void 0&&(n[t]=e.defaultProps[t]);return fe(e,n,s,r,null)}function fe(e,a,l,s,r){var t={type:e,props:a,key:l,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Oa,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(t),t}function Ua(){return{current:null}}function N(e){return e.children}function M(e,a){this.props=e,this.context=a}function ne(e,a){if(a==null)return e.__?ne(e.__,e.__i+1):null;for(var l;a<e.__k.length;a++)if((l=e.__k[a])!=null&&l.__e!=null)return l.__e;return typeof e.type=="function"?ne(e):null}function $a(e){var a,l;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,a=0;a<e.__k.length;a++)if((l=e.__k[a])!=null&&l.__e!=null){e.__e=e.__c.base=l.__e;break}return $a(e)}}function Le(e){(!e.__d&&(e.__d=!0)&&Z.push(e)&&!be.__r++||sa!==p.debounceRendering)&&((sa=p.debounceRendering)||Ia)(be)}function be(){var e,a,l,s,r,t,n,i,o;for(Z.sort(Ae);e=Z.shift();)e.__d&&(a=Z.length,s=void 0,t=(r=(l=e).__v).__e,i=[],o=[],(n=l.__P)&&((s=U({},r)).__v=r.__v+1,p.vnode&&p.vnode(s),ze(n,s,r,l.__n,n.ownerSVGElement!==void 0,32&r.__u?[t]:null,i,t??ne(r),!!(32&r.__u),o),s.__.__k[s.__i]=s,Ha(i,s,o),s.__e!=t&&$a(s)),Z.length>a&&Z.sort(Ae));be.__r=0}function Wa(e,a,l,s,r,t,n,i,o,u,c){var F,h,_,m,g,d=s&&s.__k||Aa,v=a.length;for(l.__d=o,Il(l,a,d),o=l.__d,F=0;F<v;F++)(_=l.__k[F])!=null&&typeof _!="boolean"&&typeof _!="function"&&(h=_.__i===-1?he:d[_.__i]||he,_.__i=F,ze(e,_,h,r,t,n,i,o,u,c),m=_.__e,_.ref&&h.ref!=_.ref&&(h.ref&&Ge(h.ref,null,_),c.push(_.ref,_.__c||m,_)),g==null&&m!=null&&(g=m),65536&_.__u||h.__k===_.__k?o=Va(_,o,e):typeof _.type=="function"&&_.__d!==void 0?o=_.__d:m&&(o=m.nextSibling),_.__d=void 0,_.__u&=-196609);l.__d=o,l.__e=g}function Il(e,a,l){var s,r,t,n,i,o=a.length,u=l.length,c=u,F=0;for(e.__k=[],s=0;s<o;s++)(r=e.__k[s]=(r=a[s])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?fe(null,r,null,null,r):we(r)?fe(N,{children:r},null,null,null):r.__b>0?fe(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,i=Ml(r,l,n=s+F,c),r.__i=i,t=null,i!==-1&&(c--,(t=l[i])&&(t.__u|=131072)),t==null||t.__v===null?(i==-1&&F--,typeof r.type!="function"&&(r.__u|=65536)):i!==n&&(i===n+1?F++:i>n?c>o-n?F+=i-n:F--:F=i<n&&i==n-1?i-n:0,i!==s+F&&(r.__u|=65536))):(t=l[s])&&t.key==null&&t.__e&&(t.__e==e.__d&&(e.__d=ne(t)),Ue(t,t,!1),l[s]=null,c--);if(c)for(s=0;s<u;s++)(t=l[s])!=null&&!(131072&t.__u)&&(t.__e==e.__d&&(e.__d=ne(t)),Ue(t,t))}function Va(e,a,l){var s,r;if(typeof e.type=="function"){for(s=e.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=e,a=Va(s[r],a,l));return a}return e.__e!=a&&(l.insertBefore(e.__e,a||null),a=e.__e),a&&a.nextSibling}function $(e,a){return a=a||[],e==null||typeof e=="boolean"||(we(e)?e.some(function(l){$(l,a)}):a.push(e)),a}function Ml(e,a,l,s){var r=e.key,t=e.type,n=l-1,i=l+1,o=a[l];if(o===null||o&&r==o.key&&t===o.type)return l;if(s>(o!=null&&!(131072&o.__u)?1:0))for(;n>=0||i<a.length;){if(n>=0){if((o=a[n])&&!(131072&o.__u)&&r==o.key&&t===o.type)return n;n--}if(i<a.length){if((o=a[i])&&!(131072&o.__u)&&r==o.key&&t===o.type)return i;i++}}return-1}function ra(e,a,l){a[0]==="-"?e.setProperty(a,l??""):e[a]=l==null?"":typeof l!="number"||Ol.test(a)?l:l+"px"}function Te(e,a,l,s,r){var t;e:if(a==="style")if(typeof l=="string")e.style.cssText=l;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(a in s)l&&a in l||ra(e.style,a,"");if(l)for(a in l)s&&l[a]===s[a]||ra(e.style,a,l[a])}else if(a[0]==="o"&&a[1]==="n")t=a!==(a=a.replace(/(PointerCapture)$|Capture$/,"$1")),a=a.toLowerCase()in e?a.toLowerCase().slice(2):a.slice(2),e.l||(e.l={}),e.l[a+t]=l,l?s?l.u=s.u:(l.u=Date.now(),e.addEventListener(a,t?na:ta,t)):e.removeEventListener(a,t?na:ta,t);else{if(r)a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(a!=="width"&&a!=="height"&&a!=="href"&&a!=="list"&&a!=="form"&&a!=="tabIndex"&&a!=="download"&&a!=="rowSpan"&&a!=="colSpan"&&a!=="role"&&a in e)try{e[a]=l??"";break e}catch{}typeof l=="function"||(l==null||l===!1&&a[4]!=="-"?e.removeAttribute(a):e.setAttribute(a,l))}}function ta(e){var a=this.l[e.type+!1];if(e.t){if(e.t<=a.u)return}else e.t=Date.now();return a(p.event?p.event(e):e)}function na(e){return this.l[e.type+!0](p.event?p.event(e):e)}function ze(e,a,l,s,r,t,n,i,o,u){var c,F,h,_,m,g,d,v,T,y,R,E,A,K,J,D=a.type;if(a.constructor!==void 0)return null;128&l.__u&&(o=!!(32&l.__u),t=[i=a.__e=l.__e]),(c=p.__b)&&c(a);e:if(typeof D=="function")try{if(v=a.props,T=(c=D.contextType)&&s[c.__c],y=c?T?T.props.value:c.__:s,l.__c?d=(F=a.__c=l.__c).__=F.__E:("prototype"in D&&D.prototype.render?a.__c=F=new D(v,y):(a.__c=F=new M(v,y),F.constructor=D,F.render=Ll),T&&T.sub(F),F.props=v,F.state||(F.state={}),F.context=y,F.__n=s,h=F.__d=!0,F.__h=[],F._sb=[]),F.__s==null&&(F.__s=F.state),D.getDerivedStateFromProps!=null&&(F.__s==F.state&&(F.__s=U({},F.__s)),U(F.__s,D.getDerivedStateFromProps(v,F.__s))),_=F.props,m=F.state,F.__v=a,h)D.getDerivedStateFromProps==null&&F.componentWillMount!=null&&F.componentWillMount(),F.componentDidMount!=null&&F.__h.push(F.componentDidMount);else{if(D.getDerivedStateFromProps==null&&v!==_&&F.componentWillReceiveProps!=null&&F.componentWillReceiveProps(v,y),!F.__e&&(F.shouldComponentUpdate!=null&&F.shouldComponentUpdate(v,F.__s,y)===!1||a.__v===l.__v)){for(a.__v!==l.__v&&(F.props=v,F.state=F.__s,F.__d=!1),a.__e=l.__e,a.__k=l.__k,a.__k.forEach(function(I){I&&(I.__=a)}),R=0;R<F._sb.length;R++)F.__h.push(F._sb[R]);F._sb=[],F.__h.length&&n.push(F);break e}F.componentWillUpdate!=null&&F.componentWillUpdate(v,F.__s,y),F.componentDidUpdate!=null&&F.__h.push(function(){F.componentDidUpdate(_,m,g)})}if(F.context=y,F.props=v,F.__P=e,F.__e=!1,E=p.__r,A=0,"prototype"in D&&D.prototype.render){for(F.state=F.__s,F.__d=!1,E&&E(a),c=F.render(F.props,F.state,F.context),K=0;K<F._sb.length;K++)F.__h.push(F._sb[K]);F._sb=[]}else do F.__d=!1,E&&E(a),c=F.render(F.props,F.state,F.context),F.state=F.__s;while(F.__d&&++A<25);F.state=F.__s,F.getChildContext!=null&&(s=U(U({},s),F.getChildContext())),h||F.getSnapshotBeforeUpdate==null||(g=F.getSnapshotBeforeUpdate(_,m)),Wa(e,we(J=c!=null&&c.type===N&&c.key==null?c.props.children:c)?J:[J],a,l,s,r,t,n,i,o,u),F.base=a.__e,a.__u&=-161,F.__h.length&&n.push(F),d&&(F.__E=F.__=null)}catch(I){a.__v=null,o||t!=null?(a.__e=i,a.__u|=o?160:32,t[t.indexOf(i)]=null):(a.__e=l.__e,a.__k=l.__k),p.__e(I,a,l)}else t==null&&a.__v===l.__v?(a.__k=l.__k,a.__e=l.__e):a.__e=Al(l.__e,a,l,s,r,t,n,o,u);(c=p.diffed)&&c(a)}function Ha(e,a,l){a.__d=void 0;for(var s=0;s<l.length;s++)Ge(l[s],l[++s],l[++s]);p.__c&&p.__c(a,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(t){t.call(r)})}catch(t){p.__e(t,r.__v)}})}function Al(e,a,l,s,r,t,n,i,o){var u,c,F,h,_,m,g,d=l.props,v=a.props,T=a.type;if(T==="svg"&&(r=!0),t!=null){for(u=0;u<t.length;u++)if((_=t[u])&&"setAttribute"in _==!!T&&(T?_.localName===T:_.nodeType===3)){e=_,t[u]=null;break}}if(e==null){if(T===null)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",T):document.createElement(T,v.is&&v),t=null,i=!1}if(T===null)d===v||i&&e.data===v||(e.data=v);else{if(t=t&&me.call(e.childNodes),d=l.props||he,!i&&t!=null)for(d={},u=0;u<e.attributes.length;u++)d[(_=e.attributes[u]).name]=_.value;for(u in d)_=d[u],u=="children"||(u=="dangerouslySetInnerHTML"?F=_:u==="key"||u in v||Te(e,u,null,_,r));for(u in v)_=v[u],u=="children"?h=_:u=="dangerouslySetInnerHTML"?c=_:u=="value"?m=_:u=="checked"?g=_:u==="key"||i&&typeof _!="function"||d[u]===_||Te(e,u,_,d[u],r);if(c)i||F&&(c.__html===F.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),a.__k=[];else if(F&&(e.innerHTML=""),Wa(e,we(h)?h:[h],a,l,s,r&&T!=="foreignObject",t,n,t?t[0]:l.__k&&ne(l,0),i,o),t!=null)for(u=t.length;u--;)t[u]!=null&&La(t[u]);i||(u="value",m!==void 0&&(m!==e[u]||T==="progress"&&!m||T==="option"&&m!==d[u])&&Te(e,u,m,d[u],!1),u="checked",g!==void 0&&g!==e[u]&&Te(e,u,g,d[u],!1))}return e}function Ge(e,a,l){try{typeof e=="function"?e(a):e.current=a}catch(s){p.__e(s,l)}}function Ue(e,a,l){var s,r;if(p.unmount&&p.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Ge(s,null,a)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(t){p.__e(t,a)}s.base=s.__P=null,e.__c=void 0}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&Ue(s[r],a,l||typeof e.type!="function");l||e.__e==null||La(e.__e),e.__=e.__e=e.__d=void 0}function Ll(e,a,l){return this.constructor(e,l)}function Fe(e,a,l){var s,r,t,n;p.__&&p.__(e,a),r=(s=typeof l=="function")?null:l&&l.__k||a.__k,t=[],n=[],ze(a,e=(!s&&l||a).__k=b(N,null,[e]),r||he,he,a.ownerSVGElement!==void 0,!s&&l?[l]:r?null:a.firstChild?me.call(a.childNodes):null,t,!s&&l?l:r?r.__e:a.firstChild,s,n),Ha(t,e,n)}function qa(e,a){Fe(e,a,qa)}function Ul(e,a,l){var s,r,t,n,i=U({},e.props);for(t in e.type&&e.type.defaultProps&&(n=e.type.defaultProps),a)t=="key"?s=a[t]:t=="ref"?r=a[t]:i[t]=a[t]===void 0&&n!==void 0?n[t]:a[t];return arguments.length>2&&(i.children=arguments.length>3?me.call(arguments,2):l),fe(e.type,i,s||e.key,r||e.ref,null)}function V(e,a){var l={__c:a="__cC"+Ma++,__:e,Consumer:function(s,r){return s.children(r)},Provider:function(s){var r,t;return this.getChildContext||(r=[],(t={})[a]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&r.some(function(i){i.__e=!0,Le(i)})},this.sub=function(n){r.push(n);var i=n.componentWillUnmount;n.componentWillUnmount=function(){r.splice(r.indexOf(n),1),i&&i.call(n)}}),s.children}};return l.Provider.__=l.Consumer.contextType=l}me=Aa.slice,p={__e:function(e,a,l,s){for(var r,t,n;a=a.__;)if((r=a.__c)&&!r.__)try{if((t=r.constructor)&&t.getDerivedStateFromError!=null&&(r.setState(t.getDerivedStateFromError(e)),n=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,s||{}),n=r.__d),n)return r.__E=r}catch(i){e=i}throw e}},Oa=0,M.prototype.setState=function(e,a){var l;l=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=U({},this.state),typeof e=="function"&&(e=e(U({},l),this.props)),e&&U(l,e),e!=null&&this.__v&&(a&&this._sb.push(a),Le(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Le(this))},M.prototype.render=N,Z=[],Ia=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ae=function(e,a){return e.__v.__b-a.__v.__b},be.__r=0,Ma=0;const $l="modulepreload",Wl=function(e){return"/plateup-set-seed-tools/"+e},Fa={},B=function(a,l,s){let r=Promise.resolve();if(l&&l.length>0){const t=document.getElementsByTagName("link");r=Promise.all(l.map(n=>{if(n=Wl(n),n in Fa)return;Fa[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!s)for(let F=t.length-1;F>=0;F--){const h=t[F];if(h.href===n&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${o}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":$l,i||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),i)return new Promise((F,h)=>{c.addEventListener("load",F),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})}))}return r.then(()=>a()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})};var W,S,Be,ia,ie=0,ja=[],ye=[],oa=p.__b,ua=p.__r,ca=p.diffed,fa=p.__c,_a=p.unmount;function ee(e,a){p.__h&&p.__h(S,e,ie||a),ie=0;var l=S.__H||(S.__H={__:[],__h:[]});return e>=l.__.length&&l.__.push({__V:ye}),l.__[e]}function oe(e){return ie=1,Ke(Ja,e)}function Ke(e,a,l){var s=ee(W++,2);if(s.t=e,!s.__c&&(s.__=[l?l(a):Ja(void 0,a),function(i){var o=s.__N?s.__N[0]:s.__[0],u=s.t(o,i);o!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=S,!S.u)){var r=function(i,o,u){if(!s.__c.__H)return!0;var c=s.__c.__H.__.filter(function(h){return h.__c});if(c.every(function(h){return!h.__N}))return!t||t.call(this,i,o,u);var F=!1;return c.forEach(function(h){if(h.__N){var _=h.__[0];h.__=h.__N,h.__N=void 0,_!==h.__[0]&&(F=!0)}}),!(!F&&s.__c.props===i)&&(!t||t.call(this,i,o,u))};S.u=!0;var t=S.shouldComponentUpdate,n=S.componentWillUpdate;S.componentWillUpdate=function(i,o,u){if(this.__e){var c=t;t=void 0,r(i,o,u),t=c}n&&n.call(this,i,o,u)},S.shouldComponentUpdate=r}return s.__N||s.__}function Ee(e,a){var l=ee(W++,3);!p.__s&&Je(l.__H,a)&&(l.__=e,l.i=a,S.__H.__h.push(l))}function ae(e,a){var l=ee(W++,4);!p.__s&&Je(l.__H,a)&&(l.__=e,l.i=a,S.__h.push(l))}function X(e){return ie=5,z(function(){return{current:e}},[])}function za(e,a,l){ie=6,ae(function(){return typeof e=="function"?(e(a()),function(){return e(null)}):e?(e.current=a(),function(){return e.current=null}):void 0},l==null?l:l.concat(e))}function z(e,a){var l=ee(W++,7);return Je(l.__H,a)?(l.__V=e(),l.i=a,l.__h=e,l.__V):l.__}function le(e,a){return ie=8,z(function(){return e},a)}function P(e){var a=S.context[e.__c],l=ee(W++,9);return l.c=e,a?(l.__==null&&(l.__=!0,a.sub(S)),a.props.value):e.__}function Ga(e,a){p.useDebugValue&&p.useDebugValue(a?a(e):e)}function Vl(e){var a=ee(W++,10),l=oe();return a.__=e,S.componentDidCatch||(S.componentDidCatch=function(s,r){a.__&&a.__(s,r),l[1](s)}),[l[0],function(){l[1](void 0)}]}function Ka(){var e=ee(W++,11);if(!e.__){for(var a=S.__v;a!==null&&!a.__m&&a.__!==null;)a=a.__;var l=a.__m||(a.__m=[0,0]);e.__="P"+l[0]+"-"+l[1]++}return e.__}function Hl(){for(var e;e=ja.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Se),e.__H.__h.forEach($e),e.__H.__h=[]}catch(a){e.__H.__h=[],p.__e(a,e.__v)}}p.__b=function(e){S=null,oa&&oa(e)},p.__r=function(e){ua&&ua(e),W=0;var a=(S=e.__c).__H;a&&(Be===S?(a.__h=[],S.__h=[],a.__.forEach(function(l){l.__N&&(l.__=l.__N),l.__V=ye,l.__N=l.i=void 0})):(a.__h.forEach(Se),a.__h.forEach($e),a.__h=[],W=0)),Be=S},p.diffed=function(e){ca&&ca(e);var a=e.__c;a&&a.__H&&(a.__H.__h.length&&(ja.push(a)!==1&&ia===p.requestAnimationFrame||((ia=p.requestAnimationFrame)||ql)(Hl)),a.__H.__.forEach(function(l){l.i&&(l.__H=l.i),l.__V!==ye&&(l.__=l.__V),l.i=void 0,l.__V=ye})),Be=S=null},p.__c=function(e,a){a.some(function(l){try{l.__h.forEach(Se),l.__h=l.__h.filter(function(s){return!s.__||$e(s)})}catch(s){a.some(function(r){r.__h&&(r.__h=[])}),a=[],p.__e(s,l.__v)}}),fa&&fa(e,a)},p.unmount=function(e){_a&&_a(e);var a,l=e.__c;l&&l.__H&&(l.__H.__.forEach(function(s){try{Se(s)}catch(r){a=r}}),l.__H=void 0,a&&p.__e(a,l.__v))};var ha=typeof requestAnimationFrame=="function";function ql(e){var a,l=function(){clearTimeout(s),ha&&cancelAnimationFrame(a),setTimeout(e)},s=setTimeout(l,100);ha&&(a=requestAnimationFrame(l))}function Se(e){var a=S,l=e.__c;typeof l=="function"&&(e.__c=void 0,l()),S=a}function $e(e){var a=S;e.__c=e.__(),S=a}function Je(e,a){return!e||e.length!==a.length||a.some(function(l,s){return l!==e[s]})}function Ja(e,a){return typeof a=="function"?a(e):a}function Ya(e,a){for(var l in a)e[l]=a[l];return e}function We(e,a){for(var l in e)if(l!=="__source"&&!(l in a))return!0;for(var s in a)if(s!=="__source"&&e[s]!==a[s])return!0;return!1}function Ce(e){this.props=e}function Za(e,a){function l(r){var t=this.props.ref,n=t==r.ref;return!n&&t&&(t.call?t(null):t.current=null),a?!a(this.props,r)||!n:We(this.props,r)}function s(r){return this.shouldComponentUpdate=l,b(e,r)}return s.displayName="Memo("+(e.displayName||e.name)+")",s.prototype.isReactComponent=!0,s.__f=!0,s}(Ce.prototype=new M).isPureReactComponent=!0,Ce.prototype.shouldComponentUpdate=function(e,a){return We(this.props,e)||We(this.state,a)};var da=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),da&&da(e)};var jl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ye(e){function a(l){var s=Ya({},l);return delete s.ref,e(s,l.ref||null)}return a.$$typeof=jl,a.render=a,a.prototype.isReactComponent=a.__f=!0,a.displayName="ForwardRef("+(e.displayName||e.name)+")",a}var pa=function(e,a){return e==null?null:$($(e).map(a))},Ze={map:pa,forEach:pa,count:function(e){return e?$(e).length:0},only:function(e){var a=$(e);if(a.length!==1)throw"Children.only";return a[0]},toArray:$},zl=p.__e;p.__e=function(e,a,l,s){if(e.then){for(var r,t=a;t=t.__;)if((r=t.__c)&&r.__c)return a.__e==null&&(a.__e=l.__e,a.__k=l.__k),r.__c(e,a)}zl(e,a,l,s)};var ma=p.unmount;function Qa(e,a,l){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(s){typeof s.__c=="function"&&s.__c()}),e.__c.__H=null),(e=Ya({},e)).__c!=null&&(e.__c.__P===l&&(e.__c.__P=a),e.__c=null),e.__k=e.__k&&e.__k.map(function(s){return Qa(s,a,l)})),e}function Xa(e,a,l){return e&&l&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(s){return Xa(s,a,l)}),e.__c&&e.__c.__P===a&&(e.__e&&l.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=l)),e}function te(){this.__u=0,this.t=null,this.__b=null}function el(e){var a=e.__.__c;return a&&a.__a&&a.__a(e)}function x(e){var a,l,s;function r(t){if(a||(a=e()).then(function(n){l=n.default||n},function(n){s=n}),s)throw s;if(!l)throw a;return b(l,t)}return r.displayName="Lazy",r.__f=!0,r}function re(){this.u=null,this.o=null}p.unmount=function(e){var a=e.__c;a&&a.__R&&a.__R(),a&&32&e.__u&&(e.type=null),ma&&ma(e)},(te.prototype=new M).__c=function(e,a){var l=a.__c,s=this;s.t==null&&(s.t=[]),s.t.push(l);var r=el(s.__v),t=!1,n=function(){t||(t=!0,l.__R=null,r?r(i):i())};l.__R=n;var i=function(){if(!--s.__u){if(s.state.__a){var o=s.state.__a;s.__v.__k[0]=Xa(o,o.__c.__P,o.__c.__O)}var u;for(s.setState({__a:s.__b=null});u=s.t.pop();)u.forceUpdate()}};s.__u++||32&a.__u||s.setState({__a:s.__b=s.__v.__k[0]}),e.then(n,n)},te.prototype.componentWillUnmount=function(){this.t=[]},te.prototype.render=function(e,a){if(this.__b){if(this.__v.__k){var l=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=Qa(this.__b,l,s.__O=s.__P)}this.__b=null}var r=a.__a&&b(N,null,e.fallback);return r&&(r.__u&=-33),[b(N,null,a.__a?null:e.children),r]};var va=function(e,a,l){if(++l[1]===l[0]&&e.o.delete(a),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(l=e.u;l;){for(;l.length>3;)l.pop()();if(l[1]<l[0])break;e.u=l=l[2]}};function Gl(e){return this.getChildContext=function(){return e.context},e.children}function Kl(e){var a=this,l=e.i;a.componentWillUnmount=function(){Fe(null,a.l),a.l=null,a.i=null},a.i&&a.i!==l&&a.componentWillUnmount(),a.l||(a.i=l,a.l={nodeType:1,parentNode:l,childNodes:[],appendChild:function(s){this.childNodes.push(s),a.i.appendChild(s)},insertBefore:function(s,r){this.childNodes.push(s),a.i.appendChild(s)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),a.i.removeChild(s)}}),Fe(b(Gl,{context:a.context},e.__v),a.l)}function al(e,a){var l=b(Kl,{__v:e,i:a});return l.containerInfo=a,l}(re.prototype=new M).__a=function(e){var a=this,l=el(a.__v),s=a.o.get(e);return s[0]++,function(r){var t=function(){a.props.revealOrder?(s.push(r),va(a,e,s)):r()};l?l(t):t()}},re.prototype.render=function(e){this.u=null,this.o=new Map;var a=$(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&a.reverse();for(var l=a.length;l--;)this.o.set(a[l],this.u=[1,0,this.u]);return e.children},re.prototype.componentDidUpdate=re.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(a,l){va(e,l,a)})};var ll=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Jl=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Yl=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Zl=/[A-Z0-9]/g,Ql=typeof document<"u",Xl=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function sl(e,a,l){return a.__k==null&&(a.textContent=""),Fe(e,a),typeof l=="function"&&l(),e?e.__c:null}function rl(e,a,l){return qa(e,a),typeof l=="function"&&l(),e?e.__c:null}M.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(M.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(a){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:a})}})});var ga=p.event;function es(){}function as(){return this.cancelBubble}function ls(){return this.defaultPrevented}p.event=function(e){return ga&&(e=ga(e)),e.persist=es,e.isPropagationStopped=as,e.isDefaultPrevented=ls,e.nativeEvent=e};var Qe,ss={enumerable:!1,configurable:!0,get:function(){return this.class}},Ta=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(a){var l=a.props,s=a.type,r={};for(var t in l){var n=l[t];if(!(t==="value"&&"defaultValue"in l&&n==null||Ql&&t==="children"&&s==="noscript"||t==="class"||t==="className")){var i=t.toLowerCase();t==="defaultValue"&&"value"in l&&l.value==null?t="value":t==="download"&&n===!0?n="":i==="ondoubleclick"?t="ondblclick":i!=="onchange"||s!=="input"&&s!=="textarea"||Xl(l.type)?i==="onfocus"?t="onfocusin":i==="onblur"?t="onfocusout":Yl.test(t)?t=i:s.indexOf("-")===-1&&Jl.test(t)?t=t.replace(Zl,"-$&").toLowerCase():n===null&&(n=void 0):i=t="oninput",i==="oninput"&&r[t=i]&&(t="oninputCapture"),r[t]=n}}s=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=$(l.children).forEach(function(o){o.props.selected=r.value.indexOf(o.props.value)!=-1})),s=="select"&&r.defaultValue!=null&&(r.value=$(l.children).forEach(function(o){o.props.selected=r.multiple?r.defaultValue.indexOf(o.props.value)!=-1:r.defaultValue==o.props.value})),l.class&&!l.className?(r.class=l.class,Object.defineProperty(r,"className",ss)):(l.className&&!l.class||l.class&&l.className)&&(r.class=r.className=l.className),a.props=r}(e),e.$$typeof=ll,Ta&&Ta(e)};var ya=p.__r;p.__r=function(e){ya&&ya(e),Qe=e.__c};var Sa=p.diffed;p.diffed=function(e){Sa&&Sa(e);var a=e.props,l=e.__e;l!=null&&e.type==="textarea"&&"value"in a&&a.value!==l.value&&(l.value=a.value==null?"":a.value),Qe=null};var tl={ReactCurrentDispatcher:{current:{readContext:function(e){return Qe.__n[e.__c].props.value}}}},rs="17.0.2";function nl(e){return b.bind(null,e)}function ue(e){return!!e&&e.$$typeof===ll}function Fl(e){return ue(e)&&e.type===N}function il(e){return ue(e)?Ul.apply(null,arguments):e}function ol(e){return!!e.__k&&(Fe(null,e),!0)}function ul(e){return e&&(e.base||e.nodeType===1&&e)||null}var cl=function(e,a){return e(a)},fl=function(e,a){return e(a)},_l=N;function Xe(e){e()}function hl(e){return e}function dl(){return[!1,Xe]}var pl=ae,ml=ue;function vl(e,a){var l=a(),s=oe({h:{__:l,v:a}}),r=s[0].h,t=s[1];return ae(function(){r.__=l,r.v=a,Oe(r)&&t({h:r})},[e,l,a]),Ee(function(){return Oe(r)&&t({h:r}),e(function(){Oe(r)&&t({h:r})})},[e]),l}function Oe(e){var a,l,s=e.v,r=e.__;try{var t=s();return!((a=r)===(l=t)&&(a!==0||1/a==1/l)||a!=a&&l!=l)}catch{return!0}}var ts={useState:oe,useId:Ka,useReducer:Ke,useEffect:Ee,useLayoutEffect:ae,useInsertionEffect:pl,useTransition:dl,useDeferredValue:hl,useSyncExternalStore:vl,startTransition:Xe,useRef:X,useImperativeHandle:za,useMemo:z,useCallback:le,useContext:P,useDebugValue:Ga,version:"17.0.2",Children:Ze,render:sl,hydrate:rl,unmountComponentAtNode:ol,createPortal:al,createElement:b,createContext:V,createFactory:nl,cloneElement:il,createRef:Ua,Fragment:N,isValidElement:ue,isElement:ml,isFragment:Fl,findDOMNode:ul,Component:M,PureComponent:Ce,memo:Za,forwardRef:Ye,flushSync:fl,unstable_batchedUpdates:cl,StrictMode:_l,Suspense:te,SuspenseList:re,lazy:x,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:tl};const ns=Object.freeze(Object.defineProperty({__proto__:null,Children:Ze,Component:M,Fragment:N,PureComponent:Ce,StrictMode:_l,Suspense:te,SuspenseList:re,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:tl,cloneElement:il,createContext:V,createElement:b,createFactory:nl,createPortal:al,createRef:Ua,default:ts,findDOMNode:ul,flushSync:fl,forwardRef:Ye,hydrate:rl,isElement:ml,isFragment:Fl,isValidElement:ue,lazy:x,memo:Za,render:sl,startTransition:Xe,unmountComponentAtNode:ol,unstable_batchedUpdates:cl,useCallback:le,useContext:P,useDebugValue:Ga,useDeferredValue:hl,useEffect:Ee,useErrorBoundary:Vl,useId:Ka,useImperativeHandle:za,useInsertionEffect:pl,useLayoutEffect:ae,useMemo:z,useReducer:Ke,useRef:X,useState:oe,useSyncExternalStore:vl,useTransition:dl,version:rs},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},de.apply(this,arguments)}var q;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(q||(q={}));const ba="popstate";function Fs(e){e===void 0&&(e={});function a(s,r){let{pathname:t,search:n,hash:i}=s.location;return Ve("",{pathname:t,search:n,hash:i},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function l(s,r){return typeof r=="string"?r:ke(r)}return os(a,l,null,e)}function w(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function gl(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function is(){return Math.random().toString(36).substr(2,8)}function Ca(e,a){return{usr:e.state,key:e.key,idx:a}}function Ve(e,a,l,s){return l===void 0&&(l=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?ce(a):a,{state:l,key:a&&a.key||s||is()})}function ke(e){let{pathname:a="/",search:l="",hash:s=""}=e;return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function ce(e){let a={};if(e){let l=e.indexOf("#");l>=0&&(a.hash=e.substr(l),e=e.substr(0,l));let s=e.indexOf("?");s>=0&&(a.search=e.substr(s),e=e.substr(0,s)),e&&(a.pathname=e)}return a}function os(e,a,l,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:t=!1}=s,n=r.history,i=q.Pop,o=null,u=c();u==null&&(u=0,n.replaceState(de({},n.state,{idx:u}),""));function c(){return(n.state||{idx:null}).idx}function F(){i=q.Pop;let d=c(),v=d==null?null:d-u;u=d,o&&o({action:i,location:g.location,delta:v})}function h(d,v){i=q.Push;let T=Ve(g.location,d,v);l&&l(T,d),u=c()+1;let y=Ca(T,u),R=g.createHref(T);try{n.pushState(y,"",R)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(R)}t&&o&&o({action:i,location:g.location,delta:1})}function _(d,v){i=q.Replace;let T=Ve(g.location,d,v);l&&l(T,d),u=c();let y=Ca(T,u),R=g.createHref(T);n.replaceState(y,"",R),t&&o&&o({action:i,location:g.location,delta:0})}function m(d){let v=r.location.origin!=="null"?r.location.origin:r.location.href,T=typeof d=="string"?d:ke(d);return T=T.replace(/ $/,"%20"),w(v,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,v)}let g={get action(){return i},get location(){return e(r,n)},listen(d){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(ba,F),o=d,()=>{r.removeEventListener(ba,F),o=null}},createHref(d){return a(r,d)},createURL:m,encodeLocation(d){let v=m(d);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:_,go(d){return n.go(d)}};return g}var ka;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ka||(ka={}));function us(e,a,l){l===void 0&&(l="/");let s=typeof a=="string"?ce(a):a,r=ea(s.pathname||"/",l);if(r==null)return null;let t=Tl(e);cs(t);let n=null;for(let i=0;n==null&&i<t.length;++i){let o=bs(r);n=Ts(t[i],o)}return n}function Tl(e,a,l,s){a===void 0&&(a=[]),l===void 0&&(l=[]),s===void 0&&(s="");let r=(t,n,i)=>{let o={relativePath:i===void 0?t.path||"":i,caseSensitive:t.caseSensitive===!0,childrenIndex:n,route:t};o.relativePath.startsWith("/")&&(w(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let u=j([s,o.relativePath]),c=l.concat(o);t.children&&t.children.length>0&&(w(t.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tl(t.children,a,c,u)),!(t.path==null&&!t.index)&&a.push({path:u,score:vs(u,t.index),routesMeta:c})};return e.forEach((t,n)=>{var i;if(t.path===""||!((i=t.path)!=null&&i.includes("?")))r(t,n);else for(let o of yl(t.path))r(t,n,o)}),a}function yl(e){let a=e.split("/");if(a.length===0)return[];let[l,...s]=a,r=l.endsWith("?"),t=l.replace(/\?$/,"");if(s.length===0)return r?[t,""]:[t];let n=yl(s.join("/")),i=[];return i.push(...n.map(o=>o===""?t:[t,o].join("/"))),r&&i.push(...n),i.map(o=>e.startsWith("/")&&o===""?"/":o)}function cs(e){e.sort((a,l)=>a.score!==l.score?l.score-a.score:gs(a.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}const fs=/^:[\w-]+$/,_s=3,hs=2,ds=1,ps=10,ms=-2,Pa=e=>e==="*";function vs(e,a){let l=e.split("/"),s=l.length;return l.some(Pa)&&(s+=ms),a&&(s+=hs),l.filter(r=>!Pa(r)).reduce((r,t)=>r+(fs.test(t)?_s:t===""?ds:ps),s)}function gs(e,a){return e.length===a.length&&e.slice(0,-1).every((s,r)=>s===a[r])?e[e.length-1]-a[a.length-1]:0}function Ts(e,a){let{routesMeta:l}=e,s={},r="/",t=[];for(let n=0;n<l.length;++n){let i=l[n],o=n===l.length-1,u=r==="/"?a:a.slice(r.length)||"/",c=ys({path:i.relativePath,caseSensitive:i.caseSensitive,end:o},u);if(!c)return null;Object.assign(s,c.params);let F=i.route;t.push({params:s,pathname:j([r,c.pathname]),pathnameBase:Rs(j([r,c.pathnameBase])),route:F}),c.pathnameBase!=="/"&&(r=j([r,c.pathnameBase]))}return t}function ys(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,s]=Ss(e.path,e.caseSensitive,e.end),r=a.match(l);if(!r)return null;let t=r[0],n=t.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:s.reduce((u,c,F)=>{let{paramName:h,isOptional:_}=c;if(h==="*"){let g=i[F]||"";n=t.slice(0,t.length-g.length).replace(/(.)\/+$/,"$1")}const m=i[F];return _&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:t,pathnameBase:n,pattern:e}}function Ss(e,a,l){a===void 0&&(a=!1),l===void 0&&(l=!0),gl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,i,o)=>(s.push({paramName:i,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,a?void 0:"i"),s]}function bs(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return gl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function ea(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,s=e.charAt(l);return s&&s!=="/"?null:e.slice(l)||"/"}function Cs(e,a){a===void 0&&(a="/");let{pathname:l,search:s="",hash:r=""}=typeof e=="string"?ce(e):e;return{pathname:l?l.startsWith("/")?l:ks(l,a):a,search:ws(s),hash:Es(r)}}function ks(e,a){let l=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?l.length>1&&l.pop():r!=="."&&l.push(r)}),l.length>1?l.join("/"):"/"}function Ie(e,a,l,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ps(e){return e.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function Sl(e,a){let l=Ps(e);return a?l.map((s,r)=>r===e.length-1?s.pathname:s.pathnameBase):l.map(s=>s.pathnameBase)}function bl(e,a,l,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=ce(e):(r=de({},e),w(!r.pathname||!r.pathname.includes("?"),Ie("?","pathname","search",r)),w(!r.pathname||!r.pathname.includes("#"),Ie("#","pathname","hash",r)),w(!r.search||!r.search.includes("#"),Ie("#","search","hash",r)));let t=e===""||r.pathname==="",n=t?"/":r.pathname,i;if(n==null)i=l;else{let F=a.length-1;if(!s&&n.startsWith("..")){let h=n.split("/");for(;h[0]==="..";)h.shift(),F-=1;r.pathname=h.join("/")}i=F>=0?a[F]:"/"}let o=Cs(r,i),u=n&&n!=="/"&&n.endsWith("/"),c=(t||n===".")&&l.endsWith("/");return!o.pathname.endsWith("/")&&(u||c)&&(o.pathname+="/"),o}const j=e=>e.join("/").replace(/\/\/+/g,"/"),Rs=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ws=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Es=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ns(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cl=["post","put","patch","delete"];new Set(Cl);const xs=["get",...Cl];new Set(xs);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},pe.apply(this,arguments)}const aa=V(null),Ds=V(null),se=V(null),Ne=V(null),G=V({outlet:null,matches:[],isDataRoute:!1}),kl=V(null);function Bs(e,a){let{relative:l}=a===void 0?{}:a;ve()||w(!1);let{basename:s,navigator:r}=P(se),{hash:t,pathname:n,search:i}=wl(e,{relative:l}),o=n;return s!=="/"&&(o=n==="/"?s:j([s,n])),r.createHref({pathname:o,search:i,hash:t})}function ve(){return P(Ne)!=null}function ge(){return ve()||w(!1),P(Ne).location}function Pl(e){P(se).static||ae(e)}function Rl(){let{isDataRoute:e}=P(G);return e?Ks():Os()}function Os(){ve()||w(!1);let e=P(aa),{basename:a,future:l,navigator:s}=P(se),{matches:r}=P(G),{pathname:t}=ge(),n=JSON.stringify(Sl(r,l.v7_relativeSplatPath)),i=X(!1);return Pl(()=>{i.current=!0}),le(function(u,c){if(c===void 0&&(c={}),!i.current)return;if(typeof u=="number"){s.go(u);return}let F=bl(u,JSON.parse(n),t,c.relative==="path");e==null&&a!=="/"&&(F.pathname=F.pathname==="/"?a:j([a,F.pathname])),(c.replace?s.replace:s.push)(F,c.state,c)},[a,s,n,t,e])}const Is=V(null);function Ms(e){let a=P(G).outlet;return a&&b(Is.Provider,{value:e},a)}function wl(e,a){let{relative:l}=a===void 0?{}:a,{future:s}=P(se),{matches:r}=P(G),{pathname:t}=ge(),n=JSON.stringify(Sl(r,s.v7_relativeSplatPath));return z(()=>bl(e,JSON.parse(n),t,l==="path"),[e,n,t,l])}function As(e,a){return Ls(e,a)}function Ls(e,a,l,s){ve()||w(!1);let{navigator:r}=P(se),{matches:t}=P(G),n=t[t.length-1],i=n?n.params:{};n&&n.pathname;let o=n?n.pathnameBase:"/";n&&n.route;let u=ge(),c;if(a){var F;let d=typeof a=="string"?ce(a):a;o==="/"||(F=d.pathname)!=null&&F.startsWith(o)||w(!1),c=d}else c=u;let h=c.pathname||"/",_=h;if(o!=="/"){let d=o.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let m=us(e,{pathname:_}),g=Hs(m&&m.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:j([o,r.encodeLocation?r.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:j([o,r.encodeLocation?r.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),t,l,s);return a&&g?b(Ne.Provider,{value:{location:pe({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:q.Pop}},g):g}function Us(){let e=Gs(),a=Ns(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null;return b(N,null,b("h2",null,"Unexpected Application Error!"),b("h3",{style:{fontStyle:"italic"}},a),l?b("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},l):null,null)}const $s=b(Us,null);class Ws extends M{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){console.error("React Router caught the following error during render",a,l)}render(){return this.state.error!==void 0?b(G.Provider,{value:this.props.routeContext},b(kl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vs(e){let{routeContext:a,match:l,children:s}=e,r=P(aa);return r&&r.static&&r.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=l.route.id),b(G.Provider,{value:a},s)}function Hs(e,a,l,s){var r;if(a===void 0&&(a=[]),l===void 0&&(l=null),s===void 0&&(s=null),e==null){var t;if((t=l)!=null&&t.errors)e=l.matches;else return null}let n=e,i=(r=l)==null?void 0:r.errors;if(i!=null){let c=n.findIndex(F=>F.route.id&&(i==null?void 0:i[F.route.id]));c>=0||w(!1),n=n.slice(0,Math.min(n.length,c+1))}let o=!1,u=-1;if(l&&s&&s.v7_partialHydration)for(let c=0;c<n.length;c++){let F=n[c];if((F.route.HydrateFallback||F.route.hydrateFallbackElement)&&(u=c),F.route.id){let{loaderData:h,errors:_}=l,m=F.route.loader&&h[F.route.id]===void 0&&(!_||_[F.route.id]===void 0);if(F.route.lazy||m){o=!0,u>=0?n=n.slice(0,u+1):n=[n[0]];break}}}return n.reduceRight((c,F,h)=>{let _,m=!1,g=null,d=null;l&&(_=i&&F.route.id?i[F.route.id]:void 0,g=F.route.errorElement||$s,o&&(u<0&&h===0?(Js("route-fallback",!1),m=!0,d=null):u===h&&(m=!0,d=F.route.hydrateFallbackElement||null)));let v=a.concat(n.slice(0,h+1)),T=()=>{let y;return _?y=g:m?y=d:F.route.Component?y=b(F.route.Component,null):F.route.element?y=F.route.element:y=c,b(Vs,{match:F,routeContext:{outlet:c,matches:v,isDataRoute:l!=null},children:y})};return l&&(F.route.ErrorBoundary||F.route.errorElement||h===0)?b(Ws,{location:l.location,revalidation:l.revalidation,component:g,error:_,children:T(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):T()},null)}var El=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(El||{}),Pe=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pe||{});function qs(e){let a=P(aa);return a||w(!1),a}function js(e){let a=P(Ds);return a||w(!1),a}function zs(e){let a=P(G);return a||w(!1),a}function Nl(e){let a=zs(),l=a.matches[a.matches.length-1];return l.route.id||w(!1),l.route.id}function Gs(){var e;let a=P(kl),l=js(Pe.UseRouteError),s=Nl(Pe.UseRouteError);return a!==void 0?a:(e=l.errors)==null?void 0:e[s]}function Ks(){let{router:e}=qs(El.UseNavigateStable),a=Nl(Pe.UseNavigateStable),l=X(!1);return Pl(()=>{l.current=!0}),le(function(r,t){t===void 0&&(t={}),l.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,pe({fromRouteId:a},t)))},[e,a])}const Ra={};function Js(e,a,l){!a&&!Ra[e]&&(Ra[e]=!0)}function la(e){return Ms(e.context)}function C(e){w(!1)}function Ys(e){let{basename:a="/",children:l=null,location:s,navigationType:r=q.Pop,navigator:t,static:n=!1,future:i}=e;ve()&&w(!1);let o=a.replace(/^\/*/,"/"),u=z(()=>({basename:o,navigator:t,static:n,future:pe({v7_relativeSplatPath:!1},i)}),[o,i,t,n]);typeof s=="string"&&(s=ce(s));let{pathname:c="/",search:F="",hash:h="",state:_=null,key:m="default"}=s,g=z(()=>{let d=ea(c,o);return d==null?null:{location:{pathname:d,search:F,hash:h,state:_,key:m},navigationType:r}},[o,c,F,h,_,m,r]);return g==null?null:b(se.Provider,{value:u},b(Ne.Provider,{children:l,value:g}))}function Zs(e){let{children:a,location:l}=e;return As(He(a),l)}new Promise(()=>{});function He(e,a){a===void 0&&(a=[]);let l=[];return Ze.forEach(e,(s,r)=>{if(!ue(s))return;let t=[...a,r];if(s.type===N){l.push.apply(l,He(s.props.children,t));return}s.type!==C&&w(!1),!s.props.index||!s.props.children||w(!1);let n={id:s.props.id||t.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(n.children=He(s.props.children,t)),l.push(n)}),l}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},qe.apply(this,arguments)}function Qs(e,a){if(e==null)return{};var l={},s=Object.keys(e),r,t;for(t=0;t<s.length;t++)r=s[t],!(a.indexOf(r)>=0)&&(l[r]=e[r]);return l}function Xs(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function er(e,a){return e.button===0&&(!a||a==="_self")&&!Xs(e)}function je(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,l)=>{let s=e[l];return a.concat(Array.isArray(s)?s.map(r=>[l,r]):[[l,s]])},[]))}function ar(e,a){let l=je(e);return a&&a.forEach((s,r)=>{l.has(r)||a.getAll(r).forEach(t=>{l.append(r,t)})}),l}const lr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],sr="6";try{window.__reactRouterVersion=sr}catch{}const rr="startTransition",wa=ns[rr];function tr(e){let{basename:a,children:l,future:s,window:r}=e,t=X();t.current==null&&(t.current=Fs({window:r,v5Compat:!0}));let n=t.current,[i,o]=oe({action:n.action,location:n.location}),{v7_startTransition:u}=s||{},c=le(F=>{u&&wa?wa(()=>o(F)):o(F)},[o,u]);return ae(()=>n.listen(c),[n,c]),b(Ys,{basename:a,children:l,location:i.location,navigationType:i.action,navigator:n,future:s})}const nr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=Ye(function(a,l){let{onClick:s,relative:r,reloadDocument:t,replace:n,state:i,target:o,to:u,preventScrollReset:c,unstable_viewTransition:F}=a,h=Qs(a,lr),{basename:_}=P(se),m,g=!1;if(typeof u=="string"&&Fr.test(u)&&(m=u,nr))try{let y=new URL(window.location.href),R=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=ea(R.pathname,_);R.origin===y.origin&&E!=null?u=E+R.search+R.hash:g=!0}catch{}let d=Bs(u,{relative:r}),v=ir(u,{replace:n,state:i,target:o,preventScrollReset:c,relative:r,unstable_viewTransition:F});function T(y){s&&s(y),y.defaultPrevented||v(y)}return b("a",qe({},h,{href:m||d,onClick:g||t?s:T,ref:l,target:o}))});var Ea;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ea||(Ea={}));var Na;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Na||(Na={}));function ir(e,a){let{target:l,replace:s,state:r,preventScrollReset:t,relative:n,unstable_viewTransition:i}=a===void 0?{}:a,o=Rl(),u=ge(),c=wl(e,{relative:n});return le(F=>{if(er(F,l)){F.preventDefault();let h=s!==void 0?s:ke(u)===ke(c);o(e,{replace:h,state:r,preventScrollReset:t,relative:n,unstable_viewTransition:i})}},[u,o,c,s,r,l,e,t,n,i])}function lt(e){let a=X(je(e)),l=X(!1),s=ge(),r=z(()=>ar(s.search,l.current?null:a.current),[s.search]),t=Rl(),n=le((i,o)=>{const u=je(typeof i=="function"?i(r):i);l.current=!0,t("?"+u,o)},[t,r]);return[r,n]}var or=0;function f(e,a,l,s,r,t){var n,i,o={};for(i in a)i=="ref"?n=a[i]:o[i]=a[i];var u={type:e,props:o,key:l,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--or,__i:-1,__u:0,__source:r,__self:t};if(typeof e=="function"&&(n=e.defaultProps))for(i in n)o[i]===void 0&&(o[i]=n[i]);return p.vnode&&p.vnode(u),u}const ur=()=>f(N,{children:[f("h2",{children:"Set Seed Tools:"}),f("ul",{children:[f("li",{children:f(O,{to:"branching-rerolls.html",children:"Blueprint Rerolls"})}),f("li",{children:f(O,{to:"turbo-seed-searcher.html",children:"Turbo Seed Searcher"})}),f("li",{children:f(O,{to:"normal-seed-searcher.html",children:"Normal/Autumn Seed Searcher"})}),f("li",{children:[f(O,{to:"versus-seeds.html",children:"Normal/Autumn Versus Seed Generator"})," ","(Limit card choice butterfly effect)"]}),f("li",{children:"Incomplete/very buggy:"}),f("ul",{children:[f("li",{children:f(O,{to:"card-paths.html",children:"Card Paths"})}),f("li",{children:f(O,{to:"weekly.html",children:"Weekly Speedrun"})}),f("li",{children:f(O,{to:"weekly-export.html",children:"Weekly Speedrun Data Export"})}),f("li",{children:f(O,{to:"build-a-rig.html",children:"Build-A-Rig?"})})]})]}),f("h2",{children:"Notes/Weird Mechanics?"}),f("ul",{children:[f("li",{children:f(O,{to:"coffee.html",children:"Coffee Eating Times"})}),f("li",{children:f(O,{to:"ice-cream.html",children:"Ice Cream"})}),f("li",{children:f(O,{to:"scumming.html",children:"Save Scum Cabinet Layouts"})}),f("li",{children:f(O,{to:"TODO.html",children:"TODO"})}),!1]})]}),cr="1.1.9 (501C)",fr=()=>f("div",{children:["Game data from version ",cr]}),_r=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,120\r
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,60\r
1329097317,True,False,Mixer,False,False,,,64,0,0,False,False,60\r
-1013770159,True,False,Supplies,False,False,,,256,0,1,False,False,60\r
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False,False,20\r
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False,False,20\r
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False,False,20\r
481495292,False,False,Starter Bin,False,False,,,256,0,0,False,False,20\r
1551609169,True,False,Bin,False,False,,,256,0,0,False,False,20\r
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False,False,20\r
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False,False,120\r
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False,False,20\r
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False,False,60\r
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False,False,60\r
-1993346570,True,False,Mop,False,False,,,256,0,0,False,False,20\r
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False,False,250\r
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False,False,250\r
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False,False,250\r
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False,False,250\r
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False,False,20\r
-17368064,False,False,,False,False,,,0,0,0,False,False,20\r
1973114260,True,False,Conveyor,False,False,,,64,0,0,False,False,20\r
-1906799936,True,False,Combiner,False,False,,,64,0,0,False,False,60\r
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False,False,60\r
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False,False,60\r
-1029710921,False,True,Grabber,False,False,,,64,0,0,False,False,60\r
-1462602185,True,False,Portioner,False,False,,,64,0,0,False,False,60\r
459840623,False,False,Teleporter,False,False,,,64,0,0,False,False,1250\r
-1248669347,True,False,Counter,False,False,,,1,0,0,False,False,20\r
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False,False,20\r
-1573577293,False,True,Workstation,False,False,,,32,0,0,False,False,40\r
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False,False,30\r
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False,False,30\r
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False,False,40\r
371247235,True,False,Neon Sign,False,False,,,2,2,0,False,False,40\r
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False,False,40\r
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False,False,30\r
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False,False,30\r
1569358344,True,False,Barrel,False,False,,,2,4,0,False,False,40\r
-60168847,True,False,Bookcase,False,False,,,2,4,0,False,False,40\r
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False,False,30\r
-441525746,True,False,Fireplace,False,False,,,2,4,0,False,False,100\r
591400026,True,False,Rug,False,False,,,2,4,0,False,False,40\r
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False,False,30\r
-1380985631,False,False,Banner,False,False,,,8192,0,0,False,False,0\r
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False,False,0\r
-13481890,True,False,Candelabra,False,False,,,2,1,0,False,False,40\r
1233091186,True,False,Chandelier,False,False,,,2,1,0,False,False,40\r
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False,False,60\r
642318074,True,False,Classical Globe,False,False,,,2,1,0,False,False,60\r
-1486785449,True,False,Painting,False,False,,,2,1,0,False,False,40\r
2076966627,True,False,Rug,False,False,,,2,1,0,False,False,40\r
-972644436,True,False,Statue,False,False,,,2,1,0,False,False,100\r
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False,False,40\r
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False,False,30\r
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False,False,40\r
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False,False,30\r
531866927,True,False,Vase,False,False,,,2,8,0,False,False,30\r
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False,False,60\r
668664567,True,False,Calm Painting,False,False,,,2,0,0,False,False,60\r
756364626,True,False,Plant,False,False,,,2,0,0,False,False,60\r
-648349801,False,False,Rug,False,False,,,2,0,0,False,False,60\r
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False,False,20\r
-2100580689,False,False,,False,False,,,0,0,0,False,False,20\r
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False,False,60\r
892856538,False,False,,False,False,,,0,0,0,False,False,20\r
-544237849,False,False,Beehive,False,False,,,0,0,0,False,False,20\r
188952245,False,False,,False,False,,,0,0,0,False,False,20\r
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5\r
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False,False,20\r
-441141351,False,False,,False,False,,1972879238,32,0,0,False,False,20\r
805530854,False,False,,False,False,,1972879238,0,0,0,False,False,60\r
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False,False,60\r
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False,False,60\r
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False,False,120\r
1630557157,False,False,,False,False,,,0,0,0,False,False,20\r
-1324288299,False,False,,False,False,,,0,0,0,False,False,20\r
-374077567,False,False,,False,False,,,0,0,0,False,False,20\r
147181555,False,False,,False,False,,,0,0,0,False,False,20\r
31731938,False,False,,False,False,,,0,0,0,False,False,20\r
1419995156,False,False,,False,False,,,0,0,0,False,False,20\r
34773971,False,False,,False,False,,,0,0,0,False,False,20\r
-1424385600,False,False,,False,False,,,0,0,0,False,False,20\r
377065033,False,False,,False,False,,,0,0,0,False,False,20\r
-483535085,False,False,,False,False,,,0,0,0,False,False,0\r
1553046198,False,False,,False,False,,,0,0,0,False,False,20\r
1063254979,False,False,,False,False,,,0,0,0,False,False,20\r
1732122842,False,False,,False,False,,,0,0,0,False,False,20\r
-1936421857,False,False,,False,False,,,0,0,0,False,False,20\r
2041631136,False,False,,False,False,,,0,0,0,False,False,20\r
949631021,False,False,,False,False,,,0,0,0,False,False,60\r
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True,False,20\r
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False,False,120\r
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False,False,120\r
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False,False,120\r
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False,False,60\r
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True,False,40\r
238041352,True,False,Booking Desk,False,True,,,8,0,0,False,False,0\r
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False,False,120\r
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False,False,60\r
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False,False,60\r
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False,False,60\r
944301512,False,False,,False,False,,,0,0,0,False,False,20\r
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False,False,120\r
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1147639502,False,False,Balloons,False,False,,,8192,0,0,False,False,0\r
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False,False,0\r
-326328571,False,False,Piano,False,False,,,0,0,0,False,False,20\r
-905438738,True,False,Apples,True,False,,,288,0,0,False,False,60\r
1807525572,True,False,Beans,True,False,,,288,0,0,False,False,60\r
269523389,True,False,Meat,True,False,,,288,0,0,False,False,60\r
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False,False,60\r
759552160,True,False,Burger Buns,True,False,,,288,0,0,False,False,60\r
385684499,False,False,Patties,False,False,,,288,0,0,False,False,60\r
-452101383,True,False,Carrots,True,False,,,288,0,0,False,False,60\r
-117339838,True,False,Cheese,True,False,,,288,0,0,False,False,60\r
961148621,True,False,Eggs,True,False,,,288,0,0,False,False,60\r
-1735137431,False,False,Fish,False,False,,,288,0,0,False,False,60\r
-609358791,False,False,Fish,False,False,,,288,0,0,False,False,60\r
925796718,True,False,Flour,True,False,,,288,0,0,False,False,60\r
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False,False,60\r
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False,False,60\r
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False,False,60\r
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False,True,60\r
1193867305,True,False,Lettuce,True,False,,,288,0,0,False,False,60\r
-484165118,True,False,Meat,True,False,,,288,0,0,False,False,60\r
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False,False,60\r
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False,True,60\r
1834063794,True,False,Nuts,True,False,,,288,0,0,False,False,60\r
-1963699221,True,False,Oil,True,False,,,288,0,0,False,False,60\r
-1434800013,True,False,Olives,True,False,,,288,0,0,False,False,60\r
-2042103798,True,False,Onion,True,False,,,288,0,0,False,False,60\r
44541785,True,False,Potato,True,False,,,288,0,0,False,False,60\r
-1201769154,True,False,Rice,True,False,,,288,0,0,False,False,60\r
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False,False,60\r
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False,False,60\r
-712909563,True,False,Tomato,True,False,,,288,0,0,False,False,60\r
-1506824829,True,False,Turkey,True,False,,,288,0,0,False,False,60\r
-1353971407,True,False,Wine,True,False,,,288,0,0,False,False,60\r
-101564005,False,False,,False,False,,,0,0,0,False,False,20\r
-897970831,False,False,,False,False,,,0,0,0,False,False,20\r
-996680732,False,False,Counter,False,False,,,0,0,0,False,False,5\r
946079892,False,False,,False,False,,,0,0,0,False,False,60\r
1171429989,False,False,,False,False,,,0,0,0,False,False,60\r
161402590,False,False,,False,False,,,0,0,0,False,False,60\r
739504637,False,True,Auto Plater,False,False,,,256,0,0,False,False,20\r
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False,False,20\r
434150763,True,False,Dish Rack,False,False,,,16,0,0,False,False,20\r
1270423542,False,False,,False,False,,,0,0,0,False,False,20\r
-1474018107,False,False,,False,False,,,0,0,0,False,False,20\r
380220741,False,False,Starter Plates,False,False,,,256,0,0,False,False,20\r
1313469794,True,False,Plates,False,False,,,256,0,0,True,False,20\r
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False,False,20\r
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False,False,20\r
314862254,True,False,Woks,False,False,314862254,,0,0,0,False,False,60\r
-1291027873,False,False,,False,False,,,0,0,0,False,False,20\r
-214921468,False,False,,False,False,,,0,0,0,False,False,20\r
-2135829561,False,False,,False,False,,,0,0,0,False,False,20\r
-372462424,False,False,,False,False,,,0,0,0,False,False,20\r
933445633,False,False,,False,False,,,0,0,0,False,False,20\r
-1555334152,False,False,,False,False,,,0,0,0,False,False,20\r
1980900762,False,False,,False,False,,,0,0,0,False,False,20\r
1855052205,False,False,,False,False,,,0,0,0,False,False,20\r
-68388422,False,False,,False,False,,,0,0,0,False,False,20\r
-1200192498,False,False,,False,False,,,0,0,0,False,False,20\r
-194750543,False,False,,False,False,,,0,0,0,False,False,20\r
1911132834,False,False,,False,False,,,0,0,0,False,False,20\r
1365126444,False,False,,False,False,,,0,0,0,False,False,20\r
-1265562836,False,False,,False,False,,,0,0,0,False,False,20\r
-2046940874,False,False,,False,False,,,0,0,0,False,False,20\r
-923570273,False,False,,False,False,,,0,0,0,False,False,20\r
-488268556,False,False,,False,False,,,0,0,0,False,False,20\r
-548432204,False,False,,False,False,,,0,0,0,False,False,20\r
-758567246,False,False,,False,False,,,0,0,0,False,False,20\r
532701855,False,False,,False,False,,,0,0,0,False,False,20\r
-1857890774,False,True,Freezer,False,False,,,4,0,0,False,False,20\r
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False,False,60\r
1656358740,True,False,Prep Station,False,False,,,256,0,0,False,False,20\r
-262439022,False,False,,False,False,,,0,0,0,False,False,20\r
1890408483,False,False,,False,False,,,0,0,0,False,False,20\r
639111696,True,False,Breadsticks,False,False,,,8,0,0,False,True,20\r
1358522063,True,False,Candle Box,False,False,,,8,0,0,False,True,60\r
221442949,True,False,Flower Pot,False,False,,,8,0,0,False,False,60\r
1528688658,True,False,Napkins,False,False,,,8,0,0,False,True,60\r
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False,True,60\r
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False,True,60\r
938247786,False,False,Chair,False,False,,,0,0,0,False,False,0\r
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False,False,40\r
-1979922052,False,False,Chair,False,False,,,0,0,0,False,False,0\r
-3721951,False,True,Bar Table,False,False,,,8,0,0,False,False,5\r
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False,False,60\r
-203679687,False,True,Metal Table,False,False,,,8,0,0,False,False,60\r
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False,False,60\r
209074140,True,False,Dining Table,False,False,,,1,0,0,False,False,20\r
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False,False,20\r
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False,False,20\r
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False,False,20\r
723626409,True,False,Trainers,False,False,,,256,0,0,False,False,60\r
1796077718,True,False,Wellies,False,False,,,256,0,0,False,False,60\r
230848637,True,False,Work Boots,False,False,,,256,0,0,False,False,60\r
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False,False,60\r
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False,False,60\r
-214126192,False,True,Wash Basin,False,False,,,16,0,0,False,False,60\r
1083874952,True,False,Sink,False,False,,,17,0,0,False,False,20\r
1467371088,False,True,Power Sink,False,False,,,16,0,0,False,False,60\r
1860904347,False,True,Soaking Sink,False,False,,,16,0,0,False,False,20\r
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False,False,20\r
2073091578,False,False,,False,False,,,0,0,0,False,False,20\r
-469149429,False,False,,False,False,,,0,0,0,False,False,20\r
834743908,False,False,,False,False,,,0,0,0,False,False,20\r
951367272,False,False,,False,False,,,0,0,0,False,False,20\r
1771016910,False,False,,False,False,,,0,0,0,False,False,60\r
-2122624266,False,False,,False,False,,,0,0,0,False,False,20\r
-404095277,False,False,,False,False,,,0,0,0,False,False,20\r
-1949016360,False,False,,False,False,,,0,0,0,False,False,20\r
-581219245,False,False,,False,False,,,0,0,0,False,False,60\r
-148578487,False,False,,False,False,,,0,0,0,False,False,20\r
-1125517450,False,False,,False,False,,,0,0,0,False,False,20\r
-233558851,False,False,,False,False,,,0,0,0,False,False,20\r
-342718019,False,False,,False,False,,,0,0,0,False,False,20\r
174737401,False,False,,False,False,,,0,0,0,False,False,20\r
310022384,False,False,,False,False,,,0,0,0,False,False,20\r
-1425710426,False,False,,False,False,,,0,0,0,False,False,60\r
-1807971648,False,False,,False,False,,,0,0,0,False,False,60\r
268640447,False,False,,False,False,,,0,0,0,False,False,60\r
1199575543,False,False,,False,False,,,0,0,0,False,False,60\r
-1451048989,False,False,,False,False,,,0,0,0,False,False,60\r
-1820794030,False,False,,False,False,,,0,0,0,False,False,60\r
871235082,False,False,,False,False,,,0,0,0,False,False,20\r
387240739,False,False,,False,False,,,0,0,0,False,False,20\r
1159228054,False,False,Bin,False,False,,,0,0,0,False,False,20\r
-626547002,False,False,,False,False,,,0,0,0,False,False,60\r
359655899,False,False,,False,False,,,0,0,0,False,False,20\r
-232172209,False,False,,False,False,,,0,0,0,False,False,20\r
-1528441435,False,False,,False,False,,,0,0,0,False,False,20\r
564388954,False,False,,False,False,,,0,0,0,False,False,20\r
1363960331,False,False,,False,False,,,0,0,0,False,False,20\r
-760874610,False,False,,False,False,,,0,0,0,False,False,20\r
1823459359,False,False,,False,False,,,0,0,0,False,False,20\r
1659152562,False,False,,False,False,,,0,0,0,False,False,20\r
477050702,False,False,,False,False,,,0,0,0,False,False,20\r
1485375733,False,False,,False,False,,,0,0,0,False,False,20\r
-1114059052,False,False,,False,False,,,0,0,0,False,False,20\r
-62256073,False,False,,False,False,,,0,0,0,False,False,20\r
1636658728,False,False,,False,False,,,0,0,0,False,False,20\r
-1518462324,False,False,,False,False,,,0,0,0,False,False,20\r
-1260306608,False,False,,False,False,,,0,0,0,False,False,20\r
1425494045,False,False,,False,False,,,0,0,0,False,False,20\r
-1614041568,False,False,,False,False,,,0,0,0,False,False,20\r
-1051912790,False,False,,False,False,,,0,0,0,False,False,20\r
1010867759,False,False,,False,False,,,0,0,0,False,False,20\r
-720353319,False,False,,False,False,,,0,0,0,False,False,60\r
-1997868587,False,False,,False,False,,,0,0,0,False,False,60\r
-1920103064,False,False,,False,False,,,0,0,0,False,False,60\r
-1235624607,False,False,,False,False,,,0,0,0,False,False,60\r
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False,False,0\r
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False,False,0\r
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False,False,0\r
115181910,False,False,Skeleton,False,False,,,8192,0,0,False,False,0\r
976574457,True,False,Corn,True,False,,,288,0,0,False,False,60\r
235355384,False,False,Bananas,False,False,,,0,0,0,False,False,60\r
-699333907,False,False,Strawberries,False,False,,,0,0,0,False,False,60\r
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False,False,60\r
148543530,True,False,Cherries,True,False,,,288,0,0,False,False,60\r
-1382019219,False,False,,False,False,,,0,0,0,False,False,20\r
-1403625488,False,False,,False,False,,,0,0,0,False,False,20\r
-1673904972,False,False,,False,False,,,0,0,0,False,False,20\r
1752654754,False,False,,False,False,,,0,0,0,False,False,20\r
-1748395084,False,False,,False,False,,,0,0,0,False,False,20\r
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False,False,60\r
735786885,True,False,Cranberry,True,False,,,288,0,0,False,False,60\r
-2133205155,True,False,Sugar,True,False,,,288,0,0,False,False,60\r
-667884240,False,False,Conveyor,False,False,,,64,0,0,False,False,20\r
-697441390,False,False,,False,False,,,64,0,0,False,False,20\r
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False,False,0\r
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False,False,0\r
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False,False,60\r
595306349,True,False,Seaweed,True,False,,,288,0,0,False,False,60\r
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False,False,60\r
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False,True,60\r
-184765154,False,False,,False,False,,,0,0,0,False,False,20\r
-707206359,False,False,,False,False,,,0,0,0,False,False,20\r
1134699240,False,False,,False,False,,,0,0,0,False,False,20\r
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False,False,0\r
142298503,False,False,Friends Poster,False,False,,,2,0,0,False,False,0\r
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False,False,0\r
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False,False,0\r
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False,False,0\r
645876063,False,False,,False,False,,,0,0,0,False,False,60\r
-916942203,False,False,,False,False,,,0,0,0,False,False,20\r
345407921,False,False,,False,False,,,0,0,0,False,False,20\r
-509190559,False,False,,False,False,,,0,0,0,False,False,20\r
1274763392,False,False,,False,False,,,0,0,0,False,False,20\r
965503721,False,False,,False,False,,,0,0,0,False,False,20\r
260380903,False,False,,False,False,,,0,0,0,False,False,20\r
-89571330,False,False,,False,False,,,0,0,0,False,False,20\r
2114150010,False,False,,False,False,,,0,0,0,False,False,20\r
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False,False,60\r
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False,False,20\r
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False,False,20\r
120342736,True,False,Milk,True,False,,,288,0,0,False,False,60\r
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False,False,60\r
1377093570,True,False,Tea cups,True,False,,,288,0,0,False,False,60\r
-762638188,True,False,Tea pots,True,False,,,288,0,0,False,False,60\r
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False,False,60\r
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False,False,120\r
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False,False,120\r
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False,False,120\r
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False,False,120\r
783588616,False,False,Chocolate,False,False,,,0,0,0,False,False,60\r
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False,False,60\r
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False,False,20\r
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-1552572658,False,False,Candles,False,False,,,8192,0,0,False,False,0\r
-119593913,False,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0\r
-379172217,False,False,Witch Shelf,False,False,,,8192,0,0,False,False,0\r
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False,False,40\r
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False,False,60\r
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False,False,60\r
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False,False,60\r
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False,False,60\r
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False,False,60\r
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False,False,60\r
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False,False,20\r
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False,False,20\r
119166501,False,False,Levitation Station,False,False,,,0,0,0,False,False,60\r
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120\r
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120\r
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False,False,60\r
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False,False,20\r
-1835366879,False,False,,False,False,,,0,0,0,False,False,20\r
2031496644,False,False,,False,False,,,0,0,0,False,False,20\r
1391464545,False,False,,False,False,,,0,0,0,False,False,20\r
477535207,False,False,,False,False,,,0,0,0,False,False,20\r
923307040,False,False,,False,False,,,0,0,0,False,False,20\r
-1090855913,False,False,,False,False,,,0,0,0,False,False,20\r
50273892,False,False,,False,False,,,0,0,0,False,False,20\r
-70663877,False,False,,False,False,,,0,0,0,False,False,20\r
-2123542635,False,False,,False,False,,,0,0,0,False,False,20\r
423254987,False,False,Preserving Station,False,False,,,256,0,0,False,False,60\r
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False,False,60\r
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False,False,120\r
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False,False,60\r
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False,False,60\r
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False,False,60\r
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False,False,20\r
-1541798751,True,False,Mince,True,False,-1541798751,,32,0,0,False,False,20\r
-2077197906,True,False,Pasta Sheet,True,False,-2077197906,,32,0,0,False,False,20\r
-1339944542,True,False,Lasagne Tray,True,False,-1339944542,,32,0,0,False,False,20\r
-215543585,True,False,Butter,True,False,-215543585,,32,0,0,False,False,20\r
-182748008,True,False,Spaghetti,True,False,-182748008,,32,0,0,False,False,20\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60\r
`,hr=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],dr=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],Re=_r.trim().split(`\r
`).map(e=>{const a=e.split(",");let l={};for(let s=0;s<a.length;s++){let r;switch(dr[s]){case"number":r=Number(a[s]);break;case"boolean":r=a[s]==="True";break;case"number[]":a[s]===""?r=[]:r=a[s].split(":").map(t=>Number(t));break;default:r=a[s]}l[hr[s]]=r}return l});class pr{constructor(a){k(this,"Staple");k(this,"Tags");k(this,"StapleWhenMissing");k(this,"Appliance");k(this,"IsRemoved");k(this,"Filter");k(this,"DecorationRequired");k(this,"SellAsUpgrade");this.Appliance=a,this.Tags=a.ShoppingTags,this.DecorationRequired=a.ThemeRequired,this.SellAsUpgrade=a.IsPurchasableAsUpgrade,this.Filter=a.ShopRequirementFilter,this.StapleWhenMissing=a.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(a){return a&1?this.Staple!==0:a&this.Tags?this.Staple===0:!1}}var L=(e=>(e[e.NonStaple=0]="NonStaple",e[e.FixedStaple=1]="FixedStaple",e[e.BonusStaple=2]="BonusStaple",e[e.WhenMissing=3]="WhenMissing",e))(L||{}),Y=(e=>(e[e.None=0]="None",e[e.Basic=1]="Basic",e[e.Decoration=2]="Decoration",e[e.Technology=4]="Technology",e[e.FrontOfHouse=8]="FrontOfHouse",e[e.Plumbing=16]="Plumbing",e[e.Cooking=32]="Cooking",e[e.Automation=64]="Automation",e[e.Christmas=128]="Christmas",e[e.Misc=256]="Misc",e[e.Office=512]="Office",e[e.BlueprintUpgrader=1024]="BlueprintUpgrader",e[e.BlueprintStore=2048]="BlueprintStore",e[e.Halloween=4096]="Halloween",e[e.SpecialEvent=8192]="SpecialEvent",e))(Y||{});const xa={DefaultShoppingTag:892};var xl=(e=>(e[e.None=0]="None",e[e.RefreshableProvider=1]="RefreshableProvider",e))(xl||{}),_e=(e=>(e[e.Null=0]="Null",e[e.Exclusive=1]="Exclusive",e[e.Affordable=2]="Affordable",e[e.Charming=4]="Charming",e[e.Formal=8]="Formal",e[e.Kitchen=16]="Kitchen",e))(_e||{}),Q=(e=>(e[e.Generic=0]="Generic",e[e.Dish=1]="Dish",e[e.PrimaryTheme=3]="PrimaryTheme",e[e.SecondaryTheme=4]="SecondaryTheme",e[e.Franchise=5]="Franchise",e[e.Special=6]="Special",e))(Q||{}),H=(e=>(e[e.Base=0]="Base",e[e.Main=1]="Main",e[e.Extra=2]="Extra",e[e.Side=3]="Side",e[e.Starter=4]="Starter",e[e.Dessert=5]="Dessert",e[e.Null=6]="Null",e))(H||{});const mr=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1199743580,Breakfast Beans,1,-2075899,,,1807525572:-957949759,False,False,2,1,0\r
1436814208,Breakfast Eggs,1,-2075899,,,961148621,False,False,2,1,0\r
-1998930853,Breakfast Extras,1,-2075899,,,-712909563:-1097889139,False,False,2,1,0\r
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
965292477,Cheeseburgers,1,-1778969928,,,759552160:380220741:385684499:-117339838,False,False,2,1,0\r
-1091625127,Fresh Patties,1,-1778969928,,,759552160:380220741:961148621:-484165118,False,False,2,1,0\r
1298035216,Burger Toppings,1,-1778969928,,,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0\r
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0\r
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1,1,8\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1,1,5\r
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-266993023:-905438738,False,False,5,1,3\r
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
-1992316049,Mushroom Pie,1,-133939790,,,-1097889139:925796718:-266993023,False,False,1,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,,925796718:-266993023:-452101383:-1573812073,False,False,1,1,0\r
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8\r
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,8\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,5\r
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0,0,5\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,,-1097889139,False,False,2,1,0\r
-851525606,Steak Topping - Tomato,1,-959076098,,,-712909563,False,False,2,1,0\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,5\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5\r
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
-204178430,Steak Stir Fry,1,-1653221873,,,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3\r
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,2\r
1642577536,Herd Mentality,0,,,,,False,False,6,0,0\r
-1737101581,Health and Safety,0,,,,,False,False,6,0,0\r
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0\r
73422455,Tipping Culture,0,,,,,False,False,6,0,0\r
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,3\r
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718,False,False,5,1,3\r
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4,1,3\r
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4,1,2\r
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6,1,0\r
61056284,Trick - Risky Reservations,6,,,,,False,False,6,1,0\r
2112990883,Trick - Freak Fires,6,,,,,False,False,6,2,0\r
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6,1,0\r
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6,1,0\r
83673522,Trick - Spooky Solos,6,,,,,False,False,6,1,0\r
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6,2,0\r
79859072,Trick - Cowardly Customers,6,,,,,False,False,6,1,0\r
-2123879305,Trick - Full of Friends,6,,,,,False,False,6,1,0\r
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6,1,0\r
-1839415999,Trick - Spatial Scares,6,,,,,False,False,6,1,0\r
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6,1,0\r
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6,2,0\r
524188336,Trick - Foggy Food,6,,,,,False,False,6,1,0\r
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6,1,0\r
561747534,Trick - Careful Conveyance,6,,,,,False,False,6,1,0\r
-1921275517,Trick - Tiring Times,6,,,,,False,False,6,1,0\r
319209671,Community,6,,,,,False,False,6,1,0\r
536093200,Nut Roast,1,1551533879,,2087693779:-1706154991,1834063794:380220741:-2042103798,True,False,1,1,5\r
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2\r
12170609,Cherry Pie,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,3\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1\r
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-361249036,Christmas Rush,6,,,,,False,False,6,0,0\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,,735786885:-2133205155,False,False,2,1,0\r
-1460640973,Turkey - Gravy,1,1551533879,,,-2042103798:-957949759:-266993023,False,False,2,1,0\r
-1243742384,Turkey - Stuffing,1,1551533879,,,-2042103798:925796718:-266993023,False,False,2,2,0\r
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2\r
-437161441,Bamboo Stir Fry,1,-1653221873,,,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0\r
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2,1,0\r
-2106646073,Couples,6,,,,,False,False,6,0,0\r
2028238661,Double Dates,0,-2106646073,,,,False,False,6,0,0\r
587399881,First Dates,0,-2106646073,,,,False,False,6,0,0\r
251686519,Double Brew,0,746549422,,,,False,False,6,0,0\r
2079359756,Slow Brew Coffee,1,746549422:16318784,,,,False,False,6,0,0\r
1103885337,Cake Stand,1,16318784:16318784,,,143484231,False,False,2,1,0\r
16318784,Black Coffee,1,,,-1316622579,-1609758240,False,False,0,-2,1\r
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2,1,0\r
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2,1,0\r
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,2,1,2\r
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,2,1,2\r
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2,1,3\r
1316998108,Sponge Cake,1,1113735761,,,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
1609120418,Brownies,1,1113735761,,,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3\r
627241196,Cupcake,1,1113735761,,,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
-1166412657,Doughnut,1,1113735761,,,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0\r
1113735761,Cakes,0,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,5\r
803049136,Lasagne,1,-1501485763:1651927267,,-1706154991:1972879238:-523839730,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,8\r
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,5\r
2055765569,Double Helpings,0,-347199069,,,,False,False,6,1,0\r
-347199069,All You Can Eat,0,,,,,False,False,6,2,0\r
233335391,Personalised Waiting,0,,,,,False,False,6,0,0\r
-1815978981,Closing Time?,0,,,,,False,False,6,0,0\r
-287956430,Leisurely Eating,0,,,,,False,False,6,1,0\r
220354841,Sedate Atmosphere,0,,,,,False,False,6,0,0\r
-37551439,Dinner Rush,0,,1958825350,,,False,False,6,0,0\r
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6,0,0\r
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6,0,0\r
-523195599,Large Groups,0,-1183014556,,,,False,False,6,0,0\r
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6,0,0\r
165138001,Photographic Memory,0,,,,,False,False,6,0,0\r
-28708234,Empathy,0,,,,,False,False,6,0,0\r
-1617744928,Blindfolded Chefs,0,,,,,False,False,6,0,0\r
1530184692,Instant Service,0,,746549422,,,False,False,6,0,0\r
113582858,Discounts,0,,,,,False,False,6,0,0\r
-913531466,Victorian Standards,0,,,,,False,False,6,0,0\r
-53330922,Lunch Rush,0,,1958825350,,,False,False,6,0,0\r
-491994319,Splash Zone,0,,,,,False,False,6,0,0\r
1151685289,Relaxed Atmosphere,0,,,,,False,False,6,0,0\r
73387665,Advertising,0,1765310572,,,,False,False,6,0,0\r
1765310572,Advertising,0,,,,,False,False,6,0,0\r
2079763934,Morning Rush,0,,1958825350,,,False,False,6,0,0\r
1914014233,Simplicity,0,,,,,False,False,6,0,0\r
-534291083,High Expectations,0,,,,,False,False,6,0,0\r
-957080051,High Standards,0,,1356267749,,,False,False,6,0,0\r
1103452725,High Quality,0,,,,,False,False,6,0,0\r
-1857686620,Affordable,3,,,,,False,False,6,0,0\r
1293847744,Charming,3,,,,,False,False,6,0,0\r
-1323758054,Exclusive,3,,,,,False,False,6,0,0\r
-1641333859,Formal,3,,,,,False,False,6,0,0\r
409052852,Variety,5,,319209671:16318784,,,False,False,6,0,0\r
-1205203705,Careful Accounting,5,,,,,False,False,6,-2,0\r
-947047181,Mandatory Tips,5,,,,,False,False,6,-2,0\r
1298492736,Grabber,5,,,,,False,False,6,-2,0\r
1173444265,Wash Basin,5,,,,,False,False,6,-2,0\r
-1096314451,Savings,5,,,,,False,False,6,-2,0\r
2022427578,Reincarnation,5,,,,,False,False,6,-2,0\r
-401283600,Preparation Time,5,,,,,False,False,6,-2,0\r
-357483693,Double Homework,5,,,,,False,False,6,-2,0\r
868780472,Catalogue,5,,,,,False,False,6,-2,0\r
-1418317596,Coupons,5,,,,,False,False,6,-2,0\r
-98765415,Supplier Error,5,,,,,False,False,6,-2,0\r
1618418478,Bootstrapping,5,,,,,False,False,6,-2,0\r
1543829883,Second Helpings,5,,,,,False,False,6,-2,0\r
-1010143518,Loyal Customer,5,,,,,False,False,6,-2,0\r
-1269806478,High Tech Suppliers,5,,,,,False,False,6,-2,0\r
1818403570,Conveyors,5,,,,,False,False,6,-2,0\r
-1121427945,Coffee Tables,5,,,,,False,False,6,-2,0\r
1101419251,Floor Protectors,5,,,,,False,False,6,-2,0\r
-220105135,Flower Pots,5,,,,,False,False,6,-2,0\r
-178381693,Metal Table,5,,,,,False,False,6,0,0\r
-373772933,Simple Cloth Table,5,,,,,False,False,6,0,0\r
`,vr=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
550743424,Pizza,1,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
-1778969928,Burgers,1,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-133939790,Pies,1,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
1743900205,Fish,1,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
1626323920,Hot Dogs,1,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,0,-2,1\r
1113735761,Cakes,0,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
`,xe=mr.trim().split(`\r
`).filter(e=>e).map(e=>{var J,D;const[a,l,s,r,t,n,i,o,u,c,F,h]=e.split(","),_=Number(a),m=Number(s),g=r!=null&&r.length?r.split(":").map(I=>Number(I)):[],d=t.length?t.split(":").map(I=>Number(I)):[],v=n!=null&&n.length?(J=n==null?void 0:n.split(":"))==null?void 0:J.map(I=>Number(I)):[],T=i!=null&&i.length?(D=i==null?void 0:i.split(":"))==null?void 0:D.map(I=>Number(I)):[],y=o==="True",R=u==="True",E=Number(c),A=Number(F),K=Number(h);return{ID:_,Name:l,UnlockGroup:m,Requires:g,BlockedBy:d,RequiredProcesses:v,IngredientProviders:T,isMain:y,isStarterOrSide:R,DishType:E,CustomerMultiplier:A,DishValue:K}});function st(e,a=!0){const l=a&&e.some(s=>s.Name==="Community");return xe.filter(s=>{if(e.some(r=>r.ID===s.ID)||s.BlockedBy.some(r=>e.some(t=>t.ID===r))||s.Requires.some(r=>!e.some(t=>t.ID===r)))return!1;if(s.isStarterOrSide)if(e.some(r=>r.isMain)){if(e.length&&e[0].DishType===H.Dessert)debugger}else return!1;return!(!l&&s.DishType===H.Base)}).sort((s,r)=>s.ID-r.ID)}const gr=[{ID:447437163,Name:"Country",UnlockGroup:Q.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Q.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Q.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},xe.filter(e=>e.Name==="Community")[0],{ID:1766067755,Name:"Romantic",UnlockGroup:Q.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},{ID:1958825350,Name:"Turbo",UnlockGroup:Q.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0}],Tr=[...gr].sort((e,a)=>e.Name<a.Name?-1:1),rt=["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(e=>xe.filter(a=>a.Name===e)[0]),tt=vr.trim().split(`\r
`).filter(e=>e).map(e=>{var R,E;const[a,l,s,r,t,n,i,o,u,c]=e.split(","),F=Number(a),h=Number(s),_=r!=null&&r.length?(R=r==null?void 0:r.split(":"))==null?void 0:R.map(A=>Number(A)):[],m=t!=null&&t.length?(E=t==null?void 0:t.split(":"))==null?void 0:E.map(A=>Number(A)):[],g=n==="True",d=i==="True",v=Number(o),T=Number(u),y=Number(c);return{ID:F,Name:l,UnlockGroup:h,Requires:[],BlockedBy:[],RequiredProcesses:_,IngredientProviders:m,isMain:g,isStarterOrSide:d,DishType:v,CustomerMultiplier:T,DishValue:y}}).sort((e,a)=>e.Name<a.Name?-1:1),yr="38",Sr=Number(yr);function br(e,a){return Math.floor(Math.random()*(a-e))+e}function Cr(e,a){let l=e.length;for(;l-- >1;){let s=a===void 0?br(0,l+1):a.range(0,l+1);[e[l],e[s]]=[e[s],e[l]]}return e}const nt="bdghjmqrtvwxy346789";class De{constructor(a,l){k(this,"fixedSeed");k(this,"instance");k(this,"random");typeof a=="string"&&(a=Pr(a)),this.fixedSeed=a,this.instance=l,this.random=new kr(a+Math.imul(124192293,l))}useSubcontext(a){return new De(this.fixedSeed,124192293*a+this.instance)}}class kr{constructor(a){k(this,"seed");const l=i=>Math.imul(1812433253,i)+1>>0,s=a>>0,r=l(s),t=l(r),n=l(t);this.seed=[s,r,t,n]}get value(){let a=this.seed.shift(),l=this.seed[2];return a^=a<<11,a^=a>>>8,l^=l>>>19,l=(l^a)>>0,this.seed.push(l),l}range(a,l){return(this.value>>>0)%(l-a)+a}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(a){return a[this.range(0,a.length)]}}function Pr(e){const l=new TextEncoder().encode(e);let s=5381,r=l.length;for(;r>0;){let t=--r;s=(s<<5)+s+l[t]}return s>>0}function Rr(e,a,l){return new De(l,e*1231231+a)}const wr=Re.filter(e=>e.IsPurchasable||e.IsPurchasableAsUpgrade).length;class Er{constructor(a,l=0){k(this,"seed");k(this,"mapSize");k(this,"numTiles");k(this,"baseUpgradeChance");k(this,"OwnedAppliances");k(this,"Cards");k(this,"Theme");k(this,"cache",new Map);k(this,"cacheDay");this.seed=a,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=l,this.OwnedAppliances=[],this.Cards=[],this.Theme=_e.Null,this.cacheDay=-1}getLayoutInfo(){const l=new De(this.seed,5078598).useSubcontext(0).random.range(0,8);let s,r;switch(l){case 0:r=70,s=2;break;case 4:r=84,s=2;break;case 1:case 5:r=60,s=1;break;case 2:case 6:r=9*13,s=3;break;case 3:case 7:r=12*16,s=4;break;default:throw new Error}return[s,r]}handleNewCardSpawnEffects(a){a!==void 0&&(a.Name==="Turbo"&&(this.baseUpgradeChance=.25),a.UnlockGroup===Q.PrimaryTheme&&(this.Theme=_e[a.Name]))}handleNewCardRerollEffects(a){a!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(a.IngredientProviders.flatMap(l=>Re.filter(s=>s.ID===l))))}addCard(a){a!==void 0&&(this.handleNewCardSpawnEffects(a),this.handleNewCardRerollEffects(a),this.Cards.push(a))}getPrngAdvancements(a,l){let s=0;for(let r=0;r<a.length;r++){const t=a[r];let n=t.blueprintCount;l%5===0&&(n+=3,r===0&&(n+=2)),s+=n*(wr-1+1),t.spawnInside||(s+=Nr(t.playerInside,this.numTiles)),s+=Sr}return s}buildShopOptions(a,l,s){let r=[];for(const n of Re)if(!(!n.IsPurchasable&&!n.IsPurchasableAsUpgrade)){var t=new pr(n);if(t.Staple==L.NonStaple||t.Staple==L.WhenMissing){if((t.Tags&Y.Basic)>Y.None)t.Staple=L.FixedStaple;else if(t.StapleWhenMissing){const u=t.Appliance.Name;u!="Research Desk"&&u!="Blueprint Cabinet"&&u!="Plates"&&console.log(`Unexpected ${t.Appliance.Name} StapleWhenMissing Appliance`),a.some(c=>c.ID===t.Appliance.ID)?t.Staple=L.NonStaple:t.Staple=L.WhenMissing}}const o=t.Appliance;if(o.SellOnlyAsDuplicate)a.some(u=>u.ID===o.ID)||(t.IsRemoved=!0);else if(o.RequiresForShop.length>0){let u=!1;for(const c of o.RequiresForShop)a.some(F=>F.ID===c)&&(u=!0);t.IsRemoved=!u}else o.SellOnlyAsUnique&&(o.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${o.Name}, ${o.ID}`),a.some(u=>u.ID===o.ID)&&(t.IsRemoved=!0));(t.Appliance.Name==="Sink"||t.Appliance.Name==="Plates")&&s.every(u=>!u.isMain)&&(t.IsRemoved=!0),t.Filter==xl.RefreshableProvider&&(a.some(u=>u.AllowRefreshes)||(t.IsRemoved=!0)),t.DecorationRequired!=_e.Null&&t.DecorationRequired!=l&&(t.IsRemoved=!0),o.RequiresProcessForShop.length>0&&(o.RequiresProcessForShop.some(u=>s.some(c=>c.RequiredProcesses.includes(u)))||(t.IsRemoved=!0)),r.push(t)}return r}initRandom(a){return Rr(823828,a,this.seed)}getAppliances(a,l){l!==this.cacheDay&&(this.cacheDay=l,this.cache.clear());const s=a.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let t=a[a.length-1].blueprintCount,n;if(l%5==0){s?t=10:t+=3,n=[];for(let c=0;c<t;c++)n[c]=Y.Decoration;if(s)for(const c of[1,2])n[n.length-c]=Y.SpecialEvent}else if(a.length>1){n=[];for(let c=0;c<t;c++)n[c]=xa.DefaultShoppingTag}else{const c=xa.DefaultShoppingTag,F=Math.max(1,t),h=Math.max(0,Math.min(r.filter(m=>m.Staple!==L.NonStaple&&!m.IsRemoved).length,Math.max(2,4-Math.floor(l/5)),F)),_=Math.max(0,F-h);t=F,n=[];for(let m=0;m<h;m++)n[m]=Y.Basic;for(let m=h;m<h+_;m++)n[m]=c}const i=this.initRandom(l).random;let o=this.getPrngAdvancements(a.slice(0,a.length-1),l);if(this.cache.has(o)&&this.cache.get(o).length>=t)return this.cache.get(o).slice(0,t);const u=o;for(;o--;)i.value;{const c=[...r],F=[],h=this.getUpgradeChance(l),_=[];for(let m=0;m<t;m++){const g=n[m],v=i.valueFloat<h;Cr(c,i);for(let T=0;T<c.length;T++){const y=c[T];if(!y.IsRemoved&&!_.includes(y.Appliance)&&!!y.MatchesRequestTags(g)&&!(!v&&y.Staple==L.NonStaple&&y.SellAsUpgrade)){g!=Y.Decoration&&_.push(y.Appliance),F[m]=y.Appliance;break}}F[m]==null&&console.log(`Wasn't able to find a valid roll for blueprint ${m}`)}return this.cache.set(u,F),F}}getUpgradeChance(a){return 1-(1-Math.floor(a/5)*.1)*(1-this.baseUpgradeChance)}}function Nr(e,a){return e?a-2:a-1}const xr=["Research Desk","Blueprint Cabinet","Booking Desk"],Dr=()=>{let e=new Er("");e.OwnedAppliances=[...e.OwnedAppliances,...Re.filter(o=>xr.includes(o.Name))],e.addCard(Tr.filter(o=>o.Name==="Turbo")[0]),e.addCard(xe.filter(o=>o.Name==="Stir Fry")[0]);let a=e.buildShopOptions(e.OwnedAppliances,_e.Null,e.Cards);a=a.filter(o=>!o.IsRemoved);const l=a.length;a=a.filter(o=>o.Staple===L.NonStaple);const s=a.length;a=a.filter(o=>!o.SellAsUpgrade);const r=a.length;console.log({total:l,nonstaples:s,nonupgrades:r});const t=1/s,n=1/r,i=.25*t+.75*n;return console.log(Math.log(.2)/Math.log(1-i)),f(N,{children:JSON.stringify({total:l,nonstaples:s,nonupgrades:r,upgradesAllowed:t,upgradesNotAllowed:n,average:i,rerollFive:1-(1-i)**5})})},Me={id:"yvlrlgoz",weblink:"https://www.speedrun.com/plateup/run/yvlrlgoz",game:"yd4kq3k6",level:null,category:"z275n0gk",videos:{links:[{uri:"https://youtu.be/Phgtmx3hHYA"}]},comment:null,status:{status:"verified",examiner:"j59dwk6x","verify-date":"2024-04-27T01:14:15Z"},players:[{rel:"user",id:"x3wqp5qj",uri:"https://www.speedrun.com/api/v1/users/x3wqp5qj"}],date:"2024-04-16",submitted:"2024-04-16T17:02:18Z",times:{primary:"PT24M29.910S",primary_t:1469.91,realtime:"PT24M29.910S",realtime_t:1469.91,realtime_noloads:null,realtime_noloads_t:0,ingame:null,ingame_t:0},system:{platform:"8gej2n93",emulated:!1,region:null},splits:null,values:{"2lg135el":"9qj3rrgl",wl3d19v8:"5lejooz1","5lyx19gn":"qvvmpn6q",p855yjv8:"14oxrnwq",wlekw94l:"z19n33kq","0nwgp558":"q8k48jgq","6njy11vn":"139x39r1"},links:[{rel:"self",uri:"https://www.speedrun.com/api/v1/runs/yvlrlgoz"},{rel:"game",uri:"https://www.speedrun.com/api/v1/games/yd4kq3k6"},{rel:"category",uri:"https://www.speedrun.com/api/v1/categories/z275n0gk"},{rel:"platform",uri:"https://www.speedrun.com/api/v1/platforms/8gej2n93"},{rel:"examiner",uri:"https://www.speedrun.com/api/v1/users/j59dwk6x"}]},Br="6njy11vn",Or=["q5v4kv7l","le2nd2ml"],Ir="j40p6om8",Da=5*1e3*60*60+10*1e3*60,Mr=()=>{const[e,a]=oe(Me),l=async()=>{const s=await fetch("https://www.speedrun.com/api/v1/runs?status=verified&orderby=verify-date&direction=desc&game=yd4kq3k6&max=1");let r=Me;r=(await s.json()).data[0];const t=r.status.examiner===Ir;let n=Me;n=(await(await fetch("https://www.speedrun.com/api/v1/runs?status=new&orderby=submitted&direction=asc&game=yd4kq3k6&max=1")).json()).data[0];let i=t;Or.includes(n.values[Br])&&(i=!0);const o=n.times.primary_t*1e3;let u=(i?Date.now():new Date(r.status["verify-date"]).valueOf())+Da-o;a(r),Date.now()>=u?(alert("time to verify!"),setTimeout(l,Da-o)):setTimeout(l,u-Date.now()+1e3)};return Ee(()=>{l()},[]),f("div",{children:[f("div",{children:["Last Checked: ",new Date().toTimeString()]}),"Latest Run:",f("div",{children:["Verified at: ",new Date(e.status["verify-date"]).toTimeString()]}),f("div",{children:f("a",{href:e.weblink,children:"Link"})})]})},Ar=x(()=>B(()=>import("./seedSearcher-aYlWTLiY.js"),__vite__mapDeps([0,1,2,3]))),Lr=x(()=>B(()=>import("./versusSeeds-MDuKD-xw.js"),__vite__mapDeps([4,1]))),Ur=x(()=>B(()=>import("./seedSearcherNormal-yB_Jc7K4.js"),__vite__mapDeps([5,1,2,3]))),$r=x(()=>B(()=>import("./branchingRerolls-chynz_8-.js").then(e=>e.b),__vite__mapDeps([6,7,1,2]))),Wr=x(()=>B(()=>import("./cardPaths-OEKwLQwN.js"),__vite__mapDeps([8,9,10,1,2]))),Vr=x(()=>B(()=>import("./weeklyExport-YmDSNjo9.js"),__vite__mapDeps([11,12,10,9]))),Hr=x(()=>B(()=>import("./weekly-y4G6KdYc.js"),__vite__mapDeps([13,7,12,10]))),qr=x(()=>B(()=>import("./coffeeEatingTime-n71TTmL1.js"),__vite__mapDeps([])));x(()=>Promise.resolve(()=>f(N,{})));const jr=x(()=>B(()=>import("./BreakfastAuto-hdH0bdRt.js"),__vite__mapDeps([]))),Ba=x(()=>B(()=>import("./todo-kXdPlJLM.js"),__vite__mapDeps([]))),zr=x(()=>B(()=>import("./IceCreamActions-jsJzJi5t.js"),__vite__mapDeps([]))),Gr=x(()=>B(()=>import("./SaveScumCabinetLayouts-7d9P4b_R.js"),__vite__mapDeps([14,15]))),Kr=()=>f(N,{children:"..."}),Jr=x(()=>B(()=>import("./AutoRig-_8V_4Ku3.js"),__vite__mapDeps([16,6,7,1,2]))),Yr=x(()=>B(()=>import("./CourseOrders-vUPvMC55.js"),__vite__mapDeps([]))),Zr=()=>f(N,{children:[f("div",{children:f(O,{to:"/plateup-set-seed-tools/",children:"<-- All Tools"})}),f(la,{})]}),Qr=()=>f(N,{children:[f(la,{}),f(fr,{})]}),Xr=()=>f(te,{fallback:f(Kr,{}),children:f(la,{})});function et(){return f(Zs,{children:f(C,{element:f(Xr,{}),children:f(C,{path:"/plateup-set-seed-tools/",children:[f(C,{index:!0,element:f(ur,{})}),!1,f(C,{element:f(Zr,{}),children:[f(C,{path:"TODO.html",element:f(Ba,{})}),f(C,{path:"test.html",element:f(Ba,{})}),f(C,{element:f(Qr,{}),children:[f(C,{path:"researchProbabilities.html",element:f(Dr,{})}),f(C,{path:"breakfast-auto.html",element:f(jr,{})}),f(C,{path:"turbo-seed-searcher.html",element:f(Ar,{})}),f(C,{path:"versus-seeds.html",element:f(Lr,{})}),f(C,{path:"normal-seed-searcher.html",element:f(Ur,{})}),f(C,{path:"branching-rerolls.html",element:f($r,{})}),f(C,{path:"build-a-rig.html",element:f(Jr,{})}),f(C,{path:"card-paths.html",element:f(Wr,{})}),f(C,{path:"weekly-export.html",element:f(Vr,{})}),f(C,{path:"weekly.html",element:f(Hr,{})}),f(C,{path:"coffee.html",element:f(qr,{})}),f(C,{path:"ice-cream.html",element:f(zr,{})}),f(C,{path:"course-orders.html",element:f(Yr,{})}),f(C,{path:"scumming.html",element:f(Gr,{})}),f(C,{path:"shh",element:f(Mr,{})})]})]})]})})})}Fe(f(tr,{children:f(et,{})}),document.getElementById("app"));export{Re as A,H as D,De as F,nt as I,O as L,Tr as R,tt as S,le as T,xe as U,X as _,Rr as a,kr as b,Er as c,gr as d,rt as e,Q as f,N as g,oe as h,st as i,Cr as j,z as k,lt as l,Ee as p,Ke as s,f as u,ts as w,ae as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/seedSearcher-aYlWTLiY.js","assets/UnlockSelect-RSBuAXyM.js","assets/usePersistentState-MhNDfNJZ.js","assets/SeedSearchResult-mj12vR6X.js","assets/versusSeeds-MDuKD-xw.js","assets/seedSearcherNormal-yB_Jc7K4.js","assets/branchingRerolls-chynz_8-.js","assets/GhostBlueprints-_y5Up0kp.js","assets/cardPaths-OEKwLQwN.js","assets/CardPaths-nH6oF9i6.js","assets/cards-b2BGC2iV.js","assets/weeklyExport-YmDSNjo9.js","assets/weekly-ZgQ5Pj-n.js","assets/weekly-y4G6KdYc.js","assets/SaveScumCabinetLayouts-7d9P4b_R.js","assets/SaveScumCabinetLayouts-LTepJfbf.css","assets/AutoRig-_8V_4Ku3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
