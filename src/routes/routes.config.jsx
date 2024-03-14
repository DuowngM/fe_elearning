import Contact from "../pages/admin/user_management";
import CourseIndex from "../pages/admin/course-index";
import DetailCourse from "../pages/admin/edit-course";
import HomeAdmin from "../pages/admin/home";
import Session from "../pages/admin/user_management";
import IndexUser from "../pages/user/IndexUser";
import CourseDetailMain from "../pages/user/detailCourse/CourseDetailMain";
import DetailCourseUser from "../pages/user/detailCourse/DetailCourseUser";
import IndexHome from "../pages/user/home/IndexHome";
import PrivateRouter from "./PrivateRouter";
import CoursePage from "../pages/user/coursepPage/CoursePage";

const routesConfig = [
  {
    path: "/admin",
    element: <PrivateRouter />,
    children: [
      { path: "", element: <HomeAdmin /> },
      { path: "course", element: <CourseIndex /> },
      { path: "contact", element: <Contact /> },
      { path: "session", element: <Session /> },
      { path: "course/:id", element: <DetailCourse /> },
    ],
  },
  {
    path: "/",
    element: <IndexUser />,
    children: [
      { path: "detailcourse/:id", element: <CourseDetailMain /> },
      { path: "/", element: <IndexHome /> },
      { path: "course", element: <CoursePage /> },
    ],
  },
  //thêm các routes khác ở đây
];

export default routesConfig;
