import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="bg-[#bc2228] text-white pt-12 pb-7">
      <div className="footer_container max-w-6xl mx-auto px-4">
        <div className="footer_about flex flex-col md:flex-row md:gap-14">
          <div className="main_about mb-8 md:mb-0">
            <img
              src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logorikkei.png"
              alt="logo footer"
              className="h-[74px] block"
            />
            <div className="main_content flex flex-col gap-2 mt-5">
              <h2 className="font-bold">Công ty TNHH Rikkei Education</h2>
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
                Địa chỉ: Tầng 7 tháp A toà Sông Đà, đường Phạm Hùng, quận Nam Từ
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
          <div className="flex flex-wrap justify-between w-full">
            <div className="footer_section mb-8 md:mb-0">
              <h2 className="font-bold">Khóa học</h2>
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
            </div>
            <div className="footer_section mb-8 md:mb-0">
              <h2 className="font-bold">Tài nguyên</h2>
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
            </div>
            <div className="footer_section">
              <h2 className="font-bold">Vì sao chọn Rikkei Education</h2>
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
            </div>
          </div>
        </div>

        <div className="copy_right mt-20 text-center">
          <p>Copyright 2024 © Rikkei Academy All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
