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

  return (
    <>
      <div className="overlay" onClick={handleClickOutside}>
        <form
          ref={formRef}
          className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded pb-[90px]"
        >
          <div className="flex justify-between items-center">
            <img
              className="w-[200px]"
              src="../../../public/images/logo-rikkei2.png"
              alt=""
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mt-[40px]">
            <div className="border-r-2  ">
              <h1 className="text-[#0A033C] font-bold text-[30px] w-full h-[105px] leading-[35px] mb-[40px]">
                Welcome to <br />
                RikkeiEdu Online Learning Platform
              </h1>
              <img src="../../../public/images/Login-side-icon.png" alt="" />
            </div>
            <div className="my-auto">
              <div className="mb-5 relative">
                <label htmlFor="" className="text-[#0A033C]">
                  Full name
                </label>
                <PermIdentityOutlinedIcon
                  sx={{ fontSize: "small" }}
                  className="absolute z-[999] top-2/4 transform translate-y-2.5 -translate-x-14"
                />
                <Input
                  type="text"
                  className="w-[310px] h-[50px] mt-2 focus:!border-[##f60d37] pl-[40px]"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>

              <div className="mb-5 relative">
                <label htmlFor="" className="text-[#0A033C]">
                  Phone Number
                </label>
                <LocalPhoneOutlinedIcon
                  sx={{ fontSize: "small" }}
                  className="absolute z-[999] top-2/4 transform translate-y-2.5 -translate-x-24"
                />
                <Input
                  type="number"
                  className="w-[310px] h-[50px] mt-2 focus:!border-[##f60d37] pl-[40px]"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>

              <div className="mb-5 relative">
                <label htmlFor="">Password</label>
                <HttpsOutlinedIcon
                  sx={{ fontSize: "small" }}
                  className="absolute z-[999] top-2/4 transform translate-y-2.5 -translate-x-14"
                />
                <Input
                  type="password"
                  className="w-[310px] h-[50px] mt-2 focus:!border-[##f60d37] pl-[40px]"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="mb-5">
                <label className="block" htmlFor="">
                  OTP Code
                </label>
                <Input
                  type="number"
                  className="w-3/5 h-[50px] mt-2 focus:!border-[##f60d37]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <Button
                  type="secondary"
                  className="border-[#BC2228] h-[50px] ml-2 text-[#BC2228]"
                  onClick={handleSendOTP}
                >
                  Send OTP
                </Button>
              </div>
              <div id="recaptcha"></div>
              <div className="mt-[15px] p-auto">
                <Button
                  type="primary"
                  className="w-[310px] h-[50px] bg-[#BC2228] hover:!bg-[#dc1313] text-[16px]"
                  onClick={verifyOTP}
                >
                  Sign Up
                </Button>
              </div>

              <div className="mt-4">
                <p className="text-center text-[#5D5A6F] text-[14px]">
                  Bạn đã có tài khoản?{" "}
                  <a className="text-[#BC2228] cursor-pointer">Đăng nhập</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
