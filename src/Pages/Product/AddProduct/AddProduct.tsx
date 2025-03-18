import React from 'react'

import { 
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';

type Props = {}


const AddProduct = (props: Props) => {

    const handleSubmit = () => {
        //alert("Clicked test");
    }

    const handleOnChange = () => {
        // alert("test");
    }
    

  return (
    <>
    <div className='container mt-3'>
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
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
<EditorProvider>
      <Editor  onChange={handleOnChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
        </Toolbar>
      </Editor>
    </EditorProvider>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  )
}

export default AddProduct
