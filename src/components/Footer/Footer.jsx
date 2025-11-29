import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const QuickLinks = [
  {
    title: "Cart",
    link: "/cart",
  },
  {
    title: "Wishlist",
    link: "/wishlist",
  },
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Login",
    link: "/login",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 pb-12 sm:pb-20 pt-5">
          {/* company details */}
          <div className="py-6 sm:py-8 px-4">
            <h1 className="text-2xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              SHOPPY
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/70">
              Your trusted destination for premium tech gadgets and electronics. We bring you the latest innovations in technology at competitive prices.
            </p>
            <br />
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FaLocationArrow />
              <p>Jakarta, Indonesia</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-sm sm:text-base">
              <FaMobileAlt />
              <p>+62 878 8320 3483</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl sm:text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl sm:text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl sm:text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-1 md:col-span-2 md:pl-10">
            <div className="">
              <div className="py-6 sm:py-8 px-4">
                <h1 className="text-lg sm:text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={"flex flex-col gap-2 sm:gap-3 text-sm sm:text-base"}>
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-6 sm:py-8 px-4">
                <h1 className="text-lg sm:text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
                  {QuickLinks.map((link, index) => (
                    <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-6 sm:py-8 px-4">
                <h1 className="text-lg sm:text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <div className="text-sm sm:text-base">
                  <div className="flex items-center gap-3 mb-3">
                    <FaLocationArrow />
                    <p>Jakarta, Indonesia</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <a href="tel:+6287883203483" className="hover:text-primary duration-300">
                      +62 878 8320 3483
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-6 sm:py-10 border-t-2 border-gray-300/50">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70">
              Made with 💖 by Yerico Alexander
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;