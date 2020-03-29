import React, { useContext } from "react";
import ProductContext from "../contexts/productContext";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import "./Product.css";

const Product = props => {
  // Destructure the product props
  const { id, name, shortdescription } = props.product;
  // Destructure the product context
  const { store, addToCart, getPrice } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(props.product);
  };

  return (
    <div col='col-4'>
      <div className='card' style={style}>
        <img
          src={require("./img/product image3.jpg")}
          className='card-img-top'
          alt={name}
        />

        <div className='card-body'>
          <h5 className='card-title product-title'>
            <Link to={`/${id}`}>{name}</Link>
          </h5>
          <span className='catalog-display'>{getPrice(id)}</span>
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

const style = { width: "22rem", margin: "10px 10px" };

export default Product;
