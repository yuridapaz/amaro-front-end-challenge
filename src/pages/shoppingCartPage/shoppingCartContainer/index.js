import React from 'react';
import './index.css';

const ShoppingCartContainer = ({ children }) => {
  return (
    <>
      <div className='shopping__cart__container'>{children}</div>
    </>
  );
};

export default ShoppingCartContainer;
