import React from 'react';
import Categories from './../../components/Categories/Categories';
import Preview from './../../components/Preview/Preview';
import About from './../../components/About/About';
import NewProduct from '../../components/NewProduct/NewProduct';
import '../../scss/App.scss';

export default function Home() {
  return (
    <>
      <NewProduct
        model="XX99 Mark II
Headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      />
      <div className="container">
        <Categories />
        <Preview />
        <About />
      </div>
    </>
  );
}
