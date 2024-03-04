import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Button, Input, Radio } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import { toolbarOptions, formats } from "../../utils/toolbarOptions";
import { useParams } from "react-router-dom";
export default function FormAddChapter({ closeForm, handleOk }) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");

  return (
    <>
      <div className="overlay">
        <form className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded">
          <div className="flex justify-between items-center">
            <h3 className="text-[20px] font-semibold">Thêm mới chương học</h3>
            <CloseIcon
              onClick={closeForm}
              className="cursor-pointer hover:text-gray-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-3">
            <div>
              <label htmlFor="">Tên chương</label>
              <Input
                className="mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* <div className="flex flex-col">
              <label htmlFor="">Trạng thái</label>
              <Radio.Group className="mt-2">
                <Radio className="border px-2 py-1 rounded" value={1}>
                  Hoạt động
                </Radio>
                <Radio className="border px-2 py-1 rounded" value={0}>
                  Ngừng hoạt động
                </Radio>
              </Radio.Group>
            </div> */}
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
              onClick={() => handleOk({ title, description, id: +id })}
            >
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
