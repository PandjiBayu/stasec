import Image from "next/image";
import Header from "@/components/header/header";
import HeadVector from "@/components/icons/head-vector";
import Footer from "@/components/footer/footer";
import Features from "@/components/features/features";
import homeFeatures from "@/data/homeFeatures";
import RightVector from "@/components/icons/right-vector";

export default function Home() {
  return (
    <section className="main">
      <div class="background-image"></div>
      <div class="gradient-image"></div>
      <div class="headers">
        <HeadVector />
      </div>
      <div class="head-vector">
        <Header />
        <div className="w-full px-[118px] flex pt-[80px]">
          <div className="flex flex-col space-y-[40px] py-[80px]">
            <div className="header-title">A Stellar Path to Security</div>
            <div className="w-[600px] font-[16px]">
              Guiding you to a path of top-notch cybersecurity. We are devoted
              to shielding your data and systems. With STASEC, it's not just
              software; it's a journey to a more secure digital future.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      <div className="content-bg-1 flex items-center">
        <Features
          {...homeFeatures}
        />
      </div>
      <div className="content-bg-2 flex items-center">
      </div>
      <div className="content-bg-3 flex items-center">
      </div>
      <div className="content-bg-4 flex items-center">
      </div>
      <div className="content-bg-5 flex items-center">
      </div>
      <div className="content-bg-6 flex items-center">
      </div>
      <div className="content-bg-7 flex items-center">
      </div>
      <div className="content-bg-8 flex items-center">
      </div>
      <div className="content-bg-9 flex items-center">
      </div>
      <div className="content-footer">
        <Footer />
      </div>
    </section>
  );
}
