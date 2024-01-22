import { configureStore } from "@reduxjs/toolkit";
import wishlistSliceNew from "./slices/wishlistSliceNew";
import cartSlice from "./slices/cartSlice";



const store=configureStore({
    reducer:{
            wishlistReducer:wishlistSliceNew,
            cartReducer:cartSlice
    }
})
export default store