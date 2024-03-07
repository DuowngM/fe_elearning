import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./reducer/courseSlice";
import chapterSlice from "./reducer/chapterSlice";
import lessonSlice from "./reducer/lessonSlice";

const store = configureStore({
  reducer: {
    courseSlice: courseSlice,
    chapterSlice: chapterSlice,
    lessonSlice: lessonSlice,
  },
});
export default store;
