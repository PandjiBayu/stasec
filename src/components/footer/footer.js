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
  return (
    <footer className="flex flex-col flex-wrap items-start justify-between gap-6 px-10 py-10 sm:flex-row sm:gap-0 sm:px-12 md:px-14 lg:px-16">
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
      <div className="flex flex-col space-y-[40px]">
        <div className="text-[24px] font-bold">Quick Links</div>
        <div className="flex flex-col space-y-[16px]">
          <div>Our Service</div>
          <div>About Us</div>
          <div>Pricing</div>
          <div>Testimonial</div>
        </div>
      </div>
      <div className="flex flex-col space-y-[40px]">
        <div className="text-[24px] font-bold">Contact Us</div>
        <div className="flex flex-col space-y-[16px]">
          <div className="flex items-center space-x-2">
            <Mail width={16} height={16} />
            <div>hello@website.com</div>
          </div>
          <div className="flex items-center space-x-2">
            <Location width={16} height={16} />
            <div>838 Cantt Sialkot, ENG</div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone width={16} height={16} />
            <div>+02 5421234560</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  space-y-[40px]">
        <div className="text-[24px] font-bold">Newsletter</div>
        <div className="input-field flex  lg:h-[80px] h-[60px]  sm:h-[70px] p-1 sm:p-2 lg:p-8">
          <input
            style={{ color: "#4A4A4A", outline: "none" }}
            className="w-full px-1"
            placeholder="Enter your email"
          />
 
          <span className="px-4 py-3 text-sm subs-button sm:text-2xl lg:py-4 lg:px-5">Subscribe</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
