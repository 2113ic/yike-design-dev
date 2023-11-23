import{dR as W,d as M,dS as K,dT as ae,r as w,c as q,dU as se,dC as me,o as p,b as g,e,n as f,dx as a,dV as V,i as r,dW as fe,E as ie,dX as ve,dY as _e,dZ as ge,t as le,d_ as Ee,f as x,dy as we,g as y,H as de,d$ as Ce,e0 as De,w as D,e1 as Fe,e2 as pe,e3 as ke,e4 as Ue,e5 as be,j as b,F as oe,h as ue,s as ye,Y as Be,dv as Re,dL as $e,a as ne}from"./index-2e6203f3.js";import{Y as Ie,_ as xe}from"./index-18ec85e9.js";import{Y as Me}from"./index-d502aa67.js";import{Y as ce}from"./index-a2eada39.js";import"./index-2e75a806.js";const Le=["image","jpeg","png","gif"],Oe=({uid:h,uploadUrl:A,selectedFile:t,onSuccess:s,onError:n,onProgress:E})=>{const d=new XMLHttpRequest,F=new FormData;F.append("file",t);try{d.open("POST",A,!0)}catch{n(h,"上传失败、请求地址有误")}return d.upload.onprogress=v=>{if(v.lengthComputable){const C=v.loaded/v.total*100;E(h,C)}},d.onload=function(){if(d.status===200){const v=JSON.parse(d.responseText);v.error||v.err?n(h,v):s(h,v)}},d.onerror=function(){n(h,d.responseText)},d.send(F),{abort(){d.abort()}}};function Ae(h,A,t,s){const n=s/100*Math.PI*2,E=h+t*Math.sin(n),d=A-t*Math.cos(n);return`M${h},${A} L${h},${A-t} A${t},${t} 0 ${n<Math.PI?"0":"1"},1 ${E},${d} Z`}function Ye(h){return h.map(t=>({uid:W(),status:"success",...t}))}function X(h,A){return A.findIndex(t=>h===t.uid)}function Se(h){var s;const A=(s=h.split(".").pop())==null?void 0:s.toLowerCase(),t={word:"IconWordFileOutline",pdf:"IconPdfOutline",excel:"IconExcelFileOutline",ppt:"IconPptFileOutline",mp4:"IconVideoOutline",audio:"IconAudioFileOutline",text:"IconTxtFileOutline",png:"IconImageOutline",jpg:"IconImageOutline",video:"IconVideoOutline"};switch(A){case"jpg":case"png":case"jpeg":case"gif":return t.png;case"pdf":return t.pdf;case"mp4":case"mkv":return t.mp4;case"doc":case"docx":return t.word;case"xls":case"xlsx":return t.excel;case"ppt":case"pptx":return t.ppt;case"txt":return t.text;default:return"IconFileOutline"}}function re(h,A){return new File([h],A,{type:h.type})}const Ve=["onMousedown","onMousemove","onMouseup"],he=M({__name:"crop-picture",props:{fileContent:{}},setup(h,{expose:A}){const t={isDragging:!1,startX:0,startY:0,clientX:0,clientY:0,deltaX:0,deltaY:0},s=K("image-crop"),n=h,{fileContent:E}=ae(n),d=w(),F=w(),v=w(.5),C=w(50),R=w(50),c=w(0),I=w(0),B=new Image;B.crossOrigin="Anonymous";const L=w(0),S=w(0),Y=q(()=>{var u;const i=(u=E.value)==null?void 0:u.raw;return i?URL.createObjectURL(i):""});se(()=>C.value,i=>{c.value=i/100,k()}),se(()=>R.value,i=>{I.value=Math.max(Math.min(180,(i-50)*3.8),-180),k()});const O=()=>{var _;const i=d.value,u=i.getContext("2d");B.src=(((_=E.value)==null?void 0:_.url)||Y.value)??"",B.onload=()=>{const l=B.width/B.height;S.value=300,L.value=Math.min(S.value*l,700),i.width=L.value,i.height=S.value,c.value=Math.min(S.value/B.height,1),v.value=c.value,C.value=v.value*100,u.drawImage(B,0,0,B.width*c.value,B.height*c.value),P()}},k=()=>{const i=d.value,u=i.getContext("2d");u.clearRect(0,0,i.width,i.height);const _=t.clientX+t.deltaX,l=t.clientY+t.deltaY,o=i.width/2,m=i.height/2,U=I.value*Math.PI/180;u.translate(o,m),u.rotate(U),u.translate(-o,-m),u.drawImage(B,_,l,B.width*c.value,B.height*c.value),u.setTransform(1,0,0,1,0,0),P()},P=()=>{const i=d.value,u=i.getContext("2d"),_=240,l=(i.width-_)/2,o=(i.height-_)/2;u.strokeStyle="rgba(255,255,255,0.5)",u.lineWidth=2,u.strokeRect(l,o,_,_),u.fillStyle="rgba(0, 0, 0, 0.5)",u.fillRect(0,0,i.width,o),u.fillRect(0,o+_,i.width,i.height-(o+_)),u.fillRect(0,o,l,_),u.fillRect(l+_,o,i.width-(l+_),_)},Z=()=>{I.value=Math.min(180,15+I.value),R.value=Math.max(Math.min(50+I.value*3.8/15,100),0)},G=()=>{I.value=Math.max(-180,I.value-15),R.value=Math.max(Math.min(50+I.value*3.8/15,100),0)},H=()=>{C.value=Math.max(C.value-1,0),k()},z=()=>{C.value=Math.min(C.value+1,100),k()},N=i=>{const{clientX:u,clientY:_}=i;t.isDragging=!0,t.startX=u,t.startY=_},J=i=>{if(!t.isDragging)return;const{clientX:u,clientY:_}=i;t.deltaX=u-t.startX,t.deltaY=_-t.startY,k()},T=ge(i=>{var u=Math.max(-1,Math.min(1,i.wheelDelta||-i.detail));u<0?H():z()},5),Q=i=>{t.isDragging=!1;const{clientX:u,clientY:_}=i,l=u-t.startX,o=_-t.startY;t.clientX+=l,t.clientY+=o,t.deltaX=0,t.deltaY=0};me(()=>{O()});const ee=async()=>{const i=d.value,u=240,_=(i.width-u)/2,l=(i.height-u)/2,o=document.createElement("canvas");o.width=u,o.height=u,o.getContext("2d").drawImage(i,_,l,u,u,0,0,u,u);let U;return await te(o).then(function($){U=$}),{blobRaw:U,uid:E.value.uid}},te=i=>new Promise(function(u,_){i.toBlob(function(l){u(l)},"image/jpeg",.8)});return A({handleCrop:ee}),(i,u)=>{const _=fe,l=ie,o=ve,m=_e;return p(),g("div",{class:f(a(s)())},[e("div",{ref_key:"canvasContainer",ref:F,class:f(a(s)("canvas-container")),onMousedown:V(N,["prevent"]),onMousemove:V(J,["prevent"]),onMouseup:V(Q,["prevent"]),onWheel:u[0]||(u[0]=V((...U)=>a(T)&&a(T)(...U),["stop"])),onMousewheel:u[1]||(u[1]=V((...U)=>a(T)&&a(T)(...U),["stop"]))},[e("canvas",{ref_key:"canvasRef",ref:d},null,512)],42,Ve),e("div",{class:f(a(s)("operate"))},[e("div",{class:f(a(s)("operate-left"))},[r(_,{onClick:V(H,["stop"])},null,8,["onClick"]),r(a(ce),{modelValue:C.value,"onUpdate:modelValue":u[2]||(u[2]=U=>C.value=U),class:f(a(s)("scale-bar"))},null,8,["modelValue","class"]),r(l,{onClick:V(z,["stop"])},null,8,["onClick"])],2),e("div",{class:f(a(s)("operate-right"))},[r(o,{onClick:G}),r(a(ce),{modelValue:R.value,"onUpdate:modelValue":u[3]||(u[3]=U=>R.value=U),class:f(a(s)("scale-bar"))},null,8,["modelValue","class"]),r(m,{onClick:Z})],2)],2)],2)}}}),Pe=["onDrop","onDragover"],Xe=M({__name:"upload-draggle",props:{desc:{default:""},disabled:{type:Boolean,default:!1},accept:{default:"*"}},emits:["handleUpload","handleDraggleFiles"],setup(h,{emit:A}){const t=h,s=A,n=K("upload-draggle"),E=w(!1),d=C=>{if(t.disabled)return;E.value=!1,C.stopPropagation();const R=Array.from(C.dataTransfer.files);s("handleDraggleFiles",R)},F=()=>{t.disabled||(E.value=!0)},v=()=>{s("handleUpload")};return(C,R)=>{const c=Ee;return p(),g("div",{class:f(a(n)()),onDrop:V(d,["prevent"]),onDragover:V(F,["prevent"]),onClick:v},[r(c,{class:f(a(n)("icon"))},null,8,["class"]),e("span",{class:f(a(n)("methods"))},"单击或拖动文件到此区域进行上传",2),e("span",{class:f(a(n)("desc"))},le(C.desc),3)],42,Pe)}}}),He={width:"14",height:"14"},ze=e("circle",{cx:"7",cy:"7",r:"7",class:"uploading-bg","fill-opacity":"0.6"},null,-1),je=["d"],Te=M({__name:"upload-file-item",props:{progress:{default:0},fileContent:{default:()=>({status:"success",name:"",uid:W()})},shape:{},avatar:{type:Boolean}},emits:["handleAbort","handleRemove","handleReUpload"],setup(h,{emit:A}){const t=h,s=K("upload-file"),{status:n,name:E,uid:d}=ae(t.fileContent),F=A,v=q(()=>Se(E.value)),C=()=>{F("handleAbort",d.value)},R=()=>{F("handleRemove",d.value)},c=()=>{F("handleReUpload",d.value)};return(I,B)=>{const L=de,S=Ce,Y=De;return p(),g("div",{class:f(a(s)())},[e("div",{class:f(a(s)("main"))},[e("div",{class:f(a(s)("left"))},[(p(),x(we(v.value),{class:"annex-yk-icon"})),e("span",{class:f(a(s)(a(n)))},le(a(E)),3)],2),e("div",{class:f(a(s)("right"))},[a(n)!=="uploading"?(p(),x(L,{key:0,class:"delete-yk-icon",onClick:R})):y("",!0),"success".includes(a(n))?(p(),x(S,{key:1,class:"success-yk-icon"})):y("",!0),["error","pause"].includes(a(n))?(p(),x(Y,{key:2,class:"re-upload-yk-icon",onClick:c})):y("",!0),["uploading"].includes(a(n))?(p(),g("div",{key:3,class:"abort-yk-icon-container",onClick:C},[(p(),g("svg",He,[ze,e("path",{d:a(Ae)(7,7,7,I.progress),class:"uploading-bg"},null,8,je)]))])):y("",!0)],2)],2)],2)}}}),Ne=["src"],We={width:"36",height:"36"},qe=e("circle",{cx:"18",cy:"18",r:"18","fill-opacity":"0.5"},null,-1),Ze=["d"],Ge={key:2,class:"upload-icon fail-icon"},Je={key:3,class:"hover-icons"},Ke={key:4,class:"hover-icons"},Qe={key:5,class:"hover-icons"},el=M({__name:"upload-picture-item",props:{progress:{default:0},fileContent:{default:()=>({status:"success",name:"",uid:W(),avatar:!1})},shape:{default:"default"},avatar:{type:Boolean}},emits:["handleAbort","handleRemove","handleReUpload","handleEdit","handleReview"],setup(h,{emit:A}){const t=h,s=K("upload-picture"),{status:n,uid:E,raw:d,url:F}=ae(t.fileContent),v=w(!1),C=w(),R=q(()=>d!=null&&d.value?URL.createObjectURL(d.value):""),c=A,I=()=>{c("handleReview",E.value)},B=()=>{c("handleAbort",E.value)},L=()=>{c("handleRemove",E.value)},S=()=>{c("handleReUpload",E.value)},Y=()=>{v.value=!0},O=async()=>{const{blobRaw:k,uid:P}=await C.value.handleCrop();c("handleEdit",k,P),v.value=!1};return(k,P)=>{const Z=Fe,G=pe,H=de,z=ke,N=Ue;return p(),g("div",{class:f(a(s)([k.shape]))},[R.value||a(F)?(p(),g("img",{key:0,src:a(F)||R.value,alt:""},null,8,Ne)):y("",!0),e("div",{class:f(a(s)("overlay-hover",[a(n)]))},null,2),a(n)==="uploading"?(p(),g("div",{key:1,class:"upload-icon uploading-icons",onClick:B},[(p(),g("svg",We,[qe,e("path",{d:a(Ae)(18,18,18,k.progress),class:"progress-path"},null,8,Ze)]))])):y("",!0),["error","pause"].includes(a(n))?(p(),g("div",Ge,[r(Z)])):y("",!0),["error","pause"].includes(a(n))?(p(),g("div",Je,[r(G,{onClick:S}),r(H,{onClick:L})])):y("",!0),a(n)==="success"&&!k.avatar?(p(),g("div",Ke,[r(z,{onClick:I}),r(H,{onClick:L})])):y("",!0),a(n)==="success"&&k.avatar?(p(),g("div",Qe,[r(N,{onClick:Y}),r(H,{onClick:L})])):y("",!0),v.value?(p(),x(a(Ie),{key:6,modelValue:v.value,"onUpdate:modelValue":P[0]||(P[0]=J=>v.value=J),scrollable:!1,title:"图片裁剪",size:"small",onOnSubmit:O},{default:D(()=>[r(he,{ref_key:"cropRef",ref:C,"file-content":k.fileContent},null,8,["file-content"])]),_:1},8,["modelValue"])):y("",!0)],2)}}}),ll=["accept","multiple"],tl=e("div",null,"上传文件",-1),ol={class:"picture-desc"},nl=M({name:"YkUpload",__name:"upload",props:{accept:{default:"*"},maxSize:{default:3*1024*1024},multiple:{type:Boolean,default:!0},limit:{default:0},uploadUrl:{default:""},shape:{default:"default"},fileList:{default:()=>[]},desc:{default:""},avatar:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1}},emits:["handleSuccess","handleDelete","handleError","handleBeforeUpload"],setup(h,{emit:A}){const t=K("upload"),s=h,n=A,E=w(!1),d=w(!1),F=w(),v=w(!1),C=be({name:"",url:"",uid:W(),status:"uploading"}),R=w(0),c=w(Ye(s.fileList)),I=w(),B=new Map,L=q(()=>c.value.length),S=q(()=>c.value.map(o=>o.raw?URL.createObjectURL(o.raw):o.url)),Y=q(()=>!!s.limit&&L.value>=s.limit);E.value=Le.some(l=>s.accept.includes(l))||s.avatar;const{proxy:O}=Re(),k=async l=>{const o=l==null?void 0:l.name;if(!o){O.$message.error("文件上传失败，请重新选择文件");return}const m=W();c.value.push({name:o,status:"uploading",raw:l,uid:m});const U={uid:m,uploadUrl:s.uploadUrl,selectedFile:l,fileName:o,onSuccess:Z,onError:H,onProgress:G};B.set(m,Oe(U))},P=l=>{c.value=[];const o=l==null?void 0:l.name;if(!o){O.$message.error("文件上传失败，请重新选择文件");return}const m=W();C.name=o,C.raw=l,C.uid=m,v.value=!0},Z=(l,o)=>{O.$message.success("上传成功");const m=X(l,c.value);c.value[m].status="success",n("handleSuccess",o,c.value)},G=(l,o)=>{const m=X(l,c.value);c.value[m].progress=o},H=(l,o)=>{O.$message.error(o||"上传失败");const m=X(l,c.value);c.value[m].status="error",n("handleError",o,c.value)},z=async()=>{var l;Y.value||(l=I.value)==null||l.click()},N=l=>(n("handleBeforeUpload",l),s.maxSize&&l.size>s.maxSize?(O.$message.error("超出限制大小，请压缩后上传"),!1):s.limit&&s.limit<=L.value?(O.$message.error("数量超出限制"),!1):!0),J=l=>{const o=Array.from(l.target.files);if(o.length){if(s.avatar){N(o[0]),P(o[0]);return}o.forEach(m=>{const U=N(m);m&&U&&k(m)}),l.target.value=""}},T=l=>{const o=X(l,c.value),m=B.get(l);m!=null&&m.abort&&(m.abort(),c.value[o].status="pause",O.$message.error("用户中断上传"))},Q=l=>{c.value.splice(X(l,c.value),1),n("handleDelete",c.value),O.$message.success("已删除")},ee=l=>{const o=X(l,c.value),m=c.value[o].raw;c.value.splice(o,1),k(m)},te=(l,o)=>{const m=X(o,c.value),U=c.value[m].name;c.value.splice(X(o,c.value),1);const $=re(l,U);k($)},i=l=>{const o=X(l,c.value);R.value=o,d.value=!0},u=l=>{l.forEach(o=>{k(o)})},_=async()=>{const{blobRaw:l}=await F.value.handleCrop(),o=re(l,C.name);k(o),v.value=!1};return(l,o)=>{const m=ye,U=Be;return p(),g(oe,null,[e("div",{class:f(a(t)())},[e("input",{ref_key:"inputRef",ref:I,style:{display:"none"},accept:l.accept,multiple:l.multiple,type:"file",onChange:J,onClick:o[0]||(o[0]=V(()=>{},["stop"]))},null,40,ll),E.value?y("",!0):(p(),g("div",{key:0,class:f(a(t)("files"))},[l.draggable?y("",!0):(p(),g("div",{key:0,class:f(a(t)("file"))},[r(m,{class:f(a(t)("file-button")),type:"secondary",disabled:Y.value,onClick:z},{default:D(()=>[r(a(pe),{class:f(a(t)("file-icon"))},null,8,["class"]),tl]),_:1},8,["class","disabled"]),r(U,{type:"third"},{default:D(()=>[b(le(l.desc),1)]),_:1})],2)),l.draggable?(p(),g("div",{key:1,class:f(a(t)("draggle"))},[r(Xe,{desc:l.desc,disabled:Y.value,accept:l.accept,onHandleUpload:z,onHandleDraggleFiles:u},null,8,["desc","disabled","accept"])],2)):y("",!0),c.value.length?(p(),g("div",{key:2,class:f(a(t)("file-list"))},[(p(!0),g(oe,null,ue(c.value,$=>(p(),x(Te,{key:$.uid,"file-content":$,progress:$.progress,onHandleRemove:Q,onHandleReUpload:ee,onHandleAbort:T},null,8,["file-content","progress"]))),128))],2)):y("",!0)],2)),E.value&&!l.draggable?(p(),g("div",{key:1,class:f(a(t)("pictures"))},[(p(!0),g(oe,null,ue(c.value,$=>(p(),g("span",{class:f(a(t)("picture"))},[(p(),x(el,{key:$.uid,"file-content":$,"is-picture":E.value,progress:$.progress,shape:l.shape,avatar:l.avatar,onHandleRemove:Q,onHandleReUpload:ee,onHandleAbort:T,onHandleEdit:te,onHandleReview:i},null,8,["file-content","is-picture","progress","shape","avatar"]))],2))),256)),!(l.avatar&&L.value)&&!Y.value?(p(),g("div",{key:0,class:f([a(t)("picture-button",{disabled:Y.value},[l.shape])]),onClick:z},[e("div",ol,[r(a(ie),{class:f(a(t)("picture-button-icon"))},null,8,["class"]),l.desc?(p(),g("span",{key:0,class:f(a(t)("picture-button-desc"))},le(l.desc),3)):y("",!0)])],2)):y("",!0)],2)):y("",!0)],2),r(a(Me),{visible:d.value,"onUpdate:visible":o[1]||(o[1]=$=>d.value=$),current:R.value,"onUpdate:current":o[2]||(o[2]=$=>R.value=$),"src-list":S.value,"is-render":!1,width:"300",height:"200",fit:"cover"},null,8,["visible","current","src-list"]),v.value?(p(),x(a(xe),{key:0,modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=$=>v.value=$),scrollable:!1,title:"图片裁剪",size:"small",onOnSubmit:_},{default:D(()=>[r(he,{ref_key:"cropRef",ref:F,"file-content":C},null,8,["file-content"])]),_:1},8,["modelValue"])):y("",!0)],64)}}}),al=$e(nl),j=al;const sl="https://www.huohuo90.com:3005/upload",ul=M({__name:"upload-primary",setup(h){const A=w([{url:"https://www.huohuo90.com:3005/logo/yike.png",name:"默认图片"}]);return(t,s)=>{const n=j;return p(),x(n,{"upload-url":sl,"file-list":A.value,desc:"上传内容要求","max-size":0},null,8,["file-list"])}}}),cl="https://www.huohuo90.com:3005/upload",rl=M({__name:"upload-single-file",setup(h){const A=w([]);return(t,s)=>{const n=j;return p(),x(n,{"upload-url":cl,multiple:!1,"file-list":A.value,desc:"仅允许逐个上传文件"},null,8,["file-list"])}}}),il="https://www.huohuo90.com:3005/upload",dl=M({__name:"upload-limit",setup(h){const A=w([{url:"https://www.huohuo90.com:3005/logo/yike.png",name:"默认图片"}]);return(t,s)=>{const n=j;return p(),x(n,{"upload-url":il,"file-list":A.value,limit:3,desc:"限制上传三个文件，此demo演示上传失败"},null,8,["file-list"])}}}),pl="https://www.huohuo90.com:3005/upload",Al=M({__name:"upload-picture",setup(h){const A=w([]);return(t,s)=>{const n=j;return p(),g("div",null,[r(n,{"upload-url":pl,"file-list":A.value,accept:"image/*"},null,8,["file-list"])])}}}),hl="https://www.huohuo90.com:3005/upload",ml=M({__name:"upload-picture-circle",setup(h){const A=w([{name:"默认图片",url:"https://www.huohuo90.com:3005/logo/yike.png"}]);return(t,s)=>{const n=j;return p(),g("div",null,[r(n,{"upload-url":hl,"file-list":A.value,shape:"circle",accept:"image/*",desc:"上传图片",limit:2},null,8,["file-list"])])}}}),fl="https://www.huohuo90.com:3005/upload",vl=M({__name:"upload-avatar",setup(h){const A=w([{name:"默认图片",url:"https://www.huohuo90.com:3005/logo/dafei.jpg"}]);return(t,s)=>{const n=j;return p(),g("div",null,[r(n,{"upload-url":fl,"file-list":A.value,shape:"circle",accept:"image/*",avatar:!0},null,8,["file-list"])])}}}),_l="https://www.huohuo90.com:3005/upload",gl=M({__name:"upload-draggle",setup(h){const A=w([]);return(t,s)=>{const n=j;return p(),g("div",null,[r(n,{"upload-url":_l,"file-list":A.value,accept:"*",desc:"上传内容要求",draggable:!0},null,8,["file-list"])])}}}),El="https://www.huohuo90.com:3005/upload",wl=M({__name:"upload-callback",setup(h){const A=w([{url:"https://www.huohuo90.com:3005/logo/yike.png",name:"默认图片"}]),t=(d,F)=>{console.log("🚀 ~ file: upload-callback.vue:20 ~ handleSuccess ~ currentList:",F),console.log("🚀 ~ file: upload-callback.vue:20 ~ handleSuccess ~ res:",d)},s=(d,F)=>{console.log("🚀 ~ file: upload-callback.vue:28 ~ handleError ~ currentList:",F),console.log("🚀 ~ file: upload-callback.vue:28 ~ handleError ~ error:",d)},n=d=>{console.log("🚀 ~ file: upload-callback.vue:36 ~ handleBeforeUpload ~ file:",d)},E=d=>{console.log("🚀 ~ file: upload-callback.vue:43 ~ handleDelete ~ currentList:",d)};return(d,F)=>{const v=j;return p(),x(v,{"upload-url":El,"file-list":A.value,desc:"上传内容要求","max-size":0,onHandleSuccess:t,onHandleError:s,onHandleBeforeUpload:n,onHandleDelete:E},null,8,["file-list"])}}}),Cl=e("p",null,"文件列表上传",-1),Dl=e("p",null,[b("通过 "),e("code",null,"multiple"),b(" 控制是否能够上传多文件，默认为 true")],-1),Fl=e("p",null,[b("通过 "),e("code",null,"limit"),b(" 控制文件上传数量限制")],-1),kl=e("p",null,[b("通过 "),e("code",null,"accept"),b(" 判断是否仅上传图片，若接受对象包含 "),e("code",null,"image"),b(" 、 "),e("code",null,"png"),b(" 、 "),e("code",null,"jpg/jpeg"),b(" ，则采用图片列表上传 UI")],-1),Ul=e("p",null,[b("通过 "),e("code",null,"limit"),b(" 控制图片上限、通过 "),e("code",null,"shape"),b(" 修改列表风格")],-1),bl=e("p",null,[b("通过传入 "),e("code",null,"avatar"),b(" 进行头像上传，只允许上传一张图片且上传后允许通过裁剪重新上传")],-1),yl=e("p",null,[b("通过传入 "),e("code",null,"draggle"),b(" 将 UI 变更为拖拽区，文件列表与常规文件一致，允许通过拖拽上传文件")],-1),Bl=e("p",null,"目前支持上传前、上传成功、上传失败、删除文件四个钩子",-1),Rl=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"accept"),e("td",null,"接受文件类型"),e("td",null,"accept"),e("td",null,"*")]),e("tr",null,[e("td",null,"maxSize"),e("td",null,"文件大小限制"),e("td",null,"number"),e("td",null,"3*1024*1024(3M)")]),e("tr",null,[e("td",null,"multiple"),e("td",null,"是否允许多文件上传"),e("td",null,"boolean"),e("td",null,"true")]),e("tr",null,[e("td",null,"limit"),e("td",null,"控制文件上传数量"),e("td",null,"number"),e("td",null,"0")]),e("tr",null,[e("td",null,"shape"),e("td",null,"图片列表形状"),e("td",null,"'default' | 'circle'"),e("td",null,"'default'")]),e("tr",null,[e("td",null,"uploadUrl"),e("td",null,"文件上传路径"),e("td",null,"string"),e("td",null,"''")]),e("tr",null,[e("td",null,"fileList"),e("td",null,"当前文件列表"),e("td",null,[e("code",null,"{name:'file-name',url:'url'}[]")]),e("td",null,"[]")]),e("tr",null,[e("td",null,"desc"),e("td",null,"文件上传提示"),e("td",null,"string"),e("td",null,"''")]),e("tr",null,[e("td",null,"avatar"),e("td",null,"是否上传头像"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"draggable"),e("td",null,"是否采用拖拽上传交互"),e("td",null,"boolean"),e("td",null,"false")])])])],-1),$l=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"方法"),e("th",null,"描述"),e("th",null,"出参类型")])]),e("tbody",null,[e("tr",null,[e("td",null,"handleSuccess"),e("td",null,"成功回调"),e("td",null,"(res:response,currentList:File[])")]),e("tr",null,[e("td",null,"handleDelete"),e("td",null,"删除回调"),e("td",null,"(currentList:File[])")]),e("tr",null,[e("td",null,"handleError"),e("td",null,"错误回调"),e("td",null,"(err:response,currentList:File[])")]),e("tr",null,[e("td",null,"handleBeforeUpload"),e("td",null,"上传前回调"),e("td",null,"(file:File)")])])])],-1),Yl={__name:"doc",setup(h){return(A,t)=>{const s=ne("yk-title"),n=ne("yk-snippet"),E=ne("DocPage");return p(),x(E,null,{default:D(()=>[r(s,{level:2,id:"YkUpload-文件上传"},{default:D(()=>[b("YkUpload 文件上传")]),_:1}),r(n,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%86%85%E5%AE%B9%E8%A6%81%E6%B1%82%22%0A%20%20%20%20%3Amax-size%3D%220%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(ul)]),desc:D(()=>[Cl]),_:1}),r(n,{title:"单文件上传",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Amultiple%3D%22false%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20desc%3D%22%E4%BB%85%E5%85%81%E8%AE%B8%E9%80%90%E4%B8%AA%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2F192.168.1.207%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(rl)]),desc:D(()=>[Dl]),_:1}),r(n,{title:"文件数量限制",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%3Alimit%3D%223%22%0A%20%20%20%20desc%3D%22%E9%99%90%E5%88%B6%E4%B8%8A%E4%BC%A0%E4%B8%89%E4%B8%AA%E6%96%87%E4%BB%B6%EF%BC%8C%E6%AD%A4demo%E6%BC%94%E7%A4%BA%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2F192.168.1.207%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(dl)]),desc:D(()=>[Fl]),_:1}),r(n,{title:"图片上传",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(Al)]),desc:D(()=>[kl]),_:1}),r(n,{title:"图片列表样式及限制数量",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20shape%3D%22circle%22%0A%20%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87%22%0A%20%20%20%20%20%20%3Alimit%3D%222%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.foder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(ml)]),desc:D(()=>[Ul]),_:1}),r(n,{title:"头像上传",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20shape%3D%22circle%22%0A%20%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%20%20%3Aavatar%3D%22true%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fdafei.jpg'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(vl)]),desc:D(()=>[bl]),_:1}),r(n,{title:"拖拽上传",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20accept%3D%22*%22%0A%20%20%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%86%85%E5%AE%B9%E8%A6%81%E6%B1%82%22%0A%20%20%20%20%20%20%3Adraggable%3D%22true%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(gl)]),desc:D(()=>[yl]),_:1}),r(n,{title:"回调函数",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%86%85%E5%AE%B9%E8%A6%81%E6%B1%82%22%0A%20%20%20%20%3Amax-size%3D%220%22%0A%20%20%20%20%40handle-success%3D%22handleSuccess%22%0A%20%20%20%20%40handle-error%3D%22handleError%22%0A%20%20%20%20%40handle-before-upload%3D%22handleBeforeUpload%22%0A%20%20%20%20%40handle-delete%3D%22handleDelete%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%7D%2C%0A%5D)%0Aconst%20handleSuccess%20%3D%20(res%2C%20currentList)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A20%20~%20handleSuccess%20~%20currentList%3A'%2C%0A%20%20%20%20currentList%2C%0A%20%20)%0A%20%20console.log('%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A20%20~%20handleSuccess%20~%20res%3A'%2C%20res)%0A%7D%0Aconst%20handleError%20%3D%20(error%2C%20currentList)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A28%20~%20handleError%20~%20currentList%3A'%2C%0A%20%20%20%20currentList%2C%0A%20%20)%0A%20%20console.log('%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A28%20~%20handleError%20~%20error%3A'%2C%20error)%0A%7D%0Aconst%20handleBeforeUpload%20%3D%20(file)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A36%20~%20handleBeforeUpload%20~%20file%3A'%2C%0A%20%20%20%20file%2C%0A%20%20)%0A%7D%0Aconst%20handleDelete%20%3D%20(currentList)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A43%20~%20handleDelete%20~%20currentList%3A'%2C%0A%20%20%20%20currentList%2C%0A%20%20)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:D(()=>[r(wl)]),desc:D(()=>[Bl]),_:1}),r(s,{level:3,id:"API"},{default:D(()=>[b("API")]),_:1}),Rl,r(s,{level:3,id:"钩子"},{default:D(()=>[b("钩子")]),_:1}),$l]),_:1})}}};export{Yl as default};
