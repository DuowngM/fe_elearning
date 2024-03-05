import React from "react";
import { Button } from "antd";
import Cookies from "js-cookie";
import { notify } from "../../utils/notification";

export default function CardCourse({ item }) {
  const getAccessTokenFromCookies = () => {
    return Cookies.get("accessToken") || null;
  };
  const getUserInfoFromLocalStorage = () => {
    const userInfoString = localStorage.getItem("user");
    if (userInfoString) {
      return JSON.parse(userInfoString);
    }
    return null;
  };

  const handleLearn = () => {
    const accessToken = getAccessTokenFromCookies();
    const userInfo = getUserInfoFromLocalStorage();

    if (!accessToken || !userInfo) {
      notify("error", "Đăng nhập để học khóa này");
    }
  };
  return (
    <div className="text-center">
      <div className="ml-auto flex justify-center">
        <img
          className="w-[120px] h-[120px]"
          src={"http://10.101.44.218:8080/img/" + item.image}
        />
      </div>
      <h4 className="mt-[12px] font-semibold text-[#0A033C] ">{item.title}</h4>
      {/* <p className="mt-[10px] text-[#5D5A6F] text-[16px]">
        Standard 1 is a foundation Standard <br /> that reflects 7 important
        concepts...
      </p> */}
      <div className="mt-[55px]">
        <Button
          className="w-[162px] h-[44px] text-[16px] font-medium"
          onClick={handleLearn}
        >
          Class Detail
        </Button>
      </div>
    </div>
  );
}
