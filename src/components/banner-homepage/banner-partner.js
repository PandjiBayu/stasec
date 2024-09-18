"use client";

import Link from "next/link";

const { default: Header } = require("../header/header");
const { default: HeadVector } = require("../icons/head-vector");

import { useTranslation } from "react-i18next";

const BannerPartner = () => {
  const { t } = useTranslation();

  return (
    <div class="head-vector partner-image bg-cover h-screen relative">
      <div
        className="top-0 left-0 hidden xl:block lg:absolute"
        style={{ zIndex: 0 }}
      >
      </div>
      <Header />
      <div className="w-full px-0 md:px-[118px] flex flex-col md:flex-row pt-[80px]">
        <div
          className="flex flex-col space-y-[40px] md:py-[80px] w-full items-center md:items-start"
          style={{ zIndex: 1 }}
        >
          <div className="text-center md:text-left header-title max-w-[870px]">
            {t("banner.title")}
          </div>
          <h2 className="text-center md:w-full md:text-left font-[16px] md:font-[18px] max-w-[620px]">
            {t("banner.content")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerPartner;
