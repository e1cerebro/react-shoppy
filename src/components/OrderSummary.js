import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import productContext from "../contexts/productContext";
import { format } from "date-fns";

export default props => {
  const id = parseInt(props.match.params.id);
  const [order, setorder] = useState("");
  const { getOrderDetails } = useContext(productContext);

  useEffect(() => {
    setorder(getOrderDetails(id));
  }, [order]);

  if (order) {
    return (
      <section className='main-section'>
        <div className='container'>
          <div className='jumbotron'>
            <h2 className='display-4'>Thank You!</h2>
            <p className='lead'>
              <strong>Your order has been received.</strong>
            </p>
            <hr />
            <h4>ORDER NUMBER:</h4>
            <p>#{order.orderNumber}</p>
            <h4>DATE:</h4>
            <p>{format(new Date(order.date), "PPP")}</p>
            <h4>PAYMENT METHOD:</h4>
            <p>{order.paymentmethod}</p>

            <CartSummary />
            <hr />
            <p className='lead'>
              <Link to='/' className='btn btn-primary' role='button'>
                Continue to homepage
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return <div>loading...</div>;
};
