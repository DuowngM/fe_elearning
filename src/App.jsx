import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import PrivateRouter from "./routes/PrivateRouter";
import HomeAdmin from "./pages/admin/home";
import Contact from "./pages/admin/contact";
import { useEffect } from "react";
import BackTop from "./components/backtop";
import CourseIndex from "./pages/admin/course-index";
import Session from "./pages/admin/session";
import DetailCourse from "./pages/admin/edit-course";
import IndexUser from "./pages/user/IndexUser";
import DetailCourseUser from "./pages/user/detailCourse/DetailCourseUser";

function App() {
  const location = useLocation();

  // Hiệu ứng mượt khi scroll màn hình
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<HomeAdmin />} />
          <Route path="course" element={<CourseIndex />} />
          <Route path="contact" element={<Contact />} />
          <Route path="session" element={<Session />} />
          <Route path="course/:id" element={<DetailCourse />} />
        </Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/" element={<IndexUser />}>
          <Route path="/detailCourse/:id" element={<DetailCourseUser />} />
        </Route>
      </Routes>
      <BackTop />
    </>
  );
}

export default App;
