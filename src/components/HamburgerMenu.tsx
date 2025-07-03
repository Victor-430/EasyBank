import hamburger from "../assets/images/icon-hamburger.svg";
import closeBtn from "../assets/images/icon-close.svg";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

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

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <menu className="relative">
      <motion.button onClick={toggleMenu}>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          {isOpen ? (
            <img src={closeBtn} alt="close" />
          ) : (
            <img src={hamburger} alt="hamburger" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 left-0 top-14 bottom-0 bg-black/80 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Container */}
            <div
              ref={menuRef}
              className="fixed right-0 left-0 top-20 flex justify-center z-50"
            >
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                className="w-[80%] max-w-md rounded-lg h-[20rem] border shadow-lg bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                      staggerChildren: 0.1,
                    },
                  }}
                  className="py-10 items-center gap-5 flex-col flex"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <NavLink
                      to={"/"}
                      className={activeNav}
                      onClick={handleNavClick}
                    >
                      Home
                    </NavLink>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <NavLink
                      to={"/about"}
                      className={activeNav}
                      onClick={handleNavClick}
                    >
                      About
                    </NavLink>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <NavLink
                      to={"/contact"}
                      className={activeNav}
                      onClick={handleNavClick}
                    >
                      Contact
                    </NavLink>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <NavLink
                      to={"/blog"}
                      className={activeNav}
                      onClick={handleNavClick}
                    >
                      Blog
                    </NavLink>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <NavLink
                      to={"/careers"}
                      className={activeNav}
                      onClick={handleNavClick}
                    >
                      Careers
                    </NavLink>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </menu>
  );
};
