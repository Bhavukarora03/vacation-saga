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
  return (
    <div className={`nc-AccountPage ${className}`} data-nc-id="AccountPage">
      <Helmet>
        <title>Account || Vacationsaga</title>
      </Helmet>
      <CommonLayout>
      { ownerinfo.map((item)=>(
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Bank infomation</h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col md:flex-row">
            
           
            <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
              <div>
                <Label>Bank Name :</Label>
                <Input className="mt-1.5" name="bank_name" value={item.bank_name} />
              </div>
              
              
              {/* ---- */}
             
              {/* ---- */}
              <div>
                <Label>Beneficiary Name</Label>
                <Input className="mt-1.5" name="b_name" value={item.b_name} />
              </div>

              {/* ---- */}
              
              <div>
                <Label>IBAN</Label>
                <Input className="mt-1.5" name="iban" value={item.iban} />
              </div>
              <div>
                <Label>SWIFT</Label>
                <Input
                  className="mt-1.5"
                  type="text"
                  value={item.swift}
                  name="swift"
                />
              </div>
              {/* ---- */}
            
             
             
             
             
              <div className="pt-2">
                <ButtonPrimary>Update info</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
        ))}
      </CommonLayout>
    </div>
  );
};

export default BankDetail;
