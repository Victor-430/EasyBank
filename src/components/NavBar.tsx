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
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className=" z-50 grid grid-cols-2 lg:grid-cols-3 justify-between fixed md:relative w-full bg-white px-8 lg:px-[7rem] py-6">
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
      <div className="lg:hidden ">
        <HamburgerMenu
          menuRef={menuRef}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </div>

      {/* Request Link visible on large screen and above */}
      <div className="pr-5 justify-items-end">
        <RequestInvite />
      </div>
    </nav>
  );
};
