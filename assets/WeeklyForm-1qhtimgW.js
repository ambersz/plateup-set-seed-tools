var de=Object.defineProperty;var pe=(e,a,s)=>a in e?de(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;var g=(e,a,s)=>(pe(e,typeof a!="symbol"?a+"":a,s),s);import{l as f,b as B,y as z,g as x,$ as D,u as d}from"./jsxRuntime.module-hyn2oXrv.js";var H,m,I,G,U=0,oe=[],A=[],V=f.__b,j=f.__r,K=f.diffed,Y=f.__c,Z=f.unmount;function Te(e,a){f.__h&&f.__h(m,e,U||a),U=0;var s=m.__H||(m.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({__V:A}),s.__[e]}function w(e){return U=1,me(ue,e)}function me(e,a,s){var l=Te(H++,2);if(l.t=e,!l.__c&&(l.__=[s?s(a):ue(void 0,a),function(i){var o=l.__N?l.__N[0]:l.__[0],t=l.t(o,i);o!==t&&(l.__N=[t,l.__[1]],l.__c.setState({}))}],l.__c=m,!m.u)){var r=function(i,o,t){if(!l.__c.__H)return!0;var c=l.__c.__H.__.filter(function(T){return T.__c});if(c.every(function(T){return!T.__N}))return!F||F.call(this,i,o,t);var v=!1;return c.forEach(function(T){if(T.__N){var p=T.__[0];T.__=T.__N,T.__N=void 0,p!==T.__[0]&&(v=!0)}}),!(!v&&l.__c.props===i)&&(!F||F.call(this,i,o,t))};m.u=!0;var F=m.shouldComponentUpdate,h=m.componentWillUpdate;m.componentWillUpdate=function(i,o,t){if(this.__e){var c=F;F=void 0,r(i,o,t),F=c}h&&h.call(this,i,o,t)},m.shouldComponentUpdate=r}return l.__N||l.__}function ve(){for(var e;e=oe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(N),e.__H.__h.forEach(W),e.__H.__h=[]}catch(a){e.__H.__h=[],f.__e(a,e.__v)}}f.__b=function(e){m=null,V&&V(e)},f.__r=function(e){j&&j(e),H=0;var a=(m=e.__c).__H;a&&(I===m?(a.__h=[],m.__h=[],a.__.forEach(function(s){s.__N&&(s.__=s.__N),s.__V=A,s.__N=s.i=void 0})):(a.__h.forEach(N),a.__h.forEach(W),a.__h=[],H=0)),I=m},f.diffed=function(e){K&&K(e);var a=e.__c;a&&a.__H&&(a.__H.__h.length&&(oe.push(a)!==1&&G===f.requestAnimationFrame||((G=f.requestAnimationFrame)||be)(ve)),a.__H.__.forEach(function(s){s.i&&(s.__H=s.i),s.__V!==A&&(s.__=s.__V),s.i=void 0,s.__V=A})),I=m=null},f.__c=function(e,a){a.some(function(s){try{s.__h.forEach(N),s.__h=s.__h.filter(function(l){return!l.__||W(l)})}catch(l){a.some(function(r){r.__h&&(r.__h=[])}),a=[],f.__e(l,s.__v)}}),Y&&Y(e,a)},f.unmount=function(e){Z&&Z(e);var a,s=e.__c;s&&s.__H&&(s.__H.__.forEach(function(l){try{N(l)}catch(r){a=r}}),s.__H=void 0,a&&f.__e(a,s.__v))};var J=typeof requestAnimationFrame=="function";function be(e){var a,s=function(){clearTimeout(l),J&&cancelAnimationFrame(a),setTimeout(e)},l=setTimeout(s,100);J&&(a=requestAnimationFrame(s))}function N(e){var a=m,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),m=a}function W(e){var a=m;e.__c=e.__(),m=a}function ue(e,a){return typeof a=="function"?a(e):a}function ge(e,a){for(var s in a)e[s]=a[s];return e}function Q(e,a){for(var s in e)if(s!=="__source"&&!(s in a))return!0;for(var l in a)if(l!=="__source"&&e[l]!==a[l])return!0;return!1}function X(e){this.props=e}(X.prototype=new B).isPureReactComponent=!0,X.prototype.shouldComponentUpdate=function(e,a){return Q(this.props,e)||Q(this.state,a)};var ee=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ee&&ee(e)};var Se=f.__e;f.__e=function(e,a,s,l){if(e.then){for(var r,F=a;F=F.__;)if((r=F.__c)&&r.__c)return a.__e==null&&(a.__e=s.__e,a.__k=s.__k),r.__c(e,a)}Se(e,a,s,l)};var ae=f.unmount;function ie(e,a,s){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),e.__c.__H=null),(e=ge({},e)).__c!=null&&(e.__c.__P===s&&(e.__c.__P=a),e.__c=null),e.__k=e.__k&&e.__k.map(function(l){return ie(l,a,s)})),e}function ce(e,a,s){return e&&s&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(l){return ce(l,a,s)}),e.__c&&e.__c.__P===a&&(e.__e&&s.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=s)),e}function E(){this.__u=0,this.t=null,this.__b=null}function _e(e){var a=e.__.__c;return a&&a.__a&&a.__a(e)}function M(){this.u=null,this.o=null}f.unmount=function(e){var a=e.__c;a&&a.__R&&a.__R(),a&&32&e.__u&&(e.type=null),ae&&ae(e)},(E.prototype=new B).__c=function(e,a){var s=a.__c,l=this;l.t==null&&(l.t=[]),l.t.push(s);var r=_e(l.__v),F=!1,h=function(){F||(F=!0,s.__R=null,r?r(i):i())};s.__R=h;var i=function(){if(!--l.__u){if(l.state.__a){var o=l.state.__a;l.__v.__k[0]=ce(o,o.__c.__P,o.__c.__O)}var t;for(l.setState({__a:l.__b=null});t=l.t.pop();)t.forceUpdate()}};l.__u++||32&a.__u||l.setState({__a:l.__b=l.__v.__k[0]}),e.then(h,h)},E.prototype.componentWillUnmount=function(){this.t=[]},E.prototype.render=function(e,a){if(this.__b){if(this.__v.__k){var s=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=ie(this.__b,s,l.__O=l.__P)}this.__b=null}var r=a.__a&&z(x,null,e.fallback);return r&&(r.__u&=-33),[z(x,null,a.__a?null:e.children),r]};var se=function(e,a,s){if(++s[1]===s[0]&&e.o.delete(a),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(s=e.u;s;){for(;s.length>3;)s.pop()();if(s[1]<s[0])break;e.u=s=s[2]}};(M.prototype=new B).__a=function(e){var a=this,s=_e(a.__v),l=a.o.get(e);return l[0]++,function(r){var F=function(){a.props.revealOrder?(l.push(r),se(a,e,l)):r()};s?s(F):F()}},M.prototype.render=function(e){this.u=null,this.o=new Map;var a=D(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&a.reverse();for(var s=a.length;s--;)this.o.set(a[s],this.u=[1,0,this.u]);return e.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(a,s){se(e,s,a)})};var Ce=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ke=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ye=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Pe=/[A-Z0-9]/g,Be=typeof document<"u",Re=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};B.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(B.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(a){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:a})}})});var le=f.event;function we(){}function Me(){return this.cancelBubble}function Ae(){return this.defaultPrevented}f.event=function(e){return le&&(e=le(e)),e.persist=we,e.isPropagationStopped=Me,e.isDefaultPrevented=Ae,e.nativeEvent=e};var Ne={enumerable:!1,configurable:!0,get:function(){return this.class}},Fe=f.vnode;f.vnode=function(e){typeof e.type=="string"&&function(a){var s=a.props,l=a.type,r={};for(var F in s){var h=s[F];if(!(F==="value"&&"defaultValue"in s&&h==null||Be&&F==="children"&&l==="noscript"||F==="class"||F==="className")){var i=F.toLowerCase();F==="defaultValue"&&"value"in s&&s.value==null?F="value":F==="download"&&h===!0?h="":i==="ondoubleclick"?F="ondblclick":i!=="onchange"||l!=="input"&&l!=="textarea"||Re(s.type)?i==="onfocus"?F="onfocusin":i==="onblur"?F="onfocusout":ye.test(F)?F=i:l.indexOf("-")===-1&&ke.test(F)?F=F.replace(Pe,"-$&").toLowerCase():h===null&&(h=void 0):i=F="oninput",i==="oninput"&&r[F=i]&&(F="oninputCapture"),r[F]=h}}l=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=D(s.children).forEach(function(o){o.props.selected=r.value.indexOf(o.props.value)!=-1})),l=="select"&&r.defaultValue!=null&&(r.value=D(s.children).forEach(function(o){o.props.selected=r.multiple?r.defaultValue.indexOf(o.props.value)!=-1:r.defaultValue==o.props.value})),s.class&&!s.className?(r.class=s.class,Object.defineProperty(r,"className",Ne)):(s.className&&!s.class||s.class&&s.className)&&(r.class=r.className=s.className),a.props=r}(e),e.$$typeof=Ce,Fe&&Fe(e)};var re=f.__r;f.__r=function(e){re&&re(e),e.__c};var ne=f.diffed;f.diffed=function(e){ne&&ne(e);var a=e.props,s=e.__e;s!=null&&e.type==="textarea"&&"value"in a&&a.value!==s.value&&(s.value=a.value==null?"":a.value)};const Oe=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False\r
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
-1380985631,False,False,Banner,False,False,,,8192,0,0,False\r
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False\r
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
-636342486,True,False,Cobwebs,False,False,,,8192,0,0,False\r
-1318523640,True,False,Ghost Statue,False,False,,,8192,0,0,False\r
-621580281,True,False,Pumpkin,False,False,,,8192,0,0,False\r
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
-1552572658,True,False,Candles,False,False,,,8192,0,0,False\r
-119593913,True,False,Pumpkin Stack,False,False,,,8192,0,0,False\r
-379172217,True,False,Witch Shelf,False,False,,,8192,0,0,False\r
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
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False\r
-1995745069,False,False,SyncModsViewHolder,False,False,,,0,0,0,False\r
`,Ie=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing"],Ee=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean"],O=Oe.split(`\r
`).map(e=>{const a=e.split(",");let s={};for(let l=0;l<a.length;l++){let r;switch(Ee[l]){case"number":r=Number(a[l]);break;case"boolean":r=a[l]==="True";break;case"number[]":a[l]===""?r=[]:r=a[l].split(":").map(F=>Number(F));break;default:r=a[l]}s[Ie[l]]=r}return s});class xe{constructor(a){g(this,"Staple");g(this,"Tags");g(this,"StapleWhenMissing");g(this,"Appliance");g(this,"IsRemoved");g(this,"Filter");g(this,"DecorationRequired");g(this,"SellAsUpgrade");this.Appliance=a,this.Tags=a.ShoppingTags,this.DecorationRequired=a.ThemeRequired,this.SellAsUpgrade=a.IsPurchasableAsUpgrade,this.Filter=a.ShopRequirementFilter,this.StapleWhenMissing=a.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(a){return a&1?this.Staple!==0:a&this.Tags?this.Staple===0:!1}}var S=(e=>(e[e.NonStaple=0]="NonStaple",e[e.FixedStaple=1]="FixedStaple",e[e.BonusStaple=2]="BonusStaple",e[e.WhenMissing=3]="WhenMissing",e))(S||{}),y=(e=>(e[e.None=0]="None",e[e.Basic=1]="Basic",e[e.Decoration=2]="Decoration",e[e.Technology=4]="Technology",e[e.FrontOfHouse=8]="FrontOfHouse",e[e.Plumbing=16]="Plumbing",e[e.Cooking=32]="Cooking",e[e.Automation=64]="Automation",e[e.Christmas=128]="Christmas",e[e.Misc=256]="Misc",e[e.Office=512]="Office",e[e.BlueprintUpgrader=1024]="BlueprintUpgrader",e[e.BlueprintStore=2048]="BlueprintStore",e[e.Halloween=4096]="Halloween",e[e.SpecialEvent=8192]="SpecialEvent",e))(y||{});const te={DefaultShoppingTag:892};var fe=(e=>(e[e.None=0]="None",e[e.RefreshableProvider=1]="RefreshableProvider",e))(fe||{}),q=(e=>(e[e.Null=0]="Null",e[e.Exclusive=1]="Exclusive",e[e.Affordable=2]="Affordable",e[e.Charming=4]="Charming",e[e.Formal=8]="Formal",e[e.Kitchen=16]="Kitchen",e))(q||{});const De=38;function He(e,a){let s=e.length;for(;s-- >1;){let l=a.range(0,s+1);[e[s],e[l]]=[e[l],e[s]]}return e}class L{constructor(a,s){g(this,"fixedSeed");g(this,"instance");g(this,"random");typeof a=="string"&&(a=We(a)),this.fixedSeed=a,this.instance=s,this.random=new Ue(a+Math.imul(124192293,s))}useSubcontext(a){return new L(this.fixedSeed,124192293*a+this.instance)}}class Ue{constructor(a){g(this,"seed");const s=i=>Math.imul(1812433253,i)+1>>0,l=a>>0,r=s(l),F=s(r),h=s(F);this.seed=[l,r,F,h]}get value(){let a=this.seed.shift(),s=this.seed[2];return a^=a<<11,a^=a>>>8,s^=s>>>19,s=(s^a)>>0,this.seed.push(s),s}range(a,s){return(this.value>>>0)%(s-a)+a}valueFloat(){return(this.value<<9>>>0)/4294967295}}function We(e){const s=new TextEncoder().encode(e);let l=5381,r=s.length;for(;r>0;){let F=--r;l=(l<<5)+l+s[F]}return l>>0}const qe=O.filter(e=>e.IsPurchasable||e.IsPurchasableAsUpgrade).length;class Le{constructor(a,s=0){g(this,"seed");g(this,"mapSize");g(this,"baseUpgradeChance");g(this,"OwnedAppliances");g(this,"Cards");this.seed=a,this.mapSize=1,this.baseUpgradeChance=s,this.OwnedAppliances=[],this.Cards=[]}addCard(a){a!==void 0&&(this.Cards.push(a),this.OwnedAppliances=this.OwnedAppliances.concat(a.IngredientProviders.flatMap(s=>O.filter(l=>l.ID===s))))}getPrngAdvancements(a){let s=0;for(const l of a)s+=l.blueprintCount*(qe-1+1),l.spawnInside||(s+=$e(l.playerInside,this.mapSize)),s+=De;return s}buildShopOptions(a,s,l){let r=[];for(const h of O)if(!(!h.IsPurchasable&&!h.IsPurchasableAsUpgrade)){var F=new xe(h);if(F.Staple==S.NonStaple||F.Staple==S.WhenMissing){if((F.Tags&y.Basic)>y.None)F.Staple=S.FixedStaple;else if(F.StapleWhenMissing){const t=F.Appliance.Name;t!="Research Desk"&&t!="Blueprint Cabinet"&&t!="Plates"&&console.log(`Unexpected ${F.Appliance.Name} StapleWhenMissing Appliance`),a.includes(F.Appliance)?F.Staple=S.NonStaple:F.Staple=S.WhenMissing}}const o=F.Appliance;if(o.SellOnlyAsDuplicate)a.includes(o)||(F.IsRemoved=!0);else if(o.RequiresForShop.length>0){let t=!1;for(const c of o.RequiresForShop)a.some(v=>v.ID===c)&&(t=!0);F.IsRemoved=!t}else o.SellOnlyAsUnique&&(o.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${o.Name}, ${o.ID}`),F.IsRemoved=!0);F.Filter==fe.RefreshableProvider,F.DecorationRequired!=q.Null&&F.DecorationRequired!=s&&(F.IsRemoved=!0),o.RequiresProcessForShop.length>0&&(o.RequiresProcessForShop.some(t=>l.some(c=>c.RequiredProcesses.includes(t)))||(F.IsRemoved=!0)),r.push(F)}return r}initRandom(a){return new L(this.seed,823828*1231231+a)}getAppliances(a,s){const l=a.length===1,r=this.buildShopOptions(this.OwnedAppliances,q.Null,this.Cards),F=this.initRandom(s).random;let h=this.getPrngAdvancements(a.slice(0,a.length-1));for(;h--;)F.value;let i=a[a.length-1].blueprintCount,o;if(s%5==0){l&&(i=8),o=[];for(let t=0;t<i;t++)o[t]=y.Decoration}else if(a.length>1){o=[];for(let t=0;t<i;t++)o[t]=te.DefaultShoppingTag}else{const t=te.DefaultShoppingTag,c=Math.max(1,i),v=Math.max(0,Math.min(4,Math.max(2,4-Math.floor(s/5)),c)),T=Math.max(0,c-v);i=c,o=[];for(let p=0;p<v;p++)o[p]=y.Basic;for(let p=v;p<v+T;p++)o[p]=t}{const t=[...r],c=[],v=1-(1-Math.floor(s/5)*.1)*(1-this.baseUpgradeChance),T=[];for(let p=0;p<i;p++){const C=o[p],k=F.valueFloat()<v;He(t,F);for(let u=0;u<t.length;u++){const n=t[u];if(!n.IsRemoved&&!T.includes(n.Appliance)&&!!n.MatchesRequestTags(C)&&!(!k&&n.Staple==S.NonStaple&&n.SellAsUpgrade)){C!=y.Decoration&&T.push(n.Appliance),c[p]=n.Appliance;break}}c[p]==null&&console.log(`Wasn't able to find a valid roll for blueprint ${p}`)}return c}}}function $e(e,a){let s=60;switch(a){case 1:s=60;break;case 2:s=70;break;case 3:s=9*13;break;case 4:s=16*12;break;default:console.log(`Unknown Map Size ${a}`),s=60;break}return e?s-2:s-1}const ze=`-85470894,Black Coffee,-1316622579,-1609758240\r
373996608,Ice Cream,,-1533430406\r
-2075899,Breakfast,-523839730:-1706154991,380220741:925796718\r
-1199743580,Breakfast Beans,1972879238,1807525572:-957949759\r
1436814208,Breakfast Eggs,1972879238:2087693779,961148621\r
-1998930853,Breakfast Extras,2087693779,-712909563:-1097889139\r
-1778969928,Burgers,1972879238,759552160:380220741:385684499\r
965292477,Cheeseburgers,1972879238:2087693779,759552160:380220741:385684499:-117339838\r
-1091625127,Fresh Patties,1972879238:2087693779,759552160:380220741:961148621:-484165118\r
1298035216,Burger Toppings,1972879238:2087693779,759552160:380220741:-712909563:385684499:-2042103798\r
1626323920,Hot Dogs,1972879238,-1132411297:380220741:1799769627:-965827229\r
-278713285,Hot Dog - Mustard,,-117356585\r
1743900205,Fish,1972879238,-609358791:380220741:-1735137431\r
-297968808,Crab Cake,2087693779:1972879238,380220741:925796718:961148621\r
243846255,Fish Selection,,-609358791\r
-243820179,Fish Selection,,-609358791\r
1442262270,Fish Fillet,1972879238:2087693779,380220741\r
274986412,Oysters,2087693779,380220741\r
-643878280,Spiny Fish,2087693779,380220741\r
-1528287489,,2087693779:1972879238:-523839730,925796718:-266993023\r
670300431,,1972879238,\r
-211821608,Apple Pies,2087693779:1972879238:-523839730,925796718:-266993023:-905438738\r
-133939790,Pies,-1706154991:-523839730,925796718:-484165118:-266993023:380220741\r
-1992316049,Mushroom Pie,2087693779:1972879238:-523839730,-1097889139:925796718:-266993023\r
-1802123036,Vegetable Pies,2087693779:1972879238:-523839730,925796718:-266993023:-452101383:-1573812073\r
1570910782,Apple Salad,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621\r
1356267749,Salad,2087693779,1193867305:-712909563:380220741\r
-862637543,Potato Salad,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023\r
372460604,Salad Toppings,,-1434800013:-2042103798\r
1384317454,Bone-in Steaks,1972879238,269523389\r
-959076098,Steak,1972879238,-484165118:380220741\r
-953651922,Steak Sauce - Mushroom,1972879238:2087693779,-1097889139:-266993023:-2042103798:-957949759\r
2074054556,Steak Sauce - Red Wine Jus,1972879238,-957949759:-2042103798:-266993023:-1353971407\r
-1192928429,Steak Topping - Mushroom,2087693779,-1097889139\r
-851525606,Steak Topping - Tomato,2087693779,-712909563\r
1916300984,Thick Cut Steaks,1972879238,-1507801323\r
-1716993344,Thin Cut Steaks,1972879238,1800865634\r
-1653221873,Stir Fry,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254\r
-204178430,Steak Stir Fry,2087693779:1972879238,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073\r
1380953991,Broccoli,1972879238,-1573812073:-957949759:-266993023\r
-520693398,Chips,1972879238:2087693779,44541785\r
364243605,Mashed Potato,1972879238:2087693779,-957949759:44541785:-266993023\r
2012685115,Carrot Soup,1972879238,-266993023:-2042103798:-452101383:-957949759\r
-997241706,Meat Soup,1972879238,-484165118:-2042103798:-957949759:-266993023\r
-233806503,Tomato Soup,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023\r
312770813,Cheese Board,2087693779,-905438738:235423916:-117339838:1834063794\r
550743424,Pizza,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741\r
1434421325,Mushroom Pizza,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139\r
-2071275506,Onion Pizza,2087693779:-1706154991:-523839730,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563\r
-1745179096,Onion Rings,1972879238:2087693779,-2042103798:925796718\r
1168007081,Corn on the Cob,1972879238,976574457\r
-95393944,Ice Cream - Bananas,,\r
-81988936,Ice Cream - Nuts,,\r
2105828628,Ice Cream - Strawberry,,\r
400765800,Pumpkin Pies,2087693779:1972879238:-523839730,-1055654549:925796718\r
1393945424,Pumpkin Seed,1972879238,-1055654549\r
1984233383,Pumpkin Soup,1972879238,-266993023:-2042103798:-1055654549:-957949759\r
536093200,Nut Roast,2087693779:-1706154991,1834063794:380220741:-2042103798\r
-1405391769,Affogato,,-1609758240:-1533430406\r
1847735819,Bread,1972879238,925796718:235423916\r
-1015158173,Broccoli Cheese Soup,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798\r
12170609,Cherry Pie,1972879238,148543530:925796718\r
-1289628495,Roast Potato,1972879238,44541785\r
-338554380,Sweetcorn,,\r
-1409566802,Dessert Waffles,,\r
1551533879,Turkey,-1706154991,-1506824829:380220741\r
878396172,Christmas Crackers,,303858729\r
1398180456,Turkey - Cranberry Sauce,2087693779,735786885:-2133205155\r
-1460640973,Turkey - Gravy,1972879238,-2042103798:-957949759:-266993023\r
-1243742384,Turkey - Stuffing,2087693779:1972879238:-523839730,-2042103798:925796718:-266993023\r
-1742801708,Bamboo,1972879238,-2092567672:-266993023:-957949759\r
-437161441,Bamboo Stir Fry,2087693779:1972879238,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023\r
-1759612454,Dumpling - Soy Sauce,,-471813067\r
367917843,Dumplings,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741\r
137627410,Seaweed,1972879238,595306349\r
1696424557,Mandarin Starter,,-1210117767\r
1642878331,Mushroom Stir Fry,2087693779:1972879238,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254\r
1064343768,Stir Fry - Soy Sauce,,-471813067\r
1103885337,Cake Stand,,143484231\r
16318784,Black Coffee,-1316622579,-1609758240\r
-740215310,Extra Milk,,120342736\r
-696561631,Extra Sugar,,-2133205155\r
2133632711,Iced Coffee,-1316622579,-1609758240:801015432\r
-141282934,Latte,-1316622579:510796221,-1609758240:120342736\r
1398671754,Tea,,-1598460622:1377093570:-762638188:-266993023\r
1316998108,Sponge Cake,-1706154991:-523839730,-660310536:961148621:925796718:120342736:-217313684:-2133205155\r
1609120418,Brownies,-1706154991:-523839730,783588616:-2135982034:961148621:925796718:-217313684:-2133205155\r
-1115351824,Cake Batter,,\r
-1081939710,Cake Flavour - Chocolate,1972879238,783588616\r
-810134986,Cake Flavour - Coffee,-1316622579,-1609758240\r
-1693098895,Cake Flavour - Lemon,2087693779,1470180731\r
1902212503,Cookies,-1706154991:-523839730,-1723125645:961148621:925796718:-217313684:-2133205155\r
627241196,Cupcake,-1706154991:-523839730,-315287689:961148621:925796718:120342736:-217313684:-2133205155\r
-1166412657,Doughnut,-523839730:1972879238,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759\r
1113735761,Cakes,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616\r
`,Ge=ze.split(`\r
`).map(e=>{var o,t;const[a,s,l,r]=e.split(","),F=Number(a),h=((o=l==null?void 0:l.split(":"))==null?void 0:o.map(c=>Number(c)))??[],i=((t=r==null?void 0:r.split(":"))==null?void 0:t.map(c=>Number(c)))??[];return{ID:F,Name:s,RequiredProcesses:h,IngredientProviders:i}}),ea=({defaultSeed:e,disableSeedInput:a=!1,cardDefaults:s={},maxRerolls:l})=>{const[r,F]=w(e),[h,i]=w(1),[o,t]=w($),[c,v]=w(s),T=n=>{v(_=>({..._,[n.target.id]:n.target.checked}))};let p=[];for(const[n,_]of Object.entries(c))_&&p.push(n);const C={seed:r,day:h,upgradeChance:r.indexOf("az")>-1?.25:0,blueprintCount:r.indexOf("az")>-1?7:5,ownedAppliances:o,cards:p},R=n=>{i(Number(n.target.value))},k=n=>{F(n.target.value)},u=n=>{const _=n.target;t(b=>({...b,[_.id]:_.checked}))};return d(x,{children:[d("h3",{children:["Seed:"," ",a?r:d("input",{disabled:a,value:r,onChange:k})]}),d("label",{children:"Shop after completing day "}),d("input",{style:"border:none;width:2.5em",type:"number",value:h,onChange:R}),d("div",{children:Object.entries(c).map(([n,_])=>d("span",{style:"margin:0 20px 0 0",children:[d("label",{for:n,children:n}),d("input",{type:"checkbox",id:n,checked:_,onChange:T})]}))}),d("div",{children:he.map(n=>d("span",{style:"margin:0 25px 0 0",children:[d("label",{for:n,children:["Own ",n,"?"]}),d("input",{type:"checkbox",checked:o[n],id:n,onChange:u})]}))}),d(Ke,{...C,maxRerolls:l??Ye(h)})]})},$={},he=["Blueprint Cabinet","Plates","Research Desk"];for(const e of he)$[e]=!1;$["Blueprint Cabinet"]=!0;const Ve=[!0,!1],je=[!0,!1],Ke=({seed:e,day:a=1,blueprintCount:s,upgradeChance:l,ownedAppliances:r,cards:F,maxRerolls:h})=>{const i=new Le(e,l);for(let u=0;u<=F.length;u++)if(F[u]){const n=Ge.filter(_=>_.Name===F[u])[0];n&&i.addCard(n)}const o=Object.entries(r).filter(u=>u[1]).map(u=>u[0]).map(u=>O.filter(n=>n.Name===u)[0]);for(const u of o)u&&i.OwnedAppliances.push(u);let t=[];for(const u of je)for(const n of Ve)if(t.push({spawnInside:u,playerInside:u?void 0:n,blueprintCount:s}),u)break;const c=[];let v=[[],[],[],[]];for(let u=0;u<t.length;u++)for(let n=0;n<t.length;n++){c.push([t[u],t[n]]);const _=[t[u].spawnInside,t[u].playerInside,t[n].spawnInside,t[n].playerInside];for(let b=0;b<_.length;b++)v[b].length&&v[b].at(-1).val===_[b]?v[b].at(-1).run+=1:v[b].push({val:_[b],run:1})}let T=[];const p=s,C=4,R=h;for(let u=0;u<R;u++){const n=[];for(const _ of u?c:c.map(b=>[b[0]])){const b=[..._];u&&b.splice(-1,1,{...b.at(-1),blueprintCount:p+C}),n.push(i.getAppliances(b,a).map(P=>P.Name))}if(T.push(n),u)for(let _=0;_<c.length;_++)c[_].push(c[_][c[_].length-1])}const k=(u,n)=>{switch(u){case 0:return n?"Spawn Inside":"Spawn Outside";case 1:return n===void 0?"":n?"Stand Inside at End of Day":"Everyone Outside at End of Day";case 2:return n?"Spawn Inside for Rerolls":"Spawn Outside for Rerolls";case 3:return n===void 0?"":n?"Someone Inside when Rerolling":"Everyone Outside when Rerolling";default:throw new Error("Too Many Headers")}};return d("table",{children:[d("thead",{children:v.map((u,n)=>d("tr",{children:[!n&&d("th",{colSpan:1,rowSpan:4,children:"Reroll #"}),u.map(_=>_.val!==void 0&&d("th",{colSpan:_.run,rowSpan:k(n,_.val).indexOf("Spawn Inside")>-1?2:1,scope:"colgroup",children:k(n,_.val)}))]}))}),T.map((u,n)=>d("tr",{children:[d("th",{children:n||"Spawn"}),n?u.map(_=>d("td",{colspan:1,children:_.map((b,P)=>d("span",{class:P<p?"":"ghost",children:b+(P<_.length-1?", ":"")}))})):d("td",{style:"text-align:center;",colSpan:16,children:u[0].join(", ")})]}))]})};function Ye(e){return[5,8,10,12,13,15,16,18,19,20,21,22,23,24,25][e-1]+1}export{ea as W};
