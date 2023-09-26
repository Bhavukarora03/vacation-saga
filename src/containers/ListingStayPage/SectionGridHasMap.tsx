import React, { FC, useState,useEffect } from "react";
import AnyReactComponent from "components/AnyReactComponent/AnyReactComponent";
import StayCardH from "components/StayCardH/StayCardH";
import GoogleMapReact from "google-map-react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import Checkbox from "shared/Checkbox/Checkbox";
import Pagination from "shared/Pagination/Pagination";
import TabFilters from "components/TabFilters/TabFilters";
import Heading2 from "components/Heading/Heading2";
import ReactPaginate from 'react-paginate';
import $ from "jquery";
const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);

export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);


  const [dummyData, setDummyData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)
  const [datafetchstatus, setdatafetchstatus] = useState(0)
  useEffect(()=>{
	 // alert('hello');
	  getData()
  }, [])
const getData = () => {
  let listingarray=[];
  var urloc = window.location.href;  
  var parts = urloc.split("?location=");
  var last_part = parts[parts.length-1];
  let aa=last_part.split('&');
		let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching?location='+aa[0]+'&lati=37.9753&longi=23.7361&datefilter='+aa[1]+'-'+aa[3]+'&guest=1&rooms=0';;
  var response = fetch(url).then(data=> data.json())
  response.then((data)=>{
    data.map((item)=>{
   listingarray.push({
        "id": item.id,
        "pdid": item.pdid,
        "agent_ids":item.agent_ids,
        "authorId": 10,
        "date": "May 20, 2021",
        "href": "/listing-stay-detail/"+item.pid+"?poid="+item.portions_ids+"#days="+item.agent_ids,
        "listingCategoryId": 17,
        "title": item.display_title,
        "featuredImage": "https://admin.vacationsaga.com/public/images/property/" + item.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "galleryImgs": [
          "https://admin.vacationsaga.com/public/images/property/" + item.photo2 + "?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://admin.vacationsaga.com/public/images/property/" + item.photo3 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://admin.vacationsaga.com/public/images/property/" + item.photo4 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://admin.vacationsaga.com/public/images/property/" + item.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        "commentCount": 70,
        "viewCount": 602,
        "like": false,
        "address": item.pstate+ "," + item.pcity + "," + item.pcountry,
        "reviewStart": item.ratings,
        "reviewCount": '',
        "price": "\u20AC"+item.final_price,
        "maxGuests":item.tnopeople,
        "bedrooms": item.noofrooms,
        "beds": item.nobeds,
        "bathrooms": item.nobath,
        "saleOff": true,
        "isAds": true,
        "map": {
            "lat": item.latitude,
            "lng": item.longitude
        },
        "author": {
            "id": 10,
            "firstName": "Mimi",
            "lastName": "Fones",
            "displayName": "Fones Mimi",
            "email": "mfones9@canalblog.com",
            "gender": "Agender",
            "avatar": "/static/media/Image-10.93048ca791076288cf69.png",
            "count": 111,
            "href": "/author",
            "desc": "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
            "jobName": "Author Job",
            "bgImage": "https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        "listingCategory": {
            "id": 17,
            "name": item.propertytypename,
            "href": "archive-stay/the-demo-archive-slug",
            "thumbnail": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
            "count": 2855,
            "taxonomy": "category",
            "listingType": "stay"
        }
    })
    })
		setDummyData(listingarray)
    setdatafetchstatus(1)
	//	console.log('this is the api response',listingarray)
	}).catch(e=>{console.log(e)})
}
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
//console.log(dummyData)
let defaultlat;
let defaultlng;

const handlePageClick = (event) => {
  const newOffset = (event.selected)
  let newoff;
  if (newOffset == 0) {
    newoff = 1;
  }
  else {
    newoff = newOffset + 1;
  }
  console.log(
    `User requested page number ${newoff}, which is offset ${newoff}`
  );
  
  setCurrentPage(newoff);
  window.scroll({ top: 700, left: 0, behavior: 'smooth' })
};
function property_typefilter(a, b, c, d, e, f) {
  setdatafetchstatus(0)
  setCurrentPage(1)
  var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  let value = usp.get('location');
  //cookies.set('stay_temp', value)
  let listingarray=[];
  let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching_filter?location=' + value + '&aminityid=' + a + '&fromprice=' + b + '&toprice=' + c + '&bed=' + d + '&bedrooms=' + e + '&bathroom=' + f;
  let res = fetch(url).then(data => data.json()).then(data => {
    data.map((item)=>{
      listingarray.push({
           "id": item.id,
           "pdid": item.pdid,
           "agent_ids":item.agent_ids,
           "authorId": 10,
           "date": "May 20, 2021",
           "href": "/listing-stay-detail/"+item.pid+"?poid="+item.portions_ids+"#days="+item.agent_ids,
           "listingCategoryId": 17,
           "title": item.display_title,
           "featuredImage": "https://admin.vacationsaga.com/public/images/property/" + item.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
           "galleryImgs": [
             "https://admin.vacationsaga.com/public/images/property/" + item.photo2 + "?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
             "https://admin.vacationsaga.com/public/images/property/" + item.photo3 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "https://admin.vacationsaga.com/public/images/property/" + item.photo4 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "https://admin.vacationsaga.com/public/images/property/" + item.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
           ],
           "commentCount": 70,
           "viewCount": 602,
           "like": false,
           "address": item.pstate+ "," + item.pcity + "," + item.pcountry,
           "reviewStart": item.ratings,
           "reviewCount": '',
           "price": "\u20AC"+item.final_price,
           "maxGuests":item.tnopeople,
           "bedrooms": item.noofrooms,
           "beds": item.nobeds,
           "bathrooms": item.nobath,
           "saleOff": true,
           "isAds": true,
           "map": {
               "lat": item.latitude,
               "lng": item.longitude
           },
           "author": {
               "id": 10,
               "firstName": "Mimi",
               "lastName": "Fones",
               "displayName": "Fones Mimi",
               "email": "mfones9@canalblog.com",
               "gender": "Agender",
               "avatar": "/static/media/Image-10.93048ca791076288cf69.png",
               "count": 111,
               "href": "/author",
               "desc": "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
               "jobName": "Author Job",
               "bgImage": "https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           },
           "listingCategory": {
               "id": 17,
               "name": item.propertytypename,
               "href": "archive-stay/the-demo-archive-slug",
               "thumbnail": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
               "count": 2855,
               "taxonomy": "category",
               "listingType": "stay"
           }
       })
       })
       setDummyData(listingarray)
       setdatafetchstatus(1)
  }).catch(e => { console.log(e) })
}
$('#btnsearch').on('click', function(e){
  //alert('ko');
  //setdatafetchstatus(0)
  //getData()
  //setCurrentPage(1)
  setdatafetchstatus(0)
  setCurrentPage(1)
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
  let listingarray=[];
  let url = 'https://admin.vacationsaga.com/api/thoda_custome_searching?location='+location+'&datefilter='+startdate+'-'+enddate+'&guest='+Adults+'&rooms=0';
  let res = fetch(url).then(data => data.json()).then(data => {
    data.map((item)=>{
      
      listingarray.push({
           "id": item.id,
           "pdid": item.pdid,
           "agent_ids":item.agent_ids,
           "authorId": 10,
           "date": "May 20, 2021",
           "href": "/listing-stay-detail/"+item.pid+"?poid="+item.portions_ids+"#days="+item.agent_ids,
           "listingCategoryId": 17,
           "title": item.display_title,
           "featuredImage": "https://admin.vacationsaga.com/public/images/property/" + item.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
           "galleryImgs": [
             "https://admin.vacationsaga.com/public/images/property/" + item.photo2 + "?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
             "https://admin.vacationsaga.com/public/images/property/" + item.photo3 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "https://admin.vacationsaga.com/public/images/property/" + item.photo4 + "?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "https://admin.vacationsaga.com/public/images/property/" + item.photo1 + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
           ],
           "commentCount": 70,
           "viewCount": 602,
           "like": false,
           "address": item.pstate+ "," + item.pcity + "," + item.pcountry,
           "reviewStart": item.ratings,
           "reviewCount": '',
           "price": "\u20AC"+item.final_price,
           "maxGuests":item.tnopeople,
           "bedrooms": item.noofrooms,
           "beds": item.nobeds,
           "bathrooms": item.nobath,
           "saleOff": true,
           "isAds": true,
           "map": {
               "lat": item.latitude,
               "lng": item.longitude
           },
           "author": {
               "id": 10,
               "firstName": "Mimi",
               "lastName": "Fones",
               "displayName": "Fones Mimi",
               "email": "mfones9@canalblog.com",
               "gender": "Agender",
               "avatar": "/static/media/Image-10.93048ca791076288cf69.png",
               "count": 111,
               "href": "/author",
               "desc": "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
               "jobName": "Author Job",
               "bgImage": "https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
           },
           "listingCategory": {
               "id": 17,
               "name": item.propertytypename,
               "href": "archive-stay/the-demo-archive-slug",
               "thumbnail": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
               "count": 2855,
               "taxonomy": "category",
               "listingType": "stay"
           }
       })
       })
       setDummyData(listingarray)
       setdatafetchstatus(1)
  }).catch(e=>{console.log(e)})
 });
 let loading;
 if(datafetchstatus==0)
 {
  loading={'display':'block'}
 }
 else{
  loading={'display':'none'}
 }
 let fetchstyle={
   'text-align':'center',
   'font-size':'30px',
 }
  return (
    <div>
      <div className="relative flex min-h-screen">
        {/* CARDSSSS */}
        <div className="min-h-screen w-full xl:w-[780px] 2xl:w-[880px] flex-shrink-0 xl:px-8 ">
         
          <div className="mb-8 lg:mb-11">
            <TabFilters data={property_typefilter}/>
          </div>
          <div style={fetchstyle}><center style={loading}><svg width="25" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="rgb(30, 41, 59)" class="w-8 h-8">
                        <circle cx="15" cy="15" r="15">
                            <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                            <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="105" cy="15" r="15">
                            <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
                        </circle>
                    </svg></center></div>
          <div className="grid grid-cols-1 gap-8">
            {currentPosts.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                onMouseLeave={() => setCurrentHoverID((_) => -1)}
              >
                <StayCardH data={item} />
              </div>
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={dummyData.length / postsPerPage}
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
          </div>
        </div>

        {!showFullMapFixed && (
          <div
            className="flex xl:hidden items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30  space-x-3 text-sm cursor-pointer"
            onClick={() => setShowFullMapFixed(true)}
          >
            <i className="text-lg las la-map"></i>
            <span>Show map</span>
          </div>
        )}

        {/* MAPPPPP */}
        <div
          className={`xl:flex-grow xl:static xl:block ${
            showFullMapFixed ? "fixed inset-0 z-50" : "hidden"
          }`}
        >
          {showFullMapFixed && (
            <ButtonClose
              onClick={() => setShowFullMapFixed(false)}
              className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
            />
          )}

          <div className="fixed xl:sticky top-0 xl:top-[88px] left-0 w-full h-full xl:h-[calc(100vh-88px)] rounded-md overflow-hidden">
            <div className="absolute bottom-5 left-3 lg:bottom-auto lg:top-2.5 lg:left-1/2 transform lg:-translate-x-1/2 py-2 px-4 bg-white dark:bg-neutral-800 shadow-xl z-10 rounded-2xl min-w-max">
              <Checkbox
                className="text-xs xl:text-sm"
                name="xx"
                label="Search as I move the map"
              />
            </div>
            {/* BELLOW IS MY GOOGLE API KEY -- PLEASE DELETE AND TYPE YOUR API KEY */}
            {currentPosts.filter((_, i) => i < 1).map((item1) =>(
             // alert(item1.map.lat),
             // alert(item1.map.lng),
              
            <GoogleMapReact
             
  

              bootstrapURLKeys={{
                key: "AIzaSyDG4M9odJ4yoPHJc5V5clWJP4Ys7wkS3lI",
              }}
              defaultZoom={5}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{
                lat:parseFloat(item1.map.lat),
                lng:parseFloat(item1.map.lng)
              }}
              
            >


              {currentPosts.map((item) => (
                <AnyReactComponent
                  isSelected={currentHoverID === item.id}
                  key={item.id}
                  lat={parseFloat(item.map.lat)}
                  lng={parseFloat(item.map.lng)}
                  listing={item}
                />
              ))}
            </GoogleMapReact>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SectionGridHasMap;
