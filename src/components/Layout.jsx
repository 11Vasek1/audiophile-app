import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import NewProduct from './NewProduct/NewProduct';

import './../scss/App.scss';
export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Navbar />
        </div>
        <div className="main">
          <NewProduct
            model="XX99 Mark II Headphones"
            description="Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast."
          />
          <div className="container">
            <Outlet />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
