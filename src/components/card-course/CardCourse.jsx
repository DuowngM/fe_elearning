import React from "react";
import { Button } from "antd";
import Cookies from "js-cookie";
import { notify } from "../../utils/notification";
import { useNavigate } from "react-router";

export default function CardCourse({ item }) {
  const navigate = useNavigate();
  const getAccessTokenFromCookies = () => {
    return Cookies.get("accessToken") || null;
  };
  const getUserInfoFromLocalStorage = () => {
    const userInfoString = localStorage.getItem("user");
    if (userInfoString) {
      return userInfoString;
    }
    return null;
  };

  const handleLearn = () => {
    const accessToken = getAccessTokenFromCookies();
    const userInfo = getUserInfoFromLocalStorage();

    if (!accessToken || !userInfo)
      return notify("error", "Đăng nhập để học khóa này");
    navigate(`/detailCourse/${item.id}`);
  };

  return (
    <div className="text-center">
      <div className="ml-auto flex justify-center">
        <img className="" src={import.meta.env.VITE_API_URL_IMG + item.image} />
      </div>
      <h4 className="mt-[12px] font-semibold text-[#0A033C] ">{item.title}</h4>
      <p className="mt-[10px] text-[#5D5A6F] text-[16px]">
        Standard 1 is a foundation Standard <br /> that reflects 7 important
        concepts...
      </p>
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
