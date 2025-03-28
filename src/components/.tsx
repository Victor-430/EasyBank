import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY;
        const translateY = Math.min(scrollY * 0.1, 30);
        phoneRef.current.style.transform = `translateY(${-translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-easybank-gray-blue pt-20 md:pt-0">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Content */}
          <div
            className="w-full md:w-1/2 py-12 md:py-32 text-center md:text-left animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-easybank-dark-blue mb-5 leading-tight">
              Next generation digital banking
            </h1>
            <p className="text-easybank-medium-blue md:pr-12 mb-8 text-lg">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="primary-button">Request Invite</button>
          </div>

          {/* Right Image Area */}
          <div className="relative w-full md:w-1/2">
            {/* Background Design */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute w-full md:w-[120%] h-[80%] md:h-full top-0 md:-right-[10%] bg-no-repeat bg-contain bg-right-top"
                style={{
                  backgroundImage: `url('/lovable-uploads/348c4e5d-8fe0-4e1f-b274-730586bafda1.png')`,
                  backgroundSize: "80%",
                }}
              ></div>
            </div>

            {/* Mockup Phones */}
            <div
              ref={phoneRef}
              className="relative h-72 sm:h-96 md:h-[600px] transform transition-transform duration-500 ease-out"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 w-[80%] md:w-full max-w-md">
                <div className="relative">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-white opacity-0 animate-fade-in"
                    style={{
                      animationDelay: "0.5s",
                      animationFillMode: "forwards",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Footer: React.FC = () => {
  return (
    <footer className="bg-easybank-footer-blue text-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Social Icons */}
          <div className="space-y-8 md:col-span-1">
            <div>
              <a href="/" className="text-2xl font-bold text-white">
                easybank
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="social-icon">
                <Facebook />
              </a>
              <a href="#" aria-label="Youtube" className="social-icon">
                <Youtube />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <Instagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Links - First Column */}
          <div className="md:col-span-1">
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Links - Second Column */}
          <div className="md:col-span-1">
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Button and Copyright */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end justify-between">
            <button className="primary-button mb-6">Request Invite</button>
            <p className="text-sm text-easybank-medium-blue text-center md:text-right">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import mockup from "../assets/images/image-mockups.png";

import { RequestInvite } from "./RequestInvite";

export const Hero = () => {
  return (
    <header
      id="#hero"
      className="relative flex-col-reverse flex bg-LightGray px-8 lg:pl-[6rem] gap-28 lg:grid lg:grid-cols-3"
    >
      <div className="relative pb-[9rem] pt-[10rem] flex flex-col gap-4 ">
        <h1 className="font-medium text-DarkBlue text-balance text-3xl tracking-wide">
          Next generation digital banking
        </h1>
        <p className="text-left pb-6 text-GrayBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="lg:justify-items-start justify-items-center">
          <RequestInvite hidden="flex" />
        </div>
      </div>

      <div className="relative md:absolute -top-28 right-0 w-full lg:w-[65%] h-full bg-mobile lg:bg-desktop">
        <div>
          <img
            className="relative -top-10 -right-[15rem] max-w-[100%]  z-0"
            loading="eager"
            alt="bg-mockup"
            src={mockup}
          />
        </div>
      </div>
    </header>
  );
};
