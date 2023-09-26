import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `1. Working of Vacation Saga`,
    job: "Vacation Saga is a high vacation holiday rental brand, we help our customers in listing their properties and getting reservations throughout the year, even in the low season. Once you get your property listed with us, we will live your property on our official website, so that you get in direct touch with our registered travelers. We do not charge any commission on reservations.",
    avatar:
      "",
  

    },
  {
    id: "4",
    name: `2. Enquiries and
    bookings`,
    job: "After listing your property with us, if an enquiry or a booking request comes to us, we will give direct communication to you with our Registered travelers. Hence they will contact you directly through your e-mail address provided by you for each reservation.",
    avatar:
      "",
  },
  {
    id: "3",
    name: `3. Personal Account managers`,
    job: "As soon as you become our Registered customer, we provide you a Personal Account Manager to help you in managing properties 24*7. We provide complete control to you through this account so that you can update it as and when you like. You can also change or edit the information provided by you through this account.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `4.Charging
    Upfront`,
    job: "Neither we take any charges nor commissions on the reservations that you get through us. We only work on subscriptions of 12months, 18months and 24months. There are no hidden charges rather we brainstorm ideas without breaking the bank.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `5. Protection Against fraud`,
    job: "We do not deal in monetary terms, we have secured payment methods. Your personal information will be secured in our database. We do not share your data with 3rd parties. We also protect you from fraud enquiries by verifying them from our end first.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `6. Professional website of your property`,
    job: "We deliver professional websites according to your requirements. You are given the option of choosing a domain of your choice or domain provided by you. You can also share your official website link with us, if any, so as to give recognition on the Google Search Engines as well.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `7. Promotions`,
    job: "We have our own Professional Promotional Team who provides reachability to our registered owner’s property. We use Social Media platforms promptly to gain recognition to your property.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `8. Renewal`,
    job: "Once your subscription is over, we do not renew it automatically. Our executives will contact you a month before the expiry of your subscription. It is up to the owner whether he wants to renew the subscription or not. An option of auto renewal is provided to our registered owners, in case they want to auto renew their subscription.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `9. Plan Upgradation`,
    job: "You can upgrade your plans according to your suitability. In case you wish to upgrade your plan, you can write us on the e-mail address provided by us on our website.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `10. Reviews`,
    job: "After the stay, our registered travelers and owners are invited to simultaneously write a review about each other. Reviews by travelers help the owners with useful historical information while reviews by owners help us to find the authenticity of the traveler.",
    avatar:
      "",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc=""
      >
        ⛱ Owner Help
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
