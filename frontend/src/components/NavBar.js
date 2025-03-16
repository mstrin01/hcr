import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-violet text-indigo p-10">
      {/* Left Section */}
      <div className="text-left font-bold font-libre text-lime">
        HANDWRITING RECOGNITION
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-4">
        <a href="/" className="text-lime hover:text-platinum font-lora">HOME</a>
        <a href="/about" className="text-lime hover:text-platinum font-lora">ABOUT</a>
        <a href="/profile" className="text-lime hover:text-platinum font-lora">PROFILE</a>
      </div>
    </nav>
  );
};

export default Navbar;
