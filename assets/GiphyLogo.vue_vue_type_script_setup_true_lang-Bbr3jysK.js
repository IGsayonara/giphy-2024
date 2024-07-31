import{c as Q,f as Y}from"./color-7Qw6A7RF.js";import{p as I,g as Z,f as R,h as U,ay as p,v as x,ax as ee,T as te,S as F,m as D,U as ne,l as E,W as re,s as M,a as i,t as ae,N as se,z as b,y as A,B as P,aa as ie,O as oe,A as le,X as W,ae as ue,F as ce,D as de,a4 as ve,d as ge,o as me,c as fe}from"./index-BklcPDOb.js";const _e=I({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ye(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z();return{roundedClasses:R(()=>{const t=U(e)?e.value:e.rounded,d=U(e)?e.value:e.tile,u=[];if(t===!0||t==="")u.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const m of String(t).split(" "))u.push(`rounded-${m}`);else(d||t===!1)&&u.push("rounded-0");return u})}}const Se=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),z=(e,a)=>{let{slots:r}=a;const{transition:t,disabled:d,group:u,...m}=e,{component:g=u?ee:te,..._}=typeof t=="object"?t:{};return p(g,x(typeof t=="string"?{name:d?"":t}:_,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:d,group:u}).filter(s=>{let[o,v]=s;return v!==void 0})),m),r)};function he(e,a){if(!F)return;const r=a.modifiers||{},t=a.value,{handler:d,options:u}=typeof t=="object"?t:{handler:t,options:{}},m=new IntersectionObserver(function(){var v;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0;const s=(v=e._observe)==null?void 0:v[a.instance.$.uid];if(!s)return;const o=g.some(y=>y.isIntersecting);d&&(!r.quiet||s.init)&&(!r.once||o||s.init)&&d(o,g,_),o&&r.once?q(e,a):s.init=!0},u);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:m},m.observe(e)}function q(e,a){var t;const r=(t=e._observe)==null?void 0:t[a.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const be={mounted:he,unmounted:q},Re="/assets/logo-Blvzu1MO.png";function ze(e){return{aspectStyles:R(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const G=I({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...D(),...ne()},"VResponsive"),$=E()({name:"VResponsive",props:G(),setup(e,a){let{slots:r}=a;const{aspectStyles:t}=ze(e),{dimensionStyles:d}=re(e);return M(()=>{var u;return i("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[d.value,e.style]},[i("div",{class:"v-responsive__sizer",style:t.value},null),(u=r.additional)==null?void 0:u.call(r),r.default&&i("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Ie=I({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...G(),...D(),..._e(),...Se()},"VImg"),Be=E()({name:"VImg",directives:{intersect:be},props:Ie(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:r,slots:t}=a;const{backgroundColorClasses:d,backgroundColorStyles:u}=Q(ae(e,"color")),{roundedClasses:m}=ye(e),g=se("VImg"),_=b(""),s=A(),o=b(e.eager?"loading":"idle"),v=b(),y=b(),c=R(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=R(()=>c.value.aspect||v.value/y.value||0);P(()=>e.src,()=>{B(o.value!=="idle")}),P(S,(n,l)=>{!n&&l&&s.value&&h(s.value)}),ie(()=>B());function B(n){if(!(e.eager&&n)&&!(F&&!n&&!e.eager)){if(o.value="loading",c.value.lazySrc){const l=new Image;l.src=c.value.lazySrc,h(l,null)}c.value.src&&oe(()=>{var l;r("loadstart",((l=s.value)==null?void 0:l.currentSrc)||c.value.src),setTimeout(()=>{var f;if(!g.isUnmounted)if((f=s.value)!=null&&f.complete){if(s.value.naturalWidth||k(),o.value==="error")return;S.value||h(s.value,null),o.value==="loading"&&T()}else S.value||h(s.value),j()})})}}function T(){var n;g.isUnmounted||(j(),h(s.value),o.value="loaded",r("load",((n=s.value)==null?void 0:n.currentSrc)||c.value.src))}function k(){var n;g.isUnmounted||(o.value="error",r("error",((n=s.value)==null?void 0:n.currentSrc)||c.value.src))}function j(){const n=s.value;n&&(_.value=n.currentSrc||n.src)}let C=-1;le(()=>{clearTimeout(C)});function h(n){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{if(clearTimeout(C),g.isUnmounted)return;const{naturalHeight:V,naturalWidth:N}=n;V||N?(v.value=N,y.value=V):!n.complete&&o.value==="loading"&&l!=null?C=window.setTimeout(f,l):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,y.value=1)};f()}const w=R(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var f;if(!c.value.src||o.value==="idle")return null;const n=i("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:T,onError:k},null),l=(f=t.sources)==null?void 0:f.call(t);return i(z,{transition:e.transition,appear:!0},{default:()=>[W(l?i("picture",{class:"v-img__picture"},[l,n]):n,[[ve,o.value==="loaded"]])]})},L=()=>i(z,{transition:e.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),X=()=>t.placeholder?i(z,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&i("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,J=()=>t.error?i(z,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&i("div",{class:"v-img__error"},[t.error()])]}):null,K=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=b(!1);{const n=P(S,l=>{l&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),n())})}return M(()=>{const n=$.filterProps(e);return W(i($,x({class:["v-img",{"v-img--booting":!O.value},d.value,m.value,e.class],style:[{width:de(e.width==="auto"?v.value:e.width)},u.value,e.style]},n,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>i(ce,null,[i(H,null,null),i(L,null,null),i(K,null,null),i(X,null,null),i(J,null,null)]),default:t.default}),[[ue("intersect"),{handler:B,options:e.options},null,{once:!0}]])}),{currentSrc:_,image:s,state:o,naturalWidth:v,naturalHeight:y}}}),Te=ge({__name:"GiphyLogo",setup(e){const a=A(null);return Y("Giphy").then(r=>r.data).then(r=>{a.value=r}),(r,t)=>(me(),fe(Be,{height:"50px",src:Re}))}});export{be as I,z as M,Be as V,Te as _,Se as a,_e as m,ye as u};
