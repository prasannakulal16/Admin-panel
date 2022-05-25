import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Sachin",
    email: "sachin@gmail.com",
    role: "Admin",
    selected: false,
  },
  {
    id: "2",
    name: "Umesh",
    email: "umesh@gmail.com",
    role: "User",
    selected: false,
  },
  {
    id: "3",
    name: "John",
    email: "john@gmail.com",
    role: "Member",
    selected: false,
  },
  {
    id: "4",
    name: "Mahesh",
    email: "mahesh@gmail.com",
    role: "Viewer",
    selected: false,
  },
  {
    id: "5",
    name: "Deryl",
    email: "deryl@gmail.com",
    role: "Editor",
    selected: false,
  },
  {
    id: "6",
    name: "Roy",
    email: "roy@gmail.com",
    role: "Commentor",
    selected: false,
  },
  {
    id: "7",
    name: "Sudarshan",
    email: "sudarshan@gmail.com",
    role: "Support",
    selected: false,
  },
  {
    id: "8",
    name: "Raksha",
    email: "raksha@gmail.com",
    role: "Developer",
    selected: false,
  },
  {
    id: "9",
    name: "Vinutha",
    email: "vinutha@gmail.com",
    role: "Tester",
    selected: false,
  },
  {
    id: "10",
    name: "Divij",
    email: "divij@gmail.com",
    role: "Lead",
    selected: false,
  },
  {
    id: "11",
    name: "Ankitha",
    email: "ankitha@gmail.com",
    role: "Manager",
    selected: false,
  },
  {
    id: "12",
    name: "Praveen",
    email: "praveen@gmail.com",
    role: "Marketting",
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
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
    deleteSelectedUser: (state, action) => {
      const { id } = action.payload;
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
