export const Articles = () => {
  return (
    <article className="py-12 bg-LightGray px-8 lg:px-28 text-center lg:py-8 lg:text-left">
      <h1 className="font-bold tracking-wide">Latest Article</h1>
      <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-4">
        <div className="pb-8 pr-4">
          <img
            src="../assets/images/image-currency.jpg"
            alt="currency"
            loading="lazy"
            className="mb-5 h-72 w-56 rounded-sm"
          />
          <p className="mb-3">By Claire Robinson</p>
          <h3 className="mb-4 hover:text-LimeGreen">
            Receive money in any currency with no fees
          </h3>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>
        <div className="pb-8 pr-4 hover:text-lime">
          <img
            src="../assets/images/image-restaurant.jpg"
            alt="resturant"
            loading="lazy"
            className="mb-5 h-72 w-56 rounded-sm"
          />
          <p className="mb-3"> By Wilson Hutton</p>
          <h3 className="mb-4 hover:text-LimeGreen">
            Treat yourself without worrying about money
          </h3>
          <p>
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you
          </p>
        </div>
        <div className="pb-8 pr-4">
          <img
            className="mb-5 h-72 w-56 rounded-sm"
            src="../assets/images/image-plane.jpg"
            alt="plane"
            loading="lazy"
          />
          <p className="mb-3"> By Wilson Hutton</p>
          <h3 className="mb-4 hover:text-LimeGreen">
            Take your Easybank card wherever you go
          </h3>
          <p>
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>
        <div className="pb-8 pr-4">
          <img
            className="mb-5 h-72 w-56 rounded-sm"
            src="../assets/images/image-confetti.jpg"
            alt="confetti"
            loading="lazy"
          />
          <p className="mb-3"> By Claire Robinson</p>
          <h3 className="mb-4 hover:text-LimeGreen">
            {" "}
            Our invite-only Beta accounts are now live!
          </h3>
          <p>
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </article>
  );
};
