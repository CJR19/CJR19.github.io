import{_ as i,C as n,c as r,H as a,w as o,Q as e,o as c,k as d}from"./chunks/framework.9fd5685d.js";const L=JSON.parse('{"title":"Loading | C-Element","description":"Loading 组件的文档","frontmatter":{"title":"Loading | C-Element","description":"Loading 组件的文档"},"headers":[],"relativePath":"pages/vue-components/loading.md","filePath":"pages/vue-components/loading.md"}'),s={name:"pages/vue-components/loading.md"},l=e("",4),D=d("p",null,"Loading/Basic",-1),h=e("",2),p=d("p",null,"Loading/CreateLoading",-1),g=e("",6);function A(_,m,u,C,b,E){const t=n("Demo");return c(),r("div",null,[l,a(t,{path:"Loading/Basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22md-demo-loading%20shadow-2%22%20v-loading%3D%22visiable%22%3E%0D%0A%20%20%20%20%20%20%20%20%E5%8A%A0%E8%BD%BD%E6%BC%94%E7%A4%BA%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%20%20%20%20%0D%0A%3Cscript%20setup%20lang%3D'ts'%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0D%0Aconst%20visiable%20%3D%20ref(true)%0D%0A%0D%0AsetTimeout(()%20%3D%3E%20%7B%0D%0A%20%20%20%20visiable.value%20%3D%20false%0D%0A%7D%2C%203000)%3B%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.md-demo-loading%20%7B%0D%0A%20%20%20%20width%3A%20200px%3B%0D%0A%20%20%20%20height%3A%20200px%3B%0D%0A%20%20%20%20background-color%3A%20pink%3B%0D%0A%20%20%20%20color%3A%20%23fff%3B%0D%0A%20%20%20%20line-height%3A%20200px%3B%0D%0A%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20border-radius%3A%204px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E",description:"Basic%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FLoading"},{default:o(()=>[D]),_:1}),h,a(t,{path:"Loading/CreateLoading","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-button%20type%3D%22primary%22%20%40click%3D%22loading%22%3E%E7%82%B9%E5%87%BB%E8%B0%83%E7%94%A8%3C%2Fc-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%20%20%20%20%0D%0A%3Cscript%20setup%20lang%3D'ts'%3E%0D%0Aimport%20%7B%20createLoading%20%7D%20from%20'%40%2Findex'%0D%0A%0D%0Aconst%20loading%20%3D%20()%3D%3E%20%7B%0D%0A%20%20%20%20const%20loading%20%3D%20createLoading()%0D%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20loading.close()%0D%0A%20%20%20%20%7D%2C%203000)%3B%0D%0A%7D%0D%0A%0D%0A%3C%2Fscript%3E%0D%0A",description:"createLoading%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FLoading"},{default:o(()=>[p]),_:1}),g])}const f=i(s,[["render",A]]);export{L as __pageData,f as default};
