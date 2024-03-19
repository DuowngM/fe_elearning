import React, { useState } from "react";
import { Chip, Grid, Paper, Stack, Typography } from "@mui/material";
export default function ListTeacher({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    transform: isHovered ? "scale(1.05)" : "none",
    transition: "transform 0.3s ease-in-out",
    boxShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.2)" : "",
  };
  return (
    <>
      {" "}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{ minHeight: "800px", cursor: "pointer" }}
      >
        <Paper
          variant="elevation"
          sx={{ padding: 3, minHeight: "100%", ...hoverStyle }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-80">
            <img src={item.img} alt="" className="h-full w-full" />
          </div>
          <Stack
            direction={"column"}
            sx={{ mt: 2 }}
            alignItems={"center"}
            paddingX={"1.4rem"}
            spacing={1}
          >
            <Typography
              component="h4"
              variant="h6"
              sx={{
                fontWeight: "medium",
                color: "#231651",
                textAlign: "center",
                fontSize: "1.4rem",
              }}
            >
              <span className="font-bold"> {item.name}</span>
            </Typography>
            <Chip
              label={item.role}
              variant="outlined"
              sx={{
                backgroundColor: "#F8F7FA",
                borderColor: "#C1BCD1",
                color: "#231651",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
            />
            <Typography
              sx={{
                color: "#231651",
                fontWeight: 600,
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {item.detail}
            </Typography>
            <Typography
              sx={{
                color: "#231651",
                fontWeight: 600,
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {item?.certificate}
            </Typography>
            <Typography
              sx={{
                color: "#231651",
                fontWeight: 600,
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {item?.certificateGlobal}
            </Typography>
            <Typography
              sx={{
                color: "#231651",
                fontWeight: 600,
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {item?.Pedagogy}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}
