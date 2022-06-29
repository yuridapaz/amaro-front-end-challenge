import React, { useEffect, useState } from 'react';

export const ShoppingCartContext = React.createContext([]);

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const data = localStorage.getItem('shoppingCart');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems]);

  function alreadyInShoppingCart(product, cartItems) {
    if (cartItems.find((currentProduct) => currentProduct.tamanho.sku == product.tamanho.sku)) {
      return true;
    }

    return false;
  }

  function addToCart(product, cartItems) {
    if (!alreadyInShoppingCart(product, cartItems)) {
      const newShoppingCart = [...cartItems, product];
      setCartItems(newShoppingCart);
    } else {
      cartItems.map((currentProduct) => {
        if (currentProduct.tamanho.sku == product.tamanho.sku) {
          addQtd(currentProduct);
        }
      });
      const newShoppingCart = [...cartItems];
      setCartItems(newShoppingCart);
    }
  }

  function removeFromCart(product, cartItems) {
    if (product.qtd > 1) {
      reduceQtd(product);
      const newShoppingCart = [...cartItems];
      setCartItems(newShoppingCart);
    } else {
      const newShoppingCart = cartItems.filter(
        (currentProduct) => currentProduct.tamanho.sku !== product.tamanho.sku
      );
      setCartItems(newShoppingCart);
    }
  }

  function addQtd(product) {
    product.qtd = product.qtd + 1;
  }

  function reduceQtd(product) {
    product.qtd = product.qtd - 1;
  }

  const calcTotalPrice = (cart) => {
    if (cart.length === 0) return 0;
    return cart.map((product) => product.price * product.qtd).reduce((prev, curr) => prev + curr);
  };

  const calcCartQtd = (cart) => {
    if (cart.length === 0) return 0;
    return cartItems.map((product) => product.qtd).reduce((prev, curr) => prev + curr);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, calcTotalPrice, calcCartQtd }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
