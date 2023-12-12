"use client";

import Image from "next/image";
import "./content.css";
import { useTranslation } from "react-i18next";

const ContentRight = ({ imgPos, image, title, content, index }) => {
  let imgPath = "";
  if (image === "handshake") {
    imgPath = "/handshake.png";
  } else if (image === "achievement") {
    imgPath = "/achievement.png";
  } else if (image === "search") {
    imgPath = "/search.png";
  } else if (image === "laptop") {
    imgPath = "/laptop.png";
  } else if (image === "finance") {
    imgPath = "/finance.png";
  } else if (image === "car") {
    imgPath = "/car.png";
  } else if (image === "scales") {
    imgPath = "/scales.png";
  } else if (image === "health-care") {
    imgPath = "/health-care.png";
  }

  const { t } = useTranslation();

  return (
    <section className=" flex flex-col md:flex-row items-start md:items-center justify-center w-full px-2 md:px-[80px] py-[48px] space-x-1 md:space-x-24">
      <div
        className={`image-wrapper ${
          imgPos === "right" ? "order-0 md:order-1" : ""
        } w-full flex justify-center items-center`}
      >
        <Image
          className="w-full md:w-[600px]"
          src={imgPath}
          width={400}
          height={600}
          alt={image}
        />
      </div>

      <div className="flex flex-col items-center max-w-lg space-y-12 md:items-start">
        <h3 className="content-title ">{t(`contents.${index}.title`)}</h3>
        <p className="text-[18px] text-center md:text-start ">
          {t(`contents.${index}.content`)}
        </p>
      </div>
    </section>
  );
};

export default ContentRight;
