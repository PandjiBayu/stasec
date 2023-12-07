"use client"
import Logo from "../icons/logo";
import "./header.css";
import ArrowDown from "../icons/arrow-down";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const route = usePathname();
  const isActive = (path) => {
    return route === path;
  };
  return (
    <section className="w-full header">
      <Link href={"/"} className="flex items-center">
        <Logo width={56} height={72} />
        <div className="font-logo">stasec</div>
      </Link>
      <div className="header-options">
        <Link href={"/"} className={isActive("/") ? "current-btn" : ""} style={{padding: "10px 24px"}}>
          HOME
        </Link>
        <div className="flex items-center space-x-1">
          <div>SERVICE</div>
          <ArrowDown />
        </div>
        <Link
          href={"/industry"}
          className={isActive("/industry") ? "current-btn" : ""}
          style={{padding: "10px 24px"}}
        >
          INDUSTRY
        </Link>
        <div>ABOUT</div>
      </div>
      <div className="contactus-btn">CONTACT US</div>
    </section>
  );
};

export default Header;
