import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
 item:[]
}
 

export const productsFetch = createAsyncThunk(
    "users/productsFetch",
    async () => {
       const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
       return response?.data
    }
)


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.item.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, role } = action.payload;
      const existingUser = state.item.find((user) => user.id === id);
      console.log("state item is",state.item)
      console.log("edit ex user",existingUser)
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.role = role;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.item.find((user) => user.id === id);
      if (existingUser) {
        const remainingUser = state.item.filter((user) => user.id !== id);
        state.item =remainingUser
      }
    },
    deleteSelectedUser: (state, action) => {
      const { id } = action.payload;
      const res=action.payload.map((item) => item.id);
      if (true) {
        const remainingSelectedUser = state.item.filter((user) =>
            !res.includes(user.id)
          
        );
        state.item = remainingSelectedUser
      }
    },
  },
      extraReducers:{
        [productsFetch.pending] : (state,action)=>{
            state.status = "pending"
        },
        [productsFetch.fulfilled] : (state,action)=>{
            state.status = "success"
            state.item = action.payload
        },
        [productsFetch.rejected] : (state,action)=>{
            state.status = "rejected"
        }
    }
});

export const { addUser, editUser, deleteUser, deleteSelectedUser } =
  userSlice.actions;

export default userSlice.reducer;
