import mockup from "../assets/images/image-mockups.png";

import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header
      id="#hero"
      className="relative bg-LightGray  flex-col-reverse flex md:flex-row lg:pl-[6rem]"
    >
      {/* left Content */}
      <div className="text-center w-full md:w-[60%] pb-[7rem]  md:text-left px-8  space-y-6  ">
        <h1 className="font-normal md:pt-[7rem] text-DarkBlue text-balance text-4xl md:text-5xl tracking-wide leading-tight">
          Next generation digital banking
        </h1>
        <p className="text-justify md:text-left pb-6 text-GrayBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="lg:justify-items-start justify-items-center">
          <RequestInvite hidden="flex" />
        </div>
      </div>

      <div className=" w-full relative ">
        <div className="relative bg-no-repeat bg-cover px-8 -top-[3.5rem] sm:-top-[9.5rem] md:-top-[13rem] h-full lg:px-0 bg-mobile md:bg-desktop">
          <img
            className="relative md:-right-[12rem]  md:top-[7rem] w-full object-cover h-full md:max-w-[90%] z-0"
            loading="eager"
            alt="bg-mockup"
            src={mockup}
          />
        </div>
      </div>
    </header>
  );
};
