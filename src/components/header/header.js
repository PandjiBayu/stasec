"use client";
import React, { useState, useEffect } from "react";
import Logo from "../icons/logo";
import "./header.css";
import ArrowDown from "../icons/arrow-down";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
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
        <div
          className={`flex items-center space-x-1 ${
            isActive("/service") ? "current-btn" : ""
          }`}
        >
          <div>SERVICE</div>
          <ArrowDown />
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
