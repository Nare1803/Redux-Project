import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Products } from "./features/products/products";
import { Basket } from "./features/basket/basket";
import { AddProduct } from "./features/products/pages/add";
import { Layout } from "./layout";
import { EditProduct } from "./features/products/editProduct";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:"",element:<Products/>},
            {path:"basket",element:<Basket/>},
            {path:"product/add",element:<AddProduct/>},
            { path: "product/edit/:id", element: <EditProduct /> }
   ]}
])