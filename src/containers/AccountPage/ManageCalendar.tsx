
import React, { FC,Fragment, useEffect, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Cookies from 'universal-cookie';
import CommonLayout from "./CommonLayout";
import { Tab } from "@headlessui/react";
import moment from "moment";
import useWindowSize from "hooks/useWindowResize";
import Input from "shared/Input/Input";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import "./otpstyle.css"
const ManageCalendar = () => {
  
  
  const cookies = new Cookies();
  //console.log('global cookies', cookies.get('ownerid')); // Pacman
  if (cookies.get('ownerid') == undefined) {
    window.location = '/';
  }
  const [info, settravellerbookingifo] = useState([])
  useEffect(() => {
    mypricing()
    bookedroom()
    base_price()
    onetime()
    blockdates()
  },[])
  function mypricing() {
   // alert('ok');
    var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  const location = usp.get('id');
    var url = 'https://admin.vacationsaga.com/api/mypricings/'+location;
    var response = fetch(url).then(data => data.json())
    response.then((data) => {
      if (data.length) {
        setpricing(data);
        console.log('mausia ho kya meri', data)
      }
    }).catch(e => {
      console.log(e)
    })
  }
  function bookedroom() {
    var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  const location = usp.get('id');
    var url = 'https://admin.vacationsaga.com/api/bookedroom/'+location;
    var response = fetch(url).then(data => data.json())
    response.then((data) => {
      if (data.length) {
        setbookedroom(data);
        
      }
    }).catch(e => {
      console.log(e)
    })
  }
  function base_price() {
    var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  const location = usp.get('id');
    var url = 'https://admin.vacationsaga.com/api/baseprice/'+location;
    var response = fetch(url).then(data => data.json())
    response.then((data) => {
      if (data.length) {
        setbaseprice(data);
        data.map((row) => (
          //alert('ok'),
          setbaseid(row.srno),
          setbase(row.priceforanc)
        ))
      }
    }).catch(e => {
      console.log(e)
    })
  }

  function blockdates()
  {
    var urloc = window.location.href;  
    var parts = urloc.split("?");
    var last_part = parts[parts.length-1];
    const Querystr=last_part
    const usp=new URLSearchParams(Querystr)
    const location = usp.get('id');
      let url = 'https://admin.vacationsaga.com/api/booking_detail/'+location;
      let res = fetch(url).then(data => data.json()).then(data => {
       setbooking(data)
      }).catch(e=>{console.log(e)})
  }

  let [categories] = useState(["Manage Pricing","Booked Dates","Base Price"]);
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(0, "days"),
  
  });
  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
  useState<FocusedInputShape>("startDate");
  const windowSize = useWindowSize();
  const [pricing,setpricing]=useState([]);
  const [bookedrooms,setbookedroom]=useState([])
  const [baseprice,setbaseprice]=useState([])
  const [booking,setbooking]=useState([])
  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34;
    }
    if (windowSize.width <= 500) {
      return undefined;
    }
    if (windowSize.width <= 1280) {
      return 56;
    }
    return 48;
  };
  var arrdisabledate = booking
  var urloc = window.location.href;  
  var parts = urloc.split("?");
  var last_part = parts[parts.length-1];
  const Querystr=last_part
  const usp=new URLSearchParams(Querystr)
  const sid = usp.get('id');
  const [message, setmessage] = useState([])
  const [style, setstyle] = useState([])
  const [base_id,setbaseid]=useState([])
  const [setbaser,setbase]=useState([])
  function handleClickpricing(event) {
    event.preventDefault();
      const data = new FormData(event.target);
      
      // Send data to the backend via POST
     let url = fetch('https://admin.vacationsaga.com/api/update_pricing', {  // Enter your IP address here
   
        method: 'POST', 
        mode:'cors',
        body: data
       
      }).then((response) => response.json())
      .then((responseJson) => {
       // alert(responseJson);
        if(responseJson==1)
        {
          let msg='Pricing updated successfully';
          setmessage(msg);
          let mystyle = {
            color: "#fff",
            backgroundColor: "green",
            padding: "10px",
            fontFamily: "Arial"
          };
          setstyle(mystyle)
          mypricing()
        }
        else
        {
          let msg='Pricing not updated ';
          setmessage(msg);
          let mystyle = {
            color: "#a94442",
            backgroundColor: "#f2dede",
            padding: "10px",
            fontFamily: "Arial",
            width:'100%'
          };
          setstyle(mystyle)
        }
      })
      .catch((error) => {
        console.error(error);
      });
      window.scroll({top: 10, left: 0, behavior: 'smooth' })
    }
   
    
function handleClickbooking(event) {
      event.preventDefault();
        const data = new FormData(event.target);
        
        // Send data to the backend via POST
       let url = fetch('https://admin.vacationsaga.com/api/booking_dateupddate', {  // Enter your IP address here
     
          method: 'POST', 
          mode:'cors',
          body: data
         
        }).then((response) => response.json())
        .then((responseJson) => {
         // alert(responseJson);
          if(responseJson==1)
          {
            let msg='Booking Date updated successfully';
            setmessage(msg);
            let mystyle = {
              color: "#fff",
              backgroundColor: "green",
              padding: "10px",
              fontFamily: "Arial"
            };
            setstyle(mystyle)
            bookedroom()
          }
          else
          {
            let msg='Booking Date not updated ';
            setmessage(msg);
            let mystyle = {
              color: "#a94442",
              backgroundColor: "#f2dede",
              padding: "10px",
              fontFamily: "Arial",
              width:'100%'
            };
            setstyle(mystyle)
          }
        })
        .catch((error) => {
          console.error(error);
        });
        window.scroll({top: 10, left: 0, behavior: 'smooth' })
      }

         
      function handleClickbase_price(event) {
        event.preventDefault();
          const data = new FormData(event.target);
          
          // Send data to the backend via POST
         let url = fetch('https://admin.vacationsaga.com/api/update_baseprice', {  // Enter your IP address here
       
            method: 'POST', 
            mode:'cors',
            body: data
           
          }).then((response) => response.json())
          .then((responseJson) => {
           // alert(responseJson);
            if(responseJson==1)
            {
              let msg='Base Price updated successfully';
              setmessage(msg);
              let mystyle = {
                color: "#fff",
                backgroundColor: "green",
                padding: "10px",
                fontFamily: "Arial"
              };
              setstyle(mystyle)
              base_price()
    onetime()
            }
            else
            {
              let msg='Base Price not updated ';
              setmessage(msg);
              let mystyle = {
                color: "#a94442",
                backgroundColor: "#f2dede",
                padding: "10px",
                fontFamily: "Arial",
                width:'100%'
              };
              setstyle(mystyle)
            }
          })
          .catch((error) => {
            console.error(error);
          });
          window.scroll({top: 10, left: 0, behavior: 'smooth' })
        }
        function onetime()
        {
        baseprice.map((row) => (
          //alert('ok'),
          setbaseid(row.srno),
          setbase(row.priceforanc)
        ))
}

function deletebookings(a)
{
  var url = 'https://admin.vacationsaga.com/api/deletebookings/'+a;
  var response = fetch(url).then(data => data.json())
  response.then((data) => {
    let msg='Booking Date Deleted successfully';
            setmessage(msg);
            let mystyle = {
              color: "#fff",
              backgroundColor: "green",
              padding: "10px",
              fontFamily: "Arial"
            };
            setstyle(mystyle)
            bookedroom()
            window.scroll({top: 10, left: 0, behavior: 'smooth' })
  }).catch(e => {
    console.log(e)
  })
}

function deletepricings(a)
{
  var url = 'https://admin.vacationsaga.com/api/deletepricings/'+a;
  var response = fetch(url).then(data => data.json())
  response.then((data) => {
    let msg='Pricing Deleted successfully';
            setmessage(msg);
            let mystyle = {
              color: "#fff",
              backgroundColor: "green",
              padding: "10px",
              fontFamily: "Arial"
            };
            setstyle(mystyle)
            mypricing()
            window.scroll({top: 10, left: 0, behavior: 'smooth' })
  }).catch(e => {
    console.log(e)
  })
}
  return (
    
    <div>
      <CommonLayout>
      <span style={style}>{message}</span>
      <br/><br/>
        <div className="grid md:grid-cols-3 gap-2 lg:grid-cols-2 xl:gap-8">
          {/* HEADING */}
        
          <h2 className="text-3xl font-semibold">Manage Calendar</h2>
         
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
          <DayPickerRangeController
              startDate={selectedDate.startDate}
              endDate={selectedDate.endDate}
              onDatesChange={(date) => setSelectedDate(date)}
              focusedInput={focusedInputSectionCheckDate}
              onFocusChange={(focusedInput) =>
                setFocusedInputSectionCheckDate(focusedInput || "startDate")
              }
              initialVisibleMonth={null}
              numberOfMonths={windowSize.width < 1280 ? 1 : 1}
              daySize={getDaySize()}
              hideKeyboardShortcutsPanel={false}
              isDayBlocked={(date) => {
                if (moment(date).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')) {
                    return false;
                }
                if (moment(date) < moment()) {
                    return true;
                }
                if(arrdisabledate.indexOf(moment(date).format('DD-MM-YYYY')) > -1)
                {
                 // alert(moment(date).format('DD-MM-YYYY'))
                  return true;
                }
            }}
              
            />
          </div>
          <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800">
          <Tab.Group>
            <Tab.List className="flex space-x-1 overflow-x-auto">
              {categories.map((item) => (
                <Tab key={item} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                        selected
                          ? "bg-secondary-900 text-secondary-50 "
                          : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      } `}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="mt-8">

                <div  className="">
                <form method="POST"  onSubmit={handleClickpricing} className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
               <input required name='start_date' type='date' className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="From Date"></input>
               <input required name='end_date' type='date' className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="end Date"></input>
               <input required name='price' type='number' className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="Price"></input>
             
              <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Submit</button>
                </div>
                <input type='hidden' name="sid" value={sid}></input>
                </form>
                <br/><br/>
                <table  class="table table-striped table-bordered data-table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No</th>
                                                <th>Start Date</th>                                
                                                <th>End Date</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {pricing.map((row,index) => (
                                            <tr>
                                              <td>{index+1}</td>
                                              <td>{row.start_date}</td>
                                              <td>{row.end_date}</td>
                                              <td>{'\u20AC'+row.priceforanc}</td>
                                              <td><a onClick={() => {if(window.confirm('Are you sure to delete this record?')){ deletepricings(row.srno)};}}><i class="las la-trash text-lg"></i></a></td>
                                            </tr>
                                         ))}
                                        </tbody>
                                    </table>
                </div>
              </Tab.Panel>
              <Tab.Panel className="mt-8">
                <div  className="">
                <form method="POST"  onSubmit={handleClickbooking} className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
               <input required type='date' name='booking_date' className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="From Date"></input>
              
              <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Submit</button>
                </div>
                <input type='hidden' name="sid" value={sid}></input>
                </form>
                <br/><br/>
                <table  class="table table-striped table-bordered data-table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No</th>
                                                <th>Booking Date</th>                                
                                               
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {bookedrooms.map((row,index) => (
                                            <tr>
                                              <td>{index+1}</td>
                                              <td>{row.booking_date}</td>
                                             
                                              <td><a onClick={() => {if(window.confirm('Are you sure to delete this record?')){ deletebookings(row.id)};}}><i class="las la-trash text-lg"></i></a></td>
                                            </tr>
                                         ))}
                                        </tbody>
                                    </table>
                </div>
              </Tab.Panel>
              <Tab.Panel className="mt-8">
                <div  >
                <form method="POST"  onSubmit={handleClickbase_price} className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
               <input required type='number' name='base_price' defaultValue={setbaser} className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="Base Price"></input>
              
              <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Submit</button>
                </div>
                <input type='hidden' name="sid" value={sid}></input>
                <input name="id" type='hidden' value={base_id}></input>
                </form>
                <br/><br/>
                <table  class="table table-striped table-bordered data-table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No</th>
                                                <th>Base Price</th>                                
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {baseprice.map((row,index) => (
                                            <tr>
                                              <td>{index+1}</td>
                                              <td>{row.priceforanc}</td>
                                             
                                            </tr>
                                         ))}
                                        </tbody>
                                    </table>
                </div>
              </Tab.Panel>
             
            </Tab.Panels>
          </Tab.Group>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default ManageCalendar;
