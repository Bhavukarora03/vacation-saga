import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";

export interface PageTermsAndConditionProps {
  className?: string;
}


let style={'color':'orange',}
const PageTermsAndCondition: FC<PageTermsAndConditionProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Terms And Condition || Vacationsaga Rentals</title>
      </Helmet>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Terms And Condition
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-1 gap-12 ">
            
            <div>
            <p>
    <strong> 1. Contract</strong><br/>
Vacation Saga is not liable for any contract made between the travelers and property owners. Any amount paid by the traveler shall be received by the owner and in case of cancellation, the owner shall refund the amount directly to the traveler according to the cancellation polices provided by the owner and Vacation Saga shall have no involvement in such transaction.
 
    </p>
    <br/>
     <p>
    <strong>2. Booking Denied</strong><br/>
If a customer is working with other websites also and receives a booking through us and through the other site also and the booking request received through Vacation Saga is cancelled by the owner, due to non availability, such booking request shall be considered as booking provided. Since we have provided a booking request and such booking is denied by the owner, then Vacation Saga shall not be liable for not providing booking or charge back or money back guarantee.
    </p>
    <br/>
    
   <p> 
    <strong>3. Pricing</strong><br/>
The subscription price offered by us may vary according to the offers introduced by us may vary according to the offers introduced by us from time to time. A customer availing an offer cannot claim the same benefits that are promised to the customer taking our regular subscription package. The results may vary according to the plan since we have different marketing strategies for different subscriptions and property.
 </p>
 
 <br/>
 
 <p>
<strong> 4. Discount</strong><br/>
A customer availing discount cannot claim the same discount on their renewal of the same description since we give discounted rates only when the company introduces offers. Thus, the chances of availing the same offer on the expiration of the subscription are very less. The discount totally depends on the offer introduced by the company at that time and on the offer that is expired or availed by the customer before. If no offer is ongoing at the time of the expiry of the subscription, the customer will have to pay the regular price for the renewal of the subscription. 
</p>
    
    
<br/>
    
  <p>
  <strong>5. Inquiries</strong><br/>
Once a property owner receives an inquiry through us, he shall be solely responsible for answering such require. Vacation saga will have no role in entertaining such inquiry our role is limited till forwarding the inquiry so received to the customers.

  
  </p>  
    
    
  <br/>
    
    <p>
   
   <strong> 6. Payments.</strong><br/>
Where any customer's property is listed for free under any offer for the time period provided in the offer, such property shall be removed after the expiry of the offer and shall be visible on the site only when the customer pays for the amount subscription package opted by him.
    </p>
    
    <br/>
    
    <p>
    7. <strong>Personal website</strong><br/>
Where a person takes a subscription which includes a personal website, then the customer shall provide us with the domain to be used for his personal website. The credentials for such domain shall be shared by the customers and the website shall be made on the domain so provided
    </p>
    
    
   
    <br/>
    
    
     <p>
 <strong>8. Reviews</strong><br/>
In case two bad reviews are given by our registered travelers regarding the condition of the property, Vacation Saga shall remove the Property from the site and the same shall not be visible for 45 days. 
    </p>   
    
    <br/>
   <p>
 <strong> 9. Returning investments</strong><br/>
In case a property does not receive a booking guaranteed by us in the time period according to subscription, then we shall promote such property for another nine months on the cost incurred by vacation saga and still if such owner does not receive any inquires, then investment shall be returned to him, provided that customer comes under the criteria provided by us. In order to claim the feature of money back guarantee, the customer should have 


</p>
<br/>
<ul class="content-list">
                        <li> <i style={style} class="las la-check-circle text-lg"></i> Not received any bookings so guaranteed in his subscription.</li>
                        <li> <i style={style} class="las la-check-circle text-lg"></i> Taken the subscription of regular price and not the discounted one.</li>
                        <li> <i style={style} class="las la-check-circle text-lg"></i> Not denied any bookings/inquires received through Vacation Saga.</li>
                        <li> <i style={style} class="las la-check-circle text-lg"></i> Not been given bad reviews by our registered travelers who have booked their property through Vacation Saga.</li>
                        </ul>




            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
       
      </div>
    </div>
  );
};

export default PageTermsAndCondition;
