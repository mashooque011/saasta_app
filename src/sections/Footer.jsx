import React from "react";
import sass_logo from "../assets/images/nav-logo.png";
import { Link } from "react-router-dom";
import '../styledComponents/Footer.css';
import { footerLinksData } from "../jsonData";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="common-container">
          <div className="footr-flex flex item-between gap">
            <div className="left-footer-bx flex">
              <div className="nav_logo footer-logo flex  item-center">
                <img src={sass_logo} alt={"sass_logo"} />
                <h5>Saasta</h5>
              </div>

              <p>Experience financial transformation like never before with FIntec.</p>

              <div className="soc-icons-flex flex gap">

                <Link to="#">
                <i class="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="#">
                <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#">
                <i class="fa-brands fa-linkedin-in"></i>
                </Link>
                
              </div>
              
            </div>

            <div className="right-footer-bx flex">

                <div className="footer-bx">
                    <h5>Page</h5>

                    <div className="foter-lists">
                        {footerLinksData.map((curList,id) => (
                            <li key={curList.id}>
                                <Link to={curList.href}> 
                                {curList.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                    
                </div>

                <div className="footer-bx">
                    <h5>Contact Us</h5>

                    <div className="foter-lists">
                            <li>
                             <span>example27@gmail.com</span>
                            </li>
                            <li>
                             <span>+91 98713 56789</span>
                            </li>
                            <li>
                             <span>2405 Dhaka, Bangladesh</span>
                            </li>
                    </div>
                    
                </div>
                
            </div>
            
          </div>

          <div className="copyright-flex-bx flex item-between gap">

            <p>© {new Date().getFullYear()} Developed by Mr. Faiz . All rights reserved.</p>

            <div className="terms-policy-flex flex">
                <Link to="#">
                Privacy Policy
                </Link>
                <Link to="#">
                Cookies Policy
                </Link>
                <Link to="#">
                Terms & Conditions
                </Link>
            </div>
            
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
