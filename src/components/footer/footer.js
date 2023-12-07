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
  const isContact = (path) => {
    return route === path;
  };
  return (
    <section className={isContact("/contact") ? "footer-contact" : "footer"}>
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
      <div className="flex flex-col space-y-[40px]">
        <div className="text-[24px] font-bold">Newsletter</div>
        <div className="input-field flex">
          <input
            style={{ color: "#4A4A4A", outline: "none" }}
            className="px-3"
            placeholder="Enter your email"
          />
          <div className="subs-button">Subscribe</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
