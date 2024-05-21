import{r as h,j as e,L as ta}from"./index-B48ODfjN.js";import{E as ea,a as F,S as oa,b as U,c as W,d as A,e as M,f as sa,g as na,h as ia,i as ra,j as la,k as ca,l as da,m as pa,n as V}from"./eventsBoard.styles-CrvIlZSg.js";import{g as ua}from"./api-Bzu8rK1F.js";import{g as K,a as Q,_ as D,u as ga,b as p,c as S,s as E,B as va,d as z,e as X,f as T,h as k,i as Y}from"./ButtonBase-D6tXZA1r.js";const xa=h.createContext(),fa=()=>{const a=h.useContext(xa);return a??!1};function ba(a){return K("MuiPagination",a)}Q("MuiPagination",["root","ul","outlined","text"]);const ya=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Ca(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:f=1,disabled:v=!1,hideNextButton:u=!1,hidePrevButton:l=!1,onChange:d,page:b,showFirstButton:m=!1,showLastButton:B=!1,siblingCount:x=1}=a,c=D(a,ya),[r,n]=ga({controlled:b,default:f,name:o,state:"page"}),P=(i,$)=>{b||n($),d&&d(i,$)},y=(i,$)=>{const w=$-i+1;return Array.from({length:w},(Sa,aa)=>i+aa)},N=y(1,Math.min(t,s)),C=y(Math.max(s-t+1,t+1),s),L=Math.max(Math.min(r-x,s-t-x*2-1),t+2),I=Math.min(Math.max(r+x,t+x*2+2),C.length>0?C[0]-2:s-1),R=[...m?["first"]:[],...l?[]:["previous"],...N,...L>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...y(L,I),...I<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...C,...u?[]:["next"],...B?["last"]:[]],O=i=>{switch(i){case"first":return 1;case"previous":return r-1;case"next":return r+1;case"last":return s;default:return null}},j=R.map(i=>typeof i=="number"?{onClick:$=>{P($,i)},type:"page",page:i,selected:i===r,disabled:v,"aria-current":i===r?"true":void 0}:{onClick:$=>{P($,O(i))},type:i,page:O(i),selected:!1,disabled:v||i.indexOf("ellipsis")===-1&&(i==="next"||i==="last"?r>=s:r<=1)});return p({items:j},c)}function ha(a){return K("MuiPaginationItem",a)}const g=Q("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),G=S(e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),H=S(e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),q=S(e.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),J=S(e.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Pa=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],Z=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${k(o.size)}`],o.variant==="text"&&t[`text${k(o.color)}`],o.variant==="outlined"&&t[`outlined${k(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},ma=a=>{const{classes:t,color:o,disabled:s,selected:f,size:v,shape:u,type:l,variant:d}=a,b={root:["root",`size${k(v)}`,d,u,o!=="standard"&&`color${k(o)}`,o!=="standard"&&`${d}${k(o)}`,s&&"disabled",f&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return Y(b,ha,t)},ja=E("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:Z})(({theme:a,ownerState:t})=>p({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${g.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),$a=E(va,{name:"MuiPaginationItem",slot:"Root",overridesResolver:Z})(({theme:a,ownerState:t})=>p({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${g.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${g.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${g.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${g.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>p({},t.variant==="text"&&{[`&.${g.selected}`]:p({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${g.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${g.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${g.selected}`]:p({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:z(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:z(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${g.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),Ba=E("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>p({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),Ia=h.forwardRef(function(t,o){const s=X({props:t,name:"MuiPaginationItem"}),{className:f,color:v="standard",component:u,components:l={},disabled:d=!1,page:b,selected:m=!1,shape:B="circular",size:x="medium",slots:c={},type:r="page",variant:n="text"}=s,P=D(s,Pa),y=p({},s,{color:v,disabled:d,selected:m,shape:B,size:x,type:r,variant:n}),N=fa(),C=ma(y),I=(N?{previous:c.next||l.next||J,next:c.previous||l.previous||q,last:c.first||l.first||G,first:c.last||l.last||H}:{previous:c.previous||l.previous||q,next:c.next||l.next||J,first:c.first||l.first||G,last:c.last||l.last||H})[r];return r==="start-ellipsis"||r==="end-ellipsis"?e.jsx(ja,{ref:o,ownerState:y,className:T(C.root,f),children:"…"}):e.jsxs($a,p({ref:o,ownerState:y,component:u,disabled:d,className:T(C.root,f)},P,{children:[r==="page"&&b,I?e.jsx(Ba,{as:I,ownerState:y,className:C.icon}):null]}))}),Na=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],za=a=>{const{classes:t,variant:o}=a;return Y({root:["root",o],ul:["ul"]},ba,t)},ka=E("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),La=E("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Ra(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const Oa=h.forwardRef(function(t,o){const s=X({props:t,name:"MuiPagination"}),{boundaryCount:f=1,className:v,color:u="standard",count:l=1,defaultPage:d=1,disabled:b=!1,getItemAriaLabel:m=Ra,hideNextButton:B=!1,hidePrevButton:x=!1,renderItem:c=j=>e.jsx(Ia,p({},j)),shape:r="circular",showFirstButton:n=!1,showLastButton:P=!1,siblingCount:y=1,size:N="medium",variant:C="text"}=s,L=D(s,Na),{items:I}=Ca(p({},s,{componentName:"Pagination"})),R=p({},s,{boundaryCount:f,color:u,count:l,defaultPage:d,disabled:b,getItemAriaLabel:m,hideNextButton:B,hidePrevButton:x,renderItem:c,shape:r,showFirstButton:n,showLastButton:P,siblingCount:y,size:N,variant:C}),O=za(R);return e.jsx(ka,p({"aria-label":"pagination navigation",className:T(O.root,v),ownerState:R,ref:o},L,{children:e.jsx(La,{className:O.ul,ownerState:R,children:I.map((j,i)=>e.jsx("li",{children:c(p({},j,{color:u,"aria-label":m(j.type,j.page,j.selected),shape:r,size:N,variant:C}))},i))})}))}),Ma=a=>new Date(a).toISOString().split("T")[0],_=10,Ea=()=>{const[a,t]=h.useState(1),[o,s]=h.useState([]),[f,v]=h.useState(!1),[u,l]=h.useState("title"),[d,b]=h.useState("asc"),m=(n,P)=>{console.log(n),P!==void 0&&t(P)};h.useEffect(()=>{v(!0),ua(u,d).then(({result:n})=>{s(n)}).catch(n=>{console.log(n)}).finally(()=>{v(!1)})},[u,d]);const B=Math.ceil(o.length/_),x=(a-1)*_,c=Math.min(x+_-1,o.length-1),r=o.slice(x,c+1);return e.jsxs(ea,{children:[e.jsx(F,{className:"font-gravity",children:"Events"}),f?e.jsx(ta,{}):o.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(oa,{children:[e.jsxs(U,{children:[e.jsx(W,{className:"font-gravity",children:"Sort by:"}),e.jsxs(A,{value:u,onChange:n=>l(n.target.value),children:[e.jsx(M,{value:"title",children:"Title"}),e.jsx(M,{value:"eventDate",children:"Event Date"}),e.jsx(M,{value:"organizer",children:"Organizer"})]})]}),e.jsxs(U,{children:[e.jsx(W,{className:"font-gravity",children:"Order:"}),e.jsxs(A,{value:d,onChange:n=>b(n.target.value),children:[e.jsx(M,{value:"asc",children:"Ascending"}),e.jsx(M,{value:"desc",children:"Descending"})]})]})]}),e.jsx(sa,{children:r.map(n=>e.jsxs(na,{children:[e.jsx(ia,{className:"font-gravity",children:n.title}),e.jsx(ra,{className:"font-konnect",children:n.description}),e.jsxs(la,{children:[e.jsx(ca,{className:"font-konnect",children:n.organizer}),e.jsx(da,{className:"font-konnect",children:Ma(n.event_date)})]}),e.jsxs(pa,{children:[e.jsx(V,{to:`/registration/${n._id}`,className:"font-konnect transition-all","data-event-id":n._id,children:"Register"}),e.jsx(V,{to:`/participants/${n._id}`,className:"font-konnect","data-event-id":n._id,children:"View"})]})]},n._id))})]}):e.jsx(F,{className:"font-gravity",children:"There is no event"}),o.length>0&&e.jsx(Oa,{className:"MuiPaginationItem-root",count:B,page:a,onChange:m,defaultPage:a})]})},Ua=()=>e.jsx(e.Fragment,{children:e.jsx(Ea,{})});export{Ua as default};