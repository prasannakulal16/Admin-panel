import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer, { productsFetch } from '../components/admin/userSlice'



export const store = configureStore({
  reducer: {
    users:userSliceReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

store.dispatch(productsFetch())