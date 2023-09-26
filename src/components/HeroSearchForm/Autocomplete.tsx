
import PlacesAutocomplete from 'react-places-autocomplete';
import  "./autocomplete.css";
import { fchmod } from 'fs';
import $ from 'jquery';
import React,{ useEffect, useState } from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
  
  handleChange = address => {
    this.setState({ address });
  };
 
  /*handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };*/
  
  
  
  render() {
   
    function opensuggestion(){
      $(".autocomplete-dropdown-container").show();
      }

    function hidepopup()
    {
     // alert('ok');
      $(".autocomplete-dropdown-container").hide();
    }
  
    var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    const location = usp.get('location');
    //alert(location);
    let query;
    if(location==null)
    {
      query='Where are you going?'
    }
    else{
      query=location
    }
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          
          <div >  <svg id='svg' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <input onKeyUp={opensuggestion} className='location-search-input block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate' id="suggetion" name="location" 
              {...getInputProps({
                placeholder: query,
                
              })}
          
            />
            <input type='hidden' id="mausi" value={query}></input>
            <div className="autocomplete-dropdown-container bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200" id='kuchhto'>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className='input-suggestion bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200'
                    {...getSuggestionItemProps(suggestion, {
                      
                      style,
                    })}
                   
                  >
                    <svg id="svgsuggestion" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span class="suggestionids" >{suggestion.description}</span>
                  
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
  
}

export default Autocomplete;