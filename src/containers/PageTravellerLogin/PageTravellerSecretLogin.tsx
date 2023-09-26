import React, { FC, useState,useEffect } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Cookies from 'universal-cookie';
export interface PageTravellerSecretLoginProps {
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

 
const PageTravellerSecretLogin: FC<PageTravellerSecretLoginProps> = ({ className = "" }) => {
 
  useEffect(() => {
    dologin()
  }, [])
  function dologin()
  {
  var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  const sid = usp.get('id');
  const cookies = new Cookies();
  cookies.set('travellerid',sid);
  cookies.remove('ownerid');
  window.location="account-traveller";
  }
  return (
    
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Vacationsaga</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Loading...
        </h2>
        
        <div className="max-w-md mx-auto space-y-6">
          
          
         
         
        </div>
      </div>
    </div>
  );
};

export default PageTravellerSecretLogin;
