import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { loadProducts } from './redux/productsSlice';
import {
  Items,
  Product,
  Checkout,
  Layout,
  ScrollToTop,
  ErrorFallback,
} from './components';
import { Home, NotFoundPage } from './pages';

import './scss/App.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload(true)}
        >
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="items/:category" element={<Items />} />
                <Route path="items/:category/:slug" element={<Product />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
