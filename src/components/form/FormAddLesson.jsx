import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Button, Input, Radio } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import { toolbarOptions, formats } from "../../utils/toolbarOptions";
import { useSelector } from "react-redux";
export default function FormAddLesson({ closeForm, handleOk }) {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [source, setSource] = useState("");
  return (
    <>
      <div className="overlay">
        <form className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded">
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
          <div className="mt-[20px]">
            <label htmlFor="">Mô tả</label>
            <ReactQuill
              className="mt-2"
              modules={toolbarOptions}
              theme="snow"
              value={description}
              onChange={setDiscription}
              formats={formats}
            />
          </div>
          <Divider />
          <div className="flex justify-end gap-2">
            <Button onClick={closeForm}>Hủy</Button>
            <Button
              type="primary"
              className="bg-blue-600"
              onClick={() => handleOk()}
            >
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
