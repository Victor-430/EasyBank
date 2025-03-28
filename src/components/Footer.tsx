import youtube from "../assets/images/icon-youtube.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import footerLogo from "../assets/images/footerLogo.svg";

import { RequestInvite } from "./RequestInvite";

export const Footer = () => {
  return (
    <footer
      id="#footer"
      className="grid grid-cols-1  bg-DarkBlue pt-10 pb-14 lg:py-8  text-LightGrayBlue items-center space-y-4 px-8 lg:px-[7rem] md:grid-cols-3 lg:justify-between"
    >
      <div className="flex  items-center lg:gap-14 flex-col gap-10 ">
        <span>
          <img alt="logo" src={footerLogo} />
        </span>
        <div className="flex gap-2 md:gap-3">
          <img
            loading="lazy"
            src={facebook}
            alt="facebook"
            className="hover:textLimeGreen"
          />
          <img
            loading="lazy"
            src={youtube}
            alt="youtube"
            className="hover:text-LimeGreen"
          />
          <img
            loading="lazy"
            src={twitter}
            alt="twitter"
            className="hover:text-LimeGreen"
          />
          <img
            loading="lazy"
            src={pinterest}
            alt="pinterest"
            className="hover:textLimeGreen"
          />
          <img
            loading="lazy"
            src={instagram}
            alt="instagram"
            className="hover:textLimeGreen"
          />
        </div>
      </div>
      <div className="py-6 ">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 gap-2">
          <a className="cursor-pointer hover:text-green-600">About Us</a>
          <a className="cursor-pointer hover:text-green-600"> Careers</a>
          <a className="cursor-pointer hover:text-green-600">Contact</a>
          <a className="cursor-pointer hover:text-green-600">Support</a>
          <a className="cursor-pointer hover:text-green-600">Blog</a>
          <a className="cursor-pointer hover:text-green-600">Privacy Policy</a>
        </div>
      </div>

      <div className="space-y-6  justify-items-center md:justify-items-end">
        <RequestInvite hidden="flex" />
        <p className="capitalize"> © Ecobank. All rights reserved</p>
      </div>
    </footer>
  );
};
