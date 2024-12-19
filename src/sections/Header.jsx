import React, { useEffect, useState } from "react";
import "../styledComponents/headerStyle.css";
import sass_logo from "../assets/images/nav-logo.png";
import { navData } from "../jsonData";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [headerActive , setHeaderActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;

      // Check if the user is scrolling up or down
      if (currScrollPos > prevScrollPos) {
        setIsVisible(false); // Scrolling down: hide the navbar
      } else {
        setIsVisible(true); // Scrolling up: show the navbar
      }

      setPrevScrollPos(currScrollPos);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <>
      <header  className={`header ${headerActive ? "header_active" : ""} ${isVisible ? "header_visible" : ""}`}>
        <div className="common-container2">
          <div className="header_flexbx common-container flex item-between gap">
            <div className="nav_logo flex  item-center">
              <img src={sass_logo} alt={"sass_logo"} />
              <h5>Saasta</h5>
            </div>

            <div className="navbar">
              <nav className="nav_lists flex item-center gap">
                {navData.map((curNav, id) => (
                  <li
                    className={
                      active === curNav.label ? "nav_li active" : "nav_li"
                    }
                    key={curNav.id}
                    onClick={() => setActive(curNav.label)}
                  >
                    <Link to={curNav.href} className="nav_buton">
                      {curNav.label}
                    </Link>
                  </li>
                ))}
              </nav>

              <div className="headr-btns-flex headr-btns-flex-mob flex item-center gap">
              <Button title={"Contact Us"} bgColor="transparent" borderColor="#fff"
              defColor="#fff"  actColor="#070806"
               />

              <Button title={"Get the template"} bgColor="#a0e00d" borderColor="#a0e00d" defColor="#070806"  actColor="#a0e00d" />
            </div>
              
            </div>

            <div className="headr-btns-flex flex item-center gap">
              <Button title={"Contact Us"} bgColor="transparent" borderColor="#fff"
              defColor="#fff"  actColor="#070806"
               />

              <Button title={"Get the template"} bgColor="#a0e00d" borderColor="#a0e00d" defColor="#070806"  actColor="#a0e00d" />
            </div>

            <button onClick={() => setHeaderActive(!headerActive)} className={ headerActive ? "menu-bar-btn menuactive" : "menu-bar-btn"}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>

            </button>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
