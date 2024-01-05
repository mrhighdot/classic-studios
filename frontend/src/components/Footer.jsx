import { Link } from "react-router-dom";
import { useState } from "react";
import "./Footer.css";
import logo from "../assets/icons/brand/logo_white.png";
import { legalLinks, links } from "../constants/constants";
const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getUTCFullYear();
  return (
    <footer className="bg-[#303030] w-full p-8 sm:p-[6rem] text-white">
      {/* Logo Section */}
      <div className="mb-10">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[200px]" />
        </Link>
      </div>
      <div className="flex flex-col justify-between w-full gap-[6rem] sm:flex-row">
        <div className="flex flex-row flex-wrap justify-between w-full gap-3 sm:gap-0 sm:items-start sm:flex-row">
          {/* Web Links section */}
          <div className="flex flex-col w-auto mb-6">
            <span className="mb-4 font-bold uppercase">Links</span>
            <div className="flex flex-col gap-2 text-[#939598] font-semibold hover:cursor-pointer ">
              {links.map((link) => {
                return (
                  <Link
                    to={link.path}
                    key={link.id}
                    className="hover:text-primary transition "
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Legal section section */}
          <div className="flex flex-col w-auto mb-6">
            <span className="mb-4 font-bold uppercase">Legal</span>
            <div className="flex flex-col gap-2 text-[#939598] font-semibold hover:cursor-pointer ">
              {legalLinks.map((link) => {
                return (
                  <Link
                    to={link.path}
                    key={link.id}
                    className="hover:text-primary transition "
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Support section */}
          <div className="flex flex-col w-auto mb-6">
            <span className="mb-4 font-bold uppercase">Support</span>
            <div className="flex flex-col gap-2 text-[#939598] font-semibold hover:cursor-pointer ">
              {links.map((link) => {
                return (
                  <Link
                    to={link.path}
                    key={link.id}
                    className="hover:text-primary transition "
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* Newsletter Part */}
        <div className="flex flex-col w-full mb-[6rem] sm:mb-0 text-white">
          <span className="mb-6 font-bold uppercase">
            Subscribe to our newsletter
          </span>
          <div className="flex flex-col gap-3 mb-6 sm:flex-row">
            <input
              type="text"
              className="rounded-md h-[2.625rem] w-auto sm:w-full bg-none border-1 px-4"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-5 rounded-md h-[2.625rem] text-black bg-white">
              Submit
            </button>
          </div>
          <span className="mb-6 text-sm font-bold uppercase">
            Copyright © {currentYear} | Classic Studios | All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
