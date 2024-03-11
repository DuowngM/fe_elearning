import { Button, Input } from "antd";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import { Select } from "antd";
import { Table } from "antd";

export default function UserMangagement() {
  const calculateIndex = (index) => index + 1;
  const columns = [
    {
      title: "STT",
      dataIndex: "",
      align: "center",
      render: (_, __, index) => calculateIndex(index),
    },
    {
      title: "Tên người dùng",
      dataIndex: "title",
      align: "center",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createDate",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "createDate",
      align: "center",
      render: (_, item) => (
        <button>
          <span className="font-bold">[...]</span>
        </button>
      ),
    },
    {
      title: "Chức năng",
      align: "center",
      render: (item) => {
        return (
          <div className="flex justify-evenly ">
            <Button primary>Chỉnh sửa</Button>
            <Button danger>Xóa</Button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      {" "}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-3">
            <Select
              defaultValue="Sắp xếp"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "jack",
                  label: "Thứ tự tăng dần",
                },
                {
                  value: "lucy",
                  label: "Thứ tự giảm dần",
                },
              ]}
            />
            <Input
              className="w-[300px]"
              placeholder="Tìm kiếm khóa học theo tên"
            />
            <CachedIcon />
          </div>
          <Button type="primary" className="bg-blue-600">
            Thêm người dùng
          </Button>
        </div>
        <div className="table-container relative">
          <div className="mb-8">
            <Table
              columns={columns}
              // dataSource={allCourses?.courses}
              pagination={false}
            />
          </div>
          <div className="flex justify-center">
            {/* <Pagination
              count={allCourses?.totalPages}
              page={pagination}
              onChange={handlePageChange}
              color="primary"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
