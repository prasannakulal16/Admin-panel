import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Timus",
    email: "admin@gmail.com",
    role: "Admin",
    selected: false,
  },
  {
    id: "2",
    name: "Boat",
    email: "user@gmail.com",
    role: "User",
    selected: false,
  },
  {
    id: "3",
    name: "Amazon",
    email: "member@gmail.com",
    role: "Member",
    selected: false,
  },
  {
    id: "4",
    name: "Flipkart",
    email: "viewer@gmail.com",
    role: "Viewer",
    selected: false,
  },
  {
    id: "5",
    name: "Oyo",
    email: "editor@gmail.com",
    role: "Editor",
    selected: false,
  },
  {
    id: "6",
    name: "Samsung",
    email: "commentor@gmail.com",
    role: "Commentor",
    selected: false,
  },
  {
    id: "7",
    name: "Oneplus",
    email: "support@gmail.com",
    role: "Support",
    selected: false,
  },
  {
    id: "8",
    name: "Redmi",
    email: "developer@gmail.com",
    role: "Developer",
    selected: false,
  },
  {
    id: "9",
    name: "Oppo",
    email: "tester@gmail.com",
    role: "Tester",
    selected: false,
  },
  {
    id: "10",
    name: "Lava",
    email: "lead@gmail.com",
    role: "Lead",
    selected: false,
  },
  {
    id: "11",
    name: "Nokia",
    email: "manager@gmail.com",
    role: "Manager",
    selected: false,
  },
  {
    id: "12",
    name: "Sony",
    email: "marketting@gmail.com",
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
