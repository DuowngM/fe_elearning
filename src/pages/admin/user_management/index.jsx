import { Button, Input } from "antd";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import { Select } from "antd";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../../redux/reducer/userSlice";
import FormUser from "../../../components/form/FormUser";
import { createUser, editUserApi } from "../../../api/userAPIs";
import useDebounce from "../../../hooks/useDebounce";

export default function UserMangagement() {
  const allUsers = useSelector((state) => state.userSlice.users);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editUser, setEditUser] = useState(null);
  const [flag, setFlag] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Sử dụng useDebounce
  const debouncedSearchTerm = useDebounce(searchTerm, 2000);
  // Phân trang
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allUsers.slice(indexOfFirstItem, indexOfLastItem);
  const calculateIndex = (index) => index + 1;
  //Hàm hiển thị form thêm mới người dùng
  const openForm = () => {
    setShowForm(true);
  };
  //Hàm đóng form thêm mới người dùng
  const closeForm = () => {
    setShowForm(false);
    setEditUser(null);
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "",
      align: "center",
      render: (_, __, index) => calculateIndex(index),
    },
    {
      title: "Tên người dùng",
      dataIndex: "fullName",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createDate",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "void",
      align: "center",
      render: (text) => (
        <p>
          {text ? (
            <span className="text-red-500 font-bold">Bị Khóa</span>
          ) : (
            <span className="text-green-500 font-bold">Đang hoạt động</span>
          )}
        </p>
      ),
    },
    {
      title: "Chức năng",
      align: "center",
      render: (item) => {
        return (
          <div className="flex justify-evenly ">
            <Button
              primary
              onClick={() => {
                setEditUser(item);
                openForm();
              }}
            >
              Chỉnh sửa
            </Button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [flag]);
  const handleSave = async (userData) => {
    if (userData.type === "add") {
      await createUser(userData);
      setFlag(!flag);
      closeForm();
    } else {
      await editUserApi(userData);
      setFlag(!flag);
      closeForm();
    }
  };
  // Tìm kiếm người dùng
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };
  const fetchCourses = () => {
    try {
      setIsLoading(true);
      dispatch(getUsersThunk({ searchValue: searchTerm }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [debouncedSearchTerm]);
  return (
    <>
      {" "}
      {showForm && (
        <FormUser
          closeForm={closeForm}
          handleOk={handleSave}
          editUser={editUser}
        />
      )}
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
              placeholder="Tìm kiếm người dùng theo tên"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <CachedIcon />
          </div>
          <Button type="primary" className="bg-blue-600" onClick={openForm}>
            Thêm người dùng
          </Button>
        </div>
        <div className="table-container relative">
          <div className="mb-8">
            <Table
              columns={columns}
              dataSource={currentItems}
              pagination={false}
            />
          </div>
          <div className="flex justify-center">
            <Pagination
              count={Math.ceil(allUsers.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
