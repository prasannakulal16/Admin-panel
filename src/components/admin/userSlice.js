import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

import Edituser from "./Edituser";

const initialState = [
  {
    id: "1",
    name: "Timus",
    email: "admin@gmail.com",
    role: "admin",
    selected: false,
  },
  {
    id: "2",
    name: "boat",
    email: "admin2@gmail.com",
    role: "user",
    selected: false,
  },
  {
    id: "3",
    name: "amzon",
    email: "admin3@gmail.com",
    role: "editor",
    selected: false,
  },
  {
    id: "4",
    name: "flipkart",
    email: "admin4@gmail.com",
    role: "viewer",
    selected: false,
  },
  {
    id: "5",
    name: "oyo",
    email: "admin@gmail.com",
    role: "admin",
    selected: false,
  },
  {
    id: "6",
    name: "samsung",
    email: "admin2@gmail.com",
    role: "user",
    selected: false,
  },
  {
    id: "7",
    name: "oneplus",
    email: "admin3@gmail.com",
    role: "editor",
    selected: false,
  },
  {
    id: "8",
    name: "redmi",
    email: "admin4@gmail.com",
    role: "viewer",
    selected: false,
  },
  {
    id: "9",
    name: "oppo",
    email: "admin@gmail.com",
    role: "admin",
    selected: false,
  },
  {
    id: "10",
    name: "lava",
    email: "admin2@gmail.com",
    role: "user",
    selected: false,
  },
  {
    id: "11",
    name: "nokia",
    email: "admin3@gmail.com",
    role: "editor",
    selected: false,
  },
  {
    id: "12",
    name: "sony",
    email: "admin4@gmail.com",
    role: "viewer",
    selected: false,
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, role } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.role = role;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      console.log("payload id", state);
      const existingUser = state.find((user) => user.id === id);
      console.log("exsiting user", existingUser);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
    deleteSelectedUser: (state, action) => {
      const { id } = action.payload;
      console.log("payload", action.payload);
      const res=action.payload.map((item) => item.id);
      if (true) {
        return state.filter((user) =>
            !res.includes(user.id)
          
        );
      }
    },
  },
});

export const { addUser, editUser, deleteUser, deleteSelectedUser } =
  userSlice.actions;

export default userSlice.reducer;
