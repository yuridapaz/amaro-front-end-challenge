import React from 'react';
import ReturnHeaderButton from '../../components/returnHeaderBtn';
import ProductContainerDisplay from './productContainerDisplay';
import { useParams } from 'react-router-dom';

const ProductPage = ({ productList }) => {
  const { nomedoproduto } = useParams();

  return (
    <>
      <ReturnHeaderButton />
      {productList
        .filter((product) => {
          return product.code_color === nomedoproduto;
        })
        .map((product, i) => {
          return <ProductContainerDisplay product={product} key={product.code_color} />;
        })}
    </>
  );
};

export default ProductPage;
