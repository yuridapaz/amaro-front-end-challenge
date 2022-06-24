import React from 'react';
import './index.css';

const ProductContainerDisplay = ({ product }) => {
  return (
    <>
      <div className='product__container__display'>
        <div className='product__img__div'>
          <img src={product.image} alt='' />
        </div>
        <div className='product__description'>
          <h1 className='product__title'>{product.name}</h1>
          <p className='product__display__p'>
            <span className='product__display__price'>{product.actual_price} </span>
            <span className='product__display__installments'>{product.installments} </span>
          </p>
          <p className='product__color'>
            Cor: <span>{product.color}</span>
          </p>
          <div className='product__sizes'>
            <p className='product__sizes__title'>Tamanhos:</p>
            <div className='product__sizes__display'>
              {product.sizes.map((sizes) => {
                return <button className='product__size__btn'>{sizes.size} </button>;
              })}
            </div>
          </div>
        </div>
        <div className='shopping__button__container'>
          <button className='shopping__button'>COMPRAR</button>
        </div>
      </div>
    </>
  );
};

export default ProductContainerDisplay;
