import React, { FC, useState, useEffect } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

export interface PageLoginProps {
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

const PageTravellerLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const [message, setmessage] = useState([]);
  const [mystyle, setstyle] = useState([]);
  function handleCallbackResponse(response) {
    console.log(response.credential);
    let obj = jwt_decode(response.credential);
    console.log(obj);

    let url =
      "https://admin.vacationsaga.com/api/travellergooglelogin?name=" +
      obj.name +
      "&email=" +
      obj.email;
    let res = fetch(url)
      .then((data) => data.json())
      .then((data) => {
        const cookies = new Cookies();
        cookies.set("travellerid", data);
        cookies.remove("ownerid");
        window.location = "account-traveller";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "843338204450-unpb8d9if6fbkipvmrhi9b8krvn52678.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signindiv"), {
      theme: "dark",
      size: "large",
    });
  }, []);
  function handleClick(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    // Send data to the backend via POST
    let url = fetch("https://admin.vacationsaga.com/api/traveller_login_api", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //alert(responseJson);
        if (responseJson == 404) {
          let msg = "Invalid Email OR Password";
          setmessage(msg);
          const mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial",
          };
          setstyle(mystyle);
        }
        if (responseJson == 2) {
          window.location.href = "account-traveller";
        }
        if (responseJson != 404 && responseJson != 2) {
          console.log("else ", responseJson);
          const cookies = new Cookies();
          cookies.set("travellerid", responseJson);
          cookies.remove("ownerid");
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

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Traveller Login || Vacationsaga</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Traveller Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
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
            <center>
              <div id="signindiv"></div>
            </center>
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form
            className="grid grid-cols-1 gap-6"
            action="#"
            method="post"
            onSubmit={handleClick}
          >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="enter email"
                className="mt-1"
                name="email"
                required
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link to="/forgot-pass" className="text-sm">
                  Forgot password?
                </Link>
              </span>
              <Input
                type="password"
                required
                name="password"
                className="mt-1"
              />
            </label>
            <span style={mystyle}>{message}</span>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
            <center>
              <Link to="/traveler-login-with-otp">Login With OTP</Link>
            </center>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link to="/TravellerSignUp">Create an account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageTravellerLogin;
