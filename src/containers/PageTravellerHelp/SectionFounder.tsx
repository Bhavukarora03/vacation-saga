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
    name: `1.Requirements`,
    job: "Vacation Saga is easy to use and mobile friendly website. We provide features like photos, interactive map and videos. We also provide easy sorting options so that you can filter the features according to your needs and budget. We have the ability to provide expected home lettings in order to meet your requirements.",
    avatar:
      "",
  

    },
  {
    id: "4",
    name: `2. Reservations`,
    job: "Once you like the property, you can send a query by clicking on Book Now, you will then be directly connected to the owner of the property. We do not charge any commission or hidden charges when you book through us.",
    avatar:
      "",
  },
  {
    id: "3",
    name: `3. Changing your plan`,
    job: "In case you wish to make any changes in your booked plan, you can contact directly to the owner of the property through our website. We keep our availability calendars upto date.",
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
    name: `5. Cancellation policy`,
    job: "If you wish to cancel your plan, we will connect you directly to the owner. We do not charge any cancellation fees on your cancelled booking.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `6.Payments`,
    job: "Our travelers will have to pay directly to the owners, we do not take payments from our customers. Thus, the payment method is on the discretion of the owners.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `7. Confirmation`,
    job: "Once you click on Book Now, we send your query to the property owner, he will then contact you and send you a confirmation mail. Once a property is confirmed by you, we will send you a URL of the map on your registered e-mail address..",
    avatar:
      "",
  },
  {
    id: "2",
    name: `8. Departure`,
    job: "Before departing, you can contact the property owner updating him about your departure. In case you find any problem in contacting the property owner, you can contact us through our e-mail address provided on our website.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `9.Meal plan`,
    job: "We mention in the property advertisements about the meals. If there is a kitchen provided by the property owner, it will be mentioned in the advertisement.",
    avatar:
      "",
  },
  {
    id: "2",
    name: `10. Feedback`,
    job: "The reviews of our travelers are valuable to us since it keeps the property owners accountable for treating their hosts and their lettings with respect. The feedback also provides useful historical information to the property owner.",
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
        ⛱ Traveller Help
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
