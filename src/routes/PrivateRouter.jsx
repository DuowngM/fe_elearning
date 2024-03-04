import { Navigate, Outlet } from "react-router-dom";

import Header from "../layouts/admin/header";
import Menu from "../layouts/admin/menu";

export default function PrivateRouter() {
  const isLogin = true;
  return (
    <>
      <Header />
      <div className="flex ">
        <Menu />
        {isLogin ? <Outlet /> : <Navigate to={"/login"} />}
      </div>
    </>
  );
}
