import iconMappings from "../icons/iconMappings";

const GoalsCard = ({goalsCard}) => {

    return(
        <div className="grid sm:grid-cols-2 items-center gap-6 sm:space-y-8 space-y-0 md:space-y-0 md:gap-4 lg:gap-10 justify-center xl:grid-cols-3 w-full pt-[70px] ">
        {goalsCard.cards.map((card, index) => {
          const CardIcon = iconMappings[card.cardIcon];
          return (
              <div className="card-container sm:h-[320px] " key={index}>
                <div className="card flex flex-col px-[32px] py-[48px] space-y-[10px] min-h-full">
                  <div className="white-circle w-fit">
                    <CardIcon width={48} height={48} color={"#1A57FF"} />
                  </div>
                  <div className="text-[24px] font-semibold">
                    {card.cardTitle}
                  </div>
                  <div className="text-[16px]">{card.cardContent}</div>
                </div>
              </div>
          );
        })}
      </div>
    )
}

export default GoalsCard