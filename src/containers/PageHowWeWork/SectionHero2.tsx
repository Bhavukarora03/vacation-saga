import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionHero2Props {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero2: FC<SectionHero2Props> = ({
  className = "",
  leftimg,
  heading,
  subHeading,
  btnText,
}) => {
  
  return (
   
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
       
        <div className="flex-grow">
          <img className="w-full" src={leftimg} alt="" />
        </div>
        <div className="w-full xl:max-w-lg space-y-5 lg:space-y-7" >
         
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
          Get Expert Tips on<br/>
Listing a<br/>
Professional advert. 
          </h2>
         
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
