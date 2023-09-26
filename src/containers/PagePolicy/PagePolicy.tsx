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

export interface PagePolicyProps {
  className?: string;
}
let style={'color':'orange',}
const PagePolicy: FC<PagePolicyProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title> Privacy Policy || Vacationsaga Rentals</title>
      </Helmet>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Privacy Policy
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-1 gap-12 ">
            
            <div>
            <p>We are serious about our privacy policies and protecting the personal data of our customers. The term "Users" and "customers" refers to people who use our website to find a suitable rental as well as to those who list their property with us. Your personal information will be collected and stored by us in our data base and will not be shared with any third party by using our website, you acknowledged and give your consent willingly that we might transfer your personal data to any other country where we have our branches in. </p>
            <br/>
        <p>We do not collect data willingly from any user under the age of eighteen. We are not responsible for any agreement made on our website between a minor and any third party.</p>
        <br/>
        <p>We are not liable in case of any dispute between a holiday maker and a property owner regarding the quality and condition of the property. We are not responsible for any agreement made between the traveler and the property owner. We do not have any involvement in the reservation procedure, we act as a middleman to facilitate smooth transaction between the holiday maker and the property owner.</p>
        <br/>
        <p>The content on our website purely belongs to us, you can download it for using purpose but cannot copy, reuse it without our consent. Users are granted a limited license to access the content and services provided by us.</p>
        <br/>
        <ul class="content-list">
          <h2>By clicking on "Agree" button, you give your implied consent for not practicing the following guidelines</h2>
          <br/>
          <li> <i style={style} class="las la-check-circle text-lg"></i> To use the website for any unauthorized purpose.</li>
          <li> <i style={style} class="las la-check-circle text-lg"></i> To modify, translate or change any content in the website.</li>
          <li> <i style={style} class="las la-check-circle text-lg"></i> Sell, offer to sell, transfer or get license of the website to any third party.</li>
          <li> <i style={style} class="las la-check-circle text-lg"></i> Post any abusive, unlawful and defamatory matter on the website.</li>
          <li> <i style={style} class="las la-check-circle text-lg"></i> Infringe or violate the rights of us or any third party.</li>
          <li> <i style={style} class="las la-check-circle text-lg"></i> Transmit any fraudulent, false or miss leading information.</li>
        </ul>
        <br/>
        <p>We do not make any exclusive contract with our registered property owners and registered travelers which means you are totally free to work with other companies while working with our company.</p>
        <br/>
        <p>We may provide you with an online payment portal for your connivance but we are not liable for any losses you suffer due to the decision of PayPal and bank. In case your payment is declined by PayPal or by bank, you must directly contact them and we are not accountable for the same. You agree to indemnify us from or against any or all the claims or legal fees incurred by you against an action brought by you against the payment gateway. In case you need any assistance regarding approval of your payments, you can directly reach to PayPal or bank's customer support.</p>
        <br/>
        <p>In case you find any content, video or photos defamatory or against public policy, you can notify us on the email address provided on the website, mentioning the reason as to why you find the material inappropriate.</p>
        <br/>
        <p>We provide advertising services for our registered customers and we also serve as in accommodation search system to our travelers, we don't assure personal inspections of the property. We cannot confirm the deals accuracy .</p>
        <br/>
        <p>We are not responsible for harmful technical programs damaging your computer via a website. We give our best to prevent unauthorized or intentional misuse of our website.</p>
        <br/>
        <p>Thus, we shall only be liable for any direct loss incurred by you due to our website and not for any indirect losses. Our liability will not arise In case of breach of contract or negligence, resulting in business losses.</p>
                
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

export default PagePolicy;
