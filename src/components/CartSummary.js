import React, { useContext, Fragment } from "react";
import ProductContext from "../contexts/productContext";

import "./CartSummary.css";

const CartSummary = props => {
  const { store, subtotal, calculateTotal, getPrice } = useContext(
    ProductContext
  );

  const renderCartProducts = () => {
    return store.cart.map(product => (
      <tr key={product.id}>
        <th scope='row'>{product.name}</th>
        <td>
          <span className='float-right'>{getPrice(product.id)}</span>
        </td>
      </tr>
    ));
  };

  return (
    <div className='cart-summary'>
      <h3>CART TOTALS</h3>
      <table className='table'>
        <tbody>
          {renderCartProducts()}
          <tr>
            <th scope='row'>Subtotal</th>
            <td>
              <span className='float-right'>${subtotal()}</span>
            </td>
          </tr>
          <tr>
            <th scope='row'>Shipping</th>
            <td>
              <span className='float-right'>${store.config.shipping}</span>
            </td>
          </tr>
          <tr>
            <th scope='row'>Total</th>
            <td>
              <span className='float-right'>${calculateTotal()}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
