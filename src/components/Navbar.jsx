import React, { useEffect, useState } from "react";
import { useLocation ,useNavigate } from "react-router-dom";
// icons
import {
  HiOutlineChevronDown,
  HiOutlineLockClosed,
  HiOutlineShoppingCart,
  HiMenu,
  HiX,
} from "react-icons/hi";

const Navbar = ({
  isChecked,
  isMediaLaptop,
  isScrolling,
  handleChecked,
  myClass,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(false);

  const handleLocation = () => {
    // console.log(location.pathname);
    if (location.pathname == "/login") {
      setIsLoginPage(true);
    }
  };

  useEffect(() => {
    handleLocation();
    return () => {};
  }, []);

  return (
    <>
      <nav className={isScrolling ? "nav_stick" : "nav"}>
        <div className="brand">
          <div className="logo" onClick={() => {
            navigate('/hostinger-clone/')
          }}>
            {isMediaLaptop ? (
              <img src={isScrolling ? "Brand_Dark.svg" : "Brand.svg"} alt="" />
            ) : (
              <img src="Brand_Dark.svg" alt="" />
            )}
          </div>
          <div className="lang">
            <img src="indian_flag.svg" alt="" />
            {isLoginPage ? (
              <p className={myClass}>English</p>
            ) : (
              <p className={isScrolling ? "nav_dark" : "nav_light"}>English</p>
            )}
          </div>
        </div>

        <input
          type="checkbox"
          name="click"
          id="click"
          value={isChecked}
          onChange={() => handleChecked()}
        />
        <label htmlFor="click" className="menu_btn">
          {isMediaLaptop ? (
            isChecked ? (
              <HiX className={isScrolling ? "menu_icon_dark" : "menu_icon"} />
            ) : (
              <HiMenu
                className={isScrolling ? "menu_icon_dark" : "menu_icon"}
              />
            )
          ) : isChecked ? (
            <HiX className="menu_icon" />
          ) : (
            <HiMenu className="menu_icon" />
          )}
        </label>

        <ul className="menu">
          {isLoginPage ? (
            <li className={myClass}>
              Hosting <HiOutlineChevronDown className="icon" />
            </li>
          ) : (
            <li className={isScrolling ? "nav_dark" : "nav_light"}>
              Hosting <HiOutlineChevronDown className="icon" />
            </li>
          )}

          {isLoginPage ? (
            <li className={myClass}>
              VPS <HiOutlineChevronDown className="icon" />
            </li>
          ) : (
            <li className={isScrolling ? "nav_dark" : "nav_light"}>
              VPS <HiOutlineChevronDown className="icon" />
            </li>
          )}

          {isLoginPage ? (
            <li className={myClass}>
              Email <HiOutlineChevronDown className="icon" />
            </li>
          ) : (
            <li className={isScrolling ? "nav_dark" : "nav_light"}>
              Email <HiOutlineChevronDown className="icon" />
            </li>
          )}

          {isLoginPage ? (
            <li className={myClass}>
              Domain <HiOutlineChevronDown className="icon" />
            </li>
          ) : (
            <li className={isScrolling ? "nav_dark" : "nav_light"}>
              Domain <HiOutlineChevronDown className="icon" />
            </li>
          )}

          {isLoginPage ? (
            <li className={myClass} 
            onClick={()=>{
              navigate('/hostinger-clone/login')
            }}
            >
              <div className={"login_btn_dark"}>
                <HiOutlineLockClosed className="icon" /> Log In
              </div>
            </li>
          ) : (
            <li className={isScrolling ? "nav_dark" : "nav_light"} 
            onClick={()=>{
              navigate('/hostinger-clone/login')
            }}
            >
              <div className={isScrolling ? "login_btn_dark" : "login_btn"}>
                <HiOutlineLockClosed className="icon" /> Log In
              </div>
            </li>
          )}

          {isLoginPage ? (
            <li className={myClass}>
              <HiOutlineShoppingCart className="icon" /> Cart
            </li>
          ) : (
            <li className={isScrolling ? "nav_dark" : "nav_light"}>
              <HiOutlineShoppingCart className="icon" /> Cart
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
