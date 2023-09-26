import React, { FC, ReactNode, useEffect, useState } from "react";
import imagePng from "images/hero-right2.png";
import HeroSearchForm, {
  SearchTab,
} from "components/HeroSearchForm/HeroSearchForm";

import $ from "jquery";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export interface SectionHeroArchiveForSearchPageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stays" | "Experiences" | "Cars" | "Flights";
  currentTab: SearchTab;
}

const SectionHeroArchiveForSearchPage: FC<SectionHeroArchiveForSearchPageProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab,
}) => {
  
  useEffect(()=>{
  //  alert('ok');
	  getData1()
  }, [])
  
   const[totalproperty, settotalproperty]=useState(0)
   var urloc = window.location.href;  
   var parts = urloc.split("?");
   var last_part = parts[parts.length-1];
   const Querystr=last_part
   const usp=new URLSearchParams(Querystr)
   const location = usp.get('location');
  const getData1 = () =>{
   
   
    let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching_count?location='+location+'&datefilter=&guest=1&rooms=0';
	let res = fetch(url).then(data => data.json())
  res.then(data => {
    settotalproperty(data.length);
   // alert(data.length)
	}).catch(e=>{console.log(e)})
}

$('#btnsearch').on('click', function(e){
  //alert('ok');
  console.log(location)
  var location=$("#suggetion").val();
 // console.log(location)
  let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching_count?location='+location+'&datefilter=&guest=1&rooms=0';
	let res = fetch(url).then(data => data.json())
  res.then(data => {
    settotalproperty(data.length);
    //alert(data.length)
  //  console.log(data.length)
	}).catch(e=>{console.log(e)})
});
  return (
   
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            {location}
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5"> {location} </span>
            <span className="mx-5"></span>
            {listingType ? (
              listingType
            ) : (
              <>
                <i className="text-2xl las la-home"></i>
                <span className="ml-2.5">{totalproperty}  properties</span>
              </>
            )}
          </div>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroSearchForm currentPage={currentPage} currentTab={currentTab} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchiveForSearchPage;
