import React from 'react'
import { useSelector } from 'react-redux';

type Props = {}

const ListProduct = (props: Props) => {
  const products = useSelector((state) => state.products);
  console.log(products)
  return (
    <>
      <div>ListProduct</div>
      {products.map((item, index) => (
        <p>{ item.name }</p>
      ))}
    </>
  )
  
}

export default ListProduct