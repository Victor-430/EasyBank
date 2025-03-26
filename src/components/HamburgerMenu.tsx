// import hamburger from "../assets/images/icon-hamburger.svg";
// import closeBtn from "../assets/images/icon-close.svg";

import React, { useEffect } from "react";

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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <menu className="relative">
      <button onClick={toggleMenu}>{isOpen ? "v" : "H"}</button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40">
            <div
              ref={menuRef}
              className="fixed inset-0 top-24 flex justify-center z-50"
            >
              <div className="w-[90%] max-w-md rounded-lg shadow-lg bg-white">
                <div className="py-10 text-center flex gap-5 flex-col">
                  <a>Home</a>
                  <a>About</a>
                  <a>Contact</a>
                  <a>Blog</a>
                  <a>Careers</a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </menu>
  );
};
