import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../../components/auth/LoginForm";
import RegisterForm from "../../../components/auth/RegisterForm";
import { getPhone, login, register } from "../../../api/userAPIs";
import Cookies from "js-cookie";
import { notify } from "../../../utils/notification";

function HeaderUser() {
  const [showFormLogin, setShowFormLogin] = useState(false);
  const [showFormRegister, setShowFormRegister] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser || null;
  });
  const navigate = useNavigate();
  useEffect(() => {
    // Check xem đã có đăng nhập hay chưa
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  //Hàm hiển thị form Login
  const openFormLogin = () => {
    setShowFormLogin(true);
  };
  //Hàm đóng form Login
  const closeFormLogin = () => {
    setShowFormLogin(false);
  };

  //Hàm hiển thị form Register
  const openFormRegister = () => {
    setShowFormRegister(true);
  };
  //Hàm đóng form Register
  const closeFormRegister = () => {
    setShowFormRegister(false);
  };
  //Hàm xử lý đăng nhập
  const handleLogin = async (infoUser) => {
    const response = await login(infoUser);
    const { accessToken, expired, roles, fullName } = response.data;
    setUser(fullName);
    localStorage.setItem("user", fullName);
    localStorage.setItem("roles", JSON.stringify(roles));
    // Lưu accessToken vào cookies
    Cookies.set("accessToken", accessToken, {
      expires: expired / (24 * 60 * 60 * 1000),
      secure: true,
      sameSite: "strict",
    });

    closeFormLogin();
    const check = roles.some(
      (item) => item === import.meta.env.VITE_ADMIN_ROLE
    );

    // Xử lý chuyển hướng nếu cần
    if (check) {
      window.location.href = "/admin";
    }
  };
  // hàm xử lý đăng ký
  const handleRegister = async (newUser) => {
    await getPhone({ phone: newUser.phone, fullName: newUser.fullName });
    await register(newUser);
    closeFormRegister();
    openFormLogin();
  };
  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("accessToken");
    setUser(null);
    navigate("/");
  };
  // Hàm chuyển đổi giữa form đăng nhập và đăng ký
  const toggleForms = () => {
    setShowFormLogin(!showFormLogin);
    setShowFormRegister(!showFormRegister);
  };
  return (
    <div className="max-w-[1500px] h-[70px] mx-auto flex justify-between items-center  ">
      <div className="logo">
        <Link to={"/"}>
          <img
            className="h-[50px] block"
            src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logo-rikkei2.png"
            alt="rikkei edu"
          />
        </Link>
      </div>

      <div className="actions flex gap-3 items-center">
        {user ? (
          <>
            <span className="font-bold text-[#231651] cursor-pointer">
              {user}
            </span>{" "}
            <Button
              variant="outlined"
              sx={{ color: "#bc2228" }}
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="text"
              sx={{ color: "#bc2228" }}
              onClick={openFormLogin}
            >
              Đăng nhập
            </Button>
            <Button
              sx={{ bgcolor: "#bc2228", "&:hover": { bgcolor: "#c14e53" } }}
              variant="contained"
              onClick={openFormRegister}
            >
              Đăng ký
            </Button>
          </>
        )}
      </div>
      {/* Form thêm mới khóa học */}
      {showFormLogin && (
        <LoginForm
          closeForm={closeFormLogin}
          handleLogin={handleLogin}
          toggleForms={toggleForms}
        />
      )}
      {showFormRegister && (
        <RegisterForm
          closeForm={closeFormRegister}
          handleRegister={handleRegister}
          toggleForms={toggleForms}
        />
      )}
    </div>
  );
}

export default HeaderUser;
