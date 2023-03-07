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
      <div className="container py-16">
        {/* Upper Row */}
        <div className="flex justify-between">
          <div>
            <a href="#">
              <img src={Logo} alt="" className="logo" />
            </a>
          </div>
          <menu className="flex gap-3">
            <li>
              <a href="#" className="socialIcon">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#" className="socialIcon">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="socialIcon">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="#" className="socialIcon">
                <FaInstagram />
              </a>
            </li>
          </menu>
        </div>

        <hr className="border-darkGrayishViolet/50 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col desktop:flex-row justify-between">
          {/* First Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Our company</h2>
            <menu className="flex flex-col gap-1 items-start">
              <li>
                <a href="#" className="footerLink">
                  How we work
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Why Insure?
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  View plans
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Reviews
                </a>
              </li>
            </menu>
          </div>
          {/* Second Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Help me</h2>
            <menu className="flex flex-col gap-1 items-start">
              <li>
                <a href="#" className="footerLink">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Cookies
                </a>
              </li>
            </menu>
          </div>
          {/* Third Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Contact</h2>
            <menu className="flex flex-col gap-1 items-start">
              <li>
                <a href="#" className="footerLink">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Live chat
                </a>
              </li>
            </menu>
          </div>
          {/* Fourth Column */}
          <div className="footerColumn">
            <h2 className="footerHeading">Others</h2>
            <menu className="flex flex-col gap-1 items-start">
              <li>
                <a href="#" className="footerLink">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Licenses
                </a>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
