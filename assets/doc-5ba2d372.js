import{d as f,e2 as H,q as R,o as c,b as m,dZ as p,g as D,c as I,p as y,n as _,dY as P,dU as C,dD as Y,e7 as z,dT as N,j as e,dq as d,dH as w,f as b,dr as V,t as j,dn as q,w as t,e as r,k as n,F as T,a as k}from"./index-79e930ed.js";const v=Symbol("breadcrumbName"),M={class:"yk-breadcrumb"},U=f({name:"YkBreadcrumb",__name:"breadcrumb",props:{separator:{default:"/"},separatorIcon:{}},setup(o){const u=o,l=H();return R(v,{props:u,slots:l}),(a,s)=>(c(),m("div",M,[p(a.$slots,"default"),D("",!0)]))}}),Z=f({name:"YkIcon",props:{type:String,size:[Number,String],rotate:Number,spin:Boolean},setup(o){const u=I(()=>{const a={};return o.size&&(a.fontSize=typeof o.size=="number"?`${o.size}px`:o.size),o.rotate&&(a.transform=`rotate(${o.rotate}deg)`),a});return{cls:I(()=>["yk-icon"]),innerStyle:u}}});function G(o,u,l,a,s,i){return c(),m("svg",{class:_(o.cls),style:P(o.innerStyle),fill:"currentColor"},[p(o.$slots,"default")],6)}const J=y(Z,[["render",G]]),K=C(J),g=K,L=["onClick"],O={key:0,href:"/",class:"n-link"},Q={key:2},W=f({name:"YkBreadcrumbItem",__name:"breadcrumb-item",props:{to:{}},setup(o){const u=o,l=Y("breadcrumb"),a=q(),s=z(v),{props:{separator:i,separatorIcon:h},slots:S}=N(s),B=S.separator,F=a.appContext.config.globalProperties.$router,x=()=>{!u.to||!F||F.push(u.to)};return($,pe)=>(c(),m("span",{class:_(d(l)("item"))},[e("span",{class:_(d(l)("inner")),onClick:w(x,["prevent","stop"])},[u.to?(c(),m("a",O,[p($.$slots,"default")])):p($.$slots,"default",{key:1})],10,L),e("span",{class:_(d(l)("separator"))},[d(B)?(c(),b(V(d(B)),{key:0})):d(h)?(c(),b(d(g),{key:1,name:d(h)},null,8,["name"])):(c(),m("span",Q,j(d(i)),1))],2)],2))}}),E=C(U),A=C(W);const X={};function ee(o,u){const l=A,a=E;return c(),b(a,null,{default:t(()=>[r(l,null,{default:t(()=>[n("Home")]),_:1}),r(l,null,{default:t(()=>[n("Button")]),_:1}),r(l,null,{default:t(()=>[n("Rate")]),_:1})]),_:1})}const te=y(X,[["render",ee]]);const re={};function ne(o,u){const l=A,a=E,s=g;return c(),m(T,null,[r(a,{separator:">"},{default:t(()=>[r(l,null,{default:t(()=>[n("Home")]),_:1}),r(l,null,{default:t(()=>[n("Button")]),_:1}),r(l,null,{default:t(()=>[n("Rate")]),_:1})]),_:1}),r(a,{"separator-icon":"yk-xiexian"},{default:t(()=>[r(l,null,{default:t(()=>[n("Home")]),_:1}),r(l,null,{default:t(()=>[n("Button")]),_:1}),r(l,null,{default:t(()=>[n("Rate")]),_:1})]),_:1}),r(a,null,{separator:t(()=>[r(s,{name:"yk-xiangyou"})]),default:t(()=>[r(l,null,{default:t(()=>[n("Home")]),_:1}),r(l,null,{default:t(()=>[n("Button")]),_:1}),r(l,null,{default:t(()=>[n("Rate")]),_:1})]),_:1})],64)}const le=y(re,[["render",ne]]),ae={};function oe(o,u){const l=A,a=E;return c(),b(a,null,{default:t(()=>[r(l,{to:"/"},{default:t(()=>[n("Home")]),_:1}),r(l,{to:"/module/button"},{default:t(()=>[n("Button")]),_:1}),r(l,null,{default:t(()=>[n("Rate")]),_:1})]),_:1})}const ue=y(ae,[["render",oe]]),ce=e("p",null,"面包屑的基本用法。",-1),se=e("p",null,[n("通过 "),e("code",null,"separator"),n(" 属性或插槽自定义分隔符。也可以通过"),e("code",null,"separatorIcon"),n("指定"),e("code",null,"yk-icon"),n("组件里的图标")],-1),de=e("p",null,[n("通过 "),e("code",null,"to"),n(" 属性控制路由跳转。同"),e("code",null,"vue-router"),n(" 的 "),e("code",null,"to"),n(" 属性")],-1),me=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"separator"),e("td",null,"分隔符"),e("td",null,"string"),e("td",null,"/")]),e("tr",null,[e("td",null,"separatorIcon"),e("td",null,"图标分隔符"),e("td",null,"string"),e("td",null,"-")])])])],-1),be=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"子标签")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容"),e("td",null,"BreadcrumbItem")]),e("tr",null,[e("td",null,"separator"),e("td",null,"自定义分割符"),e("td",null,"-")])])])],-1),ie=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"to"),e("td",null,"路由跳转目标，同 vue-router 的 to 属性"),e("td",null,"string / object"),e("td",null,"-")])])])],-1),_e=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义默认内容")])])])],-1),ke={__name:"doc",setup(o){return(u,l)=>{const a=k("yk-title"),s=k("yk-snippet"),i=k("DocPage");return c(),b(i,null,{default:t(()=>[r(a,{level:2,id:"YkBreadcrumb面包屑"},{default:t(()=>[n("YkBreadcrumb 面包屑")]),_:1}),r(s,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(te)]),desc:t(()=>[ce]),_:1}),r(s,{title:"自定义分隔符",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%20separator%3D%22%3E%22%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%20%20%3Cyk-breadcrumb%20separator-icon%3D%22yk-xiexian%22%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Ctemplate%20%23separator%3E%0A%20%20%20%20%20%20%3Cyk-icon%20name%3D%22yk-xiangyou%22%3E%3C%2Fyk-icon%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(le)]),desc:t(()=>[se]),_:1}),r(s,{title:"路由跳转",code:"%3Ctemplate%3E%0A%20%20%3Cyk-breadcrumb%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%20to%3D%22%2F%22%3EHome%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%20to%3D%22%2Fmodule%2Fbutton%22%3EButton%3C%2Fyk-breadcrumb-item%3E%0A%20%20%20%20%3Cyk-breadcrumb-item%3ERate%3C%2Fyk-breadcrumb-item%3E%0A%20%20%3C%2Fyk-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A"},{demo:t(()=>[r(ue)]),desc:t(()=>[de]),_:1}),r(a,{level:3,id:"API"},{default:t(()=>[n("API")]),_:1}),r(a,{level:4,id:"BreadcrumbAttributes"},{default:t(()=>[n("Breadcrumb Attributes")]),_:1}),me,r(a,{level:4,id:"BreadcrumbSlots"},{default:t(()=>[n("Breadcrumb Slots")]),_:1}),be,r(a,{level:3,id:"BreadcrumbItemAPI"},{default:t(()=>[n("BreadcrumbItem API")]),_:1}),r(a,{level:4,id:"BreadcrumbItemAttributes"},{default:t(()=>[n("BreadcrumbItem Attributes")]),_:1}),ie,r(a,{level:4,id:"BreadcrumbItemSlots"},{default:t(()=>[n("BreadcrumbItem Slots")]),_:1}),_e]),_:1})}}};export{ke as default};
