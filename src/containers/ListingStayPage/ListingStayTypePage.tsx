import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionHeroArchivePageType from "components/SectionHeroArchivePage/SectionHeroArchivePageType";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import React, { FC } from "react";
import SectionGridFilterCardType from "./SectionGridFilterCardType";
import { Helmet } from "react-helmet";

export interface ListingStayPageProps {
  className?: string;
  href?: string;
}

const ListingStayTypePage: FC<ListingStayPageProps> = ({ className = "", href = '' }) => {
	console.log('this is the href test', href)
  return (
    <div
      className={`nc-ListingStayPage relative overflow-hidden ${className}`}
      data-nc-id="ListingStayPage"
    >
      <Helmet>
        <title>Home || Vacationsaga</title>
      </Helmet>
      <BgGlassmorphism />

      <div className="container relative overflow-hidden">
        {/* SECTION HERO */}
        <SectionHeroArchivePageType
          currentPage="Stays"
          currentTab="Stays"
          className="pt-10 pb-24 lg:pb-32 lg:pt-16 "
        />

        {/* SECTION */}
        <SectionGridFilterCardType className="pb-24 lg:pb-32" />

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>

       

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-32">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default ListingStayTypePage;
