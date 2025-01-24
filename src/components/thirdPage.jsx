import React from 'react';
import './thirdPage.css';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';

const ThirdPage = () => {
  return (
    <div className="third-page-container">
      <div className="header">
        <div className="header-text">
          <h1>Hydration Essentials</h1>
          <p>Discover Our Range of Premium Water Bottles</p>
        </div>
        <button className="view-more">VIEW MORE</button>
      </div>
      
      <div className="products-container">
        <div className="product-card">
          <img src={p1} alt="Rainbow 600" className="product-image" />
          <h2>Rainbow 600</h2>
          <button className="learn-more">LEARN MORE</button>
        </div>

        <div className="product-card">
          <img src={p2} alt="Rio 650" className="product-image" />
          <h2>Rio 650</h2>
          <button className="learn-more">LEARN MORE</button>
        </div>

        <div className="product-card">
          <img src={p3} alt="Big Bull 1300" className="product-image" />
          <h2>Big Bull 1300</h2>
          <button className="learn-more">LEARN MORE</button>
        </div>

        <div className="product-card">
          <img src={p1} alt="Rainbow 600" className="product-image" />
          <h2>Rainbow 600</h2>
          <button className="learn-more">LEARN MORE</button>
        </div>

        <div className="product-card">
          <img src={p2} alt="Rio 650" className="product-image" />
          <h2>Rio 650</h2>
          <button className="learn-more">LEARN MORE</button>
        </div>

        <div className="product-card">
          <img src={p3} alt="Big Bull 1300" className="product-image" />
          <h2>Big Bull 1300</h2>
          <button className="learn-more">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
