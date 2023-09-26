
import React, { FC, useEffect, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Cookies from 'universal-cookie';
import CommonLayout from "./CommonLayout";
import { Link } from "react-router-dom";
import "./otpstyle.css"
const MyBookings = () => {
 
  const cookies = new Cookies();
  //console.log('global cookies', cookies.get('ownerid')); // Pacman
  if (cookies.get('ownerid') == undefined) {
    window.location = '/';
  }
  const [info, settravellerbookingifo] = useState([])
  const [message, setmessage] = useState([])
  const [style, setstyle] = useState([])
  useEffect(() => {
    ownerprofile()
  }, [])
  function ownerprofile() {
    var url = 'https://admin.vacationsaga.com/api/mybookingowner/'+cookies.get('ownerid');
    var response = fetch(url).then(data => data.json())
    response.then((data) => {
      if (data.length) {
        settravellerbookingifo(data);
        console.log('mausia ho kya meri', data)
      }
    }).catch(e => {
      console.log(e)
    })
  }

  function cancelbooking(a)
{
  alert(a);
  var url = 'https://admin.vacationsaga.com/api/ownerbookingcancel/'+a;
  var response = fetch(url).then(data => data.json())
  response.then((data) => {
    let msg='Booking Cancel Successfully';
            setmessage(msg);
            let mystyle = {
              color: "#fff",
              backgroundColor: "green",
              padding: "10px",
              fontFamily: "Arial"
            };
            setstyle(mystyle)
            ownerprofile()
            window.scroll({top: 10, left: 0, behavior: 'smooth' })
  }).catch(e => {
    console.log(e)
  })
}
function confirmbooking(a)
{
  alert(a);
  var url = 'https://admin.vacationsaga.com/api/confirmbookingbyowner/'+a;
  var response = fetch(url).then(data => data.json())
  response.then((data) => {
    let msg='Booking Confirm Successfully';
            setmessage(msg);
            let mystyle = {
              color: "#fff",
              backgroundColor: "green",
              padding: "10px",
              fontFamily: "Arial"
            };
            setstyle(mystyle)
            ownerprofile()
            window.scroll({top: 10, left: 0, behavior: 'smooth' })
  }).catch(e => {
    console.log(e)
  })
}
  return (
    <div>
      <CommonLayout>
      <span style={style}>{message}</span>
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Booking Request</h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="max-w-1xl">
          <table className="data-table">
            <thead>
              <th>#</th>
              <th>Property Title</th>
              <th>Address</th>
              <th>Booking Dates</th>
              <th>Total Guest</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
        <tbody >
        {info.map((row,index) => (
          
          <tr>
            <td >{index+1}</td>
            <td >VS {row.pdid} <Link to={'/pay-done'}>View</Link></td>
            <td >{row.pname}</td>
            <td >{row.s_date} - { row.e_date }</td>
            <td >{'Adult: '+row.adult} - {'Children: '+row.child}</td>
            <td >{'\u20AC'}{ row.portion_sum }</td>
            <td > {(() => {
        if (row.confirm_status==0) {
          return (
            <div><span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  relative">Pending</span></div>
          )
        } 
        if (row.confirm_status==1) {
          return (
            <div><span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100  relative">Booking Confirm</span></div>
          )
        }
        if (row.confirm_status==2) {
          return (
            <div><span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  relative">Booking Cancel</span></div>
          )
        }
      })()}</td>
            <td>
            {(() => {
        if (row.confirm_status==0) {
          return (
            <div><span onClick={() => {if(window.confirm('Are you sure to cancel this booking?')){ cancelbooking(row.booking_id)};}} className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">Cancel</span> 
            <span onClick={() => {if(window.confirm('Are you sure to confirm this booking?')){ confirmbooking(row.booking_id)};}} className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100  relative">Confirm</span>
            </div>
            
            )
        } 
        if (row.confirm_status==1) {
          return (
            <div><span onClick={() => {if(window.confirm('Are you sure to cancel this booking?')){ cancelbooking(row.booking_id)};}} className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">Cancel</span> </div>
          )
        }
        if (row.confirm_status==2) {
          return (
            <div><span onClick={() => {if(window.confirm('Are you sure to confirm this booking?')){ confirmbooking(row.booking_id)};}} className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100  relative">Confirm</span></div>
          )
        }
      })()}
            </td>
          </tr>
           ))}  
        </tbody>
      </table>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default MyBookings;