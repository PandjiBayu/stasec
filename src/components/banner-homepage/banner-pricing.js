"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const { default: Header } = require("../header/header");


const BannerPricing = ({ pricingCard }) => {
  const { t } = useTranslation();

  return (
    <div class="head-vector pricing-image bg-cover h-auto">
      <Header />
      <div className="flex flex-col items-center p-6 md:p-20 sm:p-10">
          <div className="text-3xl md:text-[48px] text-center font-bold leading-normal">
            {t("banner.title")}
          </div>
          <p className="pt-4 text-base text-center md:text-lg">
            {t("banner.content")}
          </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
        <div className="flex flex-wrap space-x-4 justify-center">
            {pricingCard.cards.map((card, index) => (
              <div
                key={index}
                className={`card-pricing bg-[#1A1620] text-white p-6 rounded-lg shadow-lg w-[378px] ${
                  index === 1 
                    ? 'h-[626px] border-2' 
                    : 'h-[565px] border-2 lg:mt-[61px] ' + (index === 0 ? 'card-hover1' : 'card-hover2')
                } border-[#13317d75] hover:scale-105 transform transition-all duration-300`}
                >
                {index === 1 && (
                <div className="absolute top-[-20px] right-[-20px]">
                  <Image 
                    src="/best-value.png" 
                    alt="Best Value" 
                    width={200} // Adjust width as needed
                    height={10} // Adjust height as needed
                    className="p-1"
                  />
                </div>
              )}

                <h2 className="text-[44px] font-semibold">
                  {t(`pricing.cards.${index}.cardTitle`)} 
                </h2>
                <p className="mb-10 text-[15px]">
                  {t(`pricing.cards.${index}.cardSubTitle`)} 
                </p>

                <p className="text-sm">Start From</p>
                <p className="text-[44px] font-bold">
                  {t(`pricing.cards.${index}.cardPricing`)}
                </p>
                <p className="text-sm mb-4">Per Month</p>

                <button className="bg-[#5300BD] hover:bg-purple-900 text-white text-[24.54px] py-2 px-4 rounded-2xl mb-4 w-[325px]">
                  {t("pricing.inquireNow")}
                </button>

                <ul className="list-none pl-6">
                  {t(`pricing.cards.${index}.cardListContent`, { returnObjects: true }).map((item, idx) => (
                    <li
                      key={idx}
                      className="relative mb-2 before:absolute before:left-[-20px] before:top-1/2 before:w-4 before:h-4 before:bg-[url('/star-list.png')] before:bg-contain before:bg-no-repeat before:-translate-y-1/2"
                    >
                      {item.listContent}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BannerPricing;
