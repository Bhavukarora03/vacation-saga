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
export interface AccountPageProps {
  className?: string;
}



const BankDetail: FC<AccountPageProps> = ({ className = "" }) => {
  const cookies = new Cookies();
//console.log('global cookies', cookies.get('ownerid')); // Pacman
  const [ownerinfo, setownerinfo] = useState([])
useEffect(()=>{
  ownerprofile()
 }, [])
function ownerprofile()
  {
    var url = 'https://admin.vacationsaga.com/api/owner_info_api/'+cookies.get('ownerid');
	  var response = fetch(url).then(data=> data.json())
    response.then((data)=>{
      if(data.length){
        setownerinfo(data);
        console.log('mausi ho kya meri', data)
      }
    }).catch(e=>{
      console.log(e)
    })
  }

  const [message, setmessage] = useState([])
  const [style, setstyle] = useState([])
 
 function handleClick(event) {
  event.preventDefault();
    const data = new FormData(event.target);
    
    // Send data to the backend via POST
   let url = fetch('https://admin.vacationsaga.com/api/owner_bankdetailupdate', {  // Enter your IP address here
 
      method: 'POST', 
      mode:'cors',
      body: data
     
    }).then((response) => response.json())
    .then((responseJson) => {
     // alert(responseJson);
      if(responseJson==1)
      {
        let msg='Bank detail updated successfully';
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
        let msg='Bank detail not updated ';
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
            <form className="grid grid-cols-1 gap-6" action="#" method="POST"  onSubmit={handleClick}>
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Bank infomation</h2>
          <span style={style}>{message}</span>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col md:flex-row">
            
           
            <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
              <div>
                <Label>Bank Name :</Label>
                <Input className="mt-1.5" name="bank_name" defaultValue={item.bank_name} />
                <input type='hidden' name='ownerid' defaultValue={cookies.get('ownerid')} ></input>
              </div>
              
              <div>
                <Label>Beneficiary Name</Label>
                <Input className="mt-1.5" name="b_name" defaultValue={item.b_name} />
              </div>

              <div>
                <Label>IBAN</Label>
                <Input className="mt-1.5" name="iban" defaultValue={item.iban} />
              </div>
              <div>
                <Label>SWIFT</Label>
                <Input
                  className="mt-1.5"
                  type="text"
                  defaultValue={item.swift}
                  name="swift"
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

export default BankDetail;
