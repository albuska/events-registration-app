import{p as i,u as m,r,j as t,L as x}from"./index-Dn-0xz36.js";import{b as o,g as s}from"./Event.module-XcHHiboU.js";import{c as v,b as u,d as h,e as j}from"./eventsBoard.styles-BzTlDA0P.js";import{b as f}from"./api-BWcerMjH.js";const g=i.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;i.ul``;const E=i(v)`
  height: auto;
`,L=()=>{const{eventId:e}=m(),[a,d]=r.useState([]),[p,c]=r.useState(!1);return r.useEffect(()=>{e!==void 0&&(c(!0),f(e).then(({result:n})=>{console.log(n,"result"),d(n)}).catch(n=>{console.log(n)}).finally(()=>{c(!1)}))},[e]),t.jsxs(g,{children:[t.jsxs(o,{className:"font-gravity text-center",children:["Awesome event"," participants"]}),p?t.jsx(x,{}):a.length>0?t.jsx(u,{children:a.map(n=>t.jsxs(E,{children:[t.jsx(h,{className:"font-gravity",children:n.fullName}),t.jsx(j,{className:"font-konnect",children:n.email})]},n._id))}):t.jsx(o,{className:"font-gravity text-center",children:"There is no participant"})]})},P=i.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`,T=()=>t.jsx(P,{}),l=i.button`
  color: ${({active:e})=>e?"var(--accent-color)":"var(--main-color)"};
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`,I=()=>{const[e,a]=r.useState(s.LIST);return t.jsxs("div",{children:[t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(l,{active:e===s.LIST,onClick:()=>a(s.LIST),children:"Participants"})}),t.jsx("li",{children:t.jsx(l,{active:e===s.CHART,onClick:()=>a(s.CHART),children:"Chart"})})]}),e===s.LIST?t.jsx(L,{}):t.jsx(T,{})]})},A=()=>t.jsx(t.Fragment,{children:t.jsx(I,{})});export{A as default};
