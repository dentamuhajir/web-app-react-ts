import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from '../Reducers/ProductReducer'
import BreadcrumbReducer from '../Reducers/BreadcrumbReducer'

export default configureStore({
  reducer: {
    products: ProductReducer,
    breadcrumbs: BreadcrumbReducer
  }
})