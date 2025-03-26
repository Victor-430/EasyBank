import currencyImage from "../assets/images/image-currency.jpg";
import restaurantImage from "../assets/images/image-restaurant.jpg";
import planeImage from "../assets/images/image-plane.jpg";
import confettiImage from "../assets/images/image-confetti.jpg";

export const Articles = () => {
  return (
    <article
      id="#articles"
      className=" bg-LightGray px-4 lg:px-[6rem] text-center pt-32 pb-20 lg:text-left"
    >
      <h1 className="font-medium tracking-widest text-3xl text-center lg:text-left text-DarkBlue">
        Latest Articles
      </h1>
      <div className="mt-16 grid grid-cols-1 gap-12 justify-items-center lg:grid-cols-4">
        <div className="w-[90%] sm:w-[60%] lg:w-[17.5rem]">
          <img
            src={currencyImage}
            alt="currency"
            loading="lazy"
            className="h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[12rem] bg-yellow-400 rounded-sm"
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
        <div className="w-[90%] sm:w-[60%] lg:w-[17.5rem]">
          <img
            onError={(e) => console.log("image loading error", e)}
            src={restaurantImage}
            alt="restaurant"
            loading="lazy"
            className="h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[12rem] bg-yellow-400 rounded-sm"
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
        <div className="w-[90%] sm:w-[60%] lg:w-[17.5rem]">
          <img
            className="h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[12rem] bg-yellow-400 rounded-sm"
            src={planeImage}
            alt="plane"
            loading="lazy"
          />
          <div className="bg-white pt-8 pb-8 px-6">
            <p className="mb-3 text-GrayBlue text-sm"> By Wilson Hutton</p>
            <h3 className="mb-4 hover:text-LimeGreentext-DarkBlue  text-lg font-medium">
              Take your Easybank card wherever you go
            </h3>
            <p className="text-GrayBlue text-md ">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>

        <div className="w-[90%] sm:w-[60%] lg:w-[17.5rem]">
          <img
            className="h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[12rem] bg-yellow-400 rounded-sm"
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
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
