import{p as t}from"./standalone-e4535819.js";import{p as r}from"./parser-html-8c5dbf03.js";import{B as e}from"./base-f0edccdd.js";import"./tool-4bde39df.js";import"./modulepreload-polyfill-3cfb730f.js";const m=new class extends e{async beautify(){return t.format(this.code,{plugins:[r],parser:"vue",tabWidth:this.getOptionValue("tab",4)})}};export{m as formatter};