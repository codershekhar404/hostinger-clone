import React from "react";
import { useState } from "react";

import { FcCheckmark } from "react-icons/fc";
import Navbar from "./Navbar";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isMediaLaptop, setIsMediaLaptop] = useState();

  function handleChecked() {
    setIsChecked(!isChecked);
  }

  // logo change according to width
  const resWindow = () => {
    if (window.innerWidth >= 1024) {
      setIsMediaLaptop(true);
    } else {
      setIsMediaLaptop(false);
    }
  };
  window.onload = function () {
    resWindow();
  };
  window.onresize = function () {
    resWindow();
  };

  // scroll function
  window.onscroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  return (
    <header className="wrapper">
      <Navbar
        isScrolling={isScrolling}
        isChecked={isChecked}
        isMediaLaptop={isMediaLaptop}
        handleChecked={handleChecked}
      />
      <div className="hero">
        <div className="hero_left">
          <h1>Savings to Set Your Website in Motion</h1>
          <p>
            Get things moving with a free domain, lifetime SSL, and DDoS
            protection included with a four-year subscription.
          </p>
          <button className="btn">Get Started</button>
          <p className="info_text">
            <FcCheckmark className="icon" /> Get exclusive 30-day money-back
            guarantee
          </p>
        </div>
        <div className="hero_right">
          <img src="main_header.png" className="hero_img" />
          <div className="img_bg"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
