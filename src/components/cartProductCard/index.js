import React from 'react';
import './index.css';

const CartProductCard = ({ product, removeFromCart, addToCart }) => {
  return (
    <>
      <div className='cart__product__container'>
        <div className='cart__product__img'>
          <img src={product.image} alt='' />
        </div>
        <div className='cart__product__description'>
          <h1 className='cart__product__description__title'>{product.name}</h1>
          <div className='cart__product__style'>
            <p className='product__style__color'>
              Cor:<span>{product.color}</span>
            </p>
            <p className='product__style__size'>
              Tamanho:<span>{product.tamanho.size}</span>
            </p>
          </div>
          <div className='cart__product__abp'>
            <div className='product__abp__actions'>
              <button className='product__abp__button' onClick={removeFromCart}>
                -
              </button>
              <p className='product__abp__qtd'>{product.qtd} </p>
              <button className='product__abp__button' onClick={addToCart}>
                +
              </button>
            </div>
            <p className='product__abp__price'>R$ {(product.price * product.qtd).toFixed(2)} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductCard;
