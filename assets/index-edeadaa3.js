import{d as B,dD as V,r as S,eg as z,dF as E,dG as $,o as f,f as N,j as s,e as n,w as d,e4 as y,n as t,dq as o,e6 as _,dX as k,dH as T,dZ as i,t as D,em as F,b as Y,_ as v,k as b,g as q,d$ as L,v as U,dU as j}from"./index-79e930ed.js";const G=["onClick"],H={class:"yk-modal-footer-option"},I=B({name:"YkModal",__name:"modal",props:{title:{default:""},size:{default:"large"},modelValue:{type:Boolean,default:!1},to:{default:"body"},scrollable:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1},showMask:{type:Boolean,default:!0},escapable:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},emits:["onCloseModal","update:modelValue","onSubmit"],setup(h,{emit:c}){const l=h,a=V("modal"),r=S(document.body),u=()=>{c("update:modelValue",!1),c("onCloseModal")};z(()=>{document.body.removeEventListener("keydown",p),document.body.style.overflow=""});const m=()=>{l.modelValue?(l.escapable&&document.body.addEventListener("keydown",p),!l.scrollable&&(document.body.style.overflow="hidden")):document.body.style.overflow="",l.to&&(r.value=C(l.to||"body"))};E(l,()=>{m()}),$(()=>{m()});const p=e=>{e.key==="Escape"&&u()},w=()=>{l.closeable&&c("update:modelValue",!1)},C=e=>document.querySelector(e)??document.body,M=()=>{c("onSubmit")};return(e,Z)=>{const g=U;return f(),N(L,{to:r.value},[s("div",null,[n(k,{name:"fade",appear:""},{default:d(()=>[y(s("div",{class:t([o(a)("mask"),o(a)({maskBg:e.showMask})])},null,2),[[_,e.modelValue]])]),_:1}),n(k,{name:"zoom-in-top",appear:""},{default:d(()=>[y(s("div",{class:t(o(a)("modal")),onClick:T(w,["self"])},[s("div",{class:t([o(a)("main"),o(a)({shadow:!l.showMask,size:e.size==="small"})])},[s("div",{class:t(o(a)("header"))},[i(e.$slots,"header",{},()=>[s("div",{class:t(o(a)("title"))},D(e.title),3)]),s("div",{class:t(o(a)("close")),onClick:u},[n(o(F))],2)],2),s("div",{class:t(o(a)("content"))},[i(e.$slots,"default")],2),e.showFooter?(f(),Y("div",{key:0,class:t(o(a)("footer"))},[s("div",H,[i(e.$slots,"footer",{},()=>[n(g,{size:"m"},{default:d(()=>[n(o(v),{type:"secondary",onClick:u},{default:d(()=>[b(" 取消 ")]),_:1}),n(o(v),{onClick:M},{default:d(()=>[b("确定")]),_:1})]),_:1})])])],2)):q("",!0)],2)],10,G),[[_,e.modelValue]])]),_:3})])],8,["to"])}}}),X=j(I),J=X;export{X as Y,J as _};
