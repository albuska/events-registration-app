import{p as r}from"./index-39key_2U.js";const i=r.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`,c=r.h1`
  color: var(--accent-color);
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`,l=r.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    width: 500px;
  }
`,s=r.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: var(--accent-color);

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`,t=r.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid
    ${({$error:o})=>o==="true"?"var(--error-color)":"var(--main-color)"};
  color: var(--main-color);
  font-size: 18px;

  &:hover,
  &:focus {
    border-color: var(--accent-color);
  }
`,p=r.p`
  color: var(--error-color);
`,d=r(t)`
  background-color: #142d4c;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--accent-color);
    background-color: #393e46;
  }
`;var n=(o=>(o.SOCIAL_MEDIA="social media",o.FRIENDS="friends",o.FOUND_MYSELF="found myself",o))(n||{}),e=(o=>(o.LIST="list",o.CHART="chart",o))(e||{});export{n as E,p as I,i as a,c as b,l as c,s as d,t as e,d as f,e as g};
