import{d$ as N,r as A,d as m,dJ as q,e0 as H,dM as j,dL as G,c as J,o as C,f as T,b as B,e as t,w as e,n as f,dw as p,g as b,e1 as O,j as h,e2 as K,e3 as S,k as o,t as Q,e4 as R,e5 as U,e6 as W,d_ as X,F as v,_ as y,x as k,e7 as Z,du as hh,z as eh,A as th,p as lh,a as L}from"./index-c0fbe197.js";const nh=r=>r instanceof HTMLElement?r:document.querySelector(r)??document.body;let oh=0;const sh=N(()=>{const r=A([]);return{drawers:r,open:n=>{r.value[0]!==n&&r.value.unshift(n)},close:()=>{r.value.shift()},isLast:n=>{const u=r.value[0];return u===n||u===void 0}}}),ah=()=>oh+=1,$=sh(),uh=["aria-modal"],rh=["aria-label"],ch=m({name:"YkDrawer",__name:"drawer",props:{show:{type:Boolean,default:!1},size:{default:"360px"},title:{default:"抽屉标题"},scrollable:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},escapable:{type:Boolean,default:!0},showMask:{type:Boolean,default:!0},placement:{default:"right"},to:{default:"body"}},emits:["close","open","before-close"],setup(r,{emit:s}){const a=r,l=A(document.body),n=A(ah()),u=A(),c=A(),d=A(),_=A(a.to==="body"),i=q("drawer");H(()=>{l.value=nh(a.to),_.value=l.value===document.body});const g=()=>{var E;l.value.addEventListener("click",M),(E=u.value)==null||E.focus()},x=()=>{_.value&&$.open(n.value),d.value=!0,a.scrollable||(document.body.style.overflow="hidden"),a.escapable&&document.body.addEventListener("keydown",z),s("open")},I=()=>{$.isLast(n.value)&&(s("before-close"),s("close"))},P=()=>{l.value.removeEventListener("click",M),document.body.removeEventListener("keydown",z),_.value&&$.close(),$.isLast(n.value)&&!a.scrollable&&(document.body.style.overflow=""),d.value=!1},z=E=>{E.key==="Escape"&&I()},M=E=>{var w;(w=c.value)!=null&&w.contains(E.target)||I()};j(()=>{a.show&&x()}),G(a,(E,w)=>{w.show&&x()});const V=J(()=>({height:a.placement==="left"||a.placement==="right"?"100%":a.size,width:a.placement==="left"||a.placement==="right"?a.size:"100%"}));return(E,w)=>{const Y=W;return C(),T(U,{to:l.value},[d.value||E.show?(C(),B("div",{key:0,class:f(p(i)({"other-el":!_.value})),"aria-modal":E.show,"aria-label":"抽屉",tabindex:"-1"},[t(O,{name:"mask",appear:""},{default:e(()=>[E.showMask&&E.show?(C(),B("div",{key:0,class:f(p(i)("mask")),"aria-hidden":"true"},null,2)):b("",!0)]),_:1}),h("div",{ref_key:"focuser",ref:u,"aria-hidden":"true","aria-label":"按 TAB 聚焦到抽屉",class:f(p(i)("focus")),tabindex:"0"},null,2),t(O,{name:`${E.placement}-drawer`,appear:"",onAfterEnter:g,onAfterLeave:P},{default:e(()=>[E.show?(C(),B("div",{key:0,ref_key:"drawerMain",ref:c,class:f(p(i)({main:!0,shadow:!a.showMask,[`${a.placement}`]:!0})),style:K(V.value)},[h("div",{class:f(p(i)("wrapper"))},[h("div",{class:f(p(i)("header")),"aria-label":E.title},[h("div",{class:f(p(i)("title"))},[S(E.$slots,"header",{},()=>[o(Q(a.title),1)])],2),E.closable?(C(),B("button",{key:0,class:f(p(i)("close")),onClick:I},[t(Y)],2)):b("",!0)],10,rh),t(p(R),null,{default:e(()=>[h("div",{class:f(p(i)("content"))},[S(E.$slots,"default")],2)]),_:3}),h("div",{class:f(p(i)("footer"))},[S(E.$slots,"footer")],2)],2)],6)):b("",!0)]),_:3},8,["name"])],10,uh)):b("",!0)],8,["to"])}}}),F=X(ch);const Eh=m({__name:"drawer-primary",setup(r){const s=A(!1);let a=A("right");const l=n=>{a.value=n,s.value=!0};return(n,u)=>{const c=y,d=k,_=F;return C(),B(v,null,[t(d,null,{default:e(()=>[t(c,{onClick:u[0]||(u[0]=i=>l("top"))},{default:e(()=>[o("从上往下")]),_:1}),t(c,{onClick:u[1]||(u[1]=i=>l("bottom"))},{default:e(()=>[o("从下往上")]),_:1}),t(c,{onClick:u[2]||(u[2]=i=>l("left"))},{default:e(()=>[o("从左往右")]),_:1}),t(c,{onClick:u[3]||(u[3]=i=>l("right"))},{default:e(()=>[o("从右往左")]),_:1})]),_:1}),t(_,{placement:p(a),title:"你好，世界。",show:s.value,onClose:u[4]||(u[4]=i=>s.value=!1)},{default:e(()=>[o(" 你看到了什么？ ")]),_:1},8,["placement","show"])],64)}}}),dh=h("h3",null,"你看到了什么？",-1),ih=m({__name:"drawer-slot",setup(r){const s=A(!1);return(a,l)=>{const n=y,u=k,c=Z,d=F;return C(),B(v,null,[t(u,null,{default:e(()=>[t(n,{onClick:l[0]||(l[0]=_=>s.value=!0)},{default:e(()=>[o("打开抽屉")]),_:1})]),_:1}),t(d,{placement:"right",show:s.value,onClose:l[1]||(l[1]=_=>s.value=!1)},{header:e(()=>[h("h2",null,[t(c),o(" 非常大的字 ")])]),footer:e(()=>[t(n,null,{default:e(()=>[o("我知道了")]),_:1})]),default:e(()=>[dh]),_:1},8,["show"])],64)}}}),Ah=m({__name:"drawer-callback",setup(r){var u;const s=(u=hh())==null?void 0:u.proxy,a=A(!1),l=()=>{s.$message({type:"success",message:"正在请求..."});async function c(){await fetch("https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01").then(()=>{a.value=!1,s.$message({type:"success",message:"抽屉已关闭。"})})}c()},n=()=>{s.$message({type:"success",message:"抽屉已打开。"})};return(c,d)=>{const _=y,i=k,g=F;return C(),B(v,null,[t(i,null,{default:e(()=>[t(_,{onClick:d[0]||(d[0]=x=>a.value=!0)},{default:e(()=>[o("打开抽屉")]),_:1})]),_:1}),t(g,{title:"你好，世界。",show:a.value,onBeforeClose:l,onOpen:n},{default:e(()=>[o(" 你看到了什么？ ")]),_:1},8,["show"])],64)}}}),_h=m({__name:"drawer-multi",setup(r){const s=A(!1),a=A(!1);return(l,n)=>{const u=y,c=k,d=F;return C(),B(v,null,[t(c,null,{default:e(()=>[t(u,{onClick:n[0]||(n[0]=_=>s.value=!0)},{default:e(()=>[o("打开抽屉")]),_:1})]),_:1}),t(d,{placement:"right",size:"500px",title:"你好，世界。",show:s.value,onClose:n[3]||(n[3]=_=>s.value=!1)},{default:e(()=>[o(" 你看到了什么？ "),t(u,{onClick:n[1]||(n[1]=_=>a.value=!0)},{default:e(()=>[o("打开第二个抽屉")]),_:1}),t(d,{placement:"right",size:"300px",title:"你好，第二个世界。",show:a.value,onClose:n[2]||(n[2]=_=>a.value=!1)},{default:e(()=>[o(" 但这里什么都没有 ")]),_:1},8,["show"])]),_:1},8,["show"])],64)}}}),Ch=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),ph=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Bh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),fh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),mh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Dh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),vh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),yh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Fh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),kh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),wh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),bh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),$h=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),gh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),xh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Ih=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Sh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Lh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),zh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Mh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Oh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Th=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Ph=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Vh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Yh=m({__name:"drawer-long",setup(r){const s=A(!1);return(a,l)=>{const n=y,u=k,c=F;return C(),B(v,null,[t(u,null,{default:e(()=>[t(n,{onClick:l[0]||(l[0]=d=>s.value=!0)},{default:e(()=>[o("打开抽屉")]),_:1})]),_:1}),t(c,{title:"你好，世界。",show:s.value,onClose:l[1]||(l[1]=d=>s.value=!1)},{default:e(()=>[o(" 你看到了什么？ "),Ch,ph,Bh,fh,mh,Dh,vh,yh,Fh,kh,wh,bh,$h,gh,xh,Ih,Sh,Lh,zh,Mh,Oh,Th,Ph,Vh]),_:1},8,["show"])],64)}}}),Nh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),qh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Hh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),jh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Gh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Jh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Kh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Qh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Rh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Uh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Wh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Xh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),Zh=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),h2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),e2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),t2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),l2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),n2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),o2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),s2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),a2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),u2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),r2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),c2=h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1),E2=m({__name:"drawer-nomask",setup(r){const s=A(!1);return(a,l)=>{const n=y,u=k,c=F;return C(),B(v,null,[t(u,null,{default:e(()=>[t(n,{onClick:l[0]||(l[0]=d=>s.value=!0)},{default:e(()=>[o("打开抽屉")]),_:1})]),_:1}),t(c,{title:"你好，世界。",show:s.value,"show-mask":!1,onClose:l[1]||(l[1]=d=>s.value=!1)},{default:e(()=>[o(" 你看到了什么？ "),Nh,qh,Hh,jh,Gh,Jh,Kh,Qh,Rh,Uh,Wh,Xh,Zh,h2,e2,t2,l2,n2,o2,s2,a2,u2,r2,c2]),_:1},8,["show"])],64)}}}),D=r=>(eh("data-v-d6881ee4"),r=r(),th(),r),d2=D(()=>h("div",{id:"drawer-hub"},null,-1)),i2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),A2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),_2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),C2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),p2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),B2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),f2=D(()=>h("h1",null,"hhhhhhhhhhhhhhhhhhhhhhhh",-1)),m2=m({__name:"drawer-anywhere",setup(r){const s=A(!1);return(a,l)=>{const n=y,u=F;return C(),B(v,null,[t(n,{onClick:l[0]||(l[0]=c=>s.value=!0)},{default:e(()=>[o("打开抽屉")]),_:1}),d2,t(u,{title:"你好，世界。",show:s.value,to:"#drawer-hub",scrollable:!0,placement:"left",onClose:l[1]||(l[1]=c=>s.value=!1)},{default:e(()=>[o(" 你看到了什么？ "),i2,A2,_2,C2,p2,B2,f2]),_:1},8,["show"])],64)}}});const D2=lh(m2,[["__scopeId","data-v-d6881ee4"]]),v2=h("p",null,[o("通过 "),h("code",null,"placement"),o(" 属性控制抽屉展开的方向，默认为 "),h("code",null,"'right'"),o("。")],-1),y2=h("p",null,"使用插槽来完全自定义抽屉内容。",-1),F2=h("p",null,[o("监听 "),h("code",null,"open"),o(" 、 "),h("code",null,"close"),o(" 和 "),h("code",null,"before-close"),o(" 事件以实现回调或访问控制。")],-1),k2=h("p",null,"抽屉可以像俄罗斯套娃一般地嵌套。",-1),w2=h("p",null,"抽屉内容过长时可滚动。",-1),b2=h("p",null,[o("通过 "),h("code",null,"show-mask"),o(" 属性控制抽屉是否显示背景的暗色半透明遮罩，默认为 "),h("code",null,"true"),o("。不使用背景遮罩时将显示阴影。")],-1),$2=h("p",null,[o("通过 "),h("code",null,"to"),o(" 属性控制抽屉显示时挂载的元素节点，其值可以是 CSS 选择器字符串，或者是一个 HTMLElement 类型的变量。默认为 "),h("code",null,"'body'"),o("。")],-1),g2=h("div",{class:"table-container"},[h("table",null,[h("thead",null,[h("tr",null,[h("th",null,"参数"),h("th",null,"描述"),h("th",null,"类型"),h("th",null,"默认值")])]),h("tbody",null,[h("tr",null,[h("td",null,"placement"),h("td",null,"抽屉展开的方向"),h("td",null,"'right'｜'left'｜'top'｜'bottom'"),h("td",null,"'right'")]),h("tr",null,[h("td",null,"size"),h("td",null,"抽屉的高度或宽度"),h("td",null,"string"),h("td",null,"'360px'")]),h("tr",null,[h("td",null,"title"),h("td",null,"抽屉的顶部标题"),h("td",null,"string"),h("td",null,"''")]),h("tr",null,[h("td",null,"scrollable"),h("td",null,"抽屉展开后 body 是否可滚动"),h("td",null,"boolean"),h("td",null,"false")]),h("tr",null,[h("td",null,"closable"),h("td",null,"抽屉是否显示关闭按钮"),h("td",null,"boolean"),h("td",null,"true")]),h("tr",null,[h("td",null,"escapable"),h("td",null,"抽屉是否能使用 ESC 键关闭"),h("td",null,"boolean"),h("td",null,"true")]),h("tr",null,[h("td",null,"show-mask"),h("td",null,"抽屉是否显示背景遮罩"),h("td",null,"boolean"),h("td",null,"true")]),h("tr",null,[h("td",null,"to"),h("td",null,"抽屉展开是挂载的元素"),h("td",null,"string ｜ HTMLElement"),h("td",null,"'body'")])])])],-1),x2=h("div",{class:"table-container"},[h("table",null,[h("thead",null,[h("tr",null,[h("th",null,"事件名"),h("th",null,"描述")])]),h("tbody",null,[h("tr",null,[h("td",null,"open"),h("td",null,"抽屉打开时触发")]),h("tr",null,[h("td",null,"close"),h("td",null,"抽屉关闭时触发")]),h("tr",null,[h("td",null,"before-close"),h("td",null,"抽屉关闭前时触发")])])])],-1),I2=h("div",{class:"table-container"},[h("table",null,[h("thead",null,[h("tr",null,[h("th",null,"插槽名"),h("th",null,"描述")])]),h("tbody",null,[h("tr",null,[h("td",null,"header"),h("td",null,"抽屉的顶部内容")]),h("tr",null,[h("td",null,"default"),h("td",null,"抽屉的正文内容")]),h("tr",null,[h("td",null,"footer"),h("td",null,"抽屉的底部内容")])])])],-1),L2={__name:"doc",setup(r){return(s,a)=>{const l=L("yk-title"),n=L("yk-snippet"),u=L("DocPage");return C(),T(u,null,{default:e(()=>[t(l,{level:2,id:"YkDrawer抽屉"},{default:e(()=>[o("YkDrawer 抽屉")]),_:1}),t(n,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22activate('top')%22%3E%E4%BB%8E%E4%B8%8A%E5%BE%80%E4%B8%8B%3C%2Fyk-button%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22activate('bottom')%22%3E%E4%BB%8E%E4%B8%8B%E5%BE%80%E4%B8%8A%3C%2Fyk-button%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22activate('left')%22%3E%E4%BB%8E%E5%B7%A6%E5%BE%80%E5%8F%B3%3C%2Fyk-button%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22activate('right')%22%3E%E4%BB%8E%E5%8F%B3%E5%BE%80%E5%B7%A6%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-space%3E%0A%20%20%3Cyk-drawer%0A%20%20%20%20%3Aplacement%3D%22placement%22%0A%20%20%20%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%E3%80%82%22%0A%20%20%20%20%3Ashow%3D%22active%22%0A%20%20%20%20%40close%3D%22active%20%3D%20false%22%0A%20%20%3E%0A%20%20%20%20%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20active%20%3D%20ref(false)%0Alet%20placement%20%3D%20ref%3Cany%3E('right')%0Aconst%20activate%20%3D%20(placement_to%3A%20string)%20%3D%3E%20%7B%0A%20%20placement.value%20%3D%20placement_to%0A%20%20active.value%20%3D%20true%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:e(()=>[t(Eh)]),desc:e(()=>[v2]),_:1}),t(n,{title:"使用插槽",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22active%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-space%3E%0A%20%20%3Cyk-drawer%20placement%3D%22right%22%20%3Ashow%3D%22active%22%20%40close%3D%22active%20%3D%20false%22%3E%0A%20%20%20%20%3Ctemplate%20%23header%3E%0A%20%20%20%20%20%20%3Ch2%3E%0A%20%20%20%20%20%20%20%20%3CIconBulbOutline%20%2F%3E%0A%20%20%20%20%20%20%20%20%E9%9D%9E%E5%B8%B8%E5%A4%A7%E7%9A%84%E5%AD%97%0A%20%20%20%20%20%20%3C%2Fh2%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Ch3%3E%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%3C%2Fh3%3E%0A%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%3Cyk-button%3E%E6%88%91%E7%9F%A5%E9%81%93%E4%BA%86%3C%2Fyk-button%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20active%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A"},{demo:e(()=>[t(ih)]),desc:e(()=>[y2]),_:1}),t(n,{title:"事件",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22active%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-space%3E%0A%20%20%3Cyk-drawer%0A%20%20%20%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%E3%80%82%22%0A%20%20%20%20%3Ashow%3D%22active%22%0A%20%20%20%20%40before-close%3D%22onClose%22%0A%20%20%20%20%40open%3D%22onOpen%22%0A%20%20%3E%0A%20%20%20%20%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%2C%20getCurrentInstance%20%7D%20from%20'vue'%0Aconst%20proxy%3A%20any%20%3D%20getCurrentInstance()%3F.proxy%0Aconst%20active%20%3D%20ref(false)%0Aconst%20onClose%20%3D%20()%20%3D%3E%20%7B%0A%20%20proxy.%24message(%7B%20type%3A%20'success'%2C%20message%3A%20'%E6%AD%A3%E5%9C%A8%E8%AF%B7%E6%B1%82...'%20%7D)%0A%20%20async%20function%20fakeFetch()%20%7B%0A%20%20%20%20await%20fetch(%0A%20%20%20%20%20%20'https%3A%2F%2Ffakerapi.it%2Fapi%2Fv1%2Fpersons%3F_quantity%3D1%26_gender%3Dmale%26_birthday_start%3D2005-01-01'%2C%0A%20%20%20%20).then(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20active.value%20%3D%20false%0A%20%20%20%20%20%20proxy.%24message(%7B%20type%3A%20'success'%2C%20message%3A%20'%E6%8A%BD%E5%B1%89%E5%B7%B2%E5%85%B3%E9%97%AD%E3%80%82'%20%7D)%0A%20%20%20%20%7D)%0A%20%20%7D%0A%20%20fakeFetch()%0A%7D%0Aconst%20onOpen%20%3D%20()%20%3D%3E%20%7B%0A%20%20proxy.%24message(%7B%20type%3A%20'success'%2C%20message%3A%20'%E6%8A%BD%E5%B1%89%E5%B7%B2%E6%89%93%E5%BC%80%E3%80%82'%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:e(()=>[t(Ah)]),desc:e(()=>[F2]),_:1}),t(n,{title:"抽屉嵌套",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22active%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-space%3E%0A%20%20%3Cyk-drawer%0A%20%20%20%20placement%3D%22right%22%0A%20%20%20%20size%3D%22500px%22%0A%20%20%20%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%E3%80%82%22%0A%20%20%20%20%3Ashow%3D%22active%22%0A%20%20%20%20%40close%3D%22active%20%3D%20false%22%0A%20%20%3E%0A%20%20%20%20%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%20%20%3Cyk-button%20%40click%3D%22activeInner%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%20%20%3Cyk-drawer%0A%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20size%3D%22300px%22%0A%20%20%20%20%20%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E7%AC%AC%E4%BA%8C%E4%B8%AA%E4%B8%96%E7%95%8C%E3%80%82%22%0A%20%20%20%20%20%20%3Ashow%3D%22activeInner%22%0A%20%20%20%20%20%20%40close%3D%22activeInner%20%3D%20false%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%E4%BD%86%E8%BF%99%E9%87%8C%E4%BB%80%E4%B9%88%E9%83%BD%E6%B2%A1%E6%9C%89%0A%20%20%20%20%3C%2Fyk-drawer%3E%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20active%20%3D%20ref(false)%0Aconst%20activeInner%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A"},{demo:e(()=>[t(_h)]),desc:e(()=>[k2]),_:1}),t(n,{title:"长行滚动",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22active%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-space%3E%0A%20%20%3Cyk-drawer%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%E3%80%82%22%20%3Ashow%3D%22active%22%20%40close%3D%22active%20%3D%20false%22%3E%0A%20%20%20%20%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20active%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A"},{demo:e(()=>[t(Yh)]),desc:e(()=>[w2]),_:1}),t(n,{title:"无背景遮罩",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-button%20%40click%3D%22active%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-space%3E%0A%20%20%3Cyk-drawer%0A%20%20%20%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%E3%80%82%22%0A%20%20%20%20%3Ashow%3D%22active%22%0A%20%20%20%20%3Ashow-mask%3D%22false%22%0A%20%20%20%20%40close%3D%22active%20%3D%20false%22%0A%20%20%3E%0A%20%20%20%20%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20active%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A"},{demo:e(()=>[t(E2)]),desc:e(()=>[b2]),_:1}),t(n,{title:"附加到任何容器",code:"%3Ctemplate%3E%0A%20%20%3Cyk-button%20%40click%3D%22active%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E6%8A%BD%E5%B1%89%3C%2Fyk-button%3E%0A%20%20%3Cdiv%20id%3D%22drawer-hub%22%3E%3C%2Fdiv%3E%0A%20%20%3Cyk-drawer%0A%20%20%20%20title%3D%22%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%E3%80%82%22%0A%20%20%20%20%3Ashow%3D%22active%22%0A%20%20%20%20to%3D%22%23drawer-hub%22%0A%20%20%20%20%3Ascrollable%3D%22true%22%0A%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%40close%3D%22active%20%3D%20false%22%0A%20%20%3E%0A%20%20%20%20%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%20%20%3Ch1%3Ehhhhhhhhhhhhhhhhhhhhhhhh%3C%2Fh1%3E%0A%20%20%3C%2Fyk-drawer%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20active%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%0A%23drawer-hub%20%7B%0A%20%20position%3A%20relative%3B%0A%20%20overflow%3A%20hidden%3B%0A%20%20margin-top%3A%2010px%3B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20500px%3B%0A%20%20border%3A%201px%20solid%20%40gray-1%3B%0A%20%20border-radius%3A%208px%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:e(()=>[t(D2)]),desc:e(()=>[$2]),_:1}),t(l,{level:3,id:"API"},{default:e(()=>[o("API")]),_:1}),t(l,{level:4,id:"DrawerProps"},{default:e(()=>[o("Drawer Props")]),_:1}),g2,t(l,{level:4,id:"DrawerEvents"},{default:e(()=>[o("Drawer Events")]),_:1}),x2,t(l,{level:4,id:"DrawerSlots"},{default:e(()=>[o("Drawer Slots")]),_:1}),I2]),_:1})}}};export{L2 as default};
