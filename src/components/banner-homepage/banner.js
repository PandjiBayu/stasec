"use client";

import Link from "next/link";

const { default: Header } = require("../header/header");
const { default: HeadVector } = require("../icons/head-vector");

import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div class="head-vector background-image bg-cover h-screen relative">
      <div
        className="top-0 left-0 hidden xl:block lg:absolute"
        style={{ zIndex: 0 }}
      >
        <HeadVector />
      </div>
      <Header />
      <div className="w-full px-0 md:px-[118px] flex flex-col md:flex-row pt-[80px]">
        <div
          className="flex flex-col space-y-[40px] md:py-[80px] w-full items-center md:items-start"
          style={{ zIndex: 1 }}
        >
          <div className="text-center md:text-left header-title max-w-[670px]">
            {t("banner.title")}
          </div>
          <h2 className="text-center md:w-full md:text-left font-[16px] md:font-[18px] max-w-[620px]">
            {t("banner.content")}
          </h2>
          <Link href={"/contact"} className="get-started">
            <div className="get-started-font">{t("banner.button")}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
