import { createSlice } from "@reduxjs/toolkit";
import { editProduct, getProducts } from "./products.api";

const productSlice=createSlice({
    name:"products",
    initialState:{items:[]},
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.items=action.payload
        })
        .addCase(editProduct.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
              state.items[index] = action.payload;
            }
          })

    }

})
export const productReducer=productSlice.reducer