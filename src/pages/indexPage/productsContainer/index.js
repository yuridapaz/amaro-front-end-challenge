import React from 'react';
import './index.css';

const ProductsContainer = ({ children }) => {
  return (
    <>
      <div className='products__container__index'>{children}</div>
    </>
  );
};

export default ProductsContainer;
