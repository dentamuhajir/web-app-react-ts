import React from 'react'
import { Outlet } from 'react-router'

type Props = {}

const Product = (props: Props) => {
  return (
    <>
      <div>Product Page</div>
      <Outlet/>
    </>
  )
}

export default Product