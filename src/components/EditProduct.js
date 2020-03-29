import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../contexts/productContext";
import { Link } from "react-router-dom";

const EditProduct = props => {
  const { fetchProduct, editProduct } = useContext(ProductContext);

  const [product, setProduct] = useState({});

  const [name, setName] = useState(product.name);
  const [regularPrice, setRegularPrice] = useState(product.regularPrice);
  const [salesPrice, setSalesPrice] = useState(product.salePrice);
  const [shortdescription, setShortDescription] = useState(
    product.shortdescription
  );
  const [maindescription, setMainDescription] = useState(
    product.maindescription
  );

  const id = parseInt(props.match.params.id);

  const handleNameChange = event => setName(event.target.value);
  const handleRegularPrice = event => setRegularPrice(event.target.value);
  const handleSalesPrice = event => setSalesPrice(event.target.value);
  const handleShortDescription = event =>
    setShortDescription(event.target.value);
  const handleMainDescription = event => setMainDescription(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    const product = {
      id,
      name,
      regularPrice: parseInt(regularPrice).toFixed(2),
      salesPrice: parseInt(salesPrice).toFixed(2),
      shortdescription,
      maindescription
    };

    editProduct(product);
  };

  useEffect(() => {
    setProduct(fetchProduct(id));
    setName(product.name);
    setRegularPrice(product.regularPrice);
    setSalesPrice(product.salesPrice);
    setShortDescription(product.shortdescription);
    setMainDescription(product.maindescription);
  }, [product]);

  if (product) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h3>
              <Link to={`/${id}`}>
                <i className='fas fa-long-arrow-alt-left'></i> Go Back{" "}
                {product.name}
              </Link>
            </h3>
            <form className='mt-4 form' id='form' onSubmit={handleFormSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='Name'
                  name='name'
                  onChange={handleNameChange}
                  value={name || ""}
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='regularPrice'>Regular Price</label>
                <input
                  type='text'
                  className='form-control'
                  name='regularPrice'
                  value={regularPrice || ""}
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
                  value={salesPrice || ""}
                  onChange={handleSalesPrice}
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea
                  className='form-control'
                  id='Description'
                  value={shortdescription || ""}
                  onChange={handleShortDescription}
                  name='description'
                  rows='3'></textarea>
              </div>

              <div className='form-group'>
                <label htmlFor='description'>Main Description</label>
                <textarea
                  className='form-control'
                  id='main-description'
                  value={maindescription || ""}
                  onChange={handleMainDescription}
                  name='maindescription'
                  rows='8'></textarea>
              </div>
              <a href={`/${id}`} className='btn btn-danger btn-lg'>
                <i className='fas fa-long-arrow-alt-left'></i> Go Back
              </a>
              <button
                type='submit'
                id='button'
                className='btn btn-primary btn-lg float-right'>
                <i className='fas fa-edit'></i> Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default EditProduct;
