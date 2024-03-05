import { Outlet } from "react-router-dom";
import FooterUser from "../../layouts/user/footer/FooterUser";
import IndexHeader from "../../layouts/user/header/IndexHeader";

function IndexUser() {
  return (
    <div className="w-full">
      {/* header */}
      <IndexHeader />
      {/* body */}
      <Outlet />

      
      {/* footer */}
      <FooterUser />
    </div>
  );
}

export default IndexUser;
