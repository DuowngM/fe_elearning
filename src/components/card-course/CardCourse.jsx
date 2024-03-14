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
  Stack,
  Typography,
} from "@mui/material";
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

  console.log(import.meta.env.VITE_API_URL_IMG + item.image);

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: "100%",
          minHeight: "300px",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "space-between",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            height="280"
            image={import.meta.env.VITE_API_URL_IMG + item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.subDescription}
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          <Button color="error" size="large"  variant="outlined" onClick={handleLearn} >
            Học ngay
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
