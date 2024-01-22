import { createSlice } from "@reduxjs/toolkit";

const wishlistSliceNew=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        //functionslogicsor actions are define here

        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id !=action.payload) // this means that it iterate each item and ,then the id we passed is not match with items it returned to state.if same it is deleted.
        }
    }
})
export const {addToWishlist,removeFromWishlist}=wishlistSliceNew.actions;
export default wishlistSliceNew.reducer;