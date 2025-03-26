import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef, useState } from "react";
import { RequestInvite } from "./RequestInvite";
import { MotionConfig, motion } from "motion/react";

export const NavBar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = "border-b-2 border-orange-500 pb-2 ";

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
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="grid grid-cols-2 lg:grid-cols-3 justify-between relative bg-white px-8 lg:px-[6rem] py-6">
      <div className="inline-flex items-center gap-1">
        <img loading="eager" alt="logo" src="/logo.svg" />
        <MotionConfig transition={{ type: "spring", stiffness: "10" }}>
          <motion.h1
            animate={{ x: 100, transition: { duration: 1 } }}
            className="text-DarkBlue font-extrabold text-xl"
          >
            easyBank
          </motion.h1>
        </MotionConfig>
      </div>

      {/* Navbar visible only on large and above */}
      <div className="hidden space-x-4 lg:flex">
        <a href="" className={`${isActive}`}>
          Home
        </a>
        <a href="#articles" className={`${isActive}`}>
          About
        </a>
        <a href="" className={`${isActive}`}>
          Contact
        </a>
        <a href="" className={`${isActive}`}>
          Blog
        </a>
        <a href="" className={`${isActive}`}>
          Careers
        </a>
      </div>

      {/* SideBar for mobile */}
      <div className="lg:hidden justify-items-end">
        <HamburgerMenu
          menuRef={menuRef}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </div>

      {/* Request Link visible on large screen and above */}
      <div className="justify-items-end">
        <RequestInvite />
      </div>
    </nav>
  );
};
