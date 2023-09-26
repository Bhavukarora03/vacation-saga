import React, { FC,useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import OTPInput, { ResendOTP } from "otp-input-react";

export interface PageSignUpOtpProps {
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

const PageSignUpOtp: FC<PageSignUpOtpProps> = ({ className = "" }) => {
  const [message, setmessage] = useState([])
  const [mystyle, setstyle] = useState([])
var url='';
function handleClick(event) {
	event.preventDefault();
    const data = new FormData(event.target);
    
    // Send data to the backend via POST
   var url = fetch('https://www.vacationsaga.com/api/do_owner_register', {  // Enter your IP address here

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
      const cookies = new Cookies();
cookies.set('ownerid',responseJson);
window.location="phone-verification";
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
  
  
    const [OTP, setOTP] = useState("");
  return (
     <div className={`nc-PageSignUpOtp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || Booking React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Confirm your number
        </h2>
		<span class='block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400'>Enter the code we've sent via SMS to +91 8318405807:</span>
      <OTPInput  className="mt-1" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
   <br/><br/>   
   <center>
	  <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">submit</button>
     </center>
  </div>
	</div>
 
  );
};

export default PageSignUpOtp;
