import{p as o,e as t}from"./index-Dn-0xz36.js";const i=o.div`
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
`,r=o.ul`
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
`,n=o.li`
  border: 1px solid var(--main-color);
  width: calc(100% / 4);
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
`,a=o.h1`
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
  margin-top: auto;
`,p=o(t)`
  padding: 2px 10px;
  color: var(--accent-color);
  font-weight: 500;
  border: 1px solid #393e46;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-color);
  }
`;export{i as E,a,r as b,n as c,c as d,d as e,l as f,p as g};
