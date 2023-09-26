import React, { FC, ReactNode, useEffect, useState } from "react";
import StayCard from "components/StayCard/StayCard";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import TabFilters from "components/TabFilters/TabFilters";
import Heading3 from "components/Heading/Heading3";
import ReactPaginate from 'react-paginate';
import './style.css';
import { pages } from "routers";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export interface SectionGridFilterCardallProps {
  className?: string;
  data?: StayDataType[];
  href?: string;
}
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);
const SectionGridFilterCardall: FC<SectionGridFilterCardallProps> = ({
  className = "",
  data = DEMO_DATA,
  href = '',
}) => {
  const [datafetchstatus, setdatafetchstatus] = useState([0])
  const [dummyData, setDummyData] = useState([0])
  const [currentPage, setCurrentPage] = useState(12)
  const [postsPerPage, setPostsPerPage] = useState(24)
  const [load, setload]=useState(['Load more']);
  const [style, setstyleloadmore]=useState(0);
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    setdatafetchstatus(0)
   
    let url = 'https://admin.vacationsaga.com/api/propertiesall?page=12';
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      setdatafetchstatus(1)
      setstyleloadmore(0)
    }).catch(e => { console.log(e) })
  }
  
  const getData1 = (a) => {
    setdatafetchstatus(0)
   
    let url = 'https://admin.vacationsaga.com/api/propertiesall?page='+a;
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      setload('Load more')
      setdatafetchstatus(1)
      setstyleloadmore(0)
    }).catch(e => { console.log(e) })
  }
  function property_typefilter(a, b, c, d, e, f) {
    setdatafetchstatus(0)
    var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    let value = usp.get('name');
    cookies.set('stay_temp', value)
    let url = 'https://admin.vacationsaga.com/api/area_aminity_wise_apiall?aminityid=' + a + '&fromprice=' + b + '&toprice=' + c + '&bed=' + d + '&bedrooms=' + e + '&bathroom=' + f;
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      setdatafetchstatus(1)
      setstyleloadmore(1)
      //cookies.set('stay_temp_length', data.lenght);
    }).catch(e => { console.log(e) })
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
  
  const renderCard = (stay: StayDataType) => {
    let dummy = {
      "id": stay.id,
      "pdid":stay.pdid,
      "agent_ids": stay.agent_ids,
      "authorId": 8,
      "date": "May 20, 2021",
      "href": "/listing-stay-detail/" + stay.pid + "?poid=" + stay.portions_ids+"#days="+stay.agent_ids,
      "listingCategoryId": 10,
      "title": 'VS' + stay.pdid,
      "featuredImage": "https://admin.vacationsaga.com/public/images/property/" + stay.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "galleryImgs": [
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo2 + "?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo3 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo4 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/" + stay.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      "commentCount": 40,
      "viewCount": 905,
      "like": true,
      "address": stay.pstate + ', ' + stay.pcountry,
      "reviewStart": stay.ratings,
      "reviewCount": 188,
      "price": "\u20AC" + stay.final_price,
      "maxGuests": 6,
      "bedrooms": stay.noofrooms,
      "bathrooms": stay.nobath,
      "saleOff": true,
      "isAds": true,
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
   
      return <StayCard key={dummy.id} data={dummy} />;
    
  };


  function paginate(a)
  {
    setload('Loading...')
    let pagi=a
    let topagi=pagi+12
    //alert(topagi)
    setCurrentPage(topagi)
    getData1(topagi)
    
  }
  let styles
  if(style=='0')
  {
    styles={'display':'block'}
  }
  else
  {
    styles={'display':'none'}
  }
  //alert(style);
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
     
      <div className="mb-8 lg:mb-11">
        <TabFilters data={property_typefilter} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {dummyData.map((dummy) => renderCard(dummy))}
      </div>
      <br/>
      {<center>
     <button style={styles} onClick={() =>paginate(currentPage)} class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">{load}</button>
  </center>}
      
    </div>
  );
};

export default SectionGridFilterCardall;
