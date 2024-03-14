import React, { Fragment } from "react";
import Cookies from "js-cookie";
import { notify } from "../../utils/notification";
import { useNavigate } from "react-router";
import { Button, Grid, Stack, Typography } from "@mui/material";

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
    <Grid item xs={4}>
      <div className="rounded-lg shadow-md overflow-hidden w-full h-80">
        <img
          src={import.meta.env.VITE_API_URL_IMG + item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <Stack direction="row" spacing={2} alignItems="center" mt={2}>
        <Typography
          component="h4"
          variant="h6"
          className="text-lg font-medium text-gray-800"
        >
          {item.title}
        </Typography>
        <Button
          variant="outlined"
          className="text-base font-medium text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md shadow focus:outline-none"
          onClick={handleLearn}
        >
          Truy cập ngay
        </Button>
      </Stack>
      <Typography className="text-gray-600 mt-1">
        {item.subDescription}
      </Typography>
    </Grid>
  );
}
