import React, { useState, useEffect, useRef } from "react";
import './style.css';
let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
 //   { types: ["(cities)"], componentRestrictions: { country: "" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
    
  );
  
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);

}

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCZJoVKDBTCK93CrvnE77qc9CQH1Q82FGE&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);
let style={'padding-left':'12px'}
  return (
    <div className="flex-grow">
      <input
	  className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Location Where are you going?"
        value={query}
        style={style}
        name='location'
        required
      />
    </div>
  );
}

export default SearchLocationInput;