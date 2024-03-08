import React, { useRef, useState } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Button, Input } from "antd";
import "../../index.css";
import { auth } from "../../config/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function RegisterForm({ closeForm, handleRegister }) {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  // Xử lý sự kiện tắt form khi click ra ngoài
  const formRef = useRef(null);
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeForm(); // Đóng form nếu click bên ngoài form
    }
  };
  const handleSendOTP = async () => {
    try {
      // Kiểm tra nếu số điện thoại không bắt đầu bằng "+84" thì thêm "+84" vào trước số điện thoại
      const formattedPhone = phone.startsWith("+84") ? phone : `+84${phone}`;
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const response = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        recaptcha
      );
      setConfirmation(response);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyOTP = async () => {
    try {
      const data = await confirmation.confirm(otp);
      if (data) {
        console.log("verify OTP thanh cong");
        handleRegister({
          phone,
          fullName,
          password,
        });
      }
    } catch (error) {
      if (error) {
        alert("Dang nhap that bai");
      }
    }
  };
  // Gọi hàm đăng ký
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      verifyOTP();
    }
  };
  return (
    <>
      <div
        className="overlay fixed inset-0 flex items-center justify-center"
        onClick={handleClickOutside}
      >
        <form
          ref={formRef}
          className="fade-down bg-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4 py-5 rounded lg:pb-10 mx-2 my-4 overflow-auto"
        >
          <div className="flex justify-items-start items-center mb-5">
            <img
              className="w-32 sm:w-36 md:w-40 lg:w-48"
              src="../../../public/images/logo-rikkei2.png"
              alt=""
            />
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:border-r-2 pr-4">
              <h1 className="text-[#0A033C] font-bold text-xl md:text-2xl lg:text-3xl mb-4">
                Welcome to <br />
                RikkeiEdu Online Learning Platform
              </h1>
              <img
                src="/public/images/Login-side-icon.png"
                alt=""
                className="hidden sm:block"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="relative">
                <label htmlFor="fullName" className="text-[#0A033C] block">
                  Full name
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-full top-[17%]">
                  <PermIdentityOutlinedIcon sx={{ fontSize: "small" }} />
                </div>
                <input
                  id="fullName"
                  type="text"
                  className="form-input w-full pl-10 pr-3 py-2 border rounded-md focus:border-[#f60d37] focus:ring-[#f60d37]"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>

              <div className="relative">
                <label htmlFor="phone" className="text-[#0A033C] block">
                  Phone Number
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-full top-[17%]">
                  <LocalPhoneOutlinedIcon sx={{ fontSize: "small" }} />
                </div>
                <input
                  id="phone"
                  type="number"
                  className="form-input w-full pl-10 pr-3 py-2 border rounded-md focus:border-[#f60d37] focus:ring-[#f60d37]"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="text-[#0A033C] block">
                  Password
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-full top-[17%]">
                  <HttpsOutlinedIcon sx={{ fontSize: "small" }} />
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full pl-10 pr-3 py-2 border rounded-md focus:border-[#f60d37] focus:ring-[#f60d37]"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="flex items-center space-x-2 justify-between">
                <input
                  type="number"
                  className="form-input w-2/3 pl-4 pr-3 py-2 border rounded-md focus:border-[#f60d37] focus:ring-[#f60d37]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button
                  type="button"
                  className="border-[#BC2228] bg-transparent hover:bg-[#BC2228] hover:text-white text-[#BC2228] font-medium py-2 px-4 rounded"
                  onClick={handleSendOTP}
                >
                  Send
                </button>
              </div>
              <div id="recaptcha"></div>
              <button
                type="submit"
                className="w-full bg-[#BC2228] hover:bg-[#dc1313] text-white py-2 rounded-md transition-colors duration-200"
                onClick={verifyOTP}
              >
                Sign Up
              </button>

              <p className="text-center text-[#5D5A6F]">
                Bạn đã có tài khoản?{" "}
                <span className="text-[#BC2228] cursor-pointer">Đăng nhập</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
