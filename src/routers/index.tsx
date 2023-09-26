import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import ListingStayPageSearch from "containers/ListingStayPage/ListingStayPageSearch";
import ListingStayPage from "containers/ListingStayPage/ListingStayPage";
import ListingStayTypePage from "containers/ListingStayPage/ListingStayTypePage";
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage";
import ListingExperiencesPage from "containers/ListingExperiencesPage/ListingExperiencesPage";
import ListingExperiencesMapPage from "containers/ListingExperiencesPage/ListingExperiencesMapPage";
import ListingStayDetailPage from "containers/ListingDetailPage/ListingStayDetailPage";
import ListingExperiencesDetailPage from "containers/ListingDetailPage/ListingExperiencesDetailPage";
import ListingCarPage from "containers/ListingCarPage/ListingCarPage";
import ListingCarMapPage from "containers/ListingCarPage/ListingCarMapPage";
import ListingCarDetailPage from "containers/ListingDetailPage/ListingCarDetailPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import PayPage from "containers/PayPage/PayPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountBilling from "containers/AccountPage/AccountBilling";
import AccountSettings from "containers/AccountPage/Account-Settings";
import BankDetail from "containers/AccountPage/BankDetail";
import TravellerAccountPage from "containers/TravellerAccountPage/TravellerAccountPage";
import TravellerMyRequest from "containers/TravellerAccountPage/TravellerMyRequest";
import TravellerUpcoming from "containers/TravellerAccountPage/TravellerUpcoming";
import TravellerBookingHistory from "containers/TravellerAccountPage/TravellerBookingHistory";
import TravellerPropetyReference from "containers/TravellerAccountPage/TravellerPropetyReference";
import TravellerAccountPass from "containers/TravellerAccountPage/AccountPass";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageHostYourProperty from "containers/PageHostYourProperty/PageHostYourProperty";
import PageHowWeWork from "containers/PageHowWeWork/PageHowWeWork";
import OfferPayment from "containers/OfferPayment/OfferPayment";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageSignUpOtp from "containers/PageSignUp/PageSignUpOtp";
import PageSignUpWithLeadId from "containers/PageSignUpWithLeadId/PageSignUp";
import PageTravellerSignUp from "containers/PageTravellerSignUp/PageTravellerSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageForgotPassword from "containers/PageForgotPassword/PageForgotPassword";
import PageChangePassword from "containers/PageChangePassword/PageChangePassword";
import PageTravellerLogin from "containers/PageTravellerLogin/PageTravellerLogin";
import PagePhoneVerification from "containers/PageTravellerLogin/PagePhoneVerification";
import PagePhoneConfirmation from "containers/PageLogin/PagePhoneConfirmation";
import PageOwnerHelp from "containers/PageOwnerHelp/PageOwnerHelp";
import PageTravellerHelp from "containers/PageTravellerHelp/PageTravellerHelp";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1";
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2";
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3";
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4";
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5";
import PageAddListing6 from "containers/PageAddListing1/PageAddListing6";
import PageAddListing7 from "containers/PageAddListing1/PageAddListing7";
import PageAddListing8 from "containers/PageAddListing1/PageAddListing8";
import PageAddListing9 from "containers/PageAddListing1/PageAddListing9";
import PageAddListing10 from "containers/PageAddListing1/PageAddListing10";
import PageHome2 from "containers/PageHome/PageHome2";
import ListingRealEstateMapPage from "containers/ListingRealEstatePage/ListingRealEstateMapPage";
import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
import SiteHeader from "containers/SiteHeader";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";
import PropertyPortions from "containers/AccountPage/PropertyPortions";
import ManageCalendar from "containers/AccountPage/ManageCalendar";
import PageTermsAndCondition from "containers/PageTermsAndCondition/PageTermsAndCondition";
import PagePolicy from "containers/PagePolicy/PagePolicy";
import MyBookings from "containers/AccountPage/MyBookings";
import BookingHistory from "containers/AccountPage/BookingHistory";
import SecretLogin from "containers/PageLogin/PageSecretLogin";
import PageLoginWithOtp from "containers/PageLogin/PageLoginWithOtp";
import PagetraveLoginWithOtp from "containers/PageTravellerLogin/PageLoginWithOtp";
import PagetravellerForgotPassword from "containers/PageTravellerLogin/PageForgotPassword";
import PageTraveChangePassword from "containers/PageTravellerLogin/PageChangePassword";
import TravellerSecretLogin from "containers/PageTravellerLogin/PageTravellerSecretLogin";
export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  { path: "/home-1-header-2", exact: true, component: PageHome },
  { path: "/home-2", component: PageHome2 },
  //
  { path: "/properties", component: ListingStayPage },
  { path: "/listing-stay-map", component: ListingStayMapPage },
  { path: "/listing-stay-detail", component: ListingStayDetailPage },
  { path: "/listing-stay-types", component: ListingStayTypePage },
  //
  {
    path: "/listing-experiences",
    component: ListingExperiencesPage,
  },
  {
    path: "/listing-experiences-map",
    component: ListingExperiencesMapPage,
  },
  {
    path: "/listing-experiences-detail",
    component: ListingExperiencesDetailPage,
  },
  //
  { path: "/listing-car", component: ListingCarPage },
  { path: "/listing-car-map", component: ListingCarMapPage },
  { path: "/listing-car-detail", component: ListingCarDetailPage },
  //
  { path: "/listing-real-estate-map", component: ListingRealEstateMapPage },
  { path: "/listing-real-estate", component: ListingRealEstatePage },
  //
  { path: "/listing-flights", component: ListingFlightsPage },
  //
  { path: "/checkout", component: CheckOutPage },
  { path: "/pay-done", component: PayPage },
  //
  { path: "/author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/account-settings", component: AccountSettings },
  { path: "/account-password", component: AccountPass },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-billing", component: AccountBilling },
  { path: "/bank-detail", component: BankDetail },
  
  
   { path: "/account-traveller", component: TravellerAccountPage },
   { path: "/traveller-my-request", component: TravellerMyRequest },
   { path: "/traveller-upcoming", component: TravellerUpcoming },
   { path: "/traveller-booking-history", component: TravellerBookingHistory },
   { path: "/traveller-propety-reference", component: TravellerPropetyReference },
   { path: "/traveller-pass", component: TravellerAccountPass },
   
  //
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  //
  { path: "/add-listing-1", component: PageAddListing1 },
  { path: "/add-listing-2", component: PageAddListing2 },
  { path: "/add-listing-3", component: PageAddListing3 },
  { path: "/add-listing-4", component: PageAddListing4 },
  { path: "/add-listing-5", component: PageAddListing5 },
  { path: "/add-listing-6", component: PageAddListing6 },
  { path: "/add-listing-7", component: PageAddListing7 },
  { path: "/add-listing-8", component: PageAddListing8 },
  { path: "/add-listing-9", component: PageAddListing9 },
  { path: "/add-listing-10", component: PageAddListing10 },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
	{ path: "/how-we-work", component:PageHowWeWork},
  { path: "/signup", component: PageSignUp },
  { path: "/signup-owner", component: PageSignUpWithLeadId },
  { path: "/login", component: PageLogin },
  { path: "/TravellerSignUp", component: PageTravellerSignUp},
  { path: "/Traveller-login", component: PageTravellerLogin },
  { path: "/OwnerHelp", component:PageOwnerHelp},
  { path: "/TravellerHelp", component:PageTravellerHelp},
  {path: "/offer_payment", component:OfferPayment},
  { path: "/subscription", component: PageSubcription },
  //{path: "/listing-stay-search", component:ListingStayPageSearch},
  
  {path: "/listing-stay-search", component:ListingStayMapPage},
  {path: "/SignUpOtp", component:PageSignUpOtp },
  {path: "/PropertyPortions", component:PropertyPortions},
  {path: "/phone-verification", component:PagePhoneVerification},
  {path: "/phone-confirmation" , component:PagePhoneConfirmation},
  {path: "/host-your-property" , component:PageHostYourProperty},
  {path: "/terms-and-condition" , component:PageTermsAndCondition},
  {path: "/privacy-policy" , component:PagePolicy},
  {path: "/forgot-password", component:PageForgotPassword},
  {path: "/owner_changepassword", component:PageChangePassword},
  {path: "/mybookings", component:MyBookings},
  {path: "/booking-history", component:BookingHistory},
  {path: "/manage-calendar", component:ManageCalendar},
  {path: "/Secrete-Login", component:SecretLogin},
  {path: "/login-with-otp",component:PageLoginWithOtp},
  {path: "/traveler-login-with-otp",component:PagetraveLoginWithOtp},
  {path: "/forgot-pass",component:PagetravellerForgotPassword},
  {path: "/changepassword",component:PageTraveChangePassword},
  {path: "/Traveller-Secrete-Login",component:TravellerSecretLogin}
  //
];

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <SiteHeader />

      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
