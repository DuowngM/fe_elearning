import { notification } from "antd";

export const notify = (type, message) => {
  switch (type) {
    case "success":
      return notification.success({
        message: message,
      });
    case "error":
      return notification.error({
        message: message,
      });
    default:
      return alert(message);
  }
};
