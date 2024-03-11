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
    <Grid item xs={6}>
      <div className="w-full h-96 bg-[#D9D9D9]">
        <img
          src={import.meta.env.VITE_API_URL_IMG + item.image}
          className="w-full h-full"
        />
      </div>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Typography
          component="h4"
          variant="h6"
          sx={{
            fontWeight: "medium",
            color: "#231651",
            marginY: 1,
            lineHeight: 3,
          }}
        >
          {item.title}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontSize: "0,5rem",
            fontWeight: "500",
            color: "#BC2228",
            borderColor: "#BC2228",
            padding: "0.3rem",
          }}
          onClick={handleLearn}
        >
          Truy cập ngay
        </Button>
      </Stack>
      <Typography
        sx={{
          color: "#231651",
          fontWeight: 600,
        }}
      >
        {item.subDescription}
      </Typography>
    </Grid>
  );
}
