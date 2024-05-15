import{r as N,j as i,p as C,L as X}from"./index-B2LJ56Ou.js";import{g as V,a as H,_ as F,u as Z,b as c,c as E,s as _,B as tt,d as k,e as J,f as O,h as B,i as Y}from"./ButtonBase-BBT7ffvK.js";const et=N.createContext(),at=()=>{const t=N.useContext(et);return t??!1};function ot(t){return V("MuiPagination",t)}H("MuiPagination",["root","ul","outlined","text"]);const it=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function nt(t={}){const{boundaryCount:e=1,componentName:a="usePagination",count:o=1,defaultPage:v=1,disabled:u=!1,hideNextButton:f=!1,hidePrevButton:r=!1,onChange:l,page:g,showFirstButton:z=!1,showLastButton:M=!1,siblingCount:h=1}=t,d=F(t,it),[s,L]=Z({controlled:g,default:v,name:a,state:"page"}),I=(n,m)=>{g||L(m),l&&l(n,m)},x=(n,m)=>{const K=m-n+1;return Array.from({length:K},(Bt,Q)=>n+Q)},$=x(1,Math.min(e,o)),b=x(Math.max(o-e+1,e+1),o),j=Math.max(Math.min(s-h,o-e-h*2-1),e+2),P=Math.min(Math.max(s+h,e+h*2+2),b.length>0?b[0]-2:o-1),R=[...z?["first"]:[],...r?[]:["previous"],...$,...j>e+2?["start-ellipsis"]:e+1<o-e?[e+1]:[],...x(j,P),...P<o-e-1?["end-ellipsis"]:o-e>e?[o-e]:[],...b,...f?[]:["next"],...M?["last"]:[]],w=n=>{switch(n){case"first":return 1;case"previous":return s-1;case"next":return s+1;case"last":return o;default:return null}},y=R.map(n=>typeof n=="number"?{onClick:m=>{I(m,n)},type:"page",page:n,selected:n===s,disabled:u,"aria-current":n===s?"true":void 0}:{onClick:m=>{I(m,w(n))},type:n,page:w(n),selected:!1,disabled:u||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?s>=o:s<=1)});return c({items:y},d)}function st(t){return V("MuiPaginationItem",t)}const p=H("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),T=E(i.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),W=E(i.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),S=E(i.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),G=E(i.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),rt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],q=(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`size${B(a.size)}`],a.variant==="text"&&e[`text${B(a.color)}`],a.variant==="outlined"&&e[`outlined${B(a.color)}`],a.shape==="rounded"&&e.rounded,a.type==="page"&&e.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&e.ellipsis,(a.type==="previous"||a.type==="next")&&e.previousNext,(a.type==="first"||a.type==="last")&&e.firstLast]},lt=t=>{const{classes:e,color:a,disabled:o,selected:v,size:u,shape:f,type:r,variant:l}=t,g={root:["root",`size${B(u)}`,l,f,a!=="standard"&&`color${B(a)}`,a!=="standard"&&`${l}${B(a)}`,o&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return Y(g,st,e)},ct=_("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:t,ownerState:e})=>c({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${p.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),dt=_(tt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:q})(({theme:t,ownerState:e})=>c({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${p.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${p.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:k(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:k(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${p.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>c({},e.variant==="text"&&{[`&.${p.selected}`]:c({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${p.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${p.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${p.selected}`]:c({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:k(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:k(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:k(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:k(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${p.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),pt=_("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>c({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),ut=N.forwardRef(function(e,a){const o=J({props:e,name:"MuiPaginationItem"}),{className:v,color:u="standard",component:f,components:r={},disabled:l=!1,page:g,selected:z=!1,shape:M="circular",size:h="medium",slots:d={},type:s="page",variant:L="text"}=o,I=F(o,rt),x=c({},o,{color:u,disabled:l,selected:z,shape:M,size:h,type:s,variant:L}),$=at(),b=lt(x),P=($?{previous:d.next||r.next||G,next:d.previous||r.previous||S,last:d.first||r.first||T,first:d.last||r.last||W}:{previous:d.previous||r.previous||S,next:d.next||r.next||G,first:d.first||r.first||T,last:d.last||r.last||W})[s];return s==="start-ellipsis"||s==="end-ellipsis"?i.jsx(ct,{ref:a,ownerState:x,className:O(b.root,v),children:"…"}):i.jsxs(dt,c({ref:a,ownerState:x,component:f,disabled:l,className:O(b.root,v)},I,{children:[s==="page"&&g,P?i.jsx(pt,{as:P,ownerState:x,className:b.icon}):null]}))}),gt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],vt=t=>{const{classes:e,variant:a}=t;return Y({root:["root",a],ul:["ul"]},ot,e)},ft=_("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant]]}})({}),xt=_("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function bt(t,e,a){return t==="page"?`${a?"":"Go to "}page ${e}`:`Go to ${t} page`}const ht=N.forwardRef(function(e,a){const o=J({props:e,name:"MuiPagination"}),{boundaryCount:v=1,className:u,color:f="standard",count:r=1,defaultPage:l=1,disabled:g=!1,getItemAriaLabel:z=bt,hideNextButton:M=!1,hidePrevButton:h=!1,renderItem:d=y=>i.jsx(ut,c({},y)),shape:s="circular",showFirstButton:L=!1,showLastButton:I=!1,siblingCount:x=1,size:$="medium",variant:b="text"}=o,j=F(o,gt),{items:P}=nt(c({},o,{componentName:"Pagination"})),R=c({},o,{boundaryCount:v,color:f,count:r,defaultPage:l,disabled:g,getItemAriaLabel:z,hideNextButton:M,hidePrevButton:h,renderItem:d,shape:s,showFirstButton:L,showLastButton:I,siblingCount:x,size:$,variant:b}),w=vt(R);return i.jsx(ft,c({"aria-label":"pagination navigation",className:O(w.root,u),ownerState:R,ref:a},j,{children:i.jsx(xt,{className:w.ul,ownerState:R,children:P.map((y,n)=>i.jsx("li",{children:d(c({},y,{color:f,"aria-label":z(y.type,y.page,y.selected),shape:s,size:$,variant:b}))},n))})}))}),yt=C.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  .MuiPaginationItem-root {
    color: rgba(255, 255, 255, 0.17);
    font-size: 20px;
    font-weight: 400;
  }

  .MuiPaginationItem-root:focus {
    color: #ffffff;
  }

  .MuiPaginationItem-icon {
    width: 25px;
    height: 25px;
    fill: var(--accent-color);
  }

  .Mui-selected {
    color: #ffffff;
  }
`,mt=C.ul`
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--accent-color);
  gap: 50px;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Ct=C.li`
  border: 1px solid var(--main-color);
  width: calc(100% / 4);
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
`,Pt=C.h1`
  color: var(--accent-color);
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`,zt=C.h2`
  color: var(--accent-color);
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 20px;
`,It=C.p`
  color: var(--main-color);
`,$t=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,D=C(X)`
  padding: 2px 10px;
  color: var(--accent-color);
  font-weight: 500;
  border: 1px solid #393e46;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-color);
  }
`,U=[{id:1,title:"Tech Conference 2024",description:"Join us for the latest trends and innovations in technology.",event_date:"2024-08-20",organizer:"Tech Innovations Inc."},{id:2,title:"Art Exhibition: Modern Masterpieces",description:"Experience the beauty of contemporary art from around the world.",event_date:"2024-09-10",organizer:"Art Gallery Association"},{id:3,title:"Business Networking Luncheon",description:"Connect with industry leaders over a delicious meal and insightful discussions.",event_date:"2024-07-15",organizer:"Business Leaders Network"},{id:4,title:"Fitness Workshop: Achieve Your Goals",description:"Learn effective strategies to reach your fitness objectives.",event_date:"2024-06-25",organizer:"FitLife Gym"},{id:5,title:"Literature Festival 2024",description:"Celebrate the joy of reading with renowned authors and book enthusiasts.",event_date:"2024-10-05",organizer:"Bookworms Society"},{id:6,title:"Startup Pitch Competition",description:"Witness innovative ideas and vote for the next big startup.",event_date:"2024-07-30",organizer:"Startup Hub"},{id:7,title:"Music Concert: Jazz Night",description:"Immerse yourself in the soulful rhythms of jazz music.",event_date:"2024-08-05",organizer:"Music Society"},{id:8,title:"Fashion Show: Fall Collection",description:"Experience the glamour and style of the latest fall fashion trends.",event_date:"2024-09-25",organizer:"Fashion Designers Association"},{id:9,title:"Educational Workshop: Coding Basics",description:"Learn the fundamentals of coding in a fun and interactive environment.",event_date:"2024-06-20",organizer:"Code Academy"},{id:10,title:"Culinary Masterclass: Italian Cuisine",description:"Master the art of Italian cooking with expert chefs.",event_date:"2024-08-10",organizer:"Gourmet Cooking Institute"},{id:11,title:"Film Festival: Indie Gems",description:"Discover independent films that push the boundaries of storytelling.",event_date:"2024-10-15",organizer:"Indie Film Society"},{id:12,title:"Science Fair 2024",description:"Explore the wonders of science through interactive exhibits and experiments.",event_date:"2024-09-05",organizer:"Science Enthusiasts Club"},{id:13,title:"Photography Workshop: Capturing Moments",description:"Hone your photography skills with hands-on instruction from professionals.",event_date:"2024-07-05",organizer:"Shutterbugs Academy"},{id:14,title:"Charity Gala: A Night of Giving",description:"Support worthy causes while enjoying an elegant evening of dining and entertainment.",event_date:"2024-08-15",organizer:"Charity Foundation"},{id:15,title:"Technology Workshop: AI Applications",description:"Learn about the practical applications of artificial intelligence in various industries.",event_date:"2024-07-25",organizer:"AI Solutions Inc."},{id:16,title:"Dance Performance: Cultural Rhythms",description:"Experience the diversity of dance from different cultures around the world.",event_date:"2024-06-30",organizer:"Global Dance Alliance"},{id:17,title:"Wine Tasting Event: Vintages of the World",description:"Savor exquisite wines from renowned vineyards across the globe.",event_date:"2024-09-15",organizer:"Wine Connoisseurs Club"},{id:18,title:"Travel Expo: Explore Your Next Destination",description:"Discover exciting travel destinations and plan your next adventure.",event_date:"2024-08-30",organizer:"Travel Agency Network"},{id:19,title:"Environmental Awareness Seminar",description:"Learn about environmental issues and how you can make a positive impact.",event_date:"2024-07-10",organizer:"Green Earth Society"},{id:20,title:"Theater Production: Classic Dramas Reimagined",description:"Be transported to different worlds through timeless stories brought to life on stage.",event_date:"2024-10-20",organizer:"Theater Arts Guild"}],A=10,kt=()=>{const[t,e]=N.useState(1),[a]=N.useState(U.length),o=(l,g)=>{console.log(l),g!==void 0&&e(g)},v=Math.ceil(a/A),u=(t-1)*A,f=Math.min(u+A-1,a-1),r=U.slice(u,f+1);return i.jsxs(yt,{children:[i.jsx(Pt,{className:"font-gravity",children:"Events"}),i.jsx(mt,{children:r.map(l=>i.jsxs(Ct,{children:[i.jsx(zt,{className:"font-gravity",children:l.title}),i.jsx(It,{className:"font-konnect",children:l.description}),i.jsxs($t,{children:[i.jsx(D,{to:"registration",className:"font-konnect transition-all",children:"Register"}),i.jsx(D,{to:"participants",className:"font-konnect",children:"View"})]})]},l.id))}),i.jsx(ht,{className:"MuiPaginationItem-root",count:v,page:t,onChange:o,defaultPage:t})]})},Lt=()=>i.jsx(i.Fragment,{children:i.jsx(kt,{})});export{Lt as default};
