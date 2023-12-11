import Link from "next/link";

const { default: Header } = require("../header/header");
const { default: HeadVector } = require("../icons/head-vector");

const BannerIndustry = () => {
  return (
    <div class="head-vector industry-image bg-cover h-screen ">
      <Header />
      <div className="w-full px-4 sm:px-20 md:px-[118px] flex pt-[80px]">
        <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
          <div className="header-title">Industry</div>
          <h2 className="font-[16px] text-center">
            Our industry-leading cybersecurity web services are tailored to
            safeguard your business in the digital landscape. We empower
            businesses to thrive securely in an interconnected world.
          </h2>
          <Link href={"/contact"} className="get-started">
            <div className="get-started-font">Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerIndustry;
