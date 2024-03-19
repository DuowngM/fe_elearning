import React, { Fragment, useState } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import IconDone from "/images/IconDone.svg";
export default function TraningMethods({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    transform: isHovered ? "scale(1.05)" : "none",
    transition: "transform 0.3s ease-in-out",
    boxShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.2)" : "",
  };
  return (
    <>
      <Grid item xs={4} sx={{ minHeight: "400px", cursor: "pointer" }}>
        <Paper
          variant="elevation"
          sx={{ padding: 3, minHeight: "100%", ...hoverStyle }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography
            component="h2"
            variant="h5"
            sx={{
              color: "#231651",
              fontWeight: "bold",
              marginBottom: 3,
            }}
          >
            {item.title}
          </Typography>
          <Stack spacing={2}>
            {item.children.map((item, index) => (
              <Fragment key={index}>
                <Stack direction="row">
                  <img src={IconDone} alt="" className="mr-3 self-start" />
                  <Typography
                    sx={{
                      color: "#231651",
                      fontWeight: 600,

                      width: "85%",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              </Fragment>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}
