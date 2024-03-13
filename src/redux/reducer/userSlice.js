import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../api/userAPIs";

export const getUsersThunk = createAsyncThunk("getUsers", async (search) => {
  const { searchValue } = search;
  const response = await getAllUsers(searchValue);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    totalPages: 1,
    size: 1,
    current: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload.content;
    });
  },
});

export default userSlice.reducer;
