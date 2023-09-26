import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "10 million",
    subHeading:
      "Articles have been public around the world (as of Sept. 30, 2021)",
  },
  {
    id: "2",
    heading: "100,000",
    subHeading: "Registered users account (as of Sept. 30, 2021)",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Countries and regions have our presence (as of Sept. 30, 2021)",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

let iconstyle={'color': '#f7931e',}
const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" Get started with us in just few steps."
      >
        🚀 Be a SAGA host!
      </Heading>
      <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-3 xl:gap-8">
        
          <div
            key={1}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Create your advert
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Tell us about your property, number of guests you can accommodate.
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Provide us with pictures and videos of your space.
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Complete the subscription by paying for the chosen plan.
            </span>
          </div>

          <div
            key={2}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Attract guests
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Know your guests before they arrive.
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Welcome them in your luxurious property.
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Show hospitality and get good reviews.
            </span>
          </div>

          <div
            key={3}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Payments
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i>  No hidden charges or commissions.
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Get paid directly from the guest.
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check-circle text-lg"></i> Renew your subscription once it gets expired.
            </span>
          </div>
        
      </div>
    </div>
  );
};

export default SectionStatistic;
