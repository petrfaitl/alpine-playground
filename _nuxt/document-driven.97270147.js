import h from"./DocumentDrivenEmpty.d646bb2f.js";import P from"./ContentRenderer.ab5ef586.js";import x from"./DocumentDrivenNotFound.0f6d95e9.js";import{k as R,d as _,G as g,P as k,i as C,H as L,I as B,r as N,J as p,K as T,L as b,M as d,N as S,O as j,S as A,T as D,Q as E,R as w,U as u,V as H,W as O,b as m,c as $,g as f,w as y,X as v}from"./entry.8e224981.js";import"./ContentRendererMarkdown.b50c0a62.js";const q=_({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,e){const t=R(),o=g(k),a=o===C()?L():o,s=B(()=>u(n.name)??a.meta.layout??"default"),r=N();return e.expose({layoutRef:r}),()=>{const l=t.deferHydration(),c=s.value&&s.value in p,i=a.meta.layoutTransition??T;return b(D,c&&i,{default:()=>d(A,{suspensible:!0,onResolve:()=>{j(l)}},{default:()=>d(I,{layoutProps:S(e.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!n.name,hasTransition:!!i},e.slots)})}).default()}}}),I=_({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(n,e){const t=n.name;return n.shouldProvide&&E(w,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,a;return!t||typeof t=="string"&&!(t in p)?(a=(o=e.slots).default)==null?void 0:a.call(o):d(p[t],n.layoutProps,e.slots)}}}),M={class:"document-driven-page"},Q=_({__name:"document-driven",setup(n){const{page:e,layout:t}=H();return e.value,O(e),(o,a)=>{const s=h,r=P,l=x,c=q;return m(),$("div",M,[f(c,{name:u(t)||"default"},{default:y(()=>[u(e)?(m(),v(r,{key:u(e)._id,value:u(e)},{empty:y(({value:i})=>[f(s,{value:i},null,8,["value"])]),_:1},8,["value"])):(m(),v(l,{key:1}))]),_:1},8,["name"])])}}});export{Q as default};