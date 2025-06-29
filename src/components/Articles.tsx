import currencyImage from "../assets/images/image-currency.jpg";
import restaurantImage from "../assets/images/image-restaurant.jpg";
import planeImage from "../assets/images/image-plane.jpg";
import confettiImage from "../assets/images/image-confetti.jpg";
import { motion } from "motion/react";

export const Articles = () => {
  return (
    <div className="bg-LightGray">
      <motion.article
        whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 0.5 } }}
        viewport={{ once: true }}
        id="#articles"
        className="  px-4 lg:px-[7rem] text-left pt-20 pb-20"
      >
        <h1 className="font-medium tracking-widest text-3xl text-center xl:text-left text-DarkBlue">
          Latest Articles
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-12 md:gap-8 lg:gap-16 cursor-pointer justify-items-center md:grid-cols-2 xl:grid-cols-4">
          <div className="w-[90%] sm:w-[60%] md:w-[80%] lg:w-[17rem] hover:scale-105">
            <img
              src={currencyImage}
              alt="currency"
              loading="lazy"
              className="h-[14rem] sm:h-[16rem] w-full md:h-[14rem] lg:h-[12rem] bg-gray-400 rounded-sm "
            />
            <div className="bg-white pt-8 pb-8 px-6">
              <p className="mb-3 text-GrayBlue text-sm">By Claire Robinson</p>
              <h3 className="mb-4 hover:text-LimeGreen text-DarkBlue text-lg font-medium">
                Receive money in any currency with no fees
              </h3>
              <p className="text-GrayBlue">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="w-[90%] sm:w-[60%] md:w-[80%] lg:w-[17rem] hover:scale-105">
            <img
              onError={(e) => console.log("image loading error", e)}
              src={restaurantImage}
              alt="restaurant"
              loading="lazy"
              className="h-[14rem] sm:h-[16rem] md:h-[14rem]  object-cover aspect-square w-full lg:h-[12rem] bg-gray-400 rounded-sm"
            />
            <div className="bg-white pt-8 pb-8 px-6">
              <p className="mb-3 text-GrayBlue text-sm"> By Wilson Hutton</p>
              <h3 className="mb-4 hover:text-LimeGreen text-DarkBlue text-lg font-medium">
                Treat yourself without worrying about money
              </h3>
              <p className="text-GrayBlue">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you
              </p>
            </div>
          </div>
          <div className="w-[90%] sm:w-[60%] md:w-[80%] lg:w-[17rem] hover:scale-105">
            <img
              className="h-[14rem] sm:h-[16rem] w-full md:h-[14rem] lg:h-[12rem] bg-gray-400 rounded-sm"
              src={planeImage}
              alt="plane"
              loading="lazy"
            />
            <div className="bg-white pt-8 pb-8 px-6">
              <p className="mb-3 text-GrayBlue text-sm"> By Wilson Hutton</p>
              <h3 className="mb-4 hover:text-LimeGreen text-DarkBlue text-lg font-medium">
                Take your Easybank card wherever you go
              </h3>
              <p className="text-GrayBlue text-md ">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>

          <div className="w-[90%] sm:w-[60%] md:w-[80%] lg:w-[17rem] hover:scale-105">
            <img
              className="h-[14rem] sm:h-[16rem] w-full md:h-[14rem] lg:h-[12rem] bg-gray-400 rounded-sm"
              src={confettiImage}
              alt="confetti"
              loading="lazy"
            />
            <div className="bg-white pt-8 pb-8 px-6">
              <p className="mb-3 text-GrayBlue text-sm"> By Claire Robinson</p>
              <h3 className="mb-4 hover:text-LimeGreen text-DarkBlue text-lg font-medium">
                Our invite-only Beta accounts are now live!
              </h3>
              <p className="text-GrayBlue">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};
