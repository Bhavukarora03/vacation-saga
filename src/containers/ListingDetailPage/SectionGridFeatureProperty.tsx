import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import PropertyCardH from "components/PropertyCardH/PropertyCardH";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);
//
export interface SectionGridFeaturePropertyProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Housing units",
  subHeading = "",
  headingIsCenter,
  tabs = [],
}) => {
 // const renderCard = (stay: StayDataType, index: number) => {
   // return <PropertyCardH key={index} className="h-full" data={stay} />;
    
	//console.log('test ++', href, className)
  const renderCard = (stay: StayDataType) => {
      //alert(stay.pcountry);
    //  console.log('hello',stay);
      
     let dummy = {
      "id": stay.id,
      "authorId": 8,
      "date": "May 20, 2021",
      //"href": "/listing-stay-detail/"+stay.pid+"?poid="+stay.portionid,
      "listingCategoryId": 10,
      "title": stay.portiontitle,
      "featuredImage": "https://admin.vacationsaga.com/public/images/portion/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "galleryImgs": [
          "https://admin.vacationsaga.com/public/images/portion/"+stay.photo2+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      "price": "\u20AC" +stay.priceforanc,
      "area": stay.portionsize+'sqft',
      "guest": stay.tnopeople,
      "child": stay.tnochild,
      "beds": stay.nobeds,
      "baths": stay.nobath,
      "portionid": stay.portionid,
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
      return <PropertyCardH key={dummy.id} data={dummy} />;
    };
    const [dummyData, setDummyData] = useState([])
    useEffect(()=>{
     
      getData()
    
    }, [])
  const getData = () => {
  var urloc = window.location.href;  
  var parts = urloc.split("?poid=");
  var last_part = parts[parts.length-1];
  let aa=last_part.split('#');
 // alert(aa[0])
    let url = 'https://admin.vacationsaga.com/api/single_portion/'+aa[0];
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
     // console.log('this is the api response ++',data)
    }).catch(e=>{console.log(e)})
 };
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <div className="nc-SectionGridFeatureProperty relative">
     
      <div
        className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 ${gridClass}`}
      >
        {dummyData.map(renderCard)}
    
      </div>

     
    </div>
  );
};

export default SectionGridFeatureProperty;
