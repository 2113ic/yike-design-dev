import{e7 as d,c as o}from"./index-79e930ed.js";const p=Symbol("formContextKey"),f=Symbol("formItemContextKey"),g=({disabled:a,status:n,message:r,size:c}={})=>{const e=d(f,{}),l=o(()=>e.validateInstance),v=o(()=>(a==null?void 0:a.value)||e.disabled),u=o(()=>e.layout),s=o(()=>(e==null?void 0:e.size)||(c==null?void 0:c.value)),m=o(()=>{var t;return((t=l.value)==null?void 0:t.isError)??!1}),y=o(()=>{var t;return((t=l.value)==null?void 0:t.message)??(r==null?void 0:r.value)}),i=o(()=>{var t;return((t=l.value)==null?void 0:t.status)??(n==null?void 0:n.value)});return{formItemCtx:e,mergedDisabled:v,mergedMessage:y,isError:m,mergedStatus:i,mergedSize:s,layout:u,validate:t=>{e!=null&&e.validate&&e.validate(t)}}};export{f as a,p as f,g as u};
