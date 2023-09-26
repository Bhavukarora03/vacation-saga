import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React, { FC, ReactNode, useEffect, useState } from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { Helmet } from "react-helmet";
import rightImgPng from "images/our-features-2.png";
const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-search?location=Italy",
    name: "Italy",
    taxonomy: "category",
    count: 541,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/36661985236.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-search?location=united-states",
    name: "United State",
    taxonomy: "category",
    count: 8288,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/3195784616779674.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-search?location=united-kingdom",
    name: "United Kingdom",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/7803403505971175.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-search?location=greece",
    name: "Greece",
    taxonomy: "category",
    count: 112,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/3569877521293061.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-search?location=romania",
    name: "Romania",
    taxonomy: "category",
    count: 323,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/6047445510751203.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-search?location=croatia",
    name: "Croatia (Hrvatska)",
    taxonomy: "category",
    count: 2223,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/5179822421536861.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "11",
    href: "/listing-stay-search?location=portugal",
    name: "Portugal",
    taxonomy: "category",
    count: 1775,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/1903475887410518.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay-search?location=slovenia",
    name: "Slovenia",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://admin.vacationsaga.com/public/images/td/8904237449849723.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-types?name=Hotels",
    name: "Hotels",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay-types?name=Aparthotel",
    name: "Aparthotel",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-types?name=House",
    name: "House",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-types?name=Farm-Stays",
    name: "Farm Stays",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  
  {
    id: "5",
    href: "/listing-stay-types?name=Studio",
    name: "Studio",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-types?name=Summer-House",
    name: "Summer House",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-stay-types?name=Home-Stays",
    name: "Home Stays",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  const [dummyData, setDummyData] = useState([0])
useEffect(() => {
  getData()
}, [])
const getData = () => {
  let url = 'https://admin.vacationsaga.com/api/top_ten_authors';
  let res = fetch(url).then(data => data.json()).then(data => {
    setDummyData(data)
  }).catch(e => { console.log(e) })
}
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Home || Vacationsaga Rentals </title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-20 pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories heading='Top Destination' categories={DEMO_CATS} />

        {/* SECTION2 */}
       
        <SectionOurFeatures type="type2" rightImg={rightImgPng} />
        {/* SECTION */}
       {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>*/}

        {/* SECTION */}
       {/*<SectionHowItWork />*/}

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={5}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that VS recommends for you"
            sliderStyle="style2"
          />
        </div>

        {/* SECTION */}
       { /*<SectionSubscribe2 />*/}

        {/* SECTION */}
     {  /* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox authors={dummyData}/>
        </div>*/}

        {/* SECTION */}
        <SectionGridCategoryBox />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 8 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        />

        {/* SECTION */}
        {/*<SectionVideos />*/}

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
