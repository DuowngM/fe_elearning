import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function FooterUser() {
  return (
    <div className="bg-[#bc2228] text-white pt-[50px] pb-[30px]">
      <div className="footer_container max-w-[1500px] mx-auto">
        <div className="footer_about flex gap-14">
          <div className="main_about">
            <img
              src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logorikkei.png"
              alt="logo footer"
              className="h-[74px] block"
            />
            <div className="main_content flex flex-col gap-2 mt-5">
              <h2>
                <b>Công ty TNHH Rikkei Education</b>
              </h2>
              <p className="flex items-center">
                <ArrowRightIcon />{" "}
                <span>
                  Tổ chức quản lý trang thông tin: Công ty TNHH Rikkei Education
                </span>
              </p>
              <p className="flex items-center">
                <ArrowRightIcon />{" "}
                <span>
                  Quản lý trang thông tin: Nguyễn Văn Nam (phòng Marketing)
                </span>
              </p>
              <p className="location">
                Địa chỉ: Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng,quận Nam Từ
                Liêm, Hà Nội
              </p>
              <p className="hotline">Hotline: 0862 069 233</p>
              <p className="email">Email: academy@rikkeisoft.com</p>
              <div className="social_footer flex gap-2">
                <FacebookIcon />
                <YouTubeIcon />
              </div>
            </div>
          </div>
          <ul className="flex justify-around w-full">
            <li>
              <h2>
                <b>Khóa học</b>
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Cho người mới bắt đầu
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Lập trình viên nhật bản
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Kỹ sư CNTT - PTIT
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Data Analysis - HUST
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  IT Fresher - Rikkei Certificate
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <b>Tài nguyên</b>
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Blog
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Kiến thức chuyên môn
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Khám phá nhật bản
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Thông tin sự kiện
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  What&apos;s New - What&apos;s Next?
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <b>Vì sao chọn Rikkei Education</b>
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Về Rikkei Education
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Hệ sinh thái Rikkei
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Nhân sự Rikkei Education
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Cộng đồng RA Alumni
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Ươm mầm xanh & CSR
                </li>
                <li className="hover:text-orange-400 hover:cursor-pointer">
                  Cơ hội nghề nghiệp
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="copy_right">
          <p className="mt-20 text-center">
            Copyright 2024 © Rikkei Academy All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterUser;
