import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

export default function Advantages({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    transform: isHovered ? "scale(1.05)" : "none",
    transition: "transform 0.3s ease-in-out",
    boxShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.2)" : "",
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        minHeight: "200px",
        cursor: "pointer",
        ...hoverStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <img src={item.icon} alt="" style={{ width: "48px", height: "48px" }} />
      </div>
      <Typography
        component="h4"
        variant="h6"
        sx={{
          fontWeight: "medium",
          color: "#BC2228",
          marginY: 1,
        }}
      >
        {item.title}
      </Typography>
      <Typography
        sx={{
          color: "#231651",
          fontWeight: 600,
        }}
      >
        {item.text}
      </Typography>
    </Grid>
  );
}
