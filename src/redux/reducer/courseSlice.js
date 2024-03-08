import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCourses } from "../../api/courseAPIs";

export const getAllCoursesAPI = createAsyncThunk(
  "getCourses",
  async (infoGetData) => {
    const { page, searchValue, size } = infoGetData;
    const data = await getAllCourses(page, searchValue, size);
    return data;
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    totalPages: 1,
    size: 1,
    current: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCoursesAPI.fulfilled, (state, action) => {
      state.courses = action.payload?.content;
      state.totalPages = action.payload?.totalPages;
      state.current = action.payload?.number;
    });
  },
});

export default courseSlice.reducer;
