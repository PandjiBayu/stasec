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
        <div className="w-full px-[118px] flex pt-[80px]">
          <div className="flex flex-col space-y-[40px] py-[80px]">
            <div className="header-title">A Stellar Path to Security</div>
            <div className="w-[600px] font-[16px]">
              Guiding you to a path of top-notch cybersecurity. We are devoted
              to shielding your data and systems. With STASEC, it&apos;s not
              just software; it&apos;s a journey to a more secure digital
              future.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      <div className="content-bg-1 flex items-center">
        <Features {...homeFeatures} />
      </div>
      <div className="content-bg-2 flex items-center">
        <Content {...homeContent1} />
      </div>
      <div className="content-bg-3 flex items-center">
        <Content {...homeContent2} />
      </div>
      <div className="content-bg-4 flex items-center">
        <Content {...homeContent3} />
      </div>
      <div className="content-bg-5 flex items-center">
        <Content {...homeContent4} />
      </div>
      <div className="content-bg-6 flex items-center px-[118px] justify-center">
        <Features {...goalsCard} />
      </div>
      <div className="content-bg-7 flex items-center">
        <div className="flex items-center space-x-[150px] px-[118px]">
          <div>
            <Image
              src="/feature-point.png"
              width={1200}
              height={1200}
              alt="feature-point"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col ">
            <div className="text-[24px] text-[#1A57FF] font-semibold pb-[8px]">
              Feature Point
            </div>
            <div
              className="fpoint-text text-[64px] pb-[24px]"
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
                <div className="fpoint-text text-[25px]">
                  Real-Time Incident Response
                </div>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Threat width={40} height={40} />
                </div>
                <div className="fpoint-text text-[25px]">
                  Spot Weaknesses, Boots Security
                </div>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Customize width={40} height={40} />
                </div>
                <div className="fpoint-text text-[25px]">
                  Improve Code Quality
                </div>
              </div>
              <div className="flex items-center space-x-[16px]">
                <div className="card px-[20px] py-[20px] flex items-center justify-center">
                  <Training width={40} height={40} />
                </div>
                <div className="fpoint-text text-[25px]">
                  AI-Powered Assessment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-bg-8 flex flex-col items-center justify-center">
        <Testimonial />
        <div className="flex flex-col items-center pt-[80px]">
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
      <div className="content-bg-9 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="fpoint-text text-[46px]">
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
