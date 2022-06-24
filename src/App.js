import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { productsClient as createProductsClient } from './services/productsClient';
import IndexAmaroPage from './pages/indexPage';
import ProductPage from './pages/productPage';

function App() {
  const productsClient = createProductsClient();
  const productList = productsClient.getProducts();

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<IndexAmaroPage productList={productList} />} />
          <Route
            path='/product/:nomedoproduto'
            element={<ProductPage productList={productList} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
