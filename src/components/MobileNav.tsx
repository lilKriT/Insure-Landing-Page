import React from "react";

interface IMobileNav {
  mobileNavVisible: boolean;
  setMobileNavVisible: (visible: boolean) => void;
}

const MobileNav = ({ mobileNavVisible, setMobileNavVisible }: IMobileNav) => {
  return (
    <>
      {mobileNavVisible === true && (
        <nav className="absolute inset-0 top-[80px] z-10 bg-veryDarkViolet text-veryLightGray uppercase text-center text-2xl px-4">
          <menu className="flex flex-col gap-4 pt-12">
            <li>
              <a href="#" className="block px-2 py-2 w-full">
                How we work
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-2 w-full">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block px-2 py-2 w-full">
                Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-2 w-full outline outline-2 outline-veryLightGray"
              >
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
