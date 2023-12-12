"use client";
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
import { useState } from "react";
import BadgeCheck from "../icons/badge-check";
import BarChart from "../icons/bar-chart";
import Microscope from "../icons/microscope";
import CheckCircle from "../icons/check-circle";
import InfinityIcon from "../icons/infinity";
import Database from "../icons/database";
import Sword from "../icons/sword";
import BookCheck from "../icons/book-check";
import BookText from "../icons/book-text";
import Environment from "../icons/environment";
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
  environment: Environment,
};

const Cards = ({
  card,
  cardIcon,
  cardType,
  index,
  withContent,
  translateKey,
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const CardIcon = iconMappings[cardIcon];

  return (
    <>
      {cardType == 1 ? (
        <div
          className="flex flex-col items-center card-container sm:w-auto w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="circle">
            {CardIcon && (
              <CardIcon
                width={48}
                height={48}
                color={isHovered ? "white" : "#3C94FF"}
              />
            )}
          </div>
          <div className="card flex flex-col items-center w-full sm:w-[382px] min-h-[248px] h-auto sm:h-[248px] pt-[64px] pb-[32px] px-[56px] justify-center">
            <div className="text-[24px] font-semibold text-center">
              {t(`${translateKey}.cards.${index}.title`)}
            </div>
            {withContent && (
              <div className="text-[16px] text-center">
                {t(`${translateKey}.cards.${index}.content`)}
              </div>
            )}
          </div>
        </div>
      ) : cardType == 3 ? (
        <div
          className="flex flex-col items-center card-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="circle">
            {CardIcon && (
              <CardIcon
                width={48}
                height={48}
                color={isHovered ? "white" : "#3C94FF"}
              />
            )}
          </div>
          <div
            className="card flex flex-col items-center w-[240px] h-[320px]"
            style={{ padding: "56px 32px 16px 32px" }}
          >
            <div className="text-[24px] font-semibold text-center">
              {t(`${translateKey}.cards.${index}.title`)}
            </div>
            <div className="text-[16px] text-center">
              {t(`${translateKey}.cards.${index}.content`)}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cards;
