import React, { useEffect, useState } from 'react';

export const ShoppingCartContext = React.createContext([]);

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // const data = localStorage.getItem('shoppingCart');
    // return data ? JSON.parse(data) : [];
    return {
      test: {
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
      },
    };
  });

  // const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems]);

  function alreadyInShoppingCart(product, cartItems) {
    if (cartItems.find((currentProduct) => currentProduct.tamanho.sku === product.tamanho.sku)) {
      return true;
    }

    return false;
  }

  function addToCart(product, cartItems) {
    if (!alreadyInShoppingCart(product, cartItems)) {
      const newShoppingCart = [...cartItems, product];
      setCartItems(newShoppingCart);
    } else {
      // eslint-disable-next-line array-callback-return
      // cartItems.map((currentProduct) => {
      //   if (currentProduct.tamanho.sku === product.tamanho.sku) {
      //     addQtd(currentProduct);
      //   }
      // });
      // const newShoppingCart = [...cartItems];
      // setCartItems(newShoppingCart);
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
    // return cart.map((product) => product.price * product.qtd).reduce((prev, curr) => prev + curr);
  };

  const calcCartQtd = (cart) => {
    if (cart.length === 0) return 0;
    // return cartItems.map((product) => product.qtd).reduce((prev, curr) => prev + curr);
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
