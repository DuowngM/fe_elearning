import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/auth/LoginForm";
import RegisterForm from "../../../components/auth/RegisterForm";
import { register } from "../../../api/userAPIs";

function HeaderUser() {
  const [showFormLogin, setShowFormLogin] = useState(false);
  const [showFormRegister, setShowFormRegister] = useState(false);
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
    try {
      console.log(infoUser);
      // Xử lý đăng nhập
    } catch (error) {
      console.log(error);
    }
  };
  // hàm xử lý đăng ký
  const handleRegister = async (newUser) => {
    try {
      await register(newUser);
    } catch (error) {
      console.log(error);
    }
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
        <Button
          variant="text"
          sx={{ color: "#bc2228" }}
          onClick={openFormLogin}
        >
          Sign In
        </Button>
        <Button
          sx={{ bgcolor: "#bc2228", "&:hover": { bgcolor: "#c14e53" } }}
          variant="contained"
          onClick={openFormRegister}
        >
          Sign Up
        </Button>
      </div>
      {/* Form thêm mới khóa học */}
      {showFormLogin && (
        <LoginForm closeForm={closeFormLogin} handleLogin={handleLogin} />
      )}
      {showFormRegister && (
        <RegisterForm
          closeForm={closeFormRegister}
          handleRegister={handleRegister}
        />
      )}
    </div>
  );
}

export default HeaderUser;
