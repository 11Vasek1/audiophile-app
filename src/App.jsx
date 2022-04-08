import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Items, Cart, Product, Layout, ScrollToTop } from './components';
import Checkout from './components/Checkout/Checkout';
import { Home, NotFoundPage } from './pages';

import './scss/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="items/:category" element={<Items />} />
              <Route path="items/:category/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
