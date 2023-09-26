import React, { FC, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Cookies from 'universal-cookie';
export interface PageForgotPasswordProps {
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

 
const PageForgotPassword: FC<PageForgotPasswordProps> = ({ className = "" }) => {
  const [message, setmessage] = useState([])
  const [mystyle, setstyle] = useState([])
function handleClick(event) {
	event.preventDefault();
    const data = new FormData(event.target);
    
    // Send data to the backend via POST
   let url = fetch('https://admin.vacationsaga.com/api/owner_forgotpassword_api', {  // Enter your IP address here

      method: 'POST', 
      mode:'cors',
      body: data
     
    }).then((response) => response.json())
    .then((responseJson) => {
      //alert(responseJson);
      if(responseJson==404)
      {
        let msg='Invalid Email';
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
        let msg='Reset Password Link Send To Your email address';
        setmessage(msg);
        let mystyle = {
          color: "#fff",
          backgroundColor: "green",
          padding: "10px",
          fontFamily: "Arial"
        };
        setstyle(mystyle)
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
  
  return (
    
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Vacationsaga</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Forgot Password
        </h2>
        
        <div className="max-w-md mx-auto space-y-6">
         
        
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={handleClick}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="Enter email"
                className="mt-1"
                name="email"
                required
              />
            </label>
           
            <span style={mystyle}>{message}</span>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
         
        </div>
      </div>
    </div>
  );
};

export default PageForgotPassword;
