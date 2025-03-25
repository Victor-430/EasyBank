export const Section = () => {
  return (
    <section className="pb-[6rem] pt-[8rem] bg-LightGrayBlue px-8 lg:px-28 gap-24 flex flex-col">
      <div className="text-center lg:text-left flex flex-col gap-6">
        <h1 className="mb-2 font-bold">Why choose Easybank?</h1>
        <p className="text-wrap">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <img alt="online" src="../assets/images/icon-online.svg" />
          <h1>Online Banking</h1>
          <p className="text-wrap">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img alt="budgeting" src="../assets/images/icon-budgeting.svg" />
          <h1>Simple Budgeting</h1>
          <p className="text-wrap">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div>
          <img alt="onboarding" src="../assets/images/icon-onboarding.svg" />
          <h1>Fast Onboarding</h1>
          <p className="text-wrap">
            Onboarding We don’t do branches. Open your account in minutes online
            and start taking control of your finances right away.
          </p>
        </div>
        <div>
          <img alt="api" src="../assets/images/icon-api.svg" />
          <h1>Open API</h1>
          <p className="text-wrap">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
};
