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
    return response;
  } catch (error) {
    console.log(error);
  }
};
