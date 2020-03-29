import React, { useContext, useState } from "react";
import productContext from "../contexts/productContext";

const PaymentForm = ({ customer }) => {
  const [paymentmethod, setpaymentmethod] = useState("credit");
  const [cc_name, setcc_name] = useState("");
  const [cc_number, setcc_number] = useState("");
  const [cc_expiration, setcc_expiration] = useState("");
  const [cc_cvv, setcc_cvv] = useState("");
  const [acknowlegment, setacknowlegment] = useState("");

  const handlePaymentMethod = event => setpaymentmethod(event.target.id);
  const handleSetcc_name = event => setcc_name(event.target.value);
  const handleSetcc_number = event => setcc_number(event.target.value);
  const handleSetcc_expiration = event => setcc_expiration(event.target.value);
  const handleSetcc_cvv = event => setcc_cvv(event.target.value);
  const handleSetacknowlegment = event =>
    setacknowlegment(event.target.checked);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const today = new Date();
  const date =
    months[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();

  const paymentData = {
    paymentmethod,
    cc_name,
    cc_number,
    cc_expiration,
    cc_cvv,
    acknowlegment,
    date: date,
    orderNumber: Date.now()
  };

  const { processOrder } = useContext(productContext);

  const submitOrder = event => {
    event.preventDefault();
    processOrder({ ...customer, ...paymentData });
  };
  return (
    <div className='row'>
      <form onSubmit={submitOrder}>
        <div className='card' style={{ width: "100%" }}>
          <div className='card-body'>
            <div className='d-block my-3'>
              <h3>Pay securely</h3>
              <div className='custom-control custom-radio'>
                <input
                  id='credit'
                  name='paymentMethod'
                  value={paymentmethod}
                  type='radio'
                  className='custom-control-input'
                  checked={true}
                  onChange={handlePaymentMethod}
                  required=''
                />
                <label className='custom-control-label' htmlFor='credit'>
                  Credit card
                </label>
              </div>
              <div className='custom-control custom-radio'>
                <input
                  id='debit'
                  name='paymentMethod'
                  type='radio'
                  onChange={handlePaymentMethod}
                  className='custom-control-input'
                  required=''
                />
                <label className='custom-control-label' htmlFor='debit'>
                  Debit card
                </label>
              </div>
              <div className='custom-control custom-radio'>
                <input
                  id='paypal'
                  name='paymentMethod'
                  type='radio'
                  onChange={handlePaymentMethod}
                  className='custom-control-input'
                  required=''
                />
                <label className='custom-control-label' htmlFor='paypal'>
                  Paypal
                </label>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='cc_name'
                  name='cc_name'
                  value={cc_name}
                  onChange={handleSetcc_name}
                  placeholder=''
                  required={true}
                />
                <label htmlFor='cc-name'>Name on card</label>
                <small className='text-muted'>
                  Full name as displayed on card
                </small>
                <div className='invalid-feedback'>Name on card is required</div>
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='cc_number'
                  name='cc_number'
                  value={cc_number}
                  onChange={handleSetcc_number}
                  placeholder=''
                  required={true}
                />
                <label htmlFor='cc-number'>Credit card number</label>

                <div className='invalid-feedback'>
                  Credit card number is required
                </div>
              </div>
            </div>
            {/* End Name row */}

            <div className='row'>
              <div className='col-md-3 mb-3'>
                <label htmlFor='cc-expiration'>Expiration</label>
                <input
                  type='text'
                  className='form-control'
                  id='cc_expiration'
                  name='cc_expiration'
                  value={cc_expiration}
                  onChange={handleSetcc_expiration}
                  placeholder=''
                  required={true}
                />
                <div className='invalid-feedback'>Expiration date required</div>
              </div>
              <div className='col-md-3 mb-3'>
                <label htmlFor='cc_cvv'>CVV</label>
                <input
                  type='text'
                  className='form-control'
                  id='cc_cvv'
                  name='cc_cvv'
                  value={cc_cvv}
                  onChange={handleSetcc_cvv}
                  placeholder=''
                  required={true}
                />
                <div className='invalid-feedback'>Security code required</div>
              </div>
            </div>
            {/* End Card Details Row */}
          </div>
        </div>

        <div className='form-check my-4'>
          <input
            className='form-check-input'
            type='checkbox'
            name='acknowlegment'
            value={acknowlegment}
            onChange={handleSetacknowlegment}
            required
            id='acknowlegment'
          />

          <label className='form-check-label' htmlFor='acknowlegment'>
            I have read and agree to the website terms and conditions *
          </label>
        </div>

        <button className='btn btn-lg btn-primary btn-block'>Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
