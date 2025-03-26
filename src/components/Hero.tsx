import mockup from "../assets/images/image-mockups.png";

import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header
      id="#hero"
      className="grid grid-cols-1 bg-LightGray pl-8 place-items-center lg:pl-[6rem] gap-28 lg:grid-cols-3"
    >
      <div className="pb-[9rem] pt-[10rem] flex flex-col gap-4 ">
        <h1 className="font-medium text-DarkBlue text-balance text-3xl tracking-wide">
          Next generation digital banking
        </h1>
        <p className="text-left pb-6 text-GrayBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="">
          <RequestInvite hidden="flex" />
        </div>
      </div>
      <div className="bg-mobile lg:bg-desktop">
        <img
          className="w-[50rem] col-span-2"
          loading="eager"
          alt="bg-mockup"
          src={mockup}
        />
      </div>
    </header>
  );
};
