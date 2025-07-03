import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import youtube from "../assets/images/icon-youtube.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import footerLogo from "../assets/images/footerLogo.svg";
import { RequestInvite } from "./RequestInvite";

interface SocialIcon {
  src: string;
  alt: string;
}

interface NavigationLink {
  path: string;
  label: string;
}

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string): void => {
    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#31d35c",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
      rotate: -5,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.footer
      id="footer"
      className="grid grid-cols-1 bg-DarkBlue pt-10 pb-14 lg:py-8 text-LightGrayBlue items-center space-y-4 px-8 lg:px-[7rem] md:grid-cols-3 lg:justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center lg:gap-14 flex-col gap-10">
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <img alt="logo" src={footerLogo} />
        </motion.span>
        <div className="flex gap-2 md:gap-3">
          {(
            [
              { src: facebook, alt: "facebook" },
              { src: youtube, alt: "youtube" },
              { src: twitter, alt: "twitter" },
              { src: pinterest, alt: "pinterest" },
              { src: instagram, alt: "instagram" },
            ] as SocialIcon[]
          ).map((icon: SocialIcon, index: number) => (
            <motion.img
              key={icon.alt}
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="cursor-pointer"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 justify-items-center md:text-left md:grid-cols-2 gap-2">
          {(
            [
              { path: "/about", label: "About Us" },
              { path: "/careers", label: "Careers" },
              { path: "/contact", label: "Contact" },
              { path: "/support", label: "Support" },
              { path: "/blog", label: "Blog" },
              { path: "/privacy", label: "Privacy Policy" },
            ] as NavigationLink[]
          ).map((link: NavigationLink, index: number) => (
            <motion.button
              key={link.path}
              className="cursor-pointer text-left"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleNavigation(link.path)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        className="space-y-6 mx-auto md:justify-items-end"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <RequestInvite hidden="flex" />
        <p className="capitalize">© Ecobank. All rights reserved</p>
      </motion.div>
    </motion.footer>
  );
};
