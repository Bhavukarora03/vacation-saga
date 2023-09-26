import React, { FC , useEffect, useState} from "react";
import GallerySlider from "components/GallerySlider/GallerySlider";
import { DEMO_STAY_LISTINGS } from "data/listings";
import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import moment from "moment";
import useWindowSize from "hooks/useWindowResize";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import Badge from "shared/Badge/Badge";
import { StayDataType } from "data/types";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "../../actions/index";
export interface PropertyCardHProps {
  className?: string;
  data?: StayDataType;
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const PropertyCardH: FC<PropertyCardHProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    title,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
    beds,
    baths,
    area,
    guest,
    child,
    portionid,
  } = data;
  //const [getadult, setadult] = useState([])
 // const [getprice, setprice] = useState([])
 
 const mystate = useSelector((state)=> state.ChangeTheNumber);
     const dispatch=useDispatch();
     let finalprice=price.split('\u20AC')
   
   //let todate=new Date();
   
    
  const renderSliderGallery = () => {
    return (
      <div className="flex-shrink-0 p-3 w-full sm:w-64 " >
        <GallerySlider
          ratioClass="aspect-w-1 aspect-h-1"
          galleryImgs={galleryImgs}
          className="w-full h-full rounded-2xl overflow-hidden"
          uniqueID={`PropertyCardH-${Date.now()}-${id}`}
        />

        {saleOff && (
          <SaleOffBadge className="absolute left-5 top-5 !bg-orange-500" />
        )}
      </div>
    );
  };
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(2, "days"),
   
  });

  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
    useState<FocusedInputShape>("startDate");
  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);
  const windowSize = useWindowSize();

  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34;
    }
    if (windowSize.width <= 500) {
      return undefined;
    }
    if (windowSize.width <= 1280) {
      return 56;
    }
    return 48;
  };
  
  const renderTienIch = () => {
    
    return (
      <div className="inline-grid grid-cols-4 gap-2">
         <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-user text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {guest}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-bed text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {beds}
          </span>
        </div>

        {/* ---- */}
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-bath text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {baths}
          </span>
        </div>

        {/* ---- */}
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            <i className="las la-expand-arrows-alt text-lg"></i>
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {area}
          </span>
        </div>
      </div>
    );
  };
  const style={
    'width': "772px",
    'margin-top': "145px",
    'margin-left': "-257px",
  }
  const rangestyle={
    'display':'none',
  }
  const isBlocked = day => {
    const availableDates = ["2022-05-10"]
    return !availableDates.some(date => day.isSame(date), 'day')
}

  
const calstyle={
  'font-size':'35px',
}

const checkicon={
  'padding-right': '4px;color: green',
}
  const renderContent = () => {
   
    
    return (
      <div className="flex-grow p-3 sm:pr-6 flex flex-col items-start">
        <div className="space-y-4 w-full">
          <div className="inline-flex space-x-3">
            <Badge
              name={
                <div className="flex items-center">
                  <i className="text-sm las la-share-alt"></i>
                  <span className="ml-1">4 Network</span>
                </div>
              }
            />
            <Badge
              name={
                <div className="flex items-center">
                  <i className="text-sm las la-user-friends"></i>
                  <span className="ml-1">Family</span>
                </div>
              }
              color="yellow"
            />
          </div>
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2 className="text-lg font-medium capitalize">
              <span className="line-clamp-2">{title}</span>
            </h2>
          </div>
          {renderTienIch()}
          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 "></div>
          <div className="flex w-full justify-between items-end">
          
            <span className="flex items-center justify-center px-3 py-2 border border-secondary-500 rounded leading-none text-base font-medium text-secondary-500">
              {`${price}`}
            </span>
            <span className="flex items-center justify-center px-3 py-2 border border-secondary-500 rounded leading-none text-base font-medium text-secondary-500" onClick={() => dispatch(incNumber(finalprice[1],guest,child,portionid))}> <i class="las la-check-circle text-lg" style={checkicon}></i> Selected</span>
          </div>
          
        </div>
        
      </div>
      
    );
  };
  return (
    <div
      className={`nc-PropertyCardH group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="PropertyCardH"
    >
      <Link
        to={href}
        className="h-full w-full flex flex-col sm:flex-row sm:items-center"
      >
        {renderSliderGallery()}
        {renderContent()}
      </Link>
     
    </div>
  );
};

export default PropertyCardH;
