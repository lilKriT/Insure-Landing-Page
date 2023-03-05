import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-footerDesktop bg-no-repeat bg-veryLightGray flex justify-center">
      <div className="container">
        {/* Upper Row */}
        <div className="flex justify-between">
          <div>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>
          <menu className="flex gap-3 text-darkGrayishViolet text-2xl">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </menu>
        </div>
        {/* Bottom Row */}
        <div className="flex justify-between">
          {/* First Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Our company</h2>
            <menu>
              <li>
                <a href="#">How we work</a>
              </li>
              <li>
                <a href="#">Why Insure?</a>
              </li>
              <li>
                <a href="#">View plans</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </menu>
          </div>
          {/* Second Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Help me</h2>
            <menu>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </menu>
          </div>
          {/* Third Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Contact</h2>
            <menu>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Live chat</a>
              </li>
            </menu>
          </div>
          {/* Fourth Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Others</h2>
            <menu>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
