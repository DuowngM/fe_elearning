import { Button, Input } from "antd";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import { Select } from "antd";
import { Table } from "antd";
import FormAddCourse from "../../../components/form/FormAddCourse";
import { useNavigate } from "react-router-dom";
import { addNewCourse, deleteCourse } from "../../../api/courseAPIs";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";
import MyModal from "../../../components/modal/Modal";

export default function Course() {
  const [showForm, setShowForm] = useState(false);
  const [flag, setFlag] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courseSlice);
  const [pagination, setPagination] = useState(allCourses.current);
  useEffect(() => {
    dispatch(getAllCoursesAPI({ page: 0 }));
  }, [flag]);
  // Hàm tính toán số thứ tự cho mỗi dòng dữ liệu
  const calculateIndex = (index) => index + 1;
  // Click chuyển trang
  const handlePageChange = (page, value) => {
    dispatch(getAllCoursesAPI({ page: value - 1 }));
    setPagination(value);
  };
  //Hàm hiển thị form thêm mới khóa học
  const openForm = () => {
    setShowForm(true);
  };
  //Hàm hiển thị form thêm mới khóa học
  const closeForm = () => {
    setShowForm(false);
  };
  const handleShowModal = (description) => {
    setSelectedCourse(description);
    setIsModalVisible(true);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "",
      align: "center",
      render: (_, __, index) => calculateIndex(index),
    },
    {
      title: "Tên khóa học",
      dataIndex: "title",
      align: "center",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      align: "center",
      render: (text) => (
        <img src={"http://10.101.44.231:8081/img/" + text} width={100} />
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createDate",
      align: "center",
    },
    {
      title: "Mô tả",
      dataIndex: "createDate",
      align: "center",
      render: (_, item) => (
        <button onClick={() => handleShowModal(item.description)}>
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
            <Button onClick={() => navigate(`/admin/course/${item.id}`)}>
              Chi tiết khóa học
            </Button>
            <Button primary>Chỉnh sửa</Button>
            <Button danger onClick={() => handleDeleteCourse(item.id)}>
              Xóa
            </Button>
          </div>
        );
      },
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  // Thêm khóa học
  const handleOk = async (newCourse) => {
    try {
      await addNewCourse(newCourse);
      setFlag(!flag);
      closeForm();
    } catch (error) {
      console.log(error);
    }
  };
  // Xóa khóa học
  const handleDeleteCourse = async (id) => {
    await deleteCourse(id);
    setFlag(!flag);
  };

  // Tìm kiếm khóa học
  const handleSearch = (searchValue) => {
    dispatch(getAllCoursesAPI({ page: 0, searchValue }));
  };
  return (
    <>
      <MyModal
        isOpen={isModalVisible}
        onOk={handleCancelModal}
        onCancel={handleCancelModal}
        description={selectedCourse}
      />
      {/* Form thêm mới khóa học */}
      {showForm && (
        <FormAddCourse
          closeForm={closeForm}
          handleOk={handleOk}
          type={"addCourse"}
        />
      )}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-3">
            <Select
              defaultValue="Sắp xếp khóa học"
              style={{
                width: 200,
              }}
              onChange={handleChange}
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
              onChange={(e) => handleSearch(e.target.value)}
            />
            <CachedIcon />
          </div>
          <Button onClick={openForm} type="primary" className="bg-blue-600">
            Thêm khóa học
          </Button>
        </div>
        <div className="table-container relative">
          <div className="mb-8">
            <Table
              columns={columns}
              dataSource={allCourses?.courses}
              pagination={false}
            />
          </div>
          <div className="flex justify-center">
            <Pagination
              count={allCourses.totalPages}
              page={pagination}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
