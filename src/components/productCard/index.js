import React from 'react';
import './index.css';

const index = ({ product }) => {
  return (
    <div className='productCard__container'>
      <div className='productCard__img__div'>
        <img src={product.image} alt='' />
      </div>
      <div className='productCard__description'>
        <h1 className='productCard__name'>{product.name}</h1>
        <p className='productCard__price'>
          <span className='actualCard__price'>{product.actual_price}</span>
          <span className='installments'>{product.installments}</span>
        </p>
      </div>
    </div>
  );
};

export default index;
