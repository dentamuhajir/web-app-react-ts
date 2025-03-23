import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.tsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './Reducers/ProductReducer'

const store = configureStore({
  reducer: {
    products: ProductReducer
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
