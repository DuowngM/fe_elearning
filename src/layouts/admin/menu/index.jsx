import "./index.css";

import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <menu className="w-[200px] bg-[#041434] px-3 text-white h-[calc(100vh-56px)] pt-6">
        <div className="flex flex-col gap-1" id="admin-menu">
          <NavLink to="/admin" end>
            <DashboardIcon />
            <span className="menu-text">Tổng quan</span>
          </NavLink>
          <NavLink to="course">
            <ManageAccountsIcon />
            <span className="menu-text">Khóa học</span>
          </NavLink>
          <NavLink to="contact">
            <ConnectWithoutContactIcon />
            <span className="menu-text">Quản lý người dùng</span>
          </NavLink>
          {/* <NavLink to="bai-viet">
            <LocalPostOfficeIcon />
            <span className="menu-text">Bài viết</span>
          </NavLink> */}
        </div>
      </menu>
    </>
  );
}
