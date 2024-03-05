import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import BackTop from "./components/backtop";
import routesConfig from "./routes/routes.config";
import CourseDetailMain from "./pages/user/detailCourse/CourseDetailMain";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const renderRoutes = (routes) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <>
      <Routes>{renderRoutes(routesConfig)}</Routes>
      <CourseDetailMain />
      <BackTop />
    </>
  );
}

export default App;
