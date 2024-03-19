import playBorder from "/images/playBorder.svg";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
export default function SimilarCourses({ item }) {
  const navigate = useNavigate();
  const navigateDetail = () => {
    navigate(`/detailcourse/${item.id}`);
  };
  return (
    <Grid item xs={6}>
      <Card
        sx={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={navigateDetail}
      >
        <Stack direction={"row"}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={import.meta.env.VITE_API_URL_IMG + item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {item.title}
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </CardContent>
        </Stack>
        <CardActions
          sx={{
            alignSelf: "flex-end",
            width: "25%",
            justifyContent: "flex-end",
          }}
        >
          <div className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end">
            <img src={playBorder} alt="" width={18} height={18} />
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
