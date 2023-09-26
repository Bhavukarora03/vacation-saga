import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "components/StayCard/StayCardForPortions";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridPortionsPlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridPortionsPlaces: FC<SectionGridPortionsPlacesProps> = ({
  stayListings = DEMO_DATA,
  //stayListings=dummyData,
  gridClass = "",
  heading = "Other Portion",
  subHeading = "",
  headingIsCenter,
  tabs = [""],
}) => {
  const renderCard = (stay: StayDataType) => {
	  //alert(stay.pcountry);
	  //onsole.log('hello',stay);
	  
	 let dummy = {
    "id": stay.id,
    "authorId": 8,
    "date": "May 20, 2021",
    "href": "/listing-stay-detail/"+stay.pid+"?poid="+stay.portionid,
    "listingCategoryId": 10,
    "title": stay.portiontitle,
    "featuredImage": "https://admin.vacationsaga.com/public/images/portion/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo2+"?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo3+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo4+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/portion/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 40,
    "viewCount": 905,
    "like": true,
    "address": stay.pcountry,
    "reviewStart": stay.ratings,
    "reviewCount": 188,
    "price": "\u20AC"+stay.priceforanc,
    "maxGuests": stay.tnopeople,
    "bedrooms": stay.nobeds,
    "bathrooms": stay.nobath,
    "area":stay.portionsize,
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
	 // console.log('this is the stay dat', stay);
    return <StayCard key={dummy.id} data={dummy} />;
  };
  const [dummyData, setDummyData] = useState([])
  useEffect(()=>{
	 // alert('dai ho kya meri');
	  getData()
  }, [])
const getData = () => {
	//alert('mausi ho kya meri');
	 var urloc = window.location.pathname;  
    var parts = urloc.split("/");
    var last_part = parts[parts.length-1];
    //let aa=last_part.split('#');
    //alert(last_part)
	let url = 'https://admin.vacationsaga.com/api/portions/'+last_part;
	let res = fetch(url).then(data => data.json()).then(data => {
		setDummyData(data)
		//console.log('this is the api response',data)
	}).catch(e=>{console.log(e)})
}
  return (
   <div className="nc-SectionGridFeaturePlaces relative">
     
      <div 
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ${gridClass}`}
      >
        
		{dummyData.map((dummy) => renderCard(dummy))}
      </div>
     
    </div>
  );
};

export default SectionGridPortionsPlaces;
