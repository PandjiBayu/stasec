"use client";

import Link from "next/link";
import Header from "../header/header";
import { useTranslation } from "react-i18next";

const BannerService2 = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-cover head-vector service2-image ">
      <Header />
      <div className="w-full px-2 md:px-6 lg:px-[118px] flex sm:pt-[80px]">
        <div className="flex flex-col space-y-[30px] py-[80px] items-center justify-center w-full">
          <h2 className="text-center header-title">{t("banner.title")}</h2>
          <h4 className="font-[16px] text-center">{t("banner.content")}</h4>
          <Link href={"/contact"} className="get-started">
            <div className="get-started-font">{t("banner.button")}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerService2;
