import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";
import LogoTeacher from "/images/LogoTeacher.jpg";
import LogoBag from "/images/LogoBag.jpg";
import LogoBook from "/images/LogoBook.jpg";
import LogoMessager from "/images/LogoMessager.jpg";
import CardCourse from "../../../components/card-course/CardCourse";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const allCourses = useSelector((state) => state.courseSlice.courses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //#endregion
  useEffect(() => {
    dispatch(getAllCoursesAPI({ page: 0, size: 6, home: "home" }));
  }, []);

  const dataAdvantage = [
    {
      icon: LogoTeacher,
      title: "Giảng viên, mentor hỗ trợ 24/7",
      text: "Mentor theo sát giúp học viên hoàn thành hết các nhiệm vụ trong ngày. Không bỏ rơi lại học viên trong bất kỳ trường hợp nào.",
    },
    {
      icon: LogoBook,
      title: "Thực chiến ngay trong quá trình học tập",
      text: "Tất cả học viên đều được thực chiến với ít nhất 2 dự án trước khi tốt nghiệp.",
    },
    {
      icon: LogoBag,
      title: "Bảo đảm việc làm sau khi kết thúc khóa học",
      text: "Bảo đảm học viên có việc làm ngay say khi tốt nghiệp. Ký kết việc làm theo thỏa thuận trong hợp đồng dịch vụ đào tạo.",
    },
    {
      icon: LogoMessager,
      title: "Hỗ trợ học viên ngay cả sau khi tốt nghiệp",
      text: "Hỗ trợ chuyên môn lâu dài giúp học viên có một sự nghiệp ổn định.",
    },
  ];
  return (
    <Box className="w-full ">
      {/* ----------------------------------------------------- banner ---------------------------------------------------------------- */}

      <Box
        className="flex max-w-[2000px] mx-auto mt-4 items-center justify-between"
        direction={{ xs: "column", sm: "row" }}
        sx={{ marginX: "auto", marginTop: "1rem" }}
      >
        <img src="/images/ClassBanner.png" alt="" className="w-full" />
      </Box>
      {/* ----------------------------------------------------------- Khóa học và bài giảng chất lượng cao ------------------------------------------ */}
      <Box className="w-full bg-[#F8F7FA]">
        <div className="max-w-[1500px] mx-auto  py-32">
          <Stack spacing={2} sx={{ marginBottom: "4rem" }}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" sx={{ color: "#BC2228" }} />
              }
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                key="1"
                color="#BC2228"
                fontWeight={700}
                fontSize={"1.5rem"}
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
              >
                Trang chủ
              </Link>
              <Link
                underline="hover"
                key="2"
                color="#BC2228"
                fontWeight={700}
                fontSize={"1.5rem"}
                onClick={() => navigate("/course")}
                sx={{ cursor: "pointer" }}
              >
                Khóa học
              </Link>
            </Breadcrumbs>
          </Stack>
          <Box
            sx={{
              maxWidth: "1600px",
              width: "100%",
              marginX: "auto",
              marginY: 0,
            }}
          >
            <Grid container spacing={8}>
              {allCourses?.map((item, index) => (
                <Fragment key={index}>
                  <CardCourse item={item} />
                </Fragment>
              ))}
            </Grid>
          </Box>
        </div>
      </Box>
      <Box className="w-full mt-24">
        <div className="max-w-[1200px] mx-auto  py-32">
          <Grid container spacing={8}>
            {dataAdvantage.map((item, index) => (
              <Fragment key={index}>
                <Grid item xs={3} sx={{ minHeight: "200px" }}>
                  <Stack
                    direction="column"
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <img src={item.icon} alt="" className="mr-3  w-12 h-12" />
                    <Typography
                      component="h4"
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#231651",
                        marginY: 1,
                        paddingX: 2,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#231651",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default CoursePage;
