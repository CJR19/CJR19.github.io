import{a as o}from"../app.1bc5a9aa.js";import{d as r,C as l,c as m,H as t,w as a,F as p,a4 as _,o as i,a as s}from"./framework.9fd5685d.js";import"./theme.e10a670a.js";const g=r({__name:"Basic",setup(d){const n=()=>{o({message:"hello world"})},c=()=>{o({message:_("b","this is bold")})};return(u,f)=>{const e=l("c-button");return i(),m(p,null,[t(e,{type:"primary",onClick:n},{default:a(()=>[s(" 创建一条消息 ")]),_:1}),t(e,{onClick:c},{default:a(()=>[s(" 创建支持 VNode 的消息 ")]),_:1})],64)}}});export{g as default};