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
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Để thêm nút yêu thích

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
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          minHeight: "300px",
          cursor: "pointer",
          ...hoverStyle,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="280"
          image={item.image}
          sx={{ objectFit: "fill" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <CardContent sx={{ flexGrow: 1 }}>
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
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button
              onClick={handleLearn}
              variant="contained"
              style={{ backgroundColor: "#BC2228", color: "#fff" }}
            >
              Học ngay
            </Button>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
}
