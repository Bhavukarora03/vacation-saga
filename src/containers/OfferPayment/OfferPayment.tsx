import { Tab } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { FC, Fragment , useEffect, useState } from "react";
import visaPng from "images/vis.png";
import mastercardPng from "images/mastercard.svg";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import StartRating from "components/StartRating/StartRating";
import NcModal from "shared/NcModal/NcModal";
import StripeCheckout from 'react-stripe-checkout';

export interface OfferPaymentProps {
  className?: string;
}

const OfferPayment: FC<OfferPaymentProps> = ({ className = "" }) => {
  const [dummyData, setDummyData] = useState([])
  useEffect(()=>{
     
    getData()
  }, [])
  const getData = () => {
  var urloc = window.location.pathname;  
  var parts = urloc.split("/");
  var last_part = parts[parts.length-1];
  let value=last_part;
 // alert(value);
  let url = 'https://admin.vacationsaga.com/api/offeramount_api/'+value;
  let res = fetch(url).then(data => data.json()).then(data => {
    setDummyData(data)
   // alert(data)
    console.log('this is the api response amount',data)
  }).catch(e=>{console.log(e)})
  };

  /*const stripe = loadStripe(
    "pk_test_51JBbjJSBQgBkNtYgr0ETN8lrbTFb380KjVlqPjUauYnw84BYu4bq9H61B5cogDsDbiblDQridD8DxcsQJnVp6GGT00LNBkCydF"
  );*/
  
 
   
   const renderSidebar = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-100">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
            <img
          src="https://www.cairnskangarooms.com/wp-content/uploads/2018/07/Stripe-Payment-Logo.png?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
            </div>
          </div>
         
        </div>
       
      </div>
    );
  };

  const renderMain = () => {
    return (
      <form method="post">
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <div>
          <h3 className="text-2xl font-semibold">Pay with</h3>
          <div className="mt-6">
            <Tab.Group>
              <Tab.List className="flex">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${
                        selected
                          ? "bg-neutral-800 text-white"
                          : "text-neutral-6000 dark:text-neutral-400"
                      }`}
                    >
                      Stripe
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <div className="w-14 border-b border-neutral-200 my-5"></div>
              <Tab.Panels>
                <Tab.Panel className="space-y-5">
                <div className="space-y-1">
                    <Label>Name on Card </Label>
                    <Input name="name" required placeholder="JOHN DOE" />
                  </div>
                  <div className="space-y-1">
                    <Label>Card Number </Label>
                    <Input name="card_no" required placeholder="111 112 222 999" />
                  </div>
                 
                  <div className="flex space-x-5  ">
                    <div className="flex-1 space-y-1">
                      <Label>Expiration date </Label>
                      <Input name="expiry_month" required type="text" placeholder="MM" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label>CVC </Label>
                      <Input name="cvv" required />
                    </div>
                  </div>
                  <div className="flex space-x-5  ">
                    <div className="flex-1 space-y-1">
                      <Label>Adrress </Label>
                      <Input name="address" required type="text" placeholder="" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label>Postal Code </Label>
                      <Input name="pincode" required  />
                    </div>
                  </div>
                  <div className="pt-6">
                    { dummyData.map((item)=>(
                    <ButtonPrimary>Total : EURO {item.price}</ButtonPrimary>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel className="space-y-5">
                  <div className="space-y-1">
                    <Label>Email </Label>
                    <Input type="email" defaultValue="example@gmail.com" />
                  </div>
                  <div className="space-y-1">
                    <Label>Password </Label>
                    <Input type="password" defaultValue="***" />
                  </div>
                  <div className="space-y-1">
                    <Label>Messager for author </Label>
                    <Textarea placeholder="..." />
                    <span className="text-sm text-neutral-500 block">
                      Write a few sentences about yourself.
                    </span>
                  </div>
                  <div className="pt-4">
                    <ButtonPrimary>Confirm and pay</ButtonPrimary>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      </form>
    );
  };
const onToken = (token)=>{
console.log(token)
fetch('/save-stripe-token', {
  method: 'POST',
  body: JSON.stringify(token),
}).then(response => {
  response.json().then(data => {
    alert(`We are in business, ${data.email}`);
  });
});
}
const onOpened = (onOpened)=>{
  console.log(onOpened)
  }
  const onClosed = (onClosed)=>{
    console.log(onClosed)
    }
    let buttonstyle={
      'padding-top': '100px',
    'padding-bottom': '100px'
    }
  return (
     dummyData.map((itemss)=>(
<StripeCheckout
  name="Vacation Saga" // the pop-in header title
  description="Payment" // the pop-in header subtitle
  image="https://vacationsaga.com/fevicon.png" // the pop-in header image (default none)
  ComponentClass="div"
  panelLabel="Pay" // prepended to the amount in the bottom pay button
  amount={itemss.price*100} // cents
  currency="EUR"
  stripeKey="pk_live_51JBbjJSBQgBkNtYgpPzo0IPxgkxTEsEl2gMrJfG9aq0YbV7WJvU849zinFgkm1DcKo5VcXJQJMiaDlEMUh2rRFtl00MLG9griV"
  //locale="eng"
  email={itemss.email}
  // Note: Enabling either address option will give the user the ability to
  // fill out both. Addresses are sent as a second parameter in the token callback.
  //shippingAddress
 // billingAddress={false}
  // Note: enabling both zipCode checks and billing or shipping address will
  // cause zipCheck to be pulled from billing address (set to shipping if none provided).
 // zipCode={true}
  
  alipay // accept Alipay (default false)
  bitcoin // accept Bitcoins (default false)
  allowRememberMe // "Remember Me" option (default true)
  token={onToken} // submit callback
  opened={onOpened} // called when the checkout popin is opened (no IE6/7)
  closed={onClosed} // called when the checkout popin is closed (no IE6/7)
  // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
  // you are using multiple stripe keys
  //reconfigureOnUpdate={false}
  // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
  // useful if you're using React-Tap-Event-Plugin
  //triggerEvent="onTouchTap"
  >
 <center style={buttonstyle}>
 <button className="btn btn-primary" class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
   Pay Now EURO {itemss.price}
  </button>
 </center>
</StripeCheckout>
 ))
  );
};

export default OfferPayment;

  