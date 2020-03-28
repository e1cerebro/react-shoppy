import React, { useState, useReducer, createContext } from "react";
import reducer from "../reducer/products";
import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_PRODUCT,
  PROCESS_ORDER,
  DELETE_PRODUCT
} from "../reducer/types";
import history from "../history";

const ProductContext = createContext();
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "MEN'S GRAND COURT SNEAKER",
      shortdescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      maindescription:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
      regularPrice: "12.00",
      salePrice: "",
      img: "product image3.jpg"
    },
    {
      id: 2,
      name: "GARIBALDI V3 BOOT",
      shortdescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      maindescription:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? ",
      regularPrice: "82.00",
      salesPrice: "12.00",
      img: "product image1.jpg"
    },
    {
      id: 3,
      name: "6 INCH WATERPROOF BOOT",
      shortdescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      maindescription:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
      regularPrice: "52.00",
      salesPrice: "34.00",
      img: "product image4.jpg"
    }
  ],
  cart: [
    {
      id: 1,
      name: "MEN'S GRAND COURT SNEAKER",
      shortdescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      regularPrice: "12.00",
      salePrice: ""
    }
  ],
  config: { shipping: 16.99 },
  orders: [
    {
      email: "nwachukwu16@gmail.com",
      firstname: "Uchenna",
      lastname: "Nwachukwu",
      address: "1590 BORDEN STREET",
      apartment: "",
      phone: "5199921651",
      postalcode: "N5W 2R1",
      optionalnote: "",
      paymentmethod: "credit",
      cc_name: "John Doe",
      cc_number: "123131313131",
      cc_expiration: "1131",
      cc_cvv: "113",
      acknowlegment: true,
      orderNumber: 1585186479089
    }
  ]
};

export const ProductProvider = props => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  const addToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_TO_CART, payload: product });
      history.push("/cart");
    }, 600);
  };

  const fetchProduct = productId => {
    console.log(store);

    return store.products.filter(item => item.id == productId)[0];
  };

  const createProduct = product => {
    dispatch({ type: ADD_PRODUCT, payload: product });
    history.push("/");
  };

  const editProduct = payload => {
    dispatch({ type: EDIT_PRODUCT, payload });
    history.push(`/${payload.id}`);
  };

  const deleteProduct = payload => {
    dispatch({ type: DELETE_PRODUCT, payload });
    history.push("/");
  };

  const removeFromCart = productId => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const findOrder = orderId => {
    return {
      ...store,
      orders: store.orders.find(order => order.orderNumber == 0)
    };
  };

  const subtotal = () => {
    return store.cart.reduce(
      (total, item) => parseInt(item.regularPrice) + total,
      0
    );
  };

  const calculateTotal = () => {
    return (subtotal() + store.config.shipping).toFixed(2);
  };

  const processOrder = order => {
    dispatch({ type: PROCESS_ORDER, payload: order });
    console.log(order);
    history.push(`/order-summarry/${order.orderNumber}`);
  };

  const getProductInfo = id =>
    store.products.filter(product => product.id === parseInt(id))[0];

  return (
    <ProductContext.Provider
      value={{
        store,
        addToCart,
        removeFromCart,
        createProduct,
        fetchProduct,
        subtotal,
        calculateTotal,
        editProduct,
        processOrder,
        findOrder,
        getProductInfo,
        deleteProduct
      }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
