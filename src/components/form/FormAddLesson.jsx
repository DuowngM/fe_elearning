import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Button, Input } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./index.css";
import axios from "axios";
export default function FormAddLesson({ closeForm, handleOk, editLesson }) {
  const [title, setTitle] = useState(editLesson?.title || "");
  const [description, setDescription] = useState(editLesson?.description || "");
  const [linkVideo, setLinkVideo] = useState(editLesson?.video || "");
  const [source, setSource] = useState(editLesson?.resources || "");
  const formRef = useRef(null);
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeForm(); // Đóng form nếu click bên ngoài form
    }
  };
  // Upload ảnh CkEditor

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            const formData = new FormData();
            formData.append("file", file);
            axios
              .post(
                "http://10.101.44.212:8080/api/v1/file/upload-file",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then((response) => {
                resolve({
                  default: "http://10.101.44.212:8080" + response.data,
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
  return (
    <>
      {editLesson ? (
        <>
          <div className="overlay" onClick={handleClickOutside}>
            <form
              ref={formRef}
              className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[20px] font-semibold">Sửa bài học</h3>
                <CloseIcon
                  onClick={closeForm}
                  className="cursor-pointer hover:text-gray-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Tên bài học</label>
                  <Input
                    className="mt-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Link video</label>
                  <Input
                    className="mt-2"
                    value={linkVideo}
                    onChange={(e) => setLinkVideo(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Link tài nguyên</label>
                  <Input
                    className="mt-2"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                </div>
              </div>

              <Divider />
              <div className="flex justify-end gap-2">
                <Button onClick={closeForm}>Hủy</Button>
                <Button
                  type="primary"
                  className="bg-blue-600"
                  onClick={() =>
                    handleOk({
                      title,
                      description,
                      id: editLesson?.id,
                      source,
                      linkVideo,
                      type: "edit",
                    })
                  }
                >
                  Lưu
                </Button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="overlay" onClick={handleClickOutside}>
            <form
              ref={formRef}
              className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[20px] font-semibold">Thêm mới bài học</h3>
                <CloseIcon
                  onClick={closeForm}
                  className="cursor-pointer hover:text-gray-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Tên bài học</label>
                  <Input
                    className="mt-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Link video</label>
                  <Input
                    className="mt-2"
                    value={linkVideo}
                    onChange={(e) => setLinkVideo(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Link tài nguyên</label>
                  <Input
                    className="mt-2"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                </div>
              </div>

              <Divider />
              <div className="flex justify-end gap-2">
                <Button onClick={closeForm}>Hủy</Button>
                <Button
                  type="primary"
                  className="bg-blue-600"
                  onClick={(item) =>
                    handleOk({
                      title,
                      description,
                      id: item.id,
                      source,
                      linkVideo,
                      type: "add",
                    })
                  }
                >
                  Lưu
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
