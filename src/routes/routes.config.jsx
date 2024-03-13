import CourseIndex from "../pages/admin/course-index";
import DetailCourse from "../pages/admin/detailCourse";
import HomeAdmin from "../pages/admin/home";
import IndexUser from "../pages/user/IndexUser";
import CourseDetailMain from "../pages/user/detailCourse/CourseDetailMain";
import IndexHome from "../pages/user/home/IndexHome";
import PrivateRouter from "./PrivateRouter";

const routesConfig = [
  {
    path: "/admin",
    element: <PrivateRouter />,
    children: [
      { path: "", element: <HomeAdmin /> },
      { path: "management", element: <CourseIndex /> },
      { path: "course/:id", element: <DetailCourse /> },
    ],
  },
  {
    path: "/",
    element: <IndexUser />,
    children: [
      { path: "detailCourse/:id", element: <CourseDetailMain /> },
      { path: "/", element: <IndexHome /> },
    ],
  },
  //thêm các routes khác ở đây
];

export default routesConfig;
