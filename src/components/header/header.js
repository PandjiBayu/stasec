"use client";
import React, { useState, useEffect } from "react";
import Logo from "../icons/logo";
import "./header.css";
import ArrowDown from "../icons/arrow-down";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";
import { useTranslation } from "react-i18next";
import { link } from "@/libs/utils";
import Language from "../language/language";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [isSticky, setIsSticky] = useState(false);
  const [isServiceDropdownActive, setIsServiceDropdownActive] = useState(false);
  const [isPartnersDropdownActive, setIsPartnersDropdownActive] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPartners, setSelectedPartners] = useState(null);

  const [open, setOpen] = useState(false);

  const openMobileMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const route = usePathname();
  const isActive = (path) => {
    if (path === "/service") {
      return (
        route.startsWith(`${i18n.language === "en" ? "" : "/id"}/service-1`) ||
        route.startsWith(`${i18n.language === "en" ? "" : "/id"}/service-2`) ||
        route.startsWith(`${i18n.language === "en" ? "" : "/id"}/service-3`)
      );
    }
    return route === `${i18n.language === "en" ? "" : "/id"}${path}`;
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 80;
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownActive(!isServiceDropdownActive);
    setIsPartnersDropdownActive(false); // Ensure the other dropdown is closed
  };

  const togglePartnersDropdown = () => {
    setIsPartnersDropdownActive(!isPartnersDropdownActive);
    setIsServiceDropdownActive(false); // Ensure the other dropdown is closed
  };

  const selectService = (service) => {
    setSelectedService(service);
    setIsServiceDropdownActive(false); // Close the dropdown after selection
  };

  const selectPartners = (partners) => {
    setSelectedPartners(partners);
    setIsPartnersDropdownActive(false); // Close the dropdown after selection
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
        <Link
          href={link(i18n, "/")}
          className="z-10 flex items-center px-2 lg:px-10"
        >
          <Logo width={160} height={80} isSticky={isSticky} />
        </Link>
        <div className="items-center hidden text-sm md:flex lg:gap-8 md:gap-6 sm:gap-4">
          <Link
            href={link(i18n, "/")}
            className={`${
              isActive("/") ? currentBtnClass : "z-10"
            } px-5 py-2.5 `}
          >
            {t("component:header.home")}
          </Link>
          <div className={`relative inline-block`} onClick={toggleServiceDropdown}>
            <div
              className={`flex items-center space-x-1 cursor-pointer px-5 py-2.5  ${
                isActive("/service") ? currentBtnClass : ""
              }`}
            >
              <div>{t("component:header.service")}</div>
              <ArrowDown />
            </div>

            {isServiceDropdownActive && (
              <div className="absolute mt-2 bg-[#262626] border border-gray-800 rounded-md shadow-lg w-[200px] flex flex-col z-50">
                <Link
                  href={link(i18n, "/service-1")}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedService === "Service 1" ? "font-bold" : ""
                  }`}
                  onClick={() => selectService("Service 1")}
                >
                  Penetration Testing
                </Link>
                <Link
                  href={link(i18n, "/service-2")}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedService === "Service 2" ? "font-bold" : ""
                  }`}
                  onClick={() => selectService("Service 2")}
                >
                  Secure Development Tools
                </Link>
                <Link
                  href={link(i18n, "/service-3")}
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
          <div className={`relative inline-block`} onClick={togglePartnersDropdown}>
            <div
              className={`flex items-center space-x-1 cursor-pointer px-5 py-2.5  ${
                isActive("/partner") ? currentBtnClass : ""
              }`}
            >
              <div>{t("component:header.partners")}</div>
              <ArrowDown />
            </div>

            {isPartnersDropdownActive && (
              <div className="absolute mt-2 bg-[#262626] border border-gray-800 rounded-md shadow-lg w-[200px] flex flex-col z-50">
                <Link
                  href={link(i18n, "/partner")}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedPartners === "Partners 1" ? "font-bold" : ""
                  }`}
                  onClick={() => selectPartners("Partners 1")}
                >
                  {t("component:header.partners_1")}
                </Link>
                <Link
                  href={link(i18n, "/partner")}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedPartners === "Partners 2" ? "font-bold" : ""
                  }`}
                  onClick={() => selectPartners("Partners 2")}
                >
                  {t("component:header.partners_2")}
                </Link>
                <Link
                  href={link(i18n, "/partner")}
                  className={`p-4 hover:bg-gray-700 cursor-pointer ${
                    selectedPartners === "Partners 3" ? "font-bold" : ""
                  }`}
                  onClick={() => selectPartners("Partners 3")}
                >
                  {t("component:header.partners_3")}
                </Link>
              </div>
            )}
          </div>
          <Link
            href={link(i18n, "/pricing")}
            className={`${
              isActive("/pricing") ? currentBtnClass : "z-10"
            } px-5 py-2.5`}
          >
            {t("component:header.pricing")}
          </Link>
          <Link
            href={link(i18n, "/industry")}
            className={`${
              isActive("/industry") ? currentBtnClass : "z-10"
            } px-5 py-2.5`}
          >
            {t("component:header.industry")}
          </Link>
          <Link
            href={link(i18n, "/about")}
            className={`${
              isActive("/about") ? currentBtnClass : "z-10"
            } px-5 py-2.5`}
          >
            {t("component:header.about")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:inline-block">
            <Language />
          </div>
          <Link
            href={link(i18n, "/contact")}
            className="md:block hidden text-white bg-gradient-to-br from-[#4B08B4] to-[#103BC3] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-xs sm:text-sm md:px-5 md:py-4 px-2 py-2.5 sm:ml-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {t("component:header.contact")}
          </Link>
        </div>

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
