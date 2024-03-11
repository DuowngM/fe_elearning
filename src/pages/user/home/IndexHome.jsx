import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";
import studensBanner from "../../../../public/images/studens_banner.jpg";
import contract from "../../../../public/images/Contract.jpg";
import bootcamIcon from "../../../../public/images/Contract.jpg";
import people from "../../../../public/images/people.jpg";
import verify from "../../../../public/images/verify.jpg";
import teacher from "../../../../public/images/teacher.jpg";
import teacherQuang from "../../../../public/images/teacher_quang.png";
import teacherTung from "../../../../public/images/teacher_tung.png";
import teacherDung from "../../../../public/images/teacher_dung.png";
import teacherLam from "../../../../public/images/teacher_lam.png";
import book from "../../../../public/images/book.jpg";
import personBg from "../../../../public/images/person_bg.png";
import IconDone from "../../../../public/images/IconDone.svg";
import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function IndexHome() {
  //#region redux
  const allCourses = useSelector((state) => state.courseSlice);
  const dispatch = useDispatch();
  //#endregion
  useEffect(() => {
    dispatch(getAllCoursesAPI({ page: 0, size: 6 }));
  }, []);
  // component Phương pháp đào tạo lập trình ưu việt
  const dataStaticTranding = [
    {
      title: "Coding Bootcamp",
      children: [
        {
          text: "CAM KẾT CÓ VIỆC LÀM bằng HỢP ĐỒNG, học xong là có việc ngay (mức lương lên tới 10 - 12 triệu)",
        },
        {
          text: "Giảm thiểu tối đa chi phí",
        },
        {
          text: "Nhanh chóng đi làm tại doanh nghiệp",
        },
        {
          text: "Phát triển tư duy nền tảng bền vững",
        },
      ],
    },
    {
      title: "Phương pháp “Học Đảo Ngược”",
      children: [
        {
          text: "Lấy học viên làm trung tâm - lộ trình CÁ NHÂN HOÁ cho mỗi người",
        },
        {
          text: "Hiểu sâu, nhớ lâu, vững lí thuyết, giỏi thực hành",
        },
        {
          text: "Duy trì liên tục kèm cặp trực tiếp 1-1 với giảng viên, mentor",
        },
      ],
    },
    {
      title: "Training on Job",
      children: [
        {
          text: "Trải nghiệm trực tiếp các hoạt động và dự án cùng RikkeiSoft và các Doanh nghiệp  đối tác",
        },
        {
          text: "Tạo CV & Online Profile",
        },
        {
          text: "Tư vấn về lộ trình nghề nghiệp và xu hướng công nghệ (phù hợp vị trí nào)",
        },
        {
          text: "Hướng dẫn kĩ năng phỏng vấn",
        },
        {
          text: "Ngày hội tuyển dụng",
        },
      ],
    },
  ];

  const dataAdvantage = [
    {
      icon: contract,
      title: "Cam kết việc làm bằng hợp đồng",
      text: "Cam kết bằng hợp đồng việc làm cho học viên, mức lương khởi điểm lên tới 8 chữ số",
    },
    {
      icon: bootcamIcon,
      title: "Mô hình Coding Bootcamp",
      text: "Hoàn thiện kiến thức, kỹ năng thực hành toàn diện. Có ít nhất 2 Project sau khoá học",
    },
    {
      icon: people,
      title: "Lộ Trình Cá Nhân Hoá",
      text: "Chương trình học bài bản, dễ hiểu, sát thực tế và phù hợp với nhu cầu, mục tiêu của từng học viên",
    },
    {
      icon: verify,
      title: "Được “cầm tay chỉ code”",
      text: "Các giảng viên, mentor xuất thân từ các tập đoàn công nghệ lớn trực tiếp giảng dạy ",
    },
    {
      icon: teacher,
      title: "Phương pháp học “Đảo Ngược”",
      text: "Giúp nhân đôi hiệu quả, hiểu sâu, nhớ lâu, chắc nền tảng lập trình và thực hành bài bản",
    },
    {
      icon: book,
      title: "Hoàn thiện bộ kỹ năng “Sống Còn”",
      text: "Tư duy lập trình, hoàn thiện CV, trả lời phỏng vấn, quản lí công việc, tư duy giải quyết vấn đề,...",
    },
  ];

  const listTeacher = [
    {
      img: teacherQuang,
      name: "Nguyễn Duy Quang",
      role: "Trưởng phòng đào tạo",
      detail: "Kỹ sư Công Nghệ thông tin Đại học Bách Khoa Hà Nội",
      certificate: "Chứng chỉ Oracle - OCA",
      certificateGlobal: "Chứng chỉ Aptech toàn cầu",
      Pedagogy: "Chứng chỉ sư phạm",
    },
    {
      img: teacherTung,
      name: "Tạ Sơn Tùng",
      role: "Cố vấn",
      detail: "Chủ tịch HĐQT Rikkeisoft",
      certificate: "Top 30 Forbes Under 30, 2015",
    },
    {
      img: teacherDung,
      name: "Phan Thế Dũng",
      role: "Cố vấn",
      detail: "CEO Rikkeisoft",
      certificate: "Đại học Bách Khoa Hà Nội & Keio Japan",
    },
    {
      img: teacherLam,
      name: "Nguyễn Viết Lâm",
      role: "Cố vấn",
      detail: "Phó tổng giám đốc Rikkeisoft",
      certificate: "CEO Rikkei Academy",
    },
  ];

  return (
    <>
      <Box className="w-full ">
        {/* ----------------------------------------------------- banner ---------------------------------------------------------------- */}
        <Box className=" bg-[#231651] ">
          <Stack
            className="flex max-w-[1500px] mx-auto mt-4 items-center justify-between"
            direction={{ xs: "column", sm: "row" }}
            sx={{ marginX: "auto", marginTop: "1rem" }}
          >
            <Box>
              <Typography
                component="p"
                variant="h4"
                sx={{
                  color: "white",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  lineHeight: "4rem",
                }}
              >
                Khóa Học Lập Trình Từ Con Số 0 <br /> Tự Tin Đi Làm Sau 6 Tháng
              </Typography>
              <Stack direction={"column"}>
                <div className="align-middle">
                  <div className="inline-block mr-[10px]">
                    <img
                      src="../../../../public/images/icon-check 1.png"
                      alt=""
                    />
                  </div>
                  <span className=" text-white text-xl leading-12 w-full">
                    Cam kết có việc làm
                  </span>
                </div>

                <div>
                  <div className="inline-block mr-[10px]">
                    <img
                      src="../../../../public/images/icon-check 1.png"
                      alt=""
                    />
                  </div>
                  <span className=" text-white leading-12 text-xl">
                    Chắc nền tảng, giỏi thực hành - Có ít nhất 2 Project sau
                    khóa học
                  </span>
                </div>

                <div>
                  <div className="inline-block mr-[10px]">
                    <img
                      src="../../../../public/images/icon-check 1.png"
                      alt=""
                    />
                  </div>
                  <span className=" text-white leading-12 text-xl">
                    Tốt nghiệp chinh phục công việc LƯƠNG 8 CHỮ SỐ
                  </span>
                </div>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ marginTop: 4 }}
                className="w-full mt-[42px]"
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#BC2228",
                    fontSize: "0,5rem",
                  }}
                >
                  {" "}
                  Nhận tư vấn 1:1
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "0,5rem",
                    fontWeight: "400",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Kiểm tra độ phù hợp
                </Button>
              </Stack>
            </Box>
            <img src={personBg} alt="" className="w-1/2" />
          </Stack>
        </Box>
        {/* video Dream */}
        <div className="w-full h-[650px] ">
          <div className="  max-h-[550px] h-full bg-[#F2F2F2] py-40  flex items-center justify-center">
            <div className="max-w-[1500px] h-full flex items-center justify-center">
              <div className="mr-[100px] w-1/2 ">
                <div className="w-full h-[400px] bg-[#B4B4B4]"></div>
              </div>
              <div className="w-1/2">
                <div className="w-3/4">
                  <h1 className="font-bold text-2xl text-[#BC2228] leading-[3rem]">
                    Rikkei Education - Where the dreams come true
                  </h1>
                  <div className="mt-7 flex flex-col gap-4">
                    <div className="align-middle">
                      <p className=" text-[#0A033C] text-lg leading-12 w-full">
                        Rikkei Education cam kết cung cấp nền tảng giáo dục và
                        đào tạo hiện đại, đưa công nghệ thông tin đến thế hệ trẻ
                        Việt Nam. Chúng tôi mong muốn trang bị cho các bạn đầy
                        đủ kiến thức và kỹ năng cần thiết, đồng thời khuyến
                        khích, thúc đẩy các bạn để phát triển sự nghiệp, nhằm
                        biến ước mơ của các bạn thành hiện thực.
                      </p>
                    </div>
                  </div>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{ marginTop: 4 }}
                    className="w-full mt-[42px]"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: "#BC2228",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      Nhận tư vấn 1:1
                    </Button>

                    <Button variant="outlined" sx={{ fontSize: "1rem" }}>
                      Kiểm tra độ phù hợp
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- Video bài giảng chất lượng cao ------------------------------------------------- */}
        <div className="max-w-[1500px] mx-auto">
          <div className="pb-40">
            <div className="text-center">
              <h2 className="text-[#BC2228] text-5xl mb-[40px] font-bold">
                Video bài giảng chất lượng cao
              </h2>
              <p className="text-[#231651]  leading-7">
                High-definition video is video of higher resolution and quality
                than standard-definition. While there is no standardized meaning
                for high-definition, generally any video image with considerably
                more than <br /> 480 vertical scan lines or 576 vertical lines
                is considered high-definition.
              </p>
            </div>

            <div className="mt-8 w-full relative ">
              <div className="w-full  ">
                <img
                  src={studensBanner}
                  alt=""
                  className="w-full m-auto rounded-md"
                />
              </div>
              <img
                className="absolute z-[-100] bottom-2/3 -top-10 left-[70%] "
                src="../../../../public/images/pattern.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------- Phương pháp đào tạo lập trình ưu việt ------------------------------------------ */}
        <Box className="w-full bg-[#F8F7FA] my-32">
          <div className="max-w-[1500px] mx-auto  py-32">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "#BC2228",
                marginBottom: 8,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Phương pháp đào tạo lập trình ưu việt
            </Typography>
            <Grid container spacing={8}>
              {dataStaticTranding.map((item) => (
                <>
                  <Grid item xs={4} sx={{ minHeight: "400px" }}>
                    <Paper
                      variant="elevation"
                      sx={{ padding: 3, minHeight: "100%" }}
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
                        {item.children.map((item) => (
                          <>
                            <Stack direction="row">
                              <img
                                src={IconDone}
                                alt=""
                                className="mr-3 self-start"
                              />
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
                          </>
                        ))}
                      </Stack>
                    </Paper>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
        </Box>

        {/* ----------------------------------------------------------- Ưu điểm vượt trội khi học lập trình tại Rikkei Academy --------------------------- */}
        <Box className="w-full">
          <div className="max-w-[1500px] mx-auto  py-32">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "#BC2228",
                marginBottom: 8,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Ưu điểm vượt trội khi học lập trình tại Rikkei Academy
            </Typography>
            <Grid container spacing={4}>
              {dataAdvantage.map((item) => (
                <>
                  <Grid item xs={4} sx={{ minHeight: "200px" }}>
                    <img
                      src={item.icon}
                      alt=""
                      className="mr-3 self-start w-12 h-12"
                    />
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
                </>
              ))}
            </Grid>
          </div>
        </Box>

        {/* ----------------------------------------------------------- Khóa học và bài giảng chất lượng cao ------------------------------------------ */}
        <Box className="w-full bg-[#F8F7FA]">
          <div className="max-w-[1800px] mx-auto  py-32">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "#BC2228",
                marginBottom: 3,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Khóa học và bài giảng chất lượng cao
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#5D5A6F",
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </Typography>
            <Grid container spacing={8}>
              {dataAdvantage.map((item) => (
                <>
                  <Grid item xs={6}>
                    <div className="w-full h-96 bg-[#D9D9D9]"></div>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <Typography
                        component="h4"
                        variant="h6"
                        sx={{
                          fontWeight: "medium",
                          color: "#231651",
                          marginY: 1,
                          lineHeight: 3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          fontSize: "0,5rem",
                          fontWeight: "500",
                          color: "#BC2228",
                          borderColor: "#BC2228",
                          padding: "0.3rem",
                        }}
                      >
                        Truy cập ngay
                      </Button>
                    </Stack>
                    <Typography
                      sx={{
                        color: "#231651",
                        fontWeight: 600,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Grid>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginTop: 6 }}
              justifyContent={"center"}
              className="w-full mt-11"
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#BC2228",
                  fontSize: "0,5rem",
                }}
              >
                Hiện tất cả khóa học
              </Button>
            </Stack>
          </div>
        </Box>
        {/* ----------------------------------------------------------Tài liệu chuyên môn chất lượng cao ---------------------------------------------- */}
        <Box className="w-full bg-[#F8F7FA]">
          <div className="max-w-[1800px] mx-auto  py-32">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "#BC2228",
                marginBottom: 3,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Tài liệu chuyên môn chất lượng cao
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#5D5A6F",
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              A lesson or class is a structured period of time where learning is
              intended to occur. It involves one or more students being taught
              by a teacher or instructor.
            </Typography>
            <Grid container spacing={8}>
              {dataAdvantage.map((item) => (
                <>
                  <Grid item xs={6}>
                    <div className="w-full h-96 bg-[#D9D9D9]"></div>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <Typography
                        component="h4"
                        variant="h6"
                        sx={{
                          fontWeight: "medium",
                          color: "#231651",
                          marginY: 1,
                          lineHeight: 3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          fontSize: "0,5rem",
                          fontWeight: "500",
                          color: "#BC2228",
                          borderColor: "#BC2228",
                          padding: "0.3rem",
                        }}
                      >
                        Truy cập ngay
                      </Button>
                    </Stack>
                    <Typography
                      sx={{
                        color: "#231651",
                        fontWeight: 600,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
        </Box>
        <Box className="w-full  my-32">
          <div className="max-w-[1800px] mx-auto  py-32">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "#BC2228",
                marginBottom: 8,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Đội ngũ giảng viên, cố vấn chuyên môn cao
            </Typography>
            <Grid container spacing={8}>
              {listTeacher.map((item) => (
                <>
                  <Grid item xs={3} sx={{ minHeight: "800px" }}>
                    <Paper
                      variant="elevation"
                      sx={{ padding: 3, minHeight: "100%" }}
                    >
                      <div className="w-full h-80 ">
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
                          {item.name}
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
              ))}
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default IndexHome;
