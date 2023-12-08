import{_ as s,C as c,c as i,H as l,w as o,k as e,a as t,Q as d,o as n}from"./chunks/framework.9fd5685d.js";const P=JSON.parse('{"title":"Collapse | C-Element","description":"Collapse 组件的文档","frontmatter":{"title":"Collapse | C-Element","description":"Collapse 组件的文档"},"headers":[],"relativePath":"pages/vue-components/collapse.md","filePath":"pages/vue-components/collapse.md"}'),p={name:"pages/vue-components/collapse.md"},r=e("h1",{id:"collapse-折叠面板",tabindex:"-1"},[t("Collapse 折叠面板 "),e("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1),h=e("p",null,"通过折叠面板收纳内容区域。",-1),m=e("h2",{id:"基础使用",tabindex:"-1"},[t("基础使用 "),e("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1),D=e("p",null,"可同时展开多个面板，面板之间不影响",-1),C=e("p",null,"Collapse/Basic",-1),_=e("h2",{id:"手风琴效果",tabindex:"-1"},[t("手风琴效果 "),e("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1),E=e("p",null,"每次只能展开一个面板",-1),A=e("p",null,[t("通过 "),e("code",null,"accordion"),t(" 属性来设置是否以手风琴模式显示。")],-1),b=e("p",null,"Collapse/Accordion",-1),u=d("",4);function F(f,v,T,g,x,B){const a=c("Demo");return n(),i("div",null,[r,h,m,D,l(a,{path:"Collapse/Basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-collapse%20v-model%3D%22openedValue%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-collapse-item%20name%3D%22a%22%20title%3D%22Title%20A%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3Eheadline%20title%3C%2Fh1%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20this%20is%20content%20a%20aaa%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fc-collapse-item%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-collapse-item%20name%3D%22b%22%20title%3D%22Title%20B%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20this%20is%20bbbbb%20test%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fc-collapse-item%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-collapse-item%20name%3D%22c%22%20title%3D%22Disabled%20Title%22%20disabled%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20this%20is%20cccc%20test%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fc-collapse-item%3E%0D%0A%20%20%20%20%3C%2Fc-collapse%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20openedValue%20%3D%20ref(%5B'a'%5D)%0D%0A%3C%2Fscript%3E",description:"Basic%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FCollapse"},{default:o(()=>[C]),_:1}),_,E,A,l(a,{path:"Collapse/Accordion","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-collapse%20v-model%3D%22openedValue%22%20accordion%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-collapse-item%20name%3D%22a%22%20title%3D%22Title%20A%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3Eheadline%20title%3C%2Fh1%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20this%20is%20content%20a%20aaa%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fc-collapse-item%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-collapse-item%20name%3D%22b%22%20title%3D%22Title%20B%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20this%20is%20bbbbb%20test%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fc-collapse-item%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-collapse-item%20name%3D%22c%22%20title%3D%22Disabled%20Title%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20this%20is%20cccc%20test%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fc-collapse-item%3E%0D%0A%20%20%20%20%3C%2Fc-collapse%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20openedValue%20%3D%20ref(%5B'a'%5D)%0D%0A%3C%2Fscript%3E",description:"Theme%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FCollapse"},{default:o(()=>[b]),_:1}),u])}const k=s(p,[["render",F]]);export{P as __pageData,k as default};
