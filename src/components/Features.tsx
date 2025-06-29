import onlineIcon from "../assets/images/icon-online.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import iconApi from "../assets/images/icon-api.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import { motion } from "motion/react";

export const Features = () => {
  return (
    <div className="bg-LightGrayBlue">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 0.5 } }}
        viewport={{ once: true }}
        id="#section"
        className="pb-[6rem] pt-[5rem] md:text-left  px-8 lg:px-[7rem] gap-16  flex flex-col"
      >
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="">
            <div className="mb-4 sm:flex font-normal sm:text-left text-center text-4xl text-DarkBlue tracking-wide">
              <h1 className="sm:pr-2">Why choose</h1>
              <h1>Easybank?</h1>
            </div>
            <p className="text-wrap md:text-balance text-GrayBlue">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col place-items-center md:place-items-start gap-8">
            <img
              alt="online"
              src={onlineIcon}
              className="bg-gradient-to-r from-LimeGreen to to-Cyan rounded-full h-20 w-20"
            />
            <div className="space-y-4">
              <h1 className="text-DarkBlue font-bold">Online Banking</h1>
              <p className="text-wrap text-GrayBlue">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col place-items-center md:place-items-start gap-8">
              <img
                alt="budgeting"
                src={budgeting}
                className="bg-gradient-to-r from-LimeGreen to to-Cyan rounded-full h-20 w-20"
              />
              <div className="space-y-4">
                <h1 className="text-DarkBlue font-bold">Simple Budgeting</h1>
                <p className="text-wrap text-GrayBlue">
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col place-items-center md:place-items-start gap-8">
              <img
                alt="onboarding"
                src={onboarding}
                className="bg-gradient-to-r from-LimeGreen to to-Cyan rounded-full h-20 w-20"
              />
              <div className="space-y-4">
                <h1 className="text-DarkBlue font-bold">Fast Onboarding</h1>
                <p className="text-wrap text-GrayBlue">
                  Onboarding We don’t do branches. Open your account in minutes
                  online and start taking control of your finances right away.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col place-items-center md:place-items-start gap-8">
              <img
                alt="api"
                src={iconApi}
                className="bg-gradient-to-r from-LimeGreen to to-Cyan rounded-full h-20 w-20"
              />
              <div className="space-y-4">
                <h1 className="text-DarkBlue font-bold">Open API</h1>
                <p className="text-wrap text-GrayBlue">
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
