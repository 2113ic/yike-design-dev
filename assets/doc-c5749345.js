import{d as S,r as p,T as P,ai as H,a4 as j,o as y,b,n as K,g as L,W as N,ad as J,e,$ as R,i as o,Z as E,A as W,F as Q,h as e2,t as l2,w as d,f as Z,a0 as t2,z as a2,a7 as z,a3 as n2,c as X,X as s2,y as o2,x as c2,am as U,a as G,j as F}from"./index-9ece1d16.js";import{_ as A2}from"./index-a9e49790.js";import{Y as r2}from"./index-2159dab6.js";import{_ as q}from"./index-27392ff9.js";import{d as i2,I as u2,c as d2}from"./index-8374a2a3.js";import"./index-1121e099.js";import"./index-095437b2.js";import"./use-form-item-ece58385.js";import"./index-3acc3654.js";const p2=["placeholder","disabled"],C2={class:"yk-select-view__tags"},v2={class:"text"},k2=S({__name:"select-view",props:{currentItems:{},isFocus:{type:Boolean},bordered:{type:Boolean},disabled:{type:Boolean},size:{},allowClear:{type:Boolean},placeholder:{},defaultValue:{},treeOptions:{}},emits:["send-focus","send-un-select-key","send-select-key"],setup(k,{emit:l}){const t=k,a=p(!1),n=p(""),u=p(!0),i=r=>{l("send-focus",r)},A=r=>{l("send-un-select-key",r)},_=p(null),v=p(null),h=()=>{a.value=!0,i(a)},Y=()=>{a.value=!0,i(a)},g=()=>{u.value=!0},x=()=>{u.value=!1},s=()=>{n.value="",A(p(I(t.treeOptions,n.value)[0].key))},m=(r,f)=>{t.currentItems.splice(f,1),B.value=r.key,A(p(r.key))},c=p(0),C=p(0),w=r=>{r.preventDefault();const f=Math.sign(r.deltaY);f===-1?v.value&&c.value<0&&(c.value+=20,v.value.style.transform=`translateX(${c.value}px)`):f===1&&v.value&&t.size*200-c.value<C.value&&(c.value-=20,v.value.style.transform=`translateX(${c.value}px)`)};P(()=>{n.value=t.defaultValue;const r=v.value;if(r){const f=r.offsetWidth;C.value=f}}),H(()=>{t.currentItems.length==1&&(n.value=t.currentItems[0].label),v.value&&(v.value.style.transform="translateX(0px)",C.value=v.value.scrollWidth)});const B=p("");j(n,r=>{try{B.value=I(t.treeOptions,r)[0].key}catch{B.value&&A(B)}});const I=(r,f)=>{const $=[],D=M=>{for(const V of M)V.label===f&&$.push(V),V.children&&D(V.children)};return D(r),$};return(r,f)=>{var $;return y(),b("div",{class:"yk-select-view",onMouseenter:g,onMouseleave:x},[t.disabled?(y(),b("div",{key:0,class:K(t.disabled?"yk-select-view--cover":"")},null,2)):L("",!0),t.currentItems.length<=1?(y(),b("div",{key:1,class:K(t.isFocus&&t.bordered?"yk-select-view__input yk-select-view__input--focused":"yk-select-view__input")},[N(e("input",{ref_key:"input",ref:_,"onUpdate:modelValue":f[0]||(f[0]=D=>n.value=D),placeholder:t.placeholder?t.placeholder:"",disabled:t.disabled,class:"yk-select-view__input--default",type:"text",onFocus:h},null,40,p2),[[J,n.value]]),N(e("div",{class:"yk-select-view__icon--closed",onClick:s},[o(E(W))],512),[[R,u.value&&(($=n.value)==null?void 0:$.toString().length)&&t.allowClear]])],2)):(y(),b("div",{key:2,class:K(t.isFocus&&t.bordered?"yk-select-view__input yk-select-view__input--focused":"yk-select-view__input"),onClick:Y},[e("div",{ref_key:"scroll",ref:v,class:"scrollContent",onWheel:w},[(y(!0),b(Q,null,e2(t.currentItems,(D,M)=>(y(),b("div",C2,[e("div",v2,l2(D.label),1),o(E(W),{class:"yk-select-view__icon--closed",onClick:V=>m(D,M)},null,8,["onClick"])]))),256))],544)],2))],32)}}}),y2=S({name:"YkTreeSelect",__name:"tree-select",props:{allowClear:{type:Boolean,default:!0},bordered:{type:Boolean,default:!0},defaultValue:{default:""},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:2},options:{default:()=>[]},blockNode:{type:Boolean},defaultExpandedKeys:{default:()=>[]},expandedKeys:{},selectedKeys:{},defaultSelectedKeys:{},multiple:{type:Boolean,default:!1},expandIcon:{},fileTree:{type:Boolean},fileIcons:{},checkable:{type:Boolean,default:!1},checkedKeys:{},checkStrategy:{},checkStrictly:{type:Boolean,default:!1},scrollbar:{},unSelectKey:{},lazy:{type:Boolean,default:!1},emptyText:{default:""}},setup(k){const l=k,t=p(null),a=p(null),n=p(null),u=p(!1),i=p([]),A=c=>{c.value&&(u.value=c.value)},_=p(""),v=p(""),h=p([]),Y=c=>{_.value=c.value},g=c=>{v.value=c.value},x=c=>{var C;t.value&&!t.value.contains(c.target)&&!((C=a.value)!=null&&C.contains(c.target))&&(u.value=!1)};P(()=>{document.addEventListener("click",x),t.value&&(t.value.style.width=l.size*200+"px")});const s=c=>{const C=m(l.options,c);i.value=C||[]};j(h,c=>{const C=m(l.options,c);i.value=C||[]});const m=(c,C)=>{const w=[],B=I=>{for(const r of I)C.includes(r.key)&&w.push(r),r.children&&B(r.children)};return B(c),w};return(c,C)=>(y(),b("div",{ref_key:"container",ref:t,class:"yk-tree-select__main-container"},[e("div",{ref_key:"inputView",ref:a},[o(k2,{"current-items":i.value,"is-focus":u.value,"default-value":l.defaultValue,placeholder:l.placeholder,"allow-clear":l.allowClear,size:l.size,bordered:l.bordered,disabled:l.disabled,"tree-options":c.options,onSendFocus:A,onSendUnSelectKey:Y,onSendSelectKey:g},null,8,["current-items","is-focus","default-value","placeholder","allow-clear","size","bordered","disabled","tree-options"])],512),o(t2,{duration:{enter:300,leave:300},mode:"out-in",name:"fade"},{default:d(()=>[N(e("div",{ref_key:"treeView",ref:n,class:"yk-tree-select__container-box"},[o(E(r2),{checkedKeys:h.value,"onUpdate:checkedKeys":C[0]||(C[0]=w=>h.value=w),options:l.options,multiple:l.multiple,"default-expanded-keys":l.defaultExpandedKeys,checkable:l.checkable,"check-strictly":l.checkStrictly,"file-tree":l.fileTree,"file-icons":l.fileIcons,"un-select-key":_.value,"select-key":v.value,onSelect:s},null,8,["checkedKeys","options","multiple","default-expanded-keys","checkable","check-strictly","file-tree","file-icons","un-select-key","select-key"]),l.options.length?L("",!0):(y(),Z(E(A2),{key:0,description:l.emptyText},null,8,["description"]))],512),[[R,u.value]])]),_:1})],512))}}),f2=a2(y2),O=f2,b2=S({__name:"tree-select-default",setup(k){const l=z({treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(t,a)=>{const n=O;return y(),b("div",null,[o(n,{options:l.treeData},null,8,["options"])])}}}),E2=(k,l)=>{if(k.install=t=>{for(const a of[k,...Object.values(l??{})])t.component(a.name,a)},l)for(const[t,a]of Object.entries(l))k[t]=a;return k},m2=S({name:"YkSpace",__name:"space",props:{inline:{type:Boolean,default:!1},dir:{default:"horizontal"},align:{},justify:{},wrap:{type:[Boolean,String],default:!1},overflow:{default:"visible"},size:{default:"l"}},setup(k){const l=k,{inline:t,align:a,justify:n,wrap:u,overflow:i,size:A,dir:_}=n2(l),v=s=>typeof s=="number",h=s=>typeof s=="string",Y=s=>typeof s=="boolean",g=X(()=>{const s=[];return t.value&&s.push("inline"),Y(u.value)?u.value&&s.push("wrap"):s.push(`wrap-${u.value}`),h(A.value)&&A.value!=="l"&&s.push(`size-${A.value}`),_.value!=="horizontal"&&s.push(`dir-${_.value}`),i.value!=="visible"&&s.push(`overflow-${i.value}`),s.push(`align-${a==null?void 0:a.value}`),s.push(`justify-${n==null?void 0:n.value}`),s}),x=X(()=>{const s={};if(v(A.value))s.gap=`${A.value}px`;else if(h(A.value))s.gap=`${A.value}`;else if(Array.isArray(A.value)){const[m,c]=A.value;v(m)&&v(c)?(s.columnGap=`${A.value[0]}px`,s.rowGap=`${A.value[1]}px`):(s.columnGap=`${A.value[0]}`,s.rowGap=`${A.value[1]}`)}if(Array.isArray(i.value)){const[m,c]=i.value;s.overflowX=m,s.overflowY=c}return s});return(s,m)=>(y(),b("div",{class:K(["yk-space",g.value]),style:o2(x.value)},[s2(s.$slots,"default")],6))}}),h2=E2(m2),T=h2,_2=e("span",null,"是否禁用tree-select：",-1),B2=e("br",null,null,-1),D2=e("span",null,"是否开启多选：",-1),F2=e("br",null,null,-1),S2=e("span",null,"是否禁用获取焦点样式：",-1),w2=e("br",null,null,-1),Y2=e("span",null,"是否显示清空按钮：",-1),g2=e("br",null,null,-1),x2=S({__name:"tree-select-trends",setup(k){const l=z({isMultiple:!1,defaultKeys:[1,2],disabled:!1,bordered:!0,allowClear:!0,treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(t,a)=>{const n=q,u=O;return y(),b("div",null,[o(E(T),{style:{"margin-bottom":"20px"}},{default:d(()=>[_2,o(n,{modelValue:l.disabled,"onUpdate:modelValue":a[0]||(a[0]=i=>l.disabled=i)},null,8,["modelValue"])]),_:1}),B2,o(E(T),{style:{"margin-bottom":"20px"}},{default:d(()=>[D2,o(n,{modelValue:l.isMultiple,"onUpdate:modelValue":a[1]||(a[1]=i=>l.isMultiple=i)},null,8,["modelValue"])]),_:1}),F2,o(E(T),{style:{"margin-bottom":"20px"}},{default:d(()=>[S2,o(n,{modelValue:l.bordered,"onUpdate:modelValue":a[2]||(a[2]=i=>l.bordered=i)},null,8,["modelValue"])]),_:1}),w2,o(E(T),{style:{"margin-bottom":"20px"}},{default:d(()=>[Y2,o(n,{modelValue:l.allowClear,"onUpdate:modelValue":a[3]||(a[3]=i=>l.allowClear=i)},null,8,["modelValue"])]),_:1}),g2,o(u,{options:l.treeData,"empty-text":"当前没有任何数据！",placeholder:"这是默认的placeholer输入提示",disabled:l.disabled,bordered:l.bordered,"allow-clear":l.allowClear,multiple:l.isMultiple,"default-expanded-keys":l.defaultKeys},null,8,["options","disabled","bordered","allow-clear","multiple","default-expanded-keys"])])}}}),$2=e("span",null,"是否开启checkbox选择:",-1),V2=e("br",null,null,-1),I2=e("span",null,"是否关闭checkbox父子关联:",-1),T2=S({__name:"tree-select-checkable",setup(k){const l=z({checkable:!0,checkStrictly:!1,treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(t,a)=>{const n=q,u=c2,i=O;return y(),b("div",null,[o(u,{style:{"margin-bottom":"20px"}},{default:d(()=>[$2,o(n,{modelValue:l.checkable,"onUpdate:modelValue":a[0]||(a[0]=A=>l.checkable=A)},null,8,["modelValue"])]),_:1}),V2,o(u,{style:{"margin-bottom":"20px"}},{default:d(()=>[I2,o(n,{modelValue:l.checkStrictly,"onUpdate:modelValue":a[1]||(a[1]=A=>l.checkStrictly=A)},null,8,["modelValue"])]),_:1}),o(i,{options:l.treeData,placeholder:"这是默认的placeholer输入提示",checkable:l.checkable,"check-strictly":l.checkStrictly},null,8,["options","checkable","check-strictly"])])}}}),K2=S({__name:"tree-select-use-icons",setup(k){const l=z({treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(t,a)=>{const n=O;return y(),b("div",null,[o(n,{options:l.treeData,"file-tree":"","file-icons":{fold:()=>U(E(i2)),unfold:()=>U(E(u2)),file:()=>U(E(d2))},scrollbar:{height:200}},null,8,["options","file-icons"])])}}}),z2=e("p",null,"通过传入基本参数来创建一个 tree-select，他会带有一些默认的属性",-1),O2=e("p",null,"通过传入符合要求属性值来改变 tree-select 的默认属性",-1),M2=e("p",null,[F("通过传入"),e("code",null,"checkable"),F("来开启 checkbox 选择")],-1),U2=e("p",null,[F("通过传入"),e("code",null,"file-icons"),F("来自定义节点图标,通过传入"),e("code",null,"scrollbar"),F("来自定义 tree 容器高度并内置滚动，默认为"),e("code",null,"false")],-1),G2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"options"),e("td",null,"传入的 treeData"),e("td",null,"TreeOption []"),e("td",null,"无")]),e("tr",null,[e("td",null,"allow-clear"),e("td",null,"单选是否显示清除按钮"),e("td",null,"boolean"),e("td",null,"true")]),e("tr",null,[e("td",null,"bordered"),e("td",null,"是否显示输入框选中边框"),e("td",null,"boolean"),e("td",null,"true")]),e("tr",null,[e("td",null,"disabled"),e("td",null,"是否禁用 tree-select"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"default-value"),e("td",null,"默认值"),e("td",null,"string"),e("td",null,"无")]),e("tr",null,[e("td",null,"placeholder"),e("td",null,"输入框为空时默认的提示词"),e("td",null,"string"),e("td",null,"无")]),e("tr",null,[e("td",null,"multiple"),e("td",null,"是否开启"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"checkable"),e("td",null,"是否开启 checkbox 选择模式"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"empty-text"),e("td",null,"tree 为空时显示的空状态文字"),e("td",null,"string"),e("td",null,"无")]),e("tr",null,[e("td",null,"fileTree"),e("td",null,"目录树模式"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"fileIcons"),e("td",null,"定制目录树的图标"),e("td",null,"Icons"),e("td",null,"-")]),e("tr",null,[e("td",null,"size"),e("td",null,"组件大小 size"),e("td",null,"number"),e("td",null,"2")]),e("tr",null,[e("td",null,"scrollbar"),e("td",null,"内置滚动条"),e("td",null,"ScrollbarProps ,boolean"),e("td",null,"false")])])])],-1),H2={__name:"doc",setup(k){return(l,t)=>{const a=G("yk-title"),n=G("yk-snippet"),u=G("DocPage");return y(),Z(u,null,{default:d(()=>[o(a,{level:2,id:"YkTreeSelect-树形选择"},{default:d(()=>[F("YkTreeSelect 树形选择")]),_:1}),o(n,{title:"基本使用",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkTreeSelect%20%3Aoptions%3D%22state.treeData%22%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[o(b2)]),desc:d(()=>[z2]),_:1}),o(n,{title:"切换属性",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E7%A6%81%E7%94%A8tree-select%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.disabled%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E5%BC%80%E5%90%AF%E5%A4%9A%E9%80%89%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.isMultiple%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E7%A6%81%E7%94%A8%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9%E6%A0%B7%E5%BC%8F%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.bordered%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA%E6%B8%85%E7%A9%BA%E6%8C%89%E9%92%AE%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.allowClear%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkTreeSelect%0A%20%20%20%20%20%20%3Aoptions%3D%22state.treeData%22%0A%20%20%20%20%20%20empty-text%3D%22%E5%BD%93%E5%89%8D%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E6%95%B0%E6%8D%AE%EF%BC%81%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%BF%99%E6%98%AF%E9%BB%98%E8%AE%A4%E7%9A%84placeholer%E8%BE%93%E5%85%A5%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%3Adisabled%3D%22state.disabled%22%0A%20%20%20%20%20%20%3Abordered%3D%22state.bordered%22%0A%20%20%20%20%20%20%3Aallow-clear%3D%22state.allowClear%22%0A%20%20%20%20%20%20%3Amultiple%3D%22state.isMultiple%22%0A%20%20%20%20%20%20%3Adefault-expanded-keys%3D%22state.defaultKeys%22%0A%20%20%20%20%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20YkSpace%20%7D%20from%20'%40yike-design%2Fui'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20isMultiple%3A%20false%2C%0A%20%20defaultKeys%3A%20%5B1%2C%202%5D%2C%0A%20%20disabled%3A%20false%2C%0A%20%20bordered%3A%20true%2C%0A%20%20allowClear%3A%20true%2C%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[o(x2)]),desc:d(()=>[O2]),_:1}),o(n,{title:"使用 checkBox",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E5%BC%80%E5%90%AFcheckbox%E9%80%89%E6%8B%A9%3A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.checkable%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E5%85%B3%E9%97%ADcheckbox%E7%88%B6%E5%AD%90%E5%85%B3%E8%81%94%3A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.checkStrictly%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3CYkTreeSelect%0A%20%20%20%20%20%20%3Aoptions%3D%22state.treeData%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%BF%99%E6%98%AF%E9%BB%98%E8%AE%A4%E7%9A%84placeholer%E8%BE%93%E5%85%A5%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%3Acheckable%3D%22state.checkable%22%0A%20%20%20%20%20%20%3Acheck-strictly%3D%22state.checkStrictly%22%0A%20%20%20%20%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20checkable%3A%20true%2C%0A%20%20checkStrictly%3A%20false%2C%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[o(T2)]),desc:d(()=>[M2]),_:1}),o(n,{title:"自定义图标",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkTreeSelect%0A%20%20%20%20%20%20%3Aoptions%3D%22state.treeData%22%0A%20%20%20%20%20%20file-tree%0A%20%20%20%20%20%20%3Afile-icons%3D%22%7B%0A%20%20%20%20%20%20%20%20fold%3A%20()%20%3D%3E%20h(IconAppFill)%2C%0A%20%20%20%20%20%20%20%20unfold%3A%20()%20%3D%3E%20h(IconAppOutline)%2C%0A%20%20%20%20%20%20%20%20file%3A%20()%20%3D%3E%20h(IconSmileOutline)%2C%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%3Ascrollbar%3D%22%7B%20height%3A%20200%20%7D%22%0A%20%20%20%20%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20h%20%7D%20from%20'vue'%0Aimport%20%7B%0A%20%20IconAppOutline%2C%0A%20%20IconAppFill%2C%0A%20%20IconSmileOutline%2C%0A%7D%20from%20'%40yike-design%2Fui%2Fcomponents%2Fsvg-icon'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:d(()=>[o(K2)]),desc:d(()=>[U2]),_:1}),o(a,{level:3,id:"API"},{default:d(()=>[F("API")]),_:1}),G2]),_:1})}}};export{H2 as default};
