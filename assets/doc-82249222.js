import{d as B,c as E,o as n,b as d,n as m,j as e,dY as x,dZ as P,t as F,dq as v,f as _,dr as w,g as h,dU as I,p as A,w as o,e as t,v as g,r as N,a as $,k as l}from"./index-79e930ed.js";const D=(u,s)=>({normal:"",success:s?"IconTickOutline":"IconTickFill",error:s?"IconCloseOutline":"IconCrossFill"})[u],T=u=>({s:["4","64"],m:["6","80"],l:["8","108"]})[u],V={class:"yk-progress"},W={key:0,class:"yk-progress-text"},Y=["r","cx","cy","stroke-width"],M=["r","cx","cy","stroke-width","stroke-dasharray","stroke-dashoffset"],O={key:0,class:"yk-progress-circle-text"},j={key:1},q=B({name:"YkProgress",__name:"progress",props:{type:{default:"line"},percent:{default:20},strokeColor:{default:""},size:{default:"m"},status:{default:"normal"},showText:{type:Boolean,default:!0}},setup(u){const s=u,r=E(()=>s.percent+"%"),a=E(()=>({line:`yk-progress--${s.size}`,circle:`yk-progress-circle--${s.size}`})),c=E(()=>({line:{bg:s.strokeColor?"yk-progress-inner--custom":`yk-progress-inner--${s.status}`,icon:`yk-progress-icon--${s.status}`},circle:{stroke:s.strokeColor?"yk-progress-circle--custom":`yk-progress-circle--${s.status}`,icon:`yk-progress-circle-icon--${s.status}`}})),p=E(()=>{const i=T(s.size),k=Number(i[0]),y=Number(i[1])/2;return{svgWh:`width:${y*2}px;height:${y*2}px`,strokeWidth:k,r:(Number(i[1])-k)/2,cx:y,cy:y}}),f=E(()=>{const{percent:i}=s,{r:k}=p.value,y=i>=100,b=i===50?0:1,z=2*Math.PI*(y?k:k-b),S=z*(1-i/100);return{circumference:z,dashoffset:y?i/100:S}});return(i,k)=>(n(),d("div",V,[s.type==="line"?(n(),d("div",{key:0,class:m(["yk-progress-line-wrapper",a.value[s.type]])},[e("div",{class:m(["yk-progress-inner",c.value[s.type].bg]),style:x({"--progress-inner-w":r.value,"--progress-inner--custom":s.strokeColor})},null,6),s.showText?(n(),d("div",W,[P(i.$slots,"format",{percent:s.percent},()=>[e("div",null,F(r.value),1),v(D)(s.status)?(n(),d("div",{key:0,class:m(["yk-progress-icon",c.value[s.type].icon])},[(n(),_(w(v(D)(s.status))))],2)):h("",!0)])])):h("",!0)],2)):s.type==="circle"?(n(),d("div",{key:1,class:m(["yk-progress-circle-wrapper",a.value[s.type]])},[(n(),d("svg",{class:"yk-progress-svg",style:x(p.value.svgWh)},[e("circle",{r:p.value.r,cx:p.value.cx,cy:p.value.cy,"stroke-width":p.value.strokeWidth,fill:"transparent",class:"yk-progress-circle-bg"},null,8,Y),e("circle",{r:p.value.r,cx:p.value.cx,cy:p.value.cy,"stroke-width":p.value.strokeWidth,fill:"transparent",class:m(["yk-progress-circle",c.value[s.type].stroke]),style:x({"--progress-circle--custom":s.strokeColor}),"stroke-dasharray":f.value.circumference,"stroke-dashoffset":f.value.dashoffset},null,14,M)],4)),s.showText?(n(),d("div",O,[P(i.$slots,"format",{percent:s.percent},()=>[v(D)(s.status)?(n(),d("div",{key:0,class:m(["yk-progress-circle-icon",c.value[s.type].icon])},[(n(),_(w(v(D)(s.status,!0))))],2)):(n(),d("div",j,F(r.value),1))])])):h("",!0)],2)):h("",!0)]))}}),U=I(q),C=U;const Z={};function G(u,s){const r=C,a=g;return n(),_(a,{direction:"vertical"},{default:o(()=>[t(r),t(r,{"show-text":!1}),t(r,{percent:50,"stroke-color":"red"}),t(r,{percent:90,"stroke-color":"#000"})]),_:1})}const H=A(Z,[["render",G]]),J={style:{color:"red"}},K=B({__name:"progress-circle",setup(u){const s=N(10);return setInterval(()=>{s.value!==100&&(s.value+=10)},1e3),(r,a)=>{const c=C,p=g;return n(),_(p,null,{default:o(()=>[t(c,{type:"circle",status:"success",size:"s"}),t(c,{type:"circle",percent:50,size:"m"}),t(c,{type:"circle",percent:99,size:"l"},{format:o(({percent:f})=>[e("div",J,"剩余"+F(f),1)]),_:1}),t(c,{type:"circle",percent:s.value,size:"l"},null,8,["percent"])]),_:1})}}}),Q={};function R(u,s){const r=C,a=g;return n(),_(a,{direction:"vertical"},{default:o(()=>[t(r,{size:"s"}),t(r,{size:"m"}),t(r,{size:"l"})]),_:1})}const X=A(Q,[["render",R]]),L={};function ee(u,s){const r=C,a=g;return n(),_(a,{direction:"vertical"},{default:o(()=>[t(r),t(r,{status:"success"}),t(r,{status:"error"})]),_:1})}const se=A(L,[["render",ee]]),te={};function re(u,s){const r=C,a=g;return n(),_(a,null,{default:o(()=>[t(r,{type:"circle"}),t(r,{type:"circle",status:"success"}),t(r,{type:"circle",status:"error"})]),_:1})}const oe=A(te,[["render",re]]),le={},ce={style:{color:"red"}};function ne(u,s){const r=C,a=g;return n(),_(a,{direction:"vertical"},{default:o(()=>[t(r,null,{format:o(({percent:c})=>[e("span",ce,"剩余"+F(c),1)]),_:1})]),_:1})}const ae=A(le,[["render",ne]]),pe=e("p",null,"进度条基本用法",-1),ue=e("p",null,[l("设置 "),e("code",null,'type="circle"'),l(" 将会展示环形进度条。")],-1),ie=e("p",null,[l("进度条分为："),e("code",null,"s"),l("、"),e("code",null,"m"),l("、"),e("code",null,"l"),l(" 3 种尺寸。高度分别为："),e("code",null,"4px"),l("、"),e("code",null,"6px"),l("、"),e("code",null,"8px"),l("。默认尺寸为 "),e("code",null,"m"),l("。")],-1),de=e("p",null,[l("通过 "),e("code",null,"status"),l(" 指定进度条状态")],-1),_e=e("p",null,[l("设置 "),e("code",null,"status"),l(" 将会展示不同状态的环形进度条。")],-1),ye=e("p",null,[l("通过"),e("code",null,"slot"),l("添加自定义内容。")],-1),ke=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"type"),e("td",null,"进度条类型（必填）"),e("td",null,"'line'｜'circle'"),e("td",null,"line")]),e("tr",null,[e("td",null,"percent"),e("td",null,"百分比"),e("td",null,"number"),e("td",null,"20")]),e("tr",null,[e("td",null,"size"),e("td",null,"尺寸"),e("td",null,"'s'｜'m' ｜'l'"),e("td",null,"m")]),e("tr",null,[e("td",null,"strokeColor"),e("td",null,"进度条颜色"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"status"),e("td",null,"进度条状态"),e("td",null,"'normal'｜'success'｜'error'"),e("td",null,"normal")]),e("tr",null,[e("td",null,"showText"),e("td",null,"是否显示进度数值和状态图标"),e("td",null,"boolean"),e("td",null,"true")])])])],-1),me=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"插槽名"),e("th",null,"描述"),e("th",null,"参数")])]),e("tbody",null,[e("tr",null,[e("td",null,"format"),e("td",null,"自定义进度条尾部内容"),e("td",null,"percent")])])])],-1),Ce={__name:"doc",setup(u){return(s,r)=>{const a=$("yk-title"),c=$("yk-snippet"),p=$("DocPage");return n(),_(p,null,{default:o(()=>[t(a,{level:2,id:"YkProgress进度条"},{default:o(()=>[l("YkProgress 进度条")]),_:1}),t(c,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20direction%3D%22vertical%22%3E%0A%20%20%20%20%3Cyk-progress%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20%3Ashow-text%3D%22false%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20%3Apercent%3D%2250%22%20%3Astroke-color%3D%22'red'%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20%3Apercent%3D%2290%22%20%3Astroke-color%3D%22'%23000'%22%3E%3C%2Fyk-progress%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:o(()=>[t(H)]),desc:o(()=>[pe]),_:1}),t(c,{title:"环形进度条",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%20status%3D%22success%22%20size%3D%22s%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%20%3Apercent%3D%2250%22%20size%3D%22m%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%20%3Apercent%3D%2299%22%20size%3D%22l%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23format%3D%22%7B%20percent%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22color%3A%20red%22%3E%E5%89%A9%E4%BD%99%7B%7B%20percent%20%7D%7D%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%20%3Apercent%3D%22num%22%20size%3D%22l%22%3E%3C%2Fyk-progress%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20num%20%3D%20ref(10)%0AsetInterval(()%20%3D%3E%20%7B%0A%20%20if%20(num.value%20%3D%3D%3D%20100)%20return%0A%20%20num.value%20%2B%3D%2010%0A%7D%2C%201000)%0A%3C%2Fscript%3E%0A"},{demo:o(()=>[t(K)]),desc:o(()=>[ue]),_:1}),t(c,{title:"进度条尺寸 size",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20direction%3D%22vertical%22%3E%0A%20%20%20%20%3Cyk-progress%20size%3D%22s%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20size%3D%22m%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20size%3D%22l%22%3E%3C%2Fyk-progress%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:o(()=>[t(X)]),desc:o(()=>[ie]),_:1}),t(c,{title:"进度条状态",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20direction%3D%22vertical%22%3E%0A%20%20%20%20%3Cyk-progress%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20status%3D%22success%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20status%3D%22error%22%3E%3C%2Fyk-progress%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:o(()=>[t(se)]),desc:o(()=>[de]),_:1}),t(c,{title:"环形进度条状态",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%20status%3D%22success%22%3E%3C%2Fyk-progress%3E%0A%20%20%20%20%3Cyk-progress%20type%3D%22circle%22%20status%3D%22error%22%3E%3C%2Fyk-progress%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:o(()=>[t(oe)]),desc:o(()=>[_e]),_:1}),t(c,{title:"自定义内容",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20direction%3D%22vertical%22%3E%0A%20%20%20%20%3Cyk-progress%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23format%3D%22%7B%20percent%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20style%3D%22color%3A%20red%22%3E%E5%89%A9%E4%BD%99%7B%7B%20percent%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fyk-progress%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:o(()=>[t(ae)]),desc:o(()=>[ye]),_:1}),t(a,{level:3,id:"API"},{default:o(()=>[l("API")]),_:1}),ke,t(a,{level:3,id:"Slot"},{default:o(()=>[l("Slot")]),_:1}),me]),_:1})}}};export{Ce as default};
