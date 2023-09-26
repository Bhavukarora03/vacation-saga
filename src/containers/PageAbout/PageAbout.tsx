import rightImg from "images/vs-about-us.png";
import leftimg from "images/About_us_midle.png";
import leftimg2 from "images/About_us_bottom.png";
import leftimg3 from "images/Map_View.gif"
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionHero2 from "./SectionHero2";
import SectionHeroWhoWeAre from "./SectionHeroWhoWeAre";
import SectionHeroGlobalPresence from "./SectionHeroGlobalPresence";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || Vacationsaga</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="About Us."
          btnText=""
          subHeading="Vacation Saga is a prime vacation holiday rental brand, welcoming guests by providing them suitable holiday lettings. We help our travellers to find ideal holiday homes and allow you to search holiday lettings easily by filtering the price range, date, amenities, according to your needs. Stays are extremely affordable in holiday apartments and country cottages.

From a couch in a holiday apartment to an entire villa in Europe, Asia and United States, you’ll find everything with us. We provide short term holiday rentals with easy ways of bookings. By providing luxurious holiday homes with basic touches like balcony, refrigerator, parking, air conditioner and many more facilities, we continue to offer the best to our customers.

"
        />

        <SectionFounder />
        <SectionHero2
          leftimg={leftimg}
          heading=""
          btnText=""
          subHeading="  "      />
          
          <SectionHeroWhoWeAre
          rightImg={leftimg2}
          heading="Who are we?"
          btnText=""
          subHeading="We started our career in Tourism Industry long back and after some deliberation, we introduced Vacation Saga!

          Our Company Name is Zairo International Private Limited and it has just two goals through Vacation Saga:
          
          - To provide suitable accommodations to the travellers
          
          - To provide more bookings to property owners.
          
          We are a team of devoted young professionals in love with customer satisfaction and making vacations memorable, so join us and help us in taking vacation rental business to new heights together!
         "      />
         <SectionHeroGlobalPresence
           leftimg={leftimg3}
           heading="Our Presence Globally"
           btnText=""
           subHeading="  " 
         />
       
       
        
       

       
      </div>
    </div>
  );
};

export default PageAbout;
