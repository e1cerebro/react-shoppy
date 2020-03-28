import React, { useState, useContext, Fragment } from "react";

import ProductContext from "../contexts/productContext";
import Product from "../components/Product";
import HeroSlider from "../components/HeroSlider";

const ProductList = () => {
  const { store } = useContext(ProductContext);
  console.log("list", store);

  const renderProduct = () => {
    return store.products.map(product => {
      return <Product key={product.id} product={product} />;
    });
  };

  return (
    <Fragment>
      <div className='container-fluid' style={{ padding: "0 0" }}>
        <HeroSlider />
      </div>

      <div className='container ' style={{ width: "80%" }}>
        <div style={{ marginTop: "100px" }}>
          <h1 className='display-5 bordered-page-title'>Featured Products</h1>
          <p className='lead text-center'>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit. There is no one who loves pain itself,
            who seeks after it and wants to have it, simply because it is pain."
          </p>
        </div>
        <div className='row content'>{renderProduct()}</div>
      </div>
    </Fragment>
  );
};

export default ProductList;
