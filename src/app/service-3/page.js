import Header from "@/components/header/header";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import {
  serviceFeatures3,
} from "@/data/service/serviceFeatures";
import Customize from "@/components/icons/customize";
import ShieldCheck from "@/components/icons/shield-check";
import DollarSign from "@/components/icons/dollar-sign";
import Award from "@/components/icons/award";
import Image from "next/image";
import { workProcess3 } from "@/data/service/workProcess";

export default function Service3() {
  return (
    <section className="main">
      <div className="service3-image"></div>
      <div className="service3-gradient"></div>
      <div className="head-vector">
        <Header />
        <div className="w-full px-[118px] flex pt-[80px]">
          <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
            <div className="text-center header-title">Security Monitoring & Assessment</div>
            <div className="w-[1000px] font-[16px] text-center">
              This tool and service offer real-time monitoring and protection
              for software applications to detect and respond to potential
              attacks, vulnerabilities, and errors.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
        </div>
      </div>
      <div className="service2-bg-1 flex items-center justify-center mt-[-50px]">
        <Features {...serviceFeatures3} />
      </div>
      <div className="flex items-center service2-bg-2">
        <div className="flex items-center space-x-[150px] px-[118px]">
          <div>
            <Image
              src="/service3-content.png"
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
              The assessment features go beyond mere identification, offering
              in-depth analyses of vulnerabilities and potential weaknesses.
              Elevate your cybersecurity posture with our Security Monitoring
              and Assessment, here are sme benefits to empower you to stay a
              step ahead in the ever-evolving landscape of digital security.
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
                  Boosts software security with active threat monitoring and response
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
                  Reduces the likelihood of data breaches and security incidents
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
                  Reduces downtime and financial losses from cyber attacks
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
                  Supports compliance with security regulations and standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center service2-bg-3">
        <Features {...workProcess3} />
      </div>
      <div className="flex items-center justify-center industry-bg-2">
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
