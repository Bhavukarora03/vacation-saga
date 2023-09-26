import { Tab } from "@headlessui/react";
import CarCard from "components/CarCard/CarCard";
import CommentListing from "components/CommentListing/CommentListing";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import StartRating from "components/StartRating/StartRating";
import StayCard from "components/StayCard/StayCard";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "data/listings";
import React, { FC, Fragment, useState,useEffect } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import SocialsList from "shared/SocialsList/SocialsList";
import { Helmet } from "react-helmet";
import moment from "moment";
export interface AuthorPageProps {
  className?: string;
}

const AuthorPage: FC<AuthorPageProps> = ({ className = "" }) => {
  //let [categories] = useState(["Stays", "Experiences", "Car for rent"]);
  let [categories] = useState(["Properties", "", ""]);
  useEffect(() => {
    getData()
    getData1()
  }, [])
  const [datafetchstatus, setdatafetchstatus] = useState([0])
  const [dummyData, setDummyData] = useState([0])
  const [dummyData1, setDummyData1] = useState([0])
  const getData = () => {
  setdatafetchstatus(0)
    var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    let value = usp.get('id');
    
    let url = 'https://admin.vacationsaga.com/api/single_authors?id=' + value ;
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      setdatafetchstatus(1)
      console.log(data)
    }).catch(e => { console.log(e) })
  }
  const getData1 = () => {
    setdatafetchstatus(0)
      var urloc = window.location.href;  
      var parts = urloc.split("?");
      var last_part = parts[parts.length-1];
      const Querystr=last_part
      const usp=new URLSearchParams(Querystr)
      let value = usp.get('propertiesid');
      
      let url = 'https://admin.vacationsaga.com/api/properties?id=' + value ;
      let res = fetch(url).then(data => data.json()).then(data => {
        setDummyData1(data)
        setdatafetchstatus(1)
        console.log('property data ',data)
      }).catch(e => { console.log(e) })
    }
  let imgu='https://admin.vacationsaga.com/public/images/owner/'

  const renderCard = (stay: StayDataType) => {
    let dummy = {
      "id": stay.id,
      "pdid":stay.pdid,
      "authorId": 8,
      "date": "May 20, 2021",
      "href": "/listing-stay-detail/" + stay.pid + "?poid=" + stay.portions_ids,
      "listingCategoryId": 10,
      "title": 'VS' + stay.pdid,
      "featuredImage": "https://admin.vacationsaga.com/public/images/property/" + stay.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "galleryImgs": [
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo2 + "?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo3 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo4 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      "commentCount": 40,
      "viewCount": 905,
      "like": true,
      "address": stay.pstate + ', ' + stay.pcountry,
      "reviewStart": stay.ratings,
      "reviewCount": 188,
      "price": "\u20AC" + stay.final_price,
      "maxGuests": 6,
      "bedrooms": stay.noofrooms,
      "bathrooms": stay.nobath,
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
   
    if (datafetchstatus!= 0) {
      return <StayCard key={dummy.id} data={dummy} />;
    }
  };

  const renderSidebar = () => {
    
    return (
      
       dummyData.map((item1)=>(
        
      <div className=" w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">
      
       
        <Avatar
          hasChecked
          hasCheckedClass="w-6 h-6 -top-0.5 right-2"
          sizeClass="w-28 h-28"
          imgUrl={imgu+item1.photo}
        />

        {/* ---- */}
        <div className="space-y-3 text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold">{item1.name}</h2>
          <StartRating className="!text-base" />
        </div>

        {/* ---- */}
        <p className="text-neutral-500 dark:text-neutral-400">
         {item1.detail}
        </p>

        {/* ---- */}
        <SocialsList
          className="!space-x-3"
          itemClass="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xl"
        />

        {/* ---- */}
        <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>

        {/* ---- */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
             {item1.country}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Speaking English
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Joined in {item1.created_at}
              
            </span>
          </div>
        </div>
      </div>
      ))
    );
  };

  const renderSection1 = () => {
    return (
      dummyData.map((item2)=>(
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">{item2.name}'s listings</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
        
            {item2.name}'s listings is very rich, 5 star reviews help him to be
            more branded.
          
          </span>
        </div>
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
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                {dummyData1.map((dummyData1) => renderCard(dummyData1))}
                </div>
              
              </Tab.Panel>
              
              
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      ))
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing hasListingTitle className="pb-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-AuthorPage ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Client || Vacationsaga Rentals</title>
      </Helmet>
      <main className="container mt-12 mb-24 lg:mb-32 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0">
          <div className="lg:sticky lg:top-24">{renderSidebar()}</div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0">
          {renderSection1()}
          
        </div>
      </main>
    </div>
  );
};

export default AuthorPage;
