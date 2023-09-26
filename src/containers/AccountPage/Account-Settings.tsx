import Label from "components/Label/Label";
import React, { FC ,useEffect,useState } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import Textarea from "shared/Textarea/Textarea";
import CommonLayout from "./CommonLayout";
import { Helmet } from "react-helmet";
import Cookies from 'universal-cookie';
import { getDefaultEventEnd } from "@fullcalendar/react";
import { iteratorSymbol } from "immer/dist/internal";
export interface AccountPageProps {
  className?: string;
}



const AccountPage: FC<AccountPageProps> = ({ className = "" }) => {
  const cookies = new Cookies();
//console.log('global cookies', cookies.get('ownerid')); // Pacman
if(cookies.get('ownerid')==undefined){
  //window.location='/';
}
  const [ownerinfo, setownerinfo] = useState([])
  const [countrydata, setcountrydata] = useState([])
  const [statedata, setstatedata] = useState([])
  const [citydata, setcitydata] =useState([])
  
useEffect(()=>{
  //alert(defaultcoutry)
  ownerprofile()
  CountryApiData()
 }, [])

 const [defaultcoutry , setdefaultcoutry] = useState([])
  const [defaulstate , setdefaultstate] = useState([])
  const [defaultcity , setdefaultcity] = useState([])
function ownerprofile()
  {
    var url = 'https://admin.vacationsaga.com/api/owner_info_api/'+cookies.get('ownerid');
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setownerinfo(data);
        console.log('owner info', data)
         data.map((item)=>(
          setdefaultcoutry(item.country)
          //alert(item.country)
        ))
         data.map((item)=>(
        setdefaultstate(item.state),
        get_ownerstate(item.state)
        ))
         data.map((item)=>(
          setdefaultcity(item.city),
          get_ownercity(item.city)
          ))
      }
    }).catch(e=>{
      console.log(e)
    })
    
    let a='jimno';
    var url1 = 'https://admin.vacationsaga.com/api/state_api/'+a;
	  var response1 = fetch(url1).then(data1=> data1.json())
    response1.then((data1)=>{
      if(data1.length){
        setstatedata(data1);
        //console.log('owner info', data)
      }
    }).catch(e=>{
      console.log(e)
    })

    var url2 = 'https://admin.vacationsaga.com/api/city_api/'+a;
	  var response2 = fetch(url2).then(data2=> data2.json())
    response2.then((data2)=>{
      if(data2.length){
        setcitydata(data2);
        //console.log('owner info', data)
      }
    }).catch(e=>{
      console.log(e)
    })
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

  const getstatedata=(a)=> {
    //alert(a)
    var url = 'https://admin.vacationsaga.com/api/state_api/'+a;
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setstatedata(data);
        //console.log('owner info', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  const getcitydata=(a)=>{
    var url = 'https://admin.vacationsaga.com/api/city_api/'+a;
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setcitydata(data);
        //console.log('owner info', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  function get_ownerstate(a)
  {
    var url = 'https://admin.vacationsaga.com/api/get_ownerstate_api/'+a;
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setstatedata(data);
        //console.log('owner info', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }
  function get_ownercity(a)
  {
    var url = 'https://admin.vacationsaga.com/api/get_ownercity_api/'+a;
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setcitydata(data);
        //console.log('owner info', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }
 /* */
 const [message, setmessage] = useState([])
 const [style, setstyle] = useState([])
 const [File, setFile] = useState("");
 function handleUpload(event) {
  setFile(event.target.files[0]);
}
//alert(File.name)

function handleClick(event) {
 event.preventDefault();
   const data = new FormData(event.target);
   //alert(data.name)
   data.append('photo', File.name);
   // Send data to the backend via POST
  let url = fetch('https://admin.vacationsaga.com/api/owner_infoupdate', {  // Enter your IP address here

     method: 'POST', 
     mode:'cors',
     body: data,
     
    
   }).then((response) => response.json())
   .then((responseJson) => {
    // alert(responseJson);
     if(responseJson==1)
     {
       let msg='Profile updated successfully';
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
       let msg='Profile not updated ';
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
      { ownerinfo.map((item)=>(
        
        <div className="space-y-6 sm:space-y-8">
          <form className="grid grid-cols-1 gap-6" enctype='multipart/form-data' action="#" method="POST" >
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Account Settings</h2>
          <span style={style}>{message}</span>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 flex items-start">
              <div className="relative rounded-full overflow-hidden flex">
                <Avatar sizeClass="w-32 h-32" imgUrl={'https://admin.vacationsaga.com/public/images/owner/'+item.photo}/>
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
                <Label>Property Owner name</Label>
                <Input className="mt-1.5" name="name"  />
                <input type='hidden' name='ownerid' value={cookies.get('ownerid')}></input>
                
              </div>
              
              
              {/* ---- */}
             
              {/* ---- */}
              <div>
                <Label>Email</Label>
                <Input className="mt-1.5" readOnly  />
              </div>

              {/* ---- */}
              
              <div>
                <Label>Phone Number</Label>
                <Input className="mt-1.5" name="phone" />
              </div>
            
              {/* ---- */}
              <div>
                <Label>Property Representative Details </Label>
				<hr></hr>
              </div>
			  <div>
                <Label>Name </Label>
				 <Input className="mt-1.5" name="address2"  />
              </div>
			  <div>
                <Label>Phone No </Label>
				 <Input className="mt-1.5" name="address2"  />
              </div>
			  <div>
                <Label>Email </Label>
				 <Input className="mt-1.5" name="address2"  />
              </div>
			  <hr></hr>
              <div>
                <Label>Business Name</Label>
                <Input className="mt-1.5" name="address2"  />
              </div>
			   <div>
                <Label>Tax ID</Label>
                <Input className="mt-1.5" name="address2"  />
              </div>
			   <div>
                <Label>Property Name</Label>
                <Input className="mt-1.5" name="address2"  />
              </div>
			  <div>
                <Label>Property Type</Label>
                <Input className="mt-1.5" name="address2"  />
              </div>
			  <div>
                <Label>Property Unit Type</Label>
                <Select name="country"   className="mt-1.5">
                 <option value=''>--Select--</option>
                <option value='Shared'>Shared</option>
				 <option value='Private'>Private</option>
                  </Select>
              </div>
			   <div>
                <Label>Property Available on Diffrent Platform</Label>
                <Select name="country"   className="mt-1.5">
                 <option value=''>--Select--</option>
                <option value='Yes'>Yes</option>
				 <option value='No'>No</option>
                  </Select>
              </div>
			  <div>
                <Label>Platform</Label>
                <Select name="country"   className="mt-1.5">
                 <option value=''>--Select--</option>
                <option value='Airbnb'>Airbnb</option>
				 <option value='Booking.com'>Booking.com</option>
				 <option value='Homeaway'>Homeaway</option>
				 <option value='Vrbo'>Vrbo</option>
				 <option value='Others'>Others</option>
                  </Select>
              </div>
			  <div>
                <Label>Property Url</Label>
                <Input className="mt-1.5" name="address2"  />
              </div>
			  <div>
			  <p>
			  I confirm all the information provided by me is correct and Vacation saga can ask any information documents for future Refrences and verification 
			 <br></br>
			 <input type="checkbox" value="Yes" name="terms" />Yes
			 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   <input type="checkbox" value="No" name="terms" />No
			   <br></br>
			   <a target="_blank" href="https://vacationsaga.com/terms-and-condition">I accept all the terms and conditions</a>
			  </p>
			  </div>
              {/* ---- */}
             
              {/* ---- */}
             
              
              
              <div className="pt-2">
                <ButtonPrimary>Submit</ButtonPrimary>
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
