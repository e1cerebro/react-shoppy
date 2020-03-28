import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../history";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CreateProduct from "../components/CreateProduct";
import SingleProduct from "../components/SingleProduct";
import EditProduct from "../components/EditProduct";
import Checkout from "../components/Checkout";
import OrderSummary from "../components/OrderSummary";
import DeleteProduct from "../components/DeleteProduct";
import Footer from "../components/Footer";
import { ProductProvider } from "../contexts/productContext";

import image1 from "../img/slider1.jpg";
import image2 from "../img/slider2.jpg";
import image3 from "../img/slider3.jpg";

const App = () => {
  return (
    <Fragment>
      <Router history={history}>
        <ProductProvider>
          <Header />
          <Switch>
            <Route path='/' exact component={ProductList} />
            <Route path='/about-us' exact component='' />
            <Route path='/contact-us' exact component='' />
            <Route path='/cart' exact component={Cart} />{" "}
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/order-summarry/:id' exact component={OrderSummary} />
            <Route path='/create-product' exact component={CreateProduct} />
            <Route path='/:id' exact component={SingleProduct} />
            <Route path='/edit/:id' exact component={EditProduct} />
            <Route path='/delete/:id' exact component={DeleteProduct} />
          </Switch>
          <Footer />
        </ProductProvider>
      </Router>
    </Fragment>
  );
};

export default App;
