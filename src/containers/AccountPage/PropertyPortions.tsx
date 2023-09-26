import { Tab } from "@headlessui/react";
import CarCard from "components/CarCard/CarCard";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import StayCard from "components/StayCard/StayCardForOwnerPortions";
import Cookies from 'universal-cookie';
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "data/listings";
import React, { Fragment, useState , useEffect } from "react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";
import { Dialog, Transition } from "@headlessui/react";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import moment from "moment";
import useWindowSize from "hooks/useWindowResize";
import Input from "shared/Input/Input";
const PropertyPortions = () => {const renderCard = (stay: StayDataType) => {
  //alert(stay.pcountry);
  console.log('hello',stay);
  
  let dummy = {
    "id": stay.id,
    "sid": stay.sid,
    "authorId": 8,
    "date": "May 20, 2021",
    "listingCategoryId": 10,
    "title": stay.portiontitle,
    "featuredImage": "https://admin.vacationsaga.com/public/images/portion/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo2+"?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo3+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo4+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 40,
    "viewCount": 905,
    "like": true,
    "address": stay.pcountry,
    "reviewStart": stay.ratings,
    "reviewCount": 188,
    "price": "\u20AC"+stay.priceforanc,
    "maxGuests": stay.tnopeople,
    "bedrooms": stay.nobeds,
    "bathrooms": stay.nobath,
    "area":stay.portionsize,
    "saleOff": null,
    "isAds": null,
    "map": {
        "lat": stay.latitude,
        "lng": stay.longitude
    },
    "author": {
        "id": 8,
        "firstName": "Claudetta",
        "lastName": "Sleite",
        "displayName": "Sleite Claudetta",
        "email": "csleite7@godaddy.com",
        "gender": "Genderqueer",
        "avatar": "/static/media/Image-8.5ae85a64aab1965e33a5.png",
        "count": 35,
        "href": "/author",
        "desc": "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
        "jobName": "Author Job",
        "bgImage": "https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    "listingCategory": {
        "id": 10,
        "name": "Entire cabin",
        "href": "archive-stay/the-demo-archive-slug",
        "thumbnail": "http://dummyimage.com/300x300.png/dddddd/000000",
        "count": 1945,
        "taxonomy": "category",
        "listingType": "stay"
    }
};
 // console.log('this is the stay dat', stay);
  return <StayCard key={dummy.id} data={dummy} />;
};
  let [categories] = useState(["Portions"]);
  
  const [dummyData, setDummyData] = useState([])
  let [isOpenModalPricelist, setIsOpenModalPricelist] = useState(false);
  function closeModalPricelist() {
    setIsOpenModalPricelist(false);
  }
  function openModalPricelist() {
    setIsOpenModalPricelist(true);
  }
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(3, "days"),
  
  });
  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
  useState<FocusedInputShape>("startDate");
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
  useEffect(()=>{
	 // alert('hello');
	 //
  // console.log('these are the props =', data)
	  getData()
  }, [])
  const getData = () => {
    //alert('mausi ho kya meri');
     var urloc = window.location.pathname;  
      var parts = urloc.split("/");
      var last_part = parts[parts.length-1];
      //let aa=last_part.split('#');
      //alert(last_part)
    let url = 'https://admin.vacationsaga.com/api/portions/'+last_part;
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      //console.log('this is the api response',data)
    }).catch(e=>{console.log(e)})
  }

  const renderSection1 = () => {
    return (
      <div className="space-y-6 sm:space-y-8">
       
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div>
          <Tab.Group>
            <Tab.List className="flex space-x-1 overflow-x-auto">
              {categories.map((item) => (
                <Tab key={item} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                        selected
                          ? "bg-secondary-900 text-secondary-50 "
                          : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      } `}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="mt-8">
                <div  className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {dummyData.map((dummy) => renderCard(dummy))}
                </div>
                {renderMotalPricelist()}
              </Tab.Panel>
              
             
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    );
  };
  const renderMotalPricelist = () => {
    return (
      <Transition appear show={isOpenModalPricelist} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalPricelist}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full">
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Update Calendar
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalPricelist} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                  <DayPickerRangeController
              startDate={selectedDate.startDate}
              endDate={selectedDate.endDate}
              onDatesChange={(date) => setSelectedDate(date)}
              focusedInput={focusedInputSectionCheckDate}
              onFocusChange={(focusedInput) =>
                setFocusedInputSectionCheckDate(focusedInput || "startDate")
              }
              initialVisibleMonth={null}
              numberOfMonths={windowSize.width < 1280 ? 1 : 1}
              daySize={getDaySize()}
              hideKeyboardShortcutsPanel={false}
              minDate={moment()}
              minimumNights={1}
              disabledPrevDates= {true}
            />
                   
                  </div>
                  <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
              <div>
              
                <Input className="mt-1.5" name="name"  />
                <input type='hidden' name='ownerid' ></input>
              </div>
              
              
              {/* ---- */}
             
              {/* ---- */}
              <div>
                
                <Input className="mt-1.5" readOnly  />
              </div>

              {/* ---- */}
              
              <div>
               
                <Input className="mt-1.5" name="phone"  />
              </div>
              
              
              
              
              
              <div>
              
                <Input className="mt-1.5" name="zipcode"  />
              </div>
              
            </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };
  return (
    <div>
      <CommonLayout>{renderSection1()}</CommonLayout>
    </div>
  );
};

export default PropertyPortions;
