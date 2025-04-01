import hamburger from "../assets/images/icon-hamburger.svg";
import closeBtn from "../assets/images/icon-close.svg";

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export const HamburgerMenu = ({
  isOpen,
  toggleMenu,
  menuRef,
  setIsOpen,
}: HamburgerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const activeNav = ({ isActive }: { isActive: boolean }) =>
    isActive ? "border-b-2 border-LimeGreen pb-2  " : "";

  return (
    <menu className="relative">
      <button onClick={toggleMenu}>
        {isOpen ? (
          <img src={closeBtn} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed right-0 left-0 top-14 bottom-0 bg-black/50 z-40">
            <div
              ref={menuRef}
              className="fixed right-0 left-0 top-20 flex justify-center z-50"
            >
              <div className="w-[80%] max-w-md rounded-lg h-[20rem] border shadow-lg bg-white">
                <div 
                onClick={() => {setIsOpen(!isOpen)}}
                className="py-10 text-center flex gap-5 flex-col">
                  <NavLink to={"/"} className={activeNav}>
                    Home
                  </NavLink>
                  <NavLink to={"/about"} className={activeNav}>
                    About
                  </NavLink>
                  <NavLink to={"/contact"} className={activeNav}>
                    Contact
                  </NavLink>
                  <NavLink to={"/blog"} className={activeNav}>
                    Blog
                  </NavLink>
                  <NavLink to={"/careers"} className={activeNav}>
                    Careers
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </menu>
  );
};
