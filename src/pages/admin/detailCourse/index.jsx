import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormAddChapter from "../../../components/form/FormAddChapter";
import FormAddLesson from "../../../components/form/FormAddLesson";
import { addNewChapter, editChapterAPIs } from "../../../api/chapterAPIs";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  addNewLesson,
  deleteLesson,
  editLesson,
} from "../../../api/lessonAPIs";
import AddIcon from "@mui/icons-material/Add";
import { Accordion, AccordionDetails, AccordionSummary, ButtonGroup } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChaptersThunk } from "../../../redux/reducer/chapterSlice";
import { getLessonsThunk } from "../../../redux/reducer/lessonSlice";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";
import { notify } from "../../../utils/notification";
import VideoComponent from "../../../components/video/VideoComponent";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import Cookies from "js-cookie";
// import { Button } from "antd";
import Button from '@mui/material/Button';
export default function DetailCourse() {
  const chapters = useSelector((state) => state.chapterSlice.chapters);
  const lesson = useSelector((state) => state.lessonSlice.lesson);
  const [expanded, setExpanded] = useState("panel2");
  const [sourceVideo, setSourceVideo] = useState(
    "https://www.youtube.com/embed/vdKE_Tz8cy0"
  );
  const [description, setDescription] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showFormAddChapter, setShowFormAddChapter] = useState(false);
  const [showFormAddLesson, setShowFormAddLesson] = useState(false);
  const [idChapter, setIdChapter] = useState(null);
  const [editChapter, setEditChapter] = useState(null);
  const [choice, setChoice] = useState("video");
  const getAuthToken = () => Cookies.get("accessToken");
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChaptersThunk(id));
    dispatch(getLessonsThunk());
    dispatch(getAllCoursesAPI({ page: 0, size: 4 }));
  }, [dispatch, id]);

  // Nhóm dữ liệu lại
  const groupedContentItems = chapters.map((chapter) => {
    return {
      ...chapter,
      lessons: lesson.filter((item) => item.chapterId === chapter.id),
    };
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

  const handleOpenFormLesson = (id) => {
    openForm("lesson");
    setIdChapter(id);
  };
  const handleOpenFormChapter = () => {
    openForm("chapter");
  };
  const handleSaveChapter = async (infoChapter) => {
    // Validate các trường bắt buộc của infoChapter
    if (!infoChapter.title || !infoChapter.description) {
      notify("error", "Vui lòng điền đầy đủ thông tin chương học");
      return;
    }
    if (infoChapter.type === "edit") {
      await editChapterAPIs(infoChapter);
    } else {
      await addNewChapter(infoChapter);
    }
    dispatch(getChaptersThunk(id));
    // Đóng form thêm/chỉnh sửa chương học
    closeFormChapter();
  };

  const handleSaveLesson = async (infoLesson) => {
    // Basic validation
    if (!infoLesson.title || !idChapter) {
      notify("error", "Vui lòng điền đầy đủ thông tin bài học ");
      return;
    }
    const lesson = {
      ...infoLesson,
      chapterId: idChapter,
    };
    try {
      if (infoLesson.type === "edit") {
        await editLesson(lesson);
      } else {
        await addNewLesson(lesson);
      }
      dispatch(getLessonsThunk());
      closeFormLesson();
    } catch (error) {
      console.log(error);
      notify("error", "Có lỗi xảy ra khi thêm bài học");
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
  const handleDeleteLesson = async (id) => {
    await deleteLesson(id);
  };
  // Sửa chương học
  const handleEditChapter = (chapter) => {
    openForm("chapter");
    setEditChapter(chapter);
  };
  // Ck Editor
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            const token = getAuthToken();
            const formData = new FormData();
            formData.append("file", file);
            axios
              .post(
                `${import.meta.env.VITE_API_URL}/api/v1/file/upload-file`,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((response) => {
                resolve({
                  default: `${import.meta.env.VITE_API_URL}` + response.data,
                });
              })
              .catch((error) => {
                reject(error);
              });
          });
        });
      },
    };
  }
  function uploadPlugins(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };
  // Sửa bài học
  const handleSaveDescription = async () => {
    const lesson = {
      ...selectedLesson,
      description: description,
      chapterId: idChapter,
    };
    await editLesson(lesson);
    dispatch(getLessonsThunk());
    closeFormLesson();
  };
  return (
    <>
      {showFormAddChapter && (
        <FormAddChapter
          closeForm={closeFormChapter}
          handleOk={handleSaveChapter}
          editChapter={editChapter}
        />
      )}
      {showFormAddLesson && (
        <FormAddLesson
          closeForm={closeFormLesson}
          handleOk={handleSaveLesson}
          editLesson={selectedLesson}
        />
      )}
      <div className="w-full">
        <div className="bg-[#f8f8f8] shadow-lg pb-20 overflow-hidden rounded-3xl">
          <h1 className="text-2xl font-bold text-[#170F49]  bg-[#f8f8f8] rounded-lg ml-10 mb-4">
            <span className="text-rikkei">Khóa học: </span>
            {chapters[0]?.courseName}{" "}
          </h1>

          <div className="my-0 mx-auto max-w-[1500px] px-10">
            <ButtonGroup variant="outlined" aria-label="Basic button group" className="mb-[10px]">
              <Button onClick={() => setChoice("video")}>video</Button>
              <Button onClick={() => setChoice("lesson")}>Bài học</Button>
              <Button onClick={handleSaveDescription}>Lưu</Button>
            </ButtonGroup>
            <div className="flex  justify-between min-h-[500px] gap-[20px]">
              <div className="rounded-2xl overflow-hidden max-w-[950px] w-full relative">
                {choice === "video" ? (
                  <VideoComponent sourceVideo={sourceVideo} />
                ) : (
                  <div className="bg-slate-50">
                    <CKEditor
                      config={{
                        extraPlugins: [uploadPlugins],
                        styles: {
                          content: {
                            height: "fit-content",
                            overflowY: "hidden",
                          },
                        },
                      }}
                      editor={ClassicEditor}
                      data={description}
                      onReady={(editor) => {}}
                      onChange={handleEditorChange}
                      style={{ maxHeight: "500px", overflowY: "auto" }}
                    />
                  </div>
                )}
              </div>
              <div className="max-w-[400px] w-full flex flex-col">
                {groupedContentItems?.map((chapter) => (
                  <Accordion
                    sx={{ maxHeight: "50%" }}
                    className="text-xl font-medium text-[#170F49] "
                    expanded={expanded === `panel${chapter.id}`}
                    onChange={handleChange(`panel${chapter.id}`)}
                    key={chapter.id}
                    onClick={() => setIdChapter(chapter.id)}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `panel${chapter.id}` ? (
                          <RemoveIcon
                            fontSize="large"
                            sx={{ color: "#BC2228" }}
                          />
                        ) : (
                          <AddIcon fontSize="large" sx={{ color: "#BC2228" }} />
                        )
                      }
                      aria-controls={`panel${chapter.id}-content`}
                      id={`panel${chapter.id}-header`}
                      sx={{ minHeight: "4rem", color: "#BC2228" }}
                    >
                      {chapter?.title}{" "}
                      <EditOutlined
                        onClick={(event) => {
                          event.stopPropagation();
                          handleEditChapter(chapter);
                        }}
                        style={{ color: "blue", marginLeft: 10 }}
                      />
                    </AccordionSummary>
                    <div
                      onClick={() => handleOpenFormLesson(chapter.id)}
                      className="cursor-pointer font-bold text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded-lg ml-5"
                    >
                      <AddCircleIcon /> Thêm bài học...
                    </div>
                    <div className="overflow-auto max-h-64 bg-white rounded-[20px] pb-3">
                      <Divider />
                      {chapter?.lessons?.length > 0 ? (
                        chapter.lessons.map((item) => (
                          <AccordionDetails
                            sx={{
                              padding: "12px 16px 0 24px",
                              display: "flex",
                              justifyContent: "space-between",
                              cursor: "pointer",
                            }}
                            key={item.id}
                            onClick={() => {
                              setSourceVideo(item.video);
                              setSelectedLesson(item);
                              setDescription(item.description);
                            }}
                          >
                            <p
                              className={`max-w-[80%] ${
                                selectedLesson?.id === item.id
                                  ? "text-red-500"
                                  : ""
                              }`}
                            >
                              {item?.title}
                            </p>

                            <div className="flex items-center">
                              <EditOutlined
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleEditLesson(item);
                                }}
                                style={{ color: "blue", marginRight: 10 }}
                              />
                              <DeleteOutlined
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleDeleteLesson(item.id);
                                }}
                                style={{ color: "red" }}
                              />
                            </div>
                          </AccordionDetails>
                        ))
                      ) : (
                        <div style={{ padding: "12px 16px" }}>
                          Coming soon...
                        </div>
                      )}
                    </div>
                  </Accordion>
                ))}
                <div
                  onClick={handleOpenFormChapter}
                  className="ml-5 text-2xl cursor-pointer font-bold mt-10 text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded-lg flex items-center justify-center"
                >
                  <AddCircleIcon /> Thêm chương học mới
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
