import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import ProductContext from "../contexts/productContext";
import AddToCartButton from "./AddToCartButton";
import "./SingleProduct.css";

const SingleProduct = props => {
  const id = parseInt(props.match.params.id);

  const [product, setProduct] = useState();
  const { store, fetchProduct, addToCart, getPrice } = useContext(
    ProductContext
  );

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    setProduct(fetchProduct(id));
  }, [store]);

  if (product) {
    return (
      <Fragment>
        <header className=' header-banner   d-flex align-items-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-7'>
                <h3 className='text-white'>{product.name}</h3>
              </div>
              <div className='col-sm-5'></div>
            </div>
          </div>
        </header>
        <section className='main-section'>
          <div className='container'>
            <div className='row '>
              <div className='col-5'>
                <img
                  src={require("./img/product image4.jpg")}
                  className='card-img-top single-product-img'
                  alt={product.name}
                />
              </div>
              <div className='col-7'>
                <h4 className='single-product-title mb-3'>{product.name}</h4>
                <span className='single-product-price mb-2'>
                  {getPrice(id)}
                </span>
                <p className='single-product-short-description mb-4'>
                  {product.shortdescription}
                </p>
                <AddToCartButton
                  products={store}
                  handleAddToCart={handleAddToCart}
                  id={id}
                />
                <hr />
                <div className='float-right'>
                  <Link to={`/edit/${id}`} className='btn btn-primary btn-md'>
                    <i className='fas fa-edit'></i> Edit
                  </Link>
                  &nbsp;
                  <Link to={`/delete/${id}`} className='btn btn-md btn-danger'>
                    <i className='fas fa-trash'></i> Delete
                  </Link>
                </div>
              </div>
            </div>

            <div className='row single-product-description'>
              <div className='col-12'>
                <div className='section-title'>
                  <h1 className='display-5 bordered-right-page-title'>
                    Description
                  </h1>
                </div>
                {product.maindescription}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  } else
    return (
      <section className='main-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='alert alert-info' role='alert'>
                <h5>404 ERROR! Product was not found!</h5>
                <Link className='btn btn-success' to={`/`}>
                  <i className='fas fa-long-arrow-alt-left'></i> Go back to home
                  page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SingleProduct;
