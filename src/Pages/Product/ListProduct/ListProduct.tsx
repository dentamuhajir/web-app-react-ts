import React from 'react'
import { useSelector } from 'react-redux';

type Props = {}

const ListProduct = (props: Props) => {
  const products = useSelector((state) => state.products);
  console.log(products)
  return (
    <>
      <div>ListProduct</div>
      

    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Categoy</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
      {products.map((item, index) => (
          <tr>
            <th scope="row">{ item.id }</th>
            <td>{ item.name }</td>
            <td>{ item.category }</td>
            <td>$ { item.price }</td>
          </tr>
      ))}
        

      </tbody>
    </table>
    </>
  )
  
}

export default ListProduct