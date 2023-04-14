import{_ as t,o as e,c as o,y as c}from"./index-166d20f2.js";const s={},n={class:"markdown-body"},r=c(`<h1>开始使用</h1><p>请先<a href="#/introduction/install">安装</a>本组件库</p><p> 然后在你的代码中加入下面的代码 </p><p><pre><code>import { Button } from &quot;zulu-vue-ui&quot;;</code></pre></p><p>就可以使用zulu提供的组件了</p><h2>Vue单例</h2><p><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Switch v-model:value=&quot;switchValue&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
  import { ref } from &quot;vue&quot;;
  import Switch from &quot;../lib/Switch.vue&quot;;
  const switchValue = ref(false);
&lt;/script&gt;
&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;
</code></pre></p><p>请开始<a href="#/doc">使用</a>吧</p>`,8),l=[r];function u(p,a){return e(),o("article",n,l)}const d=t(s,[["render",u]]);export{d as default};
//# sourceMappingURL=GetStart-8875607b.js.map
