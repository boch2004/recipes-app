import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import  productSlice  from './userSlice/productSlice'
import setCategory  from './userSlice/categorySlice';
import favorisSlice  from './userSlice/favorisslice';

export const store = configureStore({
  reducer: {
    product:productSlice,
    user:userSlice,
    category: setCategory,
    favoris:favorisSlice
  },
})


export default store;
