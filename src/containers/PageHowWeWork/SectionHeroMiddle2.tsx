import React, { FC, ReactNode } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface SectionHeroMiddle2Props {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHeroMiddle2: FC<SectionHeroMiddle2Props> = ({
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
       
        <img className="w-full" src={leftimg} alt="" />
        <br/><br/>
        <span>We answer in real time to the questions that are posted by the viewers. We encourage our ultimate consumers to review holiday experiences on our facebook page and Google business profile so that everyone can see how well we have served our clients in the past.
We share our posts on the wall of the clients home page which we are advertising so that clients are able to see the type of marketing we are initiating. Your advert will be online and ready to receive bookings in minutes. We advertise property with fresh information and update them frequently. Our adverts consist of large images, videos, Google map and website link and all social media links.

We make sure to increase reachability and popularity of your excellent structure in between travelers who are using Social Media Platform promptly to search for the properties regarding their vacation. We interact on Social platforms like Facebook, Instagram, Pinterest and Youtube. We also share Client Testimonials on our blogs. We publish videos based on your holiday lettings which are viewed extensively. Since you tube ranks very high on Google Searches, we upload videos on YouTube and promote it. We communicate our ability to provide expected home lettings through our social media accounts and build relationships with our past, present and future potential travelers.
We employ only the best marketing strategies designed to sky rocket lead generation for your rentals. These bullet proof methods are guaranteed to get your vacation rental more bookings at an accelerated rate.</span>
<br/><br/>
<h2 className="text-3xl md:text-4xl font-semibold">Know Us Better!</h2>
<br/><br/>
<iframe src="https://www.youtube.com/embed/3ddNUYWSExQ" frameborder="0" width='100%' height='400' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid794441"></iframe>
        </div>
      </div>
    </div>
  );
};

export default SectionHeroMiddle2;
