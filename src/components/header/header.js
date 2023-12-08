"use client";
import React, { useState, useEffect } from "react";
import Logo from "../icons/logo";
import "./header.css";
import ArrowDown from "../icons/arrow-down";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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

  return (
    <section className={`w-full header ${isSticky ? " sticky" : ""}`}>
      <div className="flex items-center">
        <Logo width={150} height={72} isSticky={isSticky} />
      </div>
      <div className="header-options">
        <Link
          href={"/"}
          className={isActive("/") ? "current-btn" : ""}
          style={{ padding: "10px 24px" }}
        >
          HOME
        </Link>
        <div className={`relative inline-block`} onClick={toggleDropdown}>
          <div
            className={`flex items-center space-x-1 cursor-pointer ${
              isActive("/service") ? "current-btn" : ""
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
          className={isActive("/industry") ? "current-btn" : ""}
          style={{ padding: "10px 24px" }}
        >
          INDUSTRY
        </Link>
        <Link
          href={"/about"}
          className={isActive("/about") ? "current-btn" : ""}
          style={{ padding: "10px 24px" }}
        >
          ABOUT
        </Link>
      </div>
      <Link href={"/contact"} className="contactus-btn">
        CONTACT US
      </Link>
    </section>
  );
};

export default Header;
