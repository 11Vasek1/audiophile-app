import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';
import Cart from './Cart/Cart';
import { useCartModalOpen } from '../redux/modalSlice';

import './../scss/App.scss';

export default function Layout() {
  const isModalOpen = useCartModalOpen();
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Navbar />
          {isModalOpen && (
            <Modal>
              <Cart />
            </Modal>
          )}
        </div>
        <div className="main">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
