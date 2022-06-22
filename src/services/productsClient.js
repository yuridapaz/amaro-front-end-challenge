import productsList from './products.json';

function productsClient() {
  return {
    getProducts: () => {
      return productsList;
    },
  };
}

export { productsClient };
