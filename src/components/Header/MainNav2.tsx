import React, { FC,useEffect,useState } from "react";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
//import LangDropdown from "./LangDropdown";
//import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
//import CurrencyDropdown from "./CurrencyDropdown";
//import DropdownTravelers from "./DropdownTravelers";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

export interface MainNav2Props {
  isTop: boolean;
}

const MainNav2: FC<MainNav2Props> = ({ isTop }) => {
  const [ownerinfo, setownerinfo] = useState(['khade kumar'])
  useEffect(()=>{
    //alert(defaultcoutry)
     ownerprofile1()
     ownerprofile2()
   }, [])
   function ownerprofile1()
   {
    const cookies = new Cookies();
     var url = 'https://admin.vacationsaga.com/api/owner_info_api/'+cookies.get('ownerid');
     var response = fetch(url).then(data=> data.json())
     response.then((data)=>{
       if(data.length){
         setownerinfo(data);
       
       }
     }).catch(e=>{
       console.log(e)
     })
   }
   function ownerprofile2()
   {
    const cookies = new Cookies();
     var url = 'https://admin.vacationsaga.com/api/traveller_info_api/'+cookies.get('travellerid');
     var response = fetch(url).then(data=> data.json())
     response.then((data)=>{
      let aa=[]
       if(data.length){
        data.map((item) =>(
       aa.push({name:item.f_name})
        ))
         setownerinfo(aa)
       
       }
     }).catch(e=>{
       console.log(e)
     })
   }
 let css={
  'font-weight':'bold',
    'font-size': '12px',
 }
  return (
    <div
      className={`nc-MainNav1 nc-MainNav2 relative z-10 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo />
          <div className="hidden sm:block h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="hidden sm:block">
           
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
           
           
            <Link
              to="/add-listing-1"
              className="
                text-opacity-90
                group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              List your property
            </Link>

            <div></div>
            <SwitchDarkMode />
            
            <div></div>
            <AvatarDropdown /> <span style={css}> {ownerinfo.map((item1)=>( <span>{ (() => { if(item1.name!=undefined) {return ('Hello, '+item1.name) }})()}</span> ))}</span>
          </div>
          <div className="flex items-center space-x-4 xl:hidden">
            
            <AvatarDropdown /> 
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
