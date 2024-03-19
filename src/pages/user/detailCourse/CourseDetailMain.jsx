import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getChaptersThunk } from "../../../redux/reducer/chapterSlice";
import { getLessonsThunk } from "../../../redux/reducer/lessonSlice";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";
import VideoComponent from "../../../components/video/VideoComponent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Cookies from "js-cookie";

const CourseDetailMain = () => {
  const chapters = useSelector((state) => state.chapterSlice.chapters);
  const lesson = useSelector((state) => state.lessonSlice.lesson);
  const similarCourses = useSelector((state) => state.courseSlice.courses);
  const [expanded, setExpanded] = useState("panel1");
  const [description, setDiscription] = useState("");
  const [sourceVideo, setSourceVideo] = useState(
    "https://www.youtube.com/embed/vdKE_Tz8cy0"
  );
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const getAuthToken = () => Cookies.get("accessToken");
    if (!getAuthToken()) {
      navigate("/");
    }
    dispatch(getChaptersThunk(id));
    dispatch(getLessonsThunk());
    dispatch(getAllCoursesAPI({ page: 0, size: 4 }));
  }, [dispatch, id]);
  // Nhóm dữ liệu lại
  const groupedContentItems = chapters?.map((chapter) => {
    return {
      ...chapter,
      lessons: lesson.filter((item) => item.chapterId === chapter.id),
    };
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          className="shadow-lg"
          sx={{
            backgroundColor: "#f8f8f8",
            paddingY: "0.5rem",
            overflow: "hidden",
            borderRadius: "1.5rem",
          }}
        >
          <Box className="my-0 mx-auto max-w-[1500px] xl:px-[20px] lg:px-[10px] md:px-2">
            <Stack spacing={2} sx={{ padding: "0.5rem" }}>
              <Breadcrumbs
                separator={
                  <NavigateNextIcon
                    fontSize="small"
                    sx={{ color: "#BC2228" }}
                  />
                }
                aria-label="breadcrumb"
              >
                <Link
                  underline="hover"
                  key="1"
                  color="#BC2228"
                  onClick={() => navigate("/")}
                  fontWeight={700}
                  fontSize={"1.5rem"}
                  className="cursor-pointer"
                >
                  Trang chủ
                </Link>
                <Link
                  underline="hover"
                  key="2"
                  color="#BC2228"
                  onClick={() => navigate("/course")}
                  fontWeight={700}
                  fontSize={"1.5rem"}
                  className="cursor-pointer"
                >
                  Khóa học
                </Link>
                <p
                  key="3"
                  className="text-[#BC2228] font-semibold text-2xl cursor-pointer"
                >
                  {chapters[0]?.courseName || "Coming Soon"}
                </p>
              </Breadcrumbs>
            </Stack>
            <Stack direction="row" justifyContent="space-between" space={4} className="lg:mx-2">
              <Box
                sx={{
                  borderRadius: "1rem",
                  overflow: `${sourceVideo ? "hidden" : "auto"}`,
                  width: "75%",
                  position: "relative",
                  maxWidth: "100%",
                }}
                className="xl:h-[610px] md:h-full"
              >
                {sourceVideo ? (
                  <div className="">
                    <VideoComponent sourceVideo={sourceVideo} />
                  </div>
                ) : (
                  <>
                    <div
                      className="ckEditor"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </>
                )}
              </Box>
              <Stack
                direction="column"
                sx={{
                  maxWidth: "20%",
                  width: "100%",
                }}
              >
                {groupedContentItems?.map((chapter) => (
                  <Accordion
                    sx={{ maxHeight: "50%" }}
                    className=" font-medium text-[#170F49]"
                    expanded={expanded === `panel${chapter.id}`}
                    onChange={handleChange(`panel${chapter.id}`)}
                    key={chapter.id}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `panel${chapter.id}` ? (
                          <RemoveIcon
                            fontSize="medium"
                            sx={{ color: "#BC2228" }}
                          />
                        ) : (
                          <AddIcon
                            fontSize="medium"
                            sx={{ color: "#BC2228" }}
                          />
                        )
                      }
                      aria-controls={`panel${chapter.id}-content`}
                      id={`panel${chapter.id}-header`}
                      sx={{
                        minHeight: "2rem",
                        color: "#BC2228",
                        borderRadius: "20px",
                        fontSize: "16px",
                      }}
                    >
                      <span className="font-bold">{chapter?.title}</span>
                    </AccordionSummary>
                    <div className="overflow-auto max-h-64 bg-white rounded-[20px] ">
                      <Divider />
                      {chapter?.lessons?.length > 0 ? (
                        chapter.lessons?.map((item) => (
                          <AccordionDetails
                            sx={{
                              height: "60px",
                              display: "flex",
                              justifyContent: "space-between",
                              cursor: "pointer",
                              alignItems: "center",
                              fontSize: "16px",
                            }}
                            key={item.id}
                            onClick={() => {
                              setSourceVideo(item.video);
                              setSelectedLessonId(item.id);
                              setDiscription(item.description);
                            }}
                          >
                            <p
                              className={`max-w-[80%] ${
                                selectedLessonId === item.id
                                  ? "text-red-500"
                                  : ""
                              }`}
                            >
                              {item?.title}
                            </p>
                            <div className="">
                              {item?.video ? (
                                <img
                                  src="/images/Playbtn.png"
                                  alt=""
                                  className="w-5 h-5"
                                />
                              ) : (
                                <MenuBookIcon className="text-rikkei" />
                              )}
                            </div>
                          </AccordionDetails>
                        ))
                      ) : (
                        <div style={{ padding: "12px 16px" }}>
                          Coming soon...
                        </div>
                      )}
                    </div>
                  </Accordion>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              maxWidth: "1500px",
              marginX: "auto",
              marginY: "auto",
              paddingBottom: "4rem",
              paddingTop: "2rem"
            }}
          >
            <Stack direction="column">
              <Box sx={{ color: "#0A033C" }}>
                <Typography component="h2" variant="h4">
                  {sourceVideo ? <p> Bài đọc </p> : <p> Video </p>}
                </Typography>
                <Typography component="p" className="text-base">
                  Cập nhật tháng 3/2024
                </Typography>
                <Typography
                  component="p"
                  className="text-base leading-10 max-h-[800px] overflow-y-auto"
                >
                  {sourceVideo ? (
                    <>
                      <div dangerouslySetInnerHTML={{ __html: description }} />
                    </>
                  ) : (
                    <>Coming soon...</>
                  )}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box> */}
        {/* <div className="w-full mb-60">
          <div className="max-w-[1500px] mx-auto my-0">
            <h1 className="text-3xl mb-5 font-semibold ">Khóa học khác</h1>
            <Grid container spacing={6}>
              {similarCourses?.map((item) => (
                <React.Fragment key={item.id}>
                  <SimilarCourses item={item} />
                </React.Fragment>
              ))}
            </Grid>
          </div>
        </div> */}
      </Box>
    </>
  );
};

export default CourseDetailMain;
