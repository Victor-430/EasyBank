// import hamburger from "../assets/images/icon-hamburger.svg";
// import closeBtn from "../assets/images/icon-close.svg";

import React from "react";

type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export const HamburgerMenu = ({
  isOpen,
  toggleMenu,
  menuRef,
}: HamburgerProps) => {
  return (
    <menu className="">
      <button onClick={toggleMenu}>{isOpen ? "H" : "v"}</button>

      {isOpen && (
        <div ref={menuRef} className="inset-full animate-slide-in bg-black/85">
          <div className="absolute top-[7rem] -left-[5%] w-[90%] md:w-[60%] animate-slide-down rounded-md shadow-md bg-white">
            <div className="py-10 text-center flex gap-5 flex-col">
              <a>Home</a>
              <a>About</a>
              <a>Contact</a>
              <a>Blog</a>
              <a>Careers</a>
            </div>
          </div>
        </div>
      )}
    </menu>
  );
};
