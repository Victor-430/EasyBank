import mockup from "../assets/images/image-mockups.png";

import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header
      id="#hero"
      className="relative flex-col-reverse flex bg-LightGray px-8 lg:pl-[6rem] gap-28 lg:grid lg:grid-cols-3"
    >
      <div className="relative pb-[9rem] pt-[10rem] flex flex-col gap-4 ">
        <h1 className="font-medium text-DarkBlue text-balance text-3xl tracking-wide">
          Next generation digital banking
        </h1>
        <p className="text-left pb-6 text-GrayBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="lg:justify-items-start justify-items-center">
          <RequestInvite hidden="flex" />
        </div>
      </div>

      <div className="relative md:absolute -top-28 right-0 w-full lg:w-[65%] h-full bg-mobile lg:bg-desktop">
        <div>
          <img
            className="relative -top-10 -right-[15rem] max-w-[100%]  z-0"
            loading="eager"
            alt="bg-mockup"
            src={mockup}
          />
        </div>
      </div>
    </header>
  );
};
