import Link from "next/link";
import Header from "../header/header";

const BannerService3 = () => {
  return (
    <div className="h-screen bg-cover head-vector service3-image ">
      <Header />
      <div className="w-full px-3 sm:px-6 md:px-10 lg:px-[118px] flex sm:pt-[80px]">
        <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
          <h3 className="text-center header-title">
            Security Monitoring & Assessment
          </h3>
          <p className="font-[16px] text-center">
            This tool and service offer real-time monitoring and protection for
            software applications to detect and respond to potential attacks,
            vulnerabilities, and errors.
          </p>
          <Link href={"/contact"} className="get-started">
            <div className="get-started-font">Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerService3;
