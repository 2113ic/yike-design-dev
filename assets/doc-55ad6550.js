import{d as F,r,dC as X,el as H,dU as j,o as C,b as y,n as z,g as q,dF as W,ed as Q,e,dJ as J,i as t,dx as v,et as L,F as Z,h as e2,t as l2,w as A,f as R,dK as t2,dL as a2,e5 as I,D as x,ep as N,eq as n2,dt as s2,er as o2,a as P,j as _}from"./index-2e6203f3.js";import{_ as c2}from"./index-6366edaf.js";import{Y as A2}from"./index-4a8b5811.js";import{_ as G}from"./index-bc310465.js";import"./index-2aa44a00.js";import"./use-form-item-95286ffe.js";const r2=["placeholder","disabled"],i2={class:"yk-select-view__tags"},d2={class:"text"},u2=F({__name:"select-view",props:{currentItems:{},isFocus:{type:Boolean},bordered:{type:Boolean},disabled:{type:Boolean},size:{},allowClear:{type:Boolean},placeholder:{},defaultValue:{},treeOptions:{}},emits:["send-focus","send-un-select-key","send-select-key"],setup(b,{emit:l}){const a=b,s=r(!1),n=r(""),u=r(!0),d=l,E=i=>{d("send-focus",i)},D=i=>{d("send-un-select-key",i)},Y=r(null),p=r(null),K=()=>{s.value=!0,E(s)},$=()=>{s.value=!0,E(s)},U=()=>{u.value=!0},M=()=>{u.value=!1},g=()=>{n.value="",D(r(m(a.treeOptions,n.value)[0].key))},c=(i,k)=>{a.currentItems.splice(k,1),B.value=i.key,D(r(i.key))},o=r(0),f=r(0),V=i=>{i.preventDefault();const k=Math.sign(i.deltaY);k===-1?p.value&&o.value<0&&(o.value+=20,p.value.style.transform=`translateX(${o.value}px)`):k===1&&p.value&&a.size*200-o.value<f.value&&(o.value-=20,p.value.style.transform=`translateX(${o.value}px)`)};X(()=>{n.value=a.defaultValue;const i=p.value;if(i){const k=i.offsetWidth;f.value=k}}),H(()=>{a.currentItems.length==1&&(n.value=a.currentItems[0].label),p.value&&(p.value.style.transform="translateX(0px)",f.value=p.value.scrollWidth)});const B=r("");j(n,i=>{try{B.value=m(a.treeOptions,i)[0].key}catch{B.value&&D(B)}});const m=(i,k)=>{const S=[],h=O=>{for(const w of O)w.label===k&&S.push(w),w.children&&h(w.children)};return h(i),S};return(i,k)=>{var S;return C(),y("div",{class:"yk-select-view",onMouseenter:U,onMouseleave:M},[a.disabled?(C(),y("div",{key:0,class:z(a.disabled?"yk-select-view--cover":"")},null,2)):q("",!0),a.currentItems.length<=1?(C(),y("div",{key:1,class:z(a.isFocus&&a.bordered?"yk-select-view__input yk-select-view__input--focused":"yk-select-view__input")},[W(e("input",{ref_key:"input",ref:Y,"onUpdate:modelValue":k[0]||(k[0]=h=>n.value=h),placeholder:a.placeholder?a.placeholder:"",disabled:a.disabled,class:"yk-select-view__input--default",type:"text",onFocus:K},null,40,r2),[[Q,n.value]]),W(e("div",{class:"yk-select-view__icon--closed",onClick:g},[t(v(L))],512),[[J,u.value&&((S=n.value)==null?void 0:S.toString().length)&&a.allowClear]])],2)):(C(),y("div",{key:2,class:z(a.isFocus&&a.bordered?"yk-select-view__input yk-select-view__input--focused":"yk-select-view__input"),onClick:$},[e("div",{ref_key:"scroll",ref:p,class:"scrollContent",onWheel:V},[(C(!0),y(Z,null,e2(a.currentItems,(h,O)=>(C(),y("div",i2,[e("div",d2,l2(h.label),1),t(v(L),{class:"yk-select-view__icon--closed",onClick:w=>c(h,O)},null,8,["onClick"])]))),256))],544)],2))],32)}}}),p2=F({name:"YkTreeSelect",__name:"tree-select",props:{allowClear:{type:Boolean,default:!0},bordered:{type:Boolean,default:!0},defaultValue:{default:""},disabled:{type:Boolean,default:!1},placeholder:{default:""},size:{default:2},options:{default:()=>[]},blockNode:{type:Boolean},defaultExpandedKeys:{default:()=>[]},expandedKeys:{},selectedKeys:{},defaultSelectedKeys:{},multiple:{type:Boolean,default:!1},expandIcon:{},fileTree:{type:Boolean},fileIcons:{},checkable:{type:Boolean,default:!1},checkedKeys:{},checkStrategy:{},checkStrictly:{type:Boolean,default:!1},scrollbar:{},unSelectKey:{},lazy:{type:Boolean,default:!1},emptyText:{default:""}},setup(b){const l=b,a=r(null),s=r(null),n=r(null),u=r(!1),d=r([]),E=c=>{c.value&&(u.value=c.value)},D=r(""),Y=r(""),p=r([]),K=c=>{D.value=c.value},$=c=>{Y.value=c.value},U=c=>{var o;a.value&&!a.value.contains(c.target)&&!((o=s.value)!=null&&o.contains(c.target))&&(u.value=!1)};X(()=>{document.addEventListener("click",U),a.value&&(a.value.style.width=l.size*200+"px")});const M=c=>{const o=g(l.options,c);d.value=o||[]};j(p,c=>{const o=g(l.options,c);d.value=o||[]});const g=(c,o)=>{const f=[],V=B=>{for(const m of B)o.includes(m.key)&&f.push(m),m.children&&V(m.children)};return V(c),f};return(c,o)=>(C(),y("div",{ref_key:"container",ref:a,class:"yk-tree-select__main-container"},[e("div",{ref_key:"inputView",ref:s},[t(u2,{"current-items":d.value,"is-focus":u.value,"default-value":l.defaultValue,placeholder:l.placeholder,"allow-clear":l.allowClear,size:l.size,bordered:l.bordered,disabled:l.disabled,"tree-options":c.options,onSendFocus:E,onSendUnSelectKey:K,onSendSelectKey:$},null,8,["current-items","is-focus","default-value","placeholder","allow-clear","size","bordered","disabled","tree-options"])],512),t(t2,{duration:{enter:300,leave:300},mode:"out-in",name:"fade"},{default:A(()=>[W(e("div",{ref_key:"treeView",ref:n,class:"yk-tree-select__container-box"},[t(v(A2),{checkedKeys:p.value,"onUpdate:checkedKeys":o[0]||(o[0]=f=>p.value=f),options:l.options,multiple:l.multiple,"default-expanded-keys":l.defaultExpandedKeys,checkable:l.checkable,"check-strictly":l.checkStrictly,"file-tree":l.fileTree,"file-icons":l.fileIcons,"un-select-key":D.value,"select-key":Y.value,onSelect:M},null,8,["checkedKeys","options","multiple","default-expanded-keys","checkable","check-strictly","file-tree","file-icons","un-select-key","select-key"]),l.options.length?q("",!0):(C(),R(v(c2),{key:0,description:l.emptyText},null,8,["description"]))],512),[[J,u.value]])]),_:1})],512))}}),C2=a2(p2),T=C2;const k2=F({__name:"tree-select-default",setup(b){const l=I({treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(a,s)=>{const n=T;return C(),y("div",null,[t(n,{options:l.treeData},null,8,["options"])])}}}),y2=e("span",null,"是否禁用tree-select：",-1),v2=e("br",null,null,-1),b2=e("span",null,"是否开启多选：",-1),E2=e("br",null,null,-1),f2=e("span",null,"是否禁用获取焦点样式：",-1),m2=e("br",null,null,-1),h2=e("span",null,"是否显示清空按钮：",-1),_2=e("br",null,null,-1),D2=F({__name:"tree-select-trends",setup(b){const l=I({isMultiple:!1,defaultKeys:[1,2],disabled:!1,bordered:!0,allowClear:!0,treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(a,s)=>{const n=G,u=T;return C(),y("div",null,[t(v(x),{style:{"margin-bottom":"20px"}},{default:A(()=>[y2,t(n,{modelValue:l.disabled,"onUpdate:modelValue":s[0]||(s[0]=d=>l.disabled=d)},null,8,["modelValue"])]),_:1}),v2,t(v(x),{style:{"margin-bottom":"20px"}},{default:A(()=>[b2,t(n,{modelValue:l.isMultiple,"onUpdate:modelValue":s[1]||(s[1]=d=>l.isMultiple=d)},null,8,["modelValue"])]),_:1}),E2,t(v(x),{style:{"margin-bottom":"20px"}},{default:A(()=>[f2,t(n,{modelValue:l.bordered,"onUpdate:modelValue":s[2]||(s[2]=d=>l.bordered=d)},null,8,["modelValue"])]),_:1}),m2,t(v(x),{style:{"margin-bottom":"20px"}},{default:A(()=>[h2,t(n,{modelValue:l.allowClear,"onUpdate:modelValue":s[3]||(s[3]=d=>l.allowClear=d)},null,8,["modelValue"])]),_:1}),_2,t(u,{options:l.treeData,"empty-text":"当前没有任何数据！",placeholder:"这是默认的placeholer输入提示",disabled:l.disabled,bordered:l.bordered,"allow-clear":l.allowClear,multiple:l.isMultiple,"default-expanded-keys":l.defaultKeys},null,8,["options","disabled","bordered","allow-clear","multiple","default-expanded-keys"])])}}}),B2=e("span",null,"是否开启checkbox选择:",-1),F2=e("br",null,null,-1),S2=e("span",null,"是否关闭checkbox父子关联:",-1),w2=F({__name:"tree-select-checkable",setup(b){const l=I({checkable:!0,checkStrictly:!1,treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(a,s)=>{const n=G,u=x,d=T;return C(),y("div",null,[t(u,{style:{"margin-bottom":"20px"}},{default:A(()=>[B2,t(n,{modelValue:l.checkable,"onUpdate:modelValue":s[0]||(s[0]=E=>l.checkable=E)},null,8,["modelValue"])]),_:1}),F2,t(u,{style:{"margin-bottom":"20px"}},{default:A(()=>[S2,t(n,{modelValue:l.checkStrictly,"onUpdate:modelValue":s[1]||(s[1]=E=>l.checkStrictly=E)},null,8,["modelValue"])]),_:1}),t(d,{options:l.treeData,placeholder:"这是默认的placeholer输入提示",checkable:l.checkable,"check-strictly":l.checkStrictly},null,8,["options","checkable","check-strictly"])])}}}),x2=F({__name:"tree-select-use-icons",setup(b){const l=I({treeData:[{key:"1",label:"level 1",children:[{key:"11",label:"level 1-1"}]},{key:"2",label:"level 2",children:[{key:"12",label:"level 2-1"},{key:"13",label:"level 2-2",children:[{key:"53",label:"level 2-2-1"},{key:"54",label:"level 2-2-2"}]}]},{key:"3",label:"level 3",children:[{key:"14",label:"level 3-1"},{key:"16",label:"level 3-2"}]}]});return(a,s)=>{const n=T;return C(),y("div",null,[t(n,{options:l.treeData,"file-tree":"","file-icons":{fold:()=>N(v(n2)),unfold:()=>N(v(s2)),file:()=>N(v(o2))},scrollbar:{height:200}},null,8,["options","file-icons"])])}}}),Y2=e("p",null,"通过传入基本参数来创建一个 tree-select，他会带有一些默认的属性",-1),g2=e("p",null,"通过传入符合要求属性值来改变 tree-select 的默认属性",-1),V2=e("p",null,[_("通过传入"),e("code",null,"checkable"),_("来开启 checkbox 选择")],-1),I2=e("p",null,[_("通过传入"),e("code",null,"file-icons"),_("来自定义节点图标,通过传入"),e("code",null,"scrollbar"),_("来自定义 tree 容器高度并内置滚动，默认为"),e("code",null,"false")],-1),T2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"options"),e("td",null,"传入的 treeData"),e("td",null,"TreeOption []"),e("td",null,"无")]),e("tr",null,[e("td",null,"allow-clear"),e("td",null,"单选是否显示清除按钮"),e("td",null,"boolean"),e("td",null,"true")]),e("tr",null,[e("td",null,"bordered"),e("td",null,"是否显示输入框选中边框"),e("td",null,"boolean"),e("td",null,"true")]),e("tr",null,[e("td",null,"disabled"),e("td",null,"是否禁用 tree-select"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"default-value"),e("td",null,"默认值"),e("td",null,"string"),e("td",null,"无")]),e("tr",null,[e("td",null,"placeholder"),e("td",null,"输入框为空时默认的提示词"),e("td",null,"string"),e("td",null,"无")]),e("tr",null,[e("td",null,"multiple"),e("td",null,"是否开启"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"checkable"),e("td",null,"是否开启 checkbox 选择模式"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"empty-text"),e("td",null,"tree 为空时显示的空状态文字"),e("td",null,"string"),e("td",null,"无")]),e("tr",null,[e("td",null,"fileTree"),e("td",null,"目录树模式"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"fileIcons"),e("td",null,"定制目录树的图标"),e("td",null,"Icons"),e("td",null,"-")]),e("tr",null,[e("td",null,"size"),e("td",null,"组件大小 size"),e("td",null,"number"),e("td",null,"2")]),e("tr",null,[e("td",null,"scrollbar"),e("td",null,"内置滚动条"),e("td",null,"ScrollbarProps ,boolean"),e("td",null,"false")])])])],-1),N2={__name:"doc",setup(b){return(l,a)=>{const s=P("yk-title"),n=P("yk-snippet"),u=P("DocPage");return C(),R(u,null,{default:A(()=>[t(s,{level:2,id:"YkTreeSelect-树形选择"},{default:A(()=>[_("YkTreeSelect 树形选择")]),_:1}),t(n,{title:"基本使用",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkTreeSelect%20%3Aoptions%3D%22state.treeData%22%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:A(()=>[t(k2)]),desc:A(()=>[Y2]),_:1}),t(n,{title:"切换属性",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E7%A6%81%E7%94%A8tree-select%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.disabled%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E5%BC%80%E5%90%AF%E5%A4%9A%E9%80%89%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.isMultiple%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E7%A6%81%E7%94%A8%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9%E6%A0%B7%E5%BC%8F%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.bordered%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA%E6%B8%85%E7%A9%BA%E6%8C%89%E9%92%AE%EF%BC%9A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.allowClear%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkTreeSelect%0A%20%20%20%20%20%20%3Aoptions%3D%22state.treeData%22%0A%20%20%20%20%20%20empty-text%3D%22%E5%BD%93%E5%89%8D%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E6%95%B0%E6%8D%AE%EF%BC%81%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%BF%99%E6%98%AF%E9%BB%98%E8%AE%A4%E7%9A%84placeholer%E8%BE%93%E5%85%A5%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%3Adisabled%3D%22state.disabled%22%0A%20%20%20%20%20%20%3Abordered%3D%22state.bordered%22%0A%20%20%20%20%20%20%3Aallow-clear%3D%22state.allowClear%22%0A%20%20%20%20%20%20%3Amultiple%3D%22state.isMultiple%22%0A%20%20%20%20%20%20%3Adefault-expanded-keys%3D%22state.defaultKeys%22%0A%20%20%20%20%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20YkSpace%20%7D%20from%20'%40yike-design%2Fui%2Fsrc'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20isMultiple%3A%20false%2C%0A%20%20defaultKeys%3A%20%5B1%2C%202%5D%2C%0A%20%20disabled%3A%20false%2C%0A%20%20bordered%3A%20true%2C%0A%20%20allowClear%3A%20true%2C%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:A(()=>[t(D2)]),desc:A(()=>[g2]),_:1}),t(n,{title:"使用 checkBox",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E5%BC%80%E5%90%AFcheckbox%E9%80%89%E6%8B%A9%3A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.checkable%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%20%20%20%20%3CYkSpace%20style%3D%22margin-bottom%3A%2020px%22%3E%0A%20%20%20%20%20%20%3Cspan%3E%E6%98%AF%E5%90%A6%E5%85%B3%E9%97%ADcheckbox%E7%88%B6%E5%AD%90%E5%85%B3%E8%81%94%3A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3CYkSwitch%20v-model%3D%22state.checkStrictly%22%3E%3C%2FYkSwitch%3E%0A%20%20%20%20%3C%2FYkSpace%3E%0A%20%20%20%20%3CYkTreeSelect%0A%20%20%20%20%20%20%3Aoptions%3D%22state.treeData%22%0A%20%20%20%20%20%20placeholder%3D%22%E8%BF%99%E6%98%AF%E9%BB%98%E8%AE%A4%E7%9A%84placeholer%E8%BE%93%E5%85%A5%E6%8F%90%E7%A4%BA%22%0A%20%20%20%20%20%20%3Acheckable%3D%22state.checkable%22%0A%20%20%20%20%20%20%3Acheck-strictly%3D%22state.checkStrictly%22%0A%20%20%20%20%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20checkable%3A%20true%2C%0A%20%20checkStrictly%3A%20false%2C%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:A(()=>[t(w2)]),desc:A(()=>[V2]),_:1}),t(n,{title:"自定义图标",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CYkTreeSelect%0A%20%20%20%20%20%20%3Aoptions%3D%22state.treeData%22%0A%20%20%20%20%20%20file-tree%0A%20%20%20%20%20%20%3Afile-icons%3D%22%7B%0A%20%20%20%20%20%20%20%20fold%3A%20()%20%3D%3E%20h(IconAppFill)%2C%0A%20%20%20%20%20%20%20%20unfold%3A%20()%20%3D%3E%20h(IconAppOutline)%2C%0A%20%20%20%20%20%20%20%20file%3A%20()%20%3D%3E%20h(IconSmileOutline)%2C%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%3Ascrollbar%3D%22%7B%20height%3A%20200%20%7D%22%0A%20%20%20%20%3E%3C%2FYkTreeSelect%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20h%20%7D%20from%20'vue'%0Aimport%20%7B%0A%20%20IconAppOutline%2C%0A%20%20IconAppFill%2C%0A%20%20IconSmileOutline%2C%0A%7D%20from%20'%40yike-design%2Fui%2Fsrc%2Fcomponents%2Fsvg-icon'%0A%2F%2F%20%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%0Aconst%20state%20%3D%20reactive%3Cany%3E(%7B%0A%20%20treeData%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'1'%2C%0A%20%20%20%20%20%20label%3A%20'level%201'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'11'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%201-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'2'%2C%0A%20%20%20%20%20%20label%3A%20'level%202'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'12'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'13'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2'%2C%0A%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'53'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20'54'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'level%202-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20'3'%2C%0A%20%20%20%20%20%20label%3A%20'level%203'%2C%0A%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'14'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-1'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'16'%2C%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'level%203-2'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0A%3C%2Fscript%3E%0A"},{demo:A(()=>[t(x2)]),desc:A(()=>[I2]),_:1}),t(s,{level:3,id:"API"},{default:A(()=>[_("API")]),_:1}),T2]),_:1})}}};export{N2 as default};
