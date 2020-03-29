import React, { useContext } from "react";
import ProductContext from "../contexts/productContext";
import { Link } from "react-router-dom";

import CartSummary from "./CartSummary";

const Cart = () => {
  const { store, removeFromCart, getPrice } = useContext(ProductContext);

  const removeCartProduct = id => {
    removeFromCart(id);
  };

  const renderCart = () => {
    return store.cart.map((item, index) => {
      return (
        <tr key={item.id}>
          <th scope='row'>{index + 1}</th>
          <td>{item.name}</td>
          <td>{getPrice(item.id)}</td>
          <td>
            <button
              onClick={() => removeCartProduct(item.id)}
              type='button'
              className='btn btn-danger'>
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };

  if (store.cart.length > 0) {
    return (
      <section className='main-section'>
        <div className='container'>
          <div className='row' style={{ marginTop: "40px" }}>
            <div className='col-7'>
              <table className='table table-striped'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>{renderCart()}</tbody>
                <tfoot className='thead-dark'>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Action</th>
                  </tr>
                </tfoot>
              </table>
              <div className='row'>
                <div className='col-6'>
                  <Link to='/' className='btn btn-primary float-left'>
                    Continue Shopping
                  </Link>
                </div>
                <div className='col-6 '>
                  <Link to='/checkout' className='btn btn-success float-right'>
                    Continue to Checkout
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className='main-section'>
        <div
          className='alert alert-info'
          style={{ marginTop: "100px" }}
          role='alert'>
          Cart is empty!
        </div>
      </section>
    );
  }
};

export default Cart;
