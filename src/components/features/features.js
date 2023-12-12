"use client";
import React from "react";
import "./features.css";
import CyberSecurity from "../icons/cyber-security";
import CyberEye from "../icons/cyber-eye";
import Backup from "../icons/backup";
import SearchCode from "../icons/search-code";
import Bug from "../icons/bug";
import FileText from "../icons/file-text";
import Code from "../icons/code";
import Repeat from "../icons/repeat";
import Siren from "../icons/siren";
import ShieldCheck from "../icons/shield-check";
import BadgeCheck from "../icons/badge-check";
import BarChart from "../icons/bar-chart";
import Cards from "../cards/cards";
import RightDash from "../icons/right-dash";
import Microscope from "../icons/microscope";
import CheckCircle from "../icons/check-circle";
import InfinityIcon from "../icons/infinity";
import Database from "../icons/database";
import Sword from "../icons/sword";
import BookCheck from "../icons/book-check";
import BookText from "../icons/book-text";
import EnvironmentIcon from "../icons/environment";
import Customize from "../icons/customize";
import { useTranslation } from "react-i18next";

const iconMappings = {
  cyberSecurity: CyberSecurity,
  cyberEye: CyberEye,
  backup: Backup,
  searchCode: SearchCode,
  bug: Bug,
  fileText: FileText,
  code: Code,
  repeat: Repeat,
  siren: Siren,
  shieldCheck: ShieldCheck,
  badgeCheck: BadgeCheck,
  barChart: BarChart,
  microscope: Microscope,
  checkCircle: CheckCircle,
  infinity: InfinityIcon,
  database: Database,
  sword: Sword,
  bookCheck: BookCheck,
  bookText: BookText,
  environment: EnvironmentIcon,
  customize: Customize,
};

const Features = ({
  cardType,
  blueCondition,
  blueText,
  title,
  content,
  cards,
  withContent = true,
  translateKey = "features",
}) => {
  const { t } = useTranslation();

  return (
    <>
      {cardType == 1 ? (
        <section className="flex flex-col justify-center w-full py-12 space-y-12 reditems-center md:px-10 ">
          <div className="flex flex-col items-center space-y-4">
            {blueCondition && (
              <div className="text-[24px] text-center text-[#1A57FF]">
                {t(`${translateKey}.blueText`)}
              </div>
            )}
            <h2
              className="title-text"
              dangerouslySetInnerHTML={{ __html: t(`${translateKey}.title`) }}
            ></h2>
            <p className="text-[18px] text-center">
              {t(`${translateKey}.content`)}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center h-full gap-2 px-2 space-x-1 md:gap-6 md:space-x-8">
            {cards.map((card, index) => (
              <Cards
                index={index}
                key={index}
                card={card}
                cardIcon={card.cardIcon}
                cardType={cardType}
                withContent={withContent}
                translateKey={translateKey}
              />
            ))}
          </div>
        </section>
      ) : cardType == 2 ? (
        <div className="flex flex-col items-center py-12 md:py-0 ">
          <div className="flex flex-col items-center w-full space-y-4 text-center">
            <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
            <div
              className="title-text"
              dangerouslySetInnerHTML={{ __html: t(`${translateKey}.title`) }}
            ></div>
            <div
              className="text-[18px]"
              dangerouslySetInnerHTML={{ __html: t(`${translateKey}.content`) }}
            ></div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full gap-12 pt-[70px]">
            {cards.map((card, index) => {
              const CardIcon = iconMappings[card.cardIcon];
              return (
                <div key={index}>
                  <div className="card-container">
                    <div className="card flex flex-col px-[32px] py-[48px] space-y-[10px] ">
                      <div className="white-circle w-fit">
                        <CardIcon width={48} height={48} color={"#1A57FF"} />
                      </div>
                      <div className="text-[24px] font-semibold">
                        {t(`${translateKey}.cards.${index}.title`)}
                      </div>
                      <div className="text-[16px]">
                        {t(`${translateKey}.cards.${index}.content`)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : cardType == 3 ? (
        <section className="flex flex-col pb-12 px-4 md:px-[80px] space-y-12 w-full ">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[24px] text-[#1A57FF]">
              {t(`${translateKey}.blueText`)}
            </div>
            <div className="title-text">{t(`${translateKey}.title`)}</div>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-2 space-x-1 space-y-8 md:space-y-0 md:flex-row md:gap-6 md:space-x-8">
            {cards.map((card, index) => {
              console.log(index);
              return (
                <div className="flex items-center" key={index}>
                  <Cards
                    index={index}
                    key={index}
                    card={card}
                    cardIcon={card.cardIcon}
                    cardType={cardType}
                    translateKey={translateKey}
                  />
                  {index + 1 != cards.length && (
                    <div className="pl-[24px] lg:block hidden">
                      <RightDash width={48} height={48} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Features;
