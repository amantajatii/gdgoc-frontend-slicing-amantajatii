"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Topbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  return (
    showTopBar && (
      <div className="bg-[#23856D] h-[58px] w-full hidden lg:flex items-center justify-center gap-2.5 text-white">
        <div className="flex items-center justify-center p-2.5 rounded-[5px] text-sm">
          <FiPhone className="inline text-white mr-2" />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center justify-center p-2.5 rounded-[5px] text-sm">
          <FiMail className="inline text-white mr-2" />
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="flex items-center justify-center gap-[5px] p-2.5">
          <span className="font-semibold">
            Follow Us and get a chance to win 80% off
          </span>
        </div>
        <div className="flex items-center justify-center gap-[5px] p-2.5">
          <span className="font-medium">Follow Us :</span>
          <span className="flex gap-2.5 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer transition-transform duration-200 hover:text-pink-400" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube className="cursor-pointer transition-transform duration-200 hover:text-red-400" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="cursor-pointer transition-transform duration-200 hover:text-blue-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer transition-transform duration-200 hover:text-sky-300" />
            </a>
          </span>
          <button
            onClick={() => setShowTopBar(false)}
            className="cursor-pointer text-2xl absolute top-4.5 right-5">
            <IoMdClose />
          </button>
        </div>
      </div>
    )
  );
};

export default Topbar;
