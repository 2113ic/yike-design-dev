import{d as O,a2 as Y,ae as H,o as f,b as _,f as I,P as U,Z as y,n as E,c as S,am as $,i as F,a5 as te,g as D,e as A,t as ne,w as W,X as se,ao as x,ap as le,a0 as oe,p as ee,a as de,F as L,h as V,aq as G,a3 as re,ak as ce,a4 as P,ar as R,T as J,r as ie,a7 as ue,as as pe,a9 as fe,z as ye}from"./index-9ece1d16.js";import{Y as he}from"./index-095437b2.js";import{a as ve,b as ke,e as me}from"./index-8374a2a3.js";import{I as ge}from"./index-3acc3654.js";const z=Symbol("TreeInjectionKey"),X=Symbol("TreeNodeInjectionKey"),Ke=O({__name:"node-switcher",setup(p){const t=Y("tree-node-switcher"),a=H(X),d=H(z);return(e,r)=>{var v,B,m,b;return f(),_("span",{class:E(y(t)([(v=y(a))!=null&&v.expanded.value?"rotate":"",(B=y(a))!=null&&B.isLeaf?"leaf":""])),onClick:r[0]||(r[0]=N=>{var K,k,i,c;return(c=(K=y(d))==null?void 0:K.onExpand)==null?void 0:c.call(K,(k=y(a))==null?void 0:k.option.key,(i=y(a))==null?void 0:i.expanded.value)})},[(f(),I(U((b=(m=y(d))==null?void 0:m.expandIcon)==null?void 0:b.call(m))))],2)}}});function j(p){var a;let t=[];return(a=p.children)==null||a.forEach(d=>{t.push(d.key),d.children&&d.children.length>0&&(t=t.concat(j(d)))}),t}const _e=O({__name:"tree-node",props:{label:{},node:{}},setup(p){const t=p,a=Y("tree-node"),d=S(()=>a()),e=H(z),r=H(X),v=S(()=>{var i;return!!((i=e==null?void 0:e.selectedKeys)!=null&&i.includes(t.node.key))}),B=S(()=>a("content",[e!=null&&e.blockNode?"block":void 0,v.value?"active":void 0])),m=Object.assign({fold:()=>$(ve),unfold:()=>$(ke),file:()=>$(ge)},e==null?void 0:e.fileIcons,t.node.icons),b=S(()=>e!=null&&e.fileTree?r!=null&&r.isLeaf?m.file:r!=null&&r.expanded.value?m.unfold:m.fold:null),N=i=>{var h,o,T,g;let c=[t.node.key];if(!(e!=null&&e.checkStrictly)){const u=(h=e==null?void 0:e.nodeMaps)==null?void 0:h.get(t.node.key);if(u&&u.pKey){const C=(o=e==null?void 0:e.nodeMaps)==null?void 0:o.get(u.pKey);C&&((T=C.children)!=null&&T.every(M=>{var n,s;return(s=(n=e==null?void 0:e.checkedKeys)==null?void 0:n.concat([t.node.key]))==null?void 0:s.includes(M.key)}))&&c.push(C.key)}c.push(...j(t.node))}(g=e==null?void 0:e.onChecked)==null||g.call(e,c,i)},K=S(()=>{var i,c;return e!=null&&e.checkStrictly?!1:((i=t.node.children)==null?void 0:i.some(h=>{var o;return(o=e==null?void 0:e.checkedKeys)==null?void 0:o.includes(h.key)}))&&!((c=t.node.children)!=null&&c.every(h=>{var o;return(o=e==null?void 0:e.checkedKeys)==null?void 0:o.includes(h.key)}))}),k=S(()=>{var i,c,h;return e!=null&&e.checkStrictly?(i=e==null?void 0:e.checkedKeys)==null?void 0:i.includes(t.node.key):((c=e==null?void 0:e.checkedKeys)==null?void 0:c.includes(t.node.key))||((h=t.node.children)==null?void 0:h.every(o=>{var T;return(T=e==null?void 0:e.checkedKeys)==null?void 0:T.includes(o.key)}))});return(i,c)=>{var h,o;return f(),_("div",{class:E(d.value)},[F(Ke),(h=y(e))!=null&&h.checkable?(f(),_("span",{key:0,class:E(y(a)("checkbox")),onClick:c[0]||(c[0]=te(()=>{},["stop"]))},[F(y(he),{checked:k.value,indeterminate:K.value,onChange:N},null,8,["checked","indeterminate"])],2)):D("",!0),A("div",{class:E(B.value),onClick:c[1]||(c[1]=T=>{var g,u;return(u=(g=y(e))==null?void 0:g.onSelect)==null?void 0:u.call(g,t.node.key)})},[(o=y(e))!=null&&o.fileTree?(f(),_("span",{key:0,class:E(y(a)("file"))},[(f(),I(U(b.value)))],2)):D("",!0),A("span",null,ne(i.label),1)],2)],2)}}}),be=O({__name:"expand-transition",setup(p){const t=Y("collapse"),a=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},d={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){a(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){a(e)},leaveCancelled(e){a(e)}};return(e,r)=>(f(),I(oe,x({name:y(t)()},le(d)),{default:W(()=>[se(e.$slots,"default")]),_:3},16,["name"]))}}),Se={key:0,class:"yk-tree__list"},Q=O({__name:"node",props:{option:{}},setup(p){const t=p,a=H(z),d=S(()=>{var v;return!!((v=a==null?void 0:a.expandedKeys)!=null&&v.includes(t.option.key))}),e=S(()=>d.value&&!r.value),r=S(()=>!t.option.children||!t.option.children.length);return ee(X,{option:t.option,isLeaf:r.value,expanded:d}),(v,B)=>{const m=de("node",!0);return f(),_(L,null,[F(_e,{label:v.option.label,node:v.option},null,8,["label","node"]),F(be,null,{default:W(()=>[e.value?(f(),_("div",Se,[(f(!0),_(L,null,V(v.option.children,b=>(f(),I(m,{key:b.key,option:b},null,8,["option"]))),128))])):D("",!0)]),_:1})],64)}}}),q=(p,t)=>{const a=new Map;return p&&p.length===0||p==null||p.forEach(d=>{a.set(d.key,{...d,pKey:t});for(const[e,r]of q(d.children,d.key))a.set(e,r)}),a},Te=O({name:"YkTree",__name:"tree",props:G({options:{},blockNode:{type:Boolean,default:!1},defaultExpandedKeys:{default(){return[]}},expandedKeys:{},selectedKeys:{},defaultSelectedKeys:{default(){return[]}},multiple:{type:Boolean,default:!1},expandIcon:{type:Function,default(){return $(me)}},fileTree:{type:Boolean,default:!1},fileIcons:{},checkable:{type:Boolean,default:!1},checkedKeys:{},checkStrategy:{default:"all"},checkStrictly:{type:Boolean,default:!1},scrollbar:{default:!1},unSelectKey:{}},{expandedKeys:{local:!0,default:[]},selectedKeys:{local:!0,default:[]},checkedKeys:{default:[],local:!0}}),emits:G(["expand","select","check"],["update:expandedKeys","update:selectedKeys","update:checkedKeys"]),setup(p,{emit:t}){const a=p,d=Y("tree"),{checkStrictly:e,checkStrategy:r,checkable:v,fileIcons:B,fileTree:m,blockNode:b,expandIcon:N,unSelectKey:K}=re(a),k=ce(q(a.options));P(()=>a.options,()=>{k.value=q(a.options)});const i=R(p,"expandedKeys",{local:!0}),c=n=>{var l;h(n,!1,!0);const s=(l=k.value.get(n))==null?void 0:l.pKey;s&&c(s)};J(()=>{if(a.defaultExpandedKeys.length!==0)for(const n of a.defaultExpandedKeys)c(n)});const h=(n,s=!1,l=!1)=>{const w=new Set([...i.value]);s?w.delete(n):w.add(n),i.value=[...w],!l&&t("expand",i.value)},o=R(p,"selectedKeys",{local:!0});J(()=>{var n;if(a.defaultSelectedKeys.length!==0){o.value=a.defaultSelectedKeys;for(const s of a.defaultSelectedKeys){const l=(n=k.value.get(s))==null?void 0:n.pKey;l&&c(l)}}});const T=n=>{a.multiple?o.value=[...new Set([...o.value,n])]:o.value=[n],t("select",o.value)};P(()=>K==null?void 0:K.value,n=>{o.value=o.value.filter(s=>s!=n),v.value&&M([n],!1)});const g=R(p,"checkedKeys",{local:!0}),u=ie([]);u.value=[...g.value],P(e,n=>{if(n)C();else{let s=[];u.value.forEach(l=>{const w=k.value.get(l);if(!w)return;const ae=j(w);s.push(l),ae.forEach(Z=>{s.includes(Z)||s.push(Z)})}),u.value=[...new Set(s)]}},{immediate:!0});const C=()=>{if(r.value==="all"||e.value){g.value=[...u.value];return}const n=[];u.value.forEach(s=>{if(!k.value.has(s))return;const l=j(k.value.get(s));if(l&&l.length>0&&l.every(w=>u.value.includes(w))){n.push(s);return}}),r.value==="parent"&&(g.value=u.value.filter(s=>{const l=k.value.get(s);return!(l&&l.pKey&&n.includes(l.pKey))})),r.value==="child"&&(g.value=u.value.filter(s=>!n.includes(s)))};P(u,C,{deep:!0,immediate:!0}),P(r,C);const M=(n,s)=>{s?u.value.push(...n):u.value=u.value.filter(l=>!n.includes(l))};return ee(z,ue({blockNode:b,expandedKeys:i,selectedKeys:o,checkedKeys:u,fileTree:m,fileIcons:B,checkable:v,checkStrategy:r,checkStrictly:e,expandIcon:N,nodeMaps:k,onSelect:T,onExpand:h,onChecked:M})),(n,s)=>(f(),_("div",{class:E(y(d)())},[a.scrollbar?(f(),I(y(fe),pe(x({key:0},a.scrollbar)),{default:W(()=>[(f(!0),_(L,null,V(n.options,l=>(f(),I(Q,{key:l.key,option:l},null,8,["option"]))),128))]),_:1},16)):(f(!0),_(L,{key:1},V(n.options,l=>(f(),I(Q,{key:l.key,option:l},null,8,["option"]))),128))],2))}}),we=ye(Te),Pe=we;export{we as Y,Pe as _};
