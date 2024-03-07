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
export const addNewLesson = async (infoLesson) => {
  let lesson = {
    title: infoLesson.title,
    description: infoLesson.description,
    video: infoLesson.linkVideo,
    resources: infoLesson.source,
    chapterDto: {
      id: infoLesson.chapterId,
    },
  };
  try {
    const response = await jsonAxios.post("api/v1/lesson/save", lesson);
    notify("success", "Thêm bài học thành công");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editLesson = async (infoLesson) => {
  console.log(infoLesson);
  let lesson = {
    title: infoLesson.title,
    description: infoLesson.description,
    video: infoLesson.linkVideo,
    resources: infoLesson.source,
    chapterDto: {
      id: infoLesson.chapterId,
    },
  };
  try {
    const response = await jsonAxios.put(
      `api/v1/lesson/update/${infoLesson.id}`,
      lesson
    );
    notify("success", "Sửa bài học thành công");
    return response;
  } catch (error) {
    console.log(error);
  }
};
