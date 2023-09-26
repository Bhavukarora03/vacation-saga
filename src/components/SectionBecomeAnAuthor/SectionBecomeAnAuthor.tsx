import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Logo from "shared/Logo/Logo";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Why did you choose us?
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
        Vacation Saga is a prime vacation holiday rental brand, welcoming guests by providing them suitable holiday lettings. We help our travellers to find ideal holiday homes and allow you to search holiday lettings easily by filtering the price range, date, amenities, according to your needs. Stays are extremely affordable in holiday apartments and country cottages.
        </span>
        <a href='/about' className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
          Read More
        </a>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
