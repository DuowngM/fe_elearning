import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormAddChapter from "../../../components/form/FormAddChapter";
import FormAddLesson from "../../../components/form/FormAddLesson";
import { addNewChapter } from "../../../api/chapterAPIs";
import { useDispatch, useSelector } from "react-redux";
import { getChaptersThunk } from "../../../redux/reducer/chapterSlice";
import { getLessonsThunk } from "../../../redux/reducer/lessonSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { addNewLesson, editLesson } from "../../../api/lessonAPIs";
import { useParams } from "react-router-dom";

export default function DetailCourse() {
  const chapters = useSelector((state) => state.chapterSlice.chapters);
  const lesson = useSelector((state) => state.lessonSlice.lesson);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showFormAddChapter, setShowFormAddChapter] = useState(false);
  const [showFormAddLesson, setShowFormAddLesson] = useState(false);
  const [idChapter, setIdChapter] = useState(null);
  const { id } = useParams();
  // Lấy dữ liệu chapter
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChaptersThunk(id));
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
    setSelectedLesson(null);
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
  const handleOpenFormLesson = (id) => {
    openForm("lesson");
    setIdChapter(id);
  };
  const handleOpenFormChapter = () => {
    openForm("chapter");
  };
  const handleAddChapter = async (newChapter) => {
    await addNewChapter(newChapter);
    dispatch(getChaptersThunk(id));
    closeFormChapter();
  };
  const handleSave = async (infoLesson) => {
    const lesson = {
      ...infoLesson,
      chapterId: idChapter,
    };
    if (infoLesson.type === "edit") {
      await editLesson(lesson);
      setSelectedLesson(null);
      dispatch(getLessonsThunk());
      closeFormLesson();
    } else {
      await addNewLesson(lesson);

      dispatch(getLessonsThunk());
      closeFormLesson();
    }
  };
  // Sửa bài học
  const handleEditLesson = (lesson) => {
    // Cập nhật trạng thái và mở form sửa với thông tin của bài học
    setSelectedLesson(lesson);
    setShowFormAddLesson(true);
    setIdChapter(lesson.chapterId);
  };
  // Xóa bài học
  const handleDeleteLesson = async (lessonId) => {
    try {
      // await callDeleteLessonAPI(lessonId);
      dispatch(getLessonsThunk());
    } catch (error) {
      console.error("Lỗi khi xóa bài học: ", error);
    }
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
        <FormAddLesson
          closeForm={closeFormLesson}
          handleOk={handleSave}
          editLesson={selectedLesson}
        />
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
                      className="flex justify-between items-center cursor-pointer font-bold hover:text-blue-500"
                    >
                      <p>{item.title}</p>
                      <div>
                        <EditOutlined
                          onClick={() => handleEditLesson(item)}
                          style={{ color: "blue", marginRight: 10 }}
                        />
                        <DeleteOutlined
                          onClick={() => handleDeleteLesson(item.id)}
                          style={{ color: "red" }}
                        />
                      </div>
                    </li>
                  ))}
                  <li
                    onClick={() => handleOpenFormLesson(chapter.id)}
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
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <p>{selectedLesson.description}</p> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
