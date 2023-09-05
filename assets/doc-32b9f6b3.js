var pe=Object.defineProperty;var he=(p,t,l)=>t in p?pe(p,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):p[t]=l;var k=(p,t,l)=>(he(p,typeof t!="symbol"?t+"":t,l),l);import{Y as I,a as N}from"./index-fd22ea82.js";import{a as W,Y as K}from"./index-7dac4f4d.js";import{Y as G}from"./index-913afc19.js";import{_ as ae}from"./index-7aeb288f.js";import{d as U,dD as ne,dE as ye,q as oe,dT as q,o as _,b as B,dZ as se,n as O,dq as $,dH as be,eU as ie,e7 as Ee,c as Y,dG as ge,j as e,t as x,dY as _e,e as s,w as n,g as Ce,dX as ke,eV as Z,dU as re,eW as j,eX as ee,eY as z,eZ as de,e_ as ve,e$ as ue,f0 as De,f1 as xe,r as T,f as F,k as m,i as R,F as L,_ as te,v as me,p as ce,a as Q}from"./index-79e930ed.js";import{f as fe,a as Be}from"./use-form-item-edb160f6.js";const Fe=["onSubmit"],Ve=U({name:"YkForm",__name:"form",props:{model:{},id:{},rules:{},labelWidth:{default:116},size:{default:"l"},disabled:{type:Boolean,default:!1},layout:{default:"horizontal"}},setup(p,{expose:t}){const l=p,o=ne("form"),a={},{model:c,disabled:d,rules:y,labelWidth:u,size:h,layout:v}=ye(l),E=async g=>{const A=[];let C=!1;return Object.keys(a).forEach(D=>{var b;A.push(a[D].validate()),C=C||(((b=a[D])==null?void 0:b.isError)??!1)}),Promise.all(A).then(D=>{const b={};let S=!1;return D.forEach(J=>{J&&(S=!0,b[J.field]=J)}),ie(g)&&g(S?b:void 0),S?b:void 0})},r=g=>{const A=g.field;a[A]={...g}},i=(g,A)=>{Object.assign(a[g],A)},f=()=>{Object.keys(a).forEach(g=>{a[g].resetValidate()})},M=g=>{};return oe(fe,q({model:c,labelWidth:u,disabled:d,size:h,layout:v,rules:y,addField:r,updateValidateState:i})),t({validate:E,resetFields:f}),(g,A)=>(_(),B("form",{class:O($(o)([$(v)])),onSubmit:be(M,["prevent"])},[se(g.$slots,"default")],42,Fe))}}),je=U({name:"YkFormItem",__name:"form-item",props:{field:{},labelWidth:{default:116},label:{},required:{type:Boolean},rules:{},disabled:{type:Boolean}},setup(p){const t=p,l=ne("form-item"),o=Ee(fe,{}),a=q({status:"primary",isError:!1,message:""}),c=Y(()=>t.disabled||o.disabled),d=Y(()=>(o==null?void 0:o.labelWidth)??t.labelWidth),y=Y(()=>{var i;const r=[];if(t.rules&&r.push(...t.rules),t.field&&o.rules){const f=((i=o.rules)==null?void 0:i[t.field])??[];r.push(...f)}return t.required&&r.push({required:!0}),r}),u=Y(()=>o.size||"l"),h=Y(()=>o.layout||"horizontal"),v=r=>{let i=y.value;if(r&&(i=i.filter(A=>Z(A.trigger)?A.trigger.includes(r):A.trigger===r)),!t.field||i.length===0)return Promise.resolve();const f=t.field,M=o==null?void 0:o.model[f],g=new He({[f]:i.map(({...A})=>(!A.type&&!A.validator&&(A.type="string"),A))},{ignoreEmptyString:!0});return new Promise(A=>{g.validate({[f]:M},C=>{var S;const D=!!(C!=null&&C[f]);(S=o.updateValidateState)==null||S.call(o,f,{isError:D,status:D?"error":"primary",message:(C==null?void 0:C[f].message)??""}),a.isError=D,a.status=D?"error":"primary",a.message=(C==null?void 0:C[f].message)??"";const b=D?{label:t.label,field:t.field,value:C[f].value,type:C[f].type,isRequiredError:!!C[f].requiredError,message:C[f].message}:void 0;A(b)})})},E=()=>{var r;t.field&&((r=o.updateValidateState)==null||r.call(o,t.field,{isError:!1,status:"primary",message:""}),a.isError=!1,a.status="primary",a.message="")};return ge(()=>{var r;if(t.field){const i=q({field:t.field,disabled:c,status:"primary",isError:!1,rules:y,validate:v,resetValidate:E});(r=o.addField)==null||r.call(o,i)}}),oe(Be,q({size:u,layout:h,validateInstance:a,disabled:c.value,validate:v})),(r,i)=>(_(),B("div",{class:O($(l)([u.value]))},[e("div",{class:O($(l)("label")),style:_e({width:`${d.value}px`})},x(r.label),7),e("div",{class:O($(l)("field"))},[se(r.$slots,"default"),s(ke,{name:"fade"},{default:n(()=>[a.isError?(_(),B("div",{key:0,class:O($(l)("extra"))},x(a.message),3)):Ce("",!0)]),_:1})],2)],2))}}),X=re(Ve),H=re(je),le=(p,t)=>{const l={...p};return Object.keys(t||{}).forEach(o=>{const a=l[o],c=t==null?void 0:t[o];l[o]=j(a)?{...a,...c}:c||a}),l},qe=(p,t)=>{const l=t.split(".");let o=p;for(let a=0;a<l.length;a++)if(o=o&&o[l[a]],o===void 0)return o;return o},V="#{field} is not a #{type} type",Me={required:"#{field} is required",type:{ip:V,email:V,url:V,string:V,number:V,array:V,object:V,boolean:V},number:{min:"`#{value}` is not greater than `#{min}`",max:"`#{value}` is not less than `#{max}`",equal:"`#{value}` is not equal to `#{equal}`",range:"`#{value}` is not in range `#{min} ~ #{max}`",positive:"`#{value}` is not a positive number",negative:"`#{value}` is not a negative number"},string:{maxLength:"#{field} cannot be longer than #{maxLength} characters",minLength:"#{field} must be at least #{minLength} characters",length:"#{field} must be exactly #{length} characters",match:"`#{value}` does not match pattern #{pattern}",uppercase:"`#{value}` must be all uppercase",lowercase:"`#{value}` must be all lowercased"},array:{length:"#{field} must be exactly #{length} in length",minLength:"#{field} cannot be less than #{minLength} in length",maxLength:"#{field} cannot be greater than #{maxLength} in length",includes:"#{field} is not includes #{includes}",deepEqual:"#{field} is not deep equal with #{deepEqual}",empty:"#{field} is not an empty array"},object:{deepEqual:"#{field} is not deep equal to expected value",hasKeys:"#{field} does not contain required fields",empty:"#{field} is not an empty object"},boolean:{true:"Expect true but got `#{value}`",false:"Expect false but got `#{value}`"}};class ze{constructor(t,l){k(this,"obj");k(this,"message");k(this,"type");k(this,"error");k(this,"_not");k(this,"validateMessages");k(this,"field");k(this,"getValidateMsg",(t,l={})=>{const o={...l,value:this.obj,field:this.field,type:this.type},a=qe(this.validateMessages,t);return ie(a)?a(o):ee(a)?a.replace(/\#\{.+?\}/g,c=>{const d=c.slice(2,-1);if(d in o){if(j(o[d])||Z(o[d]))try{return JSON.stringify(o[d])}catch{return o[d]}return String(o[d])}return c}):a});j(l)&&ee(t)&&l.trim?this.obj=t.trim():j(l)&&l.ignoreEmptyString&&t===""?this.obj=void 0:this.obj=t,this.message=l.message,this.type=l.type,this.error=null,this.field=l.field||l.type,this.validateMessages=le(Me,l.validateMessages)}get not(){return this._not=!this._not,this}get isRequired(){if(z(this.obj)||de(this.obj)){const t=this.getValidateMsg("required");this.error={value:this.obj,type:this.type,requiredError:!0,message:this.message||(j(t)?t:`${this._not?"[NOT MODE]:":""}${t}`)}}return this}get end(){return this.error}addError(t){!this.error&&t&&(this.error={value:this.obj,type:this.type,message:this.message||(j(t)?t:`${this._not?"[NOT MODE]:":""}${t}`)})}validate(t,l){return(this._not?t:!t)&&this.addError(l),this}collect(t){t&&t(this.error)}}const w=ze;class Le extends w{constructor(t,l){super(t,{...l,type:"string"}),this.validate(l&&l.strict?ee(this.obj):!0,this.getValidateMsg("type.string"))}maxLength(t){return this.obj?this.validate(this.obj.length<=t,this.getValidateMsg("string.maxLength",{maxLength:t})):this}minLength(t){return this.obj?this.validate(this.obj.length>=t,this.getValidateMsg("string.minLength",{minLength:t})):this}length(t){return this.obj?this.validate(this.obj.length===t,this.getValidateMsg("string.length",{length:t})):this}match(t){const l=t instanceof RegExp;return l&&(t.lastIndex=0),this.validate(this.obj===void 0||l&&t.test(this.obj),this.getValidateMsg("string.match",{pattern:t}))}get uppercase(){return this.obj?this.validate(this.obj.toUpperCase()===this.obj,this.getValidateMsg("string.uppercase")):this}get lowercase(){return this.obj?this.validate(this.obj.toLowerCase()===this.obj,this.getValidateMsg("string.lowercase")):this}}const we=Le;class Se extends w{constructor(t,l){super(t,{...l,type:"number"}),this.validate(l&&l.strict?ve(this.obj):!0,this.getValidateMsg("type.number"))}min(t){return z(this.obj)?this:this.validate(this.obj>=t,this.getValidateMsg("number.min",{min:t}))}max(t){return z(this.obj)?this:this.validate(this.obj<=t,this.getValidateMsg("number.max",{max:t}))}equal(t){return z(this.obj)?this:this.validate(this.obj===t,this.getValidateMsg("number.equal",{equal:t}))}range(t,l){return z(this.obj)?this:this.validate(this.obj>=t&&this.obj<=l,this.getValidateMsg("number.range",{min:t,max:l}))}get positive(){return z(this.obj)?this:this.validate(this.obj>0,this.getValidateMsg("number.positive"))}get negative(){return z(this.obj)?this:this.validate(this.obj<0,this.getValidateMsg("number.negative"))}}const $e=Se;class Re extends w{constructor(t,l){super(t,{...l,type:"array"}),this.validate(l&&l.strict?Z(this.obj):!0,this.getValidateMsg("type.array",{value:this.obj,type:this.type}))}length(t){return this.obj?this.validate(this.obj.length===t,this.getValidateMsg("array.length",{value:this.obj,length:t})):this}minLength(t){return this.obj?this.validate(this.obj.length>=t,this.getValidateMsg("array.minLength",{value:this.obj,minLength:t})):this}maxLength(t){return this.obj?this.validate(this.obj.length<=t,this.getValidateMsg("array.maxLength",{value:this.obj,maxLength:t})):this}includes(t){return this.obj?this.validate(t.every(l=>this.obj.indexOf(l)!==-1),this.getValidateMsg("array.includes",{value:this.obj,includes:t})):this}deepEqual(t){return this.obj?this.validate(ue(this.obj,t),this.getValidateMsg("array.deepEqual",{value:this.obj,deepEqual:t})):this}get empty(){return this.validate(de(this.obj),this.getValidateMsg("array.empty",{value:this.obj}))}}const Ue=Re;class Ye extends w{constructor(t,l){super(t,{...l,type:"object"}),this.validate(l&&l.strict?j(this.obj):!0,this.getValidateMsg("type.object"))}deepEqual(t){return this.obj?this.validate(ue(this.obj,t),this.getValidateMsg("object.deepEqual",{deepEqual:t})):this}hasKeys(t){return this.obj?this.validate(t.every(l=>this.obj[l]),this.getValidateMsg("object.hasKeys",{keys:t})):this}get empty(){return this.validate(De(this.obj),this.getValidateMsg("object.empty"))}}const Oe=Ye;class Te extends w{constructor(t,l){super(t,{...l,type:"boolean"}),this.validate(l&&l.strict?xe(this.obj):!0,this.getValidateMsg("type.boolean"))}get true(){return this.validate(this.obj===!0,this.getValidateMsg("boolean.true"))}get false(){return this.validate(this.obj===!1,this.getValidateMsg("boolean.false"))}}const Pe=Te,Ie=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Ne=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),We=/^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/;class Ke extends w{constructor(t,l){super(t,{...l,type:"type"})}get email(){return this.type="email",this.validate(this.obj===void 0||Ie.test(this.obj),this.getValidateMsg("type.email"))}get url(){return this.type="url",this.validate(this.obj===void 0||Ne.test(this.obj),this.getValidateMsg("type.url"))}get ip(){return this.type="ip",this.validate(this.obj===void 0||We.test(this.obj),this.getValidateMsg("type.ip"))}}const Ge=Ke;class Ze extends w{constructor(t,l){super(t,{...l,type:"custom"})}validate(){const t=this;return function(l,o){let a;if(l)return a=l(t.obj,t.addError.bind(t)),a&&a.then?(o&&a.then(()=>{o&&o(t.error)},c=>{console.error(c)}),[a,t]):(o&&o(t.error),t.error)}}}const Xe=Ze,P=(p,t)=>new Ae(p,{field:"value",...t});P.globalConfig={};P.setGlobalConfig=p=>{P.globalConfig=p||{}};class Ae{constructor(t,l){k(this,"number");k(this,"string");k(this,"array");k(this,"object");k(this,"boolean");k(this,"type");k(this,"custom");const o=P.globalConfig,a={...o,...l,validateMessages:le(o.validateMessages,l.validateMessages)};this.string=new we(t,a),this.number=new $e(t,a),this.array=new Ue(t,a),this.object=new Oe(t,a),this.boolean=new Pe(t,a),this.type=new Ge(t,a),this.custom=new Xe(t,a)}}class He{constructor(t,l={}){k(this,"schema");k(this,"options");this.schema=t,this.options=l}messages(t){this.options={...this.options,validateMessages:le(this.options.validateMessages,t)}}validate(t,l){if(!j(t))return;const o=[];let a=null;function c(d,y){a||(a={}),(!a[d]||y.requiredError)&&(a[d]=y)}this.schema&&Object.keys(this.schema).forEach(d=>{if(Z(this.schema[d]))for(let y=0;y<this.schema[d].length;y++){const u=this.schema[d][y],h=u.type,v=u.message;if(!h&&!u.validator)throw`You must specify a type to field ${d}!`;const E={...this.options,message:v,field:d};"ignoreEmptyString"in u&&(E.ignoreEmptyString=u.ignoreEmptyString),"strict"in u&&(E.strict=u.strict);const r=new Ae(t[d],E);let i=r.type[h]||null;if(!i)if(u.validator){i=r.custom.validate(u.validator),Object.prototype.toString.call(i)==="[object Array]"&&i[0].then?o.push({function:i[0],_this:i[1],key:d}):i&&c(d,i);continue}else i=r[h];if(Object.keys(u).forEach(f=>{u.required&&(i=i.isRequired),f!=="message"&&i[f]&&u[f]&&typeof i[f]=="object"&&(i=i[f]),i[f]&&u[f]!==void 0&&typeof i[f]=="function"&&(i=i[f](u[f]))}),i.collect(f=>{f&&c(d,f)}),a)break}}),o.length>0?Promise.all(o.map(d=>d.function)).then(()=>{o.forEach(d=>{d._this.error&&c(d.key,d._this.error)}),l&&l(a)}):l&&l(a)}}const Je=U({__name:"form-primary",setup(p){const t=T(),l=q({name:"大飞",sex:"man",date:["2"],nickname:"",age:20}),o={name:[{required:!0,message:"Please select Activity count",trigger:"change"},{minLength:4,trigger:"change"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],sex:[{required:!0,message:"Please select Activity count"}]},a=[{maxLength:6,require:!0,trigger:["change","blur","focus"]}],c=T([{id:"1",label:"昨天"},{id:"2",label:"今天"},{id:"3",label:"明天"}]),d=u=>{u&&(u.resetFields(),console.log("reset"))},y=u=>{u&&u.validate(h=>{console.log(h)})};return(u,h)=>{const v=G,E=H,r=I,i=N,f=ae,M=K,g=W,A=te,C=me,D=X;return _(),F(D,{ref_key:"formRef",ref:t,model:l,rules:o},{default:n(()=>[s(E,{label:"姓名",field:"name",rules:a},{default:n(()=>[s(v,{modelValue:l.name,"onUpdate:modelValue":h[0]||(h[0]=b=>l.name=b)},null,8,["modelValue"])]),_:1}),s(E,{label:"昵称",field:"nickname"},{default:n(()=>[s(v,{modelValue:l.nickname,"onUpdate:modelValue":h[1]||(h[1]=b=>l.nickname=b),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),s(E,{label:"性别",field:"sex",rules:o.sex},{default:n(()=>[s(i,{modelValue:l.sex,"onUpdate:modelValue":h[2]||(h[2]=b=>l.sex=b)},{default:n(()=>[s(r,{value:"man"},{default:n(()=>[m("男")]),_:1}),s(r,{value:"woman"},{default:n(()=>[m("女")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),s(E,{label:"年龄",field:"sex",rules:o.sex},{default:n(()=>[s(f,{modelValue:l.age,"onUpdate:modelValue":h[3]||(h[3]=b=>l.age=b)},null,8,["modelValue"])]),_:1},8,["rules"]),s(E,{label:"日期",field:"date",required:!0},{default:n(()=>[s(g,{modelValue:l.date,"onUpdate:modelValue":h[4]||(h[4]=b=>l.date=b)},{default:n(()=>[(_(!0),B(L,null,R(c.value,b=>(_(),F(M,{key:b.id,value:b.id},{default:n(()=>[m(x(b.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(E,null,{default:n(()=>[s(C,null,{default:n(()=>[s(A,{type:"primary",onClick:h[5]||(h[5]=b=>d(t.value))},{default:n(()=>[m("重置")]),_:1}),s(A,{onClick:h[6]||(h[6]=b=>y(t.value))},{default:n(()=>[m("提交")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}}),Qe=U({__name:"form-disabled",setup(p){const t=q({name:"大飞",sex:"man",date:["2"]}),l=T([{id:"1",label:"昨天"},{id:"2",label:"今天"},{id:"3",label:"明天"}]);return(o,a)=>{const c=G,d=H,y=I,u=N,h=K,v=W,E=X;return _(),F(E,{model:t,disabled:!0},{default:n(()=>[s(d,{label:"姓名",field:"name"},{default:n(()=>[s(c,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=r=>t.name=r)},null,8,["modelValue"])]),_:1}),s(d,{label:"性别",field:"sex"},{default:n(()=>[s(u,{modelValue:t.sex,"onUpdate:modelValue":a[1]||(a[1]=r=>t.sex=r)},{default:n(()=>[s(y,{value:"man"},{default:n(()=>[m("男")]),_:1}),s(y,{value:"woman"},{default:n(()=>[m("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(d,{label:"日期",field:"date"},{default:n(()=>[s(v,{modelValue:t.date,"onUpdate:modelValue":a[2]||(a[2]=r=>t.date=r)},{default:n(()=>[(_(!0),B(L,null,R(l.value,r=>(_(),F(h,{key:r.id,value:r.id},{default:n(()=>[m(x(r.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),e2=U({__name:"form-size",setup(p){const t=q({name:"大飞",sex:"man",date:["2"],age:20}),l=T([{id:"1",label:"昨天"},{id:"2",label:"今天"},{id:"3",label:"明天"}]),o=["s","m","l","xl"];return(a,c)=>{const d=te,y=G,u=H,h=I,v=N,E=ae,r=K,i=W,f=X,M=me;return _(),F(M,{direction:"vertical"},{default:n(()=>[(_(),B(L,null,R(o,g=>e("div",null,[s(d,{status:"success",size:"s"},{default:n(()=>[m(x(`尺寸: ${g}`),1)]),_:2},1024),s(f,{model:t,size:g},{default:n(()=>[s(u,{label:"姓名",field:"name"},{default:n(()=>[s(y,{modelValue:t.name,"onUpdate:modelValue":c[0]||(c[0]=A=>t.name=A)},null,8,["modelValue"])]),_:1}),s(u,{label:"性别",field:"sex"},{default:n(()=>[s(v,{modelValue:t.sex,"onUpdate:modelValue":c[1]||(c[1]=A=>t.sex=A)},{default:n(()=>[s(h,{value:"man"},{default:n(()=>[m("男")]),_:1}),s(h,{value:"woman"},{default:n(()=>[m("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(u,{label:"年龄",field:"age"},{default:n(()=>[s(E,{modelValue:t.age,"onUpdate:modelValue":c[2]||(c[2]=A=>t.age=A)},null,8,["modelValue"])]),_:1}),s(u,{label:"日期",field:"date"},{default:n(()=>[s(i,{modelValue:t.date,"onUpdate:modelValue":c[3]||(c[3]=A=>t.date=A)},{default:n(()=>[(_(!0),B(L,null,R(l.value,A=>(_(),F(r,{key:A.id,value:A.id},{default:n(()=>[m(x(A.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:2},1032,["model","size"])])),64))]),_:1})}}});const t2=ce(e2,[["__scopeId","data-v-1275e8d2"]]),l2=U({__name:"form-layout",setup(p){const t=q({name:"大飞",sex:"man",date:["2"]}),l=T([{id:"1",label:"昨天"},{id:"2",label:"今天"},{id:"3",label:"明天"}]);return(o,a)=>{const c=te,d=G,y=H,u=I,h=N,v=K,E=W,r=X;return _(),B(L,null,[s(c,{status:"success",size:"s"},{default:n(()=>[m(x("布局: vertical"))]),_:1}),s(r,{model:t,layout:"vertical"},{default:n(()=>[s(y,{label:"姓名",field:"name"},{default:n(()=>[s(d,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=i=>t.name=i)},null,8,["modelValue"])]),_:1}),s(y,{label:"性别",field:"sex"},{default:n(()=>[s(h,{modelValue:t.sex,"onUpdate:modelValue":a[1]||(a[1]=i=>t.sex=i)},{default:n(()=>[s(u,{value:"man"},{default:n(()=>[m("男")]),_:1}),s(u,{value:"woman"},{default:n(()=>[m("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(y,{label:"日期",field:"date"},{default:n(()=>[s(E,{modelValue:t.date,"onUpdate:modelValue":a[2]||(a[2]=i=>t.date=i)},{default:n(()=>[(_(!0),B(L,null,R(l.value,i=>(_(),F(v,{key:i.id,value:i.id},{default:n(()=>[m(x(i.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),s(c,{status:"success",size:"s"},{default:n(()=>[m(x("布局: inline"))]),_:1}),s(r,{model:t,layout:"inline","label-width":50},{default:n(()=>[s(y,{label:"姓名",field:"name"},{default:n(()=>[s(d,{modelValue:t.name,"onUpdate:modelValue":a[3]||(a[3]=i=>t.name=i)},null,8,["modelValue"])]),_:1}),s(y,{label:"性别",field:"sex"},{default:n(()=>[s(h,{modelValue:t.sex,"onUpdate:modelValue":a[4]||(a[4]=i=>t.sex=i)},{default:n(()=>[s(u,{value:"man"},{default:n(()=>[m("男")]),_:1}),s(u,{value:"woman"},{default:n(()=>[m("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(y,{label:"日期",field:"date"},{default:n(()=>[s(E,{modelValue:t.date,"onUpdate:modelValue":a[5]||(a[5]=i=>t.date=i)},{default:n(()=>[(_(!0),B(L,null,R(l.value,i=>(_(),F(v,{key:i.id,value:i.id},{default:n(()=>[m(x(i.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}});const a2=ce(l2,[["__scopeId","data-v-25f3f6b8"]]),n2=e("p",null,"这里展示基本用法",-1),o2=e("p",null,[m("通过"),e("code",null,"disabled"),m("禁用当前表单，表单中的所有元素都将继承")],-1),s2=e("p",null,[m("通过"),e("code",null,"size"),m("控制表单元素大小，表单中的所有元素都将继承")],-1),i2=e("p",null,[m("通过"),e("code",null,"layout"),m("控制 label 和表单组件的相对位置，取值有"),e("code",null,"horizontal"),m("、"),e("code",null,"vertical"),m("、"),e("code",null,"inline"),m(" 默认为水平")],-1),r2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数名"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"model"),e("td",null,"绑定值 数据对象"),e("td",null,"[key: string]: any[]"),e("td",null,"-")]),e("tr",null,[e("td",null,"rules"),e("td",null,"校验规则对象"),e("td",null,"[key: string]: SchemaRuleType[]"),e("td",null,"-")]),e("tr",null,[e("td",null,"labelWidth"),e("td",null,"Label 宽度"),e("td",null,"number"),e("td",null,"116")]),e("tr",null,[e("td",null,"disabled"),e("td",null,"是否禁用"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"size"),e("td",null,"尺寸"),e("td",null,"'s' | 'm' | 'l' | 'xl' |"),e("td",null,"'l'")]),e("tr",null,[e("td",null,"layout"),e("td",null,"布局"),e("td",null,"'horizontal' | 'vertical' | 'inline'"),e("td",null,"'horizontal'")])])])],-1),d2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数名"),e("th",null,"描述"),e("th",null,"类型"),e("th",null,"默认值")])]),e("tbody",null,[e("tr",null,[e("td",null,"field"),e("td",null,"数据路径"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"rules"),e("td",null,"校验规则对象"),e("td",null,"SchemaRuleType[]"),e("td",null,"-")]),e("tr",null,[e("td",null,"labelWidth"),e("td",null,"Label 宽度"),e("td",null,"number"),e("td",null,"116")]),e("tr",null,[e("td",null,"disabled"),e("td",null,"是否禁用"),e("td",null,"boolean"),e("td",null,"false")]),e("tr",null,[e("td",null,"label"),e("td",null,"说明"),e("td",null,"string"),e("td",null,"-")]),e("tr",null,[e("td",null,"required"),e("td",null,"是否必须"),e("td",null,"boolean"),e("td",null,"-")])])])],-1),u2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"方法"),e("th",null,"说明"),e("th",null,"入参"),e("th",null,"出参")])]),e("tbody",null,[e("tr",null,[e("td",null,"validate"),e("td",null,"校验表单"),e("td",null,"callback?: (errors: undefined | Record<string, any>) => void"),e("td",null,"errors: undefined | Record<string, any>")]),e("tr",null,[e("td",null,"resetFields"),e("td",null,"重置表单"),e("td",null,"-"),e("td",null,"-")])])])],-1),m2=e("div",{class:"table-container"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"类型"),e("th",null,"描述")])]),e("tbody",null,[e("tr",null,[e("td",null,"required"),e("td",null,"boolean"),e("td",null,"是否必填")]),e("tr",null,[e("td",null,"message"),e("td",null,"any"),e("td",null,"自定义错误消息")]),e("tr",null,[e("td",null,"validator"),e("td",null,"CustomValidatorType"),e("td",null,"自定义验证函数")]),e("tr",null,[e("td",null,"type"),e("td",null,"RuleType"),e("td",null,"数据类型验证规则")]),e("tr",null,[e("td",null,"true"),e("td",null,"boolean"),e("td",null,"值是否为 true")]),e("tr",null,[e("td",null,"false"),e("td",null,"boolean"),e("td",null,"值是否为 false")]),e("tr",null,[e("td",null,"deepEqual"),e("td",null,"object or array"),e("td",null,"深度比较对象或数组")]),e("tr",null,[e("td",null,"hasKeys"),e("td",null,"string[]"),e("td",null,"对象是否具有指定的属性键")]),e("tr",null,[e("td",null,"empty"),e("td",null,"boolean"),e("td",null,"值是否为空对象或空数组")]),e("tr",null,[e("td",null,"includes"),e("td",null,"any"),e("td",null,"数组是否包含指定的值")]),e("tr",null,[e("td",null,"maxLength"),e("td",null,"number"),e("td",null,"字符串或数组的最大长度")]),e("tr",null,[e("td",null,"minLength"),e("td",null,"number"),e("td",null,"字符串或数组的最小长度")]),e("tr",null,[e("td",null,"pattern"),e("td",null,"RegExp"),e("td",null,"正则表达式匹配规则")]),e("tr",null,[e("td",null,"length"),e("td",null,"number"),e("td",null,"字符串或数组的长度")]),e("tr",null,[e("td",null,"uppercase"),e("td",null,"boolean"),e("td",null,"是否为大写字母")]),e("tr",null,[e("td",null,"lowercase"),e("td",null,"boolean"),e("td",null,"是否为小写字母")]),e("tr",null,[e("td",null,"min"),e("td",null,"number"),e("td",null,"数字的最小值")]),e("tr",null,[e("td",null,"max"),e("td",null,"number"),e("td",null,"数字的最大值")]),e("tr",null,[e("td",null,"equal"),e("td",null,"number"),e("td",null,"数字是否等于指定的值")]),e("tr",null,[e("td",null,"positive"),e("td",null,"boolean"),e("td",null,"是否为正数")]),e("tr",null,[e("td",null,"negative"),e("td",null,"boolean"),e("td",null,"是否为负数")]),e("tr",null,[e("td",null,"ignoreEmptyString"),e("td",null,"boolean"),e("td",null,"忽略空字符串")]),e("tr",null,[e("td",null,"strict"),e("td",null,"boolean"),e("td",null,"是否启用严格模式")]),e("tr",null,[e("td",null,"trigger"),e("td",null,"string or string[]"),e("td",null,"触发验证的事件名称或事件数组")])])])],-1),E2={__name:"doc",setup(p){return(t,l)=>{const o=Q("yk-title"),a=Q("yk-snippet"),c=Q("DocPage");return _(),F(c,null,{default:n(()=>[s(o,{level:2,id:"YkForm表单"},{default:n(()=>[m("YkForm 表单")]),_:1}),s(a,{title:"基本用法",code:"%3Ctemplate%3E%0A%20%20%3Cyk-form%20ref%3D%22formRef%22%20%3Amodel%3D%22form%22%20%3Arules%3D%22rulesMap%22%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20field%3D%22name%22%20%3Arules%3D%22nameExtraRule%22%3E%0A%20%20%20%20%20%20%3Cyk-input%20v-model%3D%22form.name%22%3E%3C%2Fyk-input%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%98%B5%E7%A7%B0%22%20field%3D%22nickname%22%3E%0A%20%20%20%20%20%20%3Cyk-input%20v-model%3D%22form.nickname%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%22%3E%3C%2Fyk-input%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%80%A7%E5%88%AB%22%20field%3D%22sex%22%20%3Arules%3D%22rulesMap.sex%22%3E%0A%20%20%20%20%20%20%3Cyk-radio-group%20v-model%3D%22form.sex%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22man%22%3E%E7%94%B7%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%B9%B4%E9%BE%84%22%20field%3D%22sex%22%20%3Arules%3D%22rulesMap.sex%22%3E%0A%20%20%20%20%20%20%3Cyk-input-number%20v-model%3D%22form.age%22%3E%3C%2Fyk-input-number%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%97%A5%E6%9C%9F%22%20field%3D%22date%22%20%3Arequired%3D%22true%22%3E%0A%20%20%20%20%20%20%3Cyk-checkbox-group%20v-model%3D%22form.date%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-checkbox%20v-for%3D%22item%20in%20data%22%20%3Akey%3D%22item.id%22%20%3Avalue%3D%22item.id%22%3E%0A%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.label%20%7D%7D%0A%20%20%20%20%20%20%20%20%3C%2Fyk-checkbox%3E%0A%20%20%20%20%20%20%3C%2Fyk-checkbox-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%3E%0A%20%20%20%20%20%20%3Cyk-space%3E%0A%20%20%20%20%20%20%20%20%3Cyk-button%20type%3D%22primary%22%20%40click%3D%22resetForm(formRef)%22%3E%E9%87%8D%E7%BD%AE%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%20%20%3Cyk-button%20%40click%3D%22submitForm(formRef)%22%3E%E6%8F%90%E4%BA%A4%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%3C%2Fyk-space%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%3C%2Fyk-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0Aconst%20formRef%20%3D%20ref()%0Aconst%20form%20%3D%20reactive(%7B%0A%20%20name%3A%20'%E5%A4%A7%E9%A3%9E'%2C%0A%20%20sex%3A%20'man'%2C%0A%20%20date%3A%20%5B'2'%5D%2C%0A%20%20nickname%3A%20''%2C%0A%20%20age%3A%2020%2C%0A%7D)%0Aconst%20rulesMap%20%3D%20%7B%0A%20%20name%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20required%3A%20true%2C%0A%20%20%20%20%20%20message%3A%20'Please%20select%20Activity%20count'%2C%0A%20%20%20%20%20%20trigger%3A%20'change'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20minLength%3A%204%2C%0A%20%20%20%20%20%20trigger%3A%20'change'%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%20%20nickname%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20required%3A%20true%2C%0A%20%20%20%20%20%20message%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E6%98%B5%E7%A7%B0'%2C%0A%20%20%20%20%20%20trigger%3A%20'blur'%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%20%20sex%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20required%3A%20true%2C%0A%20%20%20%20%20%20message%3A%20'Please%20select%20Activity%20count'%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D%0Aconst%20nameExtraRule%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20maxLength%3A%206%2C%0A%20%20%20%20require%3A%20true%2C%0A%20%20%20%20trigger%3A%20%5B'change'%2C%20'blur'%2C%20'focus'%5D%2C%0A%20%20%7D%2C%0A%5D%0Aconst%20data%20%3D%20ref(%5B%0A%20%20%7B%20id%3A%20'1'%2C%20label%3A%20'%E6%98%A8%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'2'%2C%20label%3A%20'%E4%BB%8A%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'3'%2C%20label%3A%20'%E6%98%8E%E5%A4%A9'%20%7D%2C%0A%5D)%0Aconst%20resetForm%20%3D%20(formEl)%20%3D%3E%20%7B%0A%20%20if%20(!formEl)%20%7B%0A%20%20%20%20return%0A%20%20%7D%0A%20%20formEl.resetFields()%0A%20%20console.log('reset')%0A%7D%0Aconst%20submitForm%20%3D%20(formEl)%20%3D%3E%20%7B%0A%20%20if%20(!formEl)%20%7B%0A%20%20%20%20return%0A%20%20%7D%0A%20%20formEl.validate((errors%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20console.log(errors)%0A%20%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A"},{demo:n(()=>[s(Je)]),desc:n(()=>[n2]),_:1}),s(o,{level:2,id:"YkForm表单"},{default:n(()=>[m("YkForm 表单")]),_:1}),s(a,{title:"禁用 Disabled",code:"%3Ctemplate%3E%0A%20%20%3Cyk-form%20%3Amodel%3D%22form%22%20%3Adisabled%3D%22true%22%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20field%3D%22name%22%3E%0A%20%20%20%20%20%20%3Cyk-input%20v-model%3D%22form.name%22%3E%3C%2Fyk-input%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%80%A7%E5%88%AB%22%20field%3D%22sex%22%3E%0A%20%20%20%20%20%20%3Cyk-radio-group%20v-model%3D%22form.sex%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22man%22%3E%E7%94%B7%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%97%A5%E6%9C%9F%22%20field%3D%22date%22%3E%0A%20%20%20%20%20%20%3Cyk-checkbox-group%20v-model%3D%22form.date%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-checkbox%20v-for%3D%22item%20in%20data%22%20%3Akey%3D%22item.id%22%20%3Avalue%3D%22item.id%22%3E%0A%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.label%20%7D%7D%0A%20%20%20%20%20%20%20%20%3C%2Fyk-checkbox%3E%0A%20%20%20%20%20%20%3C%2Fyk-checkbox-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%3C%2Fyk-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0Aconst%20form%20%3D%20reactive(%7B%0A%20%20name%3A%20'%E5%A4%A7%E9%A3%9E'%2C%0A%20%20sex%3A%20'man'%2C%0A%20%20date%3A%20%5B'2'%5D%2C%0A%7D)%0Aconst%20data%20%3D%20ref(%5B%0A%20%20%7B%20id%3A%20'1'%2C%20label%3A%20'%E6%98%A8%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'2'%2C%20label%3A%20'%E4%BB%8A%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'3'%2C%20label%3A%20'%E6%98%8E%E5%A4%A9'%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A"},{demo:n(()=>[s(Qe)]),desc:n(()=>[o2]),_:1}),s(a,{title:"尺寸 Size",code:"%3Ctemplate%3E%0A%20%20%3Cyk-space%20%3Adirection%3D%22%60vertical%60%22%3E%0A%20%20%20%20%3Cdiv%20v-for%3D%22size%20in%20sizeList%22%3E%0A%20%20%20%20%20%20%3Cyk-button%20status%3D%22success%22%20size%3D%22s%22%3E%7B%7B%20%60%E5%B0%BA%E5%AF%B8%3A%20%24%7Bsize%7D%60%20%7D%7D%3C%2Fyk-button%3E%0A%20%20%20%20%20%20%3Cyk-form%20%3Amodel%3D%22form%22%20%3Asize%3D%22size%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20field%3D%22name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-input%20v-model%3D%22form.name%22%3E%3C%2Fyk-input%3E%0A%20%20%20%20%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%80%A7%E5%88%AB%22%20field%3D%22sex%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-radio-group%20v-model%3D%22form.sex%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22man%22%3E%E7%94%B7%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%20%20%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%B9%B4%E9%BE%84%22%20field%3D%22age%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-input-number%20v-model%3D%22form.age%22%3E%3C%2Fyk-input-number%3E%0A%20%20%20%20%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%97%A5%E6%9C%9F%22%20field%3D%22date%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cyk-checkbox-group%20v-model%3D%22form.date%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cyk-checkbox%20v-for%3D%22item%20in%20data%22%20%3Akey%3D%22item.id%22%20%3Avalue%3D%22item.id%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.label%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-checkbox%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fyk-checkbox-group%3E%0A%20%20%20%20%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%20%20%3C%2Fyk-form%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fyk-space%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20Size%20%7D%20from%20'%40yike-design%2Fui%2Fsrc%2Fcomponents%2Futils'%0Aconst%20form%20%3D%20reactive(%7B%0A%20%20name%3A%20'%E5%A4%A7%E9%A3%9E'%2C%0A%20%20sex%3A%20'man'%2C%0A%20%20date%3A%20%5B'2'%5D%2C%0A%20%20age%3A%2020%2C%0A%7D)%0Aconst%20data%20%3D%20ref(%5B%0A%20%20%7B%20id%3A%20'1'%2C%20label%3A%20'%E6%98%A8%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'2'%2C%20label%3A%20'%E4%BB%8A%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'3'%2C%20label%3A%20'%E6%98%8E%E5%A4%A9'%20%7D%2C%0A%5D)%0Aconst%20sizeList%20%3D%20%5B's'%2C%20'm'%2C%20'l'%2C%20'xl'%5D%20as%20Size%5B%5D%0A%3C%2Fscript%3E%0A%3Cstyle%20scoped%3E%0A.yk-button%20%7B%0A%20%20margin-bottom%3A%2016px%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:n(()=>[s(t2)]),desc:n(()=>[s2]),_:1}),s(a,{title:"布局 Layout",code:"%3Ctemplate%3E%0A%20%20%3Cyk-button%20status%3D%22success%22%20size%3D%22s%22%3E%7B%7B%20%60%E5%B8%83%E5%B1%80%3A%20vertical%60%20%7D%7D%3C%2Fyk-button%3E%0A%20%20%3Cyk-form%20%3Amodel%3D%22form%22%20layout%3D%22vertical%22%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20field%3D%22name%22%3E%0A%20%20%20%20%20%20%3Cyk-input%20v-model%3D%22form.name%22%3E%3C%2Fyk-input%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%80%A7%E5%88%AB%22%20field%3D%22sex%22%3E%0A%20%20%20%20%20%20%3Cyk-radio-group%20v-model%3D%22form.sex%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22man%22%3E%E7%94%B7%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%97%A5%E6%9C%9F%22%20field%3D%22date%22%3E%0A%20%20%20%20%20%20%3Cyk-checkbox-group%20v-model%3D%22form.date%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-checkbox%20v-for%3D%22item%20in%20data%22%20%3Akey%3D%22item.id%22%20%3Avalue%3D%22item.id%22%3E%0A%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.label%20%7D%7D%0A%20%20%20%20%20%20%20%20%3C%2Fyk-checkbox%3E%0A%20%20%20%20%20%20%3C%2Fyk-checkbox-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%3C%2Fyk-form%3E%0A%20%20%3Cyk-button%20status%3D%22success%22%20size%3D%22s%22%3E%7B%7B%20%60%E5%B8%83%E5%B1%80%3A%20inline%60%20%7D%7D%3C%2Fyk-button%3E%0A%20%20%3Cyk-form%20%3Amodel%3D%22form%22%20layout%3D%22inline%22%20%3Alabel-width%3D%2250%22%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20field%3D%22name%22%3E%0A%20%20%20%20%20%20%3Cyk-input%20v-model%3D%22form.name%22%3E%3C%2Fyk-input%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%80%A7%E5%88%AB%22%20field%3D%22sex%22%3E%0A%20%20%20%20%20%20%3Cyk-radio-group%20v-model%3D%22form.sex%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22man%22%3E%E7%94%B7%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%20%20%3Cyk-radio%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fyk-radio%3E%0A%20%20%20%20%20%20%3C%2Fyk-radio-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%20%20%3Cyk-form-item%20label%3D%22%E6%97%A5%E6%9C%9F%22%20field%3D%22date%22%3E%0A%20%20%20%20%20%20%3Cyk-checkbox-group%20v-model%3D%22form.date%22%3E%0A%20%20%20%20%20%20%20%20%3Cyk-checkbox%20v-for%3D%22item%20in%20data%22%20%3Akey%3D%22item.id%22%20%3Avalue%3D%22item.id%22%3E%0A%20%20%20%20%20%20%20%20%20%20%7B%7B%20item.label%20%7D%7D%0A%20%20%20%20%20%20%20%20%3C%2Fyk-checkbox%3E%0A%20%20%20%20%20%20%3C%2Fyk-checkbox-group%3E%0A%20%20%20%20%3C%2Fyk-form-item%3E%0A%20%20%3C%2Fyk-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0Aconst%20form%20%3D%20reactive(%7B%0A%20%20name%3A%20'%E5%A4%A7%E9%A3%9E'%2C%0A%20%20sex%3A%20'man'%2C%0A%20%20date%3A%20%5B'2'%5D%2C%0A%7D)%0Aconst%20data%20%3D%20ref(%5B%0A%20%20%7B%20id%3A%20'1'%2C%20label%3A%20'%E6%98%A8%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'2'%2C%20label%3A%20'%E4%BB%8A%E5%A4%A9'%20%7D%2C%0A%20%20%7B%20id%3A%20'3'%2C%20label%3A%20'%E6%98%8E%E5%A4%A9'%20%7D%2C%0A%5D)%0A%3C%2Fscript%3E%0A%3Cstyle%20scoped%3E%0A.yk-button%20%7B%0A%20%20margin-bottom%3A%2016px%3B%0A%7D%0A%3C%2Fstyle%3E%0A"},{demo:n(()=>[s(a2)]),desc:n(()=>[i2]),_:1}),s(o,{level:3,id:"FormProps"},{default:n(()=>[m("Form Props")]),_:1}),r2,s(o,{level:3,id:"Form-ItemProps"},{default:n(()=>[m("Form-Item Props")]),_:1}),d2,s(o,{level:3,id:"Form-Expose"},{default:n(()=>[m("Form-Expose")]),_:1}),u2,s(o,{level:3,id:"SchemaRuleType"},{default:n(()=>[m("SchemaRuleType")]),_:1}),m2]),_:1})}}};export{E2 as default};
