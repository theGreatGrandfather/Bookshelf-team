var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=t.parcelRequired7c6;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var s=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,s.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequired7c6=s);var i,r=s("eyjy7"),o=s("ix4Jr"),a=s("4a6xH"),h=s("7vF8m"),c=s("ffjl9"),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},l={},d=d||{},f=u||self;function g(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w).apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}b.prototype.s=!1,b.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y))},b.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function I(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(g(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",(()=>{}),e),f.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}function N(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=N().indexOf(t)}function R(t){return R[" "](t),t}R[" "]=function(){};var L,M,O,P=x("Opera"),F=x("Trident")||x("MSIE"),V=x("Edge"),U=V||F,q=x("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),j=-1!=N().toLowerCase().indexOf("webkit")&&!x("Edge");function B(){var t=f.document;return t?t.documentMode:void 0}t:{var K="",$=(M=N(),q?/rv:([^\);]+)(\)|;)/.exec(M):V?/Edge\/([\d\.]+)/.exec(M):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(M):j?/WebKit\/(\S+)/.exec(M):P?/(?:Version)[ \/]?(\S+)/.exec(M):void 0);if($&&(K=$?$[1]:""),F){var z=B();if(null!=z&&z>parseFloat(K)){L=String(z);break t}}L=K}if(f.document&&F){var G=B();O=G||(parseInt(L,10)||void 0)}else O=void 0;var H=O;function Q(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{R(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:X[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Q.$.h.call(this)}}_(Q,A);var X={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function et(t){const e={};for(const n in t)e[n]=t[n];return e}const nt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function st(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<nt.length;e++)n=nt[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function it(t){this.src=t,this.g={},this.h=0}function rt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=C(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ot(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}it.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ot(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new J(e,this.src,r,!!s,i)).ia=n,t.push(e)),e};var at="closure_lm_"+(1e6*Math.random()|0),ht={};function ct(t,e,n,s,i){if(s&&s.once)return lt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ct(t,e[r],n,s,i);return null}return n=vt(n),t&&t[W]?t.O(e,n,p(s)?!!s.capture:!!s,i):ut(t,e,n,!1,s,i)}function ut(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=mt(t);if(a||(t[at]=a=new it(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=pt;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)k||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(gt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function lt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)lt(t,e[r],n,s,i);return null}return n=vt(n),t&&t[W]?t.P(e,n,p(s)?!!s.capture:!!s,i):ut(t,e,n,!0,s,i)}function dt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)dt(t,e[r],n,s,i);else s=p(s)?!!s.capture:!!s,n=vt(n),t&&t[W]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ot(r=t.g[e],n,s,i))&&(Z(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=mt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ot(e,n,s,i)),(n=-1<t?e[t]:null)&&ft(n))}function ft(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[W])rt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(gt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=mt(e))?(rt(n,t),0==n.h&&(n.src=null,e[at]=null)):Z(t)}}}function gt(t){return t in ht?ht[t]:ht[t]="on"+t}function pt(t,e){if(t.fa)t=!0;else{e=new Q(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ft(t),t=n.call(s,e)}return t}function mt(t){return(t=t[at])instanceof it?t:null}var yt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"==typeof t?t:(t[yt]||(t[yt]=function(e){return t.handleEvent(e)}),t[yt])}function wt(){b.call(this),this.i=new it(this),this.S=this,this.J=null}function Et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;st(e=new A(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Tt(o,s,!0,e)&&i}if(i=Tt(o=e.g=t,s,!0,e)&&i,i=Tt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=Tt(o=e.g=n[r],s,!1,e)&&i}function Tt(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&rt(t.i,o),i=!1!==a.call(h,s)&&i}}return i&&!s.defaultPrevented}_(wt,b),wt.prototype[W]=!0,wt.prototype.removeEventListener=function(t,e,n,s){dt(this,t,e,n,s)},wt.prototype.N=function(){if(wt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Z(n[s]);delete e.g[t],e.h--}}this.J=null},wt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},wt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var _t=f.JSON.stringify;function bt(){var t=Nt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ct=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new St),(t=>t.reset()));class St{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function It(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function At(t){f.setTimeout((()=>{throw t}),0)}let kt,Dt=!1,Nt=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ct.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},xt=()=>{const t=f.Promise.resolve(void 0);kt=()=>{t.then(Rt)}};var Rt=()=>{for(var t;t=bt();){try{t.h.call(t.g)}catch(t){At(t)}var e=Ct;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1};function Lt(t,e){wt.call(this),this.h=t||1,this.g=e||f,this.j=E(this.qb,this),this.l=Date.now()}function Mt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ot(t,e,n){if("function"==typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Pt(t){t.g=Ot((()=>{t.g=null,t.i&&(t.i=!1,Pt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Lt,wt),(i=Lt.prototype).ga=!1,i.T=null,i.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Mt(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Lt.$.N.call(this),Mt(this),delete this.g};class Ft extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Pt(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vt(t){b.call(this),this.h=t,this.g={}}_(Vt,b);var Ut=[];function qt(t,e,n,s){Array.isArray(n)||(n&&(Ut[0]=n.toString()),n=Ut);for(var i=0;i<n.length;i++){var r=ct(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function jt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ft(t)}),t),t.g={}}function Bt(){this.g=!0}function Kt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return _t(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Vt.prototype.N=function(){Vt.$.N.call(this),jt(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Bt.prototype.Ea=function(){this.g=!1},Bt.prototype.info=function(){};var $t={},zt=null;function Gt(){return zt=zt||new wt}function Ht(t){A.call(this,$t.Ta,t)}function Qt(t){const e=Gt();Et(e,new Ht(e))}function Xt(t,e){A.call(this,$t.STAT_EVENT,t),this.stat=e}function Wt(t){const e=Gt();Et(e,new Xt(e,t))}function Yt(t,e){A.call(this,$t.Ua,t),this.size=e}function Jt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return f.setTimeout((function(){t()}),e)}$t.Ta="serverreachability",_(Ht,A),$t.STAT_EVENT="statevent",_(Xt,A),$t.Ua="timingevent",_(Yt,A);var Zt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},te={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ee(){}function ne(t){return t.h||(t.h=t.i())}function se(){}ee.prototype.h=null;var ie,re={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oe(){A.call(this,"d")}function ae(){A.call(this,"c")}function he(){}function ce(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Vt(this),this.P=le,t=U?125:void 0,this.V=new Lt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}_(oe,A),_(ae,A),_(he,ee),he.prototype.g=function(){return new XMLHttpRequest},he.prototype.i=function(){return{}},ie=new he;var le=45e3,de={},fe={};function ge(t,e,n){t.L=1,t.v=Le(ke(e)),t.s=n,t.S=!0,pe(t,null)}function pe(t,e){t.G=Date.now(),we(t),t.A=ke(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Ge(n.i,"t",s),t.C=0,n=t.l.J,t.h=new ue,t.g=Gn(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ft(E(t.Pa,t,t.g),t.O)),qt(t.U,t.g,"readystatechange",t.nb),e=t.I?et(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qt(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function me(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function ye(t,e,n){let s,i=!0;for(;!t.J&&t.C<n.length;){if(s=ve(t,n),s==fe){4==e&&(t.o=4,Wt(14),i=!1),Kt(t.j,t.m,null,"[Incomplete Response]");break}if(s==de){t.o=4,Wt(15),Kt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Kt(t.j,t.m,s,null),Ce(t,s)}me(t)&&s!=fe&&s!=de&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Wt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vn(e),e.M=!0,Wt(11))):(Kt(t.j,t.m,n,"[Invalid Chunked Response]"),be(t),_e(t))}function ve(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?fe:(n=Number(e.substring(n,s)),isNaN(n)?de:(s+=1)+n>e.length?fe:(e=e.slice(s,s+n),t.C=s+n,e))}function we(t){t.Y=Date.now()+t.P,Ee(t,t.P)}function Ee(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Jt(E(t.lb,t),e)}function Te(t){t.B&&(f.clearTimeout(t.B),t.B=null)}function _e(t){0==t.l.H||t.J||jn(t.l,t)}function be(t){Te(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Mt(t.V),jt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ce(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Je(n.i,t)))if(!t.K&&Je(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;qn(n),Nn(n)}Fn(n),Wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Jt(E(n.ib,n),6e3));if(1>=Ye(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Kn(n,11)}else if((t.K||n.g==t)&&qn(n),!D(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Ze(r,r.h),r.h=null))}if(s.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,Re(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=zn(s,s.J?s.pa:null,s.Y),o.K){tn(s.i,o);var a=o,h=s.L;h&&a.setTimeout(h),a.B&&(Te(a),we(a)),s.g=o}else Pn(s);0<n.j.length&&Rn(n)}else"stop"!=c[0]&&"close"!=c[0]||Kn(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Kn(n,7):Dn(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Qt()}catch(t){}}function Se(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(g(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(g(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(g(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(i=ce.prototype).setTimeout=function(t){this.P=t},i.nb=function(t){t=t.target;const e=this.M;e&&3==bn(t)?e.l():this.Pa(t)},i.Pa=function(t){try{if(t==this.g)t:{const u=bn(this.g);var e=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||U||this.g&&(this.h.h||this.g.ja()||Cn(this.g)))){this.J||4!=u||7==e||Qt(),Te(this);var n=this.g.da();this.ca=n;e:if(me(this)){var s=Cn(this.g);t="";var i=s.length,r=4==bn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){be(this),_e(this);var o="";break e}this.h.i=new f.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Wt(12),be(this),_e(this);break t}Kt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ce(this,n)}this.S?(ye(this,u,o),U&&this.i&&3==u&&(qt(this.U,this.V,"tick",this.mb),this.V.start())):(Kt(this.j,this.m,o,null),Ce(this,o)),4==u&&be(this),this.i&&!this.J&&(4==u?jn(this.l,this):(this.i=!1,we(this)))}else(function(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(D(t[s]))continue;var n=It(t[s]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),be(this),_e(this)}}}catch(t){}},i.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.C<e.length&&(Te(this),ye(this,t,e),this.i&&4!=t&&we(this))}},i.cancel=function(){this.J=!0,be(this)},i.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Qt(),Wt(17)),be(this),this.o=2,_e(this)):Ee(this,this.Y-t)};var Ie=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ae(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ae){this.h=t.h,De(this,t.j),this.s=t.s,this.g=t.g,Ne(this,t.m),this.l=t.l;var e=t.i,n=new Be;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xe(this,n),this.o=t.o}else t&&(e=String(t).match(Ie))?(this.h=!1,De(this,e[1]||"",!0),this.s=Me(e[2]||""),this.g=Me(e[3]||"",!0),Ne(this,e[4]),this.l=Me(e[5]||"",!0),xe(this,e[6]||"",!0),this.o=Me(e[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}function ke(t){return new Ae(t)}function De(t,e,n){t.j=n?Me(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ne(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xe(t,e,n){e instanceof Be?(t.i=e,function(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&($e(this,e),Ge(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Oe(e,qe)),t.i=new Be(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Le(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Me(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Pe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ae.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Oe(e,Fe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Oe(e,Fe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Oe(n,"/"==n.charAt(0)?Ue:Ve,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Oe(n,je)),t.join("")};var Fe=/[#\/\?@]/g,Ve=/[#\?:]/g,Ue=/[#\?]/g,qe=/[#\?@]/g,je=/#/g;function Be(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function $e(t,e){Ke(t),e=He(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ze(t,e){return Ke(t),e=He(t,e),t.g.has(e)}function Ge(t,e,n){$e(t,e),0<n.length&&(t.i=null,t.g.set(He(t,e),S(n)),t.h+=n.length)}function He(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Be.prototype).add=function(t,e){Ke(this),this.i=null,t=He(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Ke(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},i.ta=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},i.Z=function(t){Ke(this);let e=[];if("string"==typeof t)ze(this,t)&&(e=e.concat(this.g.get(He(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return Ke(this),this.i=null,ze(this,t=He(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Qe(t){this.l=t||Xe,f.PerformanceNavigationTiming?t=0<(t=f.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(f.g&&f.g.Ka&&f.g.Ka()&&f.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xe=10;function We(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ye(t){return t.h?1:t.g?t.g.size:0}function Je(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ze(t,e){t.g?t.g.add(e):t.h=e}function tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function en(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}Qe.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var nn=class{stringify(t){return f.JSON.stringify(t,void 0)}parse(t){return f.JSON.parse(t,void 0)}};function sn(){this.g=new nn}function rn(t,e,n){const s=n||"";try{Se(t,(function(t,n){let i=t;p(t)&&(i=_t(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function on(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function an(t){this.l=t.fc||null,this.j=t.ob||!1}function hn(t,e){wt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(an,ee),an.prototype.g=function(){return new hn(this.l,this.j)},an.prototype.i=function(t){return function(){return t}}({}),_(hn,wt);var cn=0;function un(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dn(t)}function dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=hn.prototype).open=function(t,e){if(this.readyState!=cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||f).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=cn},i.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==f.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;un(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ln(this):dn(this),3==this.readyState&&un(this)}},i.Za=function(t){this.g&&(this.response=this.responseText=t,ln(this))},i.Ya=function(t){this.g&&(this.response=t,ln(this))},i.ka=function(){this.g&&ln(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(hn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var fn=f.JSON.parse;function gn(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pn,this.L=this.M=!1}_(gn,wt);var pn="",mn=/^https?$/i,yn=["POST","PUT"];function vn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wn(t),Tn(t)}function wn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function En(t){if(t.h&&void 0!==d&&(!t.C[1]||4!=bn(t)||2!=t.da()))if(t.v&&4==bn(t))Ot(t.La,0,t);else if(Et(t,"readystatechange"),4==bn(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var i=String(t.I).match(Ie)[1]||null;!i&&f.self&&f.self.location&&(i=f.self.location.protocol.slice(0,-1)),s=!mn.test(i?i.toLowerCase():"")}n=s}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var r=2<bn(t)?t.g.statusText:""}catch(t){r=""}t.j=r+" ["+t.da()+"]",wn(t)}}finally{Tn(t)}}}function Tn(t,e){if(t.g){_n(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function _n(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function bn(t){return t.g?t.g.readyState:0}function Cn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Sn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function In(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Sn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function An(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kn(t){this.Ga=0,this.j=[],this.l=new Bt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=An("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=An("baseRetryDelayMs",5e3,t),this.hb=An("retryDelaySeedMs",1e4,t),this.eb=An("forwardChannelMaxRetries",2,t),this.xa=An("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Qe(t&&t.concurrentRequestLimit),this.Ja=new sn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Dn(t){if(xn(t),3==t.H){var e=t.W++,n=ke(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Mn(t,n),(e=new ce(t,t.l,e)).L=2,e.v=Le(ke(n)),n=!1,f.navigator&&f.navigator.sendBeacon)try{n=f.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&f.Image&&((new Image).src=e.v,n=!0),n||(e.g=Gn(e.l,null),e.g.ha(e.v)),e.G=Date.now(),we(e)}$n(t)}function Nn(t){t.g&&(Vn(t),t.g.cancel(),t.g=null)}function xn(t){Nn(t),t.u&&(f.clearTimeout(t.u),t.u=null),qn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&f.clearTimeout(t.m),t.m=null)}function Rn(t){if(!We(t.i)&&!t.m){t.m=!0;var e=t.Na;kt||xt(),Dt||(kt(),Dt=!0),Nt.add(e,t),t.C=0}}function Ln(t,e){var n;n=e?e.m:t.W++;const s=ke(t.I);Re(s,"SID",t.K),Re(s,"RID",n),Re(s,"AID",t.V),Mn(t,s),t.o&&t.s&&In(s,t.o,t.s),n=new ce(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=On(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ze(t.i,n),ge(n,s,e)}function Mn(t,e){t.na&&tt(t.na,(function(t,n){Re(e,n,t)})),t.h&&Se({},(function(t,n){Re(e,n,t)}))}function On(t,e,n){n=Math.min(t.j.length,n);var s=t.h?E(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),r=!1;else try{rn(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function Pn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;kt||xt(),Dt||(kt(),Dt=!0),Nt.add(e,t),t.A=0}}function Fn(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Jt(E(t.Ma,t),Bn(t,t.A)),t.A++,!0)}function Vn(t){null!=t.B&&(f.clearTimeout(t.B),t.B=null)}function Un(t){t.g=new ce(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=ke(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Mn(t,e),t.o&&t.s&&In(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Le(ke(e)),n.s=null,n.S=!0,pe(n,t)}function qn(t){null!=t.v&&(f.clearTimeout(t.v),t.v=null)}function jn(t,e){var n=null;if(t.g==e){qn(t),Vn(t),t.g=null;var s=2}else{if(!Je(t.i,e))return;n=e.F,tn(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;Et(s=Gt(),new Yt(s,n)),Rn(t)}else Pn(t);else if(3==(i=e.o)||0==i&&0<e.ca||!(1==s&&function(t,e){return!(Ye(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Jt(E(t.Na,t,e),Bn(t,t.C)),t.C++,0)))}(t,e)||2==s&&Fn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Kn(t,5);break;case 4:Kn(t,10);break;case 3:Kn(t,6);break;default:Kn(t,2)}}function Bn(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Kn(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=E(t.pb,t);n||(n=new Ae("//www.google.com/images/cleardot.gif"),f.location&&"http"==f.location.protocol||De(n,"https"),Le(n)),function(t,e){const n=new Bt;if(f.Image){const s=new Image;s.onload=T(on,n,s,"TestLoadImage: loaded",!0,e),s.onerror=T(on,n,s,"TestLoadImage: error",!1,e),s.onabort=T(on,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=T(on,n,s,"TestLoadImage: timeout",!1,e),f.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Wt(2);t.H=0,t.h&&t.h.za(e),$n(t),xn(t)}function $n(t){if(t.H=0,t.ma=[],t.h){const e=en(t.i);0==e.length&&0==t.j.length||(I(t.ma,e),I(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function zn(t,e,n){var s=n instanceof Ae?ke(n):new Ae(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Ne(s,s.m);else{var i=f.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ae(null);s&&De(r,s),e&&(r.g=e),i&&Ne(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.ra),Mn(t,s),s}function Gn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new gn(new an({ob:!0})):new gn(t.va)).Oa(t.J),e}function Hn(){}function Qn(){if(F&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function Xn(t,e){wt.call(this),this.g=new kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Jn(this)}function Wn(t){oe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Yn(){ae.call(this),this.status=1}function Jn(t){this.g=t}function Zn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ts(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(e^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function es(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}(i=gn.prototype).Oa=function(t){this.M=t},i.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ie.g(),this.C=this.u?ne(this.u):ne(ie),this.g.onreadystatechange=E(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void vn(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=f.FormData&&t instanceof f.FormData,!(0<=C(yn,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_n(this),0<this.B&&((this.L=function(t){return F&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.ua,this)):this.A=Ot(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){vn(this,t)}},i.ua=function(){void 0!==d&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),gn.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?En(this):this.kb())},i.kb=function(){En(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<bn(this)?this.g.status:-1}catch(t){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),fn(e)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=kn.prototype).ra=8,i.H=1,i.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ce(this,this.l,t);let r=this.s;if(this.U&&(r?(r=et(r),st(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=On(this,i,e),Re(n=ke(this.I),"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Mn(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Sn(r)))+"&"+e:this.o&&In(n,this.o,r)),Ze(this.i,i),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),i.aa=!0,ge(i,n,null)):ge(i,n,e),this.H=2}}else 3==this.H&&(t?Ln(this,t):0==this.j.length||We(this.i)||Ln(this))},i.Ma=function(){if(this.u=null,Un(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Jt(E(this.jb,this),t)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Wt(10),Nn(this),Un(this))},i.ib=function(){null!=this.v&&(this.v=null,Nn(this),Fn(this),Wt(19))},i.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Wt(2)):(this.l.info("Failed to ping google.com"),Wt(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},(i=Hn.prototype).Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},Qn.prototype.g=function(t,e){return new Xn(t,e)},_(Xn,wt),Xn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zn(t,null,t.Y),Rn(t)},Xn.prototype.close=function(){Dn(this.g)},Xn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=_t(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&Rn(e)},Xn.prototype.N=function(){this.g.h=null,delete this.j,Dn(this.g),delete this.g,Xn.$.N.call(this)},_(Wn,oe),_(Yn,ae),_(Jn,Hn),Jn.prototype.Ba=function(){Et(this.g,"a")},Jn.prototype.Aa=function(t){Et(this.g,new Wn(t))},Jn.prototype.za=function(t){Et(this.g,new Yn)},Jn.prototype.ya=function(){Et(this.g,"b")},_(Zn,(function(){this.blockSize=-1})),Zn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Zn.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(0==i)for(;r<=n;)ts(this,t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){ts(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){ts(this,s),i=0;break}}this.h=i,this.i+=e},Zn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var ns={};function ss(t){return-128<=t&&128>t?function(t,e){var n=ns;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new es([0|t],0>t?-1:0)})):new es([0|t],0>t?-1:0)}function is(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return ls(is(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=rs;return new es(e,0)}var rs=4294967296,os=ss(0),as=ss(1),hs=ss(16777216);function cs(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function us(t){return-1==t.h}function ls(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new es(n,~t.h).add(as)}function ds(t,e){return t.add(ls(e))}function fs(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function gs(t,e){this.g=t,this.h=e}function ps(t,e){if(cs(e))throw Error("division by zero");if(cs(t))return new gs(os,os);if(us(t))return e=ps(ls(t),e),new gs(ls(e.g),ls(e.h));if(us(e))return e=ps(t,ls(e)),new gs(ls(e.g),e.h);if(30<t.g.length){if(us(t)||us(e))throw Error("slowDivide_ only works with positive integers.");for(var n=as,s=e;0>=s.X(t);)n=ms(n),s=ms(s);var i=ys(n,1),r=ys(s,1);for(s=ys(s,2),n=ys(n,2);!cs(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=ys(s,1),n=ys(n,1)}return e=ds(t,i.R(e)),new gs(i,e)}for(i=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(r=is(n)).R(e);us(o)||0<o.X(t);)o=(r=is(n-=s)).R(e);cs(r)&&(r=as),i=i.add(r),t=ds(t,o)}return new gs(i,t)}function ms(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new es(n,t.h)}function ys(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new es(i,t.h)}(i=es.prototype).ea=function(){if(us(this))return-ls(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:rs+s)*e,e*=rs}return t},i.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(cs(this))return"0";if(us(this))return"-"+ls(this).toString(t);for(var e=is(Math.pow(t,6)),n=this,s="";;){var i=ps(n,e).g,r=((0<(n=ds(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(cs(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},i.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},i.X=function(t){return us(t=ds(this,t))?-1:cs(t)?0:1},i.abs=function(){return us(this)?ls(this):this},i.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(65535&this.D(i))+(65535&t.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new es(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(t){if(cs(this)||cs(t))return os;if(us(this))return us(t)?ls(this).R(ls(t)):ls(ls(this).R(t));if(us(t))return ls(this.R(ls(t)));if(0>this.X(hs)&&0>t.X(hs))return is(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=t.D(i)>>>16,h=65535&t.D(i);n[2*s+2*i]+=o*h,fs(n,2*s+2*i),n[2*s+2*i+1]+=r*h,fs(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,fs(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,fs(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new es(n,0)},i.gb=function(t){return ps(this,t).h},i.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new es(n,this.h&t.h)},i.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new es(n,this.h|t.h)},i.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new es(n,this.h^t.h)},Qn.prototype.createWebChannel=Qn.prototype.g,Xn.prototype.send=Xn.prototype.u,Xn.prototype.open=Xn.prototype.m,Xn.prototype.close=Xn.prototype.close,Zt.NO_ERROR=0,Zt.TIMEOUT=8,Zt.HTTP_ERROR=6,te.COMPLETE="complete",se.EventType=re,re.OPEN="a",re.CLOSE="b",re.ERROR="c",re.MESSAGE="d",wt.prototype.listen=wt.prototype.O,gn.prototype.listenOnce=gn.prototype.P,gn.prototype.getLastError=gn.prototype.Sa,gn.prototype.getLastErrorCode=gn.prototype.Ia,gn.prototype.getStatus=gn.prototype.da,gn.prototype.getResponseJson=gn.prototype.Wa,gn.prototype.getResponseText=gn.prototype.ja,gn.prototype.send=gn.prototype.ha,gn.prototype.setWithCredentials=gn.prototype.Oa,Zn.prototype.digest=Zn.prototype.l,Zn.prototype.reset=Zn.prototype.reset,Zn.prototype.update=Zn.prototype.j,es.prototype.add=es.prototype.add,es.prototype.multiply=es.prototype.R,es.prototype.modulo=es.prototype.gb,es.prototype.compare=es.prototype.X,es.prototype.toNumber=es.prototype.ea,es.prototype.toString=es.prototype.toString,es.prototype.getBits=es.prototype.D,es.fromNumber=is,es.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return ls(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=is(Math.pow(n,8)),i=os,r=0;r<e.length;r+=8){var o=Math.min(8,e.length-r),a=parseInt(e.substring(r,r+o),n);8>o?(o=is(Math.pow(n,o)),i=i.R(o).add(is(a))):i=(i=i.R(s)).add(is(a))}return i};var vs=l.createWebChannelTransport=function(){return new Qn},ws=l.getStatEventTarget=function(){return Gt()},Es=l.ErrorCode=Zt,Ts=l.EventType=te,_s=l.Event=$t,bs=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cs=l.FetchXmlHttpFactory=an,Ss=l.WebChannel=se,Is=l.XhrIo=gn,As=l.Md5=Zn,ks=l.Integer=es;s("4TNnu");const Ds="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ns.UNAUTHENTICATED=new Ns(null),Ns.GOOGLE_CREDENTIALS=new Ns("google-credentials-uid"),Ns.FIRST_PARTY=new Ns("first-party-uid"),Ns.MOCK_USER=new Ns("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xs="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new(0,h.Logger)("@firebase/firestore");function Ls(){return Rs.logLevel}function Ms(t,...e){if(Rs.logLevel<=h.LogLevel.DEBUG){const n=e.map(Fs);Rs.debug(`Firestore (${xs}): ${t}`,...n)}}function Os(t,...e){if(Rs.logLevel<=h.LogLevel.ERROR){const n=e.map(Fs);Rs.error(`Firestore (${xs}): ${t}`,...n)}}function Ps(t,...e){if(Rs.logLevel<=h.LogLevel.WARN){const n=e.map(Fs);Rs.warn(`Firestore (${xs}): ${t}`,...n)}}function Fs(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw Os(e),new Error(e)}function Us(t,e){t||Vs()}function qs(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Bs extends c.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ns.UNAUTHENTICATED)))}shutdown(){}}class Gs{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Hs{constructor(t){this.t=t,this.currentUser=Ns.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Ks;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ks,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ms("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ms("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ks)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ms("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Us("string"==typeof e.accessToken),new $s(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Us(null===t||"string"==typeof t),new Ns(t)}}class Qs{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Ns.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xs{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Qs(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Ns.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ws{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ys{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Ms("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Ms("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ms("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?s(t):Ms("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Us("string"==typeof t.token),this.R=t.token,new Ws(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Js(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=Js(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function ti(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Bs(js.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Bs(js.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Bs(js.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Bs(js.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ni.fromMillis(Date.now())}static fromDate(t){return ni.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ni(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ti(this.nanoseconds,t.nanoseconds):ti(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this.timestamp=t}static fromTimestamp(t){return new si(t)}static min(){return new si(new ni(0,0))}static max(){return new si(new ni(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n){void 0===e?e=0:e>t.length&&Vs(),void 0===n?n=t.length-e:n>t.length-e&&Vs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ii.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ii?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ri extends ii{construct(t,e,n){return new ri(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Bs(js.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ri(e)}static emptyPath(){return new ri([])}}const oi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ai extends ii{construct(t,e,n){return new ai(t,e,n)}static isValidIdentifier(t){return oi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ai.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Bs(js.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Bs(js.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Bs(js.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Bs(js.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ai(e)}static emptyPath(){return new ai([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.path=t}static fromPath(t){return new hi(ri.fromString(t))}static fromName(t){return new hi(ri.fromString(t).popFirst(5))}static empty(){return new hi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ri.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ri.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new hi(new ri(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ci.UNKNOWN_ID=-1;function ui(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=si.fromTimestamp(1e9===s?new ni(n+1,0):new ni(n,s));return new di(i,hi.empty(),e)}function li(t){return new di(t.readTime,t.key,-1)}class di{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new di(si.min(),hi.empty(),-1)}static max(){return new di(si.max(),hi.empty(),-1)}}function fi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=hi.comparator(t.documentKey,e.documentKey),0!==n?n:ti(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t){if(t.code!==js.FAILED_PRECONDITION||t.message!==gi)throw t;Ms("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Vs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new yi(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof yi?e:yi.resolve(e)}catch(t){return yi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):yi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):yi.reject(e)}static resolve(t){return new yi(((e,n)=>{e(t)}))}static reject(t){return new yi(((e,n)=>{n(t)}))}static waitFor(t){return new yi(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=yi.resolve(!1);for(const n of t)e=e.next((t=>t?yi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new yi(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const h=a;e(t[h]).next((t=>{r[h]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new yi(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Ei(t){return null==t}function Ti(t){return 0===t&&1/t==-1/0}wi.ae=-1;const _i=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ci=bi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Si(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ai(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e){this.comparator=t,this.root=e||Ni.EMPTY}insert(t,e){return new ki(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ni.BLACK,null,null))}remove(t){return new ki(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ni.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Di(this.root,t,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Di(this.root,t,this.comparator,!0)}}class Di{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ni{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ni.RED,this.left=null!=s?s:Ni.EMPTY,this.right=null!=i?i:Ni.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ni(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ni.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ni.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ni.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ni.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Vs();if(this.right.isRed())throw Vs();const t=this.left.check();if(t!==this.right.check())throw Vs();return t+(this.isRed()?0:1)}}Ni.EMPTY=null,Ni.RED=!0,Ni.BLACK=!1,Ni.EMPTY=new class{constructor(){this.size=0}get key(){throw Vs()}get value(){throw Vs()}get color(){throw Vs()}get left(){throw Vs()}get right(){throw Vs()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ni(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(t){this.comparator=t,this.data=new ki(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ri(this.data.getIterator())}getIteratorFrom(t){return new Ri(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xi(this.comparator);return e.data=t,e}}class Ri{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(t){this.fields=t,t.sort(ai.comparator)}static empty(){return new Li([])}unionWith(t){let e=new xi(ai.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Li(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ei(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Mi("Invalid base64 string: "+t):t}}(t);return new Oi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Oi(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ti(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Oi.EMPTY_BYTE_STRING=new Oi("");const Pi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(t){if(Us(!!t),"string"==typeof t){let e=0;const n=Pi.exec(t);if(Us(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Vi(t.seconds),nanos:Vi(t.nanos)}}function Vi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ui(t){return"string"==typeof t?Oi.fromBase64String(t):Oi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ji(t){const e=t.mapValue.fields.__previous_value__;return qi(e)?ji(e):e}function Bi(t){const e=Fi(t.mapValue.fields.__local_write_time__.timestampValue);return new ni(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n,s,i,r,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class $i{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $i&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:rr(t)?9007199254740991:10:Vs()}function Hi(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bi(t).isEqual(Bi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fi(t.timestampValue),s=Fi(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Ui(t.bytesValue).isEqual(Ui(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Vi(t.geoPointValue.latitude)===Vi(e.geoPointValue.latitude)&&Vi(t.geoPointValue.longitude)===Vi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Vi(t.integerValue)===Vi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Vi(t.doubleValue),s=Vi(e.doubleValue);return n===s?Ti(n)===Ti(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],Hi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Si(n)!==Si(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Hi(n[t],s[t])))return!1;return!0}(t,e);default:return Vs()}var s}function Qi(t,e){return void 0!==(t.values||[]).find((t=>Hi(t,e)))}function Xi(t,e){if(t===e)return 0;const n=Gi(t),s=Gi(e);if(n!==s)return ti(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ti(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Vi(t.integerValue||t.doubleValue),s=Vi(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Wi(t.timestampValue,e.timestampValue);case 4:return Wi(Bi(t),Bi(e));case 5:return ti(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ui(t),s=Ui(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=ti(n[t],s[t]);if(0!==e)return e}return ti(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ti(Vi(t.latitude),Vi(e.latitude));return 0!==n?n:ti(Vi(t.longitude),Vi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Xi(n[t],s[t]);if(e)return e}return ti(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===zi.mapValue&&e===zi.mapValue)return 0;if(t===zi.mapValue)return 1;if(e===zi.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=ti(s[t],r[t]);if(0!==e)return e;const o=Xi(n[s[t]],i[r[t]]);if(0!==o)return o}return ti(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Vs()}}function Wi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ti(t,e);const n=Fi(t),s=Fi(e),i=ti(n.seconds,s.seconds);return 0!==i?i:ti(n.nanos,s.nanos)}function Yi(t){return Ji(t)}function Ji(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ui(t.bytesValue).toBase64():"referenceValue"in t?function(t){return hi.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Ji(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Ji(t.fields[i])}`;return n+"}"}(t.mapValue):Vs()}function Zi(t){return!!t&&"integerValue"in t}function tr(t){return!!t&&"arrayValue"in t}function er(t){return!!t&&"nullValue"in t}function nr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sr(t){return!!t&&"mapValue"in t}function ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ir(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(t){this.value=t}static empty(){return new or({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ir(e)}setAll(t){let e=ai.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=ir(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];sr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ii(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new or(ir(this.value))}}function ar(t){const e=[];return Ii(t.fields,((t,n)=>{const s=new ai([t]);if(sr(n)){const t=ar(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Li(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hr{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new hr(t,0,si.min(),si.min(),si.min(),or.empty(),0)}static newFoundDocument(t,e,n,s){return new hr(t,1,e,si.min(),n,s,0)}static newNoDocument(t,e){return new hr(t,2,e,si.min(),si.min(),or.empty(),0)}static newUnknownDocument(t,e){return new hr(t,3,e,si.min(),si.min(),or.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(si.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=or.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=or.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=si.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof hr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new hr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.position=t,this.inclusive=e}}function ur(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?hi.comparator(hi.fromName(o.referenceValue),n.key):Xi(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function lr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function fr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{}class pr extends gr{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new br(t,e,n):"array-contains"===e?new Ar(t,n):"in"===e?new kr(t,n):"not-in"===e?new Dr(t,n):"array-contains-any"===e?new Nr(t,n):new pr(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Cr(t,n):new Sr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Xi(e,this.value)):null!==e&&Gi(this.value)===Gi(e)&&this.matchesComparison(Xi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Vs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mr extends gr{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new mr(t,e)}matches(t){return yr(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function yr(t){return"and"===t.op}function vr(t){return wr(t)&&yr(t)}function wr(t){for(const e of t.filters)if(e instanceof mr)return!1;return!0}function Er(t){if(t instanceof pr)return t.field.canonicalString()+t.op.toString()+Yi(t.value);if(vr(t))return t.filters.map((t=>Er(t))).join(",");{const e=t.filters.map((t=>Er(t))).join(",");return`${t.op}(${e})`}}function Tr(t,e){return t instanceof pr?(n=t,(s=e)instanceof pr&&n.op===s.op&&n.field.isEqual(s.field)&&Hi(n.value,s.value)):t instanceof mr?function(t,e){return e instanceof mr&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Tr(n,e.filters[s])),!0)}(t,e):void Vs();var n,s}function _r(t){return t instanceof pr?`${(e=t).field.canonicalString()} ${e.op} ${Yi(e.value)}`:t instanceof mr?function(t){return t.op.toString()+" {"+t.getFilters().map(_r).join(" ,")+"}"}(t):"Filter";var e}class br extends pr{constructor(t,e,n){super(t,e,n),this.key=hi.fromName(n.referenceValue)}matches(t){const e=hi.comparator(t.key,this.key);return this.matchesComparison(e)}}class Cr extends pr{constructor(t,e){super(t,"in",e),this.keys=Ir("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sr extends pr{constructor(t,e){super(t,"not-in",e),this.keys=Ir("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ir(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>hi.fromName(t.referenceValue)))}class Ar extends pr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return tr(e)&&Qi(e.arrayValue,this.value)}}class kr extends pr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Qi(this.value.arrayValue,e)}}class Dr extends pr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Qi(this.value.arrayValue,e)}}class Nr extends pr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!tr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Qi(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.he=null}}function Rr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new xr(t,e,n,s,i,r,o)}function Lr(t){const e=qs(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Er(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Yi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Yi(t))).join(",")),e.he=t}return e.he}function Mr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tr(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lr(t.startAt,e.startAt)&&lr(t.endAt,e.endAt)}function Or(t){return hi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Fr(t,e,n,s,i,r,o,a){return new Pr(t,e,n,s,i,r,o,a)}function Vr(t){return new Pr(t)}function Ur(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function qr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jr(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Br(t){return null!==t.collectionGroup}function Kr(t){const e=qs(t);if(null===e.Pe){e.Pe=[];const t=jr(e),n=qr(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new dr(t)),e.Pe.push(new dr(ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new dr(ai.keyField(),t))}}}return e.Pe}function $r(t){const e=qs(t);if(!e.Ie)if("F"===e.limitType)e.Ie=Rr(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Kr(e)){const e="desc"===n.dir?"asc":"desc";t.push(new dr(n.field,e))}const n=e.endAt?new cr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new cr(e.startAt.position,e.startAt.inclusive):null;e.Ie=Rr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.Ie}function zr(t,e,n){return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gr(t,e){return Mr($r(t),$r(e))&&t.limitType===e.limitType}function Hr(t){return`${Lr($r(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_r(t))).join(", ")}]`),Ei(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Yi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Yi(t))).join(",")),`Target(${e})`}($r(t))}; limitType=${t.limitType})`}function Xr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):hi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Kr(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=ur(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,Kr(n),s)||n.endAt&&!function(t,e,n){const s=ur(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,Kr(n),s)));var n,s}function Wr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yr(t){return(e,n)=>{let s=!1;for(const i of Kr(t)){const t=Jr(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Jr(t,e,n){const s=t.field.isKeyField()?hi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Xi(s,i):Vs()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Vs()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ii(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Ai(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new ki(hi.comparator);function eo(){return to}const no=new ki(hi.comparator);function so(...t){let e=no;for(const n of t)e=e.insert(n.key,n);return e}function io(t){let e=no;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ro(){return ao()}function oo(){return ao()}function ao(){return new Zr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ho=new ki(hi.comparator),co=new xi(hi.comparator);function uo(...t){let e=co;for(const n of t)e=e.add(n);return e}const lo=new xi(ti);function fo(){return lo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function po(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function yo(t,e,n){return t instanceof Eo?To(t,e):t instanceof _o?bo(t,e):n}function vo(t,e){return t instanceof Co?Zi(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null;var n,s}class wo extends mo{}class Eo extends mo{constructor(t){super(),this.elements=t}}function To(t,e){const n=Io(e);for(const e of t.elements)n.some((t=>Hi(t,e)))||n.push(e);return{arrayValue:{values:n}}}class _o extends mo{constructor(t){super(),this.elements=t}}function bo(t,e){let n=Io(e);for(const e of t.elements)n=n.filter((t=>!Hi(t,e)));return{arrayValue:{values:n}}}class Co extends mo{constructor(t,e){super(),this.serializer=t,this.Te=e}}function So(t){return Vi(t.integerValue||t.doubleValue)}function Io(t){return tr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e){this.version=t,this.transformResults=e}}class ko{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ko}static exists(t){return new ko(void 0,t)}static updateTime(t){return new ko(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Do(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class No{}function xo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new jo(t.key,ko.none()):new Po(t.key,t.data,ko.none());{const n=t.data,s=or.empty();let i=new xi(ai.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Fo(t.key,s,new Li(i.toArray()),ko.none())}}function Ro(t,e,n){var s;t instanceof Po?function(t,e,n){const s=t.value.clone(),i=Uo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Fo?function(t,e,n){if(!Do(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Uo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Vo(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Lo(t,e,n,s){return t instanceof Po?function(t,e,n,s){if(!Do(t.precondition,e))return n;const i=t.value.clone(),r=qo(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Fo?function(t,e,n,s){if(!Do(t.precondition,e))return n;const i=qo(t.fieldTransforms,s,e),r=e.data;return r.setAll(Vo(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):(i=e,r=n,Do(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):r);var i,r}function Mo(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=vo(s.transform,t||null);null!=i&&(null===n&&(n=or.empty()),n.set(s.field,i))}return n||null}function Oo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&ei(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof Eo&&s instanceof Eo||n instanceof _o&&s instanceof _o?ei(n.elements,s.elements,Hi):n instanceof Co&&s instanceof Co?Hi(n.Te,s.Te):n instanceof wo&&s instanceof wo);var n,s}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,s}class Po extends No{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fo extends No{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Uo(t,e,n){const s=new Map;Us(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,yo(o,a,n[i]))}return s}function qo(t,e,n){const s=new Map;for(const a of t){const t=a.transform,h=n.data.field(a.field);s.set(a.field,(r=h,o=e,(i=t)instanceof wo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&qi(e)&&(e=ji(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):i instanceof Eo?To(i,r):i instanceof _o?bo(i,r):function(t,e){const n=vo(t,e),s=So(n)+So(t.Te);return Zi(n)&&Zi(t.Te)?po(s):go(t.serializer,s)}(i,r)))}var i,r,o;return s}class jo extends No{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bo extends No{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Ro(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Lo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Lo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=oo();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=xo(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(si.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),uo())}isEqual(t){return this.batchId===t.batchId&&ei(this.mutations,t.mutations,((t,e)=>Oo(t,e)))&&ei(this.baseMutations,t.baseMutations,((t,e)=>Oo(t,e)))}}class $o{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Us(t.mutations.length===n.length);let s=ho;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new $o(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho,Qo;function Xo(t){switch(t){default:return Vs();case js.CANCELLED:case js.UNKNOWN:case js.DEADLINE_EXCEEDED:case js.RESOURCE_EXHAUSTED:case js.INTERNAL:case js.UNAVAILABLE:case js.UNAUTHENTICATED:return!1;case js.INVALID_ARGUMENT:case js.NOT_FOUND:case js.ALREADY_EXISTS:case js.PERMISSION_DENIED:case js.FAILED_PRECONDITION:case js.ABORTED:case js.OUT_OF_RANGE:case js.UNIMPLEMENTED:case js.DATA_LOSS:return!0}}function Wo(t){if(void 0===t)return Os("GRPC error has no .code"),js.UNKNOWN;switch(t){case Ho.OK:return js.OK;case Ho.CANCELLED:return js.CANCELLED;case Ho.UNKNOWN:return js.UNKNOWN;case Ho.DEADLINE_EXCEEDED:return js.DEADLINE_EXCEEDED;case Ho.RESOURCE_EXHAUSTED:return js.RESOURCE_EXHAUSTED;case Ho.INTERNAL:return js.INTERNAL;case Ho.UNAVAILABLE:return js.UNAVAILABLE;case Ho.UNAUTHENTICATED:return js.UNAUTHENTICATED;case Ho.INVALID_ARGUMENT:return js.INVALID_ARGUMENT;case Ho.NOT_FOUND:return js.NOT_FOUND;case Ho.ALREADY_EXISTS:return js.ALREADY_EXISTS;case Ho.PERMISSION_DENIED:return js.PERMISSION_DENIED;case Ho.FAILED_PRECONDITION:return js.FAILED_PRECONDITION;case Ho.ABORTED:return js.ABORTED;case Ho.OUT_OF_RANGE:return js.OUT_OF_RANGE;case Ho.UNIMPLEMENTED:return js.UNIMPLEMENTED;case Ho.DATA_LOSS:return js.DATA_LOSS;default:return Vs()}}(Qo=Ho||(Ho={}))[Qo.OK=0]="OK",Qo[Qo.CANCELLED=1]="CANCELLED",Qo[Qo.UNKNOWN=2]="UNKNOWN",Qo[Qo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qo[Qo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qo[Qo.NOT_FOUND=5]="NOT_FOUND",Qo[Qo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qo[Qo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qo[Qo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qo[Qo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qo[Qo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qo[Qo.ABORTED=10]="ABORTED",Qo[Qo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qo[Qo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qo[Qo.INTERNAL=13]="INTERNAL",Qo[Qo.UNAVAILABLE=14]="UNAVAILABLE",Qo[Qo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Jo}static getOrCreateInstance(){return null===Jo&&(Jo=new Yo),Jo}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Jo=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new ks([4294967295,4294967295],0);function ea(t){const e=Zo().encode(t),n=new As;return n.update(e),new Uint8Array(n.digest())}function na(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new ks([n,s],0),new ks([i,r],0)]}class sa{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ia(`Invalid padding: ${e}`);if(n<0)throw new ia(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ia(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ia(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=ks.fromNumber(this.de)}Re(t,e,n){let s=t.add(e.multiply(ks.fromNumber(n)));return 1===s.compare(ta)&&(s=new ks([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.de)return!1;const e=ea(t),[n,s]=na(e);for(let t=0;t<this.hashCount;t++){const e=this.Re(n,s,t);if(!this.Ve(e))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),r=new sa(i,s,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.de)return;const e=ea(t),[n,s]=na(e);for(let t=0;t<this.hashCount;t++){const e=this.Re(n,s,t);this.me(e)}}me(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,oa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ra(si.min(),s,new ki(ti),eo(),uo())}}class oa{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new oa(n,e,uo(),uo(),uo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e,n,s){this.fe=t,this.removedTargetIds=e,this.key=n,this.ge=s}}class ha{constructor(t,e){this.targetId=t,this.pe=e}}class ca{constructor(t,e,n=Oi.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ua{constructor(){this.ye=0,this.we=fa(),this.Se=Oi.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=uo(),e=uo(),n=uo();return this.we.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Vs()}})),new oa(this.Se,this.be,t,e,n)}xe(){this.De=!1,this.we=fa()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class la{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=eo(),this.$e=da(),this.Ue=new ki(ti)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Fe(t.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(t.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(n.ke(),n.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Fe(t.resumeToken));break;default:Vs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){var e,n;const s=t.targetId,i=t.pe.count,r=this.Xe(s);if(r){const o=r.target;if(Or(o))if(0===i){const t=new hi(o.path);this.ze(s,t,hr.newNoDocument(t,si.min()))}else Us(1===i);else{const r=this.et(s);if(r!==i){const i=this.tt(t,r);if(0!==i.status){this.Ye(s);const t=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,t)}null===(e=Yo.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n,s){var i,r,o,a,h,c;const u={localCacheCount:n,existenceFilterCount:s.count},l=s.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(i=null==l?void 0:l.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(r=null==l?void 0:l.bits)||void 0===r?void 0:r.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(c=null===(h=null==l?void 0:l.bits)||void 0===h?void 0:h.padding)&&void 0!==c?c:0},e&&(u.bloomFilter.mightContain=e)),u}(i.status,null!==(n=i.nt)&&void 0!==n?n:null,r,t.pe))}}}}tt(t,e){const{unchangedNames:n,count:s}=t.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=n;let a,h;try{a=Ui(i).toUint8Array()}catch(t){if(t instanceof Mi)return Ps("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw t}try{h=new sa(a,r,o)}catch(t){return Ps(t instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",t),{status:1}}const c=t=>{const e=this.qe.rt();return h.mightContain(`projects/${e.projectId}/databases/${e.database}/documents/${t}`)};return 0===h.de?{status:1}:{status:s===e-this.it(t.targetId,c)?0:2,nt:c}}it(t,e){const n=this.qe.getRemoteKeysForTarget(t);let s=0;return n.forEach((n=>{e(n.path.canonicalString())||(this.ze(t,n,null),s++)})),s}st(t){const e=new Map;this.Qe.forEach(((n,s)=>{const i=this.Xe(s);if(i){if(n.current&&Or(i.target)){const e=new hi(i.target.path);null!==this.Ke.get(e)||this.ot(s,e)||this.ze(s,e,hr.newNoDocument(e,t))}n.Ce&&(e.set(s,n.Me()),n.xe())}}));let n=uo();this.$e.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ke.forEach(((e,n)=>n.setReadTime(t)));const s=new ra(t,e,this.Ue,this.Ke,n);return this.Ke=eo(),this.$e=da(),this.Ue=new ki(ti),s}Ge(t,e){if(!this.Je(t))return;const n=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,n),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const s=this.He(t);this.ot(t,e)?s.Oe(e,1):s.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),n&&(this.Ke=this.Ke.insert(e,n))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new ua,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new xi(ti),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||Ms("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new ua),this.qe.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function da(){return new ki(hi.comparator)}function fa(){return new ki(hi.comparator)}const ga={asc:"ASCENDING",desc:"DESCENDING"},pa={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ma={and:"AND",or:"OR"};class ya{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function va(t,e){return t.useProto3Json||Ei(e)?e:{value:e}}function wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ea(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ta(t,e){return wa(t,e.toTimestamp())}function _a(t){return Us(!!t),si.fromTimestamp(function(t){const e=Fi(t);return new ni(e.seconds,e.nanos)}(t))}function ba(t,e){return(n=t,new ri(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Ca(t){const e=ri.fromString(t);return Us(Ka(e)),e}function Sa(t,e){return ba(t.databaseId,e.path)}function Ia(t,e){const n=Ca(e);if(n.get(1)!==t.databaseId.projectId)throw new Bs(js.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Bs(js.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new hi(Na(n))}function Aa(t,e){return ba(t.databaseId,e)}function ka(t){const e=Ca(t);return 4===e.length?ri.emptyPath():Na(e)}function Da(t){return new ri(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Na(t){return Us(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xa(t,e,n){return{name:Sa(t,e),fields:n.value.mapValue.fields}}function Ra(t,e){let n;if(e instanceof Po)n={update:xa(t,e.key,e.value)};else if(e instanceof jo)n={delete:Sa(t,e.key)};else if(e instanceof Fo)n={update:xa(t,e.key,e.data),updateMask:Ba(e.fieldMask)};else{if(!(e instanceof Bo))return Vs();n={verify:Sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof wo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Eo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _o)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Co)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Vs()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(i=e.precondition).updateTime?{updateTime:Ta(s,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Vs())),n;var s,i}function La(t,e){return{documents:[Aa(t,e.path)]}}function Ma(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Aa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Aa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return ja(mr.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>{return{field:Ua((e=t).field),direction:Fa(e.dir)};var e}))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=va(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n;var a}function Oa(t){let e=ka(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Us(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Pa(t);return e instanceof mr&&vr(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new dr(qa((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ei(e)?null:e}(n.limit));let h=null;n.startAt&&(h=function(t){const e=!!t.before,n=t.values||[];return new cr(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new cr(n,e)}(n.endAt)),Fr(e,i,o,r,a,"F",h,c)}function Pa(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qa(t.unaryFilter.field);return pr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qa(t.unaryFilter.field);return pr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qa(t.unaryFilter.field);return pr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qa(t.unaryFilter.field);return pr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Vs()}}(t):void 0!==t.fieldFilter?(n=t,pr.create(qa(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Vs()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,mr.create(e.compositeFilter.filters.map((t=>Pa(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Vs()}}(e.compositeFilter.op))):Vs();var e,n}function Fa(t){return ga[t]}function Va(t){return pa[t]}function Ua(t){return{fieldPath:t.canonicalString()}}function qa(t){return ai.fromServerFormat(t.fieldPath)}function ja(t){return t instanceof pr?function(t){if("=="===t.op){if(nr(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NAN"}};if(er(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(nr(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NOT_NAN"}};if(er(t.value))return{unaryFilter:{field:Ua(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ua(t.field),op:Va(t.op),value:t.value}}}(t):t instanceof mr?function(t){const e=t.getFilters().map((t=>ja(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,ma[n]),filters:e}};var n}(t):Vs()}function Ba(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ka(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,n,s,i=si.min(),r=si.min(),o=Oi.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new $a(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.ct=t}}function Ga(t){const e=Oa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?zr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(Vi(t.integerValue));else if("doubleValue"in t){const n=Vi(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),Ti(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(Ui(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?rr(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):Vs()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const t of Object.keys(n))this.Rt(t,e),this.It(n[t],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const t of n)this.It(t,e)}gt(t,e){this.Et(e,37),hi.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Ha.bt=new Ha;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(){this.sn=new Xa}addToCollectionParentIndex(t,e){return this.sn.add(e),yi.resolve()}getCollectionParents(t,e){return yi.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return yi.resolve()}deleteFieldIndex(t,e){return yi.resolve()}getDocumentsMatchingTarget(t,e){return yi.resolve(null)}getIndexType(t,e){return yi.resolve(0)}getFieldIndexes(t,e){return yi.resolve([])}getNextCollectionGroupToUpdate(t){return yi.resolve(null)}getMinOffset(t,e){return yi.resolve(di.min())}getMinOffsetFromCollectionGroup(t,e){return yi.resolve(di.min())}updateCollectionGroup(t,e,n){return yi.resolve()}updateIndexEntries(t,e){return yi.resolve()}}class Xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new xi(ri.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new xi(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Wa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Wa(t,Wa.DEFAULT_COLLECTION_PERCENTILE,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wa.DEFAULT_COLLECTION_PERCENTILE=10,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wa.DEFAULT=new Wa(41943040,Wa.DEFAULT_COLLECTION_PERCENTILE,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wa.DISABLED=new Wa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Ya(0)}static On(){return new Ya(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(){this.changes=new Zr((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,hr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?yi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Lo(n.mutation,t,Li.empty(),ni.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,uo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=uo()){const s=ro();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=so();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ro();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,uo())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=eo();const r=ao(),o=ao();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Fo)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Lo(o.mutation,e,o.mutation.getFieldMask(),ni.now())):r.set(e.key,Li.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Za(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ao();let s=new ki(((t,e)=>t-e)),i=uo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Li.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||uo()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,h=s.value,c=oo();h.forEach((t=>{if(!i.has(t)){const s=xo(e.get(t),n.get(t));null!==s&&c.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return yi.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return s=e,hi.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Br(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var s}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):yi.resolve(ro());let o=-1,a=i;return r.next((e=>yi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?yi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,uo()))).next((t=>({batchId:o,changes:io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new hi(e)).next((t=>{let e=so();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=so();return this.indexManager.getCollectionParents(t,s).next((r=>yi.forEach(r,(r=>{const o=(a=e,h=r.child(s),new Pr(h,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,h;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,hr.newInvalidDocument(s)))}));let n=so();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&Lo(r.mutation,i,Li.empty(),ni.now()),Xr(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return yi.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,{id:(n=e).id,version:n.version,createTime:_a(n.createTime)}),yi.resolve();var n}getNamedQuery(t,e){return yi.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,{name:(n=e).name,query:Ga(n.bundledQuery),readTime:_a(n.readTime)}),yi.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.overlays=new ki(hi.comparator),this.cr=new Map}getOverlay(t,e){return yi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ro();return yi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ht(t,e,s)})),yi.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.cr.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),yi.resolve()}getOverlaysForCollection(t,e,n){const s=ro(),i=e.length+1,r=new hi(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return yi.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new ki(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ro(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ro(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return yi.resolve(o)}ht(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.cr.get(s.largestBatchId).delete(n.key);this.cr.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new zo(e,n));let i=this.cr.get(e);void 0===i&&(i=uo(),this.cr.set(e,i)),this.cr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.lr=new xi(ih.hr),this.Pr=new xi(ih.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new ih(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new ih(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new hi(new ri([])),n=new ih(e,t),s=new ih(e,t+1),i=[];return this.Pr.forEachInRange([n,s],(t=>{this.Er(t),i.push(t.key)})),i}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new hi(new ri([])),n=new ih(e,t),s=new ih(e,t+1);let i=uo();return this.Pr.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ih(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ih{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return hi.comparator(t.key,e.key)||ti(t.mr,e.mr)}static Ir(t,e){return ti(t.mr,e.mr)||hi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new xi(ih.hr)}checkEmpty(t){return yi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Ko(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.pr=this.pr.add(new ih(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return yi.resolve(r)}lookupMutationBatch(t,e){return yi.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.wr(n),i=s<0?0:s;return yi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return yi.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return yi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ih(e,0),s=new ih(e,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,s],(t=>{const e=this.yr(t.mr);i.push(e)})),yi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new xi(ti);return e.forEach((t=>{const e=new ih(t,0),s=new ih(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,s],(t=>{n=n.add(t.mr)}))})),yi.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;hi.isDocumentKey(i)||(i=i.child(""));const r=new ih(new hi(i),0);let o=new xi(ti);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.mr)),!0)}),r),yi.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Us(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return yi.forEach(e.mutations,(s=>{const i=new ih(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new ih(e,0),s=this.pr.firstAfterOrEqual(n);return yi.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,yi.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.Dr=t,this.docs=new ki(hi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return yi.resolve(n?n.document.mutableCopy():hr.newInvalidDocument(e))}getEntries(t,e){let n=eo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():hr.newInvalidDocument(t))})),yi.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=eo();const r=e.path,o=new hi(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||fi(li(o),n)<=0||(s.has(o.key)||Xr(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return yi.resolve(i)}getAllFromCollectionGroup(t,e,n,s){Vs()}vr(t,e){return yi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ah(this)}getSize(t){return yi.resolve(this.size)}}class ah extends Ja{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.sr.addEntry(t,s)):this.sr.removeEntry(n)})),yi.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.persistence=t,this.Cr=new Zr((t=>Lr(t)),Mr),this.lastRemoteSnapshotVersion=si.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new sh,this.targetCount=0,this.Or=Ya.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),yi.resolve()}getLastRemoteSnapshotVersion(t){return yi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return yi.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),yi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),yi.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Ya(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,yi.resolve()}updateTargetData(t,e){return this.Ln(e),yi.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,yi.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Cr.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),yi.waitFor(i).next((()=>s))}getTargetCount(t){return yi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return yi.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),yi.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),yi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),yi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return yi.resolve(n)}containsKey(t,e){return yi.resolve(this.Mr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e){this.Nr={},this.overlays={},this.Br=new wi(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new hh(this),this.indexManager=new Qa,this.remoteDocumentCache=new oh((t=>this.referenceDelegate.qr(t))),this.serializer=new za(e),this.Qr=new eh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new rh(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){Ms("MemoryPersistence","Starting transaction:",t);const s=new uh(this.Br.next());return this.referenceDelegate.Kr(),n(s).next((t=>this.referenceDelegate.$r(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ur(t,e){return yi.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class uh extends pi{constructor(t){super(),this.currentSequenceNumber=t}}class lh{constructor(t){this.persistence=t,this.Wr=new sh,this.Gr=null}static zr(t){return new lh(t)}get jr(){if(this.Gr)return this.Gr;throw Vs()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),yi.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),yi.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),yi.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return yi.forEach(this.jr,(n=>{const s=hi.fromPath(n);return this.Hr(t,s).next((t=>{t||e.removeEntry(s,si.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return yi.or([()=>yi.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dh{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=s}static qi(t,e){let n=uo(),s=uo();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new dh(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.$i(t,e).next((i=>i||this.Ui(t,e,s,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(Ur(e))return yi.resolve(null);let n=$r(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=zr(e,null,"F"),n=$r(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=uo(...s);return this.Ki.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Gi(e,s);return this.zi(e,r,i,n.readTime)?this.$i(t,zr(e,null,"F")):this.ji(t,r,e,n)}))))})))))}Ui(t,e,n,s){return Ur(e)||s.isEqual(si.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((i=>{const r=this.Gi(e,i);return this.zi(e,r,n,s)?this.Wi(t,e):(Ls()<=h.LogLevel.DEBUG&&Ms("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(e)),this.ji(t,r,e,ui(s,-1)))}))}Gi(t,e){let n=new xi(Yr(t));return e.forEach(((e,s)=>{Xr(t,s)&&(n=n.add(s))})),n}zi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,e){return Ls()<=h.LogLevel.DEBUG&&Ms("QueryEngine","Using full collection scan to execute query:",Qr(e)),this.Ki.getDocumentsMatchingQuery(t,e,di.min())}ji(t,e,n,s){return this.Ki.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,e,n,s){this.persistence=t,this.Hi=e,this.serializer=s,this.Ji=new ki(ti),this.Yi=new Zr((t=>Lr(t)),Mr),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new th(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function ph(t,e,n,s){return new gh(t,e,n,s)}async function mh(t,e){const n=qs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=uo();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function yh(t){const e=qs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function vh(t,e,n){let s=uo(),i=uo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=eo();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(si.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Ms("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{ns:s,rs:i}}))}function wh(t,e){const n=qs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Eh(t,e){const n=qs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.kr.getTargetData(t,e).next((i=>i?(s=i,yi.resolve(s)):n.kr.allocateTargetId(t).next((i=>(s=new $a(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.kr.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ji.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Th(t,e,n){const s=qs(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!vi(t))throw t;Ms("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function _h(t,e,n){const s=qs(t);let i=si.min(),r=uo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=qs(t),i=s.Yi.get(n);return void 0!==i?yi.resolve(s.Ji.get(i)):s.kr.getTargetData(e,n)}(s,t,$r(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Hi.getDocumentsMatchingQuery(t,e,n?i:si.min(),n?r:uo()))).next((t=>(bh(s,Wr(e),t),{documents:t,ss:r})))))}function bh(t,e,n){let s=t.Zi.get(e)||si.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Zi.set(e,s)}class Ch{constructor(){this.activeTargetIds=fo()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sh{constructor(){this.Hs=new Ch,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Ch,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{Ys(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Ms("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){Ms("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh=null;function Dh(){return null===kh?kh=268435456+Math.round(2147483648*Math.random()):kh++,"0x"+kh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Nh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="WebChannelConnection";class Lh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${s}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${s}`}get Ro(){return!1}Vo(t,e,n,s,i){const r=Dh(),o=this.mo(t,e);Ms("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,s,i),this.po(t,o,a,n).then((e=>(Ms("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw Ps("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,s,i,r){return this.Vo(t,e,n,s,i)}fo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+xs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=Nh[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,s){const i=Dh();return new Promise(((r,o)=>{const a=new Is;a.setWithCredentials(!0),a.listenOnce(Ts.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Es.NO_ERROR:const e=a.getResponseJson();Ms(Rh,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case Es.TIMEOUT:Ms(Rh,`RPC '${t}' ${i} timed out`),o(new Bs(js.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const n=a.getStatus();if(Ms(Rh,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(js).indexOf(e)>=0?e:js.UNKNOWN}(e.status);o(new Bs(t,e.message))}else o(new Bs(js.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Bs(js.UNAVAILABLE,"Connection failed."));break;default:Vs()}}finally{Ms(Rh,`RPC '${t}' ${i} completed.`)}}));const h=JSON.stringify(s);Ms(Rh,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",h,n,15)}))}wo(t,e,n){const s=Dh(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=vs(),o=ws(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.xmlHttpFactory=new Cs({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Ms(Rh,`Creating RPC '${t}' stream ${s}: ${c}`,a);const u=r.createWebChannel(c,a);let l=!1,d=!1;const f=new xh({so:e=>{d?Ms(Rh,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(Ms(Rh,`Opening RPC '${t}' stream ${s} transport.`),u.open(),l=!0),Ms(Rh,`RPC '${t}' stream ${s} sending:`,e),u.send(e))},oo:()=>u.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(u,Ss.EventType.OPEN,(()=>{d||Ms(Rh,`RPC '${t}' stream ${s} transport opened.`)})),g(u,Ss.EventType.CLOSE,(()=>{d||(d=!0,Ms(Rh,`RPC '${t}' stream ${s} transport closed`),f.Po())})),g(u,Ss.EventType.ERROR,(e=>{d||(d=!0,Ps(Rh,`RPC '${t}' stream ${s} transport errored:`,e),f.Po(new Bs(js.UNAVAILABLE,"The operation could not be completed")))})),g(u,Ss.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];Us(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Ms(Rh,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Ho[t];if(void 0!==e)return Wo(e)}(e),i=o.message;void 0===n&&(n=js.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Po(new Bs(n,i)),u.close()}else Ms(Rh,`RPC '${t}' stream ${s} received:`,i),f.Io(i)}})),g(o,_s.STAT_EVENT,(e=>{e.stat===bs.PROXY?Ms(Rh,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===bs.NOPROXY&&Ms(Rh,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){return new ya(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),s=Math.max(0,e-n);s>0&&Ms("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e,n,s,i,r,o,a){this.ii=t,this.Bo=n,this.Lo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Ph(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===js.RESOURCE_EXHAUSTED?(Os(e.toString()),Os("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===js.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new Bs(js.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return Ms("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(Ms("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vh extends Fh{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:Vs(),r=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Us(void 0===e||"string"==typeof e),Oi.fromBase64String(e||"")):(Us(void 0===e||e instanceof Uint8Array),Oi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,h=a&&function(t){const e=void 0===t.code?js.UNKNOWN:Wo(t.code);return new Bs(e,t.message||"")}(a);n=new ca(i,r,o,h||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ia(t,s.document.name),r=_a(s.document.updateTime),o=s.document.createTime?_a(s.document.createTime):si.min(),a=new or({mapValue:{fields:s.document.fields}}),h=hr.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new aa(c,u,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ia(t,s.document),r=s.readTime?_a(s.readTime):si.min(),o=hr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ia(t,s.document),r=s.removedTargetIds||[];n=new aa([],r,i,null)}else{if(!("filter"in e))return Vs();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:i}=t,r=new Go(s,i),o=t.targetId;n=new ha(o,r)}}var s;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return si.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?si.min():e.readTime?_a(e.readTime):si.min()}(t);return this.listener.r_(e,n)}i_(t){const e={};e.database=Da(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=Or(s)?{documents:La(t,s)}:{query:Ma(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ea(t,e.resumeToken);const s=va(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(si.min())>0){n.readTime=wa(t,e.snapshotVersion.toTimestamp());const s=va(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Vs()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Ho(e)}s_(t){const e={};e.database=Da(this.serializer),e.removeTarget=t,this.Ho(e)}}class Uh extends Fh{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Us(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const s=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Us(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?_a(t.updateTime):_a(e);return n.isEqual(si.min())&&(n=_a(e)),new Ao(n,t.transformResults||[])}(t,n)))):[]),i=_a(t.commitTime);return this.listener.u_(i,s)}var e,n;return Us(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Da(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ra(this.serializer,t)))};this.Ho(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new Bs(js.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Vo(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===js.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Bs(js.UNKNOWN,t.toString())}))}yo(t,e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.yo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===js.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Bs(js.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class jh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Os(e),this.d_=!1):Ms("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{Yh(this)&&(Ms("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=qs(t);e.y_.add(4),await $h(e),e.b_.set("Unknown"),e.y_.delete(4),await Kh(e)}(this))}))})),this.b_=new jh(n,s)}}async function Kh(t){if(Yh(t))for(const e of t.w_)await e(!0)}async function $h(t){for(const e of t.w_)await e(!1)}function zh(t,e){const n=qs(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Wh(n)?Xh(n):pc(n).Uo()&&Hh(n,e))}function Gh(t,e){const n=qs(t),s=pc(n);n.p_.delete(e),s.Uo()&&Qh(n,e),0===n.p_.size&&(s.Uo()?s.zo():Yh(n)&&n.b_.set("Unknown"))}function Hh(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(si.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pc(t).i_(e)}function Qh(t,e){t.D_.Be(e),pc(t).s_(e)}function Xh(t){t.D_=new la({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),pc(t).start(),t.b_.A_()}function Wh(t){return Yh(t)&&!pc(t).$o()&&t.p_.size>0}function Yh(t){return 0===qs(t).y_.size}function Jh(t){t.D_=void 0}async function Zh(t){t.p_.forEach(((e,n)=>{Hh(t,e)}))}async function tc(t,e){Jh(t),Wh(t)?(t.b_.m_(e),Xh(t)):t.b_.set("Unknown")}async function ec(t,e,n){if(t.b_.set("Online"),e instanceof ca&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.p_.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.p_.delete(s),t.D_.removeTarget(s))}(t,e)}catch(n){Ms("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await nc(t,n)}else if(e instanceof aa?t.D_.We(e):e instanceof ha?t.D_.Ze(e):t.D_.je(e),!n.isEqual(si.min()))try{const e=await yh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.D_.st(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.p_.get(s);i&&t.p_.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.p_.get(e);if(!s)return;t.p_.set(e,s.withResumeToken(Oi.EMPTY_BYTE_STRING,s.snapshotVersion)),Qh(t,e);const i=new $a(s.target,e,n,s.sequenceNumber);Hh(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ms("RemoteStore","Failed to raise snapshot:",e),await nc(t,e)}}async function nc(t,e,n){if(!vi(e))throw e;t.y_.add(1),await $h(t),t.b_.set("Offline"),n||(n=()=>yh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ms("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Kh(t)}))}function sc(t,e){return e().catch((n=>nc(t,n,e)))}async function ic(t){const e=qs(t),n=mc(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;rc(e);)try{const t=await wh(e.localStore,s);if(null===t){0===e.g_.length&&n.zo();break}s=t.batchId,oc(e,t)}catch(t){await nc(e,t)}ac(e)&&hc(e)}function rc(t){return Yh(t)&&t.g_.length<10}function oc(t,e){t.g_.push(e);const n=mc(t);n.Uo()&&n.__&&n.a_(e.mutations)}function ac(t){return Yh(t)&&!mc(t).$o()&&t.g_.length>0}function hc(t){mc(t).start()}async function cc(t){mc(t).l_()}async function uc(t){const e=mc(t);for(const n of t.g_)e.a_(n.mutations)}async function lc(t,e,n){const s=t.g_.shift(),i=$o.from(s,e,n);await sc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ic(t)}async function dc(t,e){e&&mc(t).__&&await async function(t,e){if(Xo(n=e.code)&&n!==js.ABORTED){const n=t.g_.shift();mc(t).Go(),await sc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ic(t)}var n}(t,e),ac(t)&&hc(t)}async function fc(t,e){const n=qs(t);n.asyncQueue.verifyOperationInProgress(),Ms("RemoteStore","RemoteStore received new credentials");const s=Yh(n);n.y_.add(3),await $h(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Kh(n)}async function gc(t,e){const n=qs(t);e?(n.y_.delete(2),await Kh(n)):e||(n.y_.add(2),await $h(n),n.b_.set("Unknown"))}function pc(t){return t.v_||(t.v_=function(t,e,n){const s=qs(t);return s.P_(),new Vh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{_o:Zh.bind(null,t),uo:tc.bind(null,t),r_:ec.bind(null,t)}),t.w_.push((async e=>{e?(t.v_.Go(),Wh(t)?Xh(t):t.b_.set("Unknown")):(await t.v_.stop(),Jh(t))}))),t.v_}function mc(t){return t.C_||(t.C_=function(t,e,n){const s=qs(t);return s.P_(),new Uh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{_o:cc.bind(null,t),uo:dc.bind(null,t),c_:uc.bind(null,t),u_:lc.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await ic(t)):(await t.C_.stop(),t.g_.length>0&&(Ms("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yc{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new yc(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Bs(js.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vc(t,e){if(Os("AsyncQueue",`${e}: ${t}`),vi(t))return new Bs(js.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||hi.comparator(e.key,n.key):(t,e)=>hi.comparator(t.key,e.key),this.keyedMap=so(),this.sortedSet=new ki(this.comparator)}static emptySet(t){return new wc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new wc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.F_=new ki(hi.comparator)}track(t){const e=t.doc.key,n=this.F_.get(e);n?0!==t.type&&3===n.type?this.F_=this.F_.insert(e,t):3===t.type&&1!==n.type?this.F_=this.F_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.F_=this.F_.remove(e):1===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):Vs():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Tc{constructor(t,e,n,s,i,r,o,a,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Tc(t,e,wc.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.x_=void 0,this.listeners=[]}}class bc{constructor(){this.queries=new Zr((t=>Hr(t)),Gr),this.onlineState="Unknown",this.O_=new Set}}async function Cc(t,e){const n=qs(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new _c),i)try{r.x_=await n.onListen(s)}catch(t){const n=vc(t,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&kc(n)}async function Sc(t,e){const n=qs(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ic(t,e){const n=qs(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.B_(t)&&(s=!0);i.x_=t}}s&&kc(n)}function Ac(t,e,n){const s=qs(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function kc(t){t.O_.forEach((t=>{t.next()}))}class Dc{constructor(t,e,n){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Tc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.W_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}U_(t){t=Tc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(t){this.key=t}}class xc{constructor(t){this.key=t}}class Rc{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=uo(),this.mutatedKeys=uo(),this.na=Yr(t),this.ra=new wc(this.na)}get ia(){return this.X_}sa(t,e){const n=e?e.oa:new Ec,s=e?e.ra:this.ra;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,h="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),u=Xr(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this._a(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.na(u,a)>0||h&&this.na(u,h)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ra:r,oa:n,zi:o,mutatedKeys:i}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const i=t.oa.M_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Vs()}};return n(t)-n(e)}(t.type,e.type)||this.na(t.doc,e.doc))),this.aa(n);const r=e?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new Tc(this.query,t.ra,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:r}:{ca:r}}N_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Ec,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach((t=>this.X_=this.X_.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.X_=this.X_.delete(t))),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=uo(),this.ra.forEach((t=>{this.la(t.key)&&(this.ta=this.ta.add(t.key))}));const e=[];return t.forEach((t=>{this.ta.has(t)||e.push(new xc(t))})),this.ta.forEach((n=>{t.has(n)||e.push(new Nc(n))})),e}ha(t){this.X_=t.ss,this.ta=uo();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return Tc.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class Lc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mc{constructor(t){this.key=t,this.Ia=!1}}class Oc{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Ta={},this.Ea=new Zr((t=>Hr(t)),Gr),this.da=new Map,this.Aa=new Set,this.Ra=new ki(hi.comparator),this.Va=new Map,this.ma=new sh,this.fa={},this.ga=new Map,this.pa=Ya.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Pc(t,e){const n=tu(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const t=await Eh(n.localStore,$r(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Fc(n,e,s,"current"===r,t.resumeToken),n.isPrimaryClient&&zh(n.remoteStore,t)}return i}async function Fc(t,e,n,s,i){t.wa=(e,n,s)=>async function(t,e,n,s){let i=e.view.sa(n);i.zi&&(i=await _h(t.localStore,e.query,!1).then((({documents:t})=>e.view.sa(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Qc(t,e.targetId,o.ca),o.snapshot}(t,e,n,s);const r=await _h(t.localStore,e,!0),o=new Rc(e,r.ss),a=o.sa(r.documents),h=oa.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,h);Qc(t,n,c.ca);const u=new Lc(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function Vc(t,e){const n=qs(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter((t=>!Gr(t,e)))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Th(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Gh(n.remoteStore,s.targetId),Gc(n,s.targetId)})).catch(mi)):(Gc(n,s.targetId),await Th(n.localStore,s.targetId,!0))}async function Uc(t,e){const n=qs(t);try{const t=await function(t,e){const n=qs(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((r,a)=>{const h=i.get(a);if(!h)return;o.push(n.kr.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.kr.addMatchingKeys(t,r.addedDocuments,a))));let c=h.withSequenceNumber(t.currentSequenceNumber);var u,l,d;null!==e.targetMismatches.get(a)?c=c.withResumeToken(Oi.EMPTY_BYTE_STRING,si.min()).withLastLimboFreeSnapshotVersion(si.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),l=c,d=r,(0===(u=h).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.kr.updateTargetData(t,c))}));let a=eo(),h=uo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(vh(t,r,e.documentUpdates).next((t=>{a=t.ns,h=t.rs}))),!s.isEqual(si.min())){const e=n.kr.getLastRemoteSnapshotVersion(t).next((e=>n.kr.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return yi.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,h))).next((()=>a))})).then((t=>(n.Ji=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Va.get(e);s&&(Us(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Ia=!0:t.modifiedDocuments.size>0?Us(s.Ia):t.removedDocuments.size>0&&(Us(s.Ia),s.Ia=!1))})),await Yc(n,t,e)}catch(t){await mi(t)}}function qc(t,e,n){const s=qs(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Ea.forEach(((n,s)=>{const i=s.view.N_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=qs(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.N_(e)&&(s=!0)})),s&&kc(n)}(s.eventManager,e),t.length&&s.Ta.r_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jc(t,e,n){const s=qs(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let t=new ki(hi.comparator);t=t.insert(r,hr.newNoDocument(r,si.min()));const n=uo().add(r),i=new ra(si.min(),new Map,new ki(ti),t,n);await Uc(s,i),s.Ra=s.Ra.remove(r),s.Va.delete(e),Wc(s)}else await Th(s.localStore,e,!1).then((()=>Gc(s,e,n))).catch(mi)}async function Bc(t,e){const n=qs(t),s=e.batch.batchId;try{const t=await function(t,e){const n=qs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=yi.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Us(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=uo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);zc(n,s,null),$c(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yc(n,t)}catch(t){await mi(t)}}async function Kc(t,e,n){const s=qs(t);try{const t=await function(t,e){const n=qs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Us(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);zc(s,e,n),$c(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yc(s,t)}catch(t){await mi(t)}}function $c(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function zc(t,e,n){const s=qs(t);let i=s.fa[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach((e=>{t.ma.containsKey(e)||Hc(t,e)}))}function Hc(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);null!==n&&(Gh(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Wc(t))}function Qc(t,e,n){for(const s of n)s instanceof Nc?(t.ma.addReference(s.key,e),Xc(t,s)):s instanceof xc?(Ms("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||Hc(t,s.key)):Vs()}function Xc(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(Ms("SyncEngine","New document in limbo: "+n),t.Aa.add(s),Wc(t))}function Wc(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new hi(ri.fromString(e)),s=t.pa.next();t.Va.set(s,new Mc(n)),t.Ra=t.Ra.insert(n,s),zh(t.remoteStore,new $a($r(Vr(n.path)),s,"TargetPurposeLimboResolution",wi.ae))}}async function Yc(t,e,n){const s=qs(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach(((t,a)=>{o.push(s.wa(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=dh.qi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Ta.r_(i),await async function(t,e){const n=qs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>yi.forEach(e,(e=>yi.forEach(e.Li,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>yi.forEach(e.ki,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!vi(t))throw t;Ms("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(e,i)}}}(s.localStore,r))}async function Jc(t,e){const n=qs(t);if(!n.currentUser.isEqual(e)){Ms("SyncEngine","User change. New user:",e.toKey());const t=await mh(n.localStore,e);n.currentUser=e,i="'waitForPendingWrites' promise is rejected due to a user change.",(s=n).ga.forEach((t=>{t.forEach((t=>{t.reject(new Bs(js.CANCELLED,i))}))})),s.ga.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Yc(n,t.ts)}var s,i}function Zc(t,e){const n=qs(t),s=n.Va.get(e);if(s&&s.Ia)return uo().add(s.key);{let t=uo();const s=n.da.get(e);if(!s)return t;for(const e of s){const s=n.Ea.get(e);t=t.unionWith(s.view.ia)}return t}}function tu(t){const e=qs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jc.bind(null,e),e.Ta.r_=Ic.bind(null,e.eventManager),e.Ta.Sa=Ac.bind(null,e.eventManager),e}function eu(t){const e=qs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kc.bind(null,e),e}class nu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Oh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ph(this.persistence,new fh,t.initialUser,this.serializer)}createPersistence(t){return new ch(lh.zr,this.serializer)}createSharedClientState(t){return new Sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class su{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jc.bind(null,this.syncEngine),await gc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new bc}createDatastore(t){const e=Oh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Lh(s));var s;return function(t,e,n,s){return new qh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>qc(this.syncEngine,t,0),r=Ah.v()?new Ah:new Ih,new Bh(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Oc(t,e,n,s,i,r);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=qs(t);Ms("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await $h(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Os("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ns.UNAUTHENTICATED,this.clientId=Zs.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ms("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ms("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Bs(js.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ks;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ou(t,e){t.asyncQueue.verifyOperationInProgress(),Ms("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await mh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function au(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cu(t);Ms("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>fc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>fc(e.remoteStore,n))),t._onlineComponents=e}function hu(t){return"FirebaseError"===t.name?t.code===js.FAILED_PRECONDITION||t.code===js.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function cu(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ms("FirestoreClient","Using user provided OfflineComponentProvider");try{await ou(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hu(n))throw n;Ps("Error using user provided cache. Falling back to memory cache: "+n),await ou(t,new nu)}}else Ms("FirestoreClient","Using default OfflineComponentProvider"),await ou(t,new nu);return t._offlineComponents}async function uu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ms("FirestoreClient","Using user provided OnlineComponentProvider"),await au(t,t._uninitializedComponentsProvider._online)):(Ms("FirestoreClient","Using default OnlineComponentProvider"),await au(t,new su))),t._onlineComponents}function lu(t){return uu(t).then((t=>t.syncEngine))}async function du(t){const e=await uu(t),n=e.eventManager;return n.onListen=Pc.bind(null,e.syncEngine),n.onUnlisten=Vc.bind(null,e.syncEngine),n}function fu(t,e,n={}){const s=new Ks;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new iu({next:n=>{e.enqueueAndForget((()=>Sc(t,o))),n.fromCache&&"server"===s.source?i.reject(new Bs(js.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Dc(n,r,{includeMetadataChanges:!0,W_:!0});return Cc(t,o)}(await du(t),t.asyncQueue,e,n,s))),s.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gu(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e,n){if(!n)throw new Bs(js.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yu(t){if(!hi.isDocumentKey(t))throw new Bs(js.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vu(t){if(hi.isDocumentKey(t))throw new Bs(js.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Vs()}function Eu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Bs(js.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wu(t);throw new Bs(js.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Bs(js.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Bs(js.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new Bs(js.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gu(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Bs(js.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Bs(js.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Bs(js.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class _u{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Bs(js.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Bs(js.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new zs;switch(t.type){case"firstParty":return new Xs(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Bs(js.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pu.get(t);e&&(Ms("ComponentProvider","Removing Datastore"),pu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new bu(this.firestore,t,this._query)}}class Cu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Su(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Cu(this.firestore,t,this._key)}}class Su extends bu{constructor(t,e,n){super(t,e,Vr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Cu(this.firestore,null,new hi(t))}withConverter(t){return new Su(this.firestore,t,this._path)}}function Iu(t,e,...n){if(t=(0,c.getModularInstance)(t),mu("collection","path",e),t instanceof _u){const s=ri.fromString(e,...n);return vu(s),new Su(t,null,s)}{if(!(t instanceof Cu||t instanceof Su))throw new Bs(js.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ri.fromString(e,...n));return vu(s),new Su(t.firestore,null,s)}}function Au(t,e,...n){if(t=(0,c.getModularInstance)(t),1===arguments.length&&(e=Zs.V()),mu("doc","path",e),t instanceof _u){const s=ri.fromString(e,...n);return yu(s),new Cu(t,null,new hi(s))}{if(!(t instanceof Cu||t instanceof Su))throw new Bs(js.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ri.fromString(e,...n));return yu(s),new Cu(t.firestore,t instanceof Su?t.converter:null,new hi(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Ph(this,"async_queue_retry"),this.Xa=()=>{const t=Mh();t&&Ms("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=Mh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Mh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new Ks;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!vi(t))throw t;Ms("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;throw Os("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const s=yc.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(s),s}eu(){this.Ha&&Vs()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class Du extends _u{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new ku,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ru(this),this._firestoreClient.terminate()}}function Nu(t,e){const n="object"==typeof t?t:(0,o.getApp)(),s="string"==typeof t?t:e||"(default)",i=(0,o._getProvider)(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const t=(0,c.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,s={}){var i;const r=(t=Eu(t,_u))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&Ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ns.MOCK_USER;else{e=(0,c.createMockUserToken)(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Bs(js.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ns(r)}t._authCredentials=new Gs(new $s(e,n))}}(i,...t)}return i}function xu(t){return t._firestoreClient||Ru(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ru(t){var e,n,s;const i=t._freezeSettings(),r=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",h=t._persistenceKey,new Ki(o,a,h,(c=i).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,gu(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,h,c;t._firestoreClient=new ru(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lu(Oi.fromBase64String(t))}catch(t){throw new Bs(js.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Lu(Oi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Bs(js.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Bs(js.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Bs(js.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ti(this._lat,t._lat)||ti(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new RegExp("[~\\*/\\[\\]]");function Fu(t,e,n){if(e.search(Pu)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mu(...e.split("."))._internalPath}catch(s){throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new Bs(js.INVALID_ARGUMENT,a+t+h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Cu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new qu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ju("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class qu extends Uu{data(){return super.data()}}function ju(t,e){return"string"==typeof e?Fu(t,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Bs(js.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ku{convertValue(t,e="none"){switch(Gi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ui(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Vs()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ii(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Ou(Vi(t.latitude),Vi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ji(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Bi(t));default:return null}}convertTimestamp(t){const e=Fi(t);return new ni(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ri.fromString(t);Us(Ka(n));const s=new $i(n.get(1),n.get(3)),i=new hi(n.popFirst(5));return s.isEqual(e)||Os(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $u{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zu extends Uu{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ju("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Gu extends zu{data(t={}){return super.data(t)}}class Hu{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new $u(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Gu(this._firestore,this._userDataWriter,n.key,n,new $u(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Bs(js.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Gu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new $u(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Gu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new $u(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Qu(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Vs()}}class Xu extends Ku{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Cu(this.firestore,null,e)}}function Wu(t){t=Eu(t,bu);const e=Eu(t.firestore,Du),n=xu(e),s=new Xu(e);return Bu(t._query),fu(n,t._query).then((n=>new Hu(e,s,t,n)))}function Yu(t,e){return function(t,e){const n=new Ks;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=eu(t);try{const t=await function(t,e){const n=qs(t),s=ni.now(),i=e.reduce(((t,e)=>t.add(e.key)),uo());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=eo(),h=uo();return n.Xi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(h=h.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Mo(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Fo(t.key,e,ar(e.value.mapValue),ko.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,h);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:io(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.fa[t.currentUser.toKey()];s||(s=new ki(ti)),s=s.insert(e,n),t.fa[t.currentUser.toKey()]=s}(s,t.batchId,n),await Yc(s,t.changes),await ic(s.remoteStore)}catch(t){const e=vc(t,"Failed to persist write");n.reject(e)}}(await lu(t),e,n))),n.promise}(xu(t),e)}!function(t,e=!0){var n;n=o.SDK_VERSION,xs=n,(0,o._registerComponent)(new(0,a.Component)("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Du(new Hs(t.getProvider("auth-internal")),new Ys(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Bs(js.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),(0,o.registerVersion)(Ds,"4.1.0",t),(0,o.registerVersion)(Ds,"4.1.0","esm2017")}();r=s("eyjy7");var Ju=s("2ix2C"),Zu=s("7Y9D8");const tl=(0,r.getAuth)(Ju.app),el=Nu(Ju.app),nl=async t=>{(0,r.onAuthStateChanged)(tl,(async e=>{if(e){const s=e.email;await(n=Au(el,s,t),Yu(Eu(n.firestore,Du),[new jo(n._key,ko.none())]))}var n}))};Ju=s("2ix2C"),Zu=s("7Y9D8");const sl={defaultMarkup:document.getElementById("js-shl-default-container"),bookListEl:document.getElementById("js-shl-booklist")},il=()=>{sl.defaultMarkup.style.display="flex",Zu.Notify.info("There are no books in your list yet...")},rl=t=>{if(!t.target.classList.contains("js-shl-del-btn"))return;const e=t.target.closest(".js-shl-card"),n=e.dataset.id;e.remove(),nl(n),sl.bookListEl.children.length||il()},ol=t=>{sl.defaultMarkup.style.display="none";const e=(t=>t.map((({id:t,data:{img:e,title:n,listname:s,description:i,author:r,amazonLink:o,appleLink:a,barnesLink:h}})=>`<li class="shopping-list__item shopping-list-card js-shl-card" data-id='${t}'>\n          <img\n            class="shopping-list-card__image"\n            src="${e}"\n            alt="${n}"\n          />\n          <div class="shopping-list-card__info">\n            <h2 class="shopping-list-card__title">${n}</h2>\n            <p class="shopping-list-card__category">${s}</p>\n            <p class="shopping-list-card__descr">\n            ${i}\n            </p>\n            <div class="shopping-list-card__wrapper">\n              <p class="shopping-list-card__author">${r}</p>\n              <div class="shopping-list-card__links">\n                <a\n                  href="${o}"\n                  target="_blank"\n                  class="shopping-list-card__link --amazon _link"\n                ></a>\n                <a\n                  href="${a}"\n                  target="_blank"\n                  class="shopping-list-card__link --apple _link"\n                ></a>\n                <a\n                  href="${h}"\n                  target="_blank"\n                  class="shopping-list-card__link --barnes _link"\n                ></a>\n              </div>\n            </div>\n            <button class="shopping-list-card__button js-shl-del-btn" type="button">\n              <svg\n                class="shopping-list-card__button--icon"\n                xmlns="http://www.w3.org/2000/svg"\n                width="16"\n                height="16"\n                viewBox="0 0 16 16"\n                fill="none"\n              >\n                <path\n                  d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"\n                  stroke="white"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n            </button>\n          </div>\n        </li>`)).join(""))(t);sl.bookListEl.insertAdjacentHTML("beforeend",e),sl.bookListEl.addEventListener("click",rl)},al=(0,r.getAuth)(Ju.app),hl=Nu(Ju.app);(0,r.onAuthStateChanged)(al,(async t=>{if(t){const e=t.email,n=await Wu(Iu(hl,e)),s=[];if(n.forEach((t=>{const e={id:t.id,data:t.data()};s.push(e)})),!s.length)return il();ol(s)}else Zu.Notify.info("Please Sign-In/Sign-Up")})),s("e3Z2B"),s("4Z4PC");
//# sourceMappingURL=shopping-list.294c4e08.js.map
