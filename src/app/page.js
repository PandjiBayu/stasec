import Image from "next/image";
import Header from "@/components/header/header";
import HeadVector from "@/components/icons/head-vector";
import Footer from "@/components/footer/footer";
import Features from "@/components/features/features";
import { homeFeatures, goalsCard } from "@/data/home/cardContent";
import Content from "@/components/content/content";
import {
  homeContent1,
  homeContent2,
  homeContent3,
  homeContent4,
} from "@/data/home/homeContent";
import "../components/features/features.css";
import Time from "@/components/icons/time";
import Threat from "@/components/icons/threat";
import Customize from "@/components/icons/customize";
import Training from "@/components/icons/training";
import Testimonial from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <section className="main">
      <div className="background-image"></div>
      <div className="gradient-image"></div>
      <div className="headers">
        <HeadVector />
      </div>
      <div class="head-vector">
        <Header />
        <div className="w-full px-0 md:px-[118px] flex flex-col md:flex-row pt-[80px]">
          <div className="flex flex-col space-y-[40px] md:py-[80px] w-full items-center md:items-start">
            <div className="text-center md:text-left header-title">A Stellar Path to <br className="hidden md:flex" /> Security</div>
            <div className="text-center md:w-full md:text-left font-[16px] md:font-[18px]">
              Guiding you to a path of top-notch cybersecurity. We are devoted
              to shielding <br /> your data and systems. With STASEC, it&apos;s not
              just software; it&apos;s a journey to a more <br /> secure digital
              future.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
          <div className="hidden md:w-full"></div>
        </div>
      </div>
      <div className="flex items-center content-bg-1">
        <Features {...homeFeatures} />
      </div>
      <div className="flex items-center content-bg-2">
        <Content {...homeContent1} />
      </div>
      <div className="flex items-center content-bg-3">
        <Content {...homeContent2} />
      </div>
      <div className="flex items-center content-bg-4">
        <Content {...homeContent3} />
      </div>
      <div className="flex items-center content-bg-5">
        <Content {...homeContent4} />
      </div>
      <div className="content-bg-6 flex items-center px-[80px] justify-center">
        <Features {...goalsCard} />
      </div>
      <div className="flex items-center content-bg-7">
        <div className="flex flex-col md:flex-row items-center md:space-x-[150px] px-[80px]">
          <div>
            <Image
              src="/feature-point.png"
              width={1200}
              height={1200}
              alt="feature-point"
              className="rounded-xl w-[320px] md:w-[1200px]"
            />
          </div>
          <div className="flex flex-col ">
            <div className="text-[24px] text-center md:text-start text-[#1A57FF] font-semibold pb-[8px]">
              Feature Point
            </div>
            <div
              className="font-semibold text-[64px] pb-[24px] text-center md:text-start"
              style={{ lineHeight: "70px" }}
            >
              How Can We Help You Increase Your Cybersecurity System?
            </div>
            <div className="text-[18px]">
              We proactively identify and neutralize potential threats, ensuring
              a robust defense against evolving cyber threats. Trust us to
              enhance your cybersecurity and secure your digital environment.
            </div>
            <div
              className="pt-[72px] grid grid-cols-2 gap-12"
              style={{ lineHeight: "32px" }}
            >
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Time width={40} height={34} />
                </div>
                <div className="text-[28px]">
                  Real-Time Incident Response
                </div>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Threat width={40} height={40} />
                </div>
                <div className="text-[28px]">
                  Spot Weaknesses, Boots Security
                </div>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Customize width={40} height={40} />
                </div>
                <div className="text-[28px]">
                  Improve Code Quality
                </div>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Training width={40} height={40} />
                </div>
                <div className="text-[28px]">
                  AI-Powered Assessment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center content-bg-8">
        <Testimonial />
        <div className="flex flex-col items-center pt-10 md:pt-[80px]">
            <div className="fpoint-text text-[24px]">Our Trusted Partners</div>
            <div className="flex space-x-[90px] items-center">
              <div>
                <Image
                  src="/asgardia.png"
                  width={160}
                  height={38}
                  alt="Argardia Logo"
                />
              </div>
              <div>
                <Image
                  src="/amara.png"
                  width={221}
                  height={38}
                  alt="Argardia Logo"
                />
              </div>
              <div>
                <Image
                  src="/aven.png"
                  width={126}
                  height={38}
                  alt="Argardia Logo"
                />
              </div>
              <div>
                <Image
                  src="/circle.png"
                  width={135}
                  height={38}
                  alt="Argardia Logo"
                />
              </div>
              <div>
                <Image
                  src="/ideaa.png"
                  width={111}
                  height={38}
                  alt="Argardia Logo"
                />
              </div>
            </div>
          </div>
      </div>
      <div className="flex items-center justify-center content-bg-9">
        <div className="flex flex-col items-center px-10 md:px-20">
          <div className="text-4xl md:text-[48px]">
            Fortify Your Digital Future with Our Security Solution
          </div>
          <div
            className="fpoint-text text-[18px] w-[700px] pt-4"
            style={{ textAlign: "center" }}
          >
            Ensures a proactive defense againts evolving threats, providing
            peace of mind for your digital landscape.
          </div>
          <div className="w-[230px] px-[36px] py-[20px] flex items-center justify-center rounded-[8px] bg-[#1A57FF] mt-[50px]">
            <div className="text-[24px]">Get In Touch</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
