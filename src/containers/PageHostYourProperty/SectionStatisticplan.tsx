import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statisticplan {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statisticplan[] = [
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

export interface StatisticplanProps {
  className?: string;
}

let iconstyle={'color': '#f7931e','font-weight':'bold',}
let headingstyle={
  'font-size': '19px',
   'text-align': 'center',
}
const Statisticplan: FC<StatisticplanProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      
      <Heading
        desc=" "
      >
        🚀 Our Annual Plans
      </Heading>
      <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-4 xl:gap-8">
        
          <div
            key={1}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 style={headingstyle} className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Strategy
            <br/>
             EUR 299
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 12 Duration
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 12 Monthly Listing
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 24 Photo
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 2 Promotion Report
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 10 Booking Enquery
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 2 Reservations
            </span>
            <br/>
            <center>
            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Choose</button>
            </center>
          </div>

          <div
            key={2}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 style={headingstyle} className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Action
            <br/>
             EUR 399
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 18 Duration
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 18 Monthly Listing
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 34 Photo
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 3 Promotion Report
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 15 Booking Enquery
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 3 Reservations
            </span>
            <br/>
            <center>
            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Choose</button>
            </center>
          </div>

          <div
            key={3}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 style={headingstyle} className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Master Plan
            <br/>
            EUR 499
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 24 Duration
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 24 Monthly Listing
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 52 Photo
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 9 Promotion Report
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 20 Booking Enquery
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 4 Reservations
            </span>
            <br/>
            <center>
            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Choose</button>
            </center>
          </div>

          <div
            key={4}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 style={headingstyle} className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
            Game Plan
            <br/>
            EUR 599
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 18 Duration
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 18 Monthly Listing
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 52 Photo
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 9 Promotion Report
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 20 Booking Enquery
            </span>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
            <i style={iconstyle} class="las la-check text-lg"></i> 4 Reservations
            </span>
            <br/>
            <center>
            <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Choose</button>
            </center>
          </div>
        
      </div>
    </div>
  );
};

export default Statisticplan;
