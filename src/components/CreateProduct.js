import React, { useState, useContext } from "react";
import ProductContext from "../contexts/productContext";

const CreateProduct = () => {
  const { store, createProduct } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [shortdescription, setShortDescription] = useState("");
  const [maindescription, setMainDescription] = useState("");

  const handleNameChange = event => setName(event.target.value);
  const handleRegularPrice = event => setRegularPrice(event.target.value);
  const handleSalesPrice = event => setSalesPrice(event.target.value);
  const handleShortDescription = event =>
    setShortDescription(event.target.value);
  const handleMainDescription = event => setMainDescription(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    const product = {
      id: Date.now(),
      name,
      regularPrice,
      salesPrice,
      shortdescription,
      maindescription,
      img: ""
    };

    createProduct(product);
  };

  return (
    <div
      className='container'
      style={{ marginTop: "132px", marginBottom: "126px" }}>
      <div className='row'>
        <div className='col-sm-6 offset-md-3'>
          <h1 class='display-5 page-title'>Create Product</h1>
          <form className='mt-4 form' id='form' onSubmit={handleFormSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                id='Name'
                name='name'
                onChange={handleNameChange}
                value={name}
                aria-describedby='emailHelp'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='regularPrice'>Regular Price</label>
              <input
                type='text'
                className='form-control'
                name='regularPrice'
                value={regularPrice}
                onChange={handleRegularPrice}
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='salesPrice'>Sales Price</label>
              <input
                type='text'
                className='form-control'
                name='salesPrice'
                value={salesPrice}
                onChange={handleSalesPrice}
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Short Description</label>
              <textarea
                className='form-control'
                id='short-description'
                value={shortdescription}
                onChange={handleShortDescription}
                name='shortdescription'
                rows='3'></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Main Description</label>
              <textarea
                className='form-control'
                id='main-description'
                value={maindescription}
                onChange={handleMainDescription}
                name='maindescription'
                rows='8'></textarea>
            </div>

            <button
              type='submit'
              id='button'
              className='btn btn-lg btn-primary'>
              PUBLISH NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
