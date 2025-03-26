import onlineIcon from "../assets/images/icon-online.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import iconApi from "../assets/images/icon-api.svg";
import onboarding from "../assets/images/icon-onboarding.svg";

export const Section = () => {
  return (
    <section
      id="#section"
      className="pb-[6rem] pt-[8rem] bg-LightGrayBlue items-center px-8 lg:px-[6rem] gap-20  flex flex-col"
    >
      <div className="text-center lg:text-left flex flex-col gap-6">
        <h1 className="mb-2 font-normal lg:text-left text-center text-3xl text-DarkBlue tracking-wide">
          Why choose Easybank?
        </h1>
        <p className="text-wrap text-GrayBlue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="flex flex-col gap-8">
          <img
            alt="online"
            src={onlineIcon}
            className="bg-gradient-to-r from-LimeGreen to to-Cyan rounded-full h-20 w-20"
          />
          <div className="space-y-4">
            <h1 className="text-DarkBlue font-bold">Online Banking</h1>
            <p className="text-wrap text-GrayBlue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-8">
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
          <div className="flex flex-col gap-8">
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
          <div className="flex flex-col gap-8">
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
    </section>
  );
};
