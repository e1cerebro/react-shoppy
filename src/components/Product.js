import React, { useContext, Fragment } from "react";
import ProductContext from "../contexts/productContext";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import "./Product.css";

const Product = props => {
  const {
    id,
    name,
    shortdescription,
    regularPrice,
    salesPrice
  } = props.product;
  const { store, addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(props.product);
  };

  const renderPrice = () => {
    if (salesPrice && regularPrice) {
      return (
        <div className='onsale'>
          <span className='regular-price'>${regularPrice}</span>
          <span className='sales-price'>${salesPrice}</span>
        </div>
      );
    } else if (regularPrice && !salesPrice) {
      return <span className='regular-price'>${regularPrice}</span>;
    } else {
      return "";
    }
  };
  return (
    <div col='col-4'>
      <div className='card' style={{ width: "22rem", margin: "10px 10px" }}>
        <img
          src={require("./img/product image3.jpg")}
          className='card-img-top'
          alt={name}
        />

        <div className='card-body'>
          <h5 className='card-title product-title'>
            <Link to={`/${id}`}>{name}</Link>
          </h5>
          {renderPrice()}
          <p className='card-text product-description'>{shortdescription}</p>
          <AddToCartButton
            products={store}
            handleAddToCart={handleAddToCart}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
