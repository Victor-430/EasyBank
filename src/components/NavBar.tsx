import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef, useState } from "react";
import { RequestInvite } from "./RequestInvite";

export const NavBar = () => {
  const menuRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = "border-b-2 border-orange-500 pb-2 ";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // listens for clicks outside the menu
  useEffect(() => {
    const handleOutsideClick = () => {
      if (menuRef.current && !menuRef.current) {
        setIsOpen(false);
      }

      document.addEventListener("mousedown", handleOutsideClick);
      return () =>
        document.removeEventListener("mousedown", handleOutsideClick);
    };
    handleOutsideClick();
  }, []);

  return (
    <nav className="flex items-center justify-between bg-white px-8 lg:px-28 py-6">
      <div className="flex flex-row justify-between items-center ">
        <div className="inline-flex gap-1">
          <img loading="eager" alt="logo" src="../assets/images/logo.svg" />
          <h1 className="text-DarkBlue">easyBank</h1>
        </div>

        {/* Navbar visible only on large and above */}
        <div className="hidden space-x-4 lg:flex">
          <a className={`${isActive}`}>Home</a>
          <a className={`${isActive}`}>About</a>
          <a className={`${isActive}`}>Contact</a>
          <a className={`${isActive}`}>Blog</a>
          <a className={`${isActive}`}>Careers</a>
        </div>
      </div>

      {/* SideBar for mobile */}
      <div onClick={toggleMenu} className="lg:hidden">
        <HamburgerMenu isOpen={isOpen} menuRef={menuRef} />
      </div>

      {/* Request Link visible on large screen and above */}
      <RequestInvite />
    </nav>
  );
};
