import Image from "next/image";
import Header from "@/components/header/header";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import { serviceFeatures1, keyBenefits } from "@/data/service/serviceFeatures";
import { workProcess1 } from "@/data/service/workProcess";
import iconMappings from "@/components/icons/iconMappings";
import BannerService1 from "@/components/banner-homepage/banner-service-1";
import FooterContainer from "@/components/footer/footer-container";

export default function Service1() {
  return (
    <section>
      <BannerService1 />

      <div className="flex items-center justify-center md:service1-bg-1 ">
        <Features {...serviceFeatures1} />
      </div>
 
      <div className="flex flex-col items-center w-full px-4 my-20 md:service1-bg-2 md:px-12">
        <div className="flex flex-col">
          <div className="grid items-center grid-cols-3 gap-6">
            <div className="flex flex-col space-y-[24px] col-span-3 md:col-span-2">
              <h4
                className="text-2xl fpoint-text sm:text-4xl md:text-7xl"
              >
                The Key Benefit Of Our Service
              </h4>
              
              <p className="text-sm sm:text-[18px] leading-6">
                Unlock unparalleled security insights with our Penetration Test
                solution. Safeguard your digital assets by proactively
                identifying vulnerabilities, fortifying your defenses, and
                ensuring resilience against potential cyber threats. Get all of
                the benefit to provide your cybersecurity needs.
              </p>
            </div>

            <div className="col-span-3 md:col-span-1 h-[350px] md:h-[500px]">
              <Image
                src={"/service1-content.png"}
                width={1000}
                height={1000}
                alt="service1-content"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div>

          <div className="flex flex-col items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 w-full gap-4 sm:gap-5 md:gap-12 pt-[70px] flex-1 ">
              {keyBenefits.cards.map((card, index) => {
                const CardIcon = iconMappings[card.cardIcon];
                return (
                    <div className="card-container" key={index}>
                      <div className="card flex flex-col p-[24px] space-y-[10px] h-[422px]">
                        <div className="white-circle w-fit">
                          <CardIcon width={48} height={48} color={"#1A57FF"} />
                        </div>
                        <h4 className="text-xl md:text-[24px] font-semibold">
                          {card.cardTitle}
                        </h4>
                        <p className="text-[14px]">{card.cardContent}</p>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center md:service2-bg-3 sm:mt-0 mt-7">
        <Features {...workProcess1} />
      </div>

      <FooterContainer />

    </section>
  );
}
