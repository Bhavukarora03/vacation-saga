import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import SearchLocationInput from "./SearchLocationInput";
import Autocomplete from "./Autocomplete";
import GuestsInputforsearchpage, { GuestsInputPropssearch } from "./GuestsInputforsearchpage";
import { FocusedInputShape } from "react-dates";
import StayDatesRangeInput from "./StayDatesRangeInput";
import ButtonSubmit from "./ButtonSubmit";
import moment from "moment";
import { FC } from "react";
import {useHistory} from "react-router-dom";
import $ from "jquery";

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface StaySearchFormProps {
  haveDefaultValue?: boolean;
}

// DEFAULT DATA FOR ARCHIVE PAGE

const defaultLocationValue = 'a';
//function rundefault()
//{

  // return startDate+'#'+endDate;
//}



const StaySearchForm: FC<StaySearchFormProps> = ({
  haveDefaultValue = false,
}) => {
  var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    let startDate = usp.get('startDate');
    let endDate = usp.get('endDate');
    if(startDate==undefined || startDate=='' || startDate=='Check in')
    {
      startDate=moment();
    }
    if(endDate==undefined || endDate=='' || endDate=='Check out')
    {
      endDate=moment();
    }
    //var fromdate = moment(endDate, "DD-MMY-Y").format("DD MMM Y");
   // var toDate = moment(endDate, "DD-MMY-Y").format("DD MMM Y");
   const defaultDateRange = {
  
    startDate: moment(startDate),
    endDate: moment(endDate),
    //endDate: moment().add(3, "days"),
  };
  const defaultGuestValue: GuestsInputPropssearch["defaultValue"] = {
    guestAdults: parseInt(usp.get('adult')),
    guestChildren: parseInt(usp.get('children')),
    //guestInfants: 1,
  };
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({});

  const [dateFocused, setDateFocused] = useState<FocusedInputShape | null>(
    null
  );
//alert(dateFocused)
  //
  useEffect(() => {
    if (haveDefaultValue) {
      
      setDateRangeValue(defaultDateRange);
      setLocationInputValue(defaultLocationValue);
      setGuestValue(defaultGuestValue);
    }
    
  }, []);
  //
  const history = useHistory()
  function pagesubmit()
  {
    let location=$("#suggetion").val()
    let temp_location=$("#mausi").val()
    if(location=='')
    {
      location=temp_location
    }
    else
    {
      location=$("#suggetion").val();
    }
   let startdate=$("#checkindate").val();
   let enddate=$("#checkoutdate").val();
   let Adults=$("#Adults").val();
   let Children=$("#Children").val();
   if(Adults==undefined)
   {
    Adults=0;
   }
   if(Children==undefined)
   {
    Children=0;
   }
   //alert(Adults)
   //alert(Children)
    history.push('/listing-stay-search?location='+location+'&startDate='+startdate+'&endDate='+enddate+'&adult='+Adults+'&children='+Children+'')
  }
  $('#kuchhto').on('click', function(e){
    //e.preventDefault();
  //  alert('ok ho');
    setDateFocused("startDate")
  });
  const renderForm = () => {
    return (
      <form  method="GET" action="/listing-stay-search" className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700 md:divide-y-0">
        <Autocomplete 
        //  defaultValue={locationInputValue}
        //  onChange={(e) => setLocationInputValue(e)}
         // onClick={() => setDateFocused("startDate")}
         
        />
        <StayDatesRangeInput
          defaultValue={dateRangeValue}
          defaultFocus={dateFocused}
          onFocusChange={(focus) => setDateFocused(focus)}
          onChange={(data) => setDateRangeValue(data)}
        />
        <GuestsInputforsearchpage
          defaultValue={guestValue}
          onChange={(data) => setGuestValue(data)}
        />
        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
         
          <button type="button" id="btnsearch" onClick={pagesubmit} class="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"><span class="mr-3 md:hidden">Search</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
