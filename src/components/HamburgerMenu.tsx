export const HamburgerMenu = ({ isOpen, menuRef }) => {
  return (
    <menu>
      {isOpen ? <div className="">"X"</div> : <div>"H"</div>}

      <div
        ref={menuRef}
        className="relative inset-full animate-slide-in bg-black/85"
      >
        <div className="absolute top-4 mx-auto w-[90%] animate-slide-down rounded-md bg-white">
          <div className="py-4 text-center">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a>Blog</a>
            <a>Careers</a>
          </div>
        </div>
      </div>
    </menu>
  );
};
