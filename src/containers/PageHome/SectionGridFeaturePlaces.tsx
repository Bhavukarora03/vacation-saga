import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "components/StayCard/StayCard";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  //stayListings=dummyData,
  gridClass = "",
  heading = "Featured places to stay ",
  subHeading = "Popular places to stay that VS recommends for you",
  headingIsCenter,
  tabs = [""],
}) => {
  const renderCard = (stay: StayDataType) => {
	  //alert(stay.pcountry);
	  //onsole.log('hello',stay);
	  
	 let dummy = {
    "id": stay.id,
    "pdid":stay.pdid,
    "agent_ids":stay.agent_ids,
    "authorId": 8,
    "date": "May 20, 2021",
    "href": "/listing-stay-detail/"+stay.pid+"?poid="+stay.portions_ids+"#days="+stay.agent_ids,
    "listingCategoryId": 10,
    "title": stay.propertytitle,
    "featuredImage": "https://admin.vacationsaga.com/public/images/property/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
        "https://admin.vacationsaga.com/public/images/property/"+stay.photo2+"?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://admin.vacationsaga.com/public/images/property/"+stay.photo3+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/"+stay.photo4+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://admin.vacationsaga.com/public/images/property/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": '',
    "viewCount": '',
    "like": true,
    "address": stay.pstate+', '+stay.pcountry,
    "city":stay.pcity,
    "reviewStart": stay.ratings,
    "reviewCount": stay.ratings,
    "price": "\u20AC"+stay.final_price,
    "maxGuests": +stay.tnopeople,
    "bedrooms": +stay.noofrooms,
    "bathrooms": +stay.nobath,
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
        "name": stay.propertytypename,
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
  const [currentPage, setCurrentPage] = useState(12);
  const [postsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
  const [load, setload]=useState(['Load more']);
  //alert(currentPage)
  useEffect(()=>{
	 // alert('hello');
	  getData()
  }, [])
const getData = () => {
	let url = 'https://admin.vacationsaga.com/api/home_property?page=12';
	let res = fetch(url).then(data => data.json()).then(data => {
		setDummyData(data);
    
		//console.log('this is the api response',data)
	}).catch(e=>{console.log(e)})
}
const getData1 = (topagi) => {
	let url = 'https://admin.vacationsaga.com/api/home_property?page='+topagi;
	let res = fetch(url).then(data => data.json()).then(data => {
		setDummyData(data)
    setload('Load more')
		//console.log('this is the api response',data)
	}).catch(e=>{console.log(e)})
}
//const paginate = pageNumber => setCurrentPage(pageNumber+1);
function paginate(a)
{
  setload('Loading...')
  let pagi=a
  let topagi=pagi+12
  //alert(topagi)
  setCurrentPage(topagi)
  getData1(topagi)
  
}
  return (
   <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"Holiday Homes"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onClickTab={() => {}}
      />
      <div 
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        
		{dummyData.map((dummy) => renderCard(dummy))}
      </div>
      <br/>
     {<center>
     <button onClick={() =>paginate(currentPage)} class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">{load}</button>
  </center>}
    </div>
  );
};

export default SectionGridFeaturePlaces;
