import { notify } from "../utils/notification";
import { jsonAxios } from "./api.base.url";

export const getAllChapters = async (id) => {
  try {
    const response = await jsonAxios.get(
      `api/v1/chapter/get-chapters-by-course/${id}`
    );
    return response.data;
  } catch (error) {
    notify("error", "Có lỗi khi lấy dữ liệu chương học");
  }
};

export const addNewChapter = async (newChapter) => {
  let chapter = {
    title: newChapter.title,
    description: newChapter.description,
    course: {
      id: newChapter.id,
    },
  };
  try {
    const response = await jsonAxios.post("api/v1/chapter/save", chapter);
    notify("success", "Thêm chương học thành công");
    return response;
  } catch (error) {
    console.log(error);
  }
};
