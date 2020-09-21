import React from "react";
import banner from "./images/banner.jpg";
import "./css/home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="image__banner" src={banner} alt="banner" />

      {/* row two products  */}
      <div className="home__row">
        <Product
          id="1"
          title="Simple Mobile Prepaid - Apple iPhone X (64GB) - Silver [Locked to Carrier – Simple Mobile] "
          image="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/193246051.jpeg"
          price={100}
          rating={5}
        />
        <Product
          id="2"
          title="Apple iPhone 11 Pro Max (64GB, Midnight Green) Carrier Subscription [Cricket Wireless]"
          image="https://i.ibb.co/gj42BWm/ip11pro-Copy.jpg"
          price={200.19}
          rating={5}
        />
      </div>
      {/* row thress products */}
      <div className="home__row">
        <Product
          id="3"
          title="Samsung Galaxy A71 SM-A715F/DS 4G LTE 128GB + 6GB Ram Octa Core w/Four Cameras (A64+12+5+5mp)"
          image="https://i.ibb.co/tzX8F7b/a17.jpg"
          price={100.99}
          rating={4}
        />
        <Product
          id="4"
          title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version | 128GB of Storage "
          image="https://i.ibb.co/RQv6rHg/s20.jpg"
          price={400.99}
          rating={5}
        />
        <Product
          id="5"
          title="Original Oppo Reno 2 128GB Mobile Phone Snapdragon 730G Octa Core NFC 48MP Camera VOOC 3.0"
          image="https://i.ibb.co/KVNqPNw/oren2-Copy.jpg"
          price={100.94}
          rating={3}
        />
      </div>
      {/* row one product */}
      <div className="home__row">
        <Product
          id="1"
          title="Vsmart Joy 3 (4GB|64GB) (CTY)"
          image="https://i.ibb.co/NLrnbbG/j2-Copy.jpg"
          price={200.15}
          rating={4}
        />
        
      </div>
    </div>
  );
}

export default Home;
