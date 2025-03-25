import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Reducers/ProductReducer'

export default configureStore({
  reducer: {
    products: ProductReducer
  }
})