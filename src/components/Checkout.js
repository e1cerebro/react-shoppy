import React, { useState } from "react";
import CartSummary from "./CartSummary";
import PaymentForm from "./PaymentForm";
import { Elements } from "react-stripe-elements";

import "./Checkout.css";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [phone, setPhone] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [optionalnote, setOptionalNote] = useState("");

  const handleEmailChange = event => setEmail(event.target.value);
  const handleFirstName = event => setFirstName(event.target.value);
  const handleLastName = event => setLastName(event.target.value);
  const handleAddress = event => setAddress(event.target.value);
  const handleApartment = event => setApartment(event.target.value);
  const handlePhone = event => setPhone(event.target.value);
  const handlePostalCode = event => setPostalCode(event.target.value);
  const handleOptionalNote = event => setOptionalNote(event.target.value);

  const customerData = {
    email,
    firstname,
    lastname,
    address,
    apartment,
    phone,
    postalcode,
    optionalnote
  };

  return (
    <section className='main-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-7'>
            <h3 className='text-uppercase'>Billing Details</h3>
            <hr />
            <form>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='Enter your email...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='firstname'>First name</label>
                <input
                  type='text'
                  className='form-control'
                  id='firstname'
                  value={firstname}
                  onChange={handleFirstName}
                  placeholder='Enter your first name...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='lastname'>Last name</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastname'
                  value={lastname}
                  onChange={handleLastName}
                  placeholder='Enter your last name...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='address'>Street address</label>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  value={address}
                  onChange={handleAddress}
                  placeholder='Enter your address...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='apartment'>Apartment</label>
                <input
                  type='text'
                  className='form-control'
                  id='apartment'
                  value={apartment}
                  onChange={handleApartment}
                  placeholder='Enter your apartment...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='postalcode'>Postal code</label>
                <input
                  type='text'
                  className='form-control'
                  id='postalcode'
                  value={postalcode}
                  onChange={handlePostalCode}
                  placeholder='Enter your postalcode...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='tel'
                  className='form-control'
                  id='phone'
                  value={phone}
                  onChange={handlePhone}
                  placeholder='Enter your phone...'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='optionalnotes'>Optional notes (optional)</label>
                <textarea
                  className='form-control'
                  id='optionalnotes'
                  rows='5'
                  value={optionalnote}
                  onChange={handleOptionalNote}
                  placeholder='Optional notes'></textarea>
              </div>
            </form>
          </div>
          <div className='col-sm-5 checkout-summary '>
            <CartSummary />
            <Elements>
              <PaymentForm customer={customerData} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
