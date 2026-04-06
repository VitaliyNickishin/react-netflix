import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  const { pathname } = useLocation();
  const isHomePage = useMemo(() => pathname === "/", [pathname]);
  console.log("pathname:", pathname);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5">
      {!isHomePage && <Header />}
      <Outlet />
    </div>
  );
};
