import { Button } from "antd";
import CardCourse from "../../../components/card-course/CardCourse";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";

function IndexHome() {
  //#region redux
  const allCourses = useSelector((state) => state.courseSlice);
  const dispatch = useDispatch();
  //#endregion
  useEffect(() => {
    dispatch(getAllCoursesAPI({ page: 0, size: 6 }));
  }, []);
  return (
    <div className="max-w-[1500px] h-[5000px] mx-[90px]">
      {/* Banner Top  */}
      <div className="w-full flex items-center">
        <div className="w-1/2 ">
          <div>
            <h1 className="font-bold text-[30px] text-[#0A033C] leading-14">
              Khóa Học Lập Trình Từ Con Số 0 <br /> Tự Tin Đi Làm Sau 6 Tháng
            </h1>
            <div>
              <div className="align-middle">
                <div className="inline-block mr-[10px]">
                  <img src="/images/icon-check 1.png" alt="" />
                </div>
                <span className="text-[14px] text-[#000] leading-12 w-full">
                  Chắc nền tảng, giỏi thực hành – Có ít nhất 2 Project sau khóa
                  học
                </span>
              </div>

              <div>
                <div className="inline-block mr-[10px]">
                  <img src="/images/icon-check 1.png" alt="" />
                </div>
                <span className="text-[14px] text-[#000] leading-12">
                  Tốt nghiệp chinh phục công việc LƯƠNG 8 CHỮ SỐ
                </span>
              </div>

              <div>
                <div className="inline-block mr-[10px]">
                  <img src="/images/icon-check 1.png" alt="" />
                </div>
                <span className="text-[14px] text-[#000] leading-12">
                  Nắm chắc vị trí việc làm tại Rikkeisoft với chứng chỉ tiếng
                  Nhật từ N3
                </span>
              </div>
            </div>

            <div className="w-full mt-[42px]">
              <Button
                type="primary"
                className="bg-[#BC2228] w-[170px] h-[40px] mr-[60px]"
              >
                Nhận tư vấn 1:1
              </Button>
              <Button
                type="secondary"
                className="border-[#BC2228] text-[#BC2228] w-[170px] h-[40px]"
              >
                Kiểm tra độ phù hợp
              </Button>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center ">
          <img src="/images/header-right1.png" alt="" />
        </div>
      </div>

      {/* Banner Center  */}

      <div className="mt-[90px]">
        <div className="text-center">
          <h2 className="text-[#0A033C] text-[30px] mb-[60px] font-bold">
            Video bài giảng chất lượng cao
          </h2>
          <p>
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized <br /> meaning
            for high-definition, generally any video image with considerably
            more than <br /> 480 vertical scan lines or 576 vertical lines is
            considered high-definition.
          </p>

          <Button
            type="primary"
            className="w-[150px] h-[50px] bg-[#BC2228] mt-[30px]"
          >
            Visit Courses
          </Button>
        </div>

        <div className="mt-[40px] w-full relative ">
          <div className="w-full p-[20px] ">
            <img
              className="m-auto rounded-md"
              src="/images/background-video-course.jpg"
              alt=""
            />
          </div>
          <img
            className="absolute z-[-100] bottom-2/3 -top-10 left-[70%] "
            src="/images/pattern.png"
            alt=""
          />

          <div className="flex w-full px-[250px] justify-around mt-[30px]">
            <div className="flex items-center">
              <img src="/images/icon-audio.png" alt="" className="mr-[20px]" />
              <span className="ml-[10px] text-[18px] whitespace-nowrap text-[#0A033C] font-bold">
                Audio Classes
              </span>
            </div>
            <div className="flex items-center">
              <img src="/images/icon-live.png" alt="" className="mr-[20px]" />
              <span className="whitespace-nowrap text-[18px] text-[#0A033C] font-bold">
                High Quality Classes
              </span>
            </div>
            <div className="flex items-center">
              <img src="/images/icon-record.png" alt="" className="mr-[20px]" />
              <span className="whitespace-nowrap text-[18px] text-[#0A033C] font-bold">
                Record Classes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Courses List  */}
      <div className="w-full mt-[80px]">
        <div className="m-auto">
          <h2 className="text-center mb-[20px] text-[30px] font-bold text-[#0A033C]">
            Qualified lessons for students
          </h2>
          <p className="text-center">
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students <br /> being
            taught by a teacher or instructor.
          </p>
        </div>

        <div>
          {/* <div className="text-center w-full mt-[40px]">
            <Button className="w-[140px] h-[50px] hover!:border-[#BC2228] text-[14px] font-medium">
              Part-time
            </Button>
            <Button
              type="primary"
              className="w-[140px] h-[50px] bg-[#BC2228] text-white mx-[15px] text-[14px] font-medium"
            >
              Fulltime
            </Button>
            <Button className="w-[140px] h-[50px] text-[14px] font-medium">
              PTIT
            </Button>
          </div> */}

          <div className="w-full mt-[60px]">
            <div className="grid gap-4 gap-y-10 grid-cols-3 grid-rows-2">
              {allCourses?.courses?.map((item, index) => {
                return <CardCourse key={index} item={item} />;
              })}
            </div>

            <div className="flex justify-center mt-[84px]">
              <Button
                type="primary"
                className="w-[184px] h-[50px] bg-[#BC2228]"
              >
                Visit more classes
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center mt-[220px]">
        <div className="w-1/2 ">
          <div>
            <h2 className="font-bold text-[26px] text-[#0A033C] leading-14 mb-[30px]">
              Rikkei Education – where dreams come true
            </h2>
            <span className="text-[14px] text-[#5D5A6F]">
              Rikkei Education cam kết cung cấp nền tảng giáo dục và đào tạo
              hiện đại, <br /> đưa công nghệ thông tin đến thế hệ trẻ Việt Nam.
              <br /> Chúng tôi mong muốn trang bị cho các bạn đầy đủ kiến thức
              và kỹ năng cần thiết,
              <br /> đồng thời khuyến khích, thúc đẩy các bạn để phát triển sự
              nghiệp,
              <br /> nhằm biến ước mơ của các bạn thành hiện thực.
            </span>
          </div>
        </div>

        <div className="w-1/2 flex justify-center ">
          <img src="/images/left-info.jpg" alt="" />
        </div>
      </div>

      <div className="w-full flex items-center mt-[220px]">
        <div className="w-1/2 flex justify-center ">
          <img src="/images/personal-left.jpg" alt="" />
        </div>

        <div className="w-1/2 ">
          <div>
            <h2 className="font-bold text-[26px] text-[#0A033C] leading-14 mb-[30px]">
              Want to get more knowledge? Join us
            </h2>
            <span className="text-[14px] text-[#5D5A6F]">
              High-definition video is video of higher resolution and quality
              than standard-definition.
              <br /> While there is no standardized meaning for high-definition,
              generally any video.
            </span>
          </div>
          <div className="mt-[30px]">
            <Button className="w-[186px] h-[50px] bg-[#BC2228] text-white">
              Career Information
            </Button>
          </div>
        </div>
      </div>
      {/* <IndexCourse /> */}
    </div>
  );
}

export default IndexHome;
