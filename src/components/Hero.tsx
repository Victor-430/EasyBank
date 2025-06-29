import { motion } from "motion/react";

import mockup from "../assets/images/image-mockups.png";

import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header
      id="#hero"
      className="relative bg-LightGray flex-grow-0 flex-col-reverse flex gap-y-0  lg:flex-row lg:pl-[6rem]"
    >
      {/* left Content */}
      <div className="text-center w-full lg:w-2/3 xl:w-[60%] pb-[7rem] -mt-[7rem] sm:-mt-[5rem] lg:mt-0  md:text-left px-8  space-y-6  ">
        <h1 className="font-normal lg:pt-[7rem] text-DarkBlue text-balance md:font-bold text-4xl xl:text-5xl tracking-wide leading-tight">
          Next generation digital banking
        </h1>
        <p className="text-justify md:text-left pb-6 text-GrayBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="sm:justify-items-start justify-items-center">
          <RequestInvite hidden="flex" />
        </div>
      </div>

      {/* hero bg and mockup */}
      <motion.div
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9, delay: 0.5 } }}
        viewport={{ once: true }}
        className=" w-full min-h-screen min-w-min"
      >
        <div className="relative bg-no-repeat bg-cover px-8 -top-[3.5rem] sm:-top-[9.5rem] md:-top-[8rem] lg:-top-[10rem] xl:-top-[13rem] h-full lg:px-0 bg-mobile lg:bg-desktop">
          <img
            className="relative -top-[2.4rem] sm:-top-0 lg:-right-[8.5rem]  xl:-right-[12rem] md:-top-[3rem] lg:top-[3rem] xl:top-[7rem] w-full md:overflow-x-visible object-cover h-full lg:max-w-[90%] "
            loading="eager"
            alt="bg-mockup"
            src={mockup}
          />
        </div>
      </motion.div>
    </header>
  );
};
