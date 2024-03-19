import React, { Fragment, useState } from "react";
import Cookies from "js-cookie";
import { notify } from "../../utils/notification";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
export default function CardCourse({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const hoverStyle = {
    transform: isHovered ? "scale(1.05)" : "none",
    transition: "transform 0.3s ease-in-out",
    boxShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.2)" : "",
  };
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
    if (!accessToken || !userInfo) {
      return notify("error", "Đăng nhập để học khóa này");
    }

    navigate(`/detailcourse/${item.id}`);
  };

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: "100%",
          minHeight: "300px",
          cursor: "pointer",
          ...hoverStyle,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            height="280"
            image={import.meta.env.VITE_API_URL_IMG + item.image}
            sx={{ objectFit: "fill" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span className="font-bold"> {item.title}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.subDescription}
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              <Rating name="read-only" value={5} readOnly />
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          <button
            onClick={handleLearn}
            className="border border-[#BC2228] text-[#BC2228] bg-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-rikkei hover:text-white transition duration-300 ease-in-out"
          >
            Học ngay
          </button>
        </CardActions>
      </Card>
    </Grid>
  );
}
