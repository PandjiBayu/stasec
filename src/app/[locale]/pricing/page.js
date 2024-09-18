import {
  pricingCard,
} from "@/data/pricing/pricingContent";
import Content from "@/components/content/content";
import BannerPricing from "@/components/banner-homepage/banner-pricing";
import FooterContainer from "@/components/footer/footer-container";
import Image from "next/image";
import translate from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Testimonial from "@/components/testimonial/testimonial";


const page = ["pricing", "component"];

export default async function Pricing({ params: { locale } }) {
  const { t, resources } = await translate(locale, page);

  return (
    <TranslationsProvider page={page} locale={locale} resources={resources}>
      <section className="relative overflow-x-hidden">
        <BannerPricing pricingCard={pricingCard}/>
        <Image
          className="absolute hidden line-vector-6 lg:block"
          src="/line-left.svg"
          width={480}
          height={480}
          alt="head-vector"
          style={{ top: "1800px" }}
        />
        {/* TESTI */}
        <div className="flex flex-col items-center justify-center content-bg-8" id="testimonial">
          <Testimonial />
        </div>

        <FooterContainer />
      </section>
    </TranslationsProvider>
  );
}
