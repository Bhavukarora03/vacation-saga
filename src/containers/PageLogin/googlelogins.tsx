import React, { FC, useState,useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
export interface googleloginsProps {
  className?: string;
}


 
const googlelogins: FC<googleloginsProps> = ({ className = "" }) => {
  const clientId = "843338204450-unpb8d9if6fbkipvmrhi9b8krvn52678.apps.googleusercontent.com";

  const responseGoogle = response => {
    console.log(response);
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

export default googlelogins;
