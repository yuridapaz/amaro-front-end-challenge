import React from 'react';
import CartProductCard from '../../components/cartProductCard/index';
import ReturnHeaderButton from '../../components/returnHeaderBtn';
import PurchaseContainer from './purchaseContainer';
import ShoppingCartContainer from './shoppingCartContainer';
import { ShoppingCartContext } from '../../providers/shoppingCart';

const ShoppingCartPage = () => {
  const { cartItems, addToCart, removeFromCart } = React.useContext(ShoppingCartContext);

  return (
    <>
      <ReturnHeaderButton />
      <ShoppingCartContainer>
        {cartItems.map((product, i) => {
          return (
            <CartProductCard
              product={product}
              key={i}
              addToCart={() => addToCart(product, cartItems)}
              removeFromCart={() => removeFromCart(product, cartItems)}
            />
          );
        })}

        <PurchaseContainer />
      </ShoppingCartContainer>
    </>
  );
};

export default ShoppingCartPage;
