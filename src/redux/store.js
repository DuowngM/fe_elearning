import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./reducer/courseSlice";

const store = configureStore({
  reducer: {
    courseSlice,
  },
});
export default store;
