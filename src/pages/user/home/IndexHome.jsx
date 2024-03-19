import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";
import studensBanner from "/images/studens_banner.jpg";
import contract from "/images/Contract.jpg";
import bootcamIcon from "/images/BootcamIcon.jpg";
import people from "/images/people.jpg";
import verify from "/images/verify.jpg";
import teacher from "/images/teacher.jpg";
import book from "/images/book.jpg";
import teacherQuang from "/images/teacher_quang.png";
import teacherTung from "/images/teacher_tung.png";
import teacherDung from "/images/teacher_dung.png";
import teacherLam from "/images/teacher_lam.png";
import personBg from "/images/person_bg.png";
import Introducing from "/images/introducing.jpg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CardCourse from "../../../components/card-course/CardCourse";
import { useNavigate } from "react-router-dom";
import ListTeacher from "../../../components/listTeacher/ListTeacher";
import TraningMethods from "../../../components/traningMethods/TraningMethods";
import Advantages from "../../../components/advantages/Advantages";

function IndexHome() {
  //#region redux
  const allCourses = useSelector((state) => state.courseSlice.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //#endregion
  useEffect(() => {
    dispatch(getAllCoursesAPI({ page: 0, size: 6, home: "home" }));
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
          text: "Trải nghiệm trực tiếp các hoạt động và dự án cùng Rikkeisoft và các Doanh nghiệp  đối tác",
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
            className="flex max-w-[1500px] mx-auto mt-4 items-center justify-between md:px-[20px]"
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
                className=" md:text-2xl"
              >
                Khóa Học Lập Trình Từ Con Số 0 <br /> Tự Tin Đi Làm Sau 6 Tháng
              </Typography>
              <Stack direction={"column"}>
                <div className="align-middle">
                  <div className="inline-block mr-[10px]">
                    <img src="/images/icon-check 1.png" alt="" />
                  </div>
                  <span className=" text-white text-xl leading-12 w-full  md:text-base">
                    Cam kết có việc làm
                  </span>
                </div>

                <div>
                  <div className="inline-block mr-[10px]">
                    <img src="/images/icon-check 1.png" alt="" />
                  </div>
                  <span className=" text-white leading-12 text-xl  md:text-base">
                    Chắc nền tảng, giỏi thực hành - Có ít nhất 2 Project sau
                    khóa học
                  </span>
                </div>

                <div>
                  <div className="inline-block mr-[10px]">
                    <img src="/images/icon-check 1.png" alt="" />
                  </div>
                  <span className=" text-white leading-12 text-xl  md:text-base">
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
                <button className="bg-[#BC2228] border-none text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-white hover:text-rikkei transition duration-300 ease-in-out">
                  Nhận tư vấn 1:1
                </button>
                <button
                  onClick={() => navigate("/course")}
                  className="border border-[#BC2228] text-[#BC2228] bg-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-rikkei hover:text-white transition duration-300 ease-in-out"
                >
                  Các khóa học
                </button>
              </Stack>
            </Box>
            <img src={personBg} alt="" className="w-1/2 md:w-1/3" />
          </Stack>
        </Box>
        {/* video Dream */}

        <div className="w-full h-[650px]  ">
          <div className="  max-h-[550px] h-full bg-[#F2F2F2] py-40  flex items-center justify-center px-[20px] md:py-5 md:h-[400px] ">
            <div className="max-w-[1500px] h-full flex items-center justify-center ">
              <div className="mr-[100px] w-1/2 ">
                <div className="w-full h-[400px] bg-[#B4B4B4]  md:h-4/5">
                  <img src={Introducing} className="w-full h-full" alt="" />
                </div>
              </div>
              <div className="w-1/2 md:h-3/4 md:items-start md:flex" >
                <div className="w-3/4 md:h-full w-full">
                  <h1 className="font-bold text-2xl text-[#BC2228] leading-[3rem]  leading-4 md:text-lg">
                    Rikkei Education - Where the dreams come true
                  </h1>
                  <div className="mt-7 flex flex-col gap-4 md:mt-0">
                    <div className="align-middle">
                      <p className=" text-[#0A033C] text-3xl leading-12 w-full md:mt-0 md:text-sm">
                        Rikkei Education cam kết cung cấp nền tảng giáo dục và
                        đào tạo hiện đại, đưa công nghệ thông tin đến thế hệ trẻ
                        Việt Nam. Chúng tôi mong muốn trang bị cho các bạn đầy
                        đủ kiến thức và kỹ năng cần thiết, đồng thời khuyến
                        khích, thúc đẩy các bạn để phát triển sự nghiệp, nhằm
                        biến ước mơ của các bạn thành hiện thực.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center sm:flex-row gap-2 lg:gap-4 mt-4 lg:mt-[42px]">
                    <button className="bg-[#BC2228] border-none text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-[#BC2228]">
                      Nhận tư vấn 1:1
                    </button>
                    <button className="border border-[#BC2228] text-[#BC2228] bg-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-[#BC2228] hover:text-white">
                      Kiểm tra độ phù hợp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- Video bài giảng chất lượng cao ------------------------------------------------- */}
        <Box className="w-full bg-[#F8F7FA]">
          <div className="max-w-[1500px] mx-auto  py-32">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "#BC2228",
                marginBottom: 3,
                fontWeight: "bold",
                textAlign: "center",
              }}
              className="sm:text-[32px]"
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
              Rikkei Education tự hào có đội ngũ cố vấn và giảng viên xuất sắc,
              tin cậy, đảm bảo mang đến trải nghiệm học tập tuyệt vời nhất, giúp
              học viên phát triển toàn diện
            </Typography>
            {/* ----------------------------------------------------------- Khóa học và bài giảng chất lượng cao ------------------------------------------ */}
            <Box
              sx={{
                maxWidth: "1500px",
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

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginTop: 6 }}
              justifyContent={"center"}
              className="w-full mt-11"
            >
              <button
                className="bg-[#BC2228] text-white font-semibold cursor-pointer text-sm py-2 px-4 rounded hover:bg-white hover:text-[#BC2228] border border-transparent hover:border-[#BC2228] transition-colors duration-300"
                onClick={() => navigate("/course")}
              >
                Hiện tất cả khóa học
              </button>
            </Stack>
          </div>
        </Box>
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
              {dataStaticTranding?.map((item, index) => (
                <Fragment key={index}>
                  <TraningMethods item={item} />
                </Fragment>
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
                fontSize: { xs: "24px", sm: "30px", md: "36px" },
              }}
            >
              Ưu điểm vượt trội khi học lập trình tại Rikkei Academy
            </Typography>
            <Grid container spacing={4}>
              {dataAdvantage.map((item, index) => (
                <Fragment key={index}>
                  <Advantages item={item} />
                </Fragment>
              ))}
            </Grid>
          </div>
        </Box>

        <Box className="w-full  my-32">
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
              Đội ngũ giảng viên, cố vấn chuyên môn cao
            </Typography>
            <Grid container spacing={8}>
              {listTeacher?.map((item, index) => (
                <Fragment key={index}>
                  <ListTeacher item={item} />
                </Fragment>
              ))}
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default IndexHome;
