import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Items, Cart, Product, Layout, ScrollToTop } from './components';
import Checkout from './components/Checkout/Checkout';
import Modal from './components/Modal/Modal';
import { Home, NotFoundPage } from './pages';

import './scss/App.scss';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Layout isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
              }
            >
              <Route index element={<Home />} />
              <Route path="items/:category" element={<Items />} />
              <Route path="items/:category/:id" element={<Product />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
            <Cart isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
          </Modal>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
