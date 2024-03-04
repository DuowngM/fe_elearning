import Contact from "../pages/admin/contact";
import CourseIndex from "../pages/admin/course-index";
import DetailCourse from "../pages/admin/edit-course";
import HomeAdmin from "../pages/admin/home";
import Session from "../pages/admin/session";
import IndexUser from "../pages/user/IndexUser";
import DetailCourseUser from "../pages/user/detailCourse/DetailCourseUser";
import PrivateRouter from "./PrivateRouter";

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
    children: [{ path: "detailCourse/:id", element: <DetailCourseUser /> }],
  },
  //thêm các routes khác ở đây
];

export default routesConfig;
