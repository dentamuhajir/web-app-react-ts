import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { setBreadcumbs } from '../../../Reducers/BreadcrumbReducer'
import { BreadcrumbModel } from '../../../Models/Breadcrumb'
import Breadcrumb from '../../../Shared/Breadcrumb'

const ListProduct = () => {
  const dispatch = useDispatch()
  const breadcrumbData :BreadcrumbModel[] = [
    { title: "Home",route: "/cms", isActive: true },
    { title: "Product", route: "/cms/product", isActive: true },
    { title: "List", route: "", isActive: false }
  ]
  
  useEffect(()=>{
    dispatch(setBreadcumbs(
      breadcrumbData
    ))
  },[dispatch])  

  const products = useSelector((state) => state.products);
  console.log(products)
  //console.log(products.length)
  return (
    <>
      <Helmet>
        <title>List of products</title>
        <meta name="description" content="List of the product" />
      </Helmet>
      <Breadcrumb breadcumbs={breadcrumbData}></Breadcrumb>
      <div>List of Product</div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Categoy</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {products.map((item, index) => (
            <tr>
              <th scope="row">{ index + 1 }</th>
              <td>{ item.name }</td>
              <td>{ item.category }</td>
              <td>$ { item.price }</td>
              <td>
                <button type="button"  className="btn btn-warning me-2">Edit</button>
                <button type="button" className="btn btn-info">Delete</button>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    </>
  )  
}

export default ListProduct