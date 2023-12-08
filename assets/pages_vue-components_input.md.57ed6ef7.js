import{_ as r,C as o,c as l,H as d,w as s,k as t,a as e,Q as n,o as p}from"./chunks/framework.9fd5685d.js";const L=JSON.parse('{"title":"Input | C-Element","description":"Input 组件的文档","frontmatter":{"title":"Input | C-Element","description":"Input 组件的文档"},"headers":[],"relativePath":"pages/vue-components/input.md","filePath":"pages/vue-components/input.md"}'),i={name:"pages/vue-components/input.md"},c=t("h1",{id:"input-输入框",tabindex:"-1"},[e("Input 输入框 "),t("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1),h=t("p",null,"通过鼠标或键盘输入字符",-1),u=t("h2",{id:"基础文本框",tabindex:"-1"},[e("基础文本框 "),t("a",{class:"header-anchor",href:"#基础文本框","aria-label":'Permalink to "基础文本框"'},"​")],-1),m=t("p",null,"Input/Basic",-1),D=t("h2",{id:"禁用文本框",tabindex:"-1"},[e("禁用文本框 "),t("a",{class:"header-anchor",href:"#禁用文本框","aria-label":'Permalink to "禁用文本框"'},"​")],-1),A=t("p",null,"通过 disabled 属性指定是否禁用 input 组件",-1),E=t("p",null,"Input/Disabled",-1),F=t("h2",{id:"尺寸",tabindex:"-1"},[e("尺寸 "),t("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1),C=t("p",null,"使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。",-1),_=t("p",null,"Input/Size",-1),f=t("h2",{id:"复合型输入框",tabindex:"-1"},[e("复合型输入框 "),t("a",{class:"header-anchor",href:"#复合型输入框","aria-label":'Permalink to "复合型输入框"'},"​")],-1),b=t("p",null,[e("可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 "),t("code",null,"prepend"),e(" 和 "),t("code",null,"append"),e(" 插槽。 要在输入框中添加前后元素，可以使用 "),t("code",null,"prefix"),e(" 和 "),t("code",null,"suffix"),e(" 插槽。")],-1),g=t("p",null,"Input/Slot",-1),x=t("h2",{id:"textarea",tabindex:"-1"},[e("Textarea "),t("a",{class:"header-anchor",href:"#textarea","aria-label":'Permalink to "Textarea"'},"​")],-1),B=t("p",null,[e("用于输入多行文本信息可缩放的输入框。 添加 "),t("code",null,'type="textarea"'),e(" 属性来将 input 元素转换为原生的 textarea 元素。")],-1),v=t("p",null,"Input/Textarea",-1),I=t("h2",{id:"密码文本框",tabindex:"-1"},[e("密码文本框 "),t("a",{class:"header-anchor",href:"#密码文本框","aria-label":'Permalink to "密码文本框"'},"​")],-1),P=t("p",null,[e("使用 "),t("code",null,"show-password"),e(" 属性即可得到一个可切换显示隐藏的密码框")],-1),w=t("p",null,"Input/Password",-1),y=t("h2",{id:"清空文本框",tabindex:"-1"},[e("清空文本框 "),t("a",{class:"header-anchor",href:"#清空文本框","aria-label":'Permalink to "清空文本框"'},"​")],-1),T=t("p",null,[e("使用 "),t("code",null,"clearable"),e(" 属性即可得到一个可一键清空的输入框")],-1),k=t("p",null,"Input/Clearable",-1),S=n('<h2 id="input-属性" tabindex="-1">Input 属性 <a class="header-anchor" href="#input-属性" aria-label="Permalink to &quot;Input  属性&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>input 原生类型</td><td>&#39;string&#39;</td><td>text</td></tr><tr><td>model-value / v-model</td><td>绑定值</td><td>&#39;string&#39;</td><td></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td></td></tr><tr><td>size</td><td>输入框尺寸，只在 type 不为 &#39;textarea&#39; 时有效</td><td>&#39;large&#39; | &#39;small&#39;</td><td></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td></td></tr><tr><td>show-password</td><td>是否显示切换密码图标</td><td>boolean</td><td>false</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>false</td></tr><tr><td>readonly</td><td>原生 readonly 属性，是否只读</td><td>boolean</td><td>false</td></tr><tr><td>autofocus</td><td>原生属性，自动获取焦点</td><td>boolean</td><td>false</td></tr><tr><td>autocomplete</td><td>原生 autocomplete 属性</td><td>string</td><td>off</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>blur</td><td>当选择器的输入框失去焦点时触发</td><td>(e: FocusEvent) =&gt; void</td></tr><tr><td>focus</td><td>当选择器的输入框获得焦点时触发</td><td>(e: FocusEvent) =&gt; void</td></tr><tr><td>change</td><td>当选择器的输入框失去焦点时触发</td><td>(e: string) =&gt; void</td></tr><tr><td>input</td><td>当选择器的输入框获得焦点时触发</td><td>(e: string) =&gt; void</td></tr><tr><td>clear</td><td>在点击由 clearable 属性生成的清空按钮时触发</td><td>()=&gt;void</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容</td></tr><tr><td>suffix</td><td>输入框尾部内容</td></tr><tr><td>prepend</td><td>输入框前置内容</td></tr><tr><td>append</td><td>输入框后置内容</td></tr></tbody></table><h2 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>ref</td><td>HTML元素 input 或 textarea</td><td><code>Ref&lt;HTMLInputElement | HTMLTextAreaElement&gt;</code></td></tr></tbody></table>',8);function N(R,q,J,z,V,H){const a=o("Demo");return p(),l("div",null,[c,h,u,d(a,{path:"Input/Basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-input%20v-model%3D%22message%22%20placeholder%3D%22%E5%9F%BA%E7%A1%80%E6%96%87%E6%9C%AC%E6%A1%86%EF%BC%8C%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0D%0A%20%20%20%20message%3A%3Cspan%3E%7B%7B%20message%20%7D%7D%3C%2Fspan%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20message%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A",description:"Basic%20Input",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[m]),_:1}),D,A,d(a,{path:"Input/Disabled","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-input%20v-model%3D%22message%22%20disabled%20placeholder%3D%22%E5%9F%BA%E7%A1%80%E6%96%87%E6%9C%AC%E6%A1%86%EF%BC%8C%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20message%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A",description:"Disabled%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[E]),_:1}),F,C,d(a,{path:"Input/Size","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22md-demo-input%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-input%20v-model%3D%22message%22%20size%3D%22large%22%20placeholder%3D%22large%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-input%20v-model%3D%22message%22%20placeholder%3D%22normal%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cc-input%20v-model%3D%22message%22%20size%3D%22small%22%20placeholder%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%3Emessage%3A%7B%7B%20message%20%7D%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20message%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.md-demo-input%20%7B%0D%0A%20%20%20%20display%3A%20flex%3B%0D%0A%20%20%20%20flex-direction%3A%20column%3B%0D%0A%20%20%20%20gap%3A%205px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E",description:"Size%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[_]),_:1}),f,b,d(a,{path:"Input/Slot","raw-source":"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cc-input%20v-model%3D%22test%22%20placeholder%3D%22prepend%20append%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prepend%3EHttps%3A%2F%2F%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23append%3E.com%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fc-input%3E%0D%0A%0D%0A%20%20%20%20%3Cc-input%20v-model%3D%22test%22%20placeholder%3D%22prefix%20suffix%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cc-icon%20icon%3D%22fa-user%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cc-icon%20icon%3D%22fa-user%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fc-input%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A",description:"Slot%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[g]),_:1}),x,B,d(a,{path:"Input/Textarea","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-input%20v-model%3D%22test%22%20placeholder%3D%22%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%B8%80%E4%B8%AA%20Textarea%22%20type%3D%22textarea%22%3E%3C%2Fc-input%3E%0D%0A%3C%2Ftemplate%3E",description:"Textarea%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[v]),_:1}),I,P,d(a,{path:"Input/Password","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-input%20v-model%3D%22test%22%20placeholder%3D%22%E5%AF%86%E7%A0%81%E6%96%87%E6%9C%AC%E6%A1%86%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%88%87%E6%8D%A2%22%20showPassword%2F%3E%0D%0A%3C%2Ftemplate%3E",description:"Password%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[w]),_:1}),y,T,d(a,{path:"Input/Clearable","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-input%20v-model%3D%22test%22%20clearable%20placeholder%3D%22%E5%AF%86%E7%A0%81%E6%96%87%E6%9C%AC%E6%A1%86%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%88%87%E6%8D%A2%22%20showPassword%2F%3E%0D%0A%3C%2Ftemplate%3E",description:"Clearable%20Example",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FInput"},{default:s(()=>[k]),_:1}),S])}const M=r(i,[["render",N]]);export{L as __pageData,M as default};
