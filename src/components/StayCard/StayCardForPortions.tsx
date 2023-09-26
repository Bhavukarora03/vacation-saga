import React, { FC } from "react";
import GallerySlider from "components/GallerySlider/GallerySlider";
//import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "shared/Badge/Badge";

export interface StayCardProps {
  className?: string;
  ratioClass?: string;
  data?: StayDataType;
  size?: "default" | "small";
}

//const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCardForPortions: FC<StayCardProps> = ({
  size = "default",
  className = "",
  data = "",
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
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
    maxGuests,
    bathrooms,
    area,
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
        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-4 space-y-4" : "p-3 space-y-2"}>
        <div className="space-y-2">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {listingCategory.name} · {bedrooms} beds
          </span>
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-lg" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{title} </span>
            </h2>
          </div>
          <div className="inline-grid grid-cols-4 gap-2">
         <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-user text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {maxGuests}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-bed text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {bedrooms}
          </span>
        </div>

        {/* ---- */}
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-bath text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {bathrooms}
          </span>
        </div>

        {/* ---- */}
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-expand-arrows-alt text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {area} sq
          </span>
        </div>
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
          {!!reviewStart && (
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="StayCard"
    >
      <a href={href} target="_blank">
        {renderSliderGallery()}
        {renderContent()}
      </a>
    </div>
  );
};

export default StayCardForPortions;
