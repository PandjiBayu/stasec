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
import BannerIndustry from "@/components/banner-homepage/banner-industry";
import FooterContainer from "@/components/footer/footer-container";

export default function Industry() {
  return (
    <section >
      <BannerIndustry />

      <div className="flex items-center md:industry-bg-1">
        <Content {...industryContent1} />
      </div>
      <div className="flex items-center content-bg-3">
        <Content {...industryContent2} />
      </div>
      <div className="flex items-center content-bg-4">
        <Content {...industryContent3} />
      </div>
      <div className="flex items-center content-bg-3">
        <Content {...industryContent4} />
      </div>
      
      <FooterContainer />
      
    </section>
  );
}
