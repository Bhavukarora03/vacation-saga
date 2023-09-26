import React, { FC, Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import CommentListing from "components/CommentListing/CommentListing";
import FiveStartIconForRate from "components/FiveStartIconForRate/FiveStartIconForRate";
import GuestsInput from "components/HeroSearchForm/GuestsInput";
import StayDatesRangeInput from "components/HeroSearchForm/StayDatesRangeInput";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import StartRating from "components/StartRating/StartRating";
import GoogleMapReact from "google-map-react";
import useWindowSize from "hooks/useWindowResize";
import moment from "moment";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonCircle from "shared/Button/ButtonCircle";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import Input from "shared/Input/Input";
import NcImage from "shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import ModalPhotos from "./ModalPhotos";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import {Link} from "react-router-dom";
import SectionGridFeatureProperty from "./SectionGridFeatureProperty";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "../../actions/index";
import SectionGridPortionsPlaces from "./SectionGridPortionsPlaces";
import Cookies from 'universal-cookie';
import NavItem from "shared/NavItem/NavItem";
import { iteratorSymbol } from "immer/dist/internal";
export interface ListingStayDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}
const cookies = new Cookies();

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([])
  const [ameneties, setAmenities] = useState([])
  const [propertyinfo, setpropertyinfo] = useState([])
  const [poinfo, setpodetail] = useState([])
  const [prichart , setprichart] = useState([])
  const [potype,setpotype]=useState([])
  const [specialnotess,setspecialnotes]=useState([])
  
//alert(potype)
  var urloc = window.location.pathname;
      var parts = urloc.split("/");
      var last_part = parts[parts.length-1];
	var value=last_part;

  const [openFocusIndex, setOpenFocusIndex] = useState(0);
  var urloc3 = window.location.href;  
  var parts1 = urloc3.split("#days=");
  var last_part1 = parts1[parts1.length-1];
var value1=last_part1;
  let adddays
  if(value1=='null')
  {
    adddays=3
  }
  else{
    adddays=31
  }
  
  console.log(adddays)

  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(adddays, "days"),
  });
  //alert(selectedDate)
  const [ProfileImages, setProfileImages]=useState([])
  useEffect(()=>{
	 getImages()
	 getAmenities()	 
   single_property()
   podetail()
   onloadwork()
   getportionpricings()
   bookingdate()
   specialnotes()
  }, [])
  
  //console.log(selectedDate.endDate);
  let checkenddat=selectedDate.endDate;
  //console.log(checkenddat);
  let finaldays=0;
  if(checkenddat==null)
  {
     finaldays=0;
  }
  else
  {
  let days = (selectedDate.endDate - selectedDate.startDate) / (1000 * 60 * 60 * 24);

    finaldays= Math.round(days);
  }
   //console.log(!isNaN(parseInt(finaldays)))
  async function getImages(){
	  var url = 'https://admin.vacationsaga.com/api/properties_image/'+value;
	  var response = fetch(url).then(data=> data.json())
	  response.then((data)=>{
		 
		  if(data.length){
			  let dummyArray = []
			 data.map((item)=>{
				  dummyArray.push(""+item.path+""+item.pimage+"?auto=compress&cs=tinysrgb&dpr=3&h=auto&w=1260",)
			  })
			  setImages(dummyArray)
			 console.log('hello images');
		  }
	  }).catch(e=>{
		  console.log(e)
	  }).finally(()=>{
		  
	  })
  }

   function specialnotes(){
	  var url = 'https://admin.vacationsaga.com/api/specialnotes/'+value;
	  var response = fetch(url).then(data=> data.json())
	  response.then((data)=>{
		 
		  if(data.length){
			 
			  setspecialnotes(data)
			 
		  }
	  }).catch(e=>{
		  console.log(e)
	  }).finally(()=>{
		  
	  })
  }

  function getAmenities(){
	  
	  let url = 'https://admin.vacationsaga.com/api/properties_aminities/'+value;
	  let response = fetch(url).then(data=> data.json())
	  response.then((data)=>{
		 
		 if(data.length){
			 let dA = [];
			 data.map((item)=>{
				 dA.push({ name: item.amenityname, icon: "<i class='las la-check-circle text-lg'></i>" })
			 })
			 setAmenities(dA);
       console.log('hello amenities');
		 }
		 
	  }).catch(e=>{
		  console.log(e)
	  })
  }

  function single_property()
  {
    var url = 'https://admin.vacationsaga.com/api/single_property/'+value;
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        let info=[];
        data.map((item)=>{
        info.push({pdid:item.pdid,propertytitle:item.propertytitle,pstate:item.pstate,pcountry:item.pcountry,ownername:item.name,propertydetal:item.pdiscription,adve_date:item.adve_date,latitude:item.latitude,longitude:item.longitude,ownerdiscription:item.ownerdiscription,speakl:item.speakl,ratings:item.ratings,display_title:item.display_title,agent_ids:item.agent_ids,photo:item.photo,accountmangaer:item.accountmangaer});
        //console.log('setinfo' + item.pdid)
        setpotype(item.agent_ids)
        setProfileImages(item.photo)  
        })
        setpropertyinfo(info);
        //console.log('hello property info');
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  
  function podetail()
  {
    var url = 'https://admin.vacationsaga.com/api/podetail/'+value;
	  var response = fetch(url).then(data=> data.json())
  
    response.then((data)=>{
     // alert(data.checkin);
      //if(data.length){
        let info=[];
       // data.map((item)=>{
          //alert(item.checkin)
        info.push({Check_In:data.checkin,Check_Out:data.checkout,Minimum_Stay:data.minimumstay,Maximum_Stay:data.maximumstay});
        //console.log('checkin' + data.checkin)
      //  })
        setpodetail(info);
        console.log('hello property details');
     // }
    }).catch(e=>{
      console.log(e)
    })
  }

 // const mystate = useSelector((state)=> state.ChangeTheNumber);
  const [poprice, setpoprice] = useState([0])
 // alert(poprice)
  const [poid, setpoid] = useState([])
  
  const [popricing, setpopricing] = useState([])

  let amountportion=poprice;
  let sumportion=amountportion * finaldays

  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
    useState<FocusedInputShape>("startDate");
  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);
  let [isOpenModalPricelist, setIsOpenModalPricelist] = useState(false);
  const [singleportion, setsingleportion]=useState([])
  const windowSize = useWindowSize();
  const [booking,setbooking]=useState([])
  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34;
    }
    if (windowSize.width <= 500) {
      return undefined;
    }
    if (windowSize.width <= 1280) {
      return 56;
    }
    return 48;
  };

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  function closeModalPricelist() {
    setIsOpenModalPricelist(false);
  }

  function openModalAmenities() {
    setIsOpenModalAmenities(true);
  }
  function openModalPricelist() {
    setIsOpenModalPricelist(true);
  }

  

  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };

  const handleCloseModal = () => setIsOpen(false);
  const myotherportionstyle={
    'background-color':'#fff',
    
  }
  const getportionpricings = () => {
    var urloc1 = window.location.href;  
  var parts1 = urloc1.split("?poid=");
  var last_part1 = parts1[parts1.length-1];
  let aa1=last_part1.split('#');
  //alert(aa1[0])
    let url = 'https://admin.vacationsaga.com/api/portion_pricing/'+aa1[0];
    let res = fetch(url).then(data => data.json()).then(data => {
     setpopricing(data)
    }).catch(e=>{console.log(e)})
  }
  function onloadwork()
  {
  var urloc = window.location.href;  
  var parts = urloc.split("?poid=");
  var last_part = parts[parts.length-1];
  let aa=last_part.split('#');
  //alert(aa[0])
    let url = 'https://admin.vacationsaga.com/api/single_portion/'+aa[0];
    let res = fetch(url).then(data => data.json()).then(data => {
      setsingleportion(data)
      console.log('portion',data)
      data.map((item)=>(
        cookies.set('tguest',item.tnopeople)
        ))
        data.map((item)=>(
          cookies.set('tchild',item.tnochild)
        //  alert(item.tnochild)
          ))
          data.map((item)=>(
            setpoid(item.portionid)
            ))
      
    }).catch(e=>{console.log(e)})
    let om = selectedDate.startDate
    let lom=selectedDate.endDate
   // var sting=om
   
    var fromdate = moment(om, "DD.MM.YYYY").format("YYYY-MM-DD");
    var todate = moment(lom, "DD.MM.YYYY").format("YYYY-MM-DD");
    let sting= aa[0]+','+ fromdate +','+ todate
    
    let url1 = 'https://admin.vacationsaga.com/api/dynamic_rate/'+sting;
    let res1 = fetch(url1).then(data => data.json()).then(data => {
     
     // data.map((item)=>(
        setpoprice(data.mausi)
        
      //  ))
      
    }).catch(e=>{console.log(e)})

    
  }
    function runtemp()
    {
      var urloc = window.location.href;  
  var parts = urloc.split("?poid=");
  var last_part = parts[parts.length-1];
  let aa=last_part.split('#');
      let om = selectedDate.startDate
      let lom=selectedDate.endDate
      //var sting=om
      var fromdate = moment(om, "DD.MM.YYYY").format("YYYY-MM-DD");
      var todate = moment(lom, "DD.MM.YYYY").format("YYYY-MM-DD");
      let sting= aa[0]+','+ fromdate +','+ todate
    //  alert(sting)
      let url1 = 'https://admin.vacationsaga.com/api/dynamic_rate/'+sting;
      let res1 = fetch(url1).then(data => data.json()).then(data => {
     //  alert(data.mausi)
       setpoprice(data.mausi)
       
      }).catch(e=>{console.log(e)})

      let url3 = 'https://admin.vacationsaga.com/api/dynamic_rate_chart/'+sting;
      let res3 = fetch(url3).then(data => data.json()).then(data => {
     //  alert(data.mausi)
       setprichart(data)
        
      }).catch(e=>{console.log(e)})
    }
    function bookingdate()
    {
      
      var urloc1 = window.location.href;  
      var parts1 = urloc1.split("?poid=");
      var last_part1 = parts1[parts1.length-1];
      let aa1=last_part1.split('#');
      //alert(aa1[0])
        let url = 'https://admin.vacationsaga.com/api/booking_detail/'+aa1[0];
        let res = fetch(url).then(data => data.json()).then(data => {
         setbooking(data)
        }).catch(e=>{console.log(e)})
    }
  const renderSection1 = () => {
    let imgu
     if(ProfileImages==null || ProfileImages=="")
     {
      imgu='https://vacationsaga.com/img/about_img/avatars.jpg';
     }
     else
     {
      imgu='https://admin.vacationsaga.com/public/images/owner/'+ProfileImages;
     }
    let managerstyle={
      'position':' absolute',
    'left':'128px',
     }
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
        { propertyinfo.map((item)=>(
          // setpotype(item.agent_ids),
          <Badge name={'VS '+item.pdid} />
          ))}
          <LikeSaveBtns />
        </div>

        {/* 2 */}
       { propertyinfo.map((item)=>(
     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold " > {item.display_title} </h2>
    ))}
       

        {/* 3 */}
        <div className="flex items-center space-x-4">
        { propertyinfo.map((item1)=>(
          <StartRating point={item1.ratings}/>
          ))}
          <span>
            <i className="las la-map-marker-alt"></i>
            { propertyinfo.map((item)=>(
            <span className="ml-1"> {item.pstate}, {item.pcountry}</span>
            ))}
          </span>
        </div>

        {/* 4 */}
        
        <div className="flex items-center">
          <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" imgUrl={imgu} />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{" "}
            { propertyinfo.map((item)=>(
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              {item.ownername}  
            </span>
             ))}
          </span>
          
          <span style={managerstyle}>
          <br/><br/>
            { propertyinfo.map((item)=>(
              
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              {(() => {
                if (item.accountmangaer!=undefined) {
                  return (
            <div><span>Account Manager - {item.accountmangaer} </span></div>  
             )
  }})()}
            </span>
             
             ))}
          </span>
        </div>

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        { singleportion.map((itemm)=>(
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
        
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              {itemm.tnopeople} <span className="hidden sm:inline-block">guests</span>
            </span>
          </div>
        
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              {itemm.nobeds} <span className="hidden sm:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              {itemm.nobath} <span className="hidden sm:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              {itemm.noofrooms} <span className="hidden sm:inline-block">bedrooms</span>
            </span>
          </div>
           
        </div>
         ))}
      </div>
    );
  };
  
  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Stay information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
        { propertyinfo.map((item)=>(
          <span>
           {item.propertydetal.replace(/<\/?[^>]+(>|$)/g, "")}
          </span>
           ))}
         
          
         
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Amenities </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            About the property's amenities and services
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {ameneties.filter((_, i) => i < 12).map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              <i class="las la-check-circle text-lg"></i>
              <span className=" ">{item.name}</span>
            </div>
          ))}
        </div>

        {/* ----- */}
        <div className="w-14 border-b border-neutral-200"></div>
        <div>
          <ButtonSecondary onClick={openModalAmenities}>
            View more {ameneties.length} amenities
          </ButtonSecondary>
        </div>
        {renderMotalAmenities()}
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full">
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {ameneties.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center py-6 space-x-8"
                      >
                        <i class="las la-check-circle text-lg"></i>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderMotalPricelist = () => {
    return (
      <Transition appear show={isOpenModalPricelist} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalPricelist}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full">
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Price List
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalPricelist} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {prichart.filter((_, i) => i < 1212).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center py-6 space-x-8"
                      >
                        <span>{item.pricedate} - {'\u20AC'}{item.price}</span>
                       
                      </div>
                    ))}
                   
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };
  
  const renderSection4 = () => {
    
    const mypoprice = {
      'border-bottom': 'solid 1px #ccc',
    }
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Price Chart </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}
        <div className="flow-root">
          <div className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 -mb-4">
          
          { popricing.map((item)=>(
            
            <div className="p-4  flex justify-between items-center space-x-4 rounded-lg" style={mypoprice}>
              <span>{item.start_date ? item.start_date : `Regular Price`} - {item.end_date}</span>
              <span>{'\u20AC'}{item.priceforanc}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  };

  const renderSectionCheckIndate = () => {
    
    //alert(booking)
    var arrdisabledate = booking
    return (
      <div className="listingSection__wrap overflow-hidden">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Availability</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* CONTENT */}

        <div className="listingSection__wrap__DayPickerRangeController flow-root">
          <div className="-mx-4 sm:mx-auto xl:mx-[-22px]">
           
            <DayPickerRangeController
              startDate={selectedDate.startDate}
              endDate={selectedDate.endDate}
              onDatesChange={(date) => setSelectedDate(date)}
              focusedInput={focusedInputSectionCheckDate}
              onFocusChange={(focusedInput) =>
                setFocusedInputSectionCheckDate(focusedInput || "startDate")
              }
              initialVisibleMonth={null}
              numberOfMonths={windowSize.width < 1280 ? 1 : 2}
              daySize={getDaySize()}
              hideKeyboardShortcutsPanel={false}
              minDate={moment()}
              minimumNights={adddays}
             
                isDayBlocked={(date) => {
                    if (moment(date).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')) {
                        return false;
                    }
                    if (moment(date) < moment()) {
                        return true;
                    }
                    if(arrdisabledate.indexOf(moment(date).format('DD-MM-YYYY')) > -1)
                    {
                     // alert(moment(date).format('DD-MM-YYYY'))
                      return true;
                    }
                }}
            />
           
          </div>
        </div>
      </div>
    );
  };
 let lstyle={
  'padding-right': '17px',
 }
  const renderSection5 = () => {
    let imgu
     if(ProfileImages==null || ProfileImages=="")
     {
      imgu='https://vacationsaga.com/img/about_img/avatars.jpg';
     }
     else
     {
      imgu='https://admin.vacationsaga.com/public/images/owner/'+ProfileImages;
     }
    return (
      
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Host Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
       
        {/* host */}
        <div className="flex items-center space-x-4">
          <Avatar
            hasChecked
            hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
            sizeClass="h-14 w-14"
            radius="rounded-full"
            imgUrl={imgu}
          />
           { propertyinfo.map((item)=>(  
          <div>
            <a className="block text-xl font-medium" href="##">
              {item.ownername} 
            </a>
            
          </div>
          ))}
        </div>

        {/* desc */}
        { propertyinfo.map((item)=>( 
        <span className="block text-neutral-6000 dark:text-neutral-300">
        {item.ownerdiscription}
        </span>
        ))}
        {/* info */}
        <div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
           
            { propertyinfo.map((item)=>(
            <span>Joined in {item.adve_date}</span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>Response rate - 100%</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Fast response - within a few hours</span>
          </div>
          <div>
          <i class="las la-language text-lg" style={lstyle}></i>
          { propertyinfo.map((item1)=>(
            <span >{item1.speakl} </span>
          ))}
          </div>
        </div>

        {/* == */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
     
      </div>
       
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* Content */}
        <div className="space-y-5">
          <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
          <div className="relative">
            <Input
              fontClass=""
              sizeClass="h-16 px-4 py-3"
              rounded="rounded-3xl"
              placeholder="Share your thoughts ..."
            />
            <ButtonCircle
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size=" w-12 h-12 "
            >
              <ArrowRightIcon className="w-5 h-5" />
            </ButtonCircle>
          </div>
        </div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  const renderSection7 = () => {
    propertyinfo.map((itemm)=>(
      console.log(parseFloat(itemm.latitude))
    ))
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
         
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
          <div className="rounded-xl overflow-hidden">
          { propertyinfo.map((itemm)=>(
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDG4M9odJ4yoPHJc5V5clWJP4Ys7wkS3lI",
              }}
              defaultZoom={10}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{
                lat: parseFloat(itemm.latitude),
                lng: parseFloat(itemm.longitude),
              }}
            >
                 
              <LocationMarker lat={parseFloat(itemm.latitude)} lng={parseFloat(itemm.longitude)} />
              
            </GoogleMapReact>
  ))}
          </div>
        </div>
      </div>
    );
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Refund 50% of the booking value when customers cancel the room
            within 48 hours after successful booking and 14 days before the
            check-in time. <br />
            Then, cancel the room 14 days before the check-in time, get a 50%
            refund of the total amount paid (minus the service fee).
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Check-in time</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
          
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Check-in</span>
              { poinfo.map((item)=>( 
              <span>{item.Check_In}</span>
              ))}
            </div>
            <div className="flex space-x-10 justify-between p-3">
              <span>Check-out</span>
              { poinfo.map((item)=>( 
              <span>{item.Check_Out}</span>
              ))}
            </div>
           
          </div>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Special Note</h4>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
            
            { specialnotess.map((itemss)=>(
              <li>{itemss.ttr_value}</li>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
      
    );
  };
  
  const renderSidebar = () => {
   //alert('ok');
    let arrdisabledate=booking
    let nightormonthly
    let sumportions
    if(potype==null)
    {
      nightormonthly='night'
      sumportions=parseInt(sumportion)
    }
    else{
      nightormonthly='monthly'
      sumportions=parseInt(amountportion)
    }
    return (
      
      <div onClick={runtemp} className="listingSection__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
          {'\u20AC'}{amountportion}
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /{nightormonthly}
            </span>
          </span>
          { propertyinfo.map((item)=>(
          <StartRating point={item.ratings}/>
          ))}
        </div>

        {/* FORM */}
        <form  className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <StayDatesRangeInput
            wrapClassName="divide-x divide-neutral-200 dark:divide-neutral-700"
            onChange={(date) => setSelectedDate(date)}
            numberOfMonths={1}
            fieldClassName="p-5"
            defaultValue={selectedDate}
            anchorDirection={windowSize.width > 1400 ? "left" : "right"}
            arrdisabledate={arrdisabledate}
            minimumNights={adddays}
          />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInput
            fieldClassName="p-5"
            defaultValue={{
              guestAdults: 1,
              guestChildren: 0,
              guestInfants: 0,
            }}
          />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          {(() => {
          if(nightormonthly=='night')
          {
           return(
            <span>{'\u20AC'}{amountportion} x {finaldays}  <i onClick={openModalPricelist} class="las la-info-circle text-lg"></i></span>
           )
          }
          else
          {
            return(
              <span>{'\u20AC'}{amountportion} ({nightormonthly})</span>
            )
          }
        })()}
            <span>{'\u20AC'}{sumportions.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>{'\u20AC'}0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{'\u20AC'}{sumportions.toFixed(2)}</span>
          </div>
        </div>
        {renderMotalPricelist()}
        {/* SUBMIT */}
        {(() => {
          if(finaldays==0)
          {
           return(
            <span className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Select Date</span>
           )
          }
          else
          {
           return (
        <Link to={`/checkout/${poid+"?"+finaldays+"#"+amountportion+"#"+fromdate+"#"+todate+"#"+nightormonthly}`} className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" >Reserve</Link>
        )
      }
      })()}
        </div>
      
    );
  };
  let om = selectedDate.startDate
  let lom=selectedDate.endDate
 // var sting=om
 
  var fromdate = moment(om, "DD.MM.YYYY").format("YYYY-MM-DD");
  var todate = moment(lom, "DD.MM.YYYY").format("YYYY-MM-DD");
  //let arrdisabledate=booking
    let nightormonthly
    let sumportions
    if(potype==null)
    {
      nightormonthly='night'
      sumportions=sumportion
    }
    else{
      nightormonthly='monthly'
      sumportions=amountportion
    }
  return (
    <div
      className={`nc-ListingStayDetailPage  ${className}`}
      data-nc-id="ListingStayDetailPage"
    >
      {/* SINGLE HEADER */}
      <>
        <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(0)}
            >
              <NcImage
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={images[0]}
                prevImageHorizontal
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {images.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ""}
                  prevImageHorizontal
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>
        {/* MODAL PHOTOS */}
        <ModalPhotos
          imgs={images}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
        />
      </>

      {/* MAIn */}
      <main className="container mt-11 flex ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          <div className="relative">
            <h2 class="text-2xl font-semibold">House Unit</h2>
            <br></br>
          <SectionGridFeatureProperty />
        </div>
          {renderSectionCheckIndate()}
          <div className="relative">
          <h2 class="text-2xl font-semibold">Property Other Portion</h2>
          <br></br>
          <SectionGridPortionsPlaces />
        </div>
          {renderSection2()}
          {renderSection3()}
          {renderSection4()}
          {renderSection5()}
          {renderSection7()}
          {renderSection8()}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow">
          <div className="sticky top-24">{renderSidebar()}</div>
        </div>
      </main>

      {/* STICKY FOOTER MOBILE */}
      
      {!isPreviewMode && (
        <div className="block lg:hidden fixed bottom-0 inset-x-0 py-4 bg-white text-neutral-900 border-t border-neutral-200 z-20">
          <div className="container flex items-center justify-between">
            <span className="text-2xl font-semibold">
            {'\u20AC'}{amountportion}
              <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
                /{nightormonthly}
              </span>
            </span>
            {(() => {
          if(finaldays==0)
          {
           return(
            <span className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Select Date</span>
           )
          }
          else
          {
           return (
            <Link to={`/checkout/${poid+"?"+finaldays+"#"+amountportion+"#"+fromdate+"#"+todate+"#"+nightormonthly}`} className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Reserve</Link>
            )
          }
          })()}
            </div>
        </div>
      )}

      {/* OTHER SECTION */}
      {!isPreviewMode && (
        <div className="container py-24 lg:py-32">
          {/* SECTION 1 */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderNewCategories
              heading="Explore by types of stays"
              subHeading="Explore houses based on 5 types of stays"
              categoryCardType="card5"
              itemPerRow={5}
              sliderStyle="style2"
            />
          </div>

          
        </div>
      )}
    </div>
  );
};

export default ListingStayDetailPage;
