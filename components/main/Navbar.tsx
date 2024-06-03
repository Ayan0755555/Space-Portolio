"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a href="#about-me" className="flex items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            AYANREHMAN
          </span>
        </a>

        <div className="hidden md:flex items-center justify-between w-full md:w-auto md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] md:px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer mx-1 md:mx-2 nav-link">
              About me
            </a>
            <a href="#skills" className="cursor-pointer mx-1 md:mx-2 nav-link">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer mx-1 md:mx-2 nav-link">
              Projects
            </a>
            <a href="#faqs" className="cursor-pointer mx-1 md:mx-2 nav-link">
              Faqs
            </a>
            <a href="#contact" className="cursor-pointer mx-1 md:mx-2 nav-link">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-full flex flex-col items-center mt-4 bg-[#0300145e] rounded-lg text-gray-200`}
      >
        <a href="#about-me" className="cursor-pointer py-2 nav-link">
          About me
        </a>
        <a href="#skills" className="cursor-pointer py-2 nav-link">
          Skills
        </a>
        <a href="#projects" className="cursor-pointer py-2 nav-link">
          Projects
        </a>
        <a href="#faqs" className="cursor-pointer py-2 nav-link">
          Faqs
        </a>
        <a href="#contact" className="cursor-pointer py-2 nav-link">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
