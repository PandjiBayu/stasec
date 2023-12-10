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
import FooterContainer from "@/components/footer/footer-container";
import BannerService2 from "@/components/banner-homepage/banner-service-2";

export default function Service2() {
  return (
    <section className="relative overflow-x-hidden">
      <BannerService2 />
      <div className="md:service2-bg-1 flex items-center justify-center mt-[-50px]">
        <Features {...serviceFeatures2} />
      </div>
      <Image
        className="absolute hidden line-vector-1 lg:block"
        src="/line-right.svg"
        width={480}
        height={480}
        alt="head-vector"
        style={{ top: "1000px" }}
      />
      <div className="flex items-center mt-64 md:service2-bg-2 my-14">
        <div className="grid items-start grid-cols-1 px-3 md:grid-cols-2 lg:items-center md:space-x-8 md:px-12 lg:px-20 sm:px-6">
          <div>
            <Image
              src="/service2-content.png"
              width={1200}
              height={1200}
              alt="feature-point"
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col items-center mt-5 sm:items-start sm:mt-0">
            <div className="fpoint-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-[24px]">
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
              className="pt-[72px] grid grid-cols-1 sm:grid-cols-2 gap-5"
              style={{ lineHeight: "32px" }}
            >
              <div className="card flex flex-col items-center space-y-[12px] p-3 lg:p-[32px]  justify-center min-h-[248px] sm:h-auto">
                <div>
                  <Customize width={64} height={64} />
                </div>
                <h4
                  className="text-xl fpoint-text lg:text-2xl"
                  style={{ textAlign: "center" }}
                >
                  Reduces the risk of security vulnerabilities in the software
                </h4>
              </div>

              <div className="card flex flex-col items-center space-y-[12px] p-3 lg:p-[32px]  justify-center min-h-[248px] sm:h-auto">
                <div>
                  <ShieldCheck width={64} height={64} color={"white"} />
                </div>
                <h4
                  className="text-xl fpoint-text lg:text-2xl"
                  style={{ textAlign: "center" }}
                >
                  Ensures that security is a part of development process
                </h4>
              </div>

              <div className="card flex flex-col items-center space-y-[12px] p-3 lg:p-[32px]  justify-center min-h-[248px] sm:h-auto">
                <div>
                  <DollarSign width={64} height={64} color={"white"} />
                </div>
                <h4
                  className="text-xl fpoint-text lg:text-2xl"
                  style={{ textAlign: "center" }}
                >
                  Reduce the need for costly post-development security fixes
                </h4>
              </div>

              <div className="card flex flex-col items-center space-y-[12px] p-3 lg:p-[32px]  justify-center min-h-[248px] sm:h-auto">
                <div>
                  <Award width={64} height={64} color={"white"} />
                </div>
                <h4
                  className="text-xl fpoint-text lg:text-2xl"
                  style={{ textAlign: "center" }}
                >
                  Enhances overall software quality
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
          className="absolute hidden line-vector-2 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "2400px" }}
        />
      <div className="flex items-center mt-64 md:service2-bg-3">
        <Features {...workProcess2} />
      </div>

      <FooterContainer />
    </section>
  );
}
