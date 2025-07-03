import hamburger from "../assets/images/icon-hamburger.svg";
import closeBtn from "../assets/images/icon-close.svg";

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { motion } from "motion/react";

type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
    isActive ? "border-b-2 border-LimeGreen pb-2 " : "";

  return (
    <menu className="relative">
      <motion.button
        whileTap={{ rotate: [0, 0, 360], transition: { duration: 0.5 } }}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <img src={closeBtn} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </motion.button>

      {isOpen && (
        <>
          <div className="fixed right-0 left-0 top-14 bottom-0 bg-black/80 z-40">
            <div
              ref={menuRef}
              className="fixed right-0 left-0 top-20 flex justify-center z-50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
                className="w-[80%] max-w-md rounded-lg h-[20rem] border shadow-lg bg-white"
              >
                <motion.div
                  animate={{
                    transition: {
                      type: "spring",
                      duration: 0.8,
                      stiffness: 80,
                      delayChildren: 0.5,
                    },
                  }}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="py-10 items-center gap-5 flex-col flex "
                >
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </menu>
  );
};
