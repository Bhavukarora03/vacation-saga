import Label from "components/Label/Label";
import React, { FC, useEffect, useState } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import Textarea from "shared/Textarea/Textarea";
import CommonLayout from "./CommonLayout";
import { Helmet } from "react-helmet";
import Cookies from 'universal-cookie';
export interface AccountPageProps {
  className?: string;
}



const AccountPage: FC<AccountPageProps> = ({ className = "" }) => {
  const cookies = new Cookies();
  //console.log('global cookies', cookies.get('ownerid')); // Pacman
  if (cookies.get('travellerid') == undefined) {
    window.location = '/';
  }
  const [ownerinfo, setownerinfo] = useState([])
  useEffect(() => {
    ownerprofile()
  }, [])
  function ownerprofile() {
    var url = 'https://admin.vacationsaga.com/api/traveller_info_api/' + cookies.get('travellerid');
    var response = fetch(url).then(data => data.json())
    response.then((data) => {
      if (data.length) {
        setownerinfo(data);
        console.log('mausi ho kya meri', data)
      }
    }).catch(e => {
      console.log(e)
    })
  }

  const [message, setmessage] = useState([])
  const [style, setstyle] = useState([])
  const [File, setFile] = useState("");
 function handleUpload(event) {
  setFile(event.target.files[0]);
}
function handleClick(event) {
	event.preventDefault();
    const data = new FormData(event.target);
    data.append('photo', File.name);
    // Send data to the backend via POST
   let url = fetch('https://admin.vacationsaga.com/api/traveller_infoupdate', {  // Enter your IP address here

      method: 'POST', 
      mode:'cors',
      body: data
     
    }).then((response) => response.json())
    .then((responseJson) => {
      //alert(responseJson);
      if(responseJson==1)
      {
        let msg='Data updated Successfully';
        setmessage(msg);
        let mystyle = {
          color: "#fff",
          backgroundColor: "green",
          padding: "10px",
          fontFamily: "Arial"
        };
        setstyle(mystyle)
      }
      else
      {
        let msg='Data Not updated Successfully';
        setmessage(msg);
        let mystyle = {
          color: "#a94442",
          backgroundColor: "#f2dede",
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
    <div className={`nc-AccountPage ${className}`} data-nc-id="AccountPage">
      <Helmet>
        <title>Account || Vacationsaga</title>
      </Helmet>
      <CommonLayout>

        {ownerinfo.map((item) => (
          <div className="space-y-6 sm:space-y-8">
            {/* HEADING */}
            <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={handleClick}>
            <h2 className="text-3xl font-semibold">Account infomation</h2>
            <span style={style}>{message}</span>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex items-start">
                <div className="relative rounded-full overflow-hidden flex">
                  <Avatar sizeClass="w-32 h-32" imgUrl={'https://admin.vacationsaga.com/public/images/travellerimages/'+item.image}/>
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="mt-1 text-xs">Change Image</span>
                  </div>
                  <input
                    type="file"
                    name='photo'
                    onChange={handleUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
                <div>
                  <Label>First Name</Label>
                  <Input className="mt-1.5" name="f_name" defaultValue={item.f_name} />
                  <input type='hidden' name='temp_img' value={item.image}></input>
                  <input type='hidden' name='id' value={item.id}></input>
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input className="mt-1.5" name="l_name" defaultValue={item.l_name} />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input className="mt-1.5" name='email' readOnly value={item.email} />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input className="mt-1.5" name="phone" defaultValue={item.phone} />
                </div>
                <div>
                  <Label>City</Label>
                  <Input
                    className="mt-1.5"
                    type="text"
                    defaultValue={item.city}
                    name="city"
                  />
                </div>
                <div>
                  <Label>State</Label>
                  <Input
                    className="mt-1.5"
                    type="text"
                    defaultValue={item.state}
                    name="state"
                  />
                </div>
                <div>
                  <Label>ZIP code/Postal code</Label>
                  <Input className="mt-1.5" name="zip" defaultValue={item.zip} />
                </div>
                <div>
                  <Label>Country</Label>
                  <Input
                    className="mt-1.5"
                    type="text"
                    defaultValue={item.country}
                    name="country"
                  />
                </div>
                <div className="pt-2">
                  <ButtonPrimary>Update info</ButtonPrimary>
                </div>
              </div>
             
            </div>
            </form>
          </div>
        ))}
      </CommonLayout>
      
    </div>
  );
};

export default AccountPage;
