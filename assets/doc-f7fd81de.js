import{_ as Y}from"./index-300b45ba.js";import{d as F,dJ as S,r as _,eG as v,dL as P,o as d,f as B,w as t,e3 as w,j as n,n as x,dw as i,t as g,_ as C,ey as D,k as l,g as z,e as a,d_ as L,du as b,x as N,a as k}from"./index-c0fbe197.js";import{u as V}from"./index-a67fc5fe.js";const O=F({name:"YkPopconfirm",__name:"popconfirm",props:{cancelText:{default:"取消"},okText:{default:"确认"},showCancel:{type:Boolean,default:!0},cancelButtonProps:{},okButtonProps:{},onCancel:{},onConfirm:{},content:{default:"hello YkPopconfirm"},title:{},open:{type:Boolean,default:!1},arrow:{type:Boolean,default:!0},placement:{},trigger:{},animation:{},openDelay:{},closeDelay:{},overlayClass:{},overlayStyle:{},autoAdjustOverflow:{type:Boolean},destroyTooltipOnHide:{type:Boolean},zIndex:{}},emits:["update:open"],setup(m,{emit:u}){const o=m,c=S("popconfirm"),r=V(),s=_(v(o).open);P(s,e=>u("update:open",e)),P(()=>o.open,e=>s.value=e);function y(e){s.value=e,u("update:open",e)}const E=_(v(o).trigger),A=_(!1),f=_(!1);let p;async function h(e){p instanceof Promise&&(e.value=!0,E.value="none",await p,setTimeout(()=>{p=null,e.value=!1,E.value=o.trigger})),s.value=!1}async function T(){p||(p=o.onCancel&&o.onCancel(),h(A))}async function I(){p||(p=o.onConfirm&&o.onConfirm(),h(f))}return(e,K)=>(d(),B(i(Y),D({...o,...e.$attrs,open:s.value,trigger:E.value},{class:i(c)(),"onUpdate:open":y}),{title:t(()=>[w(e.$slots,"title")]),content:t(()=>[w(e.$slots,"content",{},()=>[n("div",{class:x(i(c)("content"))},g(e.content),3)]),n("div",{class:x(i(c)("button-group"))},[e.showCancel?(d(),B(i(C),D({key:0,size:"s",type:"secondary"},{...o.cancelButtonProps},{loading:A.value,onClick:T}),{default:t(()=>[l(g(e.cancelText),1)]),_:1},16,["loading"])):z("",!0),a(i(C),D({size:"s"},{...o.okButtonProps},{loading:f.value,onClick:I}),{default:t(()=>[l(g(e.okText),1)]),_:1},16,["loading"])],2)]),default:t(()=>[a(i(r))]),_:3},16,["class"]))}}),j=L(O),$=j;const M=F({__name:"popconfirm-primary",setup(m){var r;const u=(r=b())==null?void 0:r.proxy;function o(){u.$message({type:"warning",message:"你点击了取消按钮"})}function c(){u.$message({type:"primary",message:"你点击了确认按钮"})}return(s,y)=>{const E=C,A=$,f=N;return d(),B(f,null,{default:t(()=>[a(A,{title:"我自定义的标题",content:"不吃学习的苦，就要吃生活的苦。书山有路勤为径，学海无涯苦作舟",arrow:!1,onCancel:o,onConfirm:c},{default:t(()=>[a(E,null,{default:t(()=>[l("自定义内容")]),_:1})]),_:1}),a(A,{title:"我自定义的标题",content:"不吃学习的苦，就要吃生活的苦。书山有路勤为径，学海无涯苦作舟","show-cancel":!1},{default:t(()=>[a(E,null,{default:t(()=>[l("隐藏取消按钮")]),_:1})]),_:1})]),_:1})}}}),G=F({__name:"popconfirm-async",setup(m){var r;const u=(r=b())==null?void 0:r.proxy;function o(){u.$message({type:"warning",message:"你点击了取消按钮"})}function c(){return new Promise(s=>{setTimeout(()=>{u.$message({type:"primary",message:"你点击了确认按钮"}),s(!0)},2e3)})}return(s,y)=>{const E=C,A=$;return d(),B(A,{trigger:"click",title:"异步处理",content:"这里展示异步处理提示语，当点击确认按钮是执行异步逻辑",onCancel:o,onConfirm:c},{default:t(()=>[a(E,null,{default:t(()=>[l("气泡弹窗")]),_:1})]),_:1})}}}),H=n("p",null,"这里展示基本用法",-1),J=n("p",null,"事件回调函数可返回 promise 对象, 用于处理异步逻辑(例如：点击确认或取消发送请求等)。组件会展示异步逻辑处理状态",-1),R=n("div",{class:"table-container"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值")])]),n("tbody",null,[n("tr",null,[n("td",null,"title"),n("td",null,"气泡标题"),n("td",null,"string"),n("td",null,'"标题"')]),n("tr",null,[n("td",null,"content"),n("td",null,"气泡内容"),n("td",null,"string"),n("td",null,'"hello YkPopconfirm"')]),n("tr",null,[n("td",null,"cancelText"),n("td",null,"取消按钮文字"),n("td",null,"string"),n("td",null,'"取消"')]),n("tr",null,[n("td",null,"okText"),n("td",null,"确认按钮文字"),n("td",null,"string"),n("td",null,'"确认"')]),n("tr",null,[n("td",null,"showCancel"),n("td",null,"是否展示取消按钮"),n("td",null,"boolean"),n("td",null,"true")]),n("tr",null,[n("td",null,"okButtonProps"),n("td",null,"确认按钮 props"),n("td",null,"ButtonProps"),n("td",null,"-")]),n("tr",null,[n("td",null,"cancelButtonProps"),n("td",null,"取消按钮 props"),n("td",null,"ButtonProps"),n("td",null,"-")]),n("tr",null,[n("td",null,"onCancel"),n("td",null,"点击取消按钮的事件"),n("td",null,"(() => Promise<boolean>) | (() => void)"),n("td",null,"-")]),n("tr",null,[n("td",null,"onConfirm"),n("td",null,"点击确认按钮的事件"),n("td",null,"(() => Promise<boolean>) | (() => void)"),n("td",null,"-")])])])],-1),U=n("p",null,[l("其他参数同 "),n("a",{href:"tooltip",style:{color:"red"}},[n("code",null,"tooltip")]),l(" 组件")],-1),q=n("div",{class:"table-container"},[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"说明"),n("th",null,"参数")])]),n("tbody",null,[n("tr",null,[n("td",null,"default"),n("td",null,[l("默认插槽，触发气泡的标签元素。请确保插槽内容只有一个根元素 并确保元素能正常绑定 "),n("code",null,"onMouseEnter"),l("、"),n("code",null,"onMouseLeave"),l("、"),n("code",null,"onFocus"),l("、"),n("code",null,"onClick"),l(" 事件")]),n("td",null,"-")]),n("tr",null,[n("td",null,"title"),n("td",null,"气泡标题"),n("td",null,"-")]),n("tr",null,[n("td",null,"content"),n("td",null,"气泡内容插槽"),n("td",null,"-")])])])],-1),Z={__name:"doc",setup(m){return(u,o)=>{const c=k("yk-title"),r=k("yk-snippet"),s=k("DocPage");return d(),B(s,null,{default:t(()=>[a(c,{level:2,id:"YkPopconfirm气泡确认框"},{default:t(()=>[l("YkPopconfirm 气泡确认框")]),_:1}),a(r,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-popconfirm%0A%20%20%20%20%20%20title%3D%22%E6%88%91%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20content%3D%22%E4%B8%8D%E5%90%83%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%8B%A6%EF%BC%8C%E5%B0%B1%E8%A6%81%E5%90%83%E7%94%9F%E6%B4%BB%E7%9A%84%E8%8B%A6%E3%80%82%E4%B9%A6%E5%B1%B1%E6%9C%89%E8%B7%AF%E5%8B%A4%E4%B8%BA%E5%BE%84%EF%BC%8C%E5%AD%A6%E6%B5%B7%E6%97%A0%E6%B6%AF%E8%8B%A6%E4%BD%9C%E8%88%9F%22%0A%20%20%20%20%20%20%3Aarrow%3D%22false%22%0A%20%20%20%20%20%20%40cancel%3D%22cancel%22%0A%20%20%20%20%20%20%40confirm%3D%22confirm%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cyk-button%3E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%3C%2Fyk-button%3E%0A%20%20%20%20%3C%2Fyk-popconfirm%3E%0A%20%20%20%20%3Cyk-popconfirm%0A%20%20%20%20%20%20title%3D%22%E6%88%91%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E6%A0%87%E9%A2%98%22%0A%20%20%20%20%20%20content%3D%22%E4%B8%8D%E5%90%83%E5%AD%A6%E4%B9%A0%E7%9A%84%E8%8B%A6%EF%BC%8C%E5%B0%B1%E8%A6%81%E5%90%83%E7%94%9F%E6%B4%BB%E7%9A%84%E8%8B%A6%E3%80%82%E4%B9%A6%E5%B1%B1%E6%9C%89%E8%B7%AF%E5%8B%A4%E4%B8%BA%E5%BE%84%EF%BC%8C%E5%AD%A6%E6%B5%B7%E6%97%A0%E6%B6%AF%E8%8B%A6%E4%BD%9C%E8%88%9F%22%0A%20%20%20%20%20%20%3Ashow-cancel%3D%22false%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cyk-button%3E%E9%9A%90%E8%97%8F%E5%8F%96%E6%B6%88%E6%8C%89%E9%92%AE%3C%2Fyk-button%3E%0A%20%20%20%20%3C%2Fyk-popconfirm%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20getCurrentInstance%20%7D%20from%20'vue'%0Aconst%20proxy%3A%20any%20%3D%20getCurrentInstance()%3F.proxy%0Afunction%20cancel()%20%7B%0A%20%20proxy.%24message(%7B%20type%3A%20'warning'%2C%20message%3A%20'%E4%BD%A0%E7%82%B9%E5%87%BB%E4%BA%86%E5%8F%96%E6%B6%88%E6%8C%89%E9%92%AE'%20%7D)%0A%7D%0Afunction%20confirm()%20%7B%0A%20%20proxy.%24message(%7B%20type%3A%20'primary'%2C%20message%3A%20'%E4%BD%A0%E7%82%B9%E5%87%BB%E4%BA%86%E7%A1%AE%E8%AE%A4%E6%8C%89%E9%92%AE'%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:t(()=>[a(M)]),desc:t(()=>[H]),_:1}),a(r,{title:"异步处理",code:"%3Ctemplate%3E%0A%20%20%3Cyk-popconfirm%0A%20%20%20%20trigger%3D%22click%22%0A%20%20%20%20title%3D%22%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%22%0A%20%20%20%20content%3D%22%E8%BF%99%E9%87%8C%E5%B1%95%E7%A4%BA%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E6%8F%90%E7%A4%BA%E8%AF%AD%EF%BC%8C%E5%BD%93%E7%82%B9%E5%87%BB%E7%A1%AE%E8%AE%A4%E6%8C%89%E9%92%AE%E6%98%AF%E6%89%A7%E8%A1%8C%E5%BC%82%E6%AD%A5%E9%80%BB%E8%BE%91%22%0A%20%20%20%20%40cancel%3D%22cancel%22%0A%20%20%20%20%40confirm%3D%22confirm%22%0A%20%20%3E%0A%20%20%20%20%3Cyk-button%3E%E6%B0%94%E6%B3%A1%E5%BC%B9%E7%AA%97%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-popconfirm%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20getCurrentInstance%20%7D%20from%20'vue'%0Aconst%20proxy%3A%20any%20%3D%20getCurrentInstance()%3F.proxy%0Afunction%20cancel()%20%7B%0A%20%20proxy.%24message(%7B%20type%3A%20'warning'%2C%20message%3A%20'%E4%BD%A0%E7%82%B9%E5%87%BB%E4%BA%86%E5%8F%96%E6%B6%88%E6%8C%89%E9%92%AE'%20%7D)%0A%7D%0Afunction%20confirm()%20%7B%0A%20%20return%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20proxy.%24message(%7B%20type%3A%20'primary'%2C%20message%3A%20'%E4%BD%A0%E7%82%B9%E5%87%BB%E4%BA%86%E7%A1%AE%E8%AE%A4%E6%8C%89%E9%92%AE'%20%7D)%0A%20%20%20%20%20%20resolve(true)%0A%20%20%20%20%7D%2C%202000)%0A%20%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:t(()=>[a(G)]),desc:t(()=>[J]),_:1}),a(c,{level:3,id:"API"},{default:t(()=>[l("API")]),_:1}),R,U,q]),_:1})}}};export{Z as default};
