import React, { FC,Fragment,useState,useEffect } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Select from "shared/Select/Select";
import { Dialog, Transition } from "@headlessui/react";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import "./otpstyles.css"
import $ from "jquery";
import jwt_decode from "jwt-decode";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export interface PageSignUpProps {
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
//const navigate = NavLink();

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const [message, setmessage] = useState([])
  const [mystyle, setstyle] = useState([])
  const [countrydata, setcountrydata] = useState([])
  const [leaddata, setleaddata] = useState([])
  const [phonenumber, setphonenumber] = useState([])
  const [countrycode, setcountry] = useState([])
  const [ownername, setname] = useState([])
  const [ownerphone, setphone] = useState([])
  const [ownercode, setcode] = useState([])
  const [owneremail, setemail] = useState([])
  var urloc = window.location.pathname;
      var parts = urloc.split("/");
      var last_part = parts[parts.length-1];
	var value=last_part;
	//alert(value);
  useEffect(()=>{
    CountryApiData();
	Leadinfo();
    google.accounts.id.initialize({
      client_id:"843338204450-unpb8d9if6fbkipvmrhi9b8krvn52678.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("signindiv"),
      {theme:"dark",size:"large"}
    )
   }, [])
   let [isOpenModalPricelist, setIsOpenModalPricelist] = useState(false);
   function closeModalPricelist() {
     setIsOpenModalPricelist(false);
   }
   function openModalPricelist() {
     setIsOpenModalPricelist(true);
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
  function Leadinfo()
  {
  
    var url = 'https://admin.vacationsaga.com/api/leadinfo/'+value;
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
	setname(data.name);
	setemail(data.email);
	setphone(data.phno);
	setcode(data.phcode);
      if(data.length){
        setleaddata(data);
        console.log('lead-data', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }
var url='';
function handleClick(event) {
	event.preventDefault();
  let phone=$("#phone").val();
  let country = $('#country :selected').val();
  setcountry(country)
  setphonenumber(phone)
    const data = new FormData(event.target);
    
    // Send data to the backend via POST
   var url = fetch('https://admin.vacationsaga.com/api/do_owner_registerwithlead', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: data // body data type must match "Content-Type" header
     
    }).then((response) => response.json())
    .then((responseJson) => {
      //alert(responseJson);
      if(responseJson==1)
      {
        let msg='Email Already Registered With Us!';
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
        openModalPricelist()
      //const cookies = new Cookies();
//cookies.set('ownerid',responseJson);
//window.location="phone-verification";
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

  function submitotp(event) {
    event.preventDefault();
      const data = new FormData(event.target);
     
     let url = fetch('https://admin.vacationsaga.com/api/submit_otpforowner', {  // Enter your IP address here
  
        method: 'POST', 
        mode:'cors',
        body: data
       
      }).then((response) => response.json())
      .then((responseJson) => {
        
      //  openModalPricelist()
        //alert(responseJson);
        if(responseJson==1)
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
        
  cookies.set('ownerid',responseJson);
  window.location='account-settings';
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

    function handleCallbackResponse(response)
  {
   console.log(response.credential);
   let obj = jwt_decode(response.credential)
   console.log(obj)
   
   let url = 'https://admin.vacationsaga.com/api/ownergooglelogin?name=' + obj.name + '&email=' + obj.email;
    let res = fetch(url).then(data => data.json()).then(data => {
      const cookies = new Cookies();
cookies.set('ownerid',data);
cookies.remove('travellerid');
window.location="account";
    }).catch(e => { console.log(e) })
  }
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
            Enter the code we've sent via Email  to {owneremail}:
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
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || Booking React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
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


          </div>
          {/* OR 
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          
          
          <form className="grid grid-cols-1 gap-6"  onSubmit={handleClick}>
		  <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Name
              </span>
              <Input
                type="text"
                className="mt-1"
				id="oname"
				name="oname"
				value={ownername}
        required
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                className="mt-1"
				id="email"
				name="email"
				value={owneremail}
        required
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Country/Region
              </span>
              <Select name="country" id='country' value={ownercode} required className="mt-1.5">
                 <option value=''>--Select--</option>
                { countrydata.map((item1)=>(
                  <option value={item1.phonecode} >{item1.country_name}(+{item1.phonecode})</option>
                ))}
                  </Select>
            </label>
			 <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Phone No
              </span>
              <Input
                type="number"
                className="mt-1"
				id="phone"
				name="phone"
				value={ownerphone}
        required
              />
			  <input type='hidden' name='lead_id' value={value}></input>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type="password" className="mt-1" id="password" required name="password" />
            </label>
            <span style={mystyle}>{message}</span>
            <ButtonPrimary type="submit" >Continue</ButtonPrimary>
          </form>
          {renderMotalPricelist()}
          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
    
  );
};

export default PageSignUp;
