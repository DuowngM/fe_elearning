import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Collapse } from "antd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormAddChapter from "../../../components/form/FormAddChapter";
import FormAddLesson from "../../../components/form/FormAddLesson";
import { addNewChapter } from "../../../api/chapterAPIs";

export default function DetailCourse() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showFormAddChapter, setShowFormAddChapter] = useState(false);
  const [showFormAddLesson, setShowFormAddLesson] = useState(false);

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
  const { id } = useParams();

  const contentItems = [
    {
      id: 1,
      name: "Bài 1: .................",
      idChapter: 1,
      description: "Mô tả 1",
      linkVideo: "https://www.youtube.com/embed/OZoVp0cvGBQ",
    },
    {
      id: 2,
      name: "Bài 2: ...................",
      idChapter: 1,
      description: "Mô tả 2",
      linkVideo: "https://www.youtube.com/watch?v=JGw....",
    },
    {
      id: 3,
      name: "Bài 1:......................",
      idChapter: 2,
      description: "Mô tả 3",
      linkVideo: "https://www.youtube.com/watch?v=JGw....",
    },
    {
      id: 4,
      name: "Bài 2:......................",
      idChapter: 2,
      description: "Mô tả 4",
      linkVideo: "https://www.youtube.com/watch?v=JGw....",
    },
    {
      id: 5,
      name: "Bài 1:......................",
      idChapter: 3,
      description: "Mô tả 21",
      linkVideo: "https://www.youtube.com/watch?v=JGw....",
    },
    {
      id: 6,
      name: "Bài 2:......................",
      idChapter: 3,
      description: "Mô tả 22",
      linkVideo: "https://www.youtube.com/watch?v=JGw....",
    },
  ];
  const chapters = [
    {
      id: 1,
      label: "Chương 1",
    },
    {
      id: 2,
      label: "Chương 2",
    },
    {
      id: 3,
      label: "Chương 3",
    },
  ];

  const groupedContentItems = chapters.map((chapter) => {
    return {
      ...chapter,
      content: contentItems.filter((item) => item.idChapter === chapter.id),
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
          {groupedContentItems.map((chapter) => (
            <Collapse key={chapter.id} accordion size="large">
              <Collapse.Panel
                header={<span className="font-bold">{chapter.label}</span>}
                key={chapter.id}
              >
                <ul>
                  {chapter.content.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleLessonClick(item)}
                      className="cursor-pointer font-bold hover:text-blue-500"
                    >
                      {item.name}
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
                {selectedLesson.name}
              </h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  width="100%"
                  height="500px"
                  src={selectedLesson.linkVideo}
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
