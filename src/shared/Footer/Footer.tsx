import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";

import React from "react";
import {Link} from "react-router-dom"

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "About",
    menus: [
      { href: "#", label: "Vacation Saga is a prime vacation holiday rental brand, welcoming guests by providing them suitable holiday lettings. We help our travellers to find ideal holiday homes and allow you to search holiday lettings easily by filtering the price range, date, amenities, according to your needs. Stays are extremely affordable in holiday apartments and country cottages." },
      
    ],
  },
  {
    id: "1",
    title: "Quick Links",
    menus: [
      { href: "/about", label: "About Us" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/contact", label: "Contact Us" },
      { href: "/host-your-property", label: "Host Your Property" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-condition", label: "Term And Condition" },
    ],
  },
  {
    id: "2",
    title: "Accounts",
    menus: [
      { href: "/login", label: "Owner Login" },
      { href: "/Traveller-login", label: "Traveller Login" },
      { href: "/OwnerHelp", label: "Help Owner" },
      { href: "/TravellerHelp", label: "Help Traveller" },
      
    ],
  },
  {
    id: "4",
    title: "Top Destination",
    menus: [
      { href: "/listing-stay-search?location=Italy", label: "Italy" },
      { href: "/listing-stay-search?location=united-state", label: "United State" },
      { href: "/listing-stay-search?location=united-kingdom", label: "United Kingdom" },
      { href: "/listing-stay-search?location=greece", label: "Greece" },
      { href: "/listing-stay-search?location=romania", label: "Romania" },
	  { href: "/listing-stay-search?location=croatia", label: "Croatia" },
	  { href: "/listing-stay-search?location=portugal", label: "Portugal" },
	  { href: "/listing-stay-search?location=slovenia", label: "Slovenia" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
               
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
let style={
	'text-align': 'center',
    'margin-top': '26px',
    'border-top': 'solid 1px #ccc',
    'padding-top': '17px',
}
let style2={
	'padding-bottom': '20px',
}
  return (
    <div className="nc-Footer relative py-24 lg:py-32 border-t border-neutral-200 dark:border-neutral-700" style={style2}>
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
	  <div style={style}>Powerd By Zairo International Pvt.Ltd</div>
    </div>
	
  );
};

export default Footer;
