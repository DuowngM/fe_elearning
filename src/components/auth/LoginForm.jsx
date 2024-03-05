import React, { useState } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Button, Input } from "antd";
import "react-quill/dist/quill.snow.css";
import "../../index.css";
import CloseIcon from "@mui/icons-material/Close";

export default function LoginForm({ closeForm, handleLogin }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    handleLogin({ phone, password });
  };
  return (
    <>
      <div className="overlay">
        <form className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded pb-[100px]">
          <CloseIcon
            onClick={closeForm}
            className="cursor-pointer hover:text-gray-500"
          />
          <div className="flex justify-between items-center">
            <img
              className="w-[200px]"
              src="../../../public/images/logo-rikkei2.png"
              alt=""
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mt-[40px]">
            <div className="border-r-2  ">
              <h1 className="text-[#0A033C] font-bold text-[30px] w-full h-[105px] leading-7 leading-[35px] mb-[40px]">
                Welcome to <br />
                RikkeiEdu Online Learning Platform
              </h1>

              <img src="../../../public/images/Login-side-icon.png" alt="" />
            </div>
            <div className="my-auto">
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="relative">
                <label htmlFor="">Password</label>
                <HttpsOutlinedIcon
                  sx={{ fontSize: "small" }}
                  className="absolute z-[999] top-2/4 transform translate-y-2.5 -translate-x-14"
                />
                <Input
                  type="password"
                  className="w-[310px] h-[50px] mt-2 focus:!border-[##f60d37] pl-[40px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-[15px] p-auto">
                <Button
                  type="primary"
                  className="w-[310px] h-[50px] bg-[#BC2228] hover:!bg-[#dc1313] text-[16px]"
                  onClick={login}
                >
                  Sign In
                </Button>
              </div>

              <div className="mt-4">
                <p className="text-center text-[#5D5A6F] text-[14px] mb-1">
                  Quên mật khẩu?
                </p>
                <p className="text-center text-[#5D5A6F] text-[14px]">
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
