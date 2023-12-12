import {
  industryContent1,
  industryContent2,
  industryContent3,
  industryContent4,
} from "@/data/industry/industryContent";
import Content from "@/components/content/content";
import BannerIndustry from "@/components/banner-homepage/banner-industry";
import FooterContainer from "@/components/footer/footer-container";
import Image from "next/image";
import translate from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const page = ["industry", "component"];

export default async function Industry({ params: { locale } }) {
  const { t, resources } = await translate(locale, page);

  return (
    <TranslationsProvider page={page} locale={locale} resources={resources}>
      <section className="relative overflow-x-hidden">
        <BannerIndustry />
        <Image
          className="absolute hidden line-vector-2 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "1200px" }}
        />
        <div className="flex items-center md:industry-bg-1">
          <Content {...industryContent1} index={0} />
        </div>
        <Image
          className="absolute hidden line-vector-3 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "1800px" }}
        />
        <div className="flex items-center content-bg-3">
          <Content {...industryContent2} index={1} />
        </div>
        <Image
          className="absolute hidden line-vector-4 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "2500px" }}
        />
        <div className="flex items-center content-bg-4">
          <Content {...industryContent3} index={2} />
        </div>
        <Image
          className="absolute hidden line-vector-5 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "3200px" }}
        />
        <div className="flex items-center content-bg-3">
          <Content {...industryContent4} index={3} />
        </div>

        <FooterContainer />
      </section>
    </TranslationsProvider>
  );
}
