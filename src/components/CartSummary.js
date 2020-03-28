import React, { useContext } from "react";
import ProductContext from "../contexts/productContext";

const CartSummary = props => {
  const { store, subtotal, calculateTotal } = useContext(ProductContext);

  return (
    <React.Fragment>
      <h3>CART TOTALS</h3>
      <table className='table'>
        <tbody>
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
    </React.Fragment>
  );
};

export default CartSummary;
