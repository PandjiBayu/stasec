import Link from "next/link";

const { default: Header } = require("../header/header");
const { default: HeadVector } = require("../icons/head-vector");

const BannerService1 = () => {
  return (
    <div class="head-vector service1-image bg-cover h-screen ">
      <Header />
      <div className="w-full px-5 sm:px-[80px] flex sm:pt-[80px]">
        <div className="flex flex-col space-y-[40px] py-[80px] items-center md:items-start">
          <div className="text-center header-title md:text-start">Penetration Test</div>
          <div className="font-[16px] w-full md:w-1/2 text-center md:text-start">
            It&apos;s a comprehensive services that help you identify
            vulnerabilities in your systems and applications, enabling you to
            proactively strengthen your defenses.
          </div>
          <Link href={'/contact'} className="get-started">
            <div className="get-started-font">Get Started</div>
          </Link>
        </div>
        <div className="hidden md:w-full"></div>
      </div>
    </div>
  );
};

export default BannerService1;
