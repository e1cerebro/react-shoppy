import React from "react";

export default props => {
  const renderButton = () => {
    const result = props.products.cart.find(element => element.id == props.id);
    if (result === undefined) {
      return (
        <button onClick={props.handleAddToCart} className='btn btn-success'>
          ADD TO CART <i className='fas fa-cart-plus'></i>
        </button>
      );
    } else {
      return (
        <button
          onClick={props.handleAddToCart}
          className='btn btn-secondary disabled'>
          ADDED TO CART <i className='fas fa-ban'></i>
        </button>
      );
    }
  };

  return <div>{renderButton()}</div>;
};
