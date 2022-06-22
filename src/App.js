import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { productsClient as createProductsClient } from './services/productsClient';
import IndexAmaroPage from './pages/indexPage';

function App() {
  const productsClient = createProductsClient();
  const productList = productsClient.getProducts();

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<IndexAmaroPage productList={productList} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
