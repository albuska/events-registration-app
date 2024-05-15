import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader";

const SharedLayout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
