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
    name: `Assistance`,
    job: "We are available on every step when you need us.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/assistance.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: `Cost Effective`,
    job: "We serve quality services in less investment.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/costeffective.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: `Secure Investment`,
    job: "You will get booking or your invested amount.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/payment-method.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: `Guaranteed bookings`,
    job: "Host get assured reservations according to their subscription.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/guaranteed_bookings.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "5",
    name: `Best marketing strategies`,
    job: "Best method to sky rocket your rental business.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/marketing_stategi.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    name: `Secure payment methods`,
    job: "We assure safe methods through secure online payment portals.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/secure_investment.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "7",
    name: `Rental climbing`,
    job: "Get maximum number of renters for your rental property.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/rent.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "8",
    name: `Attractive personal website`,
    job: "For long term success of your business we also provide attractive professional website.",
    avatar:
      "https://www.vacationsaga.com/img/list_your_property/attr_websitr.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
];
let styleimg={'width':'73px',}
const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Section Heading</h2></div></div>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/assistance.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div>
          <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Assistance</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">We are available on every step when you need us.</span>
        </div>

        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/costeffective.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div>
          <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Cost Effective</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">We serve quality services in less investment.</span>

        </div>

        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/payment-method.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div>
          <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Secure Investment</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">You will get booking or your invested amount.</span>
        </div>

        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/guaranteed_bookings.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div>
          <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Guaranteed bookings</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">Host get assured reservations according to their subscription.</span>
        </div>

        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/marketing_stategi.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div><h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Best marketing strategies</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">Best method to sky rocket your rental business.</span>
        </div>

        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/secure_investment.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div><h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Secure payment methods</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">We assure safe methods through secure online payment portals.</span>
        </div>
        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/rent.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div><h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Rental climbing</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">Get maximum number of renters for your rental property.</span>
        </div>
        <div className="max-w-sm">
          <div className="" data-nc-id="NcImage">
            <img style={styleimg} src="https://www.vacationsaga.com/img/list_your_property/attr_websitr.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" className="" alt="nc-imgs"></img></div>
          <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">Attractive personal website</h3><span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">For long term success of your business we also provide attractive professional website.</span>
        </div>
      </div>
    </div>
  );
};

export default SectionFounder;
