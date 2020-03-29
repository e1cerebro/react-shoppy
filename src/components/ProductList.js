import React, { useContext, Fragment } from "react";

import ProductContext from "../contexts/productContext";
import Product from "../components/Product";
import HeroSlider from "../components/HeroSlider";

const ProductList = () => {
  const { store } = useContext(ProductContext);
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
      <section className='main-section'>
        <div className='container ' style={{ width: "80%" }}>
          <div className='mt-5'>
            <h1 className='display-5 bordered-page-title'>Featured Products</h1>
            <p className='lead text-center'>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit. There is no one who loves pain
              itself, who seeks after it and wants to have it, simply because it
              is pain."
            </p>
          </div>
          <div className='row mt-5'>{renderProduct()}</div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductList;
