import React from 'react';
import './index.css';

const CartProductCard = () => {
  const product = {
    name: 'VESTIDO TRANSPASSE BOW',
    style: '20002605',
    code_color: '20002605_613',
    color_slug: 'tapecaria',
    color: 'TAPEÇARIA',
    on_sale: false,
    regular_price: 'R$ 199,90',
    actual_price: 'R$ 199,90',
    discount_percentage: '',
    installments: '3x R$ 66,63',
    image:
      'https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912',
    sizes: [
      {
        available: false,
        size: 'PP',
        sku: '5807_343_0_PP',
      },
      {
        available: true,
        size: 'P',
        sku: '5807_343_0_P',
      },
      {
        available: true,
        size: 'M',
        sku: '5807_343_0_M',
      },
      {
        available: true,
        size: 'G',
        sku: '5807_343_0_G',
      },
      {
        available: false,
        size: 'GG',
        sku: '5807_343_0_GG',
      },
    ],
  };

  return (
    <>
      <div className='cart__product__container'>
        <div className='cart__product__img'>
          <img src={product.image} alt='' />
        </div>
        <div className='cart__product__description'>
          <h1 className='cart__product__description__title'>Nome do produto</h1>
          <div className='cart__product__style'>
            <p className='product__style__color'>
              Cor:<span>Rosa</span>
            </p>
            <p className='product__style__size'>
              Tamanho:<span>G</span>
            </p>
          </div>
          <div className='cart__product__abp'>
            <div className='product__abp__actions'>
              <button className='product__abp__button'>-</button>
              <p className='product__abp__qtd'>1</p>
              <button className='product__abp__button'>+</button>
            </div>
            <p className='product__abp__price'>R$ 234,30</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductCard;
