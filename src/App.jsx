import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from './redux/productsSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import {
  Items,
  Product,
  Layout,
  ScrollToTop,
  ErrorFallback,
} from './components';
import Checkout from './components/Checkout/Checkout';
import useFetch from './Hooks/useFetch';
import { Home, NotFoundPage } from './pages';

import './scss/App.scss';
import Thanks from './components/Thanks/Thanks';

const URL = 'http://localhost:3002/';

function App() {
  const { get } = useFetch(URL);
  const dispatch = useDispatch();

  useEffect(() => {
    get('items')
      .then((data) => {
        dispatch(addProducts(data));
      })
      .catch((error) => console.log('Could not load products', error));
  }, []);

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
                <Route path="thanks" element={<Thanks />} />
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
