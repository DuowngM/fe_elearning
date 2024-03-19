import { notify } from "../utils/notification";
import { formDataAxios } from "./api.base.url";
export const uploadImg = async (formData) => {
  try {
    const response = await formDataAxios.post(
      "api/v1/file/upload-file",
      formData
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      console.log(error);
      notify("error", "Bạn không có quyền");
    } else {
      console.log(error);
      notify("error", "Có lỗi xảy ra khi lấy dữ liệu roles");
    }
  }
};
