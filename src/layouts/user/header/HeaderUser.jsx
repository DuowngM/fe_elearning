import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../../components/auth/LoginForm";
import RegisterForm from "../../../components/auth/RegisterForm";
import { getPhone, login, register } from "../../../api/userAPIs";
import Cookies from "js-cookie";
import { notify } from "../../../utils/notification";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, ListItemIcon, Menu, MenuItem, Paper } from "@mui/material";
import { Divider, Typography } from "antd";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

function HeaderUser() {
  const [showFormLogin, setShowFormLogin] = useState(false);
  const [showFormRegister, setShowFormRegister] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser || null;
  });
  const navigate = useNavigate();
  useEffect(() => {
    // Check xem đã có đăng nhập hay chưa
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  //Hàm hiển thị form Login
  const openFormLogin = () => {
    setShowFormLogin(true);
  };
  //Hàm đóng form Login
  const closeFormLogin = () => {
    setShowFormLogin(false);
  };

  //Hàm hiển thị form Register
  const openFormRegister = () => {
    setShowFormRegister(true);
  };
  //Hàm đóng form Register
  const closeFormRegister = () => {
    setShowFormRegister(false);
  };
  //Hàm xử lý đăng nhập
  const handleLogin = async (infoUser) => {
    const response = await login(infoUser);
    const { accessToken, expired, roles, fullName } = response.data;
    setUser(fullName);
    localStorage.setItem("user", fullName);
    localStorage.setItem("roles", JSON.stringify(roles));
    // Lưu accessToken vào cookies
    Cookies.set("accessToken", accessToken, {
      expires: expired / (24 * 60 * 60 * 1000),
      secure: true,
      sameSite: "strict",
    });

    closeFormLogin();
    const check = roles.some(
      (item) => item === import.meta.env.VITE_ADMIN_ROLE
    );

    // Xử lý chuyển hướng nếu cần
    if (check) {
      window.location.href = "/admin";
    }
  };
  // hàm xử lý đăng ký
  const handleRegister = async (newUser) => {
    await getPhone({ phone: newUser.phone, fullName: newUser.fullName });
    await register(newUser);
    closeFormRegister();
    openFormLogin();
  };
  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("accessToken");
    setUser(null);
    navigate("/");
  };
  // Hàm chuyển đổi giữa form đăng nhập và đăng ký
  const toggleForms = () => {
    setShowFormLogin(!showFormLogin);
    setShowFormRegister(!showFormRegister);
  };
  return (
    <div className="max-w-[1500px] h-[70px] mx-auto flex justify-between items-center  ">
      <div className="logo">
        <Link to={"/"}>
          <img
            className="h-[50px] block"
            src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logo-rikkei2.png"
            alt="rikkei edu"
          />
        </Link>
      </div>

      <div className="actions flex gap-3 items-center">
        <Typography className="text-lg font-medium">{user}</Typography>
        {user ? (
          <>
            <Avatar onClick={handleClick}>
              <PersonIcon fontSize="large" />
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem> */}
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Đăng xuất
              </MenuItem>
            </Menu>
            {/* Hiển thị tên người dùng */}
          </>
        ) : (
          <>
            <Button
              variant="text"
              sx={{ color: "#bc2228" }}
              onClick={openFormLogin}
            >
              Đăng nhập
            </Button>
            <Button
              sx={{ bgcolor: "#bc2228", "&:hover": { bgcolor: "#c14e53" } }}
              variant="contained"
              onClick={openFormRegister}
            >
              Đăng ký
            </Button>
          </>
        )}
      </div>
      {/* Form thêm mới khóa học */}

      {showFormLogin && (
        <LoginForm
          closeForm={closeFormLogin}
          handleLogin={handleLogin}
          toggleForms={toggleForms}
        />
      )}
      {showFormRegister && (
        <RegisterForm
          closeForm={closeFormRegister}
          handleRegister={handleRegister}
          toggleForms={toggleForms}
        />
      )}
    </div>
  );
}

export default HeaderUser;
