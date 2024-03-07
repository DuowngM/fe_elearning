import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllChapters } from "../../api/chapterAPIs";

export const getChaptersThunk = createAsyncThunk("getChapters", async (id) => {
  const data = await getAllChapters(id);
  return data;
});

const chapterSlice = createSlice({
  name: "chapter",
  initialState: {
    chapters: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChaptersThunk.fulfilled, (state, action) => {
      state.chapters = action.payload;
    });
  },
});

export default chapterSlice.reducer;
