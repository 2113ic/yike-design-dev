import{d as D,dS as J,r as v,ej as K,ek as O,el as Q,dU as E,em as X,dC as z,c as $,dD as Z,o as r,b,e as t,dH as tt,n as P,dx as T,dG as S,dL as et,m as y,f as C,w as e,i as l,j as s,s as A,en as L,eo as ot,a as k}from"./index-2e6203f3.js";function H(i){return i===window}function I(i){return H(i)?{top:0,bottom:window.innerHeight}:i.getBoundingClientRect()}const nt=D({name:"YkAffix",__name:"affix",props:{position:{default:"top"},target:{},offset:{default:0},zIndex:{default:100}},emits:["change"],setup(i,{expose:c,emit:a}){const n=J("affix"),o=i,u=a,h=v(),f=v(),_=v({top:0,bottom:0}),d=v(!1),{height:g}=K(),{top:M,bottom:U,update:w,height:Y,width:N}=O(h,{windowScroll:!1});Q(R),E(()=>g.value,()=>{H(f.value)&&(_.value.bottom=g.value),R()}),E(()=>d.value,()=>u("change",d.value)),E(()=>o.target,()=>B()),X(f,"scroll",F),c({updatePosition:F}),z(()=>{B()});const V=$(()=>{if(!d.value)return{};const p=o.position==="bottom",m=o.position==="top";return{bottom:p?`${g.value-_.value.bottom+o.offset}px`:"",top:m?`${_.value.top+o.offset}px`:"",zIndex:o.zIndex}}),W=$(()=>({height:d.value?`${Y.value}px`:"",width:d.value?`${N.value}px`:""}));function F(){_.value=I(f.value),w()}async function B(){o.target?typeof o.target=="string"?f.value=document.querySelector(o.target)??window:f.value=o.target:f.value=window||document.documentElement,await Z(),_.value=I(f.value),w()}function R(){const{position:p,offset:m}=o,j=p==="bottom",{top:q,bottom:G}=_.value;d.value=j?G-m<=U.value:M.value-q<=m}return(p,m)=>(r(),b("div",{ref_key:"rootRef",ref:h,class:P([T(n)()]),style:S(W.value)},[t("div",{class:P([T(n)("postion",{active:d.value})]),style:S(V.value)},[tt(p.$slots,"default")],6)],6))}}),lt=et(nt),x=lt;const st={};function at(i,c){const a=A,n=x;return r(),C(n,null,{default:e(()=>[l(a,null,{default:e(()=>[s("Affix Top")]),_:1})]),_:1})}const it=y(st,[["render",at]]),ct={},ut={style:{height:"600px"}};function ft(i,c){const a=A,n=x;return r(),b("div",ut,[l(n,{offset:80},{default:e(()=>[l(a,null,{default:e(()=>[s("offset top 80px")]),_:1})]),_:1})])}const dt=y(ct,[["render",ft]]),rt={};function _t(i,c){const a=A,n=x;return r(),C(n,{offset:120,position:"bottom"},{default:e(()=>[l(a,null,{default:e(()=>[s("offset bottom 120px")]),_:1})]),_:1})}const pt=y(rt,[["render",_t]]),mt=D({__name:"affix-change",setup(i){const c=a=>{console.log(a)};return(a,n)=>{const o=A,u=x;return r(),C(u,{offset:80,position:"bottom",onChange:c},{default:e(()=>[l(o,null,{default:e(()=>[s("offset bottom 80px")]),_:1})]),_:1})}}}),At={class:"yk-scroll-wrapper"},xt=D({__name:"affix-container",setup(i){const c=L(),a=L();return z(()=>{var n;window.addEventListener("scroll",(n=a.value)==null?void 0:n.updatePosition,!0)}),ot(()=>{var n;window.removeEventListener("scroll",(n=a.value)==null?void 0:n.updatePosition,!0)}),(n,o)=>{const u=A,h=x;return r(),b("div",{ref_key:"targetRef",ref:c,class:"yk-wrapper"},[t("div",At,[l(h,{ref_key:"affixRef",ref:a,offset:30,target:c.value,style:{"margin-top":"60px"}},{default:e(()=>[l(u,null,{default:e(()=>[s("Affix Top in container")]),_:1})]),_:1},8,["target"])])],512)}}});const ht=y(xt,[["__scopeId","data-v-41b07821"]]),vt=t("p",null,"基本用法，不设置固定位置时，当页面滚动元素不可见时，元素固定在页面最顶部。",-1),yt=t("p",null,"当页面滚动或浏览器尺寸改变时，元素向上滚动到距顶部一定距离时固定。",-1),Ct=t("p",null,[s("通过设置"),t("code",null,"position"),s("属性为"),t("code",null,"bottom"),s("时，当页面滚动或浏览器尺寸改变时，元素向下滚动到距底部一定距离时固定。")],-1),gt=t("p",null,[s("当元素"),t("code",null,"fixed"),s("状态改变回调时，触发"),t("code",null,"change"),s("事件")],-1),Et=t("p",null,[s("传入"),t("code",null,"target"),s("作为滚动容器。注意：当容器外部还有滚动元素时，可以主动监听外部滚动事件，调用"),t("code",null,"updatePosition"),s("方法去更新固钉位置。")],-1),kt=t("p",null,[t("code",null,"<affix>"),s(" Props")],-1),Dt=t("div",{class:"table-container"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"描述"),t("th",null,"类型"),t("th",null,"默认值")])]),t("tbody",null,[t("tr",null,[t("td",null,"offset"),t("td",null,"偏移量"),t("td",null,"number"),t("td",null,"0")]),t("tr",null,[t("td",null,"position"),t("td",null,"偏移方向"),t("td",null,"'top'｜'bottom'"),t("td",null,"'top'")]),t("tr",null,[t("td",null,"target"),t("td",null,"滚动容器，默认是 window"),t("td",null,"string ｜ window ｜ HTMLElement"),t("td",null,"window")])])])],-1),bt=t("p",null,[t("code",null,"<affix>"),s("Events")],-1),wt=t("div",{class:"table-container"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"描述"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"change"),t("td",null,"元素固定状态改变时触发事件"),t("td",null,"fixed:boolean")])])])],-1),Ft=t("p",null,[t("code",null,"<affix>"),s("Methods")],-1),Bt=t("div",{class:"table-container"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"方法名"),t("th",null,"描述"),t("th",null,"参数"),t("th",null,"返回值")])]),t("tbody",null,[t("tr",null,[t("td",null,"updatePosition"),t("td",null,"用于主动更新位置"),t("td",null,"-"),t("td",null,"-")])])])],-1),$t={__name:"doc",setup(i){return(c,a)=>{const n=k("yk-title"),o=k("yk-snippet"),u=k("DocPage");return r(),C(u,null,{default:e(()=>[l(n,{level:2,id:"YkAffix-固钉"},{default:e(()=>[s("YkAffix 固钉")]),_:1}),l(o,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-affix%3E%0A%20%20%20%20%3Cyk-button%3EAffix%20Top%3C%2Fyk-button%3E%0A%20%20%3C%2Fyk-affix%3E%0A%3C%2Ftemplate%3E%0A"},{demo:e(()=>[l(it)]),desc:e(()=>[vt]),_:1}),l(o,{title:"顶部固定",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22height%3A%20600px%22%3E%0D%0A%20%20%20%20%3Cyk-affix%20%3Aoffset%3D%2280%22%3E%0D%0A%20%20%20%20%20%20%3Cyk-button%3Eoffset%20top%2080px%3C%2Fyk-button%3E%0D%0A%20%20%20%20%3C%2Fyk-affix%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A"},{demo:e(()=>[l(dt)]),desc:e(()=>[yt]),_:1}),l(o,{title:"底部固定",code:"%3Ctemplate%3E%0D%0A%20%20%3Cyk-affix%20%3Aoffset%3D%22120%22%20position%3D%22bottom%22%3E%0D%0A%20%20%20%20%3Cyk-button%3Eoffset%20bottom%20120px%3C%2Fyk-button%3E%0D%0A%20%20%3C%2Fyk-affix%3E%0D%0A%3C%2Ftemplate%3E%0D%0A"},{demo:e(()=>[l(pt)]),desc:e(()=>[Ct]),_:1}),l(o,{title:"固定状态改变回调",code:"%3Ctemplate%3E%0D%0A%20%20%3Cyk-affix%20%3Aoffset%3D%2280%22%20position%3D%22bottom%22%20%40change%3D%22change%22%3E%0D%0A%20%20%20%20%3Cyk-button%3Eoffset%20bottom%2080px%3C%2Fyk-button%3E%0D%0A%20%20%3C%2Fyk-affix%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aconst%20change%20%3D%20(v%3A%20any)%20%3D%3E%20%7B%0D%0A%20%20console.log(v)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A"},{demo:e(()=>[l(mt)]),desc:e(()=>[gt]),_:1}),l(o,{title:"指定容器滚动",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20ref%3D%22targetRef%22%20class%3D%22yk-wrapper%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22yk-scroll-wrapper%22%3E%0A%20%20%20%20%20%20%3Cyk-affix%0A%20%20%20%20%20%20%20%20ref%3D%22affixRef%22%0A%20%20%20%20%20%20%20%20%3Aoffset%3D%2230%22%0A%20%20%20%20%20%20%20%20%3Atarget%3D%22targetRef%22%0A%20%20%20%20%20%20%20%20style%3D%22margin-top%3A%2060px%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cyk-button%3EAffix%20Top%20in%20container%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%3C%2Fyk-affix%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20shallowRef%2C%20onMounted%2C%20onUnmounted%20%7D%20from%20'vue'%0Aconst%20targetRef%20%3D%20shallowRef%3CHTMLElement%3E()%0Aconst%20affixRef%20%3D%20shallowRef()%0AonMounted(()%20%3D%3E%20%7B%0A%20%20window.addEventListener('scroll'%2C%20affixRef.value%3F.updatePosition%2C%20true)%0A%7D)%0AonUnmounted(()%20%3D%3E%20%7B%0A%20%20window.removeEventListener('scroll'%2C%20affixRef.value%3F.updatePosition%2C%20true)%0A%7D)%0A%3C%2Fscript%3E%0A%3Cstyle%20scoped%3E%0A.yk-wrapper%20%7B%0A%20%20overflow%3A%20auto%3B%0A%20%20height%3A%20200px%3B%0A%7D%0A.yk-scroll-wrapper%20%7B%0A%20%20overflow%3A%20hidden%3B%0A%20%20height%3A%20400px%3B%0A%20%20background-color%3A%20%23d4e1ff%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:e(()=>[l(ht)]),desc:e(()=>[Et]),_:1}),l(n,{level:3,id:"API"},{default:e(()=>[s("API")]),_:1}),kt,Dt,bt,wt,Ft,Bt]),_:1})}}};export{$t as default};
