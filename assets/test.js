import{m as de,u as ve,h as U,V as K,c as pe,d as he,e as me,_ as ge}from"./index-Chj5iTMk.js";import{u as Se}from"./gif.store-CAb1vTC9.js";import{p as ye,R as J,m as _e,ah as ke,j as xe,l as ee,G as ze,ai as Ce,z,f as S,C as Q,aj as be,J as Z,B as te,s as we,ak as Ge,a as c,d as Re,a1 as Ve,al as Fe,o as k,c as C,w as m,u as y,am as b,an as X,Z as Ie,ao as M,a2 as Ee,a3 as Te,F as Pe}from"./index-DURNJcgW.js";import{V as F,e as H,d as Ae}from"./color-Dyoi9m08.js";function Oe(l){let{selectedElement:n,containerElement:s,isRtl:o,isHorizontal:f}=l;const h=w(f,s),a=le(f,o,s),u=w(f,n),d=oe(f,n),g=u*.4;return a>d?d-g:a+h<d+u?d-h+u+g:a}function We(l){let{selectedElement:n,containerElement:s,isHorizontal:o}=l;const f=w(o,s),h=oe(o,n),a=w(o,n);return h-f/2+a/2}function Y(l,n){const s=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[s])||0}function Me(l,n){const s=l?"clientWidth":"clientHeight";return(n==null?void 0:n[s])||0}function le(l,n,s){if(!s)return 0;const{scrollLeft:o,offsetWidth:f,scrollWidth:h}=s;return l?n?h-f+o:o:s.scrollTop}function w(l,n){const s=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[s])||0}function oe(l,n){const s=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[s])||0}const se=Symbol.for("vuetify:v-slide-group"),He=ye({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:se},nextIcon:{type:J,default:"$next"},prevIcon:{type:J,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},..._e(),...ke({mobile:null}),...xe(),...de({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Be=ee()({name:"VSlideGroup",props:He(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:s}=n;const{isRtl:o}=ze(),{displayClasses:f,mobile:h}=Ce(l),a=ve(l,l.symbol),u=z(!1),d=z(0),g=z(0),G=z(0),i=S(()=>l.direction==="horizontal"),{resizeRef:v,contentRect:I}=Q(),{resizeRef:p,contentRect:E}=Q(),B=be(),$=S(()=>({container:v.el,duration:200,easing:"easeOutQuart"})),ne=S(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),ae=S(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(Z){let e=-1;te(()=>[a.selected.value,I.value,E.value,i.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(I.value&&E.value){const t=i.value?"width":"height";g.value=I.value[t],G.value=E.value[t],u.value=g.value+1<G.value}if(ne.value>=0&&p.el){const t=p.el.children[ae.value];N(t,l.centerActive)}})})}const R=z(!1);function N(e,t){let r=0;t?r=We({containerElement:v.el,isHorizontal:i.value,selectedElement:e}):r=Oe({containerElement:v.el,isHorizontal:i.value,isRtl:o.value,selectedElement:e}),j(r)}function j(e){if(!Z||!v.el)return;const t=w(i.value,v.el),r=le(i.value,o.value,v.el);if(!(Y(i.value,v.el)<=t||Math.abs(e-r)<16)){if(i.value&&o.value&&v.el){const{scrollWidth:V,offsetWidth:W}=v.el;e=V-W-e}i.value?B.horizontal(e,$.value):B(e,$.value)}}function ie(e){const{scrollTop:t,scrollLeft:r}=e.target;d.value=i.value?r:t}function re(e){if(R.value=!0,!(!u.value||!p.el)){for(const t of e.composedPath())for(const r of p.el.children)if(r===t){N(r);return}}}function ue(e){R.value=!1}let T=!1;function ce(e){var t;!T&&!R.value&&!(e.relatedTarget&&((t=p.el)!=null&&t.contains(e.relatedTarget)))&&x(),T=!1}function L(){T=!0}function fe(e){if(!p.el)return;function t(r){e.preventDefault(),x(r)}i.value?e.key==="ArrowRight"?t(o.value?"prev":"next"):e.key==="ArrowLeft"&&t(o.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function x(e){var r,_;if(!p.el)return;let t;if(!e)t=Ge(p.el)[0];else if(e==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return x("first")}else if(e==="prev"){if(t=(_=p.el.querySelector(":focus"))==null?void 0:_.previousElementSibling,!t)return x("last")}else e==="first"?t=p.el.firstElementChild:e==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function P(e){const t=i.value&&o.value?-1:1,r=(e==="prev"?-t:t)*g.value;let _=d.value+r;if(i.value&&o.value&&v.el){const{scrollWidth:V,offsetWidth:W}=v.el;_+=V-W}j(_)}const A=S(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),O=S(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!h.value;case!0:return u.value||Math.abs(d.value)>0;case"mobile":return h.value||u.value||Math.abs(d.value)>0;default:return!h.value&&(u.value||Math.abs(d.value)>0)}}),D=S(()=>Math.abs(d.value)>1),q=S(()=>{if(!v.value)return!1;const e=Y(i.value,v.el),t=Me(i.value,v.el);return e-t-Math.abs(d.value)>1});return we(()=>c(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!i.value,"v-slide-group--has-affixes":O.value,"v-slide-group--is-overflowing":u.value},f.value,l.class],style:l.style,tabindex:R.value||a.selected.value.length?-1:0,onFocus:ce},{default:()=>{var e,t,r;return[O.value&&c("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!D.value}],onMousedown:L,onClick:()=>D.value&&P("prev")},[((e=s.prev)==null?void 0:e.call(s,A.value))??c(U,null,{default:()=>[c(K,{icon:o.value?l.nextIcon:l.prevIcon},null)]})]),c("div",{key:"container",ref:v,class:"v-slide-group__container",onScroll:ie},[c("div",{ref:p,class:"v-slide-group__content",onFocusin:re,onFocusout:ue,onKeydown:fe},[(t=s.default)==null?void 0:t.call(s,A.value)])]),O.value&&c("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!q.value}],onMousedown:L,onClick:()=>q.value&&P("next")},[((r=s.next)==null?void 0:r.call(s,A.value))??c(U,null,{default:()=>[c(K,{icon:o.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:P,scrollOffset:d,focus:x}}}),$e=ee()({name:"VSlideGroupItem",props:pe(),emits:{"group:selected":l=>!0},setup(l,n){let{slots:s}=n;const o=he(l,se);return()=>{var f;return(f=s.default)==null?void 0:f.call(s,{isSelected:o.isSelected.value,select:o.select,toggle:o.toggle,selectedClass:o.selectedClass.value})}}}),qe=Re({__name:"[id]",setup(l){const n=Ve(),s=Fe(),o=Se(),f=()=>{const u=s.params.id;u&&o.fetchGif(u),o.fetchRandomGifs()};f(),te(()=>s.params,()=>{f()});const h=u=>{n.push(`/users/${u}`)},a=u=>{n.push(`/gifs/${u}`)};return(u,d)=>{const g=me,G=ge;return k(),C(Ae,null,{default:m(()=>[y(o).gif?(k(),C(F,{key:0,justify:"center"},{default:m(()=>[c(H,{col:"12",md:"6"},{default:m(()=>[c(F,{class:"text-center",justify:"center"},{default:m(()=>[b("div",null,[c(g,{full:!0,gif:y(o).gif,height:"auto",width:"100%"},null,8,["gif"]),b("div",null,[b("h1",null,X(y(o).gif.title),1),b("h3",null,[Ie("Author: "),b("a",{href:"#",onClick:d[0]||(d[0]=i=>h(y(o).gif.username))},X(y(o).gif.username),1)])])])]),_:1})]),_:1})]),_:1})):M("",!0),y(o).notFound?(k(),C(F,{key:1,justify:"center"},{default:m(()=>[c(H,{cols:"12",md:"6"},{default:m(()=>[c(G)]),_:1})]),_:1})):M("",!0),y(o).randomGifs?(k(),C(F,{key:2,justify:"center"},{default:m(()=>[c(H,{col:"12",md:"6"},{default:m(()=>[c(Be,null,{default:m(()=>[(k(!0),Ee(Pe,null,Te(y(o).randomGifs,i=>(k(),C($e,{key:i.id},{default:m(()=>[c(g,{class:"ma-4 cursor-pointer",full:!1,gif:i,height:"100px",width:"200px",onClick:v=>a(i.id)},null,8,["gif","onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):M("",!0)]),_:1})}}});export{qe as default};
