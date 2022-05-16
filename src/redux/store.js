import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from '../components/admin/userSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    users:userSliceReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})