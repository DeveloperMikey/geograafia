var pe=Object.defineProperty;var X=r=>{throw TypeError(r)};var de=(r,e,t)=>e in r?pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var _=(r,e,t)=>de(r,typeof e!="symbol"?e+"":e,t),ge=(r,e,t)=>e.has(r)||X("Cannot "+t);var A=(r,e,t)=>(ge(r,e,"read from private field"),t?t.call(r):e.get(r)),W=(r,e,t)=>e.has(r)?X("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{j as Ce,h as J,i as K,k as ye,f as S,y as we,C as je,z as _e,s as ke,g as Ee,l as Te,R as De,a9 as Le,aa as ve,P as T,N as w,p as $e,u as Pe,a5 as ee,o as Ne,a6 as R,a8 as V,a7 as q}from"../chunks/runtime.B_0aSwUk.js";import{b as re,d as ze,a as te,t as he}from"../chunks/template.B-m1xSPR.js";import{p as me,i as Ie,b as ne}from"../chunks/this.BOF-KaJM.js";import{b as ae}from"../chunks/paths.Cjpw1cf0.js";function xe(r,e,t,a,s){var n=r,i="",l;Ce(()=>{if(i===(i=e()??"")){J&&K();return}l!==void 0&&(Te(l),l=void 0),i!==""&&(l=ye(()=>{if(J){S.data;for(var o=K(),c=o;o!==null&&(o.nodeType!==8||o.data!=="");)c=o,o=we(o);if(o===null)throw je(),_e;re(S,c),n=ke(o);return}var f=i+"",v=ze(f);re(Ee(v),v.lastChild),n.before(v)}))})}function se(r,e,t,a){var s=r.__attributes??(r.__attributes={});if(J){s[e]=r.getAttribute(e);return}s[e]!==(s[e]=t)&&(t==null?r.removeAttribute(e):typeof t!="string"&&Me(r).includes(e)?r[e]=t:r.setAttribute(e,t))}var ie=new Map;function Me(r){var e=ie.get(r.nodeName);if(e)return e;ie.set(r.nodeName,e=[]);for(var t,a=r,s=Element.prototype;s!==a;){t=Le(a);for(var n in t)t[n].set&&e.push(n);a=De(a)}return e}function C(){}C.prototype={diff:function(e,t){var a,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=s.callback;typeof s=="function"&&(n=s,s={});var i=this;function l(u){return u=i.postProcess(u,s),n?(setTimeout(function(){n(u)},0),!0):u}e=this.castInput(e,s),t=this.castInput(t,s),e=this.removeEmpty(this.tokenize(e,s)),t=this.removeEmpty(this.tokenize(t,s));var o=t.length,c=e.length,f=1,v=o+c;s.maxEditLength!=null&&(v=Math.min(v,s.maxEditLength));var p=(a=s.timeout)!==null&&a!==void 0?a:1/0,y=Date.now()+p,h=[{oldPos:-1,lastComponent:void 0}],d=this.extractCommon(h[0],t,e,0,s);if(h[0].oldPos+1>=c&&d+1>=o)return l(oe(i,h[0].lastComponent,t,e,i.useLongestToken));var m=-1/0,g=1/0;function k(){for(var u=Math.max(m,-f);u<=Math.min(g,f);u+=2){var j=void 0,L=h[u-1],$=h[u+1];L&&(h[u-1]=void 0);var O=!1;if($){var Z=$.oldPos-u;O=$&&0<=Z&&Z<o}var Q=L&&L.oldPos+1<c;if(!O&&!Q){h[u]=void 0;continue}if(!Q||O&&L.oldPos<$.oldPos?j=i.addToPath($,!0,!1,0,s):j=i.addToPath(L,!1,!0,1,s),d=i.extractCommon(j,t,e,u,s),j.oldPos+1>=c&&d+1>=o)return l(oe(i,j.lastComponent,t,e,i.useLongestToken));h[u]=j,j.oldPos+1>=c&&(g=Math.min(g,u-1)),d+1>=o&&(m=Math.max(m,u+1))}f++}if(n)(function u(){setTimeout(function(){if(f>v||Date.now()>y)return n();k()||u()},0)})();else for(;f<=v&&Date.now()<=y;){var D=k();if(D)return D}},addToPath:function(e,t,a,s,n){var i=e.lastComponent;return i&&!n.oneChangePerToken&&i.added===t&&i.removed===a?{oldPos:e.oldPos+s,lastComponent:{count:i.count+1,added:t,removed:a,previousComponent:i.previousComponent}}:{oldPos:e.oldPos+s,lastComponent:{count:1,added:t,removed:a,previousComponent:i}}},extractCommon:function(e,t,a,s,n){for(var i=t.length,l=a.length,o=e.oldPos,c=o-s,f=0;c+1<i&&o+1<l&&this.equals(a[o+1],t[c+1],n);)c++,o++,f++,n.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return f&&!n.oneChangePerToken&&(e.lastComponent={count:f,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=o,c},equals:function(e,t,a){return a.comparator?a.comparator(e,t):e===t||a.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t},castInput:function(e){return e},tokenize:function(e){return Array.from(e)},join:function(e){return e.join("")},postProcess:function(e){return e}};function oe(r,e,t,a,s){for(var n=[],i;e;)n.push(e),i=e.previousComponent,delete e.previousComponent,e=i;n.reverse();for(var l=0,o=n.length,c=0,f=0;l<o;l++){var v=n[l];if(v.removed)v.value=r.join(a.slice(f,f+v.count)),f+=v.count;else{if(!v.added&&s){var p=t.slice(c,c+v.count);p=p.map(function(y,h){var d=a[f+h];return d.length>y.length?d:y}),v.value=r.join(p)}else v.value=r.join(t.slice(c,c+v.count));c+=v.count,v.added||(f+=v.count)}}return n}var Oe=new C;function Ae(r,e,t){return Oe.diff(r,e,t)}function ue(r,e){var t;for(t=0;t<r.length&&t<e.length;t++)if(r[t]!=e[t])return r.slice(0,t);return r.slice(0,t)}function le(r,e){var t;if(!r||!e||r[r.length-1]!=e[e.length-1])return"";for(t=0;t<r.length&&t<e.length;t++)if(r[r.length-(t+1)]!=e[e.length-(t+1)])return r.slice(-t);return r.slice(-t)}function b(r,e,t){if(r.slice(0,e.length)!=e)throw Error("string ".concat(JSON.stringify(r)," doesn't start with prefix ").concat(JSON.stringify(e),"; this is a bug"));return t+r.slice(e.length)}function H(r,e,t){if(!e)return r+t;if(r.slice(-e.length)!=e)throw Error("string ".concat(JSON.stringify(r)," doesn't end with suffix ").concat(JSON.stringify(e),"; this is a bug"));return r.slice(0,-e.length)+t}function P(r,e){return b(r,e,"")}function I(r,e){return H(r,e,"")}function fe(r,e){return e.slice(0,Re(r,e))}function Re(r,e){var t=0;r.length>e.length&&(t=r.length-e.length);var a=e.length;r.length<e.length&&(a=r.length);var s=Array(a),n=0;s[0]=0;for(var i=1;i<a;i++){for(e[i]==e[n]?s[i]=s[n]:s[i]=n;n>0&&e[i]!=e[n];)n=s[n];e[i]==e[n]&&n++}n=0;for(var l=t;l<r.length;l++){for(;n>0&&r[l]!=e[n];)n=s[n];r[l]==e[n]&&n++}return n}var x="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",Ve=new RegExp("[".concat(x,"]+|\\s+|[^").concat(x,"]"),"ug"),M=new C;M.equals=function(r,e,t){return t.ignoreCase&&(r=r.toLowerCase(),e=e.toLowerCase()),r.trim()===e.trim()};M.tokenize=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t;if(e.intlSegmenter){if(e.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');t=Array.from(e.intlSegmenter.segment(r),function(n){return n.segment})}else t=r.match(Ve)||[];var a=[],s=null;return t.forEach(function(n){/\s/.test(n)?s==null?a.push(n):a.push(a.pop()+n):/\s/.test(s)?a[a.length-1]==s?a.push(a.pop()+n):a.push(s+n):a.push(n),s=n}),a};M.join=function(r){return r.map(function(e,t){return t==0?e:e.replace(/^\s+/,"")}).join("")};M.postProcess=function(r,e){if(!r||e.oneChangePerToken)return r;var t=null,a=null,s=null;return r.forEach(function(n){n.added?a=n:n.removed?s=n:((a||s)&&ce(t,s,a,n),t=n,a=null,s=null)}),(a||s)&&ce(t,s,a,null),r};function ce(r,e,t,a){if(e&&t){var s=e.value.match(/^\s*/)[0],n=e.value.match(/\s*$/)[0],i=t.value.match(/^\s*/)[0],l=t.value.match(/\s*$/)[0];if(r){var o=ue(s,i);r.value=H(r.value,i,o),e.value=P(e.value,o),t.value=P(t.value,o)}if(a){var c=le(n,l);a.value=b(a.value,l,c),e.value=I(e.value,c),t.value=I(t.value,c)}}else if(t)r&&(t.value=t.value.replace(/^\s*/,"")),a&&(a.value=a.value.replace(/^\s*/,""));else if(r&&a){var f=a.value.match(/^\s*/)[0],v=e.value.match(/^\s*/)[0],p=e.value.match(/\s*$/)[0],y=ue(f,v);e.value=P(e.value,y);var h=le(P(f,y),p);e.value=I(e.value,h),a.value=b(a.value,f,h),r.value=H(r.value,f,f.slice(0,f.length-h.length))}else if(a){var d=a.value.match(/^\s*/)[0],m=e.value.match(/\s*$/)[0],g=fe(m,d);e.value=I(e.value,g)}else if(r){var k=r.value.match(/\s*$/)[0],D=e.value.match(/^\s*/)[0],u=fe(k,D);e.value=P(e.value,u)}}var qe=new C;qe.tokenize=function(r){var e=new RegExp("(\\r?\\n)|[".concat(x,"]+|[^\\S\\n\\r]+|[^").concat(x,"]"),"ug");return r.match(e)||[]};var Y=new C;Y.tokenize=function(r,e){e.stripTrailingCr&&(r=r.replace(/\r\n/g,`
`));var t=[],a=r.split(/(\n|\r\n)/);a[a.length-1]||a.pop();for(var s=0;s<a.length;s++){var n=a[s];s%2&&!e.newlineIsToken?t[t.length-1]+=n:t.push(n)}return t};Y.equals=function(r,e,t){return t.ignoreWhitespace?((!t.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!t.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):t.ignoreNewlineAtEof&&!t.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),C.prototype.equals.call(this,r,e,t)};var Je=new C;Je.tokenize=function(r){return r.split(/(\S.+?[.!?])(?=\s+|$)/)};var be=new C;be.tokenize=function(r){return r.split(/([{}:;,]|\s+)/)};function F(r){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(r)}var N=new C;N.useLongestToken=!0;N.tokenize=Y.tokenize;N.castInput=function(r,e){var t=e.undefinedReplacement,a=e.stringifyReplacer,s=a===void 0?function(n,i){return typeof i>"u"?t:i}:a;return typeof r=="string"?r:JSON.stringify(G(r,null,null,s),s,"  ")};N.equals=function(r,e,t){return C.prototype.equals.call(N,r.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"),t)};function G(r,e,t,a,s){e=e||[],t=t||[],a&&(r=a(s,r));var n;for(n=0;n<e.length;n+=1)if(e[n]===r)return t[n];var i;if(Object.prototype.toString.call(r)==="[object Array]"){for(e.push(r),i=new Array(r.length),t.push(i),n=0;n<r.length;n+=1)i[n]=G(r[n],e,t,a,s);return e.pop(),t.pop(),i}if(r&&r.toJSON&&(r=r.toJSON()),F(r)==="object"&&r!==null){e.push(r),i={},t.push(i);var l=[],o;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&l.push(o);for(l.sort(),n=0;n<l.length;n+=1)o=l[n],i[o]=G(r[o],e,t,a,o);e.pop(),t.pop()}else i=r;return i}var U=new C;U.tokenize=function(r){return r.slice()};U.join=U.removeEmpty=function(r){return r};const E=(...r)=>{};var B=(r=>(r[r.Unknown=0]="Unknown",r[r.Hard=1]="Hard",r[r.Medium=2]="Medium",r[r.Easy=3]="Easy",r))(B||{});class He{constructor(e){_(this,"name");_(this,"state",0);_(this,"stateProgress",0);_(this,"time",0);_(this,"rate",(e,t)=>{if(E(`Rating card ${this.name}`),e)switch(E(`Input was wrong, current state: ${B[this.state]}`),this.state){case 0:this.state=1;break;case 1:this.stateProgress=0;break;case 2:this.stateProgress=0,this.state=1;break}else switch(E(`Input was correct, current state: ${B[this.state]}`),this.state){case 0:this.state=3;break;case 1:this.stateProgress+=1,this.stateProgress>3&&(this.state=2,this.stateProgress=0);break;case 2:this.stateProgress+=1,this.stateProgress>2&&!t&&(this.state=3,this.stateProgress=0);break}switch(this.state){case 1:this.time=Date.now()+30*1e3;break;case 2:this.time=Date.now()+60*1e3;break}E(`Card ${this.name} time: ${this.time} (${this.time-Date.now()})`)});this.name=e}}var z;class Fe{constructor(){W(this,z,ve(void 0));_(this,"cards",[]);_(this,"addCard",e=>{this.cards.push(new He(e))});_(this,"getNextCard",()=>{E(this.cards);const e=this.cards.filter(s=>s.time<=Date.now()&&s.state!==0&&s.state!==3);if(e.length>0){const s=e[Math.floor(Math.random()*e.length)];return this.current=s,E(`Got card ${s.name} from expired list`),s}const t=this.cards.filter(s=>s.state===0);if(t.length>0){const s=t[Math.floor(Math.random()*t.length)];return this.current=s,E(`Got card ${s.name} from unknown list`),s}const a=this.cards.filter(s=>s.state!==3);if(a.length>0){const s=a[Math.floor(Math.random()*a.length)];return this.current=s,E(`Got card ${s.name} from all cards`),s}return this.current=void 0,!1})}get current(){return T(A(this,z))}set current(e){w(A(this,z),me(e))}}z=new WeakMap;var Ge=he('<img class="map svelte-1kpeuij" id="map-marker" alt="">'),Ue=he('<div id="map-container" class="svelte-1kpeuij"><img class="map svelte-1kpeuij" id="map" alt=""> <!> <form id="form" class="wrong"><input type="text" id="input" autocomplete="off" placeholder="Kirjuta siia nimi" class="svelte-1kpeuij"></form> <p id="hint" class="svelte-1kpeuij"><!></p></div>');function Be(r,e){$e(e,!0);const t=new Fe;let a,s,n=ve(""),i=!1,l=!1;e.names.forEach(m=>{t.addCard(m)}),Pe(()=>{t.getNextCard(),a.focus(),a.addEventListener("blur",()=>{setTimeout(()=>{a.focus()},0)}),s.addEventListener("submit",m=>{if(a.value.length===0||t.current===void 0)return;const g=a.value.trim();if(a.value="",g.toLowerCase()===t.current.name.toLowerCase()){a.style.backgroundColor="#70e071",w(n,""),t.current.rate(l,i),l=!1,i=!1,t.getNextCard();return}const k=Ae(t.current.name,g,{ignoreCase:!0});k.filter(u=>u.added||u.removed).reduce((u,j)=>u+(j.count||0),0)<=2?(i=!0,a.style.backgroundColor="#ffe600",w(n,""),k.forEach(u=>{u.added?w(n,T(n)+`<span style="color: red; white-space: pre;">${u.value}</span>`):u.removed||w(n,T(n)+u.value)}),w(n,T(n)+" -> "),k.forEach(u=>{u.removed?w(n,T(n)+`<span style="color: green; white-space: pre;">${u.value}</span>`):u.added||w(n,T(n)+u.value)})):(a.style.backgroundColor="#f56e6e",!l&&!i?(w(n,t.current.name.charAt(0)+t.current.name.replace(/[^ ]/g,"_").slice(1)),l=!0):w(n,me(t.current.name)))})});var o=Ue(),c=R(o),f=V(c,2);{var v=m=>{var g=Ge();ee(()=>se(g,"src",`${ae??""}/maps/${e.path??""}/${t.current.name??""}.png`)),te(m,g)};Ie(f,m=>{t.current!==void 0&&m(v)})}var p=V(f,2),y=R(p);ne(y,m=>a=m,()=>a),q(p),ne(p,m=>s=m,()=>s);var h=V(p,2),d=R(h);xe(d,()=>T(n)),q(h),q(o),ee(()=>se(c,"src",`${ae??""}/maps/${e.path??""}/Kaart.png`)),te(r,o),Ne()}function er(r){Be(r,{path:"veekogud",names:["Ahja jõgi","Elva jõgi","Endla järv","Erimistu järv","Halliste jõgi","Jägala jõgi","Kahala järv","Karujärv","Kassari jõgi","Keila jõgi","Koosa järv","Kunda jõgi","Kuremaa järv","Mullutu Suurlaht","Narva jõgi","Narva veehoidla","Navesti jõgi","Paunküla veehoidla","Pedja jõgi","Peipsi järv","Pirita jõgi","Piusa jõgi","Purtse jõgi","Pärnu jõgi","Põltsamaa jõgi","Pühajärv","Raudna jõgi","Saadjärv","Sauga jõgi","Sutlepa meri","Suur Emajõgi","Tamula järv","Tõhela järv","Vagula järv","Valgejõgi","Veisjärv","Vigala jõgi","Väike-Emajõgi","Võhandu jõgi","Võrtsjärv","Õhne jõgi","Ülemiste järv"]})}export{er as component};
