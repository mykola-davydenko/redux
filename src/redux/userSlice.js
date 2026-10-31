import { createSlice } from "@reduxjs/toolkit";
import data from "../users.json";

// let initialState = data;
// const saveData = window.localStorage.getItem("cards")
// if (saveData) {
//   initialState = JSON.parse(saveData)
// }

// let users = data;
// const saveData = window.localStorage.getItem("cards");
// if (saveData) {
//   // users = JSON.parse(saveData);
//   users = JSON.parse(saveData);
// }

const initialState = {
  users: data, 
  searchValue: "",
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
     state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    }
  },
});

export const { deleteUser, addUser, changeSearchValue } = userSlice.actions;
export default userSlice.reducer;
