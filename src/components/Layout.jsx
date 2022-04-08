import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import './../scss/App.scss';
export default function Layout({ isModalOpen, setModalOpen }) {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Navbar setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
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
