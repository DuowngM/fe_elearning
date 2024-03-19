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
      >
        <Stack direction={"row"}>
          <CardMedia
            component="img"
            alt="green iguana"
            image={import.meta.env.VITE_API_URL_IMG + item.image}
            className="lg:!w-3/4 md:!w-4/6 lg:h-[200px] md:h-[150px]" 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className="lg:!text-lg md:!text-base">
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
          <div
            className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end md:w-10 md:h-10"
            onClick={navigateDetail}
          >
            <img src={playBorder} alt="" width={18} height={18} className="md:!h-6 md:!w-6"/>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
