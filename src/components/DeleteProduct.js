import React, { Fragment, useEffect, useContext } from "react";
import Modal from "./Modal";
import productContext from "../contexts/productContext";
import $ from "jquery";

const DeleteProduct = props => {
  const { store, getProductInfo, deleteProduct } = useContext(productContext);
  const productId = parseInt(props.match.params.id);
  useEffect(() => {
    $("#shoppyModal").modal("show");
  }, []);

  const { name } = getProductInfo(productId);

  const removeProduct = () => {
    deleteProduct(productId);
    $("#shoppyModal").modal("hide");
  };

  return (
    <Fragment>
      <Modal
        deleteProduct={removeProduct}
        title={`Delete Product: ${name}`}
        content='Are you sure you want to proceed? This action cannot be undone'
        acceptButtonText='Delete Product'
        acceptButtonType='danger'
        rejectButtonText='Go back'
        rejectButtonType='primary'
        redirectURL={`/${productId}`}
      />
    </Fragment>
  );
};

export default DeleteProduct;
