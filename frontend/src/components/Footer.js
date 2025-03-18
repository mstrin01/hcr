import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center bg-violet text-indigo p-5 text-sm">
      {/* Left Section */}
      <div className="flex-1 text-left font-bold font-libre text-lime mb-4 sm:mb-0">
        HANDWRITING <br /> RECOGNITION.
      </div>

      {/* Center Section */}
      <div className="flex-1 text-center mb-4 sm:mb-0">
        <span className="block font-bold font-libre text-lime">SITEMAP</span>
        <ul className="list-none p-0 m-0">
          <li><a href="/" className="block font-lora text-lime hover:text-indigo">HOME</a></li>
          <li><a href="/about" className="block font-lora text-lime hover:text-indigo">ABOUT</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-right font-bold font-libre text-lime mb-4 sm:mb-0">
        COPYRIGHT © 2025
      </div>
    </footer>
  );
};

export default Footer;
