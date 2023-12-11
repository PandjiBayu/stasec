"use client";
import React, { useState, useEffect } from "react";
import Logo from "../icons/logo";
import "./header.css";
import ArrowDown from "../icons/arrow-down";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [open, setOpen] = useState(false);

  const openMobileMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const route = usePathname();
  const isActive = (path) => {
    if (path === "/service") {
      return (
        route.startsWith("/service-1") ||
        route.startsWith("/service-2") ||
        route.startsWith("/service-3")
      );
    }
    return route === path;
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsActiveDropdown(!isActiveDropdown);
  };

  const selectService = (service) => {
    setSelectedService(service);
    setIsActiveDropdown(false);
  };

  const currentBtnClass =
    "z-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-full text-center text-sm";

  const fixedHeader = "fixed top-0 w-full bg-header-bg";
  return (
    <header
      className={`w-full py-4 md:py-8 z-10 px-6 sm:px-4 lg:px-10 ${
        isSticky ? fixedHeader : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between w-full lg:gap-5">
        <Link href="/" className="z-10 flex items-center px-2 lg:px-10">
          <Logo width={136} height={56} isSticky={isSticky} />
        </Link>
        <div className="items-center hidden text-sm md:flex lg:gap-14 md:gap-8 sm:gap-4">
          <Link
            href={"/"}
            className={`${
              isActive("/") ? currentBtnClass : "z-10"
            } px-5 py-2.5 `}
          >
            HOME
          </Link>
          <div className={`relative inline-block`} onClick={toggleDropdown}>
            <div
              className={`flex items-center space-x-1 cursor-pointer px-5 py-2.5  ${
                isActive("/service") ? currentBtnClass : ""
              }`}
            >
              <div>SERVICE</div>
              <ArrowDown />
            </div>

            {isActiveDropdown && (
              <div className="absolute mt-2 bg-[#262626] border border-gray-800 rounded-md shadow-lg w-[200px] flex flex-col">
                <Link
                  href={"/service-1"}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedService === "Service 1" ? "font-bold" : ""
                  }`}
                  onClick={() => selectService("Service 1")}
                >
                  Penetration Testing
                </Link>
                <Link
                  href={"/service-2"}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedService === "Service 2" ? "font-bold" : ""
                  }`}
                  onClick={() => selectService("Service 2")}
                >
                  Secure Development Tools
                </Link>
                <Link
                  href={"/service-3"}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedService === "Service 3" ? "font-bold" : ""
                  }`}
                  onClick={() => selectService("Service 3")}
                >
                  Security Monitoring & Assessment
                </Link>
              </div>
            )}
          </div>
          <Link
            href={"/industry"}
            className={`${
              isActive("/industry") ? currentBtnClass : "z-10"
            } px-5 py-2.5`}
          >
            INDUSTRY
          </Link>
          <Link
            href={"/about"}
            className={`${
              isActive("/about") ? currentBtnClass : "z-10"
            } px-5 py-2.5`}
          >
            ABOUT
          </Link>
        </div>
        <Link
          href={"/contact"}
          className="md:block hidden text-white bg-gradient-to-br from-[#4B08B4] to-[#103BC3] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs sm:text-sm md:px-5 md:py-4 px-2 py-2.5 sm:ml-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          CONTACT US
        </Link>

        <button
          onClick={openMobileMenu}
          class="text-gray-400 hover:text-white font-bold text-xl block md:hidden"
        >
          {open ? (
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </nav>

      <MobileMenu open={open} isActive={isActive} />
    </header>
  );
};

export default Header;
