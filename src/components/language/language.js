"use client";

import { useTranslation } from "react-i18next";
import ArrowDown from "../icons/arrow-down";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import i18nConfig from "@/i18nConfig";

const Language = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsActiveDropdown(!isActiveDropdown);
  };

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div
      className={`relative inline-block mt-4 md:mt-0`}
      onClick={toggleDropdown}
    >
      <div className="flex items-center space-x-1 cursor-pointer px-5 py-2.5">
        <div>{currentLocale === "en" ? "EN" : "ID"}</div>
        <ArrowDown />
      </div>

      {isActiveDropdown && (
        <div className="md:absolute mt-2 bg-[#262626] border border-gray-800 rounded-md shadow-lg flex flex-col">
          <span
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleChange("en")}
          >
            EN
          </span>
          <span
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleChange("id")}
          >
            ID
          </span>
        </div>
      )}
    </div>
  );
};

export default Language;
