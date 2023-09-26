import { Tab } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { FC, Fragment, useEffect, useState } from "react";
import visaPng from "images/vis.png";
import mastercardPng from "images/mastercard.svg";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import Label from "components/Label/Label";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import StartRating from "components/StartRating/StartRating";
import NcModal from "shared/NcModal/NcModal";
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "../../actions/index";
import StayDatesRangeInput from "components/HeroSearchForm/StayDatesRangeInput";
import moment from "moment";
import useWindowSize from "hooks/useWindowResize";
import GuestsInput from "components/HeroSearchForm/GuestsInput";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Cookies from 'universal-cookie';
import Select from "shared/Select/Select";
import { Dialog, Transition } from "@headlessui/react";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import "./otpstyle.css"
import $ from "jquery";
import { off } from "process";
import jwt_decode from "jwt-decode";
const cookies = new Cookies();
export interface CheckOutPageProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const CheckOutPage: FC<CheckOutPageProps> = ({ className = "" }) => {
  const [propertyinfo, setpropertyinfo] = useState([])
  const [defalutimage, setdefalutimage] = useState([])
  const [countrydata, setcountrydata] = useState([])
  const [phonenumber, setphonenumber] = useState([])
  const [countrycode, setcountry] = useState([])
  const [booking,setbooking]=useState([])

  function handleCallbackResponse(response)
  {
   console.log(response.credential);
   let obj = jwt_decode(response.credential)
   console.log(obj)
   
   let url = 'https://admin.vacationsaga.com/api/travellergooglelogin?name=' + obj.name + '&email=' + obj.email;
    let res = fetch(url).then(data => data.json()).then(data => {
      const cookies = new Cookies();
cookies.set('travellerid',data);
//cookies.remove('ownerid');
//window.location="account-traveller";
window.location.reload();
    }).catch(e => { console.log(e) })
  }


  useEffect(()=>{
    single_property()
    CountryApiData()
    bookingdate()
    google.accounts.id.initialize({
      client_id:"843338204450-unpb8d9if6fbkipvmrhi9b8krvn52678.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("signindiv"),
      {theme:"outline",size:"large"}
    )
   }, [])
  var urloc = window.location.pathname;
        var parts = urloc.split("/");
        var last_part = parts[parts.length-1];
  
    var value=last_part;
  function single_property()
  {
    var url = 'https://admin.vacationsaga.com/api/single_portion/'+value;
    var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        let info=[];
        data.map((item)=>{
        //info.push({pdid: item.pdid,portiontitle:item.portiontitle,nobeds:item.nobeds,nobath:item.nobath,photos:item.photo1});
     // console.log('setinfo' + item.photo1)
     setdefalutimage(item.photo1)
        })
        setpropertyinfo(data);
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  function bookingdate()
    {
      
      
        let url = 'https://admin.vacationsaga.com/api/booking_detail/'+value;
        let res = fetch(url).then(data => data.json()).then(data => {
         setbooking(data)
        }).catch(e=>{console.log(e)})
    }
  function CountryApiData()
  {
    var url = 'https://admin.vacationsaga.com/api/country_api';
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setcountrydata(data);
        console.log('country data', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  
  const [message, setmessage] = useState([])
  const [mystyle, setstyle] = useState([])

function handleClick(event) {
	event.preventDefault();
    const data = new FormData(event.target);
   // let phone=$("#phone").val();
    //let country = $('#country :selected').val();
    //setcountry(country)
    //setphonenumber(phone)
	let phone=$("#email").val();
	setphonenumber(phone)
    // Send data to the backend via POST
   let url = fetch('https://admin.vacationsaga.com/api/otp_login', {  // Enter your IP address here

      method: 'POST', 
      mode:'cors',
      body: data
     
    }).then((response) => response.json())
    .then((responseJson) => {
      
      openModalPricelist()
      //alert(responseJson);
      if(responseJson==1)
      {
        
      }
      else
      {
      
cookies.set('travellerid',responseJson);
//window.location="account";
      }
    })
    .catch((error) => {
      console.error(error);
     
    });
  }

  function bookingconfirm(event)
  {
    event.preventDefault();
      const data = new FormData(event.target);
      let url = fetch('https://admin.vacationsaga.com/api/bookingconfirm', {  // Enter your IP address here
  
        method: 'POST', 
        mode:'cors',
        body: data
       
      }).then((response) => response.json())
      .then((responseJson) => {
      if(responseJson==101)
      {
          var portion_id=$("#portion_id").val();
        window.location='/pay-done/'+portion_id;
      }
      })
      .catch((error) => {
        
      });
  }
  
  function submitotp(event) {
    event.preventDefault();
      const data = new FormData(event.target);
     
     let url = fetch('https://admin.vacationsaga.com/api/submit_otp', {  // Enter your IP address here
  
        method: 'POST', 
        mode:'cors',
        body: data
       
      }).then((response) => response.json())
      .then((responseJson) => {
        
        openModalPricelist()
        //alert(responseJson);
        if(responseJson==404)
        {
          let msg='Invalid OTP';
          setmessage(msg);
          let mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial"
          };
          setstyle(mystyle)
        }
        else
        {
        
  cookies.set('travellerid',responseJson);
  window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
        let msg='Oops error';
          setmessage(msg);
          let mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial"
          };
          setstyle(mystyle)
      });
    }

  const windowSize = useWindowSize();

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

  var urloc1 = window.location.href;
  //var parts1 = urloc1.split("?");
  var finaldays1 = urloc1.substr(urloc1.indexOf("?") +1)
  //alert(myString);
  var array = finaldays1.split('#');
  //var finaldays=array[0]
  //const mystate = useSelector((state)=> state.ChangeTheNumber);
  

  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(array[2]),
    endDate: moment(array[3]),
  });

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
    let amountportion=array[1];
    let sumportion=amountportion * finaldays

    let [isOpenModalPricelist, setIsOpenModalPricelist] = useState(false);
    function closeModalPricelist() {
      setIsOpenModalPricelist(false);
    }
    function openModalPricelist() {
      setIsOpenModalPricelist(true);
    }
    $(document).ready(function() {
     // alert(cookies.get('travellerid'))
      if(cookies.get('travellerid')==undefined || cookies.get('travellerid')=='')
      {
        $("#login_div_without_login").show();
        $("#with_login").hide();
      }
      else{
       $("#with_login").show();
       $("#login_div_without_login").hide();
      }
  });
    const renderMotalPricelist = () => {
      let otpstyle={
        'margin-bottom': '35px',
      }
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
                  <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-half">
                    <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                      <h3
                        className="text-lg font-medium leading-6 text-gray-900"
                        id="headlessui-dialog-title-70"
                      >
                       Confirm your number
                      </h3>
                      <span className="absolute left-3 top-3">
                        <ButtonClose onClick={closeModalPricelist} />
                      </span>
                    </div>
                    <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                   <form  method="post" onSubmit={submitotp}>
                    <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                <br/>
              Enter the code we've sent via email {phonenumber}:
        <br/>
              </span>
              <Input type="text" id="partitioned" required name='otp' maxlength="4" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==4) return false;" className="location-search-input block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate" />
               <input type='hidden' name='country' value={countrycode}></input>
               <input type='hidden' name='phone' value={phonenumber}></input>
            </label>
            <br/>
            <span style={mystyle}>{message}</span>
            <ButtonPrimary style={otpstyle} type="submit">Continue</ButtonPrimary>
            <br/>
            </form>
                    </div>
                   
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      );
    };
    let sumportions
    let nightormonthly
    let addays
    if(array[4]=='night')
    {
      nightormonthly='night'
      sumportions=parseInt(sumportion)
      addays=3
    }
    else{
      nightormonthly='monthly'
      sumportions=parseInt(amountportion)
      addays=31
    }
  const renderSidebar = () => {
   
   let dd='https://admin.vacationsaga.com/public/images/portion/'+defalutimage+'?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
   let stylediv={
    'width':'100%',
   }
   let stylespan={
    'float':'right'
   }
   return (
     
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        { propertyinfo.map((item)=>(
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <img src={dd} />
            </div>
          </div>
          <div className="py-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                {item.portiontitle} 
              </span>
            </div>
            <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
              {item.nobeds} beds · {item.nobath} baths
            </span>
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
            <StartRating />
          </div>
        </div>
        ))}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">Price detail</h3>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            
           

            {(() => {
          if(nightormonthly=='night')
          {
           return(
            <div style={stylediv}>
            <span>{'\u20AC'}{amountportion} x {finaldays} night </span>
            <span style={stylespan}>{'\u20AC'}{sumportions.toFixed(2)}</span>
            </div>
            )
          }
          else
          {
            return(
              <div style={stylediv}>
              <span>{'\u20AC'}{amountportion} ({nightormonthly})   </span>
              <span style={stylespan}>{'\u20AC'}{sumportions.toFixed(2)}</span>
            </div>
            )
          }
        })()}

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
      </div>
    
    );
  };

  const renderMain = () => {
    var arrdisabledate = booking
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Confirm and payment 
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <form method="post" onSubmit={bookingconfirm}>
          <input type='hidden' name='portion_amount' value={amountportion}></input>
          <input type='hidden' name='total_amount' value={sumportion.toFixed(2)}></input>
          <input type='hidden' name='days' value={finaldays}></input>
          <input type='hidden' name="portion_id" id="portion_id" value={value}></input>
          <input type='hidden' name="traveler_id" value={cookies.get('travellerid')}></input>
        <div>
          <div>
            <h3 className="text-2xl font-semibold">Your trip</h3>
            <NcModal
              renderTrigger={(openModal) => (
                <span
                  onClick={() => openModal()}
                  className="block lg:hidden underline  mt-1 cursor-pointer"
                >
                  View booking details
                </span>
              )}
              renderContent={renderSidebar}
            />
          </div>
          <div className="mt-6 border border-neutral-200 dark:border-neutral-700 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200 dark:divide-neutral-700">
            <div className="flex-1 flex justify-between space-x-5">
              <div className="flex flex-col">
               
                <StayDatesRangeInput
            wrapClassName="divide-x divide-neutral-200 dark:divide-neutral-700"
            onChange={(date) => setSelectedDate(date)}
            numberOfMonths={1}
            fieldClassName="p-5"
            defaultValue={selectedDate}
            anchorDirection={windowSize.width > 600 ? "left" : "right"}
            arrdisabledate={arrdisabledate}
            minimumNights={addays}
          />
              </div>
              <PencilAltIcon className="w-6 h-6 text-neutral-300 dark:text-neutral-6000" />
            </div>
            <div className="flex-1 flex justify-between space-x-5">
              <div className="flex flex-col">
               
              <GuestsInput
            fieldClassName="p-5"
            defaultValue={{
              guestAdults: 1,
              guestChildren: 0,
              guestInfants: 0,
            }}
          />
              </div>
              <PencilAltIcon className="w-6 h-6 text-neutral-300 dark:text-neutral-6000" />
            </div>
          </div>
        </div>

        
        <div className="pt-4" id="with_login">
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
                    <ButtonPrimary>Confirm</ButtonPrimary>
                    )
                  }
                  })()}
                  </div>
        </form>
                  <div id='login_div_without_login'>
                  <div className="grid gap-3">
                    <h3>Log in or sign up to book</h3>
            {/*loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))*/}
             <center><div id="signindiv"></div></center>
          </div>
          {/* OR */}
                  <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={handleClick}>
           { /*<label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Country/Region
              </span>
              <Select name="country" id='country' required className="mt-1.5">
                 <option value=''>--Select--</option>
                { countrydata.map((item1)=>(
                  <option value={item1.phonecode} >{item1.country_name}(+{item1.phonecode})</option>
                ))}
                  </Select>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Phone Number
               
              </span>
              <Input type="number" id='phone' required name='phone' maxLength='12' className="mt-1" />
            </label>*/}
           <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Enter Email
               
              </span>
              <Input type="email" id='email' required name='email' className="mt-1" />
            </label>
            <ButtonPrimary  type="submit">Continue</ButtonPrimary>
            
          </form>
          {renderMotalPricelist()}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
        <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
      </main>
    </div>
  );
};

export default CheckOutPage;
