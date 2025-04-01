import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef, useState } from "react";
import { RequestInvite } from "./RequestInvite";
import { MotionConfig, motion } from "motion/react";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const activeNav = ({ isActive }: { isActive: boolean }) =>
    isActive ? "border-b-2 border-LimeGreen pb-2" : "";

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // listens for clicks outside the menu
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <nav className="z-50 fixed shadow-lg md:relative w-full bg-white px-8 lg:px-[7rem] py-4">
        <div className="grid grid-cols-2 xl:grid-cols-3 justify-between">
          <div className="inline-flex items-center gap-1">
            <MotionConfig transition={{ type: "spring", stiffness: "10" }}>
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0, transition: { duration: 1, delay: 0.5 } }}
                className="text-DarkBlue font-extrabold text-xl"
              >
                <img loading="eager" alt="logo" src="/logo.svg" />
              </motion.div>
            </MotionConfig>
          </div>

          {/* Navbar visible only on large and above */}
          <div className="hidden space-x-4 xl:flex">
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

          {/* SideBar for mobile */}
          <div className="xl:hidden justify-items-end ">
            <HamburgerMenu
              menuRef={menuRef}
              isOpen={isOpen}
              setIsOpen = {setIsOpen}
              toggleMenu={toggleMenu}
            />
          </div>

          {/* Request Link visible on large screen and above */}
          <div className="pr-5 justify-items-end">
            <RequestInvite />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
