import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput, { GuestsInputProps } from "./GuestsInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import ButtonSubmit from "./ButtonSubmit";
import moment from "moment";
import { FC } from "react";
import $ from "jquery";
import {useHistory} from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultDate = moment();
const defaultGuestValue: GuestsInputProps["defaultValue"] = {
  guestAdults: 2,
  guestChildren: 2,
  guestInfants: 1,
};

export interface ExperiencesSearchFormProps {
  haveDefaultValue?: boolean;
}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({
  haveDefaultValue,
}) => {
  const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
  const [locationInputValue, setLocationInputValue] = useState("");
  const [guestValue, setGuestValue] = useState({});

  const [dateFocused, setDateFocused] = useState<boolean>(false);
  //

  useEffect(() => {
    if (haveDefaultValue) {
      setdateValue(defaultDate);
      setLocationInputValue(defaultLocationValue);
      setGuestValue(defaultGuestValue);
    }
  }, []);

  //
let formstyle={
  'width':'50%',
}
let styletextbox={'padding-left': '37px','height': '54px',}
const history = useHistory()
const [Errormsg, Seterrormsg]=useState([])
function pagesubmit()
{
  let vsid=$("#VSID").val();
 // alert(vsid)
  let url = 'https://admin.vacationsaga.com/api/searchbyvsid?id=' + vsid;
  let res = fetch(url).then(data => data.json()).then(data => {
    if(data.pid==undefined)
    {
      alert('Invalid VS ID');
     Seterrormsg('Invalid VS ID');
    }
    else{ history.push('/listing-stay-detail/'+data.pid+'?poid='+data.portions_ids+"#days="+data.agent_ids)
  }
  }).catch(e => { console.log(e) })
  
}
  const renderForm = () => {
    <span>{Errormsg}</span>
    return (
     
      <form  className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700  md:divide-y-0">
        
        <input type='text' id="VSID" style={styletextbox} placeholder="Enter VS ID" class='location-search-input block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate'></input>

        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
        <button type="button" id="btnsearchbyvsid" onClick={pagesubmit} class="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"><span class="mr-3 md:hidden">Search</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;
