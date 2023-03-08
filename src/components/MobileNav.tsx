import React, { useEffect, useRef, useState } from "react";

interface IMobileNav {
  mobileNavVisible: boolean;
  setMobileNavVisible: (visible: boolean) => void;
}

const MobileNav = ({ mobileNavVisible, setMobileNavVisible }: IMobileNav) => {
  const collapsingMenu = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Disabling scrolling
  useEffect(() => {
    console.log("haha");
    if (mobileNavVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileNavVisible]);

  return (
    <>
      <nav
        ref={collapsingMenu}
        className={`absolute top-[80px] h-[calc(100vh-80px)] left-0 right-0  z-10 bg-veryDarkViolet text-veryLightGray uppercase text-center text-2xl px-4 bg-mobileNavPattern bg-no-repeat bg-bottom bg-[length:100vw] desktop:hidden overflow-hidden
        ${
          mobileNavVisible ? " max-h-[calc(100vh-80px)]" : " max-h-0"
        } duration-300 ease-in-out`}
      >
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
    </>
  );
};

export default MobileNav;
