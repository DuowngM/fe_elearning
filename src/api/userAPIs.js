import { notify } from "../utils/notification";
import { jsonAxios } from "./api.base.url";
export const getPhone = async (user) => {
  const infoUser = {
    phone: user.phone,
    fullName: user.fullName,
  };
  try {
    const response = await jsonAxios.post("/api/v1/user-clipboard", infoUser);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (infoUser) => {
  const newUser = {
    fullName: infoUser.fullName,
    phone: infoUser.phone,
    password: infoUser.password,
  };
  try {
    const response = await jsonAxios.post("/api/v1/user/register", newUser);
    notify("success", "Đăng ký thành công");
    return response;
  } catch (error) {
    notify("error", error.response.data);
  }
};
export const login = async (user) => {
  const infoUser = {
    phone: user.phone,
    password: user.password,
  };
  try {
    const response = await jsonAxios.post("/auth/login", infoUser);
    notify("success", "Đăng nhập thành công");
    return response;
  } catch (error) {
    notify("error", "Sai tài khoản hoặc mật khẩu");
  }
};
export const getUserById = async (id) => {
  
}