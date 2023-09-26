import Label from "components/Label/Label";
import React, { FC ,useEffect,useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import CommonLayout from "./CommonLayout";
import Cookies from 'universal-cookie';
const AccountPass = () => {
  const cookies = new Cookies();
  //console.log('global cookies', cookies.get('ownerid')); // Pacman
  if(cookies.get('ownerid')==undefined){
    window.location='/';
  }
  const [message, setmessage] = useState([])
  const [style, setstyle] = useState([])
  function handleClick(event) {
    event.preventDefault();
      const data = new FormData(event.target);
      
      // Send data to the backend via POST
     let url = fetch('https://admin.vacationsaga.com/api/ownerchangepassword', {  // Enter your IP address here
   
        method: 'POST', 
        mode:'cors',
        body: data
       
      }).then((response) => response.json())
      .then((responseJson) => {
       // alert(responseJson);
        if(responseJson==1)
        {
          let msg='Invalid Current Password ';
          setmessage(msg);
          let mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial"
          };
          setstyle(mystyle)
        }
        if(responseJson==2)
        {
          let msg='New Password And Confirm Password Not Same';
          setmessage(msg);
          let mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial"
          };
          setstyle(mystyle)
        }
        if(responseJson==3)
        {
          let msg='Password Updated Successfully ';
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
      });
      window.scroll({top: 10, left: 0, behavior: 'smooth' })
    }
  return (
    <div>
      <CommonLayout>
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <form className="grid grid-cols-1 gap-6" action="#" method="POST"  onSubmit={handleClick}>
          <h2 className="text-3xl font-semibold">Update your password</h2>
          <span style={style}>{message}</span>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className=" max-w-xl space-y-6">
            <div>
              <Label>Current password</Label>
              <Input type="password" required name='current_password' className="mt-1.5" />
              <input type='hidden' name='ownerid' value={cookies.get('ownerid')}/>
            </div>
            <div>
              <Label>New password</Label>
              <Input type="password" required name="new_password" className="mt-1.5" />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type="password" required name='confirm_password' className="mt-1.5" />
            </div>
            <div className="pt-2">
              <ButtonPrimary>Update password</ButtonPrimary>
            </div>
          </div>
         </form>
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountPass;
