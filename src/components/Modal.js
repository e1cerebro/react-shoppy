import React from "react";
import { createPortal } from "react-dom";
import history from "../history";

const Modal = ({
  redirectURL,
  title,
  content,
  acceptButtonText,
  acceptButtonType,
  rejectButtonText,
  rejectButtonType,
  deleteProduct
}) => {
  const dispatchAction = () => {
    deleteProduct();
  };
  return createPortal(
    <div
      className='modal fade'
      id='shoppyModal'
      tabIndex='-1'
      role='dialog'
      data-backdrop='static'
      aria-labelledby='shoppyLabel'
      aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='shoppyLabel'>
              {title}
            </h5>
            <button
              onClick={() => history.push(redirectURL)}
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{content}</div>
          <div className='modal-footer'>
            <button
              onClick={() => history.push(redirectURL)}
              type='button'
              className={`btn btn-${rejectButtonType}`}
              data-dismiss='modal'>
              {rejectButtonText}
            </button>
            <button
              type='button'
              onClick={dispatchAction}
              className={`btn btn-${acceptButtonType}`}>
              {acceptButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#body")
  );
};

export default Modal;
