import { configureStore } from '@reduxjs/toolkit';
import  addToCartSlice  from '../AddToCard/addToCart';




export const Store = configureStore({
  reducer: {
    addToCartSlice:addToCartSlice,
  },
   
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
