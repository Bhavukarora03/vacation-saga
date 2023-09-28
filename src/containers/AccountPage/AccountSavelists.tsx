import { Tab } from "@headlessui/react";
import CarCard from "components/CarCard/CarCard";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import StayCard from "components/StayCard/StayCardForOwerProperty";
import Cookies from "universal-cookie";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "data/listings";
import React, { Fragment, useState, useEffect } from "react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";

const AccountSavelists = () => {
  const renderCard = (stay: StayDataType) => {
    let dummy = {
      id: stay.id,
      pid: stay.pid,
      pdid: stay.pdid,
      authorId: 8,
      date: "May 20, 2021",
      href:
        "/listing-stay-detail/" +
        stay.pid +
        "?poid=" +
        stay.portions_ids +
        "#days=" +
        stay.agent_ids,
      listingCategoryId: 10,
      title: "VS" + stay.pdid,
      featuredImage:
        "https://admin.vacationsaga.com/public/images/property/" +
        stay.photo1 +
        "?auto=compress&cs=tinysrgb&dpr=1&w=500",
      galleryImgs: [
        "https://admin.vacationsaga.com/public/images/property/" +
          stay.photo2 +
          "?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://admin.vacationsaga.com/public/images/property/" +
          stay.photo3 +
          "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/" +
          stay.photo4 +
          "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/" +
          stay.photo1 +
          "?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      commentCount: 40,
      viewCount: 905,
      like: true,
      address: stay.pstate + ", " + stay.pcountry,
      reviewStart: stay.ratings,
      reviewCount: 188,
      price: "$" + stay.final_price,
      maxGuests: 6,
      bedrooms: 7,
      bathrooms: 4,
      saleOff: null,
      isAds: null,
      map: {
        lat: stay.latitude,
        lng: stay.longitude,
      },
      author: {
        id: 8,
        firstName: "Claudetta",
        lastName: "Sleite",
        displayName: "Sleite Claudetta",
        email: "csleite7@godaddy.com",
        gender: "Genderqueer",
        avatar: "/static/media/Image-8.5ae85a64aab1965e33a5.png",
        count: 35,
        href: "/author",
        desc: "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
        jobName: "Author Job",
        bgImage:
          "https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      listingCategory: {
        id: 10,
        name: "Entire cabin",
        href: "archive-stay/the-demo-archive-slug",
        thumbnail: "http://dummyimage.com/300x300.png/dddddd/000000",
        count: 1945,
        taxonomy: "category",
        listingType: "stay",
      },
    };
    // console.log('this is the stay dat', stay);
    return (
      <StayCard
        key={dummy.id}
        data={dummy}
        onEditNavigate={() => {
          window.location.href = "/add-listing-1";
        }}
      />
    );
  };
  let [categories] = useState(["Properties"]);

  const [dummyData, setDummyData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const cookies = new Cookies();
    let value = cookies.get("ownerid");
    let url = "https://admin.vacationsaga.com/api/owner_property/" + value;
    let res = fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setDummyData(data);
        console.log("ownerdata", data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
                <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {dummyData.map((dummy) => renderCard(dummy))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    );
  };

  return (
    <div>
      <CommonLayout>{renderSection1()}</CommonLayout>
    </div>
  );
};

export default AccountSavelists;
