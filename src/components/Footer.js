import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className='bg-dark py-2 mt-5 text-white' style={style}>
        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <a href='/'> shoppy.com</a>
        </div>
      </footer>
    </Fragment>
  );
};

const style = {};
export default Footer;
