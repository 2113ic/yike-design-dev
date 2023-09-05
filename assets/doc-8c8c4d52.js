import{d as b,dD as g,q as x,dT as $,o as E,b as k,dZ as D,n as d,dq as m,e7 as S,j as e,dY as y,t as B,g as w,dU as v,p as a,f as s,w as n,e as t,v as r,dN as z,a as f,k as u}from"./index-79e930ed.js";const T=Symbol("scrollbarContext"),I=b({name:"YkTimeline",__name:"timeline",props:{horizontal:{type:Boolean,default:!1},placement:{default:"right"},reverse:{type:Boolean,default:!1}},setup(c){const o=c,l=g("timeline");return x(T,$({horizontal:o.horizontal,placement:o.placement})),(i,A)=>(E(),k("div",{class:d([m(l)({horizontal:i.horizontal,reverse:i.reverse,reverseHorizontal:i.horizontal&&i.reverse},i.placement!=="alternate"?[i.placement]:[]),i.placement==="alternate"?m(l)("alternate",{horizontal:i.horizontal}):""])},[D(i.$slots,"default")],2))}}),P={key:0,viewBox:"25 25 50 50"},R=e("circle",{r:"20",cy:"50",cx:"50"},null,-1),Y=[R],O=b({name:"YkTimelineItem",__name:"timeline-item",props:{time:{},title:{},content:{},lineType:{default:"solid"},dotColor:{},pending:{type:Boolean,default:!1}},setup(c){const o=g("timeline__item"),l=S(T);return(i,A)=>{var p,F,h;return E(),k("div",{class:d(m(o)())},[e("div",{class:d(m(o)("timeline"))},[e("span",{class:d([m(o)("timeline__tail",{horizontal:(p=m(l))==null?void 0:p.horizontal})]),style:y((F=m(l))!=null&&F.horizontal?{borderTopStyle:i.lineType}:{borderLeftStyle:i.lineType})},null,6),e("div",{class:d([m(o)("timeline__dot-item",{horizontal:(h=m(l))==null?void 0:h.horizontal,pending:i.pending})])},[D(i.$slots,"dot",{},()=>[i.pending?(E(),k("svg",P,Y)):(E(),k("span",{key:1,class:d([m(o)("timeline__dot-item__dot")]),style:y(i.dotColor?{background:i.dotColor}:{})},null,6))])],2)],2),e("div",{ref:"desc",class:d(m(o)("desc"))},[D(i.$slots,"title",{},()=>[e("span",{class:d(m(o)("desc__title"))},B(i.title||"--"),3)]),i.$slots.content||i.content?D(i.$slots,"content",{key:0},()=>[e("span",{class:d(m(o)("desc__content"))},B(i.content),3)]):w("",!0),D(i.$slots,"time",{},()=>[e("span",{class:d(m(o)("desc__time"))},B(i.time),3)])],2)],2)}}}),C=v(I),_=v(O);const N={};function V(c,o){const l=_,i=C,A=r;return E(),s(A,null,{default:n(()=>[t(i,null,{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27"}),t(l,{title:"这里是第二个步骤",time:"2023-07-27"}),t(l,{title:"第三个步骤",time:"2023-07-27"}),t(l,{title:"第四个步骤",time:"2023-07-27"})]),_:1})]),_:1})}const L=a(N,[["render",V]]),j={};function q(c,o){const l=_,i=C,A=r;return E(),s(A,null,{default:n(()=>[t(i,{reverse:""},{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27"}),t(l,{title:"这里是第二个步骤",time:"2023-07-27"}),t(l,{title:"第三个步骤",time:"2023-07-27"}),t(l,{title:"第四个步骤",time:"2023-07-27"})]),_:1})]),_:1})}const H=a(j,[["render",q]]),K={};function U(c,o){const l=_,i=C,A=r;return E(),s(A,null,{default:n(()=>[t(i,{style:{width:"200px"}},{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27"}),t(l,{title:"这里是第二个步骤",content:"我是二级内容，我是个可以有很多话想说的人，你不能限制我说多少内容，你可以换行显示的。",time:"2023-07-27"}),t(l,{title:"第三个步骤",time:"2023-07-27"})]),_:1})]),_:1})}const Z=a(K,[["render",U]]),G={};function J(c,o){const l=_,i=C,A=r;return E(),s(A,{style:{width:"100%"}},{default:n(()=>[t(i,{placement:"left"},{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27"}),t(l,{title:"这里是第二个步骤",time:"2023-07-27"}),t(l,{title:"第三个步骤",time:"2023-07-27"}),t(l,{title:"第四个步骤",time:"2023-07-27"})]),_:1})]),_:1})}const M=a(G,[["render",J]]),Q={};function W(c,o){const l=_,i=C,A=r;return E(),s(A,null,{default:n(()=>[t(i,{horizontal:""},{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27"}),t(l,{title:"这里是第二个步骤",time:"2023-07-27"}),t(l,{title:"第三个步骤",time:"2023-07-27"}),t(l,{title:"第四个步骤",time:"2023-07-27"})]),_:1})]),_:1})}const X=a(Q,[["render",W]]),e2={};function t2(c,o){const l=_,i=C,A=r;return E(),s(A,{style:{width:"100%",height:"100%"}},{default:n(()=>[t(i,{placement:"alternate"},{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27"}),t(l,{title:"这里是第二个步骤",time:"2023-07-27"}),t(l,{title:"第三个步骤",time:"2023-07-27"}),t(l,{title:"第四个步骤",time:"2023-07-27"})]),_:1})]),_:1})}const l2=a(e2,[["render",t2]]),i2={};function n2(c,o){const l=_,i=C,A=r;return E(),s(A,{style:{width:"100%",height:"100%"}},{default:n(()=>[t(i,null,{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27","dot-color":"rgba(var(--gray), 0.48)"}),t(l,{title:"第二个步骤",time:"2023-07-27","dot-color":"rgb(var(--scolor))"}),t(l,{title:"这里是第三个步骤",time:"2023-07-27","dot-color":"rgb(var(--wcolor))"}),t(l,{title:"第四个步骤还在进行中…",time:"2023-07-27"})]),_:1})]),_:1})}const A2=a(i2,[["render",n2]]),o2={};function E2(c,o){const l=_,i=z,A=C,p=r;return E(),s(p,{style:{width:"100%",height:"100%"}},{default:n(()=>[t(A,null,{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27","dot-color":"rgba(var(--gray), 0.48)"}),t(l,{title:"第二个步骤",time:"2023-07-27"},{dot:n(()=>[t(i,{style:y({fontSize:"12px",padding:"2px",boxSizing:"border-box",borderRadius:"50%",backgroundColor:"rgb(var(--scolor))"})},null,8,["style"])]),_:1}),t(l,{title:"这里是第三个步骤",time:"2023-07-27"},{dot:n(()=>[t(i,{style:y({fontSize:"12px",padding:"2px",boxSizing:"border-box",borderRadius:"50%",backgroundColor:"rgb(var(--ecolor))"})},null,8,["style"])]),_:1}),t(l,{title:"第四个步骤还在进行中…",time:"2023-07-27"})]),_:1})]),_:1})}const m2=a(o2,[["render",E2]]),c2={};function s2(c,o){const l=_,i=C,A=r;return E(),s(A,{style:{width:"100%",height:"100%"}},{default:n(()=>[t(i,null,{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27","line-type":"solid"}),t(l,{title:"第二个步骤",time:"2023-07-27","line-type":"dotted"}),t(l,{title:"这里是第三个步骤",time:"2023-07-27","line-type":"dashed"}),t(l,{title:"第四个步骤还在进行中…",time:"2023-07-27"})]),_:1})]),_:1})}const d2=a(c2,[["render",s2]]),a2={};function r2(c,o){const l=_,i=z,A=C,p=r;return E(),s(p,{style:{width:"100%",height:"100%"}},{default:n(()=>[t(A,null,{default:n(()=>[t(l,{title:"第一个步骤",time:"2023-07-27",pending:""}),t(l,{title:"第二个步骤",time:"2023-07-27"},{dot:n(()=>[t(i,{style:y({fontSize:"12px",color:"#ffffff",padding:"2px",boxSizing:"border-box",borderRadius:"50%",backgroundColor:"rgb(var(--scolor))"})},null,8,["style"])]),_:1}),t(l,{title:"这里是第三个步骤",time:"2023-07-27"},{dot:n(()=>[t(i,{style:y({fontSize:"12px",color:"#ffffff",padding:"2px",boxSizing:"border-box",borderRadius:"50%",backgroundColor:"rgb(var(--ecolor))"})},null,8,["style"])]),_:1}),t(l,{title:"第四个步骤还在进行中…",time:"2023-07-27"})]),_:1})]),_:1})}const C2=a(a2,[["render",r2]]),_2=e("p",null,null,-1),u2=e("p",null,null,-1),p2=e("p",null,null,-1),y2=e("p",null,null,-1),D2=e("p",null,null,-1),k2=e("p",null,null,-1),B2=e("p",null,null,-1),f2=e("p",null,null,-1),F2=e("p",null,null,-1),h2=e("p",null,null,-1),b2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"horizontal"),e("td",null,"水平的"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"placement"),e("td",null,[u("文字位置，竖直时仅 "),e("code",null,"left | right"),u(" 生效，水平时仅 "),e("code",null,"top | bottom"),u(" 生效")]),e("td",null,[e("code",null,"'left' | 'right'| 'top'|'bottom'|'alternate'")]),e("td")]),e("tr",null,[e("td",null,"reverse"),e("td",null,"倒转"),e("td",null,"boolean"),e("td",null,"false")])])])],-1),g2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"title"),e("td",null,"标题"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"content"),e("td",null,"内容"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"time"),e("td",null,"时间"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"lineType"),e("td",null,"连接线样式"),e("td",null,[e("code",null,"'solid'| 'dashed'|'dotted'")]),e("td",null,"'solid'")]),e("tr",null,[e("td",null,"dotColor"),e("td",null,"节点颜色"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"pending"),e("td",null,"将节点转换成 pending"),e("td",null,"boolean"),e("td",null,"false")])])])],-1),v2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述")])]),e("tbody",null,[e("tr",null,[e("td",null,"title"),e("td",null,"自定义标题")]),e("tr",null,[e("td",null,"content"),e("td",null,"自定义内容")]),e("tr",null,[e("td",null,"title"),e("td",null,"自定义时间")]),e("tr",null,[e("td",null,"dot"),e("td",null,"自定义节点")])])])],-1),T2={__name:"doc",setup(c){return(o,l)=>{const i=f("yk-title"),A=f("yk-snippet"),p=f("DocPage");return E(),s(p,null,{default:n(()=>[t(i,{level:2,id:"YkTimeline时间线"},{default:n(()=>[u("YkTimeline 时间线")]),_:1}),t(A,{title:"基本使用",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-timeline%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(L)]),desc:n(()=>[_2]),_:1}),t(A,{title:"倒转",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-timeline%20reverse%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(H)]),desc:n(()=>[u2]),_:1}),t(A,{title:"当某个标题下有二级内容",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-timeline%20style%3D%22width%3A%20200px%22%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20content%3D%22%E6%88%91%E6%98%AF%E4%BA%8C%E7%BA%A7%E5%86%85%E5%AE%B9%EF%BC%8C%E6%88%91%E6%98%AF%E4%B8%AA%E5%8F%AF%E4%BB%A5%E6%9C%89%E5%BE%88%E5%A4%9A%E8%AF%9D%E6%83%B3%E8%AF%B4%E7%9A%84%E4%BA%BA%EF%BC%8C%E4%BD%A0%E4%B8%8D%E8%83%BD%E9%99%90%E5%88%B6%E6%88%91%E8%AF%B4%E5%A4%9A%E5%B0%91%E5%86%85%E5%AE%B9%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E6%8D%A2%E8%A1%8C%E6%98%BE%E7%A4%BA%E7%9A%84%E3%80%82%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(Z)]),desc:n(()=>[p2]),_:1}),t(A,{title:"内容可以放置在左边",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20style%3D%22width%3A%20100%25%22%3E%0A%20%20%20%20%3Cyk-timeline%20placement%3D%22left%22%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(M)]),desc:n(()=>[y2]),_:1}),t(A,{title:"水平时间线",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%3E%0A%20%20%20%20%3Cyk-timeline%20horizontal%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(X)]),desc:n(()=>[D2]),_:1}),t(A,{title:"内容交错放置在两边",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%3Cyk-timeline%20placement%3D%22alternate%22%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%20%2F%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(l2)]),desc:n(()=>[k2]),_:1}),t(A,{title:"自定义节点颜色",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%3Cyk-timeline%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20dot-color%3D%22rgba(var(--gray)%2C%200.48)%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20dot-color%3D%22rgb(var(--scolor))%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20dot-color%3D%22rgb(var(--wcolor))%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%E8%BF%98%E5%9C%A8%E8%BF%9B%E8%A1%8C%E4%B8%AD%E2%80%A6%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(A2)]),desc:n(()=>[B2]),_:1}),t(A,{title:"自定义节点",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%3Cyk-timeline%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20dot-color%3D%22rgba(var(--gray)%2C%200.48)%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23dot%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconTickOutline%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20'12px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%20'2px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20boxSizing%3A%20'border-box'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%20'50%25'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgb(var(--scolor))'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23dot%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconTickOutline%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20'12px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%20'2px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20boxSizing%3A%20'border-box'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%20'50%25'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgb(var(--ecolor))'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%E8%BF%98%E5%9C%A8%E8%BF%9B%E8%A1%8C%E4%B8%AD%E2%80%A6%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(m2)]),desc:n(()=>[f2]),_:1}),t(A,{title:"自定义轴线样式",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%3Cyk-timeline%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20line-type%3D%22solid%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20line-type%3D%22dotted%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20line-type%3D%22dashed%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%E8%BF%98%E5%9C%A8%E8%BF%9B%E8%A1%8C%E4%B8%AD%E2%80%A6%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(d2)]),desc:n(()=>[F2]),_:1}),t(A,{title:"pending",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%3Cyk-timeline%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%20%20pending%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23dot%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconTickOutline%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20'12px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%20'2px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20boxSizing%3A%20'border-box'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%20'50%25'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgb(var(--scolor))'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%20title%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E7%AC%AC%E4%B8%89%E4%B8%AA%E6%AD%A5%E9%AA%A4%22%20time%3D%222023-07-27%22%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23dot%3E%0A%20%20%20%20%20%20%20%20%20%20%3CIconTickOutline%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20'12px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'%23ffffff'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%20'2px'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20boxSizing%3A%20'border-box'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%20'50%25'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgb(var(--ecolor))'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%20%20%3Cyk-timeline-item%0A%20%20%20%20%20%20%20%20title%3D%22%E7%AC%AC%E5%9B%9B%E4%B8%AA%E6%AD%A5%E9%AA%A4%E8%BF%98%E5%9C%A8%E8%BF%9B%E8%A1%8C%E4%B8%AD%E2%80%A6%22%0A%20%20%20%20%20%20%20%20time%3D%222023-07-27%22%0A%20%20%20%20%20%20%3E%3C%2Fyk-timeline-item%3E%0A%20%20%20%20%3C%2Fyk-timeline%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A"},{demo:n(()=>[t(C2)]),desc:n(()=>[h2]),_:1}),t(i,{level:3,id:"API"},{default:n(()=>[u("API")]),_:1}),t(i,{level:4,id:"TimelineProps"},{default:n(()=>[u("Timeline Props")]),_:1}),b2,t(i,{level:4,id:"TimelineItemProps"},{default:n(()=>[u("TimelineItem Props")]),_:1}),g2,t(i,{level:3,id:"Slot"},{default:n(()=>[u("Slot")]),_:1}),t(i,{level:4,id:"TimelineSlots"},{default:n(()=>[u("Timeline Slots")]),_:1}),v2]),_:1})}}};export{T2 as default};
