import{u as y,i as A}from"./action-cd384d03.js";import{d as B,y as C,I as p,D as T,r as u,A as D,B as I,c as V,w as m,f as _,v as i,j as d,k as $,q as z,F as E,C as H}from"./tool-4bde39df.js";import{l as R,r as k}from"./util-b9fa51d1.js";import"./modulepreload-polyfill-3cfb730f.js";import"./radix-450ef310.js";const S=B({__name:"Lrc",async setup(F){let n,s;const a=y(([n,s]=C(()=>A({input:H("hex","")},{paste:!1})),n=await n,s(),n));let o=p(null),t=p("");T(()=>({text:a.current.input.text}),({text:e})=>{if(t.value="",o.value=null,e.isError()){t.value=e.toString();return}if(!e.isEmpty())try{o.value=R(e),a.save()}catch(l){t.value=$error(l)}},{immediate:!0,deep:!0});const v=e=>t.value!==""?t.value:o.value===null?"":k(o.value,e);return(e,l)=>{const f=u("TextInput"),h=u("Textarea"),g=u("Align"),x=u("HeightResize"),w=D("row");return I((_(),V(x,null,{default:m(({height:c})=>[i(f,{modelValue:d(a).current.input,"onUpdate:modelValue":l[0]||(l[0]=r=>d(a).current.input=r),upload:"file",height:c},null,8,["modelValue","height"]),i(g,{direction:"vertical"},{default:m(()=>[(_(),$(E,null,z(["Hex","Dec","Oct","Bin"],r=>i(h,{"model-value":v(r),height:(c-15)/4,placeholder:`${e.$t("main_ui_output")} ${r}`,copy:r},null,8,["model-value","height","placeholder","copy"])),64))]),_:2},1024)]),_:1})),[[w,"10-14"]])}}});export{S as default};