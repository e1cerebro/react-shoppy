import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import productContext from "../contexts/productContext";

export default props => {
  let order;
  const { store, findOrder } = useContext(productContext);
  console.log(store);

  useEffect(() => {
    findOrder(props.match.params.id);
    console.log("Find order: ", store.orders);
  }, []);
  return (
    <div className='container content'>
      <div className='jumbotron'>
        <h2 className='display-4'>Thank You!</h2>
        <p className='lead'>
          <strong>Your order has been received.</strong>
        </p>
        <hr />
        <h4>ORDER NUMBER:</h4>
        <p>#{props.match.params.id}</p>
        <h4>DATE:</h4>
        <p>May 20, 2020</p>
        <h4>PAYMENT METHOD:</h4>
        <p>Credit</p>

        <CartSummary />
        <hr />
        <p className='lead'>
          <Link to='/' className='btn btn-primary btn-md' role='button'>
            Continue to homepage
          </Link>
        </p>
      </div>
    </div>
  );
};
