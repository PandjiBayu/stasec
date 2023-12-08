import Image from "next/image";
import Header from "@/components/header/header";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import { serviceFeatures1, keyBenefits } from "@/data/service/serviceFeatures";
import { workProcess1 } from "@/data/service/workProcess";
import iconMappings from "@/components/icons/iconMappings";

export default function Service1() {
  return (
    <section className="main">
      <div className="service1-image"></div>
      <div className="service3-gradient"></div>
      <div className="head-vector">
        <Header />
        <div className="w-full px-[80px] flex pt-[80px]">
          <div className="flex flex-col space-y-[40px] py-[80px]">
            <div className="header-title">Penetration Test</div>
            <div className="w-[600px] font-[16px]">
              It&apos;s a comprehensive services that help you identify
              vulnerabilities in your systems and applications, enabling you to
              proactively strengthen your defenses.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
          <div className="hidden md:w-full"></div>
        </div>
      </div>
      <div className="service1-bg-1 flex items-center justify-center mt-[-50px]">
        <Features {...serviceFeatures1} />
      </div>
      <div className="service1-bg-2 flex flex-col items-center px-[118px]">
        <div className="flex flex-col">
          <div className="flex items-center space-x-[250px]">
            <div className="flex flex-col space-y-[24px] w-[1000px]">
              <div
                className="fpoint-text text-[64px]"
                style={{ lineHeight: "70px" }}
              >
                The Key Benefit Of Our Service
              </div>
              <div className="text-[18px]">
                Unlock unparalleled security insights with our Penetration Test
                solution. Safeguard your digital assets by proactively
                identifying vulnerabilities, fortifying your defenses, and
                ensuring resilience against potential cyber threats. Get all of
                the benefit to provide your cybersecurity needs.
              </div>
            </div>
            <div>
              <Image
                src={"/service1-content.png"}
                width={1000}
                height={1000}
                alt="service1-content"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-4 w-[800px] text-center">
              <div className="text-[24px] text-[#1A57FF]">OUR GOALS</div>
              <div className="title-text">
                Leading you to a stellar path to security
              </div>
              <div className="text-[18px]">
                Providing solution with some goals to improve the security that
                leading the your company with comprehensive system and tailored
                solutions.
              </div>
            </div>
            <div className="flex w-full gap-12 pt-[70px] flex-1 justify-between">
              {keyBenefits.cards.map((card, index) => {
                const CardIcon = iconMappings[card.cardIcon];
                return (
                  <div key={index}>
                    <div className="card-container w-[240px] ">
                      <div className="card flex flex-col p-[24px] space-y-[10px] h-[422px]">
                        <div className="white-circle w-fit">
                          <CardIcon width={48} height={48} color={"#1A57FF"} />
                        </div>
                        <div className="text-[24px] font-semibold">
                          {card.cardTitle}
                        </div>
                        <div className="text-[14px]">{card.cardContent}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center service2-bg-3">
        <Features {...workProcess1} />
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
