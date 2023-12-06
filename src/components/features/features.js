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
  barChart: BarChart
};

const Features = ({
  cardType,
  blueCondition,
  blueText,
  title,
  content,
  cards,
}) => {
  return (
    <>
      {cardType == 1 ? (
        <section className="flex flex-col pb-12 px-[118px] space-y-12">
          <div className="flex flex-col items-center space-y-4">
            {blueCondition && (
              <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
            )}
            <div className="title-text">{title}</div>
            <div className="text-[18px]">{content}</div>
          </div>
          <div className="w-full flex flex-wrap gap-12 justify-center">
            {cards.map((card, index) => {
              const CardIcon = iconMappings[card.cardIcon];
              const [isHovered, setIsHovered] = useState(false);
              return (
                <div key={index}>
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
                      <div className="text-[16px] text-center">
                        {card.cardContent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : cardType == 2 ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-4 w-[800px] text-center">
            <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
            <div className="title-text">{title}</div>
            <div className="text-[18px]">{content}</div>
          </div>
          <div className="flex w-full gap-12 pt-[70px]">
            {cards.map((card, index) => {
              const CardIcon = iconMappings[card.cardIcon];
              return (
                <div key={index}>
                  <div className="card-container">
                    <div className="card flex flex-col px-[56px] py-[64px] space-y-[10px]">
                      <div className="white-circle w-fit">
                        <CardIcon width={48} height={48} color={"#1A57FF"} />
                      </div>
                      <div className="text-[24px] font-semibold">
                        {card.cardTitle}
                      </div>
                      <div className="text-[16px]">{card.cardContent}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="card-container">
              <div className="card flex flex-col px-[56px] py-[64px] space-y-[10px]">
                <div className="white-circle w-fit">
                  <ShieldCheck width={40} height={40} color={"#1A57FF"} />
                </div>
                <div className="text-[24px] font-semibold">
                  Comprehensive Security
                </div>
                <div className="text-[16px]">
                  We give a holistic approach to cybersecurity, covering
                  everything from network security to data protection and
                  beyond.
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card flex flex-col px-[56px] py-[64px] space-y-[10px]">
                <div className="white-circle w-fit">
                  <ShieldCheck width={40} height={40} color={"#1A57FF"} />
                </div>
                <div className="text-[24px] font-semibold">
                  Comprehensive Security
                </div>
                <div className="text-[16px]">
                  We give a holistic approach to cybersecurity, covering
                  everything from network security to data protection and
                  beyond.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Features;
