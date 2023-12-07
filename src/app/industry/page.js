import HeadVector from "@/components/icons/head-vector";
import Header from "@/components/header/header";
import Features from "@/components/features/features";
import {
  industryContent1,
  industryContent2,
  industryContent3,
  industryContent4,
} from "@/data/industry/industryContent";
import Content from "@/components/content/content";
import Footer from "@/components/footer/footer";

export default function Industry() {
  return (
    <section className="main">
      <div className="industry-image"></div>
      <div className="industry-gradient"></div>
      <div className="head-vector">
        <Header />
        <div className="w-full px-[118px] flex pt-[80px]">
          <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
            <div className="header-title">Industry</div>
            <div className="w-[1000px] font-[16px] text-center">
              Our industry-leading cybersecurity web services are tailored to
              safeguard your business in the digital landscape. We empower
              businesses to thrive securely in an interconnected world.
            </div>
            <div className="get-started">
              <div className="get-started-font">Get Started</div>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-bg-1 flex items-center">
        <Content {...industryContent1} />
      </div>
      <div className="content-bg-3 flex items-center">
        <Content {...industryContent2} />
      </div>
      <div className="content-bg-4 flex items-center">
        <Content {...industryContent3} />
      </div>
      <div className="content-bg-5 flex items-center">
        <Content {...industryContent4} />
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
