import{d as c,h as u,C as d,b as p,a4 as l,o as m}from"./framework.9fd5685d.js";const _=c({__name:"RenderLabel",setup(b){const a=u(""),s=[{label:"hello",value:"1"},{label:"xyz",value:"2"},{label:"testing",value:"3"},{label:"check",value:"4",disabled:!0}],t=e=>l("div",{className:"xyz"},[l("b",e.label),l("span",e.value)]);return(e,o)=>{const n=d("c-select");return m(),p(n,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value=r),placeholder:"基础选择器，请选择",options:s,renderLabel:t},null,8,["modelValue"])}}});export{_ as default};
