import { configureStore } from '@reduxjs/toolkit';
import  addToCartSlice  from '../AddToCard/addToCart';
import AddFavorate from '../AddToFavorate/AddFavorate';




export const Store = configureStore({
  reducer: {
    addToCartSlice:addToCartSlice,
    addFavorate:AddFavorate,
  },
   
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
