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
};

const Cards = ({ card, cardIcon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const CardIcon = iconMappings[cardIcon];

  return (
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
      <div className="card flex flex-col items-center w-[382px] h-[248px] pt-[64px] pb-[32px] px-[56px]">
        <div className="text-[24px] font-semibold text-center">
          {card.cardTitle}
        </div>
        <div className="text-[16px] text-center">{card.cardContent}</div>
      </div>
    </div>
  );
};

export default Cards;
