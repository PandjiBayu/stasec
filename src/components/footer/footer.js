"use client";
import Logo from "../icons/logo";
import "./footer.css";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
import Mail from "../icons/mail";
import Location from "../icons/location";
import Phone from "../icons/phone";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { link } from "@/libs/utils";

const Footer = () => {
  const route = usePathname();
  const getFooterClass = () => {
    if (route === "/contact") {
      return "footer-contact";
    } else if (route === "/about") {
      return "footer-about";
    } else {
      return "footer";
    }
  };

  const footerClass = getFooterClass();
  const { t, i18n } = useTranslation();

  const handleMultiLinkClick = (e) => {
    e.preventDefault();
    const baseLink = `${link(i18n, "/service")}`;
    const links = [
      `${baseLink}-1`,
      `${baseLink}-2`,
      `${baseLink}-3`
    ];
    links.forEach(link => window.open(link, '_blank'));
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="flex h-[400px] flex-col items-start justify-between gap-6 px-10 py-10 lg:flex-row sm:gap-0 sm:px-12 md:px-14 lg:px-16 bg-[#171717]">
      <div className="flex flex-col space-y-[16px]">
        <div className="flex items-center space-x-2">
          <Logo width={120} height={52} />
        </div>
        <div>A Stellar Path to Security</div>
        <div className="flex space-x-[32px] pt-[16px]">
          <div className="socmed-border">
            <Instagram width={24} height={24} />
          </div>
          <div className="socmed-border">
            <Facebook width={24} height={24} />
          </div>
          <div className="socmed-border">
            <Twitter width={24} height={24} />
          </div>
          <div className="socmed-border">
            <Link href={"https://www.linkedin.com/company/stasec"}>
              <Linkedin width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-[40px] mt-10 lg:mt-0">
        <div className="text-[24px] font-bold">
          {t("component:footerTitle.quickLink")}
        </div>
        <div className="flex flex-col gap-4">
          <Link href={link(i18n, "/")} onClick={handleMultiLinkClick}>{t("component:footerLink.service")}</Link>
          <Link href={link(i18n, "/about")}>
            {t("component:footerLink.about")}
          </Link>
          <Link href={link(i18n, "#testimonial")} onClick={(e) => scrollToSection(e, 'testimonial')}>
            {t("component:footerLink.testimonial")}
          </Link>
          <Link href={link(i18n, "/pricing")}>
            {t("component:footerLink.pricing")}
          </Link>
          <Link href={link(i18n, "/contact")}>
            {t("component:footerLink.contact")}
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-[40px]">
        <div className="text-[24px] font-bold">
          {t("component:footerTitle.contactUs")}
        </div>
        <div className="flex flex-col space-y-[16px]">
          <div className="flex items-center space-x-2">
            <Mail width={16} height={16} />
            <div>info@stasec.com</div>
          </div>
          <div className="flex items-center space-x-2">
            <div style={{ width: "16px" }}>
              <Location width={16} height={16} />
            </div>
            <div className="w-64">
              The CEO Building, Level 12 Jl. TB Simatupang No.18C Cilandak
              Barat, Jakarta Selatan 12430
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone width={16} height={16} />
            <div>+62 21-7802734</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-[40px]">
        <div className="text-[24px] font-bold">
          {t("component:footerTitle.newsLetter")}
        </div>
        <div className="w-full max-w-[432px] h-[80px] p-2 bg-white rounded-[18px] flex items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow p-2 pl-6 text-black rounded-[24px] outline-none"
          />
          <button className="bg-blue-600 text-white font-semibold text-[24px] h-full py-2 px-4 rounded-[24px] ml-2 hover:bg-blue-800 hover:shadow-lg transition duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
