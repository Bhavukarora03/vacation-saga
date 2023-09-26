import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionHeroMiddle1Props {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHeroMiddle1: FC<SectionHeroMiddle1Props> = ({
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
        Say goodbye to double bookings forever with fully automated live updates on the website.

          </h2>
          
       <span>Our dynamic calendar keeps you and your customers updated about availability always. Once a holiday maker makes a booking request, we then accept the booking or decline it depending upon your wish. After that, there is a simple process when a reservation request comes to your way through our website, simply press the "Accept Reservation" button and the guest will communicate you through our website. We give direct communication in between our registered travelers and registered property Owner's. Hence, they will contact you directly through your E- mail address provided by you. Our travelers will pay the complete amount of the reservation directly to you. The pricing of the property for the bookings will be decided by the Property Owner itself on our platform.</span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeroMiddle1;
