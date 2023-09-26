import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionHeroGlobalPresenceProps {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHeroGlobalPresence: FC<SectionHeroGlobalPresenceProps> = ({
  className = "",
  leftimg,
  heading,
  subHeading,
  btnText,
}) => {
  let style={
    'margin-top': '-293px',
  }
  return (
   
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
       
        
        <div className="max-w-full ">
        <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          
        <img className="w-full" src={leftimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroGlobalPresence;
