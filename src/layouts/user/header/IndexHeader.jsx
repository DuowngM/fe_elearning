import { useEffect, useState } from "react";

import HeaderUser from "./HeaderUser";

function IndexHeader() {
  const [show, setShow] = useState(false);

  const handleScrollPage = () => {
    // Lấy ra vị trí cuộn trang so với đầu màn hình trình duyệt
    const position = window.pageYOffset;
    // Kiểm tra nếu vị trí scroll cách đầu màn hình 250px thì hiển thị button backtop
    if (position >= 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    // Lắng nghe sự kiện cuộn màn hình
    window.addEventListener("scroll", handleScrollPage);
    // Hủy lắng nghe sự kiện scroll khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScrollPage);
    };
  });
  return show ? (
    <div className=" bg-white sticky top-0 z-10 shadow-lg" style={{ transition: "0.2s all ease" }}>
      <HeaderUser />
    </div>
  ) : (
    <div className=" bg-white sticky top-0 z-10" style={{ transition: "0.2s all ease" }}>
      <HeaderUser />
    </div>
  );
}

export default IndexHeader;
