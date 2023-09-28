import React, { FC } from "react";
import GallerySlider from "components/GallerySlider/GallerySlider";
//import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "shared/Badge/Badge";
import BtnEditIcon from "components/BtnEditIcon/editButton";
import { on } from "events";

export interface StayCardForOwerPropertyProps {
  className?: string;
  ratioClass?: string;
  data?: StayDataType;
  size?: "default" | "small";
  onEditNavigate?: () => void;
}

const handleCardClick = () => {

  if (onEditNavigate) {
    onEditNavigate();
  } else {
    window.location.href = data.href; 
  }
};

const StayCardForOwerProperty: FC<StayCardForOwerPropertyProps> = ({
  size = "default",
  className = "",
  data = "",
  onEditNavigate,
  ratioClass,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    bedrooms,
    href,
    like,
    edit,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
    pdid,
    pid,
    bathrooms,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`stay-v-${id}`}
          ratioClass={ratioClass}
          galleryImgs={galleryImgs}
        />

        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
        <BtnEditIcon
          onClick={onEditNavigate}
          className="absolute right-14 top-3 z-[1]"
        />

        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"}>
        <div className="space-y-2">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            <span>
              <i class="las la-bed text-lg"></i> {bedrooms}
            </span>{" "}
            <i class="las la-bath text-lg"></i> {bathrooms}
          </span>
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-lg" : "text-base"
              }`}
            >
              <span className="line-clamp-1">VS{pdid} </span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            {size === "default" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <span className="">{address} </span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            {price}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /night
              </span>
            )}
          </span>
          <Link to={"PropertyPortions/" + pid}>View Portions</Link>
          {!!reviewStart && <StartRating reviewCount={reviewCount} />}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="StayCard"
      onClick={handleCardClick} // Handle click on the entire card
    >
      {renderSliderGallery()}
      {renderContent()}
    </div>
  );
};

export default StayCardForOwerProperty;
