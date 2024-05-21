import{p as a,j as t,r as s,u as b,L as S}from"./index-39key_2U.js";import{b as m,g as d}from"./Event.module-B54MuI4r.js";import{g as E,f as y,h as I,i as T}from"./eventsBoard.styles-CA_8pDnc.js";import{b as L,c as P}from"./api-CorWxHAP.js";const k=a.svg`
  transition: fill 0.2s;
`,C=({name:e,size:r,height:o,className:i,width:c,style:u,onClick:l,id:p,color:x,stroke:h,fill:v})=>{const n=r?`${r}px`:"20px",f=`${o}px`,j=`${c}px`;return t.jsx(k,{className:`${i} c-icon`,style:{...u,width:c?j:n,height:o?f:n,color:x||void 0},onClick:l,id:p,children:t.jsx("use",{xlinkHref:`#${e}`,id:p,stroke:h,fill:v})})},N=a.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;a.ul``;const B=a(E)`
  height: auto;
`,w=a.div`
  width: 100%;
  position: relative;

  &:hover {
    input {
      border-color: var(--accent-color);
    }
    .icon-search {
      stroke: var(--accent-color);
    }
  }
`,$=a(C)`
  position: absolute;
  left: 10px;
  top: 12px;
  stroke: var(--main-color);
  fill: transparent;
`,A=a.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 10px;
  margin-bottom: 20px;
  padding-left: 35px;
`;a.button`
  position: absolute;
  right: 10px;
  top: 7px;
  width: 70px;
  height: 25px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: var(--second-color);

  &:hover {
    background-color: var(--accent-color);
  }
`;const D=(e,r)=>{const[o,i]=s.useState(e);return s.useEffect(()=>{const c=setTimeout(()=>{i(e)},r);return()=>{clearTimeout(c)}},[e,r]),o},F=()=>{const{eventId:e}=b(),[r,o]=s.useState([]),[i,c]=s.useState(),[u,l]=s.useState(!1),[p,x]=s.useState(""),h=D(p,700);s.useEffect(()=>{e!==void 0&&(l(!0),L(e).then(({result:n})=>{c(n)}).catch(n=>{console.log(n)}).finally(()=>{l(!1)}))},[e]),s.useEffect(()=>{e&&(l(!0),P(e,h).then(({result:n})=>{o(n)}).catch(n=>{console.log(n)}).finally(()=>{l(!1)}))},[e,h]);const v=n=>{x(n.target.value)};return t.jsxs(N,{children:[t.jsxs(m,{className:"font-gravity text-center",children:[i&&i.title," ",t.jsx("span",{style:{color:"var(--main-color)"},children:"participants"})]}),t.jsxs(w,{children:[t.jsx(A,{value:p,onChange:v,placeholder:"Search participant by email or title",type:"text",className:"font-gravity"}),t.jsx($,{name:"icon-search",className:"icon-search",width:15,height:15})]}),u?t.jsx(S,{}):r.length>0?t.jsx("div",{children:t.jsx(y,{children:r.map(n=>t.jsxs(B,{children:[t.jsx(I,{className:"font-gravity",children:n.fullName}),t.jsx(T,{className:"font-konnect text-center",children:n.email})]},n._id))})}):t.jsx(m,{className:"font-gravity text-center",children:"There is no participant"})]})},H=a.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`,Q="/events-registration-app/assets/development-BFQx4s_X.webp",R=()=>t.jsxs(H,{children:[t.jsx(m,{className:"font-gravity text-center",children:"This page is under development"}),t.jsx("img",{src:Q,alt:"ImgDevelopment",width:500,height:"auto"})]}),g=a.button`
  color: ${({active:e})=>e?"var(--accent-color)":"var(--main-color)"};
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`,M=()=>{const[e,r]=s.useState(d.LIST);return t.jsxs("div",{style:{margin:"0 auto"},children:[t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(g,{active:e===d.LIST,onClick:()=>r(d.LIST),children:"Participants"})}),t.jsx("li",{children:t.jsx(g,{active:e===d.CHART,onClick:()=>r(d.CHART),children:"Chart"})})]}),e===d.LIST?t.jsx(F,{}):t.jsx(R,{})]})},q=()=>t.jsx(t.Fragment,{children:t.jsx(M,{})});export{q as default};
