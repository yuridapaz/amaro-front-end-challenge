import React from 'react';
import CartProductCard from '../../components/cartProductCard/index';
import ReturnHeaderButton from '../../components/returnHeaderBtn';
import PurchaseContainer from './purchaseContainer';
import ShoppingCartContainer from './shoppingCartContainer';

const ShoppingCartPage = () => {
  return (
    <>
      <ReturnHeaderButton />
      <ShoppingCartContainer>
        <CartProductCard />
        <PurchaseContainer />
      </ShoppingCartContainer>
    </>
  );
};

export default ShoppingCartPage;
