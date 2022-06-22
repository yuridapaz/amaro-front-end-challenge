import React, { useEffect } from 'react';
import Header from '../../components/header/index';
import ProductsContainer from './productsContainer';
import ProductCard from '../../components/productCard';

const IndexAmaroPage = ({ productList }) => {
  return (
    <>
      <Header />
      <ProductsContainer>
        {productList.map((product, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </ProductsContainer>
    </>
  );
};

export default IndexAmaroPage;
