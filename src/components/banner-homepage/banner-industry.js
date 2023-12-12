"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const { default: Header } = require("../header/header");
const { default: HeadVector } = require("../icons/head-vector");

const BannerIndustry = () => {
  const { t } = useTranslation();

  return (
    <div class="head-vector industry-image bg-cover h-screen ">
      <Header />
      <div className="w-full px-4 sm:px-20 md:px-[118px] flex pt-[80px]">
        <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
          <div className="header-title">{t("banner.title")}</div>
          <h2 className="font-[16px] text-center">{t("banner.content")}</h2>
          <Link href={"/contact"} className="get-started">
            <div className="get-started-font">{t("banner.button")}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerIndustry;
