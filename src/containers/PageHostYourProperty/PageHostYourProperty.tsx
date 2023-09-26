import rightImg from "images/List_your_properties_1.png";
import leftimg from "images/About_us_midle.png";
import leftimg2 from "images/About_us_bottom.png";
import leftimg3 from "images/Map_View.gif"
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionStatisticplan from "./SectionStatisticplan";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionHero2 from "./SectionHero2";
import SectionHeroWhoWeAre from "./SectionHeroWhoWeAre";
import SectionHeroGlobalPresence from "./SectionHeroGlobalPresence";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";

export interface PageHostYourPropertyProps {
  className?: string;
}

const PageHostYourProperty: FC<PageHostYourPropertyProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>Host Your Property || Vacationsaga Rental</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="Want to list with Us?
          Drop your details here and we will contact you!"
          btnText=""
          subHeading=""
        />

        <SectionFounder />
        
        <SectionStatistic />
       <SectionStatisticplan/>

       
      </div>
    </div>
  );
};

export default PageHostYourProperty;
