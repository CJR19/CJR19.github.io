import{d as s,h as n,C as c,b as u,o as p}from"./framework.9fd5685d.js";const _=s({__name:"Basic",setup(r){const e=n(""),o=[{label:"hello",value:"1"},{label:"xyz",value:"2"},{label:"testing",value:"3"},{label:"check",value:"4",disabled:!0}];return(d,l)=>{const a=c("c-select");return p(),u(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),placeholder:"基础选择器，请选择",options:o},null,8,["modelValue"])}}});export{_ as default};