import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import './../scss/App.scss';
export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Navbar />
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
