import{p as e,j as t,r as s}from"./index-DzgyQ7Gi.js";import{b as c,g as n}from"./Event.module-BFwBJ9jh.js";import{c as o,b as l,e as d,d as p,f as x}from"./events-Dv6rcgBg.js";const v=e.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;e.ul``;const m=e(o)`
  height: auto;
`,h=()=>t.jsxs(v,{children:[t.jsxs(c,{className:"font-gravity text-center",children:["Awesome event"," participants"]}),t.jsx(l,{children:d.map(i=>t.jsxs(m,{children:[t.jsx(p,{className:"font-gravity",children:i.title}),t.jsx(x,{className:"font-konnect",children:i.description})]},i.id))})]}),j=e.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`,u=()=>t.jsx(j,{}),r=e.button`
  color: ${({active:i})=>i?"var(--accent-color)":"var(--main-color)"};
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`,E=()=>{const[i,a]=s.useState(n.LIST);return t.jsxs("div",{children:[t.jsxs("ul",{children:[t.jsx("li",{children:t.jsx(r,{active:i===n.LIST,onClick:()=>a(n.LIST),children:"Participants"})}),t.jsx("li",{children:t.jsx(r,{active:i===n.CHART,onClick:()=>a(n.CHART),children:"Chart"})})]}),i===n.LIST?t.jsx(h,{}):t.jsx(u,{})]})},T=()=>t.jsx(t.Fragment,{children:t.jsx(E,{})});export{T as default};
