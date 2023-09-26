import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const totalPrice = 1400; // this means 14 usd and can also be calculated at the backend

export const MyCheckoutForm = () => {
  
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  // STEP 1: create a payment intent and getting the secret
  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then(res => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);  // <-- setting the client secret here
      });
  }, []);

  // STEP 2: make the payment after filling the form properly
  const makePayment = async () => {
    alert('ok')
     const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
  }

 let style={
  'width': '415px',
 }
  return (
    <center>
    <form id="payment-form" style={style} onSubmit={makePayment}>
      <CardElement id="card-element"  />
<br/>
      <button  class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"> Pay Now Euro {totalPrice}</button>
    </form></center>
  );
};
