import{a as C,t as M}from"../chunks/disclose-version.CKEsJ2m3.js";import{h as y,v as N,A as S,x as L,B as $,C as T,y as H,D as O,z,g as v,s as B,F as D,G as g,H as l,I as j}from"../chunks/runtime.SaGW6d1T.js";import{s as K}from"../chunks/render.i1hXfdHj.js";import{p as P,b as d}from"../chunks/this.7zOZkvl7.js";import{b as x}from"../chunks/paths.BZlELdhr.js";function E(e,r,a,t){var i=e.__attributes??(e.__attributes={});if(N){i[r]=e.getAttribute(r);return}i[r]!==(i[r]=a)&&(a==null?e.removeAttribute(r):typeof a!="string"&&F(e).includes(r)?e[r]=a:e.setAttribute(r,a))}var w=new Map;function F(e){var r=w.get(e.nodeName);if(r)return r;w.set(e.nodeName,r=[]);for(var a,t=y(e),i=Element.prototype;i!==t;){a=S(t);for(var o in a)a[o].set&&r.push(o);t=y(t)}return r}var G=M(' <div id="map-container" class="svelte-1kpeuij"><img class="map svelte-1kpeuij" id="map" alt=""> <img class="map svelte-1kpeuij" id="map-marker" alt=""> <form id="form" class="wrong"><input type="text" id="input" autocomplete="off" placeholder="Kirjuta siia nimi" class="svelte-1kpeuij"></form> <p id="hint" class="svelte-1kpeuij"> </p></div>',1);function Q(e,r){L(r,!0);let a,t,i="",o;const m={"Ahja jõgi":0,"Elva jõgi":0,"Endla järv":0,"Erimistu järv":0,"Halliste jõgi":0,"Jägala jõgi":0,"Kahala järv":0,Karujärv:0,"Kassari jõgi":0,"Keila jõgi":0,"Koosa järv":0,"Kunda jõgi":0,"Kuremaa järv":0,"Mullutu Suurlaht":0,"Narva jõgi":0,"Narva veehoidla":0,"Navesti jõgi":0,"Paunküla veehoidla":0,"Pedja jõgi":0,"Peipsi järv":0,"Pirita jõgi":0,"Piusa jõgi":0,"Purtse jõgi":0,"Pärnu jõgi":0,"Põltsamaa jõgi":0,Pühajärv:0,"Raudna jõgi":0,Saadjärv:0,"Sauga jõgi":0,"Sutlepa meri":0,"Suur Emajõgi":0,"Tamula järv":0,"Tõhela järv":0,"Vagula järv":0,Valgejõgi:0,Veisjärv:0,"Vigala jõgi":0,"Väike-Emajõgi":0,"Võhandu jõgi":0,Võrtsjärv:0,"Õhne jõgi":0,"Ülemiste järv":0},f=()=>Object.keys(m)[Math.floor(Math.random()*Object.keys(m).length)];let p=$(P(f()));T(()=>{a.focus(),a.addEventListener("blur",()=>{setTimeout(()=>{a.focus()},0)}),t.addEventListener("submit",s=>{a.value.toLowerCase()===v(p).toLowerCase()?(a.style.backgroundColor="#70e071",B(p,P(f()))):a.style.backgroundColor="#f56e6e",a.value=""})}),D();var c=G(),h=H(c),_=g(h),k=l(_);E(k,"src",`${x??""}/veekogud/Kaart.png`);var n=g(k,2);d(n,s=>o=s,()=>o);var u=g(n,2),V=l(u);d(V,s=>a=s,()=>a),j(u),d(u,s=>t=s,()=>t);var b=g(u,2),A=l(b,!0);j(b),j(_),O(()=>{K(h,`${v(p)??""} `),E(n,"src",`${x??""}/veekogud/${v(p)??""}.png`),K(A,i)}),C(e,c),z()}export{Q as component};
