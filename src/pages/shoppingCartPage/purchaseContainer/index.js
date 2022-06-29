import React from 'react';
import './index.css';
import { ShoppingCartContext } from '../../../providers/shoppingCart';

const PurchaseContainer = () => {
  const { cartItems, calcTotalPrice } = React.useContext(ShoppingCartContext);
  const finalPrice = calcTotalPrice(cartItems).toFixed(2);

  return (
    <>
      <div className='purchase__container'>
        <div className='total__purchase__div'>
          <p className='total_a_pagar'>Total a pagar</p>
          <p className='total__purchase__value'>R$ {finalPrice}</p>
        </div>
        <div className='purchase__installments'>
          {/* <p>Via PIX, boleto, ou em até 10x de R$35,99 no cartão de crédito</p> */}
        </div>
        <button className='purchase__finish__btn'>Finalizar Compra</button>
      </div>
    </>
  );
};

export default PurchaseContainer;
