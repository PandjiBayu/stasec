import Image from "next/image";
import { synergeticCard } from "@/data/home/cardContent";
import Content from "@/components/content/content";
import {
  partnerContent1,
  partnerContent2,
  partnerContent3,
} from "@/data/partner/partnerContent"
import "@/components/features/features.css";
import Testimonial from "@/components/testimonial/testimonial";
import TranslationsProvider from "@/components/TranslationsProvider";
import translate from "@/app/i18n";
import BannerPartner from "@/components/banner-homepage/banner-partner";
import SynergeticCard from "@/components/synergetic-card/synergetic-card";
import Footer from "@/components/footer/footer";

const page = ["partner", "component"];

export default async function Partner({ params: { locale } }) {
  const { t, resources } = await translate(locale, page);

  return (
    <TranslationsProvider page={page} locale={locale} resources={resources}>
      <section className="relative overflow-x-hidden text-white">
        <BannerPartner />
        <Image
          className="absolute hidden line-vector-1-1 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-2" id="partnercard-1">
          <Content {...partnerContent1} index={0} />
        </div>
        <Image
          className="absolute hidden line-vector-2-2 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-3" id="partnercard-2">
          <Content {...partnerContent2} index={1} />
        </div>
        <Image
          className="absolute hidden line-vector-3-3 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="flex items-center content-bg-4" id="partnercard-3">
          <Content {...partnerContent3} index={2} />
        </div>
        <Image
          className="absolute hidden line-vector-4-4 lg:block"
          src="/line-right.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <Image
          className="absolute hidden line-vector-5-5 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
        />
        <div className="my-8 sm:my-16">
          <div className="flex flex-col items-center px-16 mx-16">
            <div className="flex flex-col items-center w-full space-y-4 text-center">
              <div
                className="title-text"
                dangerouslySetInnerHTML={{ __html: t("synergetics.title") }}
              ></div>
            </div>

            <SynergeticCard synergeticCard={synergeticCard} />
          </div>
        </div>
        {/* TESTI */}
        <div className="flex flex-col items-center justify-center content-bg-8" id="testimonial">
          <Testimonial />
        </div>

        <Footer />
      </section>
    </TranslationsProvider>
  );
}
