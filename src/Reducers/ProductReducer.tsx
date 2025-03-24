import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../Data/ProductData";

const productSlice = createSlice({
    name: "products",
    initialState: productList,
    reducers: {
        addProduct: (state, action) => {
            console.log(action)
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer
