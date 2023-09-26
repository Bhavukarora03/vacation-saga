import React, { FC, ReactNode, useEffect, useState } from "react";
import imagePng from "images/hero-right2.png";
import HeroSearchForm, {
  SearchTab,
} from "components/HeroSearchForm/HeroSearchForm";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export interface SectionHeroArchivePageTypeProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stays" | "Experiences" | "Cars" | "Flights";
  currentTab: SearchTab;
}

const SectionHeroArchivePageType: FC<SectionHeroArchivePageTypeProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab,
}) => {
  
  useEffect(()=>{
	 
	 // getData1()
  }, [])
  const [totalproperties, settotalproperties] = useState([]);
 
 // const getData1 = () =>{
  var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    let value = usp.get('name');
    const [Nameofproperty, setNameofproperty] = useState(value);
    cookies.set('stay_temp',value)
    let url = 'https://admin.vacationsaga.com/api/destination_property_type/'+value;
    //alert(url);
	let res = fetch(url).then(data => data.json())
  res.then(data => {
   // console.log('total count', data.length);
   settotalproperties(data.length)
   cookies.set('stay_temp_length',data);
  // setNameofproperty(value)
	}).catch(e=>{console.log(e)})
//}
  return (
   
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            {Nameofproperty}
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5"> {Nameofproperty} </span>
            <span className="mx-5"></span>
            {listingType ? (
              listingType
            ) : (
              <>
                <i className="text-2xl las la-home"></i>
                <span className="ml-2.5">{totalproperties}  properties</span>
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

export default SectionHeroArchivePageType;
