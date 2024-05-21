import{p as o,e as t}from"./index-39key_2U.js";const n=o.div`
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
`,i=o.ul`
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
`,a=o.li`
  border: 1px solid var(--main-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
`,r=o.h1`
  color: var(--accent-color);
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`,c=o.h2`
  max-width: 200px;
  color: var(--accent-color);
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  margin: 0 auto;
  margin-bottom: 20px;
`,d=o.p`
  color: var(--main-color);
`,l=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`,s=o.p`
  color: #005792;
`,p=o.p`
  color: #005792;
`,x=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,m=o(t)`
  padding: 2px 10px;
  color: var(--accent-color);
  font-weight: 500;
  border: 1px solid #393e46;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-color);
  }
`,f=o.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
  }
`,g=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,v=o.label`
  font-size: 20px;
  font-weight: 500;
  color: var(--main-color);
`,u=o.select`
  background-color: transparent;
  border: 1px solid var(--main-color);
  padding: 3px 5px;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
`,b=o.option`
  background-color: #393e46;
`;export{n as E,f as S,r as a,g as b,v as c,u as d,b as e,i as f,a as g,c as h,d as i,l as j,s as k,p as l,x as m,m as n};
