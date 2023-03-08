import React from "react";

interface IMobileNav {
  mobileNavVisible: boolean;
  setMobileNavVisible: (visible: boolean) => void;
}

const MobileNav = ({ mobileNavVisible, setMobileNavVisible }: IMobileNav) => {
  return (
    <>
      {mobileNavVisible === true && (
        <nav className="absolute inset-0 top-[80px] z-10 bg-red-400">
          <menu className="">
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
      )}
    </>
  );
};

export default MobileNav;
