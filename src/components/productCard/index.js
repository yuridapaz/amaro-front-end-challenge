import React from 'react';
import './index.css';

const index = ({ product }) => {
  return (
    <div className='product__card__container'>
      <div className='product__img__div'>
        <img src={product.image} alt='' />
      </div>
      <div className='product__description'>
        <h1 className='product__name'>{product.name}</h1>
        <p className='product__price'>
          <span className='actual__price'>{product.actual_price}</span>
          <span className='installments'>{product.installments}</span>
        </p>
      </div>
    </div>
  );
};

export default index;
