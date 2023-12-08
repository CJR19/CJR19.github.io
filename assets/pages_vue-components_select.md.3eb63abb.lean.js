import{_ as r,C as s,c,H as o,w as l,k as e,a as t,Q as d,o as n}from"./chunks/framework.9fd5685d.js";const V=JSON.parse('{"title":"Select | C-Element","description":"Select 组件的文档","frontmatter":{"title":"Select | C-Element","description":"Select 组件的文档"},"headers":[],"relativePath":"pages/vue-components/select.md","filePath":"pages/vue-components/select.md"}'),i={name:"pages/vue-components/select.md"},A=e("h1",{id:"select-选择器",tabindex:"-1"},[t("Select 选择器 "),e("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1),D=e("p",null,"当选项过多时，使用下拉菜单展示并选择内容",-1),C=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),h=e("p",null,"适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。",-1),p=e("p",null,"Select/Basic",-1),m=e("h2",{id:"自定义模板",tabindex:"-1"},[t("自定义模板 "),e("a",{class:"header-anchor",href:"#自定义模板","aria-label":'Permalink to "自定义模板"'},"​")],-1),u=e("p",null,[t("你可以自定义如何来渲染每一个选项, 使用 "),e("code",null,"renderLabel"),t(" 属性，它接受一个回调函数，返回 "),e("code",null,"vNode"),t(" 类型。 适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。")],-1),b=e("p",null,"Select/RenderLabel",-1),_=e("h2",{id:"可清空单选",tabindex:"-1"},[t("可清空单选 "),e("a",{class:"header-anchor",href:"#可清空单选","aria-label":'Permalink to "可清空单选"'},"​")],-1),E=e("p",null,"您可以使用清除图标来清除选择。",-1),F=e("p",null,[t("设置 "),e("code",null,"clearable"),t(" 属性，则可将选择器清空。")],-1),B=e("p",null,"Select/Clearable",-1),f=d("",3),v=e("p",null,"Select/Filterable",-1),S=d("",3),g=e("p",null,"Select/Remote",-1),T=d("",6);function k(y,P,x,N,w,R){const a=s("Demo");return n(),c("div",null,[A,D,C,h,o(a,{path:"Select/Basic","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0Aconst%20options2%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20'hello'%2C%20value%3A%20'1'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'xyz'%2C%20value%3A%20'2'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'testing'%2C%20value%3A%20'3'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'check'%2C%20value%3A%20'4'%2C%20disabled%3A%20true%20%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-select%20v-model%3D%22test%22%20placeholder%3D%22%E5%9F%BA%E7%A1%80%E9%80%89%E6%8B%A9%E5%99%A8%EF%BC%8C%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aoptions%3D%22options2%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E",description:"Basic%20Select",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FSelect"},{default:l(()=>[p]),_:1}),m,u,o(a,{path:"Select/RenderLabel","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%2C%20h%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0Aconst%20options2%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20'hello'%2C%20value%3A%20'1'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'xyz'%2C%20value%3A%20'2'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'testing'%2C%20value%3A%20'3'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'check'%2C%20value%3A%20'4'%2C%20disabled%3A%20true%20%7D%0D%0A%5D%0D%0Aconst%20customRender%20%3D%20(option)%20%3D%3E%20%7B%0D%0A%20%20return%20h('div'%2C%20%7B%20className%3A%20'xyz'%7D%2C%20%5B%20h('b'%2C%20option.label)%2C%20h('span'%2C%20option.value)%20%5D)%20%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-select%20v-model%3D%22test%22%20placeholder%3D%22%E5%9F%BA%E7%A1%80%E9%80%89%E6%8B%A9%E5%99%A8%EF%BC%8C%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aoptions%3D%22options2%22%20%3ArenderLabel%3D%22customRender%22%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A",description:"Select%20RenderLabel",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FSelect"},{default:l(()=>[b]),_:1}),_,E,F,o(a,{path:"Select/Clearable","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('1')%0D%0Aconst%20options2%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20'hello'%2C%20value%3A%20'1'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'xyz'%2C%20value%3A%20'2'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'testing'%2C%20value%3A%20'3'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'check'%2C%20value%3A%20'4'%2C%20disabled%3A%20true%20%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-select%20v-model%3D%22test%22%20placeholder%3D%22%E5%8F%AF%E6%B8%85%E7%A9%BA%E9%80%89%E6%8B%A9%E5%99%A8%EF%BC%8C%E8%AF%B7%E9%80%89%E6%8B%A9%22%20%3Aoptions%3D%22options2%22%20clearable%20%2F%3E%0D%0A%3C%2Ftemplate%3E",description:"Clearable%20Select",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FSelect"},{default:l(()=>[B]),_:1}),f,o(a,{path:"Select/Filterable","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0Aconst%20options2%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20'hello'%2C%20value%3A%20'1'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'xyz'%2C%20value%3A%20'2'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'testing'%2C%20value%3A%20'3'%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'check'%2C%20value%3A%20'4'%2C%20disabled%3A%20true%20%7D%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-select%20%0D%0A%20%20%20%20v-model%3D%22test%22%20%0D%0A%20%20%20%20placeholder%3D%22%E5%8F%AF%E4%BB%A5%E8%BF%87%E6%BB%A4%E7%9A%84%E9%80%89%E6%8B%A9%E5%99%A8%EF%BC%8C%E8%AF%B7%E8%BE%93%E5%85%A5%22%20%0D%0A%20%20%20%20%3Aoptions%3D%22options2%22%0D%0A%20%20%20%20filterable%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E",description:"filterable%20Select",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FSelect"},{default:l(()=>[v]),_:1}),S,o(a,{path:"Select/Remote","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20test%20%3D%20ref('')%0D%0Aconst%20states%20%3D%20%5B%0D%0A%20%20'Alabama'%2C%0D%0A%20%20'Alaska'%2C%0D%0A%20%20'Arizona'%2C%0D%0A%20%20'Arkansas'%2C%0D%0A%20%20'California'%2C%0D%0A%20%20'Colorado'%2C%0D%0A%20%20'Connecticut'%2C%0D%0A%20%20'Delaware'%2C%0D%0A%20%20'Florida'%2C%0D%0A%20%20'Georgia'%2C%0D%0A%20%20'Hawaii'%2C%0D%0A%20%20'Idaho'%2C%0D%0A%20%20'Illinois'%2C%0D%0A%20%20'Indiana'%2C%0D%0A%20%20'Iowa'%2C%0D%0A%20%20'Kansas'%2C%0D%0A%20%20'Kentucky'%2C%0D%0A%20%20'Louisiana'%2C%0D%0A%20%20'Maine'%2C%0D%0A%20%20'Maryland'%2C%0D%0A%20%20'Massachusetts'%2C%0D%0A%20%20'Michigan'%2C%0D%0A%20%20'Minnesota'%2C%0D%0A%20%20'Mississippi'%2C%0D%0A%20%20'Missouri'%2C%0D%0A%20%20'Montana'%2C%0D%0A%20%20'Nebraska'%2C%0D%0A%20%20'Nevada'%2C%0D%0A%20%20'New%20Hampshire'%2C%0D%0A%20%20'New%20Jersey'%2C%0D%0A%20%20'New%20Mexico'%2C%0D%0A%20%20'New%20York'%2C%0D%0A%20%20'North%20Carolina'%2C%0D%0A%20%20'North%20Dakota'%2C%0D%0A%20%20'Ohio'%2C%0D%0A%20%20'Oklahoma'%2C%0D%0A%20%20'Oregon'%2C%0D%0A%20%20'Pennsylvania'%2C%0D%0A%20%20'Rhode%20Island'%2C%0D%0A%20%20'South%20Carolina'%2C%0D%0A%20%20'South%20Dakota'%2C%0D%0A%20%20'Tennessee'%2C%0D%0A%20%20'Texas'%2C%0D%0A%20%20'Utah'%2C%0D%0A%20%20'Vermont'%2C%0D%0A%20%20'Virginia'%2C%0D%0A%20%20'Washington'%2C%0D%0A%20%20'West%20Virginia'%2C%0D%0A%20%20'Wisconsin'%2C%0D%0A%20%20'Wyoming'%2C%0D%0A%5D%0D%0A%0D%0Aconst%20remoteFilter%20%3D%20(query%3Astring)%20%3D%3E%20%7B%0D%0A%20%20return%20new%20Promise((resolve)%20%3D%3E%20%7B%0D%0A%20%20%20%20if%20(query)%20%7B%0D%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0D%0A%0D%0A%20%20%20%20%20%20%20%20const%20options%20%3D%20states.filter((item)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20return%20item.toLowerCase().includes(query.toLowerCase())%0D%0A%20%20%20%20%20%20%20%20%7D).map(label%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20return%20%7B%20label%2C%20value%3A%20label%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20resolve(options)%0D%0A%20%20%20%20%20%20%7D%2C%20500)%0D%0A%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20resolve(%5B%5D)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cc-select%20%0D%0A%20%20%20%20v-model%3D%22test%22%20%0D%0A%20%20%20%20placeholder%3D%22%E6%90%9C%E7%B4%A2%E8%BF%9C%E7%A8%8B%E7%BB%93%E6%9E%9C%22%0D%0A%20%20%20%20filterable%0D%0A%20%20%20%20remote%0D%0A%20%20%20%20%3Aremote-method%3D%22remoteFilter%22%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E",description:"Remote%20Select",github:"https%3A%2F%2Fgithub.com%2FCJR19%2Fc-element%2Ftree%2Fmain%2Fsrc%2Fcomponents%2FSelect"},{default:l(()=>[g]),_:1}),T])}const I=r(i,[["render",k]]);export{V as __pageData,I as default};