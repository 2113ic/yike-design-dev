import{_ as A}from"./index-9b2490dd.js";import{p as r,o as c,f as E,w as e,j as t,e as o,k as l,_ as v,v as C,d as f,r as F,b,F as h,y,z as m,a as _}from"./index-79e930ed.js";import{_ as D}from"./index-f70f7dfa.js";import"./index-f659bb4b.js";const B={},g={class:"container"},w={class:"top"},x={class:"center"},L={class:"bottom"};function T(u,i){const p=v,n=A,d=C;return c(),E(d,null,{default:e(()=>[t("div",g,[t("div",w,[t("div",null,[o(n,{placement:"topLeft"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("TL")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"top"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("Top")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"topRight"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("TR")]),_:1})]),_:1})])]),t("div",x,[t("div",null,[t("div",null,[o(n,{placement:"leftTop"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("LT")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"left"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("Left")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"leftBottom"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("LB")]),_:1})]),_:1})])]),t("div",null,[t("div",null,[o(n,{placement:"rightTop"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("RT")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"right"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("Right")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"rightBottom"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("RB")]),_:1})]),_:1})])])]),t("div",L,[t("div",null,[o(n,{placement:"bottomLeft"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("BL")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"bottom"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("Bottom")]),_:1})]),_:1})]),t("div",null,[o(n,{placement:"bottomRight"},{default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("BR")]),_:1})]),_:1})])])])]),_:1})}const R=r(B,[["render",T],["__scopeId","data-v-80512caf"]]),$=u=>(y("data-v-268de873"),u=u(),m(),u),P={class:"popover-switch"},I=$(()=>t("span",null,"切换气泡显示状态",-1)),S=f({__name:"popover-open",setup(u){const i=F(!1);return(p,n)=>{const d=D,a=v,k=A;return c(),b(h,null,[t("label",P,[o(d,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s)},null,8,["modelValue"]),I]),o(k,{open:i.value,"onUpdate:open":n[1]||(n[1]=s=>i.value=s),placement:"right",trigger:"none"},{default:e(()=>[o(a,{type:"outline"},{default:e(()=>[l("tooltip")]),_:1})]),_:1},8,["open"])],64)}}});const V=r(S,[["__scopeId","data-v-268de873"]]);const j={},N=u=>(y("data-v-164b4531"),u=u(),m(),u),z=N(()=>t("img",{class:"image",src:"https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png",alt:""},null,-1));function M(u,i){const p=v,n=A,d=C;return c(),E(d,null,{default:e(()=>[o(n,null,{content:e(()=>[z]),default:e(()=>[o(p,{type:"outline"},{default:e(()=>[l("展示气泡")]),_:1})]),_:1})]),_:1})}const O=r(j,[["render",M],["__scopeId","data-v-164b4531"]]),U=t("p",null,"这里展示基本用法",-1),Y=t("p",null,[t("code",null,"open"),l(" 属性指定卡片打开方式")],-1),q=t("p",null,"通过插槽自定义卡片内容。",-1),G=t("div",{class:"table-container"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"描述"),t("th",null,"类型"),t("th",null,"默认值")])]),t("tbody",null,[t("tr",null,[t("td",null,"title"),t("td",null,"气泡标题"),t("td",null,"string"),t("td",null,'"标题"')]),t("tr",null,[t("td",null,"content"),t("td",null,"气泡内容"),t("td",null,"string"),t("td",null,'"popover 组件"')])])])],-1),H=t("p",null,[l("其他参数同 "),t("a",{href:"tooltip",style:{color:"red"}},[t("code",null,"tooltip")]),l(" 组件")],-1),J=t("div",{class:"table-container"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"default"),t("td",null,[l("默认插槽，触发气泡的标签元素。请确保插槽内容只有一个根元素 并确保元素能正常绑定 "),t("code",null,"onMouseEnter"),l("、"),t("code",null,"onMouseLeave"),l("、"),t("code",null,"onFocus"),l("、"),t("code",null,"onClick"),l(" 事件")]),t("td",null,"-")]),t("tr",null,[t("td",null,"title"),t("td",null,"卡片标题插槽"),t("td",null,"-")]),t("tr",null,[t("td",null,"content"),t("td",null,"卡片内容插槽"),t("td",null,"-")]),t("tr",null,[t("td",null,"popover"),t("td",null,"卡片整体自定义插槽"),t("td",null,"-")])])])],-1),Z={__name:"doc",setup(u){return(i,p)=>{const n=_("yk-title"),d=_("yk-snippet"),a=_("DocPage");return c(),E(a,null,{default:e(()=>[o(n,{level:2,id:"YkPopover气泡卡片"},{default:e(()=>[l("YkPopover 气泡卡片")]),_:1}),o(d,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22top%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22topLeft%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ETL%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22top%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ETop%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22topRight%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ETR%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22center%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22leftTop%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ELT%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22left%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ELeft%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22leftBottom%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ELB%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22rightTop%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ERT%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22right%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ERight%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22rightBottom%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3ERB%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22bottom%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22bottomLeft%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3EBL%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22bottom%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3EBottom%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-popover%20placement%3D%22bottomRight%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3EBR%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%3E%0A.top%2C%0A.bottom%2C%0A.center%20%7B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3A%20center%3B%0A%7D%0A.top%20%3E%20div%2C%0A.bottom%20%3E%20div%2C%0A.center%20%3E%20div%20%3E%20div%20%7B%0A%20%20margin%3A%208px%3B%0A%7D%0A.center%20%7B%0A%20%20justify-content%3A%20space-between%3B%0A%7D%0A.container%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20min-width%3A%20350px%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:e(()=>[o(R)]),desc:e(()=>[U]),_:1}),o(d,{title:"卡片打开状态",code:"%3Ctemplate%3E%0A%20%20%3Clabel%20class%3D%22popover-switch%22%3E%0A%20%20%20%20%3Cyk-switch%20v-model%3D%22open%22%3E%3C%2Fyk-switch%3E%0A%20%20%20%20%3Cspan%3E%E5%88%87%E6%8D%A2%E6%B0%94%E6%B3%A1%E6%98%BE%E7%A4%BA%E7%8A%B6%E6%80%81%3C%2Fspan%3E%0A%20%20%3C%2Flabel%3E%0A%20%20%3Cyk-popover%20v-model%3Aopen%3D%22open%22%20placement%3D%22right%22%20trigger%3D%22none%22%3E%0A%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3Etooltip%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-popover%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20open%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A%3Cstyle%20scoped%3E%0A.popover-switch%20%7B%0A%20%20display%3A%20block%3B%0A%20%20margin-bottom%3A%208px%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:e(()=>[o(V)]),desc:e(()=>[Y]),_:1}),o(d,{title:"卡片内容自定义",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-popover%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%3Cimg%0A%20%20%20%20%20%20%20%20%20%20class%3D%22image%22%0A%20%20%20%20%20%20%20%20%20%20src%3D%22https%3A%2F%2Fwww.huohuo90.com%3A3003%2Fuser%2F6353b034dd4b583975e77fbe.png%22%0A%20%20%20%20%20%20%20%20%20%20alt%3D%22%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3Cyk-button%20type%3D%22outline%22%3E%E5%B1%95%E7%A4%BA%E6%B0%94%E6%B3%A1%3C%2Fyk-button%3E%0A%20%20%20%20%3C%2Fyk-popover%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%3E%0A.image%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20font-size%3A%200%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:e(()=>[o(O)]),desc:e(()=>[q]),_:1}),o(n,{level:3,id:"API"},{default:e(()=>[l("API")]),_:1}),G,H,o(n,{level:3,id:"Slot"},{default:e(()=>[l("Slot")]),_:1}),J]),_:1})}}};export{Z as default};
