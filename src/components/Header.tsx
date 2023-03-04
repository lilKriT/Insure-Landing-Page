import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="bg-white  flex justify-center">
      <nav className="container flex justify-between my-6">
        <div>
          <img src={Logo} alt="" className="object-cover w-auto" />
        </div>
        <menu className="flex gap-2">
          <li>
            <a href="#" className="navLink">
              How we work
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="navLink featured">
              View plans
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
