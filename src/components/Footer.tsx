import { RequestInvite } from "./RequestInvite";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 bg-DarkBlue py-8 text-GrayBlue items-center space-y-4 px-8 lg:px-28 lg:grid-cols-3 lg:justify-between">
      <div className="flex flex-col gap-10">
        <span className="inline-flex gap-1">
          <img alt="logo" src="../assets/images/logo.svg" />
          <h1 className="font-extrabold text-lg text-white">easybank</h1>
        </span>
        <div className="flex gap-3">
          <img
            loading="lazy"
            src="../assets/images/icon-facebook.svg"
            alt="facebook"
            className="hover:textLimeGreen"
          />
          <img
            loading="lazy"
            src="../assets/images/icon-youtube.svg"
            alt="youtube"
            className="hover:text-LimeGreen"
          />
          <img
            loading="lazy"
            src="../assets/images/icon-twitter.svg"
            alt="twitter"
            className="hover:text-LimeGreen"
          />
          <img
            loading="lazy"
            src="../assets/images/icon-pinterest.svg"
            alt="pinterest"
            className="hover:textLimeGreen"
          />
          <img
            loading="lazy"
            src="../assets/images/icon-instagram.svg"
            alt="instagram"
            className="hover:textLimeGreen"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
          <a className="cursor-pointer hover:text-green-600">About Us</a>
          <a className="cursor-pointer hover:text-green-600"> Careers</a>
          <a className="cursor-pointer hover:text-green-600">Contact</a>
          <a className="cursor-pointer hover:text-green-600">Support</a>
          <a className="cursor-pointer hover:text-green-600">Blog</a>
          <a className="cursor-pointer hover:text-green-600">Privacy Policy</a>
        </div>
      </div>

      <div className="space-y-6">
        <RequestInvite />
        <p className="capitalize">Ecobank. All rights reserved</p>
      </div>
    </footer>
  );
};
