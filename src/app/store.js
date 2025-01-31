import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/products/products.slice";
import { basketReducer } from "../features/basket/basket.slice";
import { EditProduct } from "../features/products/editProduct";

export const store=configureStore({
    reducer:{
        products:productReducer,
        basket:basketReducer,
    }
})