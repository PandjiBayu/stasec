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

const iconMappings = {
  cyberSecurity: CyberSecurity,
  cyberEye: CyberEye,
  backup: Backup,
  searchCode: SearchCode,
  bug: Bug,
  fileText: FileText,
  code: Code,
  repeat: Repeat,
  siren: Siren
};

const Features = ({ blueCondition, blueText, title, content, cards }) => {
  return (
    <section className="flex flex-col pb-12 px-[118px] space-y-12">
      <div className="flex flex-col items-center space-y-4">
        {blueCondition && (
          <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
        )}
        <div className="title-text">{title}</div>
        <div className="text-[18px]">{content}</div>
      </div>
      <div className="w-full flex flex-wrap gap-12 justify-center">
        {cards.map((card, index) => (
          <div key={index}>
            {index == 0 ? (
              <>
                <div className="flex flex-col items-center">
                  <div className="blue-circle">
                    {iconMappings[card.cardIcon] &&
                      React.createElement(iconMappings[card.cardIcon], {
                        width: 48,
                        height: 48,
                        color: "white",
                      })}
                  </div>
                  <div className="card-start flex flex-col items-center ">
                    <div className="text-[24px] font-semibold text-center">
                      {card.cardTitle}
                    </div>
                    <div className="text-[16px] text-center">
                      {card.cardContent}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <div className="normal-circle">
                    {iconMappings[card.cardIcon] &&
                      React.createElement(iconMappings[card.cardIcon], {
                        width: 48,
                        height: 48,
                        color: "#3C94FF",
                      })}
                  </div>
                  <div className="card flex flex-col items-center ">
                    <div className="text-[24px] font-semibold text-center">
                      {card.cardTitle}
                    </div>
                    <div className="text-[16px] text-center">
                      {card.cardContent}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
