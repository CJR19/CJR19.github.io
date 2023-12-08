import{_ as d,c as t,o as e,Q as o}from"./chunks/framework.9fd5685d.js";const E=JSON.parse('{"title":"CSS间距类","description":"","frontmatter":{"title":"CSS间距类","desc":"c-element提供的CSS类列表，用于简化响应式填充和边距的规范。"},"headers":[],"relativePath":"pages/style/spacing.md","filePath":"pages/style/spacing.md"}'),c={name:"pages/style/spacing.md"},s=o(`<h1 id="css间距类" tabindex="-1">CSS间距类 <a class="header-anchor" href="#css间距类" aria-label="Permalink to &quot;CSS间距类&quot;">​</a></h1><p>CElement提供了CSS类来帮助您为DOM元素或组件提供间距。 所有选项都以c-为前缀，然后细分为类型（T），方向（D）和大小（S）。 有关所有可能的排列，请参见下表。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">c</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">[p</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">m][t</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">y]</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">[none</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">auto</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">xs</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">sm</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">md</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">lg</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">xl]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">T</span><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">D</span><span style="color:#E1E4E8;">                   </span><span style="color:#79B8FF;">S</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">类型</span></span>
<span class="line"><span style="color:#E1E4E8;">  - values: p (padding), m (margin)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">D - direction 方向</span></span>
<span class="line"><span style="color:#E1E4E8;">  - values:</span></span>
<span class="line"><span style="color:#E1E4E8;">      t (top), r (right), b (bottom), l (left),</span></span>
<span class="line"><span style="color:#E1E4E8;">      a (all), x (both left &amp; right), y (both top &amp; bottom)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">S - size 大小</span></span>
<span class="line"><span style="color:#E1E4E8;">  - values:</span></span>
<span class="line"><span style="color:#E1E4E8;">      none,</span></span>
<span class="line"><span style="color:#E1E4E8;">      auto (ONLY for specific margins: c-ml-*, c-mr-*, c-mx-*),</span></span>
<span class="line"><span style="color:#E1E4E8;">      xs (extra small),</span></span>
<span class="line"><span style="color:#E1E4E8;">      sm (small),</span></span>
<span class="line"><span style="color:#E1E4E8;">      md (medium),</span></span>
<span class="line"><span style="color:#E1E4E8;">      lg (large),</span></span>
<span class="line"><span style="color:#E1E4E8;">      xl (extra large)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">c</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">[p</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">m][t</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">y]</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">[none</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">auto</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">xs</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">sm</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">md</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">lg</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">xl]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">T</span><span style="color:#24292E;">       </span><span style="color:#005CC5;">D</span><span style="color:#24292E;">                   </span><span style="color:#005CC5;">S</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">类型</span></span>
<span class="line"><span style="color:#24292E;">  - values: p (padding), m (margin)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">D - direction 方向</span></span>
<span class="line"><span style="color:#24292E;">  - values:</span></span>
<span class="line"><span style="color:#24292E;">      t (top), r (right), b (bottom), l (left),</span></span>
<span class="line"><span style="color:#24292E;">      a (all), x (both left &amp; right), y (both top &amp; bottom)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">S - size 大小</span></span>
<span class="line"><span style="color:#24292E;">  - values:</span></span>
<span class="line"><span style="color:#24292E;">      none,</span></span>
<span class="line"><span style="color:#24292E;">      auto (ONLY for specific margins: c-ml-*, c-mr-*, c-mx-*),</span></span>
<span class="line"><span style="color:#24292E;">      xs (extra small),</span></span>
<span class="line"><span style="color:#24292E;">      sm (small),</span></span>
<span class="line"><span style="color:#24292E;">      md (medium),</span></span>
<span class="line"><span style="color:#24292E;">      lg (large),</span></span>
<span class="line"><span style="color:#24292E;">      xl (extra large)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 所有方向小的padding --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;c-pa-sm&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 顶部中margin, 右边小margin --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;c-mt-md c-mr-sm&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 所有方向小的padding --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;c-pa-sm&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 顶部中margin, 右边小margin --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;c-mt-md c-mr-sm&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="排序表" tabindex="-1">排序表 <a class="header-anchor" href="#排序表" aria-label="Permalink to &quot;排序表&quot;">​</a></h2><table><thead><tr><th>Prefix</th><th>Type</th><th>Direction</th><th>Size</th><th>Example</th></tr></thead><tbody><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>t</code> (top)</td><td><code>none</code></td><td><code>c-pt-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>t</code> (top)</td><td><code>xs</code> (extra small)</td><td><code>c-pt-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>t</code> (top)</td><td><code>sm</code> (small)</td><td><code>c-pt-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>t</code> (top)</td><td><code>md</code> (medium)</td><td><code>c-pt-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>t</code> (top)</td><td><code>lg</code> (large)</td><td><code>c-pt-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>t</code> (top)</td><td><code>xl</code> (extra large)</td><td><code>c-pt-xl</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>r</code> (right)</td><td><code>none</code></td><td><code>c-pr-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>r</code> (right)</td><td><code>xs</code> (extra small)</td><td><code>c-pr-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>r</code> (right)</td><td><code>sm</code> (small)</td><td><code>c-pr-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>r</code> (right)</td><td><code>md</code> (medium)</td><td><code>c-pr-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>r</code> (right)</td><td><code>lg</code> (large)</td><td><code>c-pr-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>r</code> (right)</td><td><code>xl</code> (extra large)</td><td><code>c-pr-xl</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>b</code> (bottom)</td><td><code>none</code></td><td><code>c-pb-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>b</code> (bottom)</td><td><code>xs</code> (extra small)</td><td><code>c-pb-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>b</code> (bottom)</td><td><code>sm</code> (small)</td><td><code>c-pb-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>b</code> (bottom)</td><td><code>md</code> (medium)</td><td><code>c-pb-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>b</code> (bottom)</td><td><code>lg</code> (large)</td><td><code>c-pb-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>b</code> (bottom)</td><td><code>xl</code> (extra large)</td><td><code>c-pb-xl</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>l</code> (left)</td><td><code>none</code></td><td><code>c-pl-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>l</code> (left)</td><td><code>xs</code> (extra small)</td><td><code>c-pl-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>l</code> (left)</td><td><code>sm</code> (small)</td><td><code>c-pl-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>l</code> (left)</td><td><code>md</code> (medium)</td><td><code>c-pl-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>l</code> (left)</td><td><code>lg</code> (large)</td><td><code>c-pl-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>l</code> (left)</td><td><code>xl</code> (extra large)</td><td><code>c-pl-xl</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>a</code> (all)</td><td><code>none</code></td><td><code>c-pa-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>a</code> (all)</td><td><code>xs</code> (extra small)</td><td><code>c-pa-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>a</code> (all)</td><td><code>sm</code> (small)</td><td><code>c-pa-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>a</code> (all)</td><td><code>md</code> (medium)</td><td><code>c-pa-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>a</code> (all)</td><td><code>lg</code> (large)</td><td><code>c-pa-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>a</code> (all)</td><td><code>xl</code> (extra large)</td><td><code>c-pa-xl</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>x</code> (left &amp; right)</td><td><code>none</code></td><td><code>c-px-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>x</code> (left &amp; right)</td><td><code>xs</code> (extra small)</td><td><code>c-px-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>x</code> (left &amp; right)</td><td><code>sm</code> (small)</td><td><code>c-px-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>x</code> (left &amp; right)</td><td><code>md</code> (medium)</td><td><code>c-px-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>x</code> (left &amp; right)</td><td><code>lg</code> (large)</td><td><code>c-px-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>x</code> (left &amp; right)</td><td><code>xl</code> (extra large)</td><td><code>c-px-xl</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>y</code> (top &amp; bottom)</td><td><code>none</code></td><td><code>c-py-none</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>y</code> (top &amp; bottom)</td><td><code>xs</code> (extra small)</td><td><code>c-py-xs</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>y</code> (top &amp; bottom)</td><td><code>sm</code> (small)</td><td><code>c-py-sm</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>y</code> (top &amp; bottom)</td><td><code>md</code> (medium)</td><td><code>c-py-md</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>y</code> (top &amp; bottom)</td><td><code>lg</code> (large)</td><td><code>c-py-lg</code></td></tr><tr><td><code>c-</code></td><td><code>p</code> (padding)</td><td><code>y</code> (top &amp; bottom)</td><td><code>xl</code> (extra large)</td><td><code>c-py-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>none</code></td><td><code>c-mt-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>xs</code> (extra small)</td><td><code>c-mt-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>sm</code> (small)</td><td><code>c-mt-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>md</code> (medium)</td><td><code>c-mt-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>lg</code> (large)</td><td><code>c-mt-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>xl</code> (extra large)</td><td><code>c-mt-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>t</code> (top)</td><td><code>auto</code></td><td><code>c-mt-auto</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>none</code></td><td><code>c-mr-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>xs</code> (extra small)</td><td><code>c-mr-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>sm</code> (small)</td><td><code>c-mr-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>md</code> (medium)</td><td><code>c-mr-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>lg</code> (large)</td><td><code>c-mr-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>xl</code> (extra large)</td><td><code>c-mr-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>r</code> (right)</td><td><code>auto</code></td><td><code>c-mr-auto</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>none</code></td><td><code>c-mb-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>xs</code> (extra small)</td><td><code>c-mb-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>sm</code> (small)</td><td><code>c-mb-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>md</code> (medium)</td><td><code>c-mb-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>lg</code> (large)</td><td><code>c-mb-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>xl</code> (extra large)</td><td><code>c-mb-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>b</code> (bottom)</td><td><code>auto</code></td><td><code>c-mb-auto</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>none</code></td><td><code>c-ml-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>xs</code> (extra small)</td><td><code>c-ml-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>sm</code> (small)</td><td><code>c-ml-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>md</code> (medium)</td><td><code>c-ml-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>lg</code> (large)</td><td><code>c-ml-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>xl</code> (extra large)</td><td><code>c-ml-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>l</code> (left)</td><td><code>auto</code></td><td><code>c-ml-auto</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>a</code> (all)</td><td><code>none</code></td><td><code>c-ma-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>a</code> (all)</td><td><code>xs</code> (extra small)</td><td><code>c-ma-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>a</code> (all)</td><td><code>sm</code> (small)</td><td><code>c-ma-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>a</code> (all)</td><td><code>md</code> (medium)</td><td><code>c-ma-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>a</code> (all)</td><td><code>lg</code> (large)</td><td><code>c-ma-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>a</code> (all)</td><td><code>xl</code> (extra large)</td><td><code>c-ma-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>none</code></td><td><code>c-mx-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>xs</code> (extra small)</td><td><code>c-mx-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>sm</code> (small)</td><td><code>c-mx-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>md</code> (medium)</td><td><code>c-mx-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>lg</code> (large)</td><td><code>c-mx-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>xl</code> (extra large)</td><td><code>c-mx-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>x</code> (left &amp; right)</td><td><code>auto</code></td><td><code>c-mx-auto</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>none</code></td><td><code>c-my-none</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>xs</code> (extra small)</td><td><code>c-my-xs</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>sm</code> (small)</td><td><code>c-my-sm</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>md</code> (medium)</td><td><code>c-my-md</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>lg</code> (large)</td><td><code>c-my-lg</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>xl</code> (extra large)</td><td><code>c-my-xl</code></td></tr><tr><td><code>c-</code></td><td><code>m</code> (margin)</td><td><code>y</code> (top &amp; bottom)</td><td><code>auto</code></td><td><code>c-my-auto</code></td></tr></tbody></table><h2 id="其他相关" tabindex="-1">其他相关 <a class="header-anchor" href="#其他相关" aria-label="Permalink to &quot;其他相关&quot;">​</a></h2><table><thead><tr><th>Class Name</th><th>Description</th></tr></thead><tbody><tr><td><code>no-margin</code></td><td>Removes any applied margins</td></tr><tr><td><code>no-padding</code></td><td>Removes any applied padding</td></tr></tbody></table>`,10),a=[s];function n(l,p,r,m,i,g){return e(),t("div",null,a)}const b=d(c,[["render",n]]);export{E as __pageData,b as default};
