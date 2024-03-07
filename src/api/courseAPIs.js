import { notify } from "../utils/notification";
import { formDataAxios, jsonAxios } from "./api.base.url";
export const getAllCourses = async (page, searchValue, size) => {
  try {
    if (searchValue) {
      const response = await jsonAxios.get(
        `/api/v1/course/paging?page=${page}&size=${size}&title=${searchValue}`
      );
      return response.data;
    } else {
      const response = await jsonAxios.get(
        `/api/v1/course/paging?page=${page}&size=${size}`
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
  formData.append("subDescription", newCourse.subDescription);
  try {
    const response = await formDataAxios.post("/api/v1/course/save", formData);
    notify("success", "Thêm khóa học thành công");
    return response;
  } catch (error) {
    notify("error", "Có lỗi xảy ra khi thêm");
  }
};
export const editCourse = async (course) => {
  let formData = new FormData();
  if (course.imageFile) {
    formData.append("imageFile", course.imageFile);
  }
  formData.append("title", course.title);
  formData.append("description", course.description);
  formData.append("subDescription", course.subDescription);
  try {
    const response = await formDataAxios.put(
      `/api/v1/course/update/${course.id}`,
      formData
    );
    notify("success", "Sửa khóa học thành công");
    return response;
  } catch (error) {
    console.log(error);
    notify("error", "Có lỗi xảy ra khi sửa");
  }
};
export const deleteCourse = async (id) => {
  try {
    const response = await formDataAxios.delete(`/api/v1/course/${id}`);
    notify("success", "Xóa khóa học thành công");
    return response;
  } catch (error) {
    notify("error", error.response.data);
  }
};
