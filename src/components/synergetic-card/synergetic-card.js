"use client";
import { useTranslation } from "react-i18next";

const SynergeticCard = ({ synergeticCard }) => {
  const { t } = useTranslation();

  return (
    <div className="sm:grid-cols-2 items-center gap-6 sm:space-y-8 space-y-0 md:space-y-0 md:gap-4 lg:gap-10 justify-center xl:grid-cols-3 w-full">
      {/* {synergeticCard.cards.map((card, index) => {
        return (
          <div className="card-container sm:h-[320px] " key={index}>
            <div className="card flex flex-col px-[32px] py-[48px] space-y-[10px] min-h-full">
              <div className="text-[24px] font-semibold">
                {t(`goals.cards.${index}.title`)}
              </div>
              <div className="text-[16px]">
                {t(`goals.cards.${index}.content`)}
              </div>
            </div>
          </div>
        );
      })} */}

      {synergeticCard.cards.map((card, index) => {
        return (
          <div className="card-container" key={index}>
            <div className="card flex flex-col p-[32px] my-8 space-y-[10px]">
                <div className="flex flex-row md:flex-row md:justify-between items-start md:items-center" key={index}>
                  <h3 className="text-xl font-semibold mb-4 md:mb-0 md:w-1/3">{t(`synergetics.cards.${index}.title`)}</h3>
                  <p className="md:w-2/3">{t(`synergetics.cards.${index}.content`)}</p>
                </div>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default SynergeticCard;
