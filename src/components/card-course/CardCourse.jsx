import React, { Fragment } from "react";
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
  Typography,
} from "@mui/material";
import { object } from "prop-types";
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
    navigate(`/detailcourse/${item.id}`);
  };

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: "100%",
          minHeight: "300px",
        }}
        className="lg:h-full"
      >
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            height="280"
            image={import.meta.env.VITE_API_URL_IMG + item.image}
            sx={{ objectFit: "fill" }}
            className="!lg:h-full"
          />
          <CardContent className="lg:py-0">
            <Typography gutterBottom variant="h5" component="div" className="!text-xl">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.subDescription}
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          <Button
            className=""
            color="error"
            size="large"
            variant="outlined"
            onClick={handleLearn}
          >
            Học ngay
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
