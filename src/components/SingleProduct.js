import React, { useEffect, useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import ProductContext from "../contexts/productContext";
import AddToCartButton from "./AddToCartButton";
import "./SingleProduct.css";

const SingleProduct = props => {
  const id = props.match.params.id;
  const [product, setProduct] = useState();
  const { store, fetchProduct, addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    setProduct(fetchProduct(id));
  }, [store]);

  const renderPrice = () => {
    if (product.salesPrice && product.regularPrice) {
      return (
        <div className='onsale'>
          <span className='regular-price'>${product.regularPrice}</span>
          <span className='sales-price'>${product.salesPrice}</span>
        </div>
      );
    } else if (product.regularPrice && !product.salesPrice) {
      return <span className='regular-price'>${product.regularPrice}</span>;
    } else {
      return "";
    }
  };

  if (product) {
    return (
      <Fragment>
        <header className=' header-banner fixed-top d-flex align-items-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-7'>
                <h3 className='text-white'>{product.name}</h3>
              </div>
              <div className='col-sm-5'></div>
            </div>
          </div>
        </header>
        <div className='container content'>
          <div className='row '>
            <div className='col-5'>
              <img
                src={require("./img/product image4.jpg")}
                className='card-img-top'
                alt={product.name}
              />
            </div>
            <div className='col-7'>
              <h4 className='single-product-title mb-3'>{product.name}</h4>
              <span className='single-product-price mb-2'>{renderPrice()}</span>
              <p className='single-product-short-description mb-4'>
                {product.shortdescription}
              </p>
              <AddToCartButton
                products={store}
                handleAddToCart={handleAddToCart}
                id={id}
              />
              <hr />
              <Link to={`/edit/${id}`} className='btn btn-primary btn-sm'>
                Edit
              </Link>
              &nbsp;
              <Link to={`/delete/${id}`} className='btn btn-sm btn-danger'>
                Delete
              </Link>
            </div>
          </div>

          <div className='row single-product-description'>
            <div className='col-12'>
              <div class='section-title'>
                <h1 className='display-5 bordered-right-page-title'>
                  Description
                </h1>
              </div>
              {product.maindescription}
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else return <div>Loading...</div>;
};

export default SingleProduct;
