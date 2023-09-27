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
import Cookies from "universal-cookie";
import Select from "shared/Select/Select";
import { Dialog, Transition } from "@headlessui/react";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import "./otpstyle.css";
import $ from "jquery";
const cookies = new Cookies();
export interface PageLoginWithOtpProps {
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

const PageLoginWithOtp: FC<PageLoginWithOtpProps> = ({ className = "" }) => {
  const [propertyinfo, setpropertyinfo] = useState([]);
  const [defalutimage, setdefalutimage] = useState([]);
  const [countrydata, setcountrydata] = useState([]);
  const [phonenumber, setphonenumber] = useState([]);
  const [countrycode, setcountry] = useState([]);
  useEffect(() => {
    CountryApiData();
  }, []);

  function CountryApiData() {
    var url = "https://admin.vacationsaga.com/api/country_api";
    var response = fetch(url).then((data) => data.json());
    response
      .then((data) => {
        if (data.length) {
          setcountrydata(data);
          console.log("country data", data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const [message, setmessage] = useState([]);
  const [mystyle, setstyle] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    //let phone=$("#phone").val();
    //let country = $('#country :selected').val();
    //setcountry(country)
    // setphonenumber(phone)
    let email = $("#email").val();
    setphonenumber(email);
    // Send data to the backend via POST
    let url = fetch("https://admin.vacationsaga.com/api/otp_login", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        openModalPricelist();
        //alert(responseJson);
        if (responseJson == 1) {
        } else {
          cookies.set("travellerid", responseJson);
          //window.location="account";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function submitotp(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    let url = fetch("https://admin.vacationsaga.com/api/submit_otp", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        openModalPricelist();
        // alert(responseJson);
        if (responseJson == 404) {
          let msg = "Invalid OTP";
          setmessage(msg);
          let mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial",
          };
          setstyle(mystyle);
        } else {
          cookies.set("travellerid", responseJson);
          window.location.href = "account-traveller";
        }
      })
      .catch((error) => {
        console.error(error);
        let msg = "Oops error";
        setmessage(msg);
        let mystyle = {
          color: "#a94442",
          backgroundColor: "#f2dede",
          padding: "10px",
          fontFamily: "Arial",
        };
        setstyle(mystyle);
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
  var finaldays = urloc1.substr(urloc1.indexOf("?") + 1);
  //alert(myString);
  var array = finaldays.split("#");
  var finaldays = array[0];
  //const mystate = useSelector((state)=> state.ChangeTheNumber);

  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(array[4]),
    endDate: moment(array[3]),
  });
  let days =
    (selectedDate.endDate - selectedDate.startDate) / (1000 * 60 * 60 * 24);

  finaldays = Math.round(days);
  let amountportion = array[1];
  let sumportion = amountportion * finaldays;

  let [isOpenModalPricelist, setIsOpenModalPricelist] = useState(false);
  function closeModalPricelist() {
    setIsOpenModalPricelist(false);
  }
  function openModalPricelist() {
    setIsOpenModalPricelist(true);
  }

  const renderMotalPricelist = () => {
    let otpstyle = {
      "margin-bottom": "35px",
    };
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
                    <form method="post" onSubmit={submitotp}>
                      <label className="block">
                        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                          <br />
                          Enter the code we've sent via email {phonenumber}:
                          <br />
                        </span>
                        <Input
                          type="text"
                          id="partitioned"
                          required
                          name="otp"
                          maxlength="4"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                          onKeyPress="if(this.value.length==4) return false;"
                          className="location-search-input block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                        />
                        <input
                          type="hidden"
                          name="country"
                          value={countrycode}
                        ></input>
                        <input
                          type="hidden"
                          name="phone"
                          value={phonenumber}
                        ></input>
                      </label>
                      <br />
                      <span style={mystyle}>{message}</span>
                      <ButtonPrimary style={otpstyle} type="submit">
                        Continue
                      </ButtonPrimary>
                      <br />
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

  const renderMain = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">Login With OTP</h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <div id="login_div_without_login">
            {/* OR */}

            {/* FORM */}
            <form
              className="grid grid-cols-1 gap-6"
              action="#"
              method="post"
              onSubmit={handleClick}
            >
              {/*<label className="block">
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
                  Enter email
                </span>
                <Input
                  type="email"
                  id="email"
                  required
                  name="email"
                  className="mt-1"
                />
              </label>

              <ButtonPrimary type="submit">Send OTP</ButtonPrimary>
            </form>
            {renderMotalPricelist()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-CheckOutPage ${className}`} data-nc-id="CheckOutPage">
      <main className="container mb-24 lg:mb-32">
        <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
      </main>
    </div>
  );
};

export default PageLoginWithOtp;
