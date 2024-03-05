import { notify } from "../utils/notification";
import { jsonAxios } from "./api.base.url";

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
    console.log(error);
    notify("error", error.response.data);
  }
};
