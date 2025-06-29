import { motion } from "motion/react";

import mockup from "../assets/images/image-mockups.png";

import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header
      id="#hero"
      className="relative bg-LightGray flex-grow-0 flex-col-reverse flex gap-y-0  xl:flex-row xl:pl-[6rem]"
    >
      {/* left Content */}
      <div className="text-center w-full h-fit md:mx-auto lg:w-2/3 xl:w-[60%] pb-[7rem]  md:text-center xl:text-left px-8  space-y-6  ">
        <h1 className="font-normal xl:pt-[7rem]  text-DarkBlue text-balance md:font-bold text-4xl xl:text-5xl tracking-wide leading-tight">
          Next generation digital banking
        </h1>
        <p className="text-balance xl:text-left pb-6 text-GrayBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="xl:justify-items-start justify-items-center">
          <RequestInvite hidden="flex" />
        </div>
      </div>

      {/* hero bg and mockup */}
      <motion.div
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5, delay: 0.7 } }}
        viewport={{ once: true }}
        className=" w-full lg:min-h-screen min-w-min"
      >
        <div className="relative bg-no-repeat  bg-cover px-8  -top-[1rem] sm:-top-[9.5rem] md:-top-[8rem] lg:-top-[10rem] xl:-top-[13rem]  lg:px-0 bg-mobile xl:bg-desktop">
          <img
            className="relative -top-[2.5rem] sm:-top-0 md:mx-auto xl:-right-[12rem] md:-top-[3rem] lg:top-[3rem] xl:top-[7rem] w-full md:overflow-x-visible object-cover h-full lg:max-w-[90%] "
            loading="eager"
            alt="bg-mockup"
            src={mockup}
          />
        </div>
      </motion.div>
    </header>
  );
};
