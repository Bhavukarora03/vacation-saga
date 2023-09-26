import React, { FC , ReactNode, useEffect, useState } from "react";
import StayCard from "components/StayCard/StayCard";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import TabFilters from "components/TabFilters/TabFilters";
import Heading2 from "components/Heading/Heading2";
import ReactPaginate from 'react-paginate';
import './style.css';
import {useHistory} from "react-router-dom";
import $ from "jquery";
export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
  href?: string;
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);



const SectionGridFilterCardSearch: FC<SectionGridFilterCardProps> = ({
  className = "",
  data =DEMO_DATA,
  href = '',
}) => {
	//console.log('test ++', href, className)
  const [datafetchstatus, setdatafetchstatus] = useState([0])
  const [dummyData, setDummyData] = useState([0])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(24)
  useEffect(()=>{
	 // alert('hello');
	// console.log('these are the props =', data)
	  getData()
  }, [])
  //alert(dummyData)
const getData = () => {
  
  setdatafetchstatus(0);
	var urloc = window.location.href;  
  var parts = urloc.split("?location=");
  var last_part = parts[parts.length-1];
  let aa=last_part.split('&');
 // alert(aa[0])
	let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching?location='+aa[0]+'&lati=37.9753&longi=23.7361&datefilter='+aa[1]+'-'+aa[3]+'&guest=1&rooms=0';
	let res = fetch(url).then(data => data.json()).then(data => {
		setDummyData(data)
    setdatafetchstatus(1);
	//	console.log('this is the api response ++',data)
	}).catch(e=>{console.log(e)})
}

function property_typefilter(a, b, c, d, e, f) {
  setdatafetchstatus(0);
  var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  let value = usp.get('location');
  //cookies.set('stay_temp', value)
  let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching_filter?location=' + value + '&aminityid=' + a + '&fromprice=' + b + '&toprice=' + c + '&bed=' + d + '&bedrooms=' + e + '&bathroom=' + f;
  let res = fetch(url).then(data => data.json()).then(data => {
    setDummyData(data)
    setdatafetchstatus(1);
   // alert("click on filter", data);
    //cookies.set('stay_temp_length', data);
  }).catch(e => { console.log(e) })
}

const history = useHistory()
$('#btnsearch').on('click', function(e){
 
 setdatafetchstatus(0);
  let location=$("#suggetion").val()
  let temp_location=$("#mausi").val()
  if(location=='')
  {
    location=temp_location
  }
  else
  {
    location=$("#suggetion").val();
  }
 let startdate=$("#checkindate").val();
 let enddate=$("#checkoutdate").val();
 let Adults=$("#Adults").val();
 let Children=$("#Children").val();
 //alert(location)
 //alert(startdate)
 //alert(enddate)
// alert(Adults)
// alert(Children)
 //s history.push('/listing-stay-search?location='+location+'&startDate='+startdate+'&endDate='+enddate+'&adult='+Adults+'&children='+Children+'')
 let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching?location='+location+'&lati=37.9753&longi=23.7361&datefilter='+startdate+'-'+enddate+'&guest='+Adults+'&rooms=0';
 let res = fetch(url).then(data => data.json()).then(data => {
   setDummyData(data)
   setdatafetchstatus(1);
 //	console.log('this is the api response ++',data)
 }).catch(e=>{console.log(e)})
});
const indexOfLastPost= currentPage * postsPerPage;
const indexOfFirstPost= indexOfLastPost - postsPerPage;
const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
const renderCard = (stay: StayDataType) => {
  //alert(stay.pcountry);
  //console.log('hello',stay);
  
 let dummy = {
  "id": stay.id,
  "pdid": stay.pdid,
  "authorId": 8,
  "date": "May 20, 2021",
  "href": "/listing-stay-detail/"+stay.pid+"?poid="+stay.portions_ids,
  "listingCategoryId": 10,
  "title": 'VS'+stay.pdid,
  "featuredImage": "https://admin.vacationsaga.com/public/images/property/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "galleryImgs": [
      "https://admin.vacationsaga.com/public/images/property/"+stay.photo2+"?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://admin.vacationsaga.com/public/images/property/"+stay.photo3+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://admin.vacationsaga.com/public/images/property/"+stay.photo4+"?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://admin.vacationsaga.com/public/images/property/"+stay.photo1+"?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ],
  "commentCount": 40,
  "viewCount": 905,
  "like": true,
  "address": stay.pstate+', '+stay.pcountry,
  "reviewStart": stay.ratings,
  "reviewCount": '',
  "price": "\u20AC"+stay.final_price,
  "maxGuests": 6,
  "bedrooms": 7,
  "bathrooms": 4,
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
// console.log('pagination',currentPosts)
if(datafetchstatus!=0)
{
  return <StayCard key={dummy.id} data={dummy} />;
}
};
//const paginate = pageNumber =>setCurrentPage(pageNumber);

const handlePageClick = (event) => {
  const newOffset = (event.selected) 
  
  let newoff;
  if(newOffset==0)
  {
    newoff=1;
  }
  else{
    newoff=newOffset+1;
  }
  console.log(
    `User requested page number ${newoff}, which is offset ${newoff}`
  );
  //alert(newoff)
  setCurrentPage(newoff);
  window.scroll({top: 700, left: 0, behavior: 'smooth' })
};
let loading;
if(datafetchstatus==0)
{
  loading='loading...';
}
else{
  loading='';
}
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
      
    >
     

      <div className="mb-8 lg:mb-11">
        <TabFilters data={property_typefilter}/>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading}
	   {currentPosts.map((currentPosts) => renderCard(currentPosts))}
      </div>
      <div className="flex mt-16 justify-center items-center">
      <nav aria-label="Page navigation comments" class="mt-4">
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={dummyData.length/postsPerPage}
            pageRangeDisplayed={4}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            // eslint-disable-next-line no-unused-vars
            hrefBuilder={(page, currentPosts, selected) =>
              page >= 1 && page <= currentPosts ? `/page/${page}` : '#'
            }
            hrefAllControls
           //forcePage={currentPage}
            
          />
        </nav>
     
      </div>
    </div>
  );
};

export default SectionGridFilterCardSearch;
