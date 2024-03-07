import { notify } from "../utils/notification";
import { jsonAxios } from "./api.base.url";

export const getAllLessons = async () => {
  try {
    const response = await jsonAxios.get("api/v1/lesson/get-all");
    return response.data;
  } catch (error) {
    notify("error", "Có lỗi khi lấy dữ liệu bài học");
  }
};
