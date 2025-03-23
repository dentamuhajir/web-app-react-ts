import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../Data/ProductData";

const productSlice = createSlice({
    name: "products",
    initialState: productList,
    reducers: {}
})

export default productSlice.reducer