import React, { useRef, useState } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Button, Input } from "antd";
import "react-quill/dist/quill.snow.css";
import "../../index.css";

export default function LoginForm({ closeForm, handleLogin }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // Xử lý sự kiện tắt form khi click ra ngoài
  const formRef = useRef(null);
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeForm(); // Đóng form nếu click bên ngoài form
    }
  };
  // Hàm đăng nhập
  const login = () => {
    handleLogin({ phone, password });
  };
  // Gọi hàm đăng nhập khi nhấn phím Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };
  return (
    <>
      <div className="overlay" onClick={handleClickOutside}>
        <form
          ref={formRef}
          className="fade-down bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-6 py-5 rounded lg:pb-20 mx-auto"
        >
          <div className="flex justify-between items-center">
            <img
              className="w-36 md:w-48"
              src="/images/logo-rikkei2.png"
              alt=""
            />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:border-r-2">
              <h1 className="text-[#0A033C] font-bold text-lg md:text-2xl lg:text-3xl leading-tight mb-10">
                Welcome to <br />
                RikkeiEdu Online Learning Platform
              </h1>
              <img src="/images/Login-side-icon.png" alt="" />
            </div>
            <div className="my-auto">
              {/* Phone number input */}
              <div className="mb-5 relative">
                <label htmlFor="" className="text-[#0A033C]">
                  Phone Number
                </label>
                <div className="absolute h-full top-[20%]">
                  <LocalPhoneOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10"
                  />
                </div>
                <Input
                  type="number"
                  className="w-full h-12 mt-2 focus:border-[#f60d37] pl-10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Password input */}
              <div className="relative">
                <label htmlFor="">Password</label>
                <div className="absolute h-full top-[20%]">
                  <HttpsOutlinedIcon
                    sx={{ fontSize: "small" }}
                    className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10"
                  />
                </div>
                <Input
                  type="password"
                  className="w-full h-12 mt-2 focus:border-[#f60d37] pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>

              {/* Sign In button */}
              <div className="mt-6 p-auto">
                <Button
                  type="primary"
                  className="w-full h-12 bg-[#BC2228] hover:bg-[#dc1313] text-base"
                  onClick={login}
                >
                  Sign In
                </Button>
              </div>

              {/* Additional links */}
              <div className="mt-4">
                <p className="text-center text-[#5D5A6F] mb-1">
                  Quên mật khẩu?
                </p>
                <p className="text-center text-[#5D5A6F]">
                  Bạn không có tài khoản?{" "}
                  <a className="text-[#BC2228] cursor-pointer">
                    Tạo một tài khoản
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
