import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg,
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
        <div className="max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
          Create a
Professional
Listing for Your
Rental Space
          </h2>
         
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">Connecting with the travellers</h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">These days online bookings are usual as the travelers finds it much easier to book apartments/rooms of their choice according to their convenience and budget. There are two basic ways in which one can make an online reservation, either by booking direct with hotels or by booking through Online Travel Agencies (OTAs). Vacation Saga is a platform through which travelers are connected to the properties of their choice as we provide apartment/room pictures, besides other details like best offers, prices, climate detection, nearby destinations, . So all these details make it a lot easier for our travelers to select the best space according their needs.</span>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
