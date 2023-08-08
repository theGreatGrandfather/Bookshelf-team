!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},t.parcelRequired7c6=i);const s={btnHeaderMenu:document.querySelector(".header-menu"),iconBurger:document.querySelector(".js-menu-open"),iconCross:document.querySelector(".js-menu-close"),menuContainer:document.querySelector(".js-menu-container"),btnLogOut:document.querySelector(".js_log_out")},o=document.body;function a(){o.classList.remove("disable-scroll")}function l(){o.classList.add("disable-scroll")}s.iconBurger.addEventListener("click",(t=>{l(),t.currentTarget.classList.add("hidden"),s.iconCross.classList.remove("hidden"),s.menuContainer.classList.add("is-open")})),s.iconBurger.removeEventListener("click",(t=>{l(),t.currentTarget.classList.add("hidden"),s.iconCross.classList.remove("hidden"),s.menuContainer.classList.add("is-open")})),s.iconCross.addEventListener("click",(t=>{a(),t.currentTarget.classList.add("hidden"),s.iconBurger.classList.remove("hidden"),s.menuContainer.classList.remove("is-open")})),s.iconCross.removeEventListener("click",(t=>{a(),t.currentTarget.classList.add("hidden"),s.iconBurger.classList.remove("hidden"),s.menuContainer.classList.remove("is-open")}));const u=t=>t.map((({book_image:t,title:e,author:n,_id:r,list_name:i,description:s,buy_links:o})=>`\n      <li class="book-item" class="_list"\n        data-title="${e}"\n        data-image="${t}"\n        data-author="${n}"\n        data-listName="${i}"\n        data-description="${s}"\n        data-linkNameAmazon="${o[0].name}"\n        data-linkUrlAmazon="${o[0].url}"\n        data-linkNameApple="${o[1].name}"\n        data-linkUrlApple="${o[1].url}"\n        data-linkNameBarnes="${o[2].name}"\n        data-linkUrlBarnes="${o[2].url}"\n      >\n        <a href="#" class="_link" class="book-item" data-id="${r}">\n          <div class="thumb">\n            <img class="lazyload" src="https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/testBook.png" data-src="${t||"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/testBook.png"}" alt="${e}" loading="lazy"/>\n            <div class="overlay">\n              <p class="overlay-text">quick view </p>\n            </div>\n          </div>\n          <h4 class="book-title">${e}</h4>\n          <p class="book-author">${n}</p>\n        </a>\n      </li>\n    `)).join("");function c(t,e){return function(){return t.apply(e,arguments)}}const{toString:h}=Object.prototype,{getPrototypeOf:f}=Object,d=(p=Object.create(null),t=>{const e=h.call(t);return p[e]||(p[e]=e.slice(8,-1).toLowerCase())});var p;const g=t=>(t=t.toLowerCase(),e=>d(e)===t),m=t=>e=>typeof e===t,{isArray:y}=Array,v=m("undefined");const w=g("ArrayBuffer");const E=m("string"),b=m("function"),T=m("number"),A=t=>null!==t&&"object"==typeof t,S=t=>{if("object"!==d(t))return!1;const e=f(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},_=g("Date"),I=g("File"),C=g("Blob"),k=g("FileList"),N=g("URLSearchParams");function L(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),y(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function R(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,D=t=>!v(t)&&t!==O;const x=(P="undefined"!=typeof Uint8Array&&f(Uint8Array),t=>P&&t instanceof P);var P;const M=g("HTMLFormElement"),U=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),F=g("RegExp"),B=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};L(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},V="abcdefghijklmnopqrstuvwxyz",j="0123456789",$={DIGIT:j,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+j};const q=g("AsyncFunction");var G={isArray:y,isArrayBuffer:w,isBuffer:function(t){return null!==t&&!v(t)&&null!==t.constructor&&!v(t.constructor)&&b(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||b(t.append)&&("formdata"===(e=d(t))||"object"===e&&b(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&w(t.buffer),e},isString:E,isNumber:T,isBoolean:t=>!0===t||!1===t,isObject:A,isPlainObject:S,isUndefined:v,isDate:_,isFile:I,isBlob:C,isRegExp:F,isFunction:b,isStream:t=>A(t)&&b(t.pipe),isURLSearchParams:N,isTypedArray:x,isFileList:k,forEach:L,merge:function t(){const{caseless:e}=D(this)&&this||{},n={},r=(r,i)=>{const s=e&&R(n,i)||i;S(n[s])&&S(r)?n[s]=t(n[s],r):S(r)?n[s]=t({},r):y(r)?n[s]=r.slice():n[s]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&L(arguments[t],r);return n},extend:(t,e,n,{allOwnKeys:r}={})=>(L(e,((e,r)=>{n&&b(e)?t[r]=c(e,n):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],r&&!r(o,t,e)||a[o]||(e[o]=t[o],a[o]=!0);t=!1!==n&&f(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:d,kindOfTest:g,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(y(t))return t;let e=t.length;if(!T(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:M,hasOwnProperty:U,hasOwnProp:U,reduceDescriptors:B,freezeMethods:t=>{B(t,((e,n)=>{if(b(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];b(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return y(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:R,global:O,isContextDefined:D,ALPHABET:$,generateString:(t=16,e=$.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:function(t){return!!(t&&b(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,r)=>{if(A(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=y(t)?[]:{};return L(t,((t,e)=>{const s=n(t,r+1);!v(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},isAsyncFn:q,isThenable:t=>t&&(A(t)||b(t))&&b(t.then)&&b(t.catch)};function z(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}G.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const K=z.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{H[t]={value:t}})),Object.defineProperties(z,H),Object.defineProperty(K,"isAxiosError",{value:!0}),z.from=(t,e,n,r,i,s)=>{const o=Object.create(K);return G.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),z.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var Q,W,X,J=z;W=function(t){var e,n,r=st(t),i=r[0],s=r[1],o=new nt(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)e=et[t.charCodeAt(n)]<<18|et[t.charCodeAt(n+1)]<<12|et[t.charCodeAt(n+2)]<<6|et[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=et[t.charCodeAt(n)]<<2|et[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=et[t.charCodeAt(n)]<<10|et[t.charCodeAt(n+1)]<<4|et[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},X=function(t){for(var e,n=t.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(ot(t,o,o+s>a?a:o+s));1===r?(e=t[n-1],i.push(tt[e>>2]+tt[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(tt[e>>10]+tt[e>>4&63]+tt[e<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Y,Z,tt=[],et=[],nt="undefined"!=typeof Uint8Array?Uint8Array:Array,rt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",it=0;it<64;++it)tt[it]=rt[it],et[rt.charCodeAt(it)]=it;function st(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function ot(t,e,n){for(var r,i,s=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(tt[(i=r)>>18&63]+tt[i>>12&63]+tt[i>>6&63]+tt[63&i]);return s.join("")}et["-".charCodeAt(0)]=62,et["_".charCodeAt(0)]=63,Y=function(t,e,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,u=l>>1,c=-7,h=n?i-1:0,f=n?-1:1,d=t[e+h];for(h+=f,s=d&(1<<-c)-1,d>>=-c,c+=a;c>0;s=256*s+t[e+h],h+=f,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=r;c>0;o=256*o+t[e+h],h+=f,c-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),s-=u}return(d?-1:1)*o*Math.pow(2,s-r)},Z=function(t,e,n,r,i,s){var o,a,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),(e+=o+h>=1?f/l:f*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=c?(a=0,o=c):o+h>=1?(a=(e*l-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+d]=255&o,d+=p,o/=256,u-=8);t[n+d-p]|=128*g};const at="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Q=ct;const lt=2147483647;function ut(t){if(t>lt)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,ct.prototype),e}function ct(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return dt(t)}return ht(t,e,n)}function ht(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!ct.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|yt(t,e);let r=ut(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Jt(t,Uint8Array)){const e=new Uint8Array(t);return gt(e.buffer,e.byteOffset,e.byteLength)}return pt(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Jt(t,ArrayBuffer)||t&&Jt(t.buffer,ArrayBuffer))return gt(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Jt(t,SharedArrayBuffer)||t&&Jt(t.buffer,SharedArrayBuffer)))return gt(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return ct.from(r,e,n);const i=function(t){if(ct.isBuffer(t)){const e=0|mt(t.length),n=ut(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Yt(t.length)?ut(0):pt(t);if("Buffer"===t.type&&Array.isArray(t.data))return pt(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return ct.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ft(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function dt(t){return ft(t),ut(t<0?0:0|mt(t))}function pt(t){const e=t.length<0?0:0|mt(t.length),n=ut(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function gt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,ct.prototype),r}function mt(t){if(t>=lt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+lt.toString(16)+" bytes");return 0|t}function yt(t,e){if(ct.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Jt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Qt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Wt(t).length;default:if(i)return r?-1:Qt(t).length;e=(""+e).toLowerCase(),i=!0}}function vt(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ot(this,e,n);case"utf8":case"utf-8":return kt(this,e,n);case"ascii":return Lt(this,e,n);case"latin1":case"binary":return Rt(this,e,n);case"base64":return Ct(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Dt(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function wt(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function Et(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Yt(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=ct.from(e,r)),ct.isBuffer(e))return 0===e.length?-1:bt(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):bt(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function bt(t,e,n,r,i){let s,o=1,a=t.length,l=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,l/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(u(t,s+r)!==u(e,r)){n=!1;break}if(n)return s}return-1}function Tt(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Yt(r))return o;t[n+o]=r}return o}function At(t,e,n,r){return Xt(Qt(e,t.length-n),t,n,r)}function St(t,e,n,r){return Xt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function _t(t,e,n,r){return Xt(Wt(e),t,n,r)}function It(t,e,n,r){return Xt(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function Ct(t,e,n){return 0===e&&n===t.length?X(t):X(t.slice(e,n))}function kt(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,l;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(s=l));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(l=(15&e)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=Nt)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=Nt));return n}(r)}ct.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),ct.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ct.prototype,"parent",{enumerable:!0,get:function(){if(ct.isBuffer(this))return this.buffer}}),Object.defineProperty(ct.prototype,"offset",{enumerable:!0,get:function(){if(ct.isBuffer(this))return this.byteOffset}}),ct.poolSize=8192,ct.from=function(t,e,n){return ht(t,e,n)},Object.setPrototypeOf(ct.prototype,Uint8Array.prototype),Object.setPrototypeOf(ct,Uint8Array),ct.alloc=function(t,e,n){return function(t,e,n){return ft(t),t<=0?ut(t):void 0!==e?"string"==typeof n?ut(t).fill(e,n):ut(t).fill(e):ut(t)}(t,e,n)},ct.allocUnsafe=function(t){return dt(t)},ct.allocUnsafeSlow=function(t){return dt(t)},ct.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==ct.prototype},ct.compare=function(t,e){if(Jt(t,Uint8Array)&&(t=ct.from(t,t.offset,t.byteLength)),Jt(e,Uint8Array)&&(e=ct.from(e,e.offset,e.byteLength)),!ct.isBuffer(t)||!ct.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},ct.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ct.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return ct.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=ct.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(Jt(e,Uint8Array))i+e.length>r.length?(ct.isBuffer(e)||(e=ct.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!ct.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},ct.byteLength=yt,ct.prototype._isBuffer=!0,ct.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)wt(this,e,e+1);return this},ct.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)wt(this,e,e+3),wt(this,e+1,e+2);return this},ct.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)wt(this,e,e+7),wt(this,e+1,e+6),wt(this,e+2,e+5),wt(this,e+3,e+4);return this},ct.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?kt(this,0,t):vt.apply(this,arguments)},ct.prototype.toLocaleString=ct.prototype.toString,ct.prototype.equals=function(t){if(!ct.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===ct.compare(this,t)},ct.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},at&&(ct.prototype[at]=ct.prototype.inspect),ct.prototype.compare=function(t,e,n,r,i){if(Jt(t,Uint8Array)&&(t=ct.from(t,t.offset,t.byteLength)),!ct.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),l=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==u[t]){s=l[t],o=u[t];break}return s<o?-1:o<s?1:0},ct.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},ct.prototype.indexOf=function(t,e,n){return Et(this,t,e,n,!0)},ct.prototype.lastIndexOf=function(t,e,n){return Et(this,t,e,n,!1)},ct.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return Tt(this,t,e,n);case"utf8":case"utf-8":return At(this,t,e,n);case"ascii":case"latin1":case"binary":return St(this,t,e,n);case"base64":return _t(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return It(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},ct.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Nt=4096;function Lt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function Rt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function Ot(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=Zt[t[r]];return i}function Dt(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function xt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Pt(t,e,n,r,i,s){if(!ct.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function Mt(t,e,n,r,i){Gt(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function Ut(t,e,n,r,i){Gt(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function Ft(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Bt(t,e,n,r,i){return e=+e,n>>>=0,i||Ft(t,0,n,4),Z(t,e,n,r,23,4),n+4}function Vt(t,e,n,r,i){return e=+e,n>>>=0,i||Ft(t,0,n,8),Z(t,e,n,r,52,8),n+8}ct.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,ct.prototype),r},ct.prototype.readUintLE=ct.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||xt(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},ct.prototype.readUintBE=ct.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||xt(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},ct.prototype.readUint8=ct.prototype.readUInt8=function(t,e){return t>>>=0,e||xt(t,1,this.length),this[t]},ct.prototype.readUint16LE=ct.prototype.readUInt16LE=function(t,e){return t>>>=0,e||xt(t,2,this.length),this[t]|this[t+1]<<8},ct.prototype.readUint16BE=ct.prototype.readUInt16BE=function(t,e){return t>>>=0,e||xt(t,2,this.length),this[t]<<8|this[t+1]},ct.prototype.readUint32LE=ct.prototype.readUInt32LE=function(t,e){return t>>>=0,e||xt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},ct.prototype.readUint32BE=ct.prototype.readUInt32BE=function(t,e){return t>>>=0,e||xt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},ct.prototype.readBigUInt64LE=te((function(t){zt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Kt(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),ct.prototype.readBigUInt64BE=te((function(t){zt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Kt(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),ct.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||xt(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},ct.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||xt(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},ct.prototype.readInt8=function(t,e){return t>>>=0,e||xt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},ct.prototype.readInt16LE=function(t,e){t>>>=0,e||xt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},ct.prototype.readInt16BE=function(t,e){t>>>=0,e||xt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},ct.prototype.readInt32LE=function(t,e){return t>>>=0,e||xt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},ct.prototype.readInt32BE=function(t,e){return t>>>=0,e||xt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},ct.prototype.readBigInt64LE=te((function(t){zt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Kt(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),ct.prototype.readBigInt64BE=te((function(t){zt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Kt(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),ct.prototype.readFloatLE=function(t,e){return t>>>=0,e||xt(t,4,this.length),Y(this,t,!0,23,4)},ct.prototype.readFloatBE=function(t,e){return t>>>=0,e||xt(t,4,this.length),Y(this,t,!1,23,4)},ct.prototype.readDoubleLE=function(t,e){return t>>>=0,e||xt(t,8,this.length),Y(this,t,!0,52,8)},ct.prototype.readDoubleBE=function(t,e){return t>>>=0,e||xt(t,8,this.length),Y(this,t,!1,52,8)},ct.prototype.writeUintLE=ct.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){Pt(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},ct.prototype.writeUintBE=ct.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){Pt(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},ct.prototype.writeUint8=ct.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,1,255,0),this[e]=255&t,e+1},ct.prototype.writeUint16LE=ct.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},ct.prototype.writeUint16BE=ct.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},ct.prototype.writeUint32LE=ct.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},ct.prototype.writeUint32BE=ct.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},ct.prototype.writeBigUInt64LE=te((function(t,e=0){return Mt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),ct.prototype.writeBigUInt64BE=te((function(t,e=0){return Ut(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),ct.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);Pt(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},ct.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);Pt(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},ct.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},ct.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},ct.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},ct.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},ct.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Pt(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},ct.prototype.writeBigInt64LE=te((function(t,e=0){return Mt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ct.prototype.writeBigInt64BE=te((function(t,e=0){return Ut(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ct.prototype.writeFloatLE=function(t,e,n){return Bt(this,t,e,!0,n)},ct.prototype.writeFloatBE=function(t,e,n){return Bt(this,t,e,!1,n)},ct.prototype.writeDoubleLE=function(t,e,n){return Vt(this,t,e,!0,n)},ct.prototype.writeDoubleBE=function(t,e,n){return Vt(this,t,e,!1,n)},ct.prototype.copy=function(t,e,n,r){if(!ct.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},ct.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!ct.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=ct.isBuffer(t)?t:ct.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const jt={};function $t(t,e,n){jt[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function qt(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Gt(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new jt.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){zt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Kt(e,t.length-(n+1))}(r,i,s)}function zt(t,e){if("number"!=typeof t)throw new jt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Kt(t,e,n){if(Math.floor(t)!==t)throw zt(t,n),new jt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new jt.ERR_BUFFER_OUT_OF_BOUNDS;throw new jt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}$t("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$t("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),$t("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=qt(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=qt(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const Ht=/[^+/0-9A-Za-z-_]/g;function Qt(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Wt(t){return W(function(t){if((t=(t=t.split("=")[0]).trim().replace(Ht,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Xt(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function Jt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Yt(t){return t!=t}const Zt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function te(t){return"undefined"==typeof BigInt?ee:t}function ee(){throw new Error("BigInt not supported")}var ne=Q;function re(t){return G.isPlainObject(t)||G.isArray(t)}function ie(t){return G.endsWith(t,"[]")?t.slice(0,-2):t}function se(t,e,n){return t?t.concat(e).map((function(t,e){return t=ie(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const oe=G.toFlatObject(G,{},null,(function(t){return/^is[A-Z]/.test(t)}));var ae=function(t,e,n){if(!G.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!G.isUndefined(e[t])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&G.isSpecCompliantForm(e);if(!G.isFunction(i))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(G.isDate(t))return t.toISOString();if(!a&&G.isBlob(t))throw new J("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(t)||G.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):ne.from(t):t}function u(t,n,i){let a=t;if(t&&!i&&"object"==typeof t)if(G.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(G.isArray(t)&&function(t){return G.isArray(t)&&!t.some(re)}(t)||(G.isFileList(t)||G.endsWith(n,"[]"))&&(a=G.toArray(t)))return n=ie(n),a.forEach((function(t,r){!G.isUndefined(t)&&null!==t&&e.append(!0===o?se([n],r,s):null===o?n:n+"[]",l(t))})),!1;return!!re(t)||(e.append(se(i,n,s),l(t)),!1)}const c=[],h=Object.assign(oe,{defaultVisitor:u,convertValue:l,isVisitable:re});if(!G.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!G.isUndefined(n)){if(-1!==c.indexOf(n))throw Error("Circular reference detected in "+r.join("."));c.push(n),G.forEach(n,(function(n,s){!0===(!(G.isUndefined(n)||null===n)&&i.call(e,n,G.isString(s)?s.trim():s,r,h))&&t(n,r?r.concat(s):[s])})),c.pop()}}(t),e};function le(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function ue(t,e){this._pairs=[],t&&ae(t,this,e)}const ce=ue.prototype;ce.append=function(t,e){this._pairs.push([t,e])},ce.toString=function(t){const e=t?function(e){return t.call(this,e,le)}:le;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var he=ue;function fe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function de(t,e,n){if(!e)return t;const r=n&&n.encode||fe,i=n&&n.serialize;let s;if(s=i?i(e,n):G.isURLSearchParams(e)?e.toString():new he(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var pe=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){G.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var me={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:he,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ye(t,e){return ae(t,new me.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return me.isNode&&G.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}var ve=function(t){function e(t,n,r,i){let s=t[i++];const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&G.isArray(r)?r.length:s,a)return G.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&G.isObject(r[s])||(r[s]=[]);return e(t,n,r[s],i)&&G.isArray(r[s])&&(r[s]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}(r[s])),!o}if(G.isFormData(t)&&G.isFunction(t.entries)){const n={};return G.forEachEntry(t,((t,r)=>{e(function(t){return G.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,n,0)})),n}return null};const we={"Content-Type":void 0};const Ee={transitional:ge,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=G.isObject(t);i&&G.isHTMLForm(t)&&(t=new FormData(t));if(G.isFormData(t))return r&&r?JSON.stringify(ve(t)):t;if(G.isArrayBuffer(t)||G.isBuffer(t)||G.isStream(t)||G.isFile(t)||G.isBlob(t))return t;if(G.isArrayBufferView(t))return t.buffer;if(G.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ye(t,this.formSerializer).toString();if((s=G.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return ae(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),function(t,e,n){if(G.isString(t))try{return(e||JSON.parse)(t),G.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Ee.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&G.isString(t)&&(n&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw J.from(t,J.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};G.forEach(["delete","get","head"],(function(t){Ee.headers[t]={}})),G.forEach(["post","put","patch"],(function(t){Ee.headers[t]=G.merge(we)}));var be=Ee;const Te=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ae=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&Te[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const Se=Symbol("internals");function _e(t){return t&&String(t).trim().toLowerCase()}function Ie(t){return!1===t||null==t?t:G.isArray(t)?t.map(Ie):String(t)}function Ce(t,e,n,r,i){return G.isFunction(r)?r.call(this,e,n):(i&&(e=n),G.isString(e)?G.isString(r)?-1!==e.indexOf(r):G.isRegExp(r)?r.test(e):void 0:void 0)}class ke{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=_e(e);if(!i)throw new Error("header name must be a non-empty string");const s=G.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=Ie(t))}const s=(t,e)=>G.forEach(t,((t,n)=>i(t,n,e)));return G.isPlainObject(t)||t instanceof this.constructor?s(t,e):G.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(Ae(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=_e(t)){const n=G.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(G.isFunction(e))return e.call(this,t,n);if(G.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=_e(t)){const n=G.findKey(this,t);return!(!n||void 0===this[n]||e&&!Ce(0,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=_e(t)){const i=G.findKey(n,t);!i||e&&!Ce(0,n[i],i,e)||(delete n[i],r=!0)}}return G.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;for(;n--;){const i=e[n];t&&!Ce(0,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return G.forEach(this,((r,i)=>{const s=G.findKey(n,i);if(s)return e[s]=Ie(r),void delete e[i];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete e[i],e[o]=Ie(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return G.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&G.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Se]=this[Se]={accessors:{}}).accessors,n=this.prototype;function r(t){const r=_e(t);e[r]||(!function(t,e){const n=G.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[r]=!0)}return G.isArray(t)?t.forEach(r):r(t),this}}ke.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),G.freezeMethods(ke.prototype),G.freezeMethods(ke);var Ne=ke;function Le(t,e){const n=this||be,r=e||n,i=Ne.from(r.headers);let s=r.data;return G.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function Re(t){return!(!t||!t.__CANCEL__)}function Oe(t,e,n){J.call(this,null==t?"canceled":t,J.ERR_CANCELED,e,n),this.name="CanceledError"}G.inherits(Oe,J,{__CANCEL__:!0});var De=Oe;function xe(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Pe=me.isStandardBrowserEnv?{write:function(t,e,n,r,i,s){const o=[];o.push(t+"="+encodeURIComponent(e)),G.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),G.isString(r)&&o.push("path="+r),G.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Me(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ue(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Me(t,e):e}var Fe=me.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=G.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Be(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Ve=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),u=r[o];i||(i=l),n[s]=a,r[s]=l;let c=o,h=0;for(;c!==s;)h+=n[c++],c%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),l-i<e)return;const f=u&&l-u;return f?Math.round(1e3*h/f):void 0}};function je(t,e){let n=0;const r=Ve(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const $e={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let r=t.data;const i=Ne.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}G.isFormData(r)&&(me.isStandardBrowserEnv||me.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=Ue(t.baseURL,t.url);function c(){if(!l)return;const r=Ne.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());xe((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),de(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=c:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(c)},l.onabort=function(){l&&(n(new J("Request aborted",J.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||ge;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new J(e,r.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,t,l)),l=null},me.isStandardBrowserEnv){const e=(t.withCredentials||Fe(u))&&t.xsrfCookieName&&Pe.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&G.forEach(i.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),G.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&"json"!==s&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",je(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",je(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{l&&(n(!e||e.type?new De(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Be(u);h&&-1===me.protocols.indexOf(h)?n(new J("Unsupported protocol "+h+":",J.ERR_BAD_REQUEST,t)):l.send(r||null)}))}};G.forEach($e,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var qe={getAdapter:t=>{t=G.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=G.isString(n)?$e[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new J(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(G.hasOwnProp($e,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!G.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$e};function Ge(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new De(null,t)}function ze(t){Ge(t),t.headers=Ne.from(t.headers),t.data=Le.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return qe.getAdapter(t.adapter||be.adapter)(t).then((function(e){return Ge(t),e.data=Le.call(t,t.transformResponse,e),e.headers=Ne.from(e.headers),e}),(function(e){return Re(e)||(Ge(t),e&&e.response&&(e.response.data=Le.call(t,t.transformResponse,e.response),e.response.headers=Ne.from(e.response.headers))),Promise.reject(e)}))}const Ke=t=>t instanceof Ne?t.toJSON():t;function He(t,e){e=e||{};const n={};function r(t,e,n){return G.isPlainObject(t)&&G.isPlainObject(e)?G.merge.call({caseless:n},t,e):G.isPlainObject(e)?G.merge({},e):G.isArray(e)?e.slice():e}function i(t,e,n){return G.isUndefined(e)?G.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function s(t,e){if(!G.isUndefined(e))return r(void 0,e)}function o(t,e){return G.isUndefined(e)?G.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>i(Ke(t),Ke(e),!0)};return G.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=l[r]||i,o=s(t[r],e[r],r);G.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Qe="1.4.0",We={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{We[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Xe={};We.transitional=function(t,e,n){function r(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new J(r(i," has been removed"+(e?" in "+e:"")),J.ERR_DEPRECATED);return e&&!Xe[i]&&(Xe[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}};var Je={assertOptions:function(t,e,n){if("object"!=typeof t)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new J("option "+s+" must be "+n,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}},validators:We};const Ye=Je.validators;class Ze{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=He(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;let s;void 0!==n&&Je.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),null!=r&&(G.isFunction(r)?e.paramsSerializer={serialize:r}:Je.assertOptions(r,{encode:Ye.function,serialize:Ye.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=i&&G.merge(i.common,i[e.method]),s&&G.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=Ne.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const l=[];let u;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let c,h=0;if(!a){const t=[ze.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,l),c=t.length,u=Promise.resolve(e);h<c;)u=u.then(t[h++],t[h++]);return u}c=o.length;let f=e;for(h=0;h<c;){const t=o[h++],e=o[h++];try{f=t(f)}catch(t){e.call(this,t);break}}try{u=ze.call(this,f)}catch(t){return Promise.reject(t)}for(h=0,c=l.length;h<c;)u=u.then(l[h++],l[h++]);return u}getUri(t){return de(Ue((t=He(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}G.forEach(["delete","get","head","options"],(function(t){Ze.prototype[t]=function(e,n){return this.request(He(n||{},{method:t,url:e,data:(n||{}).data}))}})),G.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(He(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ze.prototype[t]=e(),Ze.prototype[t+"Form"]=e(!0)}));var tn=Ze;class en{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new De(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new en((function(e){t=e})),cancel:t}}}var nn=en;const rn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rn).forEach((([t,e])=>{rn[e]=t}));var sn=rn;const on=function t(e){const n=new tn(e),r=c(tn.prototype.request,n);return G.extend(r,tn.prototype,n,{allOwnKeys:!0}),G.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return t(He(e,n))},r}(be);on.Axios=tn,on.CanceledError=De,on.CancelToken=nn,on.isCancel=Re,on.VERSION=Qe,on.toFormData=ae,on.AxiosError=J,on.Cancel=on.CanceledError,on.all=function(t){return Promise.all(t)},on.spread=function(t){return function(e){return t.apply(null,e)}},on.isAxiosError=function(t){return G.isObject(t)&&!0===t.isAxiosError},on.mergeConfig=He,on.AxiosHeaders=Ne,on.formToJSON=t=>ve(G.isHTMLForm(t)?new FormData(t):t),on.HttpStatusCode=sn,on.default=on;var an=on;const{Axios:ln,AxiosError:un,CanceledError:cn,isCancel:hn,CancelToken:fn,VERSION:dn,all:pn,Cancel:gn,isAxiosError:mn,spread:yn,toFormData:vn,AxiosHeaders:wn,HttpStatusCode:En,formToJSON:bn,mergeConfig:Tn}=an,An="https://books-backend.p.goit.global",Sn=async()=>{try{return(await an.get(`${An}/books/category-list`)).data}catch(t){console.log(t)}},_n=async()=>{try{return(await an.get(`${An}/books/top-books`)).data}catch(t){console.log(t)}throw new Error(error)},In=async t=>{try{return(await an.get(`${An}/books/category`,{params:{category:t}})).data}catch(t){console.log(t)}},Cn=document.querySelector(".categories__list");(async()=>(await Sn()).map((({list_name:t})=>`\n                <li class='categories__item _list'>\n                    <a data-categories__item data-listName='${t}' rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${t}</a>\n                </li>`)).sort().join(""))().then((t=>{Cn.insertAdjacentHTML("beforeend",t)})).catch((t=>{console.log("err",t)})),i("kvC6y");const kn=document.querySelector(".title_best-sellers"),Nn=async t=>await In(t);Cn.addEventListener("click",(t=>{if(t.target.hasAttribute("data-categories__item")){t.preventDefault();const e=document.querySelector(".categories__list").getElementsByClassName("categories__link"),n=Array.from(e);for(let t=0;t<n.length;t++){n[t].classList.remove("active__link")}t.target.classList.add("active__link");const r=t.target.dataset.listname.split(" ");r.pop();const i=t.target.dataset.listname.split(" ")[t.target.dataset.listname.split(" ").length-1];Nn(t.target.dataset.listname).then((t=>{kn.classList.add("no-change"),kn.innerHTML=`${r.join(" ")}&nbsp\n                <span class="title_book">${i}</span>`,Ln.innerHTML=u(t),document.documentElement.scrollWidth>=1440||document.querySelector("#best-sellers-container").scrollIntoView({behavior:"smooth",block:"start"})}))}})),i("kvC6y");const Ln=document.querySelector(".best_list");let Rn=5;const On=()=>!kn.classList.contains("no-change"),Dn=async()=>{if(On())try{const t=await _n();if(0===t.length)return;const e=t.map((({books:t,list_name:e})=>{const n=t.slice(0,Rn);return`<li class='best-item _list'>\n                <h3 class='min-title'>${e}</h3>\n                <ul class='books-list'>\n                    ${u(n)}\n                </ul>\n                <button class='see_more' data-name="${e}">See More</button>\n              </li>`}));Ln.innerHTML=e.join("")}catch(t){console.error(t)}},xn=()=>{Rn=window.matchMedia("(max-width: 767px)").matches?1:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches?3:5,Dn()},Pn=((t,e)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout((()=>t(...r)),e)}})(xn,300);window.addEventListener("resize",Pn);window.addEventListener("resize",(()=>{On(),0})),window.addEventListener("load",(()=>{xn()}));const Mn="book_list",Un=()=>{const t=localStorage.getItem(Mn);return t?JSON.parse(t):[]},Fn=t=>{const e=Un(),n=e.findIndex((e=>e.id===t));e.splice(n,1),localStorage.setItem(Mn,JSON.stringify(e))},Bn=t=>{const e=Un();e.push(t),localStorage.setItem(Mn,JSON.stringify(e))};var Vn,jn=i("gQOBw"),$n=i("MjY8E"),qn=i("6ExWU"),Gn=i("kZfxc"),zn=i("2xDiJ"),Kn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Hn={},Qn=Qn||{},Wn=Kn||self;function Xn(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Jn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Yn="closure_uid_"+(1e9*Math.random()>>>0),Zn=0;function tr(t,e,n){return t.call.apply(t.bind,arguments)}function er(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function nr(t,e,n){return(nr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tr:er).apply(null,arguments)}function rr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ir(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function sr(){this.s=this.s,this.o=this.o}sr.prototype.s=!1,sr.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Yn)&&t[Yn]||(t[Yn]=++Zn))},sr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const or=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ar(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function lr(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Xn(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function ur(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ur.prototype.h=function(){this.defaultPrevented=!0};var cr=function(){if(!Wn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Wn.addEventListener("test",(()=>{}),e),Wn.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function hr(t){return/^[\s\xa0]*$/.test(t)}function fr(){var t=Wn.navigator;return t&&(t=t.userAgent)?t:""}function dr(t){return-1!=fr().indexOf(t)}function pr(t){return pr[" "](t),t}pr[" "]=function(){};var gr,mr,yr,vr=dr("Opera"),wr=dr("Trident")||dr("MSIE"),Er=dr("Edge"),br=Er||wr,Tr=dr("Gecko")&&!(-1!=fr().toLowerCase().indexOf("webkit")&&!dr("Edge"))&&!(dr("Trident")||dr("MSIE"))&&!dr("Edge"),Ar=-1!=fr().toLowerCase().indexOf("webkit")&&!dr("Edge");function Sr(){var t=Wn.document;return t?t.documentMode:void 0}t:{var _r="",Ir=(mr=fr(),Tr?/rv:([^\);]+)(\)|;)/.exec(mr):Er?/Edge\/([\d\.]+)/.exec(mr):wr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(mr):Ar?/WebKit\/(\S+)/.exec(mr):vr?/(?:Version)[ \/]?(\S+)/.exec(mr):void 0);if(Ir&&(_r=Ir?Ir[1]:""),wr){var Cr=Sr();if(null!=Cr&&Cr>parseFloat(_r)){gr=String(Cr);break t}}gr=_r}if(Wn.document&&wr){var kr=Sr();yr=kr||(parseInt(gr,10)||void 0)}else yr=void 0;var Nr=yr;function Lr(t,e){if(ur.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tr){t:{try{pr(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Rr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lr.$.h.call(this)}}ir(Lr,ur);var Rr={2:"touch",3:"pen",4:"mouse"};Lr.prototype.h=function(){Lr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Or="closure_listenable_"+(1e6*Math.random()|0),Dr=0;function xr(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Dr,this.fa=this.ia=!1}function Pr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Mr(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ur(t){const e={};for(const n in t)e[n]=t[n];return e}const Fr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Br(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<Fr.length;e++)n=Fr[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vr(t){this.src=t,this.g={},this.h=0}function jr(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=or(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Pr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $r(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}Vr.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=$r(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new xr(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var qr="closure_lm_"+(1e6*Math.random()|0),Gr={};function zr(t,e,n,r,i){if(r&&r.once)return Hr(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zr(t,e[s],n,r,i);return null}return n=ti(n),t&&t[Or]?t.O(e,n,Jn(r)?!!r.capture:!!r,i):Kr(t,e,n,!1,r,i)}function Kr(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Jn(i)?!!i.capture:!!i,a=Yr(t);if(a||(t[qr]=a=new Vr(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Jr;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cr||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Xr(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Hr(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hr(t,e[s],n,r,i);return null}return n=ti(n),t&&t[Or]?t.P(e,n,Jn(r)?!!r.capture:!!r,i):Kr(t,e,n,!0,r,i)}function Qr(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Qr(t,e[s],n,r,i);else r=Jn(r)?!!r.capture:!!r,n=ti(n),t&&t[Or]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$r(s=t.g[e],n,r,i))&&(Pr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Yr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$r(e,n,r,i)),(n=-1<t?e[t]:null)&&Wr(n))}function Wr(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Or])jr(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xr(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yr(e))?(jr(n,t),0==n.h&&(n.src=null,e[qr]=null)):Pr(t)}}}function Xr(t){return t in Gr?Gr[t]:Gr[t]="on"+t}function Jr(t,e){if(t.fa)t=!0;else{e=new Lr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wr(t),t=n.call(r,e)}return t}function Yr(t){return(t=t[qr])instanceof Vr?t:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(t){return"function"==typeof t?t:(t[Zr]||(t[Zr]=function(e){return t.handleEvent(e)}),t[Zr])}function ei(){sr.call(this),this.i=new Vr(this),this.S=this,this.J=null}function ni(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new ur(e,t);else if(e instanceof ur)e.target=e.target||t;else{var i=e;Br(e=new ur(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ri(o,r,!0,e)&&i}if(i=ri(o=e.g=t,r,!0,e)&&i,i=ri(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=ri(o=e.g=n[s],r,!1,e)&&i}function ri(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&jr(t.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}ir(ei,sr),ei.prototype[Or]=!0,ei.prototype.removeEventListener=function(t,e,n,r){Qr(this,t,e,n,r)},ei.prototype.N=function(){if(ei.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Pr(n[r]);delete e.g[t],e.h--}}this.J=null},ei.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ei.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var ii=Wn.JSON.stringify;function si(){var t=fi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var oi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ai),(t=>t.reset()));class ai{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function li(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ui(t){Wn.setTimeout((()=>{throw t}),0)}let ci,hi=!1,fi=new class{constructor(){this.h=this.g=null}add(t,e){const n=oi.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},di=()=>{const t=Wn.Promise.resolve(void 0);ci=()=>{t.then(pi)}};var pi=()=>{for(var t;t=si();){try{t.h.call(t.g)}catch(t){ui(t)}var e=oi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hi=!1};function gi(t,e){ei.call(this),this.h=t||1,this.g=e||Wn,this.j=nr(this.qb,this),this.l=Date.now()}function mi(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function yi(t,e,n){if("function"==typeof t)n&&(t=nr(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=nr(t.handleEvent,t)}return 2147483647<Number(e)?-1:Wn.setTimeout(t,e||0)}function vi(t){t.g=yi((()=>{t.g=null,t.i&&(t.i=!1,vi(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ir(gi,ei),(Vn=gi.prototype).ga=!1,Vn.T=null,Vn.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ni(this,"tick"),this.ga&&(mi(this),this.start()))}},Vn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Vn.N=function(){gi.$.N.call(this),mi(this),delete this.g};class wi extends sr{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vi(this)}N(){super.N(),this.g&&(Wn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(t){sr.call(this),this.h=t,this.g={}}ir(Ei,sr);var bi=[];function Ti(t,e,n,r){Array.isArray(n)||(n&&(bi[0]=n.toString()),n=bi);for(var i=0;i<n.length;i++){var s=zr(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ai(t){Mr(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Wr(t)}),t),t.g={}}function Si(){this.g=!0}function _i(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ii(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Ei.prototype.N=function(){Ei.$.N.call(this),Ai(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Si.prototype.Ea=function(){this.g=!1},Si.prototype.info=function(){};var Ii={},Ci=null;function ki(){return Ci=Ci||new ei}function Ni(t){ur.call(this,Ii.Ta,t)}function Li(t){const e=ki();ni(e,new Ni(e))}function Ri(t,e){ur.call(this,Ii.STAT_EVENT,t),this.stat=e}function Oi(t){const e=ki();ni(e,new Ri(e,t))}function Di(t,e){ur.call(this,Ii.Ua,t),this.size=e}function xi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Wn.setTimeout((function(){t()}),e)}Ii.Ta="serverreachability",ir(Ni,ur),Ii.STAT_EVENT="statevent",ir(Ri,ur),Ii.Ua="timingevent",ir(Di,ur);var Pi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Mi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ui(){}function Fi(t){return t.h||(t.h=t.i())}function Bi(){}Ui.prototype.h=null;var Vi,ji={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $i(){ur.call(this,"d")}function qi(){ur.call(this,"c")}function Gi(){}function zi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ei(this),this.P=Hi,t=br?125:void 0,this.V=new gi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}ir($i,ur),ir(qi,ur),ir(Gi,Ui),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},Vi=new Gi;var Hi=45e3,Qi={},Wi={};function Xi(t,e,n){t.L=1,t.v=gs(cs(e)),t.s=n,t.S=!0,Ji(t,null)}function Ji(t,e){t.G=Date.now(),es(t),t.A=cs(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ks(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ki,t.g=ko(t.l,n?e:null,!t.s),0<t.O&&(t.M=new wi(nr(t.Pa,t,t.g),t.O)),Ti(t.U,t.g,"readystatechange",t.nb),e=t.I?Ur(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Li(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function Yi(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Zi(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=ts(t,n),r==Wi){4==e&&(t.o=4,Oi(14),i=!1),_i(t.j,t.m,null,"[Incomplete Response]");break}if(r==Qi){t.o=4,Oi(15),_i(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}_i(t.j,t.m,r,null),os(t,r)}Yi(t)&&r!=Wi&&r!=Qi&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Oi(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eo(e),e.M=!0,Oi(11))):(_i(t.j,t.m,n,"[Invalid Chunked Response]"),ss(t),is(t))}function ts(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Wi:(n=Number(e.substring(n,r)),isNaN(n)?Qi:(r+=1)+n>e.length?Wi:(e=e.slice(r,r+n),t.C=r+n,e))}function es(t){t.Y=Date.now()+t.P,ns(t,t.P)}function ns(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=xi(nr(t.lb,t),e)}function rs(t){t.B&&(Wn.clearTimeout(t.B),t.B=null)}function is(t){0==t.l.H||t.J||Ao(t.l,t)}function ss(t){rs(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,mi(t.V),Ai(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function os(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||xs(n.i,t)))if(!t.K&&xs(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;To(n),ho(n)}wo(n),Oi(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=xi(nr(n.ib,n),6e3));if(1>=Ds(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else _o(n,11)}else if((t.K||n.g==t)&&To(n),!hr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ps(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,ps(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=Co(r,r.J?r.pa:null,r.Y),o.K){Ms(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(rs(a),es(a)),r.g=o}else vo(r);0<n.j.length&&po(n)}else"stop"!=u[0]&&"close"!=u[0]||_o(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_o(n,7):co(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Li()}catch(t){}}function as(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Xn(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Xn(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Xn(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(Vn=zi.prototype).setTimeout=function(t){this.P=t},Vn.nb=function(t){t=t.target;const e=this.M;e&&3==io(t)?e.l():this.Pa(t)},Vn.Pa=function(t){try{if(t==this.g)t:{const c=io(this.g);var e=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||br||this.g&&(this.h.h||this.g.ja()||so(this.g)))){this.J||4!=c||7==e||Li(),rs(this);var n=this.g.da();this.ca=n;e:if(Yi(this)){var r=so(this.g);t="";var i=r.length,s=4==io(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ss(this),is(this);var o="";break e}this.h.i=new Wn.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hr(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Oi(12),ss(this),is(this);break t}_i(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,n)}this.S?(Zi(this,c,o),br&&this.i&&3==c&&(Ti(this.U,this.V,"tick",this.mb),this.V.start())):(_i(this.j,this.m,o,null),os(this,o)),4==c&&ss(this),this.i&&!this.J&&(4==c?Ao(this.l,this):(this.i=!1,es(this)))}else(function(t){const e={};t=(t.g&&2<=io(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(hr(t[r]))continue;var n=li(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Oi(12)):(this.o=0,Oi(13)),ss(this),is(this)}}}catch(t){}},Vn.mb=function(){if(this.g){var t=io(this.g),e=this.g.ja();this.C<e.length&&(rs(this),Zi(this,t,e),this.i&&4!=t&&es(this))}},Vn.cancel=function(){this.J=!0,ss(this)},Vn.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Li(),Oi(17)),ss(this),this.o=2,is(this)):ns(this,this.Y-t)};var ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function us(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=t.h,hs(this,t.j),this.s=t.s,this.g=t.g,fs(this,t.m),this.l=t.l;var e=t.i,n=new Ss;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ds(this,n),this.o=t.o}else t&&(e=String(t).match(ls))?(this.h=!1,hs(this,e[1]||"",!0),this.s=ms(e[2]||""),this.g=ms(e[3]||"",!0),fs(this,e[4]),this.l=ms(e[5]||"",!0),ds(this,e[6]||"",!0),this.o=ms(e[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}function cs(t){return new us(t)}function hs(t,e,n){t.j=n?ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ds(t,e,n){e instanceof Ss?(t.i=e,function(t,e){e&&!t.j&&(_s(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Is(this,e),ks(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ys(e,Ts)),t.i=new Ss(e,t.h))}function ps(t,e,n){t.i.set(e,n)}function gs(t){return ps(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ys(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,vs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ys(e,ws,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ys(e,ws,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ys(n,"/"==n.charAt(0)?bs:Es,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ys(n,As)),t.join("")};var ws=/[#\/\?@]/g,Es=/[#\?:]/g,bs=/[#\?]/g,Ts=/[#\?@]/g,As=/#/g;function Ss(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _s(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Is(t,e){_s(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cs(t,e){return _s(t),e=Ns(t,e),t.g.has(e)}function ks(t,e,n){Is(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),ar(n)),t.h+=n.length)}function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Vn=Ss.prototype).add=function(t,e){_s(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Vn.forEach=function(t,e){_s(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Vn.ta=function(){_s(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Vn.Z=function(t){_s(this);let e=[];if("string"==typeof t)Cs(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Vn.set=function(t,e){return _s(this),this.i=null,Cs(this,t=Ns(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Vn.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Vn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ls(t){this.l=t||Rs,Wn.PerformanceNavigationTiming?t=0<(t=Wn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Wn.g&&Wn.g.Ka&&Wn.g.Ka()&&Wn.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rs=10;function Os(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ds(t){return t.h?1:t.g?t.g.size:0}function xs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ps(t,e){t.g?t.g.add(e):t.h=e}function Ms(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Us(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ar(t.i)}Ls.prototype.cancel=function(){if(this.i=Us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Fs=class{stringify(t){return Wn.JSON.stringify(t,void 0)}parse(t){return Wn.JSON.parse(t,void 0)}};function Bs(){this.g=new Fs}function Vs(t,e,n){const r=n||"";try{as(t,(function(t,n){let i=t;Jn(t)&&(i=ii(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function js(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function $s(t){this.l=t.fc||null,this.j=t.ob||!1}function qs(t,e){ei.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ir($s,Ui),$s.prototype.g=function(){return new qs(this.l,this.j)},$s.prototype.i=function(t){return function(){return t}}({}),ir(qs,ei);var Gs=0;function zs(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hs(t)}function Hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Vn=qs.prototype).open=function(t,e){if(this.readyState!=Gs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hs(this)},Vn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Wn).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Vn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ks(this)),this.readyState=Gs},Vn.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Wn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zs(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Vn.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):Hs(this),3==this.readyState&&zs(this)}},Vn.Za=function(t){this.g&&(this.response=this.responseText=t,Ks(this))},Vn.Ya=function(t){this.g&&(this.response=t,Ks(this))},Vn.ka=function(){this.g&&Ks(this)},Vn.setRequestHeader=function(t,e){this.v.append(t,e)},Vn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Vn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Qs=Wn.JSON.parse;function Ws(t){ei.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xs,this.L=this.M=!1}ir(Ws,ei);var Xs="",Js=/^https?$/i,Ys=["POST","PUT"];function Zs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,to(t),no(t)}function to(t){t.F||(t.F=!0,ni(t,"complete"),ni(t,"error"))}function eo(t){if(t.h&&void 0!==Qn&&(!t.C[1]||4!=io(t)||2!=t.da()))if(t.v&&4==io(t))yi(t.La,0,t);else if(ni(t,"readystatechange"),4==io(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.I).match(ls)[1]||null;!i&&Wn.self&&Wn.self.location&&(i=Wn.self.location.protocol.slice(0,-1)),r=!Js.test(i?i.toLowerCase():"")}n=r}if(n)ni(t,"complete"),ni(t,"success");else{t.m=6;try{var s=2<io(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",to(t)}}finally{no(t)}}}function no(t,e){if(t.g){ro(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ni(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function ro(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Wn.clearTimeout(t.A),t.A=null)}function io(t){return t.g?t.g.readyState:0}function so(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function oo(t){let e="";return Mr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ao(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=oo(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ps(t,e,n))}function lo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uo(t){this.Ga=0,this.j=[],this.l=new Si,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=lo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=lo("baseRetryDelayMs",5e3,t),this.hb=lo("retryDelaySeedMs",1e4,t),this.eb=lo("forwardChannelMaxRetries",2,t),this.xa=lo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ls(t&&t.concurrentRequestLimit),this.Ja=new Bs,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function co(t){if(fo(t),3==t.H){var e=t.W++,n=cs(t.I);if(ps(n,"SID",t.K),ps(n,"RID",e),ps(n,"TYPE","terminate"),mo(t,n),(e=new zi(t,t.l,e)).L=2,e.v=gs(cs(n)),n=!1,Wn.navigator&&Wn.navigator.sendBeacon)try{n=Wn.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&Wn.Image&&((new Image).src=e.v,n=!0),n||(e.g=ko(e.l,null),e.g.ha(e.v)),e.G=Date.now(),es(e)}Io(t)}function ho(t){t.g&&(Eo(t),t.g.cancel(),t.g=null)}function fo(t){ho(t),t.u&&(Wn.clearTimeout(t.u),t.u=null),To(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Wn.clearTimeout(t.m),t.m=null)}function po(t){if(!Os(t.i)&&!t.m){t.m=!0;var e=t.Na;ci||di(),hi||(ci(),hi=!0),fi.add(e,t),t.C=0}}function go(t,e){var n;n=e?e.m:t.W++;const r=cs(t.I);ps(r,"SID",t.K),ps(r,"RID",n),ps(r,"AID",t.V),mo(t,r),t.o&&t.s&&ao(r,t.o,t.s),n=new zi(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=yo(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ps(t.i,n),Xi(n,r,e)}function mo(t,e){t.na&&Mr(t.na,(function(t,n){ps(e,n,t)})),t.h&&as({},(function(t,n){ps(e,n,t)}))}function yo(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nr(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{Vs(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function vo(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ci||di(),hi||(ci(),hi=!0),fi.add(e,t),t.A=0}}function wo(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=xi(nr(t.Ma,t),So(t,t.A)),t.A++,!0)}function Eo(t){null!=t.B&&(Wn.clearTimeout(t.B),t.B=null)}function bo(t){t.g=new zi(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=cs(t.wa);ps(e,"RID","rpc"),ps(e,"SID",t.K),ps(e,"AID",t.V),ps(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ps(e,"TO",t.qa),ps(e,"TYPE","xmlhttp"),mo(t,e),t.o&&t.s&&ao(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=gs(cs(e)),n.s=null,n.S=!0,Ji(n,t)}function To(t){null!=t.v&&(Wn.clearTimeout(t.v),t.v=null)}function Ao(t,e){var n=null;if(t.g==e){To(t),Eo(t),t.g=null;var r=2}else{if(!xs(t.i,e))return;n=e.F,Ms(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;ni(r=ki(),new Di(r,n)),po(t)}else vo(t);else if(3==(i=e.o)||0==i&&0<e.ca||!(1==r&&function(t,e){return!(Ds(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=xi(nr(t.Na,t,e),So(t,t.C)),t.C++,0)))}(t,e)||2==r&&wo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_o(t,5);break;case 4:_o(t,10);break;case 3:_o(t,6);break;default:_o(t,2)}}function So(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function _o(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=nr(t.pb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),Wn.location&&"http"==Wn.location.protocol||hs(n,"https"),gs(n)),function(t,e){const n=new Si;if(Wn.Image){const r=new Image;r.onload=rr(js,n,r,"TestLoadImage: loaded",!0,e),r.onerror=rr(js,n,r,"TestLoadImage: error",!1,e),r.onabort=rr(js,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=rr(js,n,r,"TestLoadImage: timeout",!1,e),Wn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Oi(2);t.H=0,t.h&&t.h.za(e),Io(t),fo(t)}function Io(t){if(t.H=0,t.ma=[],t.h){const e=Us(t.i);0==e.length&&0==t.j.length||(lr(t.ma,e),lr(t.ma,t.j),t.i.i.length=0,ar(t.j),t.j.length=0),t.h.ya()}}function Co(t,e,n){var r=n instanceof us?cs(n):new us(n);if(""!=r.g)e&&(r.g=e+"."+r.g),fs(r,r.m);else{var i=Wn.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new us(null);r&&hs(s,r),e&&(s.g=e),i&&fs(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ps(r,n,e),ps(r,"VER",t.ra),mo(t,r),r}function ko(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Ws(new $s({ob:!0})):new Ws(t.va)).Oa(t.J),e}function No(){}function Lo(){if(wr&&!(10<=Number(Nr)))throw Error("Environmental error: no available transport.")}function Ro(t,e){ei.call(this),this.g=new uo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hr(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new xo(this)}function Oo(t){$i.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Do(){qi.call(this),this.status=1}function xo(t){this.g=t}function Po(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Mo(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function Uo(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}(Vn=Ws.prototype).Oa=function(t){this.M=t},Vn.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vi.g(),this.C=this.u?Fi(this.u):Fi(Vi),this.g.onreadystatechange=nr(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Zs(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Wn.FormData&&t instanceof Wn.FormData,!(0<=or(Ys,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ro(this),0<this.B&&((this.L=function(t){return wr&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nr(this.ua,this)):this.A=yi(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Zs(this,t)}},Vn.ua=function(){void 0!==Qn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ni(this,"timeout"),this.abort(8))},Vn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ni(this,"complete"),ni(this,"abort"),no(this))},Vn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),no(this,!0)),Ws.$.N.call(this)},Vn.La=function(){this.s||(this.G||this.v||this.l?eo(this):this.kb())},Vn.kb=function(){eo(this)},Vn.isActive=function(){return!!this.g},Vn.da=function(){try{return 2<io(this)?this.g.status:-1}catch(t){return-1}},Vn.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Vn.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Qs(e)}},Vn.Ia=function(){return this.m},Vn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Vn=uo.prototype).ra=8,Vn.H=1,Vn.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new zi(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Ur(s),Br(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=yo(this,i,e),ps(n=cs(this.I),"RID",t),ps(n,"CVER",22),this.F&&ps(n,"X-HTTP-Session-Id",this.F),mo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(oo(s)))+"&"+e:this.o&&ao(n,this.o,s)),Ps(this.i,i),this.bb&&ps(n,"TYPE","init"),this.P?(ps(n,"$req",e),ps(n,"SID","null"),i.aa=!0,Xi(i,n,null)):Xi(i,n,e),this.H=2}}else 3==this.H&&(t?go(this,t):0==this.j.length||Os(this.i)||go(this))},Vn.Ma=function(){if(this.u=null,bo(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=xi(nr(this.jb,this),t)}},Vn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Oi(10),ho(this),bo(this))},Vn.ib=function(){null!=this.v&&(this.v=null,ho(this),wo(this),Oi(19))},Vn.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Oi(2)):(this.l.info("Failed to ping google.com"),Oi(1))},Vn.isActive=function(){return!!this.h&&this.h.isActive(this)},(Vn=No.prototype).Ba=function(){},Vn.Aa=function(){},Vn.za=function(){},Vn.ya=function(){},Vn.isActive=function(){return!0},Vn.Va=function(){},Lo.prototype.g=function(t,e){return new Ro(t,e)},ir(Ro,ei),Ro.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Oi(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Co(t,null,t.Y),po(t)},Ro.prototype.close=function(){co(this.g)},Ro.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=ii(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&po(e)},Ro.prototype.N=function(){this.g.h=null,delete this.j,co(this.g),delete this.g,Ro.$.N.call(this)},ir(Oo,$i),ir(Do,qi),ir(xo,No),xo.prototype.Ba=function(){ni(this.g,"a")},xo.prototype.Aa=function(t){ni(this.g,new Oo(t))},xo.prototype.za=function(t){ni(this.g,new Do)},xo.prototype.ya=function(){ni(this.g,"b")},ir(Po,(function(){this.blockSize=-1})),Po.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Po.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)Mo(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Mo(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Mo(this,r),i=0;break}}this.h=i,this.i+=e},Po.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Fo={};function Bo(t){return-128<=t&&128>t?function(t,e){var n=Fo;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Uo([0|t],0>t?-1:0)})):new Uo([0|t],0>t?-1:0)}function Vo(t){if(isNaN(t)||!isFinite(t))return $o;if(0>t)return Ho(Vo(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=jo;return new Uo(e,0)}var jo=4294967296,$o=Bo(0),qo=Bo(1),Go=Bo(16777216);function zo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Ko(t){return-1==t.h}function Ho(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Uo(n,~t.h).add(qo)}function Qo(t,e){return t.add(Ho(e))}function Wo(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xo(t,e){this.g=t,this.h=e}function Jo(t,e){if(zo(e))throw Error("division by zero");if(zo(t))return new Xo($o,$o);if(Ko(t))return e=Jo(Ho(t),e),new Xo(Ho(e.g),Ho(e.h));if(Ko(e))return e=Jo(t,Ho(e)),new Xo(Ho(e.g),e.h);if(30<t.g.length){if(Ko(t)||Ko(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qo,r=e;0>=r.X(t);)n=Yo(n),r=Yo(r);var i=Zo(n,1),s=Zo(r,1);for(r=Zo(r,2),n=Zo(n,2);!zo(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Zo(r,1),n=Zo(n,1)}return e=Qo(t,i.R(e)),new Xo(i,e)}for(i=$o;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Vo(n)).R(e);Ko(o)||0<o.X(t);)o=(s=Vo(n-=r)).R(e);zo(s)&&(s=qo),i=i.add(s),t=Qo(t,o)}return new Xo(i,t)}function Yo(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Uo(n,t.h)}function Zo(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Uo(i,t.h)}(Vn=Uo.prototype).ea=function(){if(Ko(this))return-Ho(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:jo+r)*e,e*=jo}return t},Vn.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(zo(this))return"0";if(Ko(this))return"-"+Ho(this).toString(t);for(var e=Vo(Math.pow(t,6)),n=this,r="";;){var i=Jo(n,e).g,s=((0<(n=Qo(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(zo(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Vn.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Vn.X=function(t){return Ko(t=Qo(this,t))?-1:zo(t)?0:1},Vn.abs=function(){return Ko(this)?Ho(this):this},Vn.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Uo(n,-2147483648&n[n.length-1]?-1:0)},Vn.R=function(t){if(zo(this)||zo(t))return $o;if(Ko(this))return Ko(t)?Ho(this).R(Ho(t)):Ho(Ho(this).R(t));if(Ko(t))return Ho(this.R(Ho(t)));if(0>this.X(Go)&&0>t.X(Go))return Vo(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,l=65535&t.D(i);n[2*r+2*i]+=o*l,Wo(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Wo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Wo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Wo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Uo(n,0)},Vn.gb=function(t){return Jo(this,t).h},Vn.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Uo(n,this.h&t.h)},Vn.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Uo(n,this.h|t.h)},Vn.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Uo(n,this.h^t.h)},Lo.prototype.createWebChannel=Lo.prototype.g,Ro.prototype.send=Ro.prototype.u,Ro.prototype.open=Ro.prototype.m,Ro.prototype.close=Ro.prototype.close,Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,Mi.COMPLETE="complete",Bi.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",ei.prototype.listen=ei.prototype.O,Ws.prototype.listenOnce=Ws.prototype.P,Ws.prototype.getLastError=Ws.prototype.Sa,Ws.prototype.getLastErrorCode=Ws.prototype.Ia,Ws.prototype.getStatus=Ws.prototype.da,Ws.prototype.getResponseJson=Ws.prototype.Wa,Ws.prototype.getResponseText=Ws.prototype.ja,Ws.prototype.send=Ws.prototype.ha,Ws.prototype.setWithCredentials=Ws.prototype.Oa,Po.prototype.digest=Po.prototype.l,Po.prototype.reset=Po.prototype.reset,Po.prototype.update=Po.prototype.j,Uo.prototype.add=Uo.prototype.add,Uo.prototype.multiply=Uo.prototype.R,Uo.prototype.modulo=Uo.prototype.gb,Uo.prototype.compare=Uo.prototype.X,Uo.prototype.toNumber=Uo.prototype.ea,Uo.prototype.toString=Uo.prototype.toString,Uo.prototype.getBits=Uo.prototype.D,Uo.fromNumber=Vo,Uo.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Ho(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Vo(Math.pow(n,8)),i=$o,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Vo(Math.pow(n,o)),i=i.R(o).add(Vo(a))):i=(i=i.R(r)).add(Vo(a))}return i};var ta=Hn.createWebChannelTransport=function(){return new Lo},ea=Hn.getStatEventTarget=function(){return ki()},na=Hn.ErrorCode=Pi,ra=Hn.EventType=Mi,ia=Hn.Event=Ii,sa=Hn.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},oa=Hn.FetchXmlHttpFactory=$s,aa=Hn.WebChannel=Bi,la=Hn.XhrIo=Ws,ua=(Hn.Md5=Po,Hn.Integer=Uo);i("6qd2L");const ca="@firebase/firestore";
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
 */class ha{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ha.UNAUTHENTICATED=new ha(null),ha.GOOGLE_CREDENTIALS=new ha("google-credentials-uid"),ha.FIRST_PARTY=new ha("first-party-uid"),ha.MOCK_USER=new ha("mock-user");
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
let fa="10.1.0";
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
 */const da=new(0,Gn.Logger)("@firebase/firestore");function pa(){return da.logLevel}function ga(t,...e){if(da.logLevel<=Gn.LogLevel.DEBUG){const n=e.map(va);da.debug(`Firestore (${fa}): ${t}`,...n)}}function ma(t,...e){if(da.logLevel<=Gn.LogLevel.ERROR){const n=e.map(va);da.error(`Firestore (${fa}): ${t}`,...n)}}function ya(t,...e){if(da.logLevel<=Gn.LogLevel.WARN){const n=e.map(va);da.warn(`Firestore (${fa}): ${t}`,...n)}}function va(t){if("string"==typeof t)return t;try{
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
 */function wa(t="Unexpected state"){const e=`FIRESTORE (${fa}) INTERNAL ASSERTION FAILED: `+t;throw ma(e),new Error(e)}function Ea(t,e){t||wa()}function ba(t,e){return t}
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
 */const Ta={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Aa extends zn.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Sa{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class _a{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ia{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ha.UNAUTHENTICATED)))}shutdown(){}}class Ca{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ka{constructor(t){this.t=t,this.currentUser=ha.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Sa;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sa,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{ga("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ga("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sa)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ga("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ea("string"==typeof e.accessToken),new _a(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ea(null===t||"string"==typeof t),new ha(t)}}class Na{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=ha.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class La{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Na(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(ha.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ra{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Oa{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&ga("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,ga("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{ga("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):ga("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ea("string"==typeof t.token),this.R=t.token,new Ra(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Da(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class xa{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Da(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function Pa(t,e){return t<e?-1:t>e?1:0}function Ma(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class Ua{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Aa(Ta.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Aa(Ta.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Aa(Ta.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Aa(Ta.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ua.fromMillis(Date.now())}static fromDate(t){return Ua.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ua(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Pa(this.nanoseconds,t.nanoseconds):Pa(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Fa{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Fa(t)}static min(){return new Fa(new Ua(0,0))}static max(){return new Fa(new Ua(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Ba{constructor(t,e,n){void 0===e?e=0:e>t.length&&wa(),void 0===n?n=t.length-e:n>t.length-e&&wa(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ba.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ba?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Va extends Ba{construct(t,e,n){return new Va(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Aa(Ta.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Va(e)}static emptyPath(){return new Va([])}}const ja=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $a extends Ba{construct(t,e,n){return new $a(t,e,n)}static isValidIdentifier(t){return ja.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$a.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $a(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Aa(Ta.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Aa(Ta.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Aa(Ta.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Aa(Ta.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $a(e)}static emptyPath(){return new $a([])}}
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
 */class qa{constructor(t){this.path=t}static fromPath(t){return new qa(Va.fromString(t))}static fromName(t){return new qa(Va.fromString(t).popFirst(5))}static empty(){return new qa(Va.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Va.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Va.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new qa(new Va(t.slice()))}}
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
 */class Ga{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ga.UNKNOWN_ID=-1;function za(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Fa.fromTimestamp(1e9===r?new Ua(n+1,0):new Ua(n,r));return new Ha(i,qa.empty(),e)}function Ka(t){return new Ha(t.readTime,t.key,-1)}class Ha{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ha(Fa.min(),qa.empty(),-1)}static max(){return new Ha(Fa.max(),qa.empty(),-1)}}function Qa(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=qa.comparator(t.documentKey,e.documentKey),0!==n?n:Pa(t.largestBatchId,e.largestBatchId))}
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
 */const Wa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Ja(t){if(t.code!==Ta.FAILED_PRECONDITION||t.message!==Wa)throw t;ga("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ya{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&wa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ya(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ya?e:Ya.resolve(e)}catch(t){return Ya.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ya.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ya.reject(e)}static resolve(t){return new Ya(((e,n)=>{e(t)}))}static reject(t){return new Ya(((e,n)=>{n(t)}))}static waitFor(t){return new Ya(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ya.resolve(!1);for(const n of t)e=e.next((t=>t?Ya.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ya(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ya(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function Za(t){return"IndexedDbTransactionError"===t.name}
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
class tl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function el(t){return null==t}function nl(t){return 0===t&&1/t==-1/0}function rl(t){return"number"==typeof t&&Number.isInteger(t)&&!nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */tl.ae=-1;const il=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ol=sl;
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
function al(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ll(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class cl{constructor(t,e){this.comparator=t,this.root=e||fl.EMPTY}insert(t,e){return new cl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,fl.BLACK,null,null))}remove(t){return new cl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,fl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hl(this.root,t,this.comparator,!1)}getReverseIterator(){return new hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hl(this.root,t,this.comparator,!0)}}class hl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class fl{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:fl.RED,this.left=null!=r?r:fl.EMPTY,this.right=null!=i?i:fl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new fl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return fl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return fl.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,fl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,fl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw wa();if(this.right.isRed())throw wa();const t=this.left.check();if(t!==this.right.check())throw wa();return t+(this.isRed()?0:1)}}fl.EMPTY=null,fl.RED=!0,fl.BLACK=!1,fl.EMPTY=new class{constructor(){this.size=0}get key(){throw wa()}get value(){throw wa()}get color(){throw wa()}get left(){throw wa()}get right(){throw wa()}copy(t,e,n,r,i){return this}insert(t,e,n){return new fl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class dl{constructor(t){this.comparator=t,this.data=new cl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pl(this.data.getIterator())}getIteratorFrom(t){return new pl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof dl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new dl(this.comparator);return e.data=t,e}}class pl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class gl{constructor(t){this.fields=t,t.sort($a.comparator)}static empty(){return new gl([])}unionWith(t){let e=new dl($a.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new gl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ma(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class yl{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ml("Invalid base64 string: "+t):t}}(t);return new yl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new yl(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pa(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yl.EMPTY_BYTE_STRING=new yl("");const vl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wl(t){if(Ea(!!t),"string"==typeof t){let e=0;const n=vl.exec(t);if(Ea(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:El(t.seconds),nanos:El(t.nanos)}}function El(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function bl(t){return"string"==typeof t?yl.fromBase64String(t):yl.fromUint8Array(t)}
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
 */function Tl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Al(t){const e=t.mapValue.fields.__previous_value__;return Tl(e)?Al(e):e}function Sl(t){const e=wl(t.mapValue.fields.__local_write_time__.timestampValue);return new Ua(e.seconds,e.nanos)}
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
 */class _l{constructor(t,e,n,r,i,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Il{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Il("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Il&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const Cl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tl(t)?4:Bl(t)?9007199254740991:10:wa()}function Nl(t,e){if(t===e)return!0;const n=kl(t);if(n!==kl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=wl(t.timestampValue),r=wl(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,bl(t.bytesValue).isEqual(bl(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return El(t.geoPointValue.latitude)===El(e.geoPointValue.latitude)&&El(t.geoPointValue.longitude)===El(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return El(t.integerValue)===El(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=El(t.doubleValue),r=El(e.doubleValue);return n===r?nl(n)===nl(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ma(t.arrayValue.values||[],e.arrayValue.values||[],Nl);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(al(n)!==al(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Nl(n[t],r[t])))return!1;return!0}(t,e);default:return wa()}var r}function Ll(t,e){return void 0!==(t.values||[]).find((t=>Nl(t,e)))}function Rl(t,e){if(t===e)return 0;const n=kl(t),r=kl(e);if(n!==r)return Pa(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pa(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=El(t.integerValue||t.doubleValue),r=El(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ol(t.timestampValue,e.timestampValue);case 4:return Ol(Sl(t),Sl(e));case 5:return Pa(t.stringValue,e.stringValue);case 6:return function(t,e){const n=bl(t),r=bl(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Pa(n[t],r[t]);if(0!==e)return e}return Pa(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Pa(El(t.latitude),El(e.latitude));return 0!==n?n:Pa(El(t.longitude),El(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Rl(n[t],r[t]);if(e)return e}return Pa(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Cl.mapValue&&e===Cl.mapValue)return 0;if(t===Cl.mapValue)return 1;if(e===Cl.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Pa(r[t],s[t]);if(0!==e)return e;const o=Rl(n[r[t]],i[s[t]]);if(0!==o)return o}return Pa(r.length,s.length)}(t.mapValue,e.mapValue);default:throw wa()}}function Ol(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Pa(t,e);const n=wl(t),r=wl(e),i=Pa(n.seconds,r.seconds);return 0!==i?i:Pa(n.nanos,r.nanos)}function Dl(t){return xl(t)}function xl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=wl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bl(t.bytesValue).toBase64():"referenceValue"in t?function(t){return qa.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=xl(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${xl(t.fields[i])}`;return n+"}"}(t.mapValue):wa()}function Pl(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function Ul(t){return!!t&&"mapValue"in t}function Fl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ll(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Fl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bl(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Vl{constructor(t){this.value=t}static empty(){return new Vl({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ul(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fl(e)}setAll(t){let e=$a.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Fl(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ul(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ul(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ll(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Vl(Fl(this.value))}}function jl(t){const e=[];return ll(t.fields,((t,n)=>{const r=new $a([t]);if(Ul(n)){const t=jl(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new gl(e)
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
 */}class $l{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new $l(t,0,Fa.min(),Fa.min(),Fa.min(),Vl.empty(),0)}static newFoundDocument(t,e,n,r){return new $l(t,1,e,Fa.min(),n,r,0)}static newNoDocument(t,e){return new $l(t,2,e,Fa.min(),Fa.min(),Vl.empty(),0)}static newUnknownDocument(t,e){return new $l(t,3,e,Fa.min(),Fa.min(),Vl.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Fa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vl.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Fa.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof $l&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $l(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class ql{constructor(t,e){this.position=t,this.inclusive=e}}function Gl(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?qa.comparator(qa.fromName(o.referenceValue),n.key):Rl(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function zl(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nl(t.position[n],e.position[n]))return!1;return!0}
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
 */class Kl{constructor(t,e="asc"){this.field=t,this.dir=e}}function Hl(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Ql{}class Wl extends Ql{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ru(t,e,n):"array-contains"===e?new au(t,n):"in"===e?new lu(t,n):"not-in"===e?new uu(t,n):"array-contains-any"===e?new cu(t,n):new Wl(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new iu(t,n):new su(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Rl(e,this.value)):null!==e&&kl(this.value)===kl(e)&&this.matchesComparison(Rl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return wa()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xl extends Ql{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Xl(t,e)}matches(t){return Jl(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Jl(t){return"and"===t.op}function Yl(t){return Zl(t)&&Jl(t)}function Zl(t){for(const e of t.filters)if(e instanceof Xl)return!1;return!0}function tu(t){if(t instanceof Wl)return t.field.canonicalString()+t.op.toString()+Dl(t.value);if(Yl(t))return t.filters.map((t=>tu(t))).join(",");{const e=t.filters.map((t=>tu(t))).join(",");return`${t.op}(${e})`}}function eu(t,e){return t instanceof Wl?(n=t,(r=e)instanceof Wl&&n.op===r.op&&n.field.isEqual(r.field)&&Nl(n.value,r.value)):t instanceof Xl?function(t,e){return e instanceof Xl&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&eu(n,e.filters[r])),!0)}(t,e):void wa();var n,r}function nu(t){return t instanceof Wl?`${(e=t).field.canonicalString()} ${e.op} ${Dl(e.value)}`:t instanceof Xl?function(t){return t.op.toString()+" {"+t.getFilters().map(nu).join(" ,")+"}"}(t):"Filter";var e}class ru extends Wl{constructor(t,e,n){super(t,e,n),this.key=qa.fromName(n.referenceValue)}matches(t){const e=qa.comparator(t.key,this.key);return this.matchesComparison(e)}}class iu extends Wl{constructor(t,e){super(t,"in",e),this.keys=ou("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class su extends Wl{constructor(t,e){super(t,"not-in",e),this.keys=ou("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ou(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>qa.fromName(t.referenceValue)))}class au extends Wl{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ml(e)&&Ll(e.arrayValue,this.value)}}class lu extends Wl{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ll(this.value.arrayValue,e)}}class uu extends Wl{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ll(this.value.arrayValue,e)}}class cu extends Wl{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ml(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ll(this.value.arrayValue,t)))}}
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
 */class hu{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function fu(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hu(t,e,n,r,i,s,o)}function du(t){const e=ba(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>tu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),el(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Dl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Dl(t))).join(",")),e.he=t}return e.he}function pu(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Hl(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zl(t.startAt,e.startAt)&&zl(t.endAt,e.endAt)}
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
class gu{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function mu(t,e,n,r,i,s,o,a){return new gu(t,e,n,r,i,s,o,a)}function yu(t){return new gu(t)}function vu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function wu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Eu(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function bu(t){return null!==t.collectionGroup}function Tu(t){const e=ba(t);if(null===e.Pe){e.Pe=[];const t=Eu(e),n=wu(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Kl(t)),e.Pe.push(new Kl($a.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Kl($a.keyField(),t))}}}return e.Pe}function Au(t){const e=ba(t);if(!e.Ie)if("F"===e.limitType)e.Ie=fu(e.path,e.collectionGroup,Tu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Tu(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Kl(n.field,e))}const n=e.endAt?new ql(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ql(e.startAt.position,e.startAt.inclusive):null;e.Ie=fu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.Ie}function Su(t,e,n){return new gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return pu(Au(t),Au(e))&&t.limitType===e.limitType}function Iu(t){return`${du(Au(t))}|lt:${t.limitType}`}function Cu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>nu(t))).join(", ")}]`),el(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Dl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Dl(t))).join(",")),`Target(${e})`}(Au(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):qa.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Tu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Gl(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Tu(n),r)||n.endAt&&!function(t,e,n){const r=Gl(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Tu(n),r)));var n,r}function Nu(t){return(e,n)=>{let r=!1;for(const i of Tu(t)){const t=Lu(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Lu(t,e,n){const r=t.field.isKeyField()?qa.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Rl(r,i):wa()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return wa()}}
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
 */class Ru{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ll(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return ul(this.inner)}size(){return this.innerSize}}
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
 */const Ou=new cl(qa.comparator);function Du(){return Ou}const xu=new cl(qa.comparator);function Pu(...t){let e=xu;for(const n of t)e=e.insert(n.key,n);return e}function Mu(t){let e=xu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Uu(){return Bu()}function Fu(){return Bu()}function Bu(){return new Ru((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Vu=new cl(qa.comparator),ju=new dl(qa.comparator);function $u(...t){let e=ju;for(const n of t)e=e.add(n);return e}const qu=new dl(Pa);function Gu(){return qu}
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
 */function zu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nl(e)?"-0":e}}function Ku(t){return{integerValue:""+t}}function Hu(t,e){return rl(e)?Ku(e):zu(t,e)}
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
 */class Qu{constructor(){this._=void 0}}function Wu(t,e,n){return t instanceof Yu?Zu(t,e):t instanceof tc?ec(t,e):n}function Xu(t,e){return t instanceof nc?Pl(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class Ju extends Qu{}class Yu extends Qu{constructor(t){super(),this.elements=t}}function Zu(t,e){const n=ic(e);for(const e of t.elements)n.some((t=>Nl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class tc extends Qu{constructor(t){super(),this.elements=t}}function ec(t,e){let n=ic(e);for(const e of t.elements)n=n.filter((t=>!Nl(t,e)));return{arrayValue:{values:n}}}class nc extends Qu{constructor(t,e){super(),this.serializer=t,this.Te=e}}function rc(t){return El(t.integerValue||t.doubleValue)}function ic(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class sc{constructor(t,e){this.version=t,this.transformResults=e}}class oc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oc}static exists(t){return new oc(void 0,t)}static updateTime(t){return new oc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ac(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class lc{}function uc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new wc(t.key,oc.none()):new pc(t.key,t.data,oc.none());{const n=t.data,r=Vl.empty();let i=new dl($a.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new gc(t.key,r,new gl(i.toArray()),oc.none())}}function cc(t,e,n){var r;t instanceof pc?function(t,e,n){const r=t.value.clone(),i=yc(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof gc?function(t,e,n){if(!ac(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=yc(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(mc(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function hc(t,e,n,r){return t instanceof pc?function(t,e,n,r){if(!ac(t.precondition,e))return n;const i=t.value.clone(),s=vc(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof gc?function(t,e,n,r){if(!ac(t.precondition,e))return n;const i=vc(t.fieldTransforms,r,e),s=e.data;return s.setAll(mc(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,ac(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function fc(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Xu(r.transform,t||null);null!=i&&(null===n&&(n=Vl.empty()),n.set(r.field,i))}return n||null}function dc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ma(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Yu&&r instanceof Yu||n instanceof tc&&r instanceof tc?Ma(n.elements,r.elements,Nl):n instanceof nc&&r instanceof nc?Nl(n.Te,r.Te):n instanceof Ju&&r instanceof Ju);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class pc extends lc{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class gc extends lc{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function yc(t,e,n){const r=new Map;Ea(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Wu(o,a,n[i]))}return r}function vc(t,e,n){const r=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);r.set(a.field,(s=l,o=e,(i=t)instanceof Ju?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Tl(e)&&(e=Al(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof Yu?Zu(i,s):i instanceof tc?ec(i,s):function(t,e){const n=Xu(t,e),r=rc(n)+rc(t.Te);return Pl(n)&&Pl(t.Te)?Ku(r):zu(t.serializer,r)}(i,s)))}var i,s,o;return r}class wc extends lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ec extends lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class bc{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&cc(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=hc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=hc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fu();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=uc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Fa.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$u())}isEqual(t){return this.batchId===t.batchId&&Ma(this.mutations,t.mutations,((t,e)=>dc(t,e)))&&Ma(this.baseMutations,t.baseMutations,((t,e)=>dc(t,e)))}}class Tc{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ea(t.mutations.length===n.length);let r=Vu;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Tc(t,e,n,r)}}
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
 */class Ac{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
var Sc,_c;function Ic(t){switch(t){default:return wa();case Ta.CANCELLED:case Ta.UNKNOWN:case Ta.DEADLINE_EXCEEDED:case Ta.RESOURCE_EXHAUSTED:case Ta.INTERNAL:case Ta.UNAVAILABLE:case Ta.UNAUTHENTICATED:return!1;case Ta.INVALID_ARGUMENT:case Ta.NOT_FOUND:case Ta.ALREADY_EXISTS:case Ta.PERMISSION_DENIED:case Ta.FAILED_PRECONDITION:case Ta.ABORTED:case Ta.OUT_OF_RANGE:case Ta.UNIMPLEMENTED:case Ta.DATA_LOSS:return!0}}function Cc(t){if(void 0===t)return ma("GRPC error has no .code"),Ta.UNKNOWN;switch(t){case Sc.OK:return Ta.OK;case Sc.CANCELLED:return Ta.CANCELLED;case Sc.UNKNOWN:return Ta.UNKNOWN;case Sc.DEADLINE_EXCEEDED:return Ta.DEADLINE_EXCEEDED;case Sc.RESOURCE_EXHAUSTED:return Ta.RESOURCE_EXHAUSTED;case Sc.INTERNAL:return Ta.INTERNAL;case Sc.UNAVAILABLE:return Ta.UNAVAILABLE;case Sc.UNAUTHENTICATED:return Ta.UNAUTHENTICATED;case Sc.INVALID_ARGUMENT:return Ta.INVALID_ARGUMENT;case Sc.NOT_FOUND:return Ta.NOT_FOUND;case Sc.ALREADY_EXISTS:return Ta.ALREADY_EXISTS;case Sc.PERMISSION_DENIED:return Ta.PERMISSION_DENIED;case Sc.FAILED_PRECONDITION:return Ta.FAILED_PRECONDITION;case Sc.ABORTED:return Ta.ABORTED;case Sc.OUT_OF_RANGE:return Ta.OUT_OF_RANGE;case Sc.UNIMPLEMENTED:return Ta.UNIMPLEMENTED;case Sc.DATA_LOSS:return Ta.DATA_LOSS;default:return wa()}}(_c=Sc||(Sc={}))[_c.OK=0]="OK",_c[_c.CANCELLED=1]="CANCELLED",_c[_c.UNKNOWN=2]="UNKNOWN",_c[_c.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_c[_c.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_c[_c.NOT_FOUND=5]="NOT_FOUND",_c[_c.ALREADY_EXISTS=6]="ALREADY_EXISTS",_c[_c.PERMISSION_DENIED=7]="PERMISSION_DENIED",_c[_c.UNAUTHENTICATED=16]="UNAUTHENTICATED",_c[_c.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_c[_c.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_c[_c.ABORTED=10]="ABORTED",_c[_c.OUT_OF_RANGE=11]="OUT_OF_RANGE",_c[_c.UNIMPLEMENTED=12]="UNIMPLEMENTED",_c[_c.INTERNAL=13]="INTERNAL",_c[_c.UNAVAILABLE=14]="UNAVAILABLE",_c[_c.DATA_LOSS=15]="DATA_LOSS";
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
new ua([4294967295,4294967295],0);Error;
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
 */class kc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rc(t,e){return Nc(t,e.toTimestamp())}function Oc(t){return Ea(!!t),Fa.fromTimestamp(function(t){const e=wl(t);return new Ua(e.seconds,e.nanos)}(t))}function Dc(t,e){return(n=t,new Va(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function xc(t){const e=Va.fromString(t);return Ea(zc(e)),e}function Pc(t,e){return Dc(t.databaseId,e.path)}function Mc(t){const e=xc(t);return 4===e.length?Va.emptyPath():Fc(e)}function Uc(t){return new Va(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fc(t){return Ea(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Bc(t,e,n){return{name:Pc(t,e),fields:n.value.mapValue.fields}}function Vc(t,e){let n;if(e instanceof pc)n={update:Bc(t,e.key,e.value)};else if(e instanceof wc)n={delete:Pc(t,e.key)};else if(e instanceof gc)n={update:Bc(t,e.key,e.data),updateMask:Gc(e.fieldMask)};else{if(!(e instanceof Ec))return wa();n={verify:Pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ju)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Yu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nc)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw wa()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Rc(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:wa())),n;var r,i}function jc(t){let e=Mc(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ea(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=$c(t);return e instanceof Xl&&Yl(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Kl(qc((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,el(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new ql(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ql(n,e)}(n.endAt)),mu(e,i,o,s,a,"F",l,u)}function $c(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qc(t.unaryFilter.field);return Wl.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qc(t.unaryFilter.field);return Wl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qc(t.unaryFilter.field);return Wl.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qc(t.unaryFilter.field);return Wl.create(i,"!=",{nullValue:"NULL_VALUE"});default:return wa()}}(t):void 0!==t.fieldFilter?(n=t,Wl.create(qc(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wa()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Xl.create(e.compositeFilter.filters.map((t=>$c(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return wa()}}(e.compositeFilter.op))):wa();var e,n}function qc(t){return $a.fromServerFormat(t.fieldPath)}function Gc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Kc{constructor(t){this.ct=t}}function Hc(t){const e=jc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Su(e,e.limit,"L"):e}
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
 */class Qc{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(El(t.integerValue));else if("doubleValue"in t){const n=El(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),nl(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(bl(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?Bl(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):wa()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const t of Object.keys(n))this.Rt(t,e),this.It(n[t],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const t of n)this.It(t,e)}gt(t,e){this.Et(e,37),qa.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Qc.bt=new Qc;
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
class Wc{constructor(){this.sn=new Xc}addToCollectionParentIndex(t,e){return this.sn.add(e),Ya.resolve()}getCollectionParents(t,e){return Ya.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return Ya.resolve()}deleteFieldIndex(t,e){return Ya.resolve()}getDocumentsMatchingTarget(t,e){return Ya.resolve(null)}getIndexType(t,e){return Ya.resolve(0)}getFieldIndexes(t,e){return Ya.resolve([])}getNextCollectionGroupToUpdate(t){return Ya.resolve(null)}getMinOffset(t,e){return Ya.resolve(Ha.min())}getMinOffsetFromCollectionGroup(t,e){return Ya.resolve(Ha.min())}updateCollectionGroup(t,e,n){return Ya.resolve()}updateIndexEntries(t,e){return Ya.resolve()}}class Xc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new dl(Va.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new dl(Va.comparator)).toArray()}}
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
 */new Uint8Array(0);class Jc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Jc(t,Jc.DEFAULT_COLLECTION_PERCENTILE,Jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Jc.DEFAULT_COLLECTION_PERCENTILE=10,Jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jc.DEFAULT=new Jc(41943040,Jc.DEFAULT_COLLECTION_PERCENTILE,Jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jc.DISABLED=new Jc(-1,0,0);
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
class Yc{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Yc(0)}static On(){return new Yc(-1)}}
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
class Zc{constructor(){this.changes=new Ru((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,$l.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ya.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class th{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class eh{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&hc(n.mutation,t,gl.empty(),Ua.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,$u()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=$u()){const r=Uu();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Pu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Uu();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,$u())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Du();const s=Bu(),o=Bu();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof gc)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),hc(o.mutation,e,o.mutation.getFieldMask(),Ua.now())):s.set(e.key,gl.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new th(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Bu();let r=new cl(((t,e)=>t-e)),i=$u();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||gl.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||$u()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=Fu();l.forEach((t=>{if(!i.has(t)){const r=uc(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ya.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,qa.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):bu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Ya.resolve(Uu());let o=-1,a=i;return s.next((e=>Ya.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ya.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,$u()))).next((t=>({batchId:o,changes:Mu(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new qa(e)).next((t=>{let e=Pu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Pu();return this.indexManager.getCollectionParents(t,r).next((s=>Ya.forEach(s,(s=>{const o=(a=e,l=s.child(r),new gu(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,$l.newInvalidDocument(r)))}));let n=Pu();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&hc(s.mutation,i,gl.empty(),Ua.now()),ku(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class nh{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return Ya.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,{id:(n=e).id,version:n.version,createTime:Oc(n.createTime)}),Ya.resolve();var n}getNamedQuery(t,e){return Ya.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,{name:(n=e).name,query:Hc(n.bundledQuery),readTime:Oc(n.readTime)}),Ya.resolve();var n}}
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
 */class rh{constructor(){this.overlays=new cl(qa.comparator),this.cr=new Map}getOverlay(t,e){return Ya.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Uu();return Ya.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),Ya.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),Ya.resolve()}getOverlaysForCollection(t,e,n){const r=Uu(),i=e.length+1,s=new qa(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ya.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new cl(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Uu(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Uu(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Ya.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ac(e,n));let i=this.cr.get(e);void 0===i&&(i=$u(),this.cr.set(e,i)),this.cr.set(e,i.add(n.key))}}
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
 */class ih{constructor(){this.lr=new dl(sh.hr),this.Pr=new dl(sh.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new sh(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new sh(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new qa(new Va([])),n=new sh(e,t),r=new sh(e,t+1),i=[];return this.Pr.forEachInRange([n,r],(t=>{this.Er(t),i.push(t.key)})),i}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new qa(new Va([])),n=new sh(e,t),r=new sh(e,t+1);let i=$u();return this.Pr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new sh(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class sh{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return qa.comparator(t.key,e.key)||Pa(t.mr,e.mr)}static Ir(t,e){return Pa(t.mr,e.mr)||qa.comparator(t.key,e.key)}}
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
 */class oh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new dl(sh.hr)}checkEmpty(t){return Ya.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new bc(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.pr=this.pr.add(new sh(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Ya.resolve(s)}lookupMutationBatch(t,e){return Ya.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.wr(n),i=r<0?0:r;return Ya.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ya.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return Ya.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sh(e,0),r=new sh(e,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(t=>{const e=this.yr(t.mr);i.push(e)})),Ya.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new dl(Pa);return e.forEach((t=>{const e=new sh(t,0),r=new sh(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,r],(t=>{n=n.add(t.mr)}))})),Ya.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;qa.isDocumentKey(i)||(i=i.child(""));const s=new sh(new qa(i),0);let o=new dl(Pa);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.mr)),!0)}),s),Ya.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ea(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return Ya.forEach(e.mutations,(r=>{const i=new sh(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new sh(e,0),r=this.pr.firstAfterOrEqual(n);return Ya.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ya.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class ah{constructor(t){this.Dr=t,this.docs=new cl(qa.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ya.resolve(n?n.document.mutableCopy():$l.newInvalidDocument(e))}getEntries(t,e){let n=Du();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():$l.newInvalidDocument(t))})),Ya.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Du();const s=e.path,o=new qa(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Qa(Ka(o),n)<=0||(r.has(o.key)||ku(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ya.resolve(i)}getAllFromCollectionGroup(t,e,n,r){wa()}vr(t,e){return Ya.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new lh(this)}getSize(t){return Ya.resolve(this.size)}}class lh extends Zc{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.sr.addEntry(t,r)):this.sr.removeEntry(n)})),Ya.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
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
 */class uh{constructor(t){this.persistence=t,this.Cr=new Ru((t=>du(t)),pu),this.lastRemoteSnapshotVersion=Fa.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ih,this.targetCount=0,this.Or=Yc.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),Ya.resolve()}getLastRemoteSnapshotVersion(t){return Ya.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ya.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),Ya.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),Ya.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Yc(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,Ya.resolve()}updateTargetData(t,e){return this.Ln(e),Ya.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,Ya.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ya.waitFor(i).next((()=>r))}getTargetCount(t){return Ya.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return Ya.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),Ya.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ya.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),Ya.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return Ya.resolve(n)}containsKey(t,e){return Ya.resolve(this.Mr.containsKey(e))}}
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
 */class ch{constructor(t,e){this.Nr={},this.overlays={},this.Br=new tl(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new uh(this),this.indexManager=new Wc,this.remoteDocumentCache=new ah((t=>this.referenceDelegate.qr(t))),this.serializer=new Kc(e),this.Qr=new nh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new oh(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){ga("MemoryPersistence","Starting transaction:",t);const r=new hh(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((t=>this.referenceDelegate.$r(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ur(t,e){return Ya.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class hh extends Xa{constructor(t){super(),this.currentSequenceNumber=t}}class fh{constructor(t){this.persistence=t,this.Wr=new ih,this.Gr=null}static zr(t){return new fh(t)}get jr(){if(this.Gr)return this.Gr;throw wa()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),Ya.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),Ya.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),Ya.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ya.forEach(this.jr,(n=>{const r=qa.fromPath(n);return this.Hr(t,r).next((t=>{t||e.removeEntry(r,Fa.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return Ya.or([()=>Ya.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
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
class dh{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=r}static qi(t,e){let n=$u(),r=$u();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new dh(t,e.fromCache,n,r)}}
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
 */class ph{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.$i(t,e).next((i=>i||this.Ui(t,e,r,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(vu(e))return Ya.resolve(null);let n=Au(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Su(e,null,"F"),n=Au(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=$u(...r);return this.Ki.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Gi(e,r);return this.zi(e,s,i,n.readTime)?this.$i(t,Su(e,null,"F")):this.ji(t,s,e,n)}))))})))))}Ui(t,e,n,r){return vu(e)||r.isEqual(Fa.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((i=>{const s=this.Gi(e,i);return this.zi(e,s,n,r)?this.Wi(t,e):(pa()<=Gn.LogLevel.DEBUG&&ga("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cu(e)),this.ji(t,s,e,za(r,-1)))}))}Gi(t,e){let n=new dl(Nu(t));return e.forEach(((e,r)=>{ku(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(t,e){return pa()<=Gn.LogLevel.DEBUG&&ga("QueryEngine","Using full collection scan to execute query:",Cu(e)),this.Ki.getDocumentsMatchingQuery(t,e,Ha.min())}ji(t,e,n,r){return this.Ki.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class gh{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new cl(Pa),this.Yi=new Ru((t=>du(t)),pu),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eh(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function mh(t,e,n,r){return new gh(t,e,n,r)}async function yh(t,e){const n=ba(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=$u();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function vh(t){const e=ba(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function wh(t,e){const n=ba(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Eh{constructor(){this.activeTargetIds=Gu()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bh{constructor(){this.Hs=new Eh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Eh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Th{Ys(t){}shutdown(){}}
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
 */class Ah{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){ga("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){ga("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Sh=null;function _h(){return null===Sh?Sh=268435456+Math.round(2147483648*Math.random()):Sh++,"0x"+Sh.toString(16)
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
 */}const Ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Ch{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
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
 */const kh="WebChannelConnection";class Nh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(t,e,n,r,i){const s=_h(),o=this.mo(t,e);ga("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(t,o,a,n).then((e=>(ga("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ya("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,r,i,s){return this.Vo(t,e,n,r,i)}fo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+fa,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=Ih[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,r){const i=_h();return new Promise(((s,o)=>{const a=new la;a.setWithCredentials(!0),a.listenOnce(ra.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case na.NO_ERROR:const e=a.getResponseJson();ga(kh,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case na.TIMEOUT:ga(kh,`RPC '${t}' ${i} timed out`),o(new Aa(Ta.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const n=a.getStatus();if(ga(kh,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ta).indexOf(e)>=0?e:Ta.UNKNOWN}(e.status);o(new Aa(t,e.message))}else o(new Aa(Ta.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Aa(Ta.UNAVAILABLE,"Connection failed."));break;default:wa()}}finally{ga(kh,`RPC '${t}' ${i} completed.`)}}));const l=JSON.stringify(r);ga(kh,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",l,n,15)}))}wo(t,e,n){const r=_h(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ta(),o=ea(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new oa({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ga(kh,`Creating RPC '${t}' stream ${r}: ${u}`,a);const c=s.createWebChannel(u,a);let h=!1,f=!1;const d=new Ch({so:e=>{f?ga(kh,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(ga(kh,`Opening RPC '${t}' stream ${r} transport.`),c.open(),h=!0),ga(kh,`RPC '${t}' stream ${r} sending:`,e),c.send(e))},oo:()=>c.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,aa.EventType.OPEN,(()=>{f||ga(kh,`RPC '${t}' stream ${r} transport opened.`)})),p(c,aa.EventType.CLOSE,(()=>{f||(f=!0,ga(kh,`RPC '${t}' stream ${r} transport closed`),d.Po())})),p(c,aa.EventType.ERROR,(e=>{f||(f=!0,ya(kh,`RPC '${t}' stream ${r} transport errored:`,e),d.Po(new Aa(Ta.UNAVAILABLE,"The operation could not be completed")))})),p(c,aa.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];Ea(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ga(kh,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Sc[t];if(void 0!==e)return Cc(e)}(e),i=o.message;void 0===n&&(n=Ta.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.Po(new Aa(n,i)),c.close()}else ga(kh,`RPC '${t}' stream ${r} received:`,i),d.Io(i)}})),p(o,ia.STAT_EVENT,(e=>{e.stat===sa.PROXY?ga(kh,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===sa.NOPROXY&&ga(kh,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.ho()}),0),d}}
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
 */function Lh(){return"undefined"!=typeof document?document:null}
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
 */function Rh(t){return new kc(t,!0)}
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
 */class Oh{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,e-n);r>0&&ga("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
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
 */class Dh{constructor(t,e,n,r,i,s,o,a){this.ii=t,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Oh(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===Ta.RESOURCE_EXHAUSTED?(ma(e.toString()),ma("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===Ta.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new Aa(Ta.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return ga("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(ga("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xh extends Dh{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Ea(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Ea(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Oc(t.updateTime):Oc(e);return n.isEqual(Fa.min())&&(n=Oc(e)),new sc(n,t.transformResults||[])}(t,n)))):[]),i=Oc(t.commitTime);return this.listener.u_(i,r)}var e,n;return Ea(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Uc(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Vc(this.serializer,t)))};this.Ho(e)}}
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
 */class Ph extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new Aa(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ta.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Aa(Ta.UNKNOWN,t.toString())}))}yo(t,e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ta.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Aa(Ta.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class Mh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ma(e),this.d_=!1):ga("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
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
 */class Uh{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{Vh(this)&&(ga("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ba(t);e.y_.add(4),await Bh(e),e.b_.set("Unknown"),e.y_.delete(4),await Fh(e)}(this))}))})),this.b_=new Mh(n,r)}}async function Fh(t){if(Vh(t))for(const e of t.w_)await e(!0)}async function Bh(t){for(const e of t.w_)await e(!1)}function Vh(t){return 0===ba(t).y_.size}async function jh(t,e,n){if(!Za(e))throw e;t.y_.add(1),await Bh(t),t.b_.set("Offline"),n||(n=()=>vh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ga("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Fh(t)}))}function $h(t,e){return e().catch((n=>jh(t,n,e)))}async function qh(t){const e=ba(t),n=tf(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Gh(e);)try{const t=await wh(e.localStore,r);if(null===t){0===e.g_.length&&n.zo();break}r=t.batchId,zh(e,t)}catch(t){await jh(e,t)}Kh(e)&&Hh(e)}function Gh(t){return Vh(t)&&t.g_.length<10}function zh(t,e){t.g_.push(e);const n=tf(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Kh(t){return Vh(t)&&!tf(t).$o()&&t.g_.length>0}function Hh(t){tf(t).start()}async function Qh(t){tf(t).l_()}async function Wh(t){const e=tf(t);for(const n of t.g_)e.a_(n.mutations)}async function Xh(t,e,n){const r=t.g_.shift(),i=Tc.from(r,e,n);await $h(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await qh(t)}async function Jh(t,e){e&&tf(t).__&&await async function(t,e){if(Ic(n=e.code)&&n!==Ta.ABORTED){const n=t.g_.shift();tf(t).Go(),await $h(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await qh(t)}var n}(t,e),Kh(t)&&Hh(t)}async function Yh(t,e){const n=ba(t);n.asyncQueue.verifyOperationInProgress(),ga("RemoteStore","RemoteStore received new credentials");const r=Vh(n);n.y_.add(3),await Bh(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Fh(n)}async function Zh(t,e){const n=ba(t);e?(n.y_.delete(2),await Fh(n)):e||(n.y_.add(2),await Bh(n),n.b_.set("Unknown"))}function tf(t){return t.C_||(t.C_=function(t,e,n){const r=ba(t);return r.P_(),new xh(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{_o:Qh.bind(null,t),uo:Jh.bind(null,t),c_:Wh.bind(null,t),u_:Xh.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await qh(t)):(await t.C_.stop(),t.g_.length>0&&(ga("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
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
 */}class ef{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Sa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ef(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Aa(Ta.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(t,e){if(ma("AsyncQueue",`${e}: ${t}`),Za(t))return new Aa(Ta.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class rf{constructor(){this.queries=new Ru((t=>Iu(t)),_u),this.onlineState="Unknown",this.O_=new Set}}function sf(t){t.O_.forEach((t=>{t.next()}))}class of{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Ru((t=>Iu(t)),_u),this.da=new Map,this.Aa=new Set,this.Ra=new cl(qa.comparator),this.Va=new Map,this.ma=new ih,this.fa={},this.ga=new Map,this.pa=Yc.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}function af(t,e,n){const r=ba(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ba(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.N_(e)&&(r=!0)})),r&&sf(n)}(r.eventManager,e),t.length&&r.Ta.r_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lf(t,e){const n=ba(t),r=e.batch.batchId;try{const t=await function(t,e){const n=ba(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Ya.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Ea(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=$u();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);hf(n,r,null),cf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ff(n,t)}catch(t){await Ja(t)}}async function uf(t,e,n){const r=ba(t);try{const t=await function(t,e){const n=ba(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ea(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);hf(r,e,n),cf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ff(r,t)}catch(t){await Ja(t)}}function cf(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function hf(t,e,n){const r=ba(t);let i=r.fa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}async function ff(t,e,n){const r=ba(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((t,a)=>{o.push(r.wa(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=dh.qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(t,e){const n=ba(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ya.forEach(e,(e=>Ya.forEach(e.Li,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ya.forEach(e.ki,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Za(t))throw t;ga("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function df(t,e){const n=ba(t);if(!n.currentUser.isEqual(e)){ga("SyncEngine","User change. New user:",e.toKey());const t=await yh(n.localStore,e);n.currentUser=e,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ga.forEach((t=>{t.forEach((t=>{t.reject(new Aa(Ta.CANCELLED,i))}))})),r.ga.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ff(n,t.ts)}var r,i}function pf(t){const e=ba(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uf.bind(null,e),e}class gf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Rh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return mh(this.persistence,new ph,t.initialUser,this.serializer)}createPersistence(t){return new ch(fh.zr,this.serializer)}createSharedClientState(t){return new bh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>af(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=df.bind(null,this.syncEngine),await Zh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new rf}createDatastore(t){const e=Rh(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Nh(r));var r;return function(t,e,n,r){return new Ph(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>af(this.syncEngine,t,0),s=Ah.v()?new Ah:new Th,new Uh(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new of(t,e,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ba(t);ga("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await Bh(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
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
class yf{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=ha.UNAUTHENTICATED,this.clientId=xa.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ga("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ga("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Aa(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Sa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=nf(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function vf(t,e){t.asyncQueue.verifyOperationInProgress(),ga("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await yh(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function wf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bf(t);ga("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Yh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Yh(e.remoteStore,n))),t._onlineComponents=e}function Ef(t){return"FirebaseError"===t.name?t.code===Ta.FAILED_PRECONDITION||t.code===Ta.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function bf(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ga("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ef(n))throw n;ya("Error using user provided cache. Falling back to memory cache: "+n),await vf(t,new gf)}}else ga("FirestoreClient","Using default OfflineComponentProvider"),await vf(t,new gf);return t._offlineComponents}async function Tf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ga("FirestoreClient","Using user provided OnlineComponentProvider"),await wf(t,t._uninitializedComponentsProvider._online)):(ga("FirestoreClient","Using default OnlineComponentProvider"),await wf(t,new mf))),t._onlineComponents}function Af(t){return Tf(t).then((t=>t.syncEngine))}
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
function Sf(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const _f=new Map;
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
 */function If(t,e,n){if(!n)throw new Aa(Ta.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cf(t){if(!qa.isDocumentKey(t))throw new Aa(Ta.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kf(t){if(qa.isDocumentKey(t))throw new Aa(Ta.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":wa()}function Lf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Aa(Ta.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new Aa(Ta.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Rf{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Aa(Ta.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Aa(Ta.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Aa(Ta.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Aa(Ta.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Aa(Ta.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Aa(Ta.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Of{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Aa(Ta.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Aa(Ta.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ia;switch(t.type){case"firstParty":return new La(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Aa(Ta.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=_f.get(t);e&&(ga("ComponentProvider","Removing Datastore"),_f.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Df{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Df(this.firestore,t,this._query)}}class xf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xf(this.firestore,t,this._key)}}class Pf extends Df{constructor(t,e,n){super(t,e,yu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xf(this.firestore,null,new qa(t))}withConverter(t){return new Pf(this.firestore,t,this._path)}}function Mf(t,e,...n){if(t=(0,zn.getModularInstance)(t),If("collection","path",e),t instanceof Of){const r=Va.fromString(e,...n);return kf(r),new Pf(t,null,r)}{if(!(t instanceof xf||t instanceof Pf))throw new Aa(Ta.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Va.fromString(e,...n));return kf(r),new Pf(t.firestore,null,r)}}function Uf(t,e,...n){if(t=(0,zn.getModularInstance)(t),1===arguments.length&&(e=xa.V()),If("doc","path",e),t instanceof Of){const r=Va.fromString(e,...n);return Cf(r),new xf(t,null,new qa(r))}{if(!(t instanceof xf||t instanceof Pf))throw new Aa(Ta.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Va.fromString(e,...n));return Cf(r),new xf(t.firestore,t instanceof Pf?t.converter:null,new qa(r))}}
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
class Ff{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Oh(this,"async_queue_retry"),this.Xa=()=>{const t=Lh();t&&ga("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=Lh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Lh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new Sa;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Za(t))throw t;ga("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;throw ma("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const r=ef.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(r),r}eu(){this.Ha&&wa()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class Bf extends Of{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ff,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jf(this),this._firestoreClient.terminate()}}function Vf(t){return t._firestoreClient||jf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jf(t){var e,n,r;const i=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",l=t._persistenceKey,new _l(o,a,l,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Sf(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,l,u;t._firestoreClient=new yf(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
class $f{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $f(yl.fromBase64String(t))}catch(t){throw new Aa(Ta.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new $f(yl.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class qf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Aa(Ta.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $a(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Gf{constructor(t){this._methodName=t}}
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
 */class zf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Aa(Ta.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Aa(Ta.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pa(this._lat,t._lat)||Pa(this._long,t._long)}}
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
 */const Kf=/^__.*__$/;class Hf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new gc(t,this.data,this.fieldMask,e,this.fieldTransforms):new pc(t,this.data,e,this.fieldTransforms)}}function Qf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wa()}}class Wf{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Wf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.cu({path:n,hu:!1});return r.Pu(t),r}Iu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return od(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(0===t.length)throw this.Eu("Document fields must not be empty");if(Qf(this.uu)&&Kf.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Xf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Rh(t)}Ru(t,e,n,r=!1){return new Wf({uu:t,methodName:e,Au:n,path:$a.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jf(t){const e=t._freezeSettings(),n=Rh(t._databaseId);return new Xf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yf(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);nd("Data must be an object, but it was:",o,r);const a=td(r,o);let l,u;if(s.merge)l=new gl(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=rd(e,r,n);if(!o.contains(i))throw new Aa(Ta.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ad(t,i)||t.push(i)}l=new gl(t),u=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,u=o.fieldTransforms;return new Hf(new Vl(a),l,u)}function Zf(t,e){if(ed(t=(0,zn.getModularInstance)(t)))return nd("Unsupported field value:",e,t),td(t,e);if(t instanceof Gf)return function(t,e){if(!Qf(e.uu))throw e.Eu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Eu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&4!==e.uu)throw e.Eu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Zf(i,e.Tu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,zn.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Hu(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ua.fromDate(t);return{timestampValue:Nc(e.serializer,n)}}if(t instanceof Ua){const n=new Ua(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Nc(e.serializer,n)}}if(t instanceof zf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof $f)return{bytesValue:Lc(e.serializer,t._byteString)};if(t instanceof xf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Dc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Eu(`Unsupported field value: ${Nf(t)}`)}(t,e)}function td(t,e){const n={};return ul(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ll(t,((t,r)=>{const i=Zf(r,e.lu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function ed(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ua||t instanceof zf||t instanceof $f||t instanceof xf||t instanceof Gf)}function nd(t,e,n){if(!ed(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Nf(n);throw"an object"===r?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}var r}function rd(t,e,n){if((e=(0,zn.getModularInstance)(e))instanceof qf)return e._internalPath;if("string"==typeof e)return sd(t,e);throw od("Field path arguments must be of type string or ",t,!1,void 0,n)}const id=new RegExp("[~\\*/\\[\\]]");function sd(t,e,n){if(e.search(id)>=0)throw od(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qf(...e.split("."))._internalPath}catch(r){throw od(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function od(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Aa(Ta.INVALID_ARGUMENT,a+t+l)}function ad(t,e){return t.some((t=>t.isEqual(e)))}
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
function ld(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function ud(t,e){const n=Lf(t.firestore,Bf),r=Uf(t),i=ld(t.converter,e);return cd(n,[Yf(Jf(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,oc.exists(!1))]).then((()=>r))}function cd(t,e){return function(t,e){const n=new Sa;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=pf(t);try{const t=await function(t,e){const n=ba(t),r=Ua.now(),i=e.reduce(((t,e)=>t.add(e.key)),$u());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Du(),l=$u();return n.Xi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=fc(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new gc(t.key,e,jl(e.value.mapValue),oc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Mu(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.fa[t.currentUser.toKey()];r||(r=new cl(Pa)),r=r.insert(e,n),t.fa[t.currentUser.toKey()]=r}(r,t.batchId,n),await ff(r,t.changes),await qh(r.remoteStore)}catch(t){const e=nf(t,"Failed to persist write");n.reject(e)}}(await Af(t),e,n))),n.promise}(Vf(t),e)}!function(t,e=!0){var n;n=$n.SDK_VERSION,fa=n,(0,$n._registerComponent)(new(0,qn.Component)("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Bf(new ka(t.getProvider("auth-internal")),new Oa(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Aa(Ta.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Il(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,$n.registerVersion)(ca,"4.1.0",t),(0,$n.registerVersion)(ca,"4.1.0","esm2017")}();var hd=i("iNWLi"),fd=i("6JpON");const dd=(0,jn.getAuth)(hd.app),pd=function(t,e){const n="object"==typeof t?t:(0,$n.getApp)(),r="string"==typeof t?t:e||"(default)",i=(0,$n._getProvider)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,zn.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,r={}){var i;const s=(t=Lf(t,Of))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ya("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=ha.MOCK_USER;else{e=(0,zn.createMockUserToken)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Aa(Ta.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ha(s)}t._authCredentials=new Ca(new _a(e,n))}}(i,...t)}return i}(hd.app),gd=async t=>{(0,jn.onAuthStateChanged)(dd,(async e=>{if(e){const n=e.email;try{return(await ud(Mf(pd,n),t)).id}catch(t){const e=t.message;fd.Notify.failure(`Error: ${e}`)}}else fd.Notify.info("Please Sign-In/Sign-Up")}))};jn=i("gQOBw"),hd=i("iNWLi");const md=(0,(jn=i("gQOBw")).getAuth)(hd.app),yd={body:document.querySelector("body"),modal:document.getElementById("modal"),modalInner:document.getElementById("modal-inner"),modalTitle:document.getElementById("modal-title"),modalAuthor:document.getElementById("modal-author"),modalDescr:document.getElementById("modal-description"),modalImg:document.getElementById("modal-image"),modalClose:document.getElementById("modal-close-btn"),amazonLink:document.getElementById("amazon-link"),appleLink:document.getElementById("apple-link"),barnesLink:document.getElementById("barnes-link"),addToList:document.getElementById("modal-add-to-list"),modalGreetings:document.getElementById("modal-greetings-text"),books:document.getElementById("best-sellers-container")},vd="Add to shopping list",wd="Remove from the shopping list";let Ed,bd={},Td=!1;const Ad=t=>{yd.modal.classList.add("modal-js"),yd.body.classList.remove("no-scroll-js"),yd.modalClose.removeEventListener("click",Ad),document.removeEventListener("keydown",_d),yd.addToList.removeEventListener("click",Id),yd.modal.removeEventListener("click",Sd)},Sd=t=>{t.target===t.currentTarget&&(Ad(),yd.modalClose.removeEventListener("click",Ad),document.removeEventListener("keydown",_d),yd.addToList.removeEventListener("click",Id),yd.modal.removeEventListener("click",Sd))},_d=t=>{"Escape"===t.key&&(Ad(),yd.modalClose.removeEventListener("click",Ad),document.removeEventListener("keydown",_d),yd.addToList.removeEventListener("click",Id),yd.modal.removeEventListener("click",Sd))},Id=()=>{Td?(Fn(Ed),yd.addToList.textContent=vd,yd.modalGreetings.classList.add("modal-greetings-text-js"),Td=!1):(Bn(bd),gd(bd),yd.addToList.textContent=wd,yd.modalGreetings.classList.remove("modal-greetings-text-js"),Td=!0)};yd.books.addEventListener("click",(t=>{if(t.preventDefault(),(0,jn.onAuthStateChanged)(md,(t=>{t?(yd.addToList.disabled=!1,yd.addToList.style.cursor="pointer"):(yd.addToList.disabled=!0,yd.addToList.style.cursor="not-allowed")})),!t.target.closest(".book-item"))return;yd.modalClose.addEventListener("click",Ad),document.addEventListener("keydown",_d),yd.addToList.addEventListener("click",Id),yd.modal.addEventListener("click",Sd);const e=t.target.closest(".book-item");var n;bd={id:e.querySelector("._link").dataset.id,title:e.dataset.title,img:e.dataset.image,author:e.dataset.author,description:e.dataset.description,amazonLink:e.dataset.linkurlamazon,appleLink:e.dataset.linkurlapple,barnesLink:e.dataset.linkurlbarnes,listname:e.dataset.listname},yd.modalTitle.textContent=bd.title,yd.modalAuthor.textContent=bd.author,yd.modalDescr.textContent=bd.description,yd.modalImg.src=bd.img,yd.amazonLink.href=bd.amazonLink,yd.appleLink.href=bd.appleLink,yd.barnesLink.href=bd.barnesLink,Ed=bd.id,n=bd.id,Td=Un().find((t=>t.id===n)),Td?(yd.addToList.textContent=wd,yd.modalGreetings.classList.remove("modal-greetings-text-js")):(yd.addToList.textContent=vd,yd.modalGreetings.classList.add("modal-greetings-text-js")),yd.body.classList.add("no-scroll-js"),yd.modal.classList.toggle("modal-js")}));var Cd=i("3lA3w"),kd=i("cfOGF"),Nd=i("euqRf");(0,Nd.checkUserIsAuth)(),Cd.refs.buttonsSignUp[0].addEventListener("click",kd.openModal),Cd.refs.modalAuth.addEventListener("click",kd.onClickModal);const Ld=()=>{Cd.refs.buttonsLogOut[0].classList.toggle("hidden")};Cd.refs.modalAuth.addEventListener("click",kd.onClickModal),Cd.refs.authForm.addEventListener("submit",(t=>{t.preventDefault();const{name:e,email:n,password:r}={name:t.currentTarget.name.value,email:t.currentTarget.email.value,password:t.currentTarget.password.value};t.target.children[0].classList.contains("js_form_sign_up")?(0,Nd.registration)(n,r,e):(0,Nd.authorization)(n,r)})),Cd.refs.buttonsUser.forEach((t=>t.addEventListener("click",Ld))),Cd.refs.buttonsLogOut.forEach((t=>t.addEventListener("click",Nd.onLogOut)));const Rd=document.querySelector(".go-top");Rd.hidden=!0;const Od=()=>{window.scrollY>0&&(window.scrollBy(0,-82),setTimeout(Od,0))};window.addEventListener("scroll",(()=>{const t=window.scrollY,e=document.documentElement.clientHeight;Rd.hidden=!(5*t>=e)})),Rd.addEventListener("click",Od);const Dd=document.querySelector(".support-ukraine__btn"),xd=document.querySelector(".support-ukraine__list"),Pd=document.querySelector(".support-ukraine");Dd.addEventListener("click",(()=>{xd.classList.toggle("open"),Pd.classList.toggle("open"),Dd.classList.toggle("open")}));const Md=document.querySelector(".theme-switcher"),Ud=document.querySelector("body"),Fd=localStorage.getItem("theme"),Bd=()=>{Ud.classList.replace("qq","dark-theme"),localStorage.setItem("theme","dark-theme")},Vd=()=>{Ud.classList.replace("dark-theme","qq"),localStorage.setItem("theme","qq")};"qq"!==Fd&&null!==Fd||Vd(),"dark-theme"===Fd&&Bd(),Md.addEventListener("change",(t=>{Ud.classList.contains("qq")?Bd():Vd()}));var jd;jd=JSON.parse('[{"title":"Save the Children","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Save_the_Children.png","url":"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{"title":"Project HOPE","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/ho.png","url":"https://www.projecthope.org/country/ukraine/"},{"title":"UNITED24","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/United24.png","url":"https://u24.gov.ua/uk"},{"title":"International Medical Corps","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Internation_medical_corps.png","url":"https://internationalmedicalcorps.org/country/ukraine/"},{"title":"Medicins Sans Frontieres","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Medicins_sans_frontieres.png","url":"https://www.msf.org/ukraine"},{"title":"RAZOM","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Razom.png","url":"https://www.razomforukraine.org/"},{"title":"Action against hunger","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Action_against_hunger.png","url":"https://www.actionagainsthunger.org/location/europe/ukraine/"},{"title":"World vision","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/World_vision.png","url":"https://www.wvi.org/emergencies/ukraine"},{"title":"Serhiy Prytula Charity Foundation","img":"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/pr.png","url":"https://prytulafoundation.org/en"}]');document.querySelector(".support-ukraine__list").innerHTML=e(jd).map((({title:t,url:e,img:n})=>`\n        <li class='support-ukraine__item'>\n            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${e}'>\n                <img class='fonds-img' src="${n}" alt="${t}">\n            </a>\n        </li>`)).join(""),i("kvC6y");Ln.addEventListener("click",(t=>{if(t.target.classList.contains("see_more")){t.preventDefault();const e=document.querySelector(".categories__list").getElementsByClassName("categories__link"),n=Array.from(e);for(let e=0;e<n.length;e++){const r=n[e];r.classList.remove("active__link"),t.target.dataset.name===r.innerText&&r.classList.add("active__link")}const r=t.target.dataset.name.split(" ");r.pop();const i=t.target.dataset.name.split(" ")[t.target.dataset.name.split(" ").length-1];Nn(t.target.dataset.name).then((t=>{kn.classList.add("no-change"),kn.innerHTML=`${r.join(" ")}&nbsp\n                <span class="title_book">${i}</span>`,Ln.innerHTML=u(t),document.querySelector("#best-sellers-container").scrollIntoView({behavior:"smooth",block:"start"})}))}}))}();
//# sourceMappingURL=index.9f5eede4.js.map
