import{a as p}from"../app.1bc5a9aa.js";import{d as i,C as u,c as m,H as o,w as s,F as d,o as f,a}from"./framework.9fd5685d.js";import"./theme.e10a670a.js";const k=i({__name:"Type",setup(c){const n=l=>{p({message:"hello world",type:l})};return(l,e)=>{const t=u("c-button");return f(),m(d,null,[o(t,{type:"success",onClick:e[0]||(e[0]=r=>n("success"))},{default:s(()=>[a(" Success ")]),_:1}),o(t,{type:"warning",onClick:e[1]||(e[1]=r=>n("warning"))},{default:s(()=>[a(" warning ")]),_:1}),o(t,{type:"danger",onClick:e[2]||(e[2]=r=>n("danger"))},{default:s(()=>[a(" Danger ")]),_:1}),o(t,{type:"info",onClick:e[3]||(e[3]=r=>n("info"))},{default:s(()=>[a(" Info ")]),_:1})],64)}}});export{k as default};