import{_ as r}from"./Button.vue_vue_type_style_index_0_lang-eb938b7c.js";import{f as v,o as m,h as g,a as e,i as f,b as c,w as a,d,T as k,j as p,g as h,c as y,F as C}from"./index-166d20f2.js";const b={class:"zulu-dialog-wrapper"},O={class:"zulu-dialog"},B=v({__name:"Dialog",props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},ok:{type:Function},cancel:{type:Function}},emits:["update:visible"],setup(i,{emit:t}){const o=i,s=()=>{t("update:visible",!1)},u=()=>{o.closeOnClickOverlay&&s()},_=()=>{var l;((l=o.ok)==null?void 0:l.call(o))!==!1&&s()},n=()=>{var l;(l=o.cancel)==null||l.call(o),s()};return(l,N)=>i.visible?(m(),g(k,{key:0,to:"body"},[e("div",{class:"zulu-dialog-overlay",onClick:u}),e("div",b,[e("div",O,[e("header",null,[f(l.$slots,"title"),e("span",{onClick:s,class:"zulu-dialog-close"})]),e("main",null,[f(l.$slots,"content")]),e("footer",null,[c(r,{level:"main",onClick:_},{default:a(()=>[d("OK")]),_:1}),c(r,{onClick:n},{default:a(()=>[d("Cancel")]),_:1})])])])])):p("",!0)}});const $=e("div",null,"dialog",-1),x=e("h3",null,"例子1",-1),z=e("strong",null,"hi",-1),D=e("div",null,"hi2",-1),F=e("strong",null,"加粗的标题",-1),T=v({__name:"DialogDemo",setup(i){const t=h(!1),o=()=>{t.value=!t.value},s=()=>!1,u=()=>{};return(_,n)=>(m(),y(C,null,[$,x,c(r,{onClick:o},{default:a(()=>[d("toggle")]),_:1}),c(B,{visible:t.value,"onUpdate:visible":n[0]||(n[0]=l=>t.value=l),closeOnClickOverlay:!1,ok:s,cancel:u},{content:a(()=>[z,D]),title:a(()=>[F]),_:1},8,["visible"])],64))}});export{T as default};
//# sourceMappingURL=DialogDemo-4b389632.js.map