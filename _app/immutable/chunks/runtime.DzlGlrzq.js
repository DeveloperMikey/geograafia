var Dn=Array.isArray,kn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,In=Object.prototype,Pn=Array.prototype,$t=Object.getPrototypeOf;const bn=()=>{};function Cn(t){return t()}function Zt(t){for(var r=0;r<t.length;r++)t[r]()}const E=2,dt=4,Z=8,st=16,T=32,W=64,tt=128,k=256,V=512,y=1024,S=2048,M=4096,b=8192,C=16384,Wt=32768,yt=65536,Fn=1<<17,zt=1<<19,Et=1<<20,ct=Symbol("$state"),qn=Symbol("legacy props"),Ln=Symbol("");function wt(t){return t===this.v}function Jt(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Mn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function Bn(){z=!0}const Hn=1,Vn=2,Gn=4,Kn=8,$n=16,Zn=1,Wn=2,ln="[",sn="[!",un="]",Tt={},zn=Symbol();function ut(t,r){var n={f:0,v:t,reactions:null,equals:wt,version:0};return n}function Jn(t){return on(ut(t))}function Qn(t,r=!1){var e;const n=ut(t);return r||(n.equals=mt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(n),n}function on(t){return a!==null&&a.f&E&&(m===null?mn([t]):m.push(t)),t}function Xn(t,r){return a!==null&&it()&&a.f&(E|st)&&(m===null||!m.includes(t))&&en(),an(t,r)}function an(t,r){return t.equals(r)||(t.v=r,t.version=jt(),gt(t,S),it()&&o!==null&&o.f&y&&!(o.f&T)&&(v!==null&&v.includes(t)?(g(o,S),X(o)):A===null?Tn([t]):A.push(t))),r}function gt(t,r){var n=t.reactions;if(n!==null)for(var e=it(),l=n.length,s=0;s<l;s++){var u=n[s],i=u.f;i&S||!e&&u===o||(g(u,r),i&(y|k)&&(i&E?gt(u,M):X(u)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function tr(t){O=t}let w;function F(t){if(t===null)throw At(),Tt;return w=t}function nr(){return F(N(w))}function rr(t){if(O){if(N(w)!==null)throw At(),Tt;w=t}}function er(t=1){if(O){for(var r=t,n=w;r--;)n=N(n);w=n}}function lr(){for(var t=0,r=w;;){if(r.nodeType===8){var n=r.data;if(n===un){if(t===0)return r;t-=1}else(n===ln||n===sn)&&(t+=1)}var e=N(r);r.remove(),r=e}}var vt,St,xt;function sr(){if(vt===void 0){vt=window;var t=Element.prototype,r=Node.prototype;St=_t(r,"firstChild").get,xt=_t(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function N(t){return xt.call(t)}function ur(t,r){if(!O)return rt(t);var n=rt(w);if(n===null)n=w.appendChild(nt());else if(r&&n.nodeType!==3){var e=nt();return n==null||n.before(e),F(e),e}return F(n),n}function or(t,r){if(!O){var n=rt(t);return n instanceof Comment&&n.data===""?N(n):n}return w}function ar(t,r=1,n=!1){let e=O?w:t;for(var l;r--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var u=nt();return e===null?l==null||l.after(u):e.before(u),F(u),u}return F(e),e}function ir(t){t.textContent=""}function fn(t){var r=E|S;o===null?r|=k:o.f|=Et;var n=a!==null&&a.f&E?a:null;const e={children:null,ctx:f,deps:null,equals:wt,f:r,fn:t,reactions:null,v:null,version:0,parent:n??o};return n!==null&&(n.children??(n.children=[])).push(e),e}function fr(t){const r=fn(t);return r.equals=mt,r}function Rt(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&E?ot(e):D(e)}}}function _n(t){for(var r=t.parent;r!==null;){if(!(r.f&E))return r;r=r.parent}return null}function Ot(t){var r,n=o;$(_n(t));try{Rt(t),r=Ut(t)}finally{$(n)}return r}function Dt(t){var r=Ot(t),n=(R||t.f&k)&&t.deps!==null?M:y;g(t,n),t.equals(r)||(t.v=r,t.version=jt())}function ot(t){Rt(t),Y(t,0),g(t,C),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){o===null&&a===null&&tn(),a!==null&&a.f&k&&Xt(),at&&Qt()}function cn(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function j(t,r,n,e=!0){var l=(t&W)!==0,s=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:r,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var i=I;try{pt(!0),Q(u),u.f|=Wt}catch(_){throw D(u),_}finally{pt(i)}}else r!==null&&X(u);var p=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!p&&!l&&e&&(s!==null&&cn(u,s),a!==null&&a.f&E)){var h=a;(h.children??(h.children=[])).push(u)}return u}function _r(t){kt();var r=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(r){var n=f;(n.e??(n.e=[])).push({fn:t,effect:o,reaction:a})}else{var e=Nt(t);return e}}function cr(t){return kt(),vn(t)}function vr(t){const r=j(W,t,!0);return(n={})=>new Promise(e=>{n.outro?dn(r,()=>{D(r),e(void 0)}):(D(r),e(void 0))})}function Nt(t){return j(dt,t,!1)}function vn(t){return j(Z,t,!0)}function pr(t){return pn(t)}function pn(t,r=0){return j(Z|st|r,t,!0)}function hr(t,r=!0){return j(Z|T,t,!0,r)}function It(t){var r=t.teardown;if(r!==null){const n=at,e=a;ht(!0),K(null);try{r.call(null)}finally{ht(n),K(e)}}}function Pt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)ot(r[n])}}function bt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;D(n,r),n=e}}function hn(t){for(var r=t.first;r!==null;){var n=r.next;r.f&T||D(r),r=n}}function D(t,r=!0){var n=!1;if((r||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}n=!0}bt(t,r&&!n),Pt(t),Y(t,0),g(t,C);var u=t.transitions;if(u!==null)for(const p of u)p.stop();It(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function dn(t,r){var n=[];Ft(t,n,!0),yn(n,()=>{D(t),r&&r()})}function yn(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function Ft(t,r,n){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&r.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&T)!==0;Ft(e,r,s?n:!1),e=l}}}function dr(t){qt(t,!0)}function qt(t,r){if(t.f&b){U(t)&&Q(t),t.f^=b;for(var n=t.first;n!==null;){var e=n.next,l=(n.f&yt)!==0||(n.f&T)!==0;qt(n,l?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let G=!1,et=[];function Lt(){G=!1;const t=et.slice();et=[],Zt(t)}function yr(t){G||(G=!0,queueMicrotask(Lt)),et.push(t)}function En(){G&&Lt()}const Yt=0,wn=1;let B=!1,H=Yt,q=!1,L=null,I=!1,at=!1;function pt(t){I=t}function ht(t){at=t}let x=[],P=0;let a=null;function K(t){a=t}let o=null;function $(t){o=t}let m=null;function mn(t){m=t}let v=null,d=0,A=null;function Tn(t){A=t}let Mt=1,R=!1,f=null;function jt(){return++Mt}function it(){return!z||f!==null&&f.l===null}function U(t){var u,i;var r=t.f;if(r&S)return!0;if(r&M){var n=t.deps,e=(r&k)!==0;if(n!==null){var l;if(r&V){for(l=0;l<n.length;l++)((u=n[l]).reactions??(u.reactions=[])).push(t);t.f^=V}for(l=0;l<n.length;l++){var s=n[l];if(U(s)&&Dt(s),e&&o!==null&&!R&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!e||o!==null&&!R)&&g(t,y)}return!1}function gn(t,r){for(var n=r;n!==null;){if(n.f&tt)try{n.fn(t);return}catch{n.f^=tt}n=n.parent}throw B=!1,t}function An(t){return(t.f&C)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,r,n,e){if(B){if(n===null&&(B=!1),An(r))throw t;return}n!==null&&(B=!0);{gn(t,r);return}}function Ut(t){var ft;var r=v,n=d,e=A,l=a,s=R,u=m,i=f,p=t.f;v=null,d=0,A=null,a=p&(T|W)?null:t,R=!I&&(p&k)!==0,m=null,f=t.ctx;try{var h=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,d),_!==null&&d>0)for(_.length=d+v.length,c=0;c<v.length;c++)_[d+c]=v[c];else t.deps=_=v;if(!R)for(c=d;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&d<_.length&&(Y(t,d),_.length=d);return h}finally{v=r,d=n,A=e,a=l,R=s,m=u,f=i}}function Sn(t,r){let n=r.reactions;if(n!==null){var e=n.indexOf(t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&E&&(v===null||!v.includes(r))&&(g(r,M),r.f&(k|V)||(r.f^=V),Y(r,0))}function Y(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)Sn(t,n[e])}function Q(t){var r=t.f;if(!(r&C)){g(t,y);var n=o,e=f;o=t;try{r&st?hn(t):bt(t),Pt(t),It(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.version=Mt}catch(s){J(s,t,n,e||t.ctx)}finally{o=n}}}function Bt(){if(P>1e3){P=0;try{nn()}catch(t){if(L!==null)J(t,L,null);else throw t}}P++}function Ht(t){var r=t.length;if(r!==0){Bt();var n=I;I=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&y||(l.f^=y);var s=[];Vt(l,s),xn(s)}}finally{I=n}}}function xn(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(C|b)))try{U(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Rn(){if(q=!1,P>1001)return;const t=x;x=[],Ht(t),q||(P=0,L=null)}function X(t){H===Yt&&(q||(q=!0,queueMicrotask(Rn))),L=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(W|T)){if(!(n&y))return;r.f^=y}}x.push(r)}function Vt(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,s=(l&T)!==0,u=s&&(l&y)!==0,i=n.next;if(!u&&!(l&b))if(l&Z){if(s)n.f^=y;else try{U(n)&&Q(n)}catch(c){J(c,n,null,n.ctx)}var p=n.first;if(p!==null){n=p;continue}}else l&dt&&e.push(n);if(i===null){let c=n.parent;for(;c!==null;){if(t===c)break t;var h=c.next;if(h!==null){n=h;continue t}c=c.parent}}n=i}for(var _=0;_<e.length;_++)p=e[_],r.push(p),Vt(p,r)}function Gt(t){var r=H,n=x;try{Bt();const l=[];H=wn,x=l,q=!1,Ht(n);var e=t==null?void 0:t();return En(),(x.length>0||l.length>0)&&Gt(),P=0,L=null,e}finally{H=r,x=n}}async function Er(){await Promise.resolve(),Gt()}function wr(t){var _;var r=t.f,n=(r&E)!==0;if(n&&r&C){var e=Ot(t);return ot(t),e}if(a!==null){m!==null&&m.includes(t)&&rn();var l=a.deps;v===null&&l!==null&&l[d]===t?d++:v===null?v=[t]:v.push(t),A!==null&&o!==null&&o.f&y&&!(o.f&T)&&A.includes(t)&&(g(o,S),X(o))}else if(n&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&E){var p=u;i=p,u=p.parent}else{var h=u;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return n&&(s=t,U(s)&&Dt(s)),t.v}function mr(t){const r=a;try{return a=null,t()}finally{a=r}}const On=~(S|M|y);function g(t,r){t.f=t.f&On|r}function Tr(t,r=!1,n){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!r&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function gr(t){const r=f;if(r!==null){const u=r.e;if(u!==null){var n=o,e=a;r.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];$(s.effect),K(s.reaction),Nt(s.fn)}}finally{$(n),K(e)}}f=r.p,r.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&ct in n&&lt(n)}}}function lt(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],r)}catch{}const n=$t(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Kt(n);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{sn as $,sr as A,rt as B,N as C,Tt as D,yt as E,tr as F,F as G,ln as H,nr as I,un as J,At as K,Ln as L,Yn as M,ir as N,kn as O,vr as P,nt as Q,In as R,ct as S,Pn as T,ut as U,jn as V,Xn as W,_t as X,zn as Y,wr as Z,Un as _,Kt as a,lr as a0,dr as a1,dn as a2,Nt as a3,vn as a4,yr as a5,cr as a6,Zt as a7,Cn as a8,Ar as a9,fn as aa,pr as ab,Zn as ac,Wn as ad,Jn as ae,Mn as af,Fn as ag,Gn as ah,mt as ai,T as aj,W as ak,Hn as al,Vn as am,Kn as an,qn as ao,fr as ap,Qn as aq,$n as ar,Gt as as,Er as at,Jt as au,mr as b,f as c,ur as d,Bn as e,pn as f,$t as g,O as h,hr as i,bn as j,D as k,z as l,w as m,er as n,or as o,Tr as p,gr as q,rr as r,ar as s,Nn as t,_r as u,K as v,$ as w,Dn as x,a as y,o as z};
