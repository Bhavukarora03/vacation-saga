import React, { FC, useState,useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
export interface GoogleLoginsProps {
  className?: string;
}


 
const GoogleLogins: FC<GoogleLoginsProps> = ({ className = "" }) => {
  const clientId = "843338204450-unpb8d9if6fbkipvmrhi9b8krvn52678.apps.googleusercontent.com";

  const responseGoogle = response => {
    console.log(response.profileObj);
  };

  return (
    <div><GoogleLogin
    clientId={clientId}
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy="single_host_origin"
              /></div>
    
  );
};

export default GoogleLogins;
