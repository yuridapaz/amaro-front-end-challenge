import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index';
import ProductsContainer from './productsContainer';
import ProductCard from '../../components/productCard';
import ProductPage from '../productPage';

const IndexAmaroPage = ({ productList }) => {
  const [searchProduct, setSearchProduct] = useState('');
  const [filterProduct, setFilterProduct] = useState('');

  const handleInputChange = (event) => {
    const searchProduct = event.target.value;
    setSearchProduct(searchProduct.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterProduct(searchProduct);
    setSearchProduct('');
  };

  return (
    <>
      <Header onChange={handleInputChange} onSubmit={handleSubmit} value={searchProduct} />
      <ProductsContainer>
        {productList
          .filter((product) => {
            return product.name.toLowerCase().includes(filterProduct);
          })
          .map((product, i) => {
            return (
              <Link
                to={`product/${product.code_color}`}
                element={<ProductPage productId={product.code_color} />}
                key={i}
                className='product__card__link'
              >
                <ProductCard product={product} />
              </Link>
            );
          })}
      </ProductsContainer>
    </>
  );
};

export default IndexAmaroPage;
