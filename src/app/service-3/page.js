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
import FooterContainer from "@/components/footer/footer-container";
import BannerService3 from "@/components/banner-homepage/banner-service-3";

export default function Service3() {
  return (
    <section>
     <BannerService3 />
      <div className="service2-bg-1 flex items-center justify-center mt-[-50px]">
        <Features {...serviceFeatures3} />
      </div>

      <div className="flex items-center md:service2-bg-2 my-14 ">

<div className="grid items-start grid-cols-1 gap-6 px-3 md:grid-cols-2 md:gap-1 lg:gap-16 lg:items-center md:space-x-8 md:px-12 lg:px-20 sm:px-6">
  <div  >
    <Image
      src="/service3-content.png"
      width={1200}
      height={1200}
      alt="feature-point"
      className="rounded-xl"
    />
  </div>

  <div className="flex flex-col items-start mt-5 sm:mt-0">
    <div
      className="fpoint-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-[24px]"
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
       Boosts software security with active threat monitoring and response
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
       Reduces the likelihood of data breaches and security incidents
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
    Reduces downtime and financial losses from cyber attacks
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
        Supports compliance with security regulations and standards
        </h4>
      </div>

    </div>
    
  </div>
  
</div>

</div>

      <div className="flex items-center md:service2-bg-3">
        <Features {...workProcess3} />
      </div>
    
    <FooterContainer />
    </section>
  );
}
