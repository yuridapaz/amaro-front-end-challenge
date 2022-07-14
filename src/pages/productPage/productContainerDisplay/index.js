import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { createCartItem } from '../../../helpers/createCartItem';
import { ShoppingCartContext } from '../../../providers/shoppingCart';

const ProductContainerDisplay = ({ product }) => {
  const [sizeProps, setSizeProps] = useState();
  const [selectSize, setSelectSize] = useState('hide');
  const { cartItems, addToCart } = React.useContext(ShoppingCartContext);

  function comprarProduto(product, size) {
    const price = Number(product.actual_price.replace(',', '.').replace(/[^0-9.-]+/g, ''));
    if (sizeProps !== undefined) {
      const item = createCartItem(product, size, price);
      addToCart(item, cartItems);
    }
    if (sizeProps === undefined) setSelectSize('show');
  }

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
            <div className={`product__sizes__display ${selectSize}`}>
              {product.sizes.map((sizeObject) => {
                return (
                  <div key={sizeObject.size}>
                    <input
                      className='hidebox'
                      type='radio'
                      name='size'
                      id={sizeObject.size}
                      value={sizeObject.size}
                      disabled={!sizeObject.available}
                      onChange={() => {
                        setSizeProps(sizeObject);
                        setSelectSize('hide');
                      }}
                    />
                    <label htmlFor={sizeObject.size} className='product__size__btn'>
                      {sizeObject.size}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='shopping__button__container__desktop'>
            <Link to={`/shopping-cart`}>
              <button
                className='shopping__button'
                onClick={() => comprarProduto(product, sizeProps)}
              >
                COMPRAR
              </button>
            </Link>
          </div>
        </div>
        <div className='shopping__button__container'>
          <Link to={`/shopping-cart`}>
            <button className='shopping__button' onClick={() => comprarProduto(product, sizeProps)}>
              COMPRAR
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductContainerDisplay;
