import React, { useRef, useState } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Button, Input } from "antd";
import "react-quill/dist/quill.snow.css";
import "../../index.css";
import { notify } from "../../utils/notification";

export default function LoginForm({ closeForm, handleLogin, toggleForms }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLogining, setIsLogining] = useState(false);
  // Xử lý sự kiện tắt form khi click ra ngoài
  const formRef = useRef(null);
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeForm();
    }
  };
  // Hàm đăng nhập
  const login = () => {
    setIsLogining(true);
    try {
      handleLogin({ phone, password });
    } catch (error) {
      console.log(error);
      notify("error", "Có lỗi xảy ra trong khi đăng nhập");
    } finally {
      setIsLogining(false);
    }
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
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl mx-auto px-6 py-5 bg-white rounded lg:pb-20">
          {/* Phần giới thiệu */}
          <div className="md:w-1/2">
            <h1 className="text-[#0A033C] text-center font-bold text-xl md:text-2xl lg:text-3xl leading-tight mb-10">
              Welcome to <br />
              <span className="text-rikkei">RikkeiEdu</span> E-Learning
            </h1>
            <img src="/images/Login-side-icon.png" alt="" className="mx-auto" />
          </div>

          {/* Form đăng nhập */}
          <form
            ref={formRef}
            className="fade-down bg-white w-full max-w-lg mx-auto px-6 py-5 rounded lg:pb-20"
          >
            <div className="flex justify-between items-center">
              <img
                className="w-36 md:w-48 lg:w-56 xl:w-64"
                src="/images/logo-rikkei2.png"
                alt=""
              />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5">
              <div className="my-auto">
                {/* Phone number input */}
                <div className="mb-5 relative">
                  <label htmlFor="phone" className="text-[#0A033C]">
                    Số điện thoại
                  </label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LocalPhoneOutlinedIcon sx={{ fontSize: "small" }} />
                  </div>
                  <Input
                    id="phone"
                    type="number"
                    className="w-full h-12 mt-2 focus:border-[#f60d37] pl-10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Password input */}
                <div className="relative mb-5">
                  <label htmlFor="password" className="text-[#0A033C]">
                    Mật khẩu
                  </label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HttpsOutlinedIcon sx={{ fontSize: "small" }} />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="w-full h-12 mt-2 focus:border-[#f60d37] pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>

                {/* Sign In button */}
                <div className="mt-6">
                  <Button
                    type="primary"
                    className="w-full h-12 bg-[#BC2228] hover:bg-[#dc1313] text-base"
                    onClick={login}
                  >
                    {isLogining ? <Spin /> : "Đăng nhập"}
                  </Button>
                </div>

                {/* Additional links */}
                <div className="mt-4 text-center">
                  <p className="text-[#5D5A6F] mb-1">Quên mật khẩu?</p>
                  <p className="text-[#5D5A6F]">
                    Bạn không có tài khoản?{" "}
                    <span
                      className="text-[#BC2228] cursor-pointer"
                      onClick={toggleForms}
                    >
                      Tạo một tài khoản
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
