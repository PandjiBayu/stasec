"use client";
import Logo from "../icons/logo";
import "./footer.css";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";
import Youtube from "../icons/youtube";
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
            <Youtube width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-[40px] mt-10 lg:mt-0">
        <div className="text-[24px] font-bold">{t("component:footerTitle.quickLink")}</div>
        <div className="flex flex-col gap-4">
          <Link href={link(i18n, "/")}>{t("component:footerLink.home")}</Link>
          <Link href={link(i18n, "/industry")}>{t("component:footerLink.industry")}</Link>
          <Link href={link(i18n, "/about")}>{t("component:footerLink.about")}</Link>
          <Link href={link(i18n, "/contact")}>{t("component:footerLink.contact")}</Link>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-[40px]">
        <div className="text-[24px] font-bold">{t("component:footerTitle.service")}</div>
        <div className="flex flex-col gap-4">
          <Link href={link(i18n, "/service-1")}>Penetration Testing</Link>
          <Link href={link(i18n, "/service-2")}>Secure Development Tools</Link>
          <Link href={link(i18n, "/service-3")}>
            Security Monitoring & Assessment
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-[40px]">
        <div className="text-[24px] font-bold">{t("component:footerTitle.contactUs")}</div>
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
    </footer>
  );
};

export default Footer;
