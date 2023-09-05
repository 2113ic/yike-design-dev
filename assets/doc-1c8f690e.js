import{d as h,dD as y,o as s,b as r,n as u,dq as _,dY as C,j as e,dZ as f,dU as F,p as E,e as t,F as k,w as i,k as o,f9 as b,y as D,z as B,a as p,f as $}from"./index-79e930ed.js";const g=h({name:"YkDivider",__name:"divider",props:{id:{default:""},contentPosition:{default:"left"},color:{default:"#00aaee"},width:{default:"1"},height:{default:"1"},borderStyle:{default:"soild"},direction:{default:"horizontal"}},setup(n){const c=n,d=y("divider");return(l,a)=>(s(),r("div",{class:u(_(d)())},[c.direction==="horizontal"?(s(),r("div",{key:0,class:u(_(d)("horizontal")),style:C({borderWidth:`${l.width}px`,borderStyle:l.borderStyle})},[e("div",{class:u(_(d)(["title",l.contentPosition]))},[f(l.$slots,"default")],2)],6)):(s(),r("div",{key:1,class:u(_(d)("vertical")),style:C({borderWidth:`${l.width}px`,borderStyle:l.borderStyle})},null,6))],2))}}),S=F(g),v=S;const w={},q=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1),x=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ",-1);function z(n,c){const d=v;return s(),r(k,null,[q,t(d),x],64)}const P=E(w,[["render",z]]),I={},R=e("div",null,"标题靠左",-1),V=e("div",null,"标题居中",-1);function Y(n,c){const d=v,l=b;return s(),r("div",null,[t(d,null,{default:i(()=>[R]),_:1}),t(d,{"content-position":"middle"},{default:i(()=>[V]),_:1}),t(d,{"content-position":"right"},{default:i(()=>[e("div",null,[t(l),o(" 标题靠右 ")])]),_:1})])}const L=E(I,[["render",Y]]),H={},N=e("div",null,"分割线dashed型",-1),O=e("div",null,"分割线dotted型",-1),W=e("div",null,"分割线double型",-1);function j(n,c){const d=v;return s(),r("div",null,[N,t(d,{"border-style":"dashed",width:"2"}),O,t(d,{"border-style":"dotted"}),W,t(d,{"border-style":"double"})])}const T=E(H,[["render",j]]);const U={},m=n=>(D("data-v-8fe771a4"),n=n(),B(),n),Z={class:"main"},G=m(()=>e("div",null,"Rain",-1)),J=m(()=>e("div",null,"Home",-1)),K=m(()=>e("div",null,"Opeation",-1));function M(n,c){const d=v;return s(),r("div",Z,[G,t(d,{direction:"vertical"}),J,t(d,{direction:"vertical"}),K])}const Q=E(U,[["render",M],["__scopeId","data-v-8fe771a4"]]),X=e("p",null,"这里展示水平分割线基本用法",-1),ee=e("p",null,"可以在分割线上自定义文本内容",-1),te=e("p",null,"可以在分割线上自定义分割线样式 含分割线类型，分割线宽度",-1),de=e("p",null,"可以设置分割线竖直方向",-1),ie=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"可选值"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"contentPosition"),e("td",null,"自定义文本位置"),e("td",null,"string"),e("td",null,[e("code",null,"left"),o("、"),e("code",null,"middle"),o("、"),e("code",null,"right")]),e("td",null,[e("code",null,"left")])]),e("tr",null,[e("td",null,"width"),e("td",null,"分割线宽度"),e("td",null,"number"),e("td"),e("td",null,[e("code",null,"1")])]),e("tr",null,[e("td",null,"height"),e("td",null,"分割线高度"),e("td",null,"number"),e("td"),e("td",null,[e("code",null,"1em")])]),e("tr",null,[e("td",null,"borderStyle"),e("td",null,"分割线类型"),e("td",null,"number"),e("td",null,[e("code",null,"soild"),o("、"),e("code",null,"dotted"),o(" 、"),e("code",null,"double")]),e("td",null,[e("code",null,"soild")])]),e("tr",null,[e("td",null,"direction"),e("td",null,"分割线方向"),e("td",null,"string"),e("td",null,[e("code",null,"horizontal"),o(" 、"),e("code",null,"vertical")]),e("td",null,[e("code",null,"horizontal")])])])])],-1),ne={__name:"doc",setup(n){return(c,d)=>{const l=p("yk-title"),a=p("yk-snippet"),A=p("DocPage");return s(),$(A,null,{default:i(()=>[t(l,{level:2,id:"YkDivider分割线"},{default:i(()=>[o("YkDivider 分割线")]),_:1}),t(a,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Sed%20nonne%0A%20%20%20%20merninisti%20licere%20mihi%20ista%20probare%2C%20quae%20sunt%20a%20te%20dicta%3F%20Refert%20tamen%2C%20quo%0A%20%20%20%20modo.%0A%20%20%3C%2Fp%3E%0A%20%20%3Cyk-divider%3E%3C%2Fyk-divider%3E%0A%20%20%3Cp%3E%0A%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Sed%20nonne%0A%20%20%20%20merninisti%20licere%20mihi%20ista%20probare%2C%20quae%20sunt%20a%20te%20dicta%3F%20Refert%20tamen%2C%20quo%0A%20%20%20%20modo.%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A"},{demo:i(()=>[t(P)]),desc:i(()=>[X]),_:1}),t(a,{title:"设置标题",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-divider%3E%0A%20%20%20%20%20%20%3Cdiv%3E%E6%A0%87%E9%A2%98%E9%9D%A0%E5%B7%A6%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fyk-divider%3E%0A%20%20%20%20%3Cyk-divider%20content-position%3D%22middle%22%3E%0A%20%20%20%20%20%20%3Cdiv%3E%E6%A0%87%E9%A2%98%E5%B1%85%E4%B8%AD%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fyk-divider%3E%0A%20%20%20%20%3Cyk-divider%20content-position%3D%22right%22%3E%0A%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%3Cicon-edit-fill%20%2F%3E%0A%20%20%20%20%20%20%20%20%E6%A0%87%E9%A2%98%E9%9D%A0%E5%8F%B3%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fyk-divider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A"},{demo:i(()=>[t(L)]),desc:i(()=>[ee]),_:1}),t(a,{title:"设置分割线样式",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%E5%88%86%E5%89%B2%E7%BA%BFdashed%E5%9E%8B%3C%2Fdiv%3E%0A%20%20%20%20%3Cyk-divider%20border-style%3D%22dashed%22%20width%3D%222%22%3E%3C%2Fyk-divider%3E%0A%20%20%20%20%3Cdiv%3E%E5%88%86%E5%89%B2%E7%BA%BFdotted%E5%9E%8B%3C%2Fdiv%3E%0A%20%20%20%20%3Cyk-divider%20border-style%3D%22dotted%22%3E%3C%2Fyk-divider%3E%0A%20%20%20%20%3Cdiv%3E%E5%88%86%E5%89%B2%E7%BA%BFdouble%E5%9E%8B%3C%2Fdiv%3E%0A%20%20%20%20%3Cyk-divider%20border-style%3D%22double%22%3E%3C%2Fyk-divider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%3C%2Fstyle%3E%0A"},{demo:i(()=>[t(T)]),desc:i(()=>[te]),_:1}),t(a,{title:"设置竖直方向分割线",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22main%22%3E%0A%20%20%20%20%3Cdiv%3ERain%3C%2Fdiv%3E%0A%20%20%20%20%3Cyk-divider%20direction%3D%22vertical%22%3E%3C%2Fyk-divider%3E%0A%20%20%20%20%3Cdiv%3EHome%3C%2Fdiv%3E%0A%20%20%20%20%3Cyk-divider%20direction%3D%22vertical%22%3E%3C%2Fyk-divider%3E%0A%20%20%20%20%3Cdiv%3EOpeation%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%20lang%3D%22less%22%3E%0A.main%20%7B%0A%20%20display%3A%20flex%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:i(()=>[t(Q)]),desc:i(()=>[de]),_:1}),t(l,{level:3,id:"API"},{default:i(()=>[o("API")]),_:1}),ie]),_:1})}}};export{ne as default};
