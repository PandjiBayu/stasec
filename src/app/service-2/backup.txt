import Header from "@/components/header/header";
import { homeFeatures } from "@/data/home/cardContent";
import {
  homeContent1,
  homeContent2,
  homeContent3,
  homeContent4,
} from "@/data/home/homeContent";
import Features from "@/components/features/features";
import Content from "@/components/content/content";
import Footer from "@/components/footer/footer";
import { serviceFeatures2 } from "@/data/service/serviceFeatures";
import Time from "@/components/icons/time";
import Threat from "@/components/icons/threat";
import Customize from "@/components/icons/customize";
import Training from "@/components/icons/training";
import ShieldCheck from "@/components/icons/shield-check";
import DollarSign from "@/components/icons/dollar-sign";
import Award from "@/components/icons/award";
import Image from "next/image";
import { workProcess2 } from "@/data/service/workProcess";


export default function Service2() {
  return (
    <section className="main">
      <div className="service2-image"></div>
      <div className="industry-gradient"></div>
      <div className="head-vector">
        <Header />
        <div className="w-full px-[118px] flex pt-[80px]">
          <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
            <div className="header-title">Secure Development Tools</div>
            <div className="w-[1000px] font-[16px] text-center">
              A cutting-edge software to assess and enhance the security of your
              code, ensuring your applications are built with security in mind.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
        </div>
      </div>
      <div className="service2-bg-1 flex items-center justify-center mt-[-50px]">
        <Features {...serviceFeatures2} />
      </div>
      <div className="service2-bg-2 flex items-center">
        <div className="flex items-center space-x-[150px] px-[118px]">
          <div>
            <Image
              src="/service2-content.png"
              width={1200}
              height={1200}
              alt="feature-point"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start">
            <div
              className="fpoint-text text-[64px] pb-[24px]"
              style={{ lineHeight: "70px" }}
            >
              The Key Benefit Of Our Service
            </div>
            <div className="text-[18px]">
              Introducing Security Development Tools, your key to fortified
              digital resilience. Enhance your cybersecurity posture with
              advanced tools designed to streamline security development,
              reducing vulnerabilities and ensuring robust protection against
              evolving threats.
            </div>
            <div
              className="pt-[72px] grid grid-cols-2 gap-12"
              style={{ lineHeight: "32px" }}
            >
              <div className="card flex flex-col items-center space-y-[12px] p-[32px] w-[300px]">
                <div>
                  <Customize width={64} height={64} />
                </div>
                <div
                  className="fpoint-text text-[24px]"
                  style={{ textAlign: "center" }}
                >
                  Reduces the risk of security vulnerabilities in the software
                </div>
              </div>
              <div className="card flex flex-col items-center space-y-[12px] p-[32px] w-[300px] justify-center">
                <div>
                  <ShieldCheck width={64} height={64} color={"white"} />
                </div>
                <div
                  className="fpoint-text text-[24px]"
                  style={{ textAlign: "center" }}
                >
                  Ensures that security is a part of development process
                </div>
              </div>
              <div className="card flex flex-col items-center space-y-[12px] p-[32px] w-[300px] justify-center">
                <div>
                  <DollarSign width={64} height={64} color={"white"} />
                </div>
                <div
                  className="fpoint-text text-[24px]"
                  style={{ textAlign: "center" }}
                >
                  Reduce the need for costly post-development security fixes
                </div>
              </div>
              <div className="card flex flex-col items-center space-y-[12px] p-[32px] w-[300px] justify-center">
                <div>
                  <Award width={64} height={64} color={"white"} />
                </div>
                <div
                  className="fpoint-text text-[24px]"
                  style={{ textAlign: "center" }}
                >
                  Enhances overall software quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service2-bg-3 flex items-center">
      <Features {...workProcess2} />
      </div>
      <div className="industry-bg-2 flex items-center justify-center">
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
