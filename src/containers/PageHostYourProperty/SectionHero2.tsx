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
  let style={
    'margin-top': '-293px',
  }
  return (
   
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
       
        <div className="flex-grow">
          <img className="w-full" src={leftimg} alt="" />
        </div>
        <div className="max-w-full xl:max-w-lg space-y-5 lg:space-y-7" style={style}>
         
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
          We provide short term holiday rentals with easy ways of bookings. By providing luxurious holiday homes with basic touches like balcony, refrigerator, parking, air conditioner and many more facilities, we continue to offer the best to our customers. 
          </span>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
          We also give travellers an option, whether they want an entire apartment for rent or a private room. We have listings which include Holiday cottages, Holiday apartments, Country cottages, Holiday homes and Villas in Europe, Asia and United States.
          </span>
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
