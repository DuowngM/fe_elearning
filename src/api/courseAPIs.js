import { notify } from "../utils/notification";
import { formDataAxios, jsonAxios } from "./api.base.url";
export const getAllCourses = async (page, searchValue, home) => {
  try {
    if (searchValue) {
      const response = await jsonAxios.get(
        `/api/v1/course/paging?page=${page}&size=4&title=${searchValue}`
      );
      return response.data;
    } else if (home) {
      const response = await jsonAxios.get(
        `/api/v1/course/paging?page=${page}&size=6`
      );
      return response.data;
    } else {
      const response = await jsonAxios.get(
        `/api/v1/course/paging?page=${page}&size=4`
      );
      return response.data;
    }
  } catch (error) {
    notify("error", "Có lỗi xảy ra khi lấy dữ liệu");
  }
};
export const addNewCourse = async (newCourse) => {
  let formData = new FormData();
  formData.append("title", newCourse.title);
  formData.append("imageFile", newCourse.imageFile);
  formData.append("description", newCourse.description);
  try {
    const response = await formDataAxios.post("/api/v1/course/save", formData);
    notify("success", "Thêm khóa học thành công");
    return response;
  } catch (error) {
    notify("error", "Có lỗi xảy ra khi thêm");
  }
};
export const deleteCourse = async (id) => {
  try {
    const response = await formDataAxios.delete(`/api/v1/course/${id}`);
    notify("success", "Xóa khóa học thành công");
    return response;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};
