import{p as o}from"./index-BA7-5lHM.js";const n=o.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`,a=o.h1`
  color: var(--accent-color);
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`,i=o.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,c=o.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: var(--accent-color);

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`,t=o.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid
    ${({$error:r})=>r==="true"?"var(--error-color)":"#ffffff"};
  color: var(--main-color);
  font-size: 18px;

  &:hover,
  &:focus {
    border-color: var(--accent-color);
  }
`,l=o.p`
  color: var(--error-color);
`,s=o(t)`
  background-color: #142d4c;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--accent-color);
    background-color: #393e46;
  }
`;export{n as E,l as I,a,i as b,c,t as d,s as e};
