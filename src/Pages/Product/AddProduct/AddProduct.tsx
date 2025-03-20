// import { 
//   BtnBold,
//   BtnItalic,
//   Editor,
//   EditorProvider,
//   Toolbar
// } from 'react-simple-wysiwyg';
import { useState } from 'react';
import { BreadcrumbModel } from '../../../Models/Breadcrumb';

import Breadcrumb from '../../../Shared/Breadcrumb';

type Props = {}


const AddProduct = (props: Props) => {

  const breadcrumbData :BreadcrumbModel[] = [
    { title: "Home",route: "/cms", isActive: true },
    { title: "Product", route: "/cms/product", isActive: true },
    { title: "Addd", route: "", isActive: false }
  ]

  const initialValues = { 
    name: "",
    description: "",
    image: "",
    price: ""
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    
    
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({ ...formValues, [name]: value})
  }

  const validate = (values) => {
    let errors = {}
    if(!values.name) {
      errors.name = "Name value is required"
    }
    if(!values.price) {
      errors.price = "Price is required"
    }
    return errors;
  } 

  return (
    <>
      <div className='container mt-3'>
         <Breadcrumb breadcumbs={breadcrumbData}></Breadcrumb>
          <h3>Add product</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option selected>Select a product category</option>
                <option value="1">Electronic</option>
                <option value="2">Fashion</option>
                <option value="3">Sport</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input 
                  type="text" 
                  className="form-control"
                  name='name'
                  value={ formValues.name }
                  onChange={handleChange}
                  />
              <p class="text-danger">
                { formErrors.name }
              </p>

            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>

              {/* <EditorProvider>
                <Editor  onChange={handleOnChange}>
                  <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                  </Toolbar>
                </Editor>
              </EditorProvider> */}

            <textarea className="form-control" name='description' rows="3"></textarea>

            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input 
                type="text" 
                className="form-control"
                name="price"
                value={ formValues.price }
                onChange={handleChange} 
                />
              <p className="text-danger">
                { formErrors.price }
              </p>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    </>
  )
}

export default AddProduct
