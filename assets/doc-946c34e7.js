import{a1 as j,d as $,a2 as W,a3 as ne,r as _,c as T,a4 as se,T as me,o as p,b as g,e,n as v,Z as t,a5 as L,i as r,a6 as fe,t as J,f as R,P as ve,g as b,w,a7 as ge,m as _e,j as k,Y as Ee,F as ae,h as ue,N as we,z as Ce,a as oe}from"./index-9ece1d16.js";import{Y as ce}from"./index-1192b27d.js";import{c as De,g as Fe,f as ke,I as be,a as Ue,j as ye,i as Be,e as Re,b as $e,h as ie,d as xe}from"./index-1abc283f.js";import{_ as de}from"./index-5d4e42f8.js";import{a as Ie,b as Me,I as Le,_ as Ye}from"./index-05f00c3f.js";import{I as Se}from"./index-3acc3654.js";import{I as Oe}from"./index-149c6261.js";import{_ as G}from"./index-c0fbafe3.js";import{_ as Pe}from"./index-da0dc095.js";import{_ as Ve}from"./index-d8129013.js";import{Y as Xe,_ as ze}from"./index-86587729.js";import{Y as He}from"./index-f1cacf75.js";import"./index-6ad893d8.js";import"./index-6dc6a83b.js";import"./index-1405c767.js";const je=["image","jpeg","png","gif"],Te=({uid:m,uploadUrl:c,selectedFile:i,onSuccess:a,onError:o,onProgress:E})=>{const A=new XMLHttpRequest,C=new FormData;C.append("file",i);try{A.open("POST",c,!0)}catch{o(m,"上传失败、请求地址有误")}return A.upload.onprogress=f=>{if(f.lengthComputable){const D=f.loaded/f.total*100;E(m,D)}},A.onload=function(){if(A.status===200){const f=JSON.parse(A.responseText);f.error||f.err?o(m,f):a(m,f)}},A.onerror=function(){o(m,A.responseText)},A.send(C),{abort(){A.abort()}}};function pe(m,c,i,a){const o=a/100*Math.PI*2,E=m+i*Math.sin(o),A=c-i*Math.cos(o);return`M${m},${c} L${m},${c-i} A${i},${i} 0 ${o<Math.PI?"0":"1"},1 ${E},${A} Z`}function Ne(m){return m.map(i=>({uid:j(),status:"success",...i}))}function O(m,c){return c.findIndex(i=>m===i.uid)}function re(m,c){return new File([m],c,{type:m.type})}const We=["onMousedown","onMousemove","onMouseup"],Ae=$({__name:"crop-picture",props:{fileContent:{}},setup(m,{expose:c}){const i=m,a={isDragging:!1,startX:0,startY:0,clientX:0,clientY:0,deltaX:0,deltaY:0},o=W("image-crop"),{fileContent:E}=ne(i),A=_(),C=_(),f=_(.5),D=_(50),h=_(50),B=_(0),U=_(0),F=new Image;F.crossOrigin="Anonymous";const Y=_(0),x=_(0),I=T(()=>{var u;const d=(u=E.value)==null?void 0:u.raw;return d?URL.createObjectURL(d):""});se(()=>D.value,d=>{B.value=d/100,M()}),se(()=>h.value,d=>{U.value=Math.max(Math.min(180,(d-50)*3.8),-180),M()});const y=()=>{var l;const d=A.value,u=d.getContext("2d");F.src=(((l=E.value)==null?void 0:l.url)||I.value)??"",F.onload=()=>{const n=F.width/F.height;x.value=300,Y.value=Math.min(x.value*n,700),d.width=Y.value,d.height=x.value,B.value=Math.min(x.value/F.height,1),f.value=B.value,D.value=f.value*100,u.drawImage(F,0,0,F.width*B.value,F.height*B.value),X()}},M=()=>{const d=A.value,u=d.getContext("2d");u.clearRect(0,0,d.width,d.height);const l=a.clientX+a.deltaX,n=a.clientY+a.deltaY,s=d.width/2,S=d.height/2,H=U.value*Math.PI/180;u.translate(s,S),u.rotate(H),u.translate(-s,-S),u.drawImage(F,l,n,F.width*B.value,F.height*B.value),u.setTransform(1,0,0,1,0,0),X()},X=()=>{const d=A.value,u=d.getContext("2d"),l=240,n=(d.width-l)/2,s=(d.height-l)/2;u.strokeStyle="rgba(255,255,255,0.5)",u.lineWidth=2,u.strokeRect(n,s,l,l),u.fillStyle="rgba(0, 0, 0, 0.5)",u.fillRect(0,0,d.width,s),u.fillRect(0,s+l,d.width,d.height-(s+l)),u.fillRect(0,s,n,l),u.fillRect(n+l,s,d.width-(n+l),l)},K=()=>{U.value=Math.min(180,15+U.value),h.value=Math.max(Math.min(50+U.value*3.8/15,100),0)},Q=()=>{U.value=Math.max(-180,U.value-15),h.value=Math.max(Math.min(50+U.value*3.8/15,100),0)},z=()=>{D.value=Math.max(D.value-1,0),M()},N=()=>{D.value=Math.min(D.value+1,100),M()},ee=d=>{const{clientX:u,clientY:l}=d;a.isDragging=!0,a.startX=u,a.startY=l},q=d=>{if(!a.isDragging)return;const{clientX:u,clientY:l}=d;a.deltaX=u-a.startX,a.deltaY=l-a.startY,M()},V=fe(d=>{var u=Math.max(-1,Math.min(1,d.wheelDelta||-d.detail));u<0?z():N()},5),Z=d=>{a.isDragging=!1;const{clientX:u,clientY:l}=d,n=u-a.startX,s=l-a.startY;a.clientX+=n,a.clientY+=s,a.deltaX=0,a.deltaY=0};me(()=>{y()});const le=async()=>{const d=A.value,u=240,l=(d.width-u)/2,n=(d.height-u)/2,s=document.createElement("canvas");s.width=u,s.height=u,s.getContext("2d").drawImage(d,l,n,u,u,0,0,u,u);let H;return await te(s).then(function(he){H=he}),{blobRaw:H,uid:E.value.uid}},te=d=>new Promise(function(u,l){d.toBlob(function(n){u(n)},"image/jpeg",.8)});return c({handleCrop:le}),(d,u)=>(p(),g("div",{class:v(t(o)())},[e("div",{ref_key:"canvasContainer",ref:C,class:v(t(o)("canvas-container")),onMousedown:L(ee,["prevent"]),onMousemove:L(q,["prevent"]),onMouseup:L(Z,["prevent"]),onWheel:u[0]||(u[0]=L((...l)=>t(V)&&t(V)(...l),["stop"])),onMousewheel:u[1]||(u[1]=L((...l)=>t(V)&&t(V)(...l),["stop"]))},[e("canvas",{ref_key:"canvasRef",ref:A},null,512)],42,We),e("div",{class:v(t(o)("operate"))},[e("div",{class:v(t(o)("operate-left"))},[r(t(De),{onClick:L(z,["stop"])},null,8,["onClick"]),r(t(ce),{modelValue:D.value,"onUpdate:modelValue":u[2]||(u[2]=l=>D.value=l),class:v(t(o)("scale-bar"))},null,8,["modelValue","class"]),r(t(de),{onClick:L(N,["stop"])},null,8,["onClick"])],2),e("div",{class:v(t(o)("operate-right"))},[r(t(Ie),{onClick:Q}),r(t(ce),{modelValue:h.value,"onUpdate:modelValue":u[3]||(u[3]=l=>h.value=l),class:v(t(o)("scale-bar"))},null,8,["modelValue","class"]),r(t(Me),{onClick:K})],2)],2)],2))}}),qe=["onDrop","onDragover"],Ze=$({__name:"upload-draggle",props:{desc:{default:""},disabled:{type:Boolean,default:!1},accept:{default:"*"}},emits:["handleUpload","handleDraggleFiles"],setup(m,{emit:c}){const i=m,a=W("upload-draggle"),o=_(!1),E=f=>{if(i.disabled)return;o.value=!1,f.stopPropagation();const D=Array.from(f.dataTransfer.files);c("handleDraggleFiles",D)},A=()=>{i.disabled||(o.value=!0)},C=()=>{c("handleUpload")};return(f,D)=>(p(),g("div",{class:v(t(a)()),onDrop:L(E,["prevent"]),onDragover:L(A,["prevent"]),onClick:C},[r(t(Fe),{class:v(t(a)("icon"))},null,8,["class"]),e("span",{class:v(t(a)("methods"))},"单击或拖动文件到此区域进行上传",2),e("span",{class:v(t(a)("desc"))},J(f.desc),3)],42,qe))}}),Ge={width:"14",height:"14"},Je=e("circle",{cx:"7",cy:"7",r:"7",class:"uploading-bg","fill-opacity":"0.6"},null,-1),Ke=["d"],Qe=$({__name:"upload-file-item",props:{progress:{default:0},fileContent:{default:()=>({status:"success",name:"",uid:j()})},shape:{},avatar:{type:Boolean}},emits:["handleAbort","handleRemove","handleReUpload"],setup(m,{emit:c}){const i=m,a=W("upload-file"),{status:o,name:E,uid:A}=ne(i.fileContent),C=T(()=>B(E.value)),f=()=>{c("handleAbort",A.value)},D=()=>{c("handleRemove",A.value)},h=()=>{c("handleReUpload",A.value)},B=U=>{var Y;switch((Y=U.split(".").pop())==null?void 0:Y.toLowerCase()){case"jpg":case"png":case"jpeg":case"gif":return $e;case"pdf":return Re;case"mp4":case"mkv":return Be;case"doc":case"docx":return ye;case"xls":case"xlsx":return Ue;case"ppt":case"pptx":return Oe;case"wmv":case"mp3":return be;case"txt":return ke;default:return Se}};return(U,F)=>(p(),g("div",{class:v(t(a)())},[e("div",{class:v(t(a)("main"))},[e("div",{class:v(t(a)("left"))},[(p(),R(ve(C.value),{class:"annex-yk-icon"})),e("span",{class:v(t(a)(t(o)))},J(t(E)),3)],2),e("div",{class:v(t(a)("right"))},[t(o)!=="uploading"?(p(),R(t(G),{key:0,class:"delete-yk-icon",onClick:D})):b("",!0),"success".includes(t(o))?(p(),R(t(Pe),{key:1,class:"success-yk-icon"})):b("",!0),["error","pause"].includes(t(o))?(p(),R(t(Ve),{key:2,class:"re-upload-yk-icon",onClick:h})):b("",!0),["uploading"].includes(t(o))?(p(),g("div",{key:3,class:"abort-yk-icon-container",onClick:f},[(p(),g("svg",Ge,[Je,e("path",{d:t(pe)(7,7,7,U.progress),class:"uploading-bg"},null,8,Ke)]))])):b("",!0)],2)],2)],2))}}),el=["src"],ll={width:"36",height:"36"},tl=e("circle",{cx:"18",cy:"18",r:"18","fill-opacity":"0.5"},null,-1),al=["d"],ol={key:2,class:"upload-icon fail-icon"},nl={key:3,class:"hover-icons"},sl={key:4,class:"hover-icons"},ul={key:5,class:"hover-icons"},cl=$({__name:"upload-picture-item",props:{progress:{default:0},fileContent:{default:()=>({status:"success",name:"",uid:j(),avatar:!1})},shape:{default:"default"},avatar:{type:Boolean}},emits:["handleAbort","handleRemove","handleReUpload","handleEdit","handleReview"],setup(m,{emit:c}){const i=m,a=W("upload-picture"),{status:o,uid:E,raw:A,url:C}=ne(i.fileContent),f=_(!1),D=_(),h=T(()=>A!=null&&A.value?URL.createObjectURL(A.value):""),B=()=>{c("handleReview",E.value)},U=()=>{c("handleAbort",E.value)},F=()=>{c("handleRemove",E.value)},Y=()=>{c("handleReUpload",E.value)},x=()=>{f.value=!0},I=async()=>{const{blobRaw:y,uid:M}=await D.value.handleCrop();c("handleEdit",y,M),f.value=!1};return(y,M)=>(p(),g("div",{class:v(t(a)([y.shape]))},[h.value||t(C)?(p(),g("img",{key:0,src:t(C)||h.value,alt:""},null,8,el)):b("",!0),e("div",{class:v(t(a)("overlay-hover",[t(o)]))},null,2),t(o)==="uploading"?(p(),g("div",{key:1,class:"upload-icon uploading-icons",onClick:U},[(p(),g("svg",ll,[tl,e("path",{d:t(pe)(18,18,18,y.progress),class:"progress-path"},null,8,al)]))])):b("",!0),["error","pause"].includes(t(o))?(p(),g("div",ol,[r(t(Le))])):b("",!0),["error","pause"].includes(t(o))?(p(),g("div",nl,[r(t(ie),{onClick:Y}),r(t(G),{onClick:F})])):b("",!0),t(o)==="success"&&!y.avatar?(p(),g("div",sl,[r(t(Ye),{onClick:B}),r(t(G),{onClick:F})])):b("",!0),t(o)==="success"&&y.avatar?(p(),g("div",ul,[r(t(xe),{onClick:x}),r(t(G),{onClick:F})])):b("",!0),f.value?(p(),R(t(Xe),{key:6,modelValue:f.value,"onUpdate:modelValue":M[0]||(M[0]=X=>f.value=X),scrollable:!1,title:"图片裁剪",size:"small",onOnSubmit:I},{default:w(()=>[r(Ae,{ref_key:"cropRef",ref:D,"file-content":y.fileContent},null,8,["file-content"])]),_:1},8,["modelValue"])):b("",!0)],2))}}),rl=["accept","multiple"],il=e("div",null,"上传文件",-1),dl={class:"picture-desc"},pl=$({name:"YkUpload",__name:"upload",props:{accept:{default:"*"},maxSize:{default:3*1024*1024},multiple:{type:Boolean,default:!0},limit:{default:0},uploadUrl:{default:""},shape:{default:"default"},fileList:{default:()=>[]},desc:{default:""},avatar:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1}},emits:["handleSuccess","handleDelete","handleError","handleBeforeUpload"],setup(m,{emit:c}){const i=m,a=W("upload"),o=_(!1),E=_(!1),A=_(),C=_(!1),f=ge({name:"",url:"",uid:j(),status:"uploading"}),D=_(0),h=_(Ne(i.fileList)),B=_(),U=new Map,F=T(()=>h.value.length),Y=T(()=>h.value.map(n=>n.raw?URL.createObjectURL(n.raw):n.url)),x=T(()=>!!i.limit&&F.value>=i.limit);o.value=je.some(l=>i.accept.includes(l))||i.avatar;const{proxy:I}=we(),y=async l=>{const n=l==null?void 0:l.name;if(!n){I.$message.error("文件上传失败，请重新选择文件");return}const s=j();h.value.push({name:n,status:"uploading",raw:l,uid:s});const S={uid:s,uploadUrl:i.uploadUrl,selectedFile:l,fileName:n,onSuccess:X,onError:Q,onProgress:K};U.set(s,Te(S))},M=l=>{h.value=[];const n=l==null?void 0:l.name;if(!n){I.$message.error("文件上传失败，请重新选择文件");return}const s=j();f.name=n,f.raw=l,f.uid=s,C.value=!0},X=(l,n)=>{I.$message.success("上传成功");const s=O(l,h.value);h.value[s].status="success",c("handleSuccess",n,h.value)},K=(l,n)=>{const s=O(l,h.value);h.value[s].progress=n},Q=(l,n)=>{I.$message.error(n||"上传失败");const s=O(l,h.value);h.value[s].status="error",c("handleError",n,h.value)},z=async()=>{var l;x.value||(l=B.value)==null||l.click()},N=l=>(c("handleBeforeUpload",l),i.maxSize&&l.size>i.maxSize?(I.$message.error("超出限制大小，请压缩后上传"),!1):i.limit&&i.limit<=F.value?(I.$message.error("数量超出限制"),!1):!0),ee=l=>{const n=Array.from(l.target.files);if(n.length){if(i.avatar){N(n[0]),M(n[0]);return}n.forEach(s=>{const S=N(s);s&&S&&y(s)}),l.target.value=""}},q=l=>{const n=O(l,h.value),s=U.get(l);s!=null&&s.abort&&(s.abort(),h.value[n].status="pause",I.$message.error("用户中断上传"))},V=l=>{h.value.splice(O(l,h.value),1),c("handleDelete",h.value),I.$message.success("已删除")},Z=l=>{const n=O(l,h.value),s=h.value[n].raw;h.value.splice(n,1),y(s)},le=(l,n)=>{const s=O(n,h.value),S=h.value[s].name;h.value.splice(O(n,h.value),1);const H=re(l,S);y(H)},te=l=>{const n=O(l,h.value);D.value=n,E.value=!0},d=l=>{l.forEach(n=>{y(n)})},u=async()=>{const{blobRaw:l}=await A.value.handleCrop(),n=re(l,f.name);y(n),C.value=!1};return(l,n)=>(p(),g(ae,null,[e("div",{class:v(t(a)())},[e("input",{ref_key:"inputRef",ref:B,style:{display:"none"},accept:l.accept,multiple:l.multiple,type:"file",onChange:ee,onClick:n[0]||(n[0]=L(()=>{},["stop"]))},null,40,rl),o.value?b("",!0):(p(),g("div",{key:0,class:v(t(a)("files"))},[l.draggable?b("",!0):(p(),g("div",{key:0,class:v(t(a)("file"))},[r(t(_e),{class:v(t(a)("file-button")),type:"secondary",disabled:x.value,onClick:z},{default:w(()=>[r(t(ie),{class:v(t(a)("file-icon"))},null,8,["class"]),il]),_:1},8,["class","disabled"]),r(t(Ee),{type:"third"},{default:w(()=>[k(J(l.desc),1)]),_:1})],2)),l.draggable?(p(),g("div",{key:1,class:v(t(a)("draggle"))},[r(Ze,{desc:l.desc,disabled:x.value,accept:l.accept,onHandleUpload:z,onHandleDraggleFiles:d},null,8,["desc","disabled","accept"])],2)):b("",!0),h.value.length?(p(),g("div",{key:2,class:v(t(a)("file-list"))},[(p(!0),g(ae,null,ue(h.value,s=>(p(),R(Qe,{key:s.uid,"file-content":s,progress:s.progress,onHandleRemove:V,onHandleReUpload:Z,onHandleAbort:q},null,8,["file-content","progress"]))),128))],2)):b("",!0)],2)),o.value&&!l.draggable?(p(),g("div",{key:1,class:v(t(a)("pictures"))},[(p(!0),g(ae,null,ue(h.value,s=>(p(),g("span",{class:v(t(a)("picture"))},[(p(),R(cl,{key:s.uid,"file-content":s,"is-picture":o.value,progress:s.progress,shape:l.shape,avatar:l.avatar,onHandleRemove:V,onHandleReUpload:Z,onHandleAbort:q,onHandleEdit:le,onHandleReview:te},null,8,["file-content","is-picture","progress","shape","avatar"]))],2))),256)),!(l.avatar&&F.value)&&!x.value?(p(),g("div",{key:0,class:v([t(a)("picture-button",{disabled:x.value},[l.shape])]),onClick:z},[e("div",dl,[r(t(de),{class:v(t(a)("picture-button-icon"))},null,8,["class"]),l.desc?(p(),g("span",{key:0,class:v(t(a)("picture-button-desc"))},J(l.desc),3)):b("",!0)])],2)):b("",!0)],2)):b("",!0)],2),r(t(He),{visible:E.value,"onUpdate:visible":n[1]||(n[1]=s=>E.value=s),current:D.value,"onUpdate:current":n[2]||(n[2]=s=>D.value=s),"src-list":Y.value,"is-render":!1,width:"300",height:"200",fit:"cover"},null,8,["visible","current","src-list"]),C.value?(p(),R(t(ze),{key:0,modelValue:C.value,"onUpdate:modelValue":n[3]||(n[3]=s=>C.value=s),scrollable:!1,title:"图片裁剪",size:"small",onOnSubmit:u},{default:w(()=>[r(Ae,{ref_key:"cropRef",ref:A,"file-content":f},null,8,["file-content"])]),_:1},8,["modelValue"])):b("",!0)],64))}}),Al=Ce(pl),P=Al,hl="https://www.huohuo90.com:3005/upload",ml=$({__name:"upload-primary",setup(m){const c=_([{url:"https://www.huohuo90.com:3005/logo/yike.png",name:"默认图片"}]);return(i,a)=>{const o=P;return p(),R(o,{"upload-url":hl,"file-list":c.value,desc:"上传内容要求","max-size":0},null,8,["file-list"])}}}),fl="https://www.huohuo90.com:3005/upload",vl=$({__name:"upload-single-file",setup(m){const c=_([]);return(i,a)=>{const o=P;return p(),R(o,{"upload-url":fl,multiple:!1,"file-list":c.value,desc:"仅允许逐个上传文件"},null,8,["file-list"])}}}),gl="https://www.huohuo90.com:3005/upload",_l=$({__name:"upload-limit",setup(m){const c=_([{url:"https://www.huohuo90.com:3005/logo/yike.png",name:"默认图片"}]);return(i,a)=>{const o=P;return p(),R(o,{"upload-url":gl,"file-list":c.value,limit:3,desc:"限制上传三个文件，此demo演示上传失败"},null,8,["file-list"])}}}),El="https://www.huohuo90.com:3005/upload",wl=$({__name:"upload-picture",setup(m){const c=_([]);return(i,a)=>{const o=P;return p(),g("div",null,[r(o,{"upload-url":El,"file-list":c.value,accept:"image/*"},null,8,["file-list"])])}}}),Cl="https://www.huohuo90.com:3005/upload",Dl=$({__name:"upload-picture-circle",setup(m){const c=_([{name:"默认图片",url:"https://www.huohuo90.com:3005/logo/yike.png"}]);return(i,a)=>{const o=P;return p(),g("div",null,[r(o,{"upload-url":Cl,"file-list":c.value,shape:"circle",accept:"image/*",desc:"上传图片",limit:2},null,8,["file-list"])])}}}),Fl="https://www.huohuo90.com:3005/upload",kl=$({__name:"upload-avatar",setup(m){const c=_([{name:"默认图片",url:"https://www.huohuo90.com:3005/logo/dafei.jpg"}]);return(i,a)=>{const o=P;return p(),g("div",null,[r(o,{"upload-url":Fl,"file-list":c.value,shape:"circle",accept:"image/*",avatar:!0},null,8,["file-list"])])}}}),bl="https://www.huohuo90.com:3005/upload",Ul=$({__name:"upload-draggle",setup(m){const c=_([]);return(i,a)=>{const o=P;return p(),g("div",null,[r(o,{"upload-url":bl,"file-list":c.value,accept:"*",desc:"上传内容要求",draggable:!0},null,8,["file-list"])])}}}),yl="https://www.huohuo90.com:3005/upload",Bl=$({__name:"upload-callback",setup(m){const c=_([{url:"https://www.huohuo90.com:3005/logo/yike.png",name:"默认图片"}]),i=(A,C)=>{console.log("🚀 ~ file: upload-callback.vue:20 ~ handleSuccess ~ currentList:",C),console.log("🚀 ~ file: upload-callback.vue:20 ~ handleSuccess ~ res:",A)},a=(A,C)=>{console.log("🚀 ~ file: upload-callback.vue:28 ~ handleError ~ currentList:",C),console.log("🚀 ~ file: upload-callback.vue:28 ~ handleError ~ error:",A)},o=A=>{console.log("🚀 ~ file: upload-callback.vue:36 ~ handleBeforeUpload ~ file:",A)},E=A=>{console.log("🚀 ~ file: upload-callback.vue:43 ~ handleDelete ~ currentList:",A)};return(A,C)=>{const f=P;return p(),R(f,{"upload-url":yl,"file-list":c.value,desc:"上传内容要求","max-size":0,onHandleSuccess:i,onHandleError:a,onHandleBeforeUpload:o,onHandleDelete:E},null,8,["file-list"])}}}),Rl=e("p",null,"文件列表上传",-1),$l=e("p",null,[k("通过 "),e("code",null,"multiple"),k(" 控制是否能够上传多文件，默认为 true")],-1),xl=e("p",null,[k("通过 "),e("code",null,"limit"),k(" 控制文件上传数量限制")],-1),Il=e("p",null,[k("通过 "),e("code",null,"accept"),k(" 判断是否仅上传图片，若接受对象包含 "),e("code",null,"image"),k(" 、 "),e("code",null,"png"),k(" 、 "),e("code",null,"jpg/jpeg"),k(" ，则采用图片列表上传 UI")],-1),Ml=e("p",null,[k("通过 "),e("code",null,"limit"),k(" 控制图片上限、通过 "),e("code",null,"shape"),k(" 修改列表风格")],-1),Ll=e("p",null,[k("通过传入 "),e("code",null,"avatar"),k(" 进行头像上传，只允许上传一张图片且上传后允许通过裁剪重新上传")],-1),Yl=e("p",null,[k("通过传入 "),e("code",null,"draggle"),k(" 将 UI 变更为拖拽区，文件列表与常规文件一致，允许通过拖拽上传文件")],-1),Sl=e("p",null,"目前支持上传前、上传成功、上传失败、删除文件四个钩子",-1),Ol=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"accept"),e("td",null,"接受文件类型"),e("td",null,"accept"),e("td",null,"*")]),e("tr",null,[e("td",null,"maxSize"),e("td",null,"文件大小限制"),e("td",null,"number"),e("td",null,"3*1024*1024(3M)")]),e("tr",null,[e("td",null,"multiple"),e("td",null,"是否允许多文件上传"),e("td",null,"boolean"),e("td",null,"true")]),e("tr",null,[e("td",null,"limit"),e("td",null,"控制文件上传数量"),e("td",null,"number"),e("td",null,"0")]),e("tr",null,[e("td",null,"shape"),e("td",null,"图片列表形状"),e("td",null,"'default' | 'circle'"),e("td",null,"'default'")]),e("tr",null,[e("td",null,"uploadUrl"),e("td",null,"文件上传路径"),e("td",null,"string"),e("td",null,"''")]),e("tr",null,[e("td",null,"fileList"),e("td",null,"当前文件列表"),e("td",null,[e("code",null,"{name:'file-name',url:'url'}[]")]),e("td",null,"[]")]),e("tr",null,[e("td",null,"desc"),e("td",null,"文件上传提示"),e("td",null,"string"),e("td",null,"''")]),e("tr",null,[e("td",null,"avatar"),e("td",null,"是否上传头像"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"draggable"),e("td",null,"是否采用拖拽上传交互"),e("td",null,"boolean"),e("td",null,"false")])])])],-1),Pl=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"方法"),e("th",null,"描述"),e("th",null,"出参类型")])]),e("tbody",null,[e("tr",null,[e("td",null,"handleSuccess"),e("td",null,"成功回调"),e("td",null,"(res:response,currentList:File[])")]),e("tr",null,[e("td",null,"handleDelete"),e("td",null,"删除回调"),e("td",null,"(currentList:File[])")]),e("tr",null,[e("td",null,"handleError"),e("td",null,"错误回调"),e("td",null,"(err:response,currentList:File[])")]),e("tr",null,[e("td",null,"handleBeforeUpload"),e("td",null,"上传前回调"),e("td",null,"(file:File)")])])])],-1),lt={__name:"doc",setup(m){return(c,i)=>{const a=oe("yk-title"),o=oe("yk-snippet"),E=oe("DocPage");return p(),R(E,null,{default:w(()=>[r(a,{level:2,id:"YkUpload-文件上传"},{default:w(()=>[k("YkUpload 文件上传")]),_:1}),r(o,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%86%85%E5%AE%B9%E8%A6%81%E6%B1%82%22%0A%20%20%20%20%3Amax-size%3D%220%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(ml)]),desc:w(()=>[Rl]),_:1}),r(o,{title:"单文件上传",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Amultiple%3D%22false%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20desc%3D%22%E4%BB%85%E5%85%81%E8%AE%B8%E9%80%90%E4%B8%AA%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2F192.168.1.207%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(vl)]),desc:w(()=>[$l]),_:1}),r(o,{title:"文件数量限制",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%3Alimit%3D%223%22%0A%20%20%20%20desc%3D%22%E9%99%90%E5%88%B6%E4%B8%8A%E4%BC%A0%E4%B8%89%E4%B8%AA%E6%96%87%E4%BB%B6%EF%BC%8C%E6%AD%A4demo%E6%BC%94%E7%A4%BA%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2F192.168.1.207%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(_l)]),desc:w(()=>[xl]),_:1}),r(o,{title:"图片上传",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(wl)]),desc:w(()=>[Il]),_:1}),r(o,{title:"图片列表样式及限制数量",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20shape%3D%22circle%22%0A%20%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87%22%0A%20%20%20%20%20%20%3Alimit%3D%222%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.foder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(Dl)]),desc:w(()=>[Ml]),_:1}),r(o,{title:"头像上传",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20shape%3D%22circle%22%0A%20%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%20%20%3Aavatar%3D%22true%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fdafei.jpg'%2C%0A%20%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(kl)]),desc:w(()=>[Ll]),_:1}),r(o,{title:"拖拽上传",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cyk-upload%0A%20%20%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20%20%20accept%3D%22*%22%0A%20%20%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%86%85%E5%AE%B9%E8%A6%81%E6%B1%82%22%0A%20%20%20%20%20%20%3Adraggable%3D%22true%22%0A%20%20%20%20%3E%3C%2Fyk-upload%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%5D)%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(Ul)]),desc:w(()=>[Yl]),_:1}),r(o,{title:"回调函数",code:"%3Ctemplate%3E%0A%20%20%3Cyk-upload%0A%20%20%20%20%3Aupload-url%3D%22uploadUrl%22%0A%20%20%20%20%3Afile-list%3D%22fileUrl%22%0A%20%20%20%20desc%3D%22%E4%B8%8A%E4%BC%A0%E5%86%85%E5%AE%B9%E8%A6%81%E6%B1%82%22%0A%20%20%20%20%3Amax-size%3D%220%22%0A%20%20%20%20%40handle-success%3D%22handleSuccess%22%0A%20%20%20%20%40handle-error%3D%22handleError%22%0A%20%20%20%20%40handle-before-upload%3D%22handleBeforeUpload%22%0A%20%20%20%20%40handle-delete%3D%22handleDelete%22%0A%20%20%3E%3C%2Fyk-upload%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%2F%2F%20const%20uploadUrl%20%3D%20'http%3A%2F%2Fchat.finecoder.cn%3A3976%2Fupload'%0Aconst%20uploadUrl%20%3D%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Fupload'%0Aconst%20fileUrl%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20url%3A%20'https%3A%2F%2Fwww.huohuo90.com%3A3005%2Flogo%2Fyike.png'%2C%0A%20%20%20%20name%3A%20'%E9%BB%98%E8%AE%A4%E5%9B%BE%E7%89%87'%2C%0A%20%20%7D%2C%0A%5D)%0Aconst%20handleSuccess%20%3D%20(res%2C%20currentList)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A20%20~%20handleSuccess%20~%20currentList%3A'%2C%0A%20%20%20%20currentList%2C%0A%20%20)%0A%20%20console.log('%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A20%20~%20handleSuccess%20~%20res%3A'%2C%20res)%0A%7D%0Aconst%20handleError%20%3D%20(error%2C%20currentList)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A28%20~%20handleError%20~%20currentList%3A'%2C%0A%20%20%20%20currentList%2C%0A%20%20)%0A%20%20console.log('%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A28%20~%20handleError%20~%20error%3A'%2C%20error)%0A%7D%0Aconst%20handleBeforeUpload%20%3D%20(file)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A36%20~%20handleBeforeUpload%20~%20file%3A'%2C%0A%20%20%20%20file%2C%0A%20%20)%0A%7D%0Aconst%20handleDelete%20%3D%20(currentList)%20%3D%3E%20%7B%0A%20%20console.log(%0A%20%20%20%20'%F0%9F%9A%80%20~%20file%3A%20upload-callback.vue%3A43%20~%20handleDelete%20~%20currentList%3A'%2C%0A%20%20%20%20currentList%2C%0A%20%20)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:w(()=>[r(Bl)]),desc:w(()=>[Sl]),_:1}),r(a,{level:3,id:"API"},{default:w(()=>[k("API")]),_:1}),Ol,r(a,{level:3,id:"钩子"},{default:w(()=>[k("钩子")]),_:1}),Pl]),_:1})}}};export{lt as default};
