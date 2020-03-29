import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import PropTypes from "prop-types";
import axios from "axios";
import qs from "query-string-object";
import paymentmethods from "./img/paymentmethods.png";

class PaymentForm extends Component {
  state = {
    paymentmethod: "",
    cc_name: "",
    cc_number: "",
    cc_expiration: "",
    cc_cvv: "",
    acknowlegment: ""
  };

  handlePaymentMethod = event =>
    this.setState({ paymentmethod: event.target.id });
  handleSetcc_name = event => this.setState({ cc_name: event.target.value });
  handleSetcc_number = event =>
    this.setState({ cc_number: event.target.value });
  handleSetcc_expiration = event =>
    this.setState({ cc_expiration: event.target.value });
  handleSetcc_cvv = event => this.setState({ cc_cvv: event.target.value });
  handleSetacknowlegment = event =>
    this.setState({ acknowlegment: event.target.checked });

  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];
  // const today = new Date();
  // const date =
  //   months[today.getMonth()] +
  //   " " +
  //   today.getDate() +
  //   ", " +
  //   today.getFullYear();

  // const paymentData = {
  //   paymentmethod,
  //   cc_name,
  //   cc_number,
  //   cc_expiration,
  //   cc_cvv,
  //   acknowlegment,
  //   date: date,
  //   orderNumber: Date.now()
  // };

  stripeAuthHeader = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer rk_test_VgEfxE4ZNNwfjphmfcmonv8p00BxrNzq89`
  };

  submitOrder = async event => {
    event.preventDefault();
    try {
      const { token } = await this.props.stripe.createToken();
      const payment = await axios.post(
        `https://api.stripe.com/v1/charges`,
        qs.stringify({
          source: token.id,
          amount: parseInt(this.props.orderTotal) * 100,
          currency: "cad",
          description: "Test purchase on Shoppy",
          receipt_email: "nwachukwu16@gmail.com",
          shipping: {
            address: {
              city: "London",
              country: "Canada",
              line1: this.props.customer.address,
              line2: null,
              postal_code: this.props.customer.postalcode,
              state: "Ontario"
            },
            phone: this.props.customer.phone,
            name: `${this.props.customer.firstname} ${this.props.customer.lastname}`
          }
        }),
        { headers: this.stripeAuthHeader }
      );

      console.log(payment);
    } catch (error) {
      console.log(error);
    }

    //processOrder({ ...customer, ...paymentData });
  };

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.submitOrder}>
          <div className='card' style={{ width: "450px" }}>
            <div className='card-body'>
              <div className='d-block my-3'>
                <h4>Pay securely</h4>
                <div
                  style={{
                    width: "415px",
                    margin: "0 auto",
                    padding: "23px",
                    borderRadius: "10px",
                    backgroundColor: "#e1e1e1",
                    border: " 1px solid #cbcbcb"
                  }}>
                  <CardElement style={{ base: { fontSize: "18px" } }} />
                </div>

                <div className='mt-4'>
                  <button className='btn btn-lg btn-primary btn-block'>
                    <i className='fab fa-cc-stripe'></i> Pay Now
                  </button>
                </div>
                <div className='payment-icons' style={{ textAlign: "center" }}>
                  <h5 className='mt-3'>We Accept</h5>
                  <img src={paymentmethods} style={{ width: "160px" }} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
PaymentForm.propTypes = {
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }).isRequired
};
export default injectStripe(PaymentForm);
