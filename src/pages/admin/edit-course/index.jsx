import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormAddChapter from "../../../components/form/FormAddChapter";
import FormAddLesson from "../../../components/form/FormAddLesson";
import { addNewChapter } from "../../../api/chapterAPIs";
import { useDispatch, useSelector } from "react-redux";
import { getChaptersThunk } from "../../../redux/reducer/chapterSlice";
import { getLessonsThunk } from "../../../redux/reducer/lessonSlice";

export default function DetailCourse() {
  const chapters = useSelector((state) => state.chapterSlice.chapters);
  const lesson = useSelector((state) => state.lessonSlice.lesson);
  console.log(chapters);
  console.log(lesson);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showFormAddChapter, setShowFormAddChapter] = useState(false);
  const [showFormAddLesson, setShowFormAddLesson] = useState(false);

  // Lấy dữ liệu chapter
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChaptersThunk());
    dispatch(getLessonsThunk());
  }, []);
  //Hàm hiển thị form thêm mới khóa học
  const openForm = (type) => {
    if (type === "chapter") {
      setShowFormAddChapter(true);
    } else {
      setShowFormAddLesson(true);
    }
  };

  //Hàm hiển thị form thêm mới khóa học
  const closeFormChapter = () => {
    setShowFormAddChapter(false);
  };
  const closeFormLesson = () => {
    setShowFormAddLesson(false);
  };

  const groupedContentItems = chapters.map((chapter) => {
    return {
      ...chapter,
      lessons: lesson.filter((item) => item.chapterId === chapter.id),
    };
  });
  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };
  const handleOpenFormLesson = () => {
    openForm("lesson");
  };
  const handleOpenFormChapter = () => {
    openForm("chapter");
  };
  const handleAddChapter = async (newChapter) => {
    await addNewChapter(newChapter);
  };
  const handleAddLesson = () => {
    console.log("Thêm bài học");
  };
  return (
    <>
      {showFormAddChapter && (
        <FormAddChapter
          closeForm={closeFormChapter}
          handleOk={handleAddChapter}
        />
      )}
      {showFormAddLesson && (
        <FormAddLesson closeForm={closeFormLesson} handleOk={handleAddLesson} />
      )}
      <div className="w-full flex justify-around">
        <div className="w-[50%]">
          {/* Danh sách các chương và bài học */}
          {groupedContentItems?.map((chapter) => (
            <Collapse key={chapter.id} accordion size="large">
              <Collapse.Panel
                header={<span className="font-bold">{chapter.title}</span>}
                key={chapter.id}
              >
                <ul>
                  {chapter?.lessons?.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleLessonClick(item)}
                      className="cursor-pointer font-bold hover:text-blue-500"
                    >
                      {item.title}
                    </li>
                  ))}
                  <li
                    onClick={handleOpenFormLesson}
                    className="cursor-pointer font-bold text-blue-500"
                  >
                    <AddCircleIcon /> Thêm bài học...
                  </li>
                </ul>
              </Collapse.Panel>
            </Collapse>
          ))}
          <div
            onClick={handleOpenFormChapter}
            className="ml-5 text-2xl cursor-pointer font-bold text-blue-500"
          >
            <AddCircleIcon /> Thêm chương ở đây
          </div>
        </div>
        <div className="w-[50%] mr-8">
          {/* Phần hiển thị video và mô tả của bài học được chọn */}
          {selectedLesson && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                {selectedLesson.title}
              </h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  width="100%"
                  height="500px"
                  src={selectedLesson.video}
                  title="Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{selectedLesson.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
