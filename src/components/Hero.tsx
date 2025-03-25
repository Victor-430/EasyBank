import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header className="grid grid-cols-1 bg-LightGray pl-8 lg:pl-28 gap-28 lg:grid-cols-3">
      <div className="pb-[9rem] pt-[10rem] flex flex-col gap-4 ">
        <h1 className="font-extrabold text-DarkBlue text-balance">
          Next generation digital banking
        </h1>
        <p className="text-left pb-6">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestInvite />
      </div>
      <img
        className="w-[50rem] h-28 bg-yellow-500 col-span-2"
        loading="eager"
        alt="bg-intro"
        src="../assets/images/bg-intro-desktop.svg"
      />
    </header>
  );
};
