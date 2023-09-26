import React, { FC, ReactNode, useEffect, useState } from "react";
import StayCard from "components/StayCard/StayCard";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import Pagination from "components/Pagination/Pagination";
import TabFilters from "components/TabFilters/TabFilters";
import Heading3 from "components/Heading/Heading3";
import ReactPaginate from 'react-paginate';
import './style.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
  href?: string;
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFilterCardType: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
  href = '',
}) => {
  //	console.log('test ++', href, className)
  const [datafetchstatus, setdatafetchstatus] = useState([0])
  const [dummyData, setDummyData] = useState([0])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(24)
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    setdatafetchstatus(0)
    var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    let value = usp.get('name');
    let url = 'https://admin.vacationsaga.com/api/destination_property_type/' + value;
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      setdatafetchstatus(1)
      //console.log('this is the api response ++',data)
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
    let url = 'https://admin.vacationsaga.com/api/staytype_aminity_wise_api?type=' + value + '&aminityid=' + a + '&fromprice=' + b + '&toprice=' + c + '&bed=' + d + '&bedrooms=' + e + '&bathroom=' + f;
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
      setdatafetchstatus(1)
      cookies.set('stay_temp_length', data.lenght);
    }).catch(e => { console.log(e) })
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
  const renderCard = (stay: StayDataType) => {
    //alert(stay.pcountry);
      console.log('count');

    let dummy = {
      "id": stay.id,
      "pdid": stay.pdid,
      "agent_ids": stay.agent_ids,
      "authorId": 8,
      "date": "May 20, 2021",
      "href": "/listing-stay-detail/" + stay.pid + "?poid=" + stay.portions_ids+"#days="+stay.agent_ids,
      "listingCategoryId": 10,
      "title": stay.display_title,
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
      "address": stay.pstate+', '+stay.pcountry,
      "city": stay.pcity,
      "reviewStart": stay.ratings,
      "reviewCount": 0,
      "price": "\u20AC" + stay.final_price,
      "maxGuests": stay.tnopeople,
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
        "name": stay.propertytypename,
        "href": "archive-stay/the-demo-archive-slug",
        "thumbnail": "http://dummyimage.com/300x300.png/dddddd/000000",
        "count": 1945,
        "taxonomy": "category",
        "listingType": "stay"
      }
    };
    // console.log('this is the stay dat', stay);
    if (datafetchstatus != 0) {
      return <StayCard key={dummy.id} data={dummy} />;
    }
  };

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
    //alert(newoff)
    setCurrentPage(newoff);
    window.scroll({ top: 700, left: 0, behavior: 'smooth' })
  };
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
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
     

      <div className="mb-8 lg:mb-11">
        <TabFilters data={property_typefilter}/>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
        {currentPosts.map((currentPosts) => renderCard(currentPosts))}
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
      <div className="flex mt-16 justify-center items-center">
        <nav aria-label="Page navigation comments" class="mt-4">
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
        </nav>
      </div>
    </div>
  );
};

export default SectionGridFilterCardType;
