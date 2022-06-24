import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index';
import ProductsContainer from './productsContainer';
import ProductCard from '../../components/productCard';
import ProductPage from '../productPage';

const IndexAmaroPage = ({ productList }) => {
  return (
    <>
      <Header />
      <ProductsContainer>
        {productList.map((product, i) => {
          return (
            <Link
              to={`product/${product.code_color}`}
              element={<ProductPage productId={product.code_color} />}
              key={i}
              className='product__card__link'
            >
              <ProductCard key={i} product={product} />
            </Link>
          );
        })}
      </ProductsContainer>
    </>
  );
};

export default IndexAmaroPage;
