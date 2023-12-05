import Logo from "../icons/logo";
import "./header.css";
import ArrowDown from "../icons/arrow-down";


const Header = () => {
  return (
    <section className="w-full header">
      <div className="flex items-center">
        <Logo />
        <div className="font-logo">stasec</div>
      </div>
      <div className="header-options">
        <div className="home-btn">HOME</div>
        <div className="flex items-center space-x-1">
          <div>SERVICE</div>
          <ArrowDown />
        </div>
        <div>INDUSTRY</div>
        <div>ABOUT</div>
      </div>
      <div className="contactus-btn">CONTACT US</div>
    </section>
  );
};

export default Header;
