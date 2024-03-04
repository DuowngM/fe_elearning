export const addNewLesson = async (newLesson) => {
  try {
    const response = await jsonAxios.post("/api/v1/course/save", newLesson);
    return response;
  } catch (error) {
    console.log(error);
  }
};
