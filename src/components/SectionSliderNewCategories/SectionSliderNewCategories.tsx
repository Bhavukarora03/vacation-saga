import React, { FC, useEffect } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { TaxonomyType } from "data/types";
import ncNanoId from "utils/ncNanoId";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import NextPrev from "shared/NextPrev/NextPrev";
import CardCategory5 from "components/CardCategory5/CardCategory5";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 4 | 5;
  sliderStyle?: "style1" | "style2";
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-types?name=holiday-homes",
    name: "Holiday Homes",
    taxonomy: "category",
    count: 17288,
    thumbnail:
      "https://www.vacationsaga.com/img/index_img/Holiday_Homes.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-types?name=bed-and-breakfast",
    name: "Bed and breakfast",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "https://www.vacationsaga.com/img/index_img/B_&_B.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-types?name=apartments",
    name: "Apartments",
    taxonomy: "category",
    count: 36612,
    thumbnail:
      "https://www.vacationsaga.com/img/index_img/Appart..jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-types?name=Villa",
    name: "Villa",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://www.vacationsaga.com/img/index_img/Villa.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-types?name=guest-house",
    name: "Guest house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://www.vacationsaga.com/img/index_img/Guest_House.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  
];

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Heading of sections hjhhj",
  subHeading = "Descriptions for sections",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
}) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId();

  useEffect(() => {
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      new Glide(`.${UNIQUE_CLASS}`, {
        perView: itemPerRow,
        gap: 32,
        bound: true,
        breakpoints: {
          1280: {
            perView: itemPerRow - 1,
          },
          1024: {
            gap: 20,
            perView: itemPerRow - 1,
          },
          768: {
            gap: 20,
            perView: itemPerRow - 2,
          },
          640: {
            gap: 20,
            perView: itemPerRow - 3,
          },
          500: {
            gap: 20,
            perView: 1.3,
          },
        },
      }).mount();
    }
  }, []);

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory3 taxonomy={item} />;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc={subHeading}
          hasNextPrev={sliderStyle === "style1"}
          isCenter={sliderStyle === "style2"}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>

        {sliderStyle === "style2" && (
          <NextPrev className="justify-center mt-16" />
        )}
      </div>
    </div>
  );
};

export default SectionSliderNewCategories;
