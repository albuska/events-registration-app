import{r as N,j as e}from"./index-DzgyQ7Gi.js";import{e as _,E as Y,a as Z,b as w,c as aa,d as ta,f as oa,g as sa,h as F}from"./events-Dv6rcgBg.js";import{g as H,a as q,_ as W,u as ea,b as c,c as E,s as O,B as na,d as h,e as J,f as U,h as z,i as K}from"./ButtonBase-BRXk1PlF.js";const ia=N.createContext(),ra=()=>{const a=N.useContext(ia);return a??!1};function la(a){return H("MuiPagination",a)}q("MuiPagination",["root","ul","outlined","text"]);const ca=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function da(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:u=!1,hideNextButton:x=!1,hidePrevButton:r=!1,onChange:l,page:g,showFirstButton:m=!1,showLastButton:R=!1,siblingCount:y=1}=a,d=W(a,ca),[i,k]=ea({controlled:g,default:v,name:o,state:"page"}),I=(n,P)=>{g||k(P),l&&l(n,P)},b=(n,P)=>{const S=P-n+1;return Array.from({length:S},(ha,X)=>n+X)},B=b(1,Math.min(t,s)),f=b(Math.max(s-t+1,t+1),s),j=Math.max(Math.min(i-y,s-t-y*2-1),t+2),$=Math.min(Math.max(i+y,t+y*2+2),f.length>0?f[0]-2:s-1),M=[...m?["first"]:[],...r?[]:["previous"],...B,...j>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...b(j,$),...$<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...f,...x?[]:["next"],...R?["last"]:[]],L=n=>{switch(n){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return s;default:return null}},C=M.map(n=>typeof n=="number"?{onClick:P=>{I(P,n)},type:"page",page:n,selected:n===i,disabled:u,"aria-current":n===i?"true":void 0}:{onClick:P=>{I(P,L(n))},type:n,page:L(n),selected:!1,disabled:u||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?i>=s:i<=1)});return c({items:C},d)}function pa(a){return H("MuiPaginationItem",a)}const p=q("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),A=E(e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),V=E(e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),D=E(e.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),G=E(e.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ua=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],Q=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${z(o.size)}`],o.variant==="text"&&t[`text${z(o.color)}`],o.variant==="outlined"&&t[`outlined${z(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},ga=a=>{const{classes:t,color:o,disabled:s,selected:v,size:u,shape:x,type:r,variant:l}=a,g={root:["root",`size${z(u)}`,l,x,o!=="standard"&&`color${z(o)}`,o!=="standard"&&`${l}${z(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return K(g,pa,t)},va=O("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:Q})(({theme:a,ownerState:t})=>c({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${p.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),xa=O(na,{name:"MuiPaginationItem",slot:"Root",overridesResolver:Q})(({theme:a,ownerState:t})=>c({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${p.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${p.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:h(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:h(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${p.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>c({},t.variant==="text"&&{[`&.${p.selected}`]:c({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${p.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${p.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${p.selected}`]:c({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:h(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:h(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:h(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:h(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${p.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),ba=O("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>c({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),fa=N.forwardRef(function(t,o){const s=J({props:t,name:"MuiPaginationItem"}),{className:v,color:u="standard",component:x,components:r={},disabled:l=!1,page:g,selected:m=!1,shape:R="circular",size:y="medium",slots:d={},type:i="page",variant:k="text"}=s,I=W(s,ua),b=c({},s,{color:u,disabled:l,selected:m,shape:R,size:y,type:i,variant:k}),B=ra(),f=ga(b),$=(B?{previous:d.next||r.next||G,next:d.previous||r.previous||D,last:d.first||r.first||A,first:d.last||r.last||V}:{previous:d.previous||r.previous||D,next:d.next||r.next||G,first:d.first||r.first||A,last:d.last||r.last||V})[i];return i==="start-ellipsis"||i==="end-ellipsis"?e.jsx(va,{ref:o,ownerState:b,className:U(f.root,v),children:"…"}):e.jsxs(xa,c({ref:o,ownerState:b,component:x,disabled:l,className:U(f.root,v)},I,{children:[i==="page"&&g,$?e.jsx(ba,{as:$,ownerState:b,className:f.icon}):null]}))}),ya=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ca=a=>{const{classes:t,variant:o}=a;return K({root:["root",o],ul:["ul"]},la,t)},Pa=O("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),$a=O("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ma(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const Ia=N.forwardRef(function(t,o){const s=J({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:u,color:x="standard",count:r=1,defaultPage:l=1,disabled:g=!1,getItemAriaLabel:m=ma,hideNextButton:R=!1,hidePrevButton:y=!1,renderItem:d=C=>e.jsx(fa,c({},C)),shape:i="circular",showFirstButton:k=!1,showLastButton:I=!1,siblingCount:b=1,size:B="medium",variant:f="text"}=s,j=W(s,ya),{items:$}=da(c({},s,{componentName:"Pagination"})),M=c({},s,{boundaryCount:v,color:x,count:r,defaultPage:l,disabled:g,getItemAriaLabel:m,hideNextButton:R,hidePrevButton:y,renderItem:d,shape:i,showFirstButton:k,showLastButton:I,siblingCount:b,size:B,variant:f}),L=Ca(M);return e.jsx(Pa,c({"aria-label":"pagination navigation",className:U(L.root,u),ownerState:M,ref:o},j,{children:e.jsx($a,{className:L.ul,ownerState:M,children:$.map((C,n)=>e.jsx("li",{children:d(c({},C,{color:x,"aria-label":m(C.type,C.page,C.selected),shape:i,size:B,variant:f}))},n))})}))}),T=10,Ba=()=>{const[a,t]=N.useState(1),[o]=N.useState(_.length),s=(l,g)=>{console.log(l),g!==void 0&&t(g)},v=Math.ceil(o/T),u=(a-1)*T,x=Math.min(u+T-1,o-1),r=_.slice(u,x+1);return e.jsxs(Y,{children:[e.jsx(Z,{className:"font-gravity",children:"Events"}),e.jsx(w,{children:r.map(l=>e.jsxs(aa,{children:[e.jsx(ta,{className:"font-gravity",children:l.title}),e.jsx(oa,{className:"font-konnect",children:l.description}),e.jsxs(sa,{children:[e.jsx(F,{to:"registration",className:"font-konnect transition-all",children:"Register"}),e.jsx(F,{to:"participants",className:"font-konnect",children:"View"})]})]},l.id))}),e.jsx(Ia,{className:"MuiPaginationItem-root",count:v,page:a,onChange:s,defaultPage:a})]})},ka=()=>e.jsx(e.Fragment,{children:e.jsx(Ba,{})});export{ka as default};