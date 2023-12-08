import{_ as i,C as n,c as r,H as a,w as o,Q as e,o as c,k as d}from"./chunks/framework.9fd5685d.js";const L=JSON.parse('{"title":"Loading | C-Element","description":"Loading 组件的文档","frontmatter":{"title":"Loading | C-Element","description":"Loading 组件的文档"},"headers":[],"relativePath":"pages/vue-components/loading.md","filePath":"pages/vue-components/loading.md"}'),s={name:"pages/vue-components/loading.md"},l=e('<h1 id="loading-加载动画" tabindex="-1">Loading 加载动画 <a class="header-anchor" href="#loading-加载动画" aria-label="Permalink to &quot;Loading 加载动画&quot;">​</a></h1><p>常用于请求时的加载过渡动画。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>在元素上绑定指令 v-loading ,值为 <code>boolean</code>。为 <code>true</code> 时在元素上显示加载，为 <code>false</code> 关闭</p>',4),D=d("p",null,"Loading/Basic",-1),h=e('<h2 id="函数调用" tabindex="-1">函数调用 <a class="header-anchor" href="#函数调用" aria-label="Permalink to &quot;函数调用&quot;">​</a></h2><p>可以用 <code>createLoading</code> 调用显示全屏的loading, <code>createLoading</code> 返回 组件实例 ,调用其 close 方法即可关闭 ，配置项 <code>lock</code> 为 <code>true</code> 时可以禁止滚动，默认为 <code>true</code></p>',2),p=d("p",null,"Loading/CreateLoading",-1),g=e('<h2 id="craeteloading-配置项" tabindex="-1">CraeteLoading 配置项 <a class="header-anchor" href="#craeteloading-配置项" aria-label="Permalink to &quot;CraeteLoading  配置项&quot;">​</a></h2><p>使用 CraeteLoading 创建加载组件，它接受一个Object，以下是 Object 中的属性列表。</p><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td><code>string</code></td><td>&quot;加载中...&quot;</td></tr><tr><td>fullscreen</td><td>全屏</td><td>boolean</td><td>true</td></tr><tr><td>lock</td><td>全屏锁定</td><td>boolean</td><td>true</td></tr></tbody></table><h2 id="craeteloading-方法" tabindex="-1">CraeteLoading 方法 <a class="header-anchor" href="#craeteloading-方法" aria-label="Permalink to &quot;CraeteLoading 方法&quot;">​</a></h2><p>调用 CraeteLoading 会返回当前 Loading 的实例。 如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Loading</td><td>() =&gt; void</td></tr></tbody></table>',6);function A(_,m,u,C,b,E){const t=n("Demo");return c(),r("div",null,[l,a(t,{path:"Loading/Basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22md-demo-loading%20shadow-2%22%20v-loading%3D%22visiable%22%3E%0D%0A%20%20%20%20%20%20%20%20%E5%8A%A0%E8%BD%BD%E6%BC%94%E7%A4%BA%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%20%20%20%20%0D%0A%3Cscript%20setup%20lang%3D'ts'%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0D%0Aconst%20visiable%20%3D%20ref(true)%0D%0A%0D%0AsetTimeout(()%20%3D%3E%20%7B%0D%0A%20%20%20%20visiable.value%20%3D%20false%0D%0A%7D%2C%203000)%3B%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.md-demo-loading%20%7B%0D%0A%20%20%20%20width%3A%20200px%3B%0D%0A%20%20%20%20height%3A%20200px%3B%0D%0A%20%20%20%20background-color%3A%20pink%3B%0D%0A%20%20%20%20color%3A%20%23fff%3B%0D%0A%20%20%20%20line-height%3A%20200px%3B%0D%0A%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20border-radius%3A%204px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E",description:"Basic%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FLoading"},{default:o(()=>[D]),_:1}),h,a(t,{path:"Loading/CreateLoading","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-button%20type%3D%22primary%22%20%40click%3D%22loading%22%3E%E7%82%B9%E5%87%BB%E8%B0%83%E7%94%A8%3C%2Fc-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%20%20%20%20%0D%0A%3Cscript%20setup%20lang%3D'ts'%3E%0D%0Aimport%20%7B%20createLoading%20%7D%20from%20'%40%2Findex'%0D%0A%0D%0Aconst%20loading%20%3D%20()%3D%3E%20%7B%0D%0A%20%20%20%20const%20loading%20%3D%20createLoading()%0D%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20loading.close()%0D%0A%20%20%20%20%7D%2C%203000)%3B%0D%0A%7D%0D%0A%0D%0A%3C%2Fscript%3E%0D%0A",description:"createLoading%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FLoading"},{default:o(()=>[p]),_:1}),g])}const f=i(s,[["render",A]]);export{L as __pageData,f as default};