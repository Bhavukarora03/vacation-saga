import rightImg from "images/about-hero-right.png";
import middleimg from "images/c.png";
import middleimg1 from "images/a.png";
import middleimg2 from "images/how_we_work_banner.jpg";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionHeroMiddle from "./SectionHeroMiddle";
import SectionHeroMiddle1 from "./SectionHeroMiddle1";
import SectionHero2 from "./SectionHero2";
import SectionHeroMiddle2 from "./SectionHeroMiddle2";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";

export interface PageAboutProps {
  className?: string;
}

const PageHowWeWork: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>How We Work || Vacationsaga</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 How We Work."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />
         
         <SectionHeroMiddle
         leftimg={middleimg}
         heading=""
         btnText=""
         />
         <div className="relative py-16">
         <BackgroundSection />
          <SectionHeroMiddle1
         leftimg={middleimg}
         heading=""
         btnText=""
         />
         </div>
        <SectionFounder />
        <SectionHero2
        leftimg={middleimg1}
        heading=""
        btnText=""
        subHeading="  "
        />
        
        <SectionHeroMiddle2
        leftimg={middleimg2}
        heading=""
        btnText=""
        subHeading="  "
        />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        
      </div>
    </div>
  );
};

export default PageHowWeWork;
