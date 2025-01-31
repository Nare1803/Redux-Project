import { createAsyncThunk } from "@reduxjs/toolkit";
import { Http } from "../../helpers/Axios";

export const getProducts=createAsyncThunk("products/get",async ()=>{
    const response=await Http.get("/products")
    return response.data
})
export const  addProduct=createAsyncThunk("products/add",async(payload)=>{
    const response=await Http.post("/products",payload)
    return response.data

})
export const  editProduct=createAsyncThunk("products/edit",async(payload)=>{
    const response=await Http.put(`/products/${payload.id}`,payload)
    return response.data

})