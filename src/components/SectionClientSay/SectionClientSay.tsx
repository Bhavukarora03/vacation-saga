import Glide from "@glidejs/glide";
import Heading from "components/Heading/Heading";
import React, { FC,useState } from "react";
import { useEffect } from "react";
import ncNanoId from "utils/ncNanoId";
import clientSayMain from "images/clientSayMain.png";
import clientSay1 from "images/clientSay1.png";
import clientSay2 from "images/clientSay2.png";
import clientSay3 from "images/clientSay3.png";
import clientSay4 from "images/clientSay4.png";
import clientSay5 from "images/clientSay5.png";
import clientSay6 from "images/clientSay6.png";
import quotationImg from "images/quotation.png";
import quotationImg2 from "images/quotation2.png";

export interface SectionClientSayProps {
  className?: string;
}

/*const DEMO_DATA = [
  {
    id: 1,
    clientName: "Tiana Abie",
    clientAddress: "Malaysia",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
  },
  {
    id: 2,
    clientName: "Lennie Swiffan",
    clientAddress: "London",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
  },
  {
    id: 3,
    clientName: "Berta Emili",
    clientAddress: "Tokyo",
    content:
      "This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!",
  },
];*/

const DEMO_DATA = [
  
    {
        "id": 42,
        "clientName": "Misha Vavrichova",
        "clientAddress": "Greece",
        "content": "I am happy to recommend Brian from Vacation Saga.He and the team helped me to find the best possible accommodation in the center of Athens for the best possible price!  Also, my landlord is amazing and I will definitely use their services in the future!",
        "photo": "10906.png",
        "source": "google"
    },
    {
        "id": 41,
        "clientName": "Kakavas Thanasis",
        "clientAddress": "Greece",
        "content": "Congratulations for your company. Bill is so friendly and helped me for everything. He is so kind and so professional. I recommend this team highly. Great service, polite,quick response\r\nThanks for everything Bill.\r\nYou helped me to rent all my properties in Athens\r\nReally thanks ?",
        "photo": "8405.png",
        "source": "google"
    },
    {
        "id": 40,
        "clientName": "Chronis Potidis",
        "clientAddress": "Greece",
        "content": "Vacation saga is a fantastic experience services company at rental accomodation industry that ? am more than grateful for collaborating with. I received real interest with politeness and patience from a real respectful agent and the results were amazing. The way they work is really progressive based on the quality of authentic communication.\r\nI totally recommend the cooperation with them as the have a way to overcome all the usuall obstacles that others in the industry don't with ease. The cost is also a reason to choose them. They won a loyal partner and that's me. THNX SO MUCH HARSHITA AND VACATIONSAGA!",
        "photo": "6905.png",
        "source": "google"
    },
    {
        "id": 39,
        "clientName": "Nadia Romero",
        "clientAddress": "Greece",
        "content": "ishita, was very helpful and trying to help me find my apartment in athens.  I indicate your work. Thank you for everything.",
        "photo": "11046.png",
        "source": "google"
    },
    {
        "id": 38,
        "clientName": "Nardine Jildeh",
        "clientAddress": "Greece",
        "content": "I had a very good experience. The agent was kind and approachable which is very important. Will definitely reccomend it to everyone!",
        "photo": "10328.png",
        "source": "google"
    },
    {
        "id": 37,
        "clientName": "Ev Nikolaou",
        "clientAddress": "Greece",
        "content": "The agency is very active in finding new guests and helping communicate with them. I am looking forward in the healthy corporation in future.",
        "photo": "8396.png",
        "source": "google"
    },
    {
        "id": 36,
        "clientName": "Rezeg Mushtaha",
        "clientAddress": "Greece",
        "content": "Vacation saga is fantastic they helped me to find a good apartment very easy and they are always in contact with me to see if I’m happy with what they recommend for me. Much respect",
        "photo": "5706.png",
        "source": "google"
    },
    {
        "id": 35,
        "clientName": "Aikaterini Ioannidou",
        "clientAddress": "Greece",
        "content": "In our case our cooperation worked well. They found 2 students they want to stay in our flat in Thessaloniki. Their commission was a fixed amount. It was ok.\r\nThe girls will stay for 5 months.\r\nIt is true that they tried to contact me many times through whats app but it was ok for me. They tried to accomplish the reservation.",
        "photo": "7768.png",
        "source": "google"
    },
    {
        "id": 34,
        "clientName": "George",
        "clientAddress": "Greece",
        "content": "Very reliable company, excellent communication. I strongly recommend it. Thank you so much",
        "photo": "11335.png",
        "source": "google"
    },
    {
        "id": 33,
        "clientName": "Zeeshan",
        "clientAddress": "Greece",
        "content": "They have a good network in many countries to offer accommodation for short term and long term. They connect you with the owner and get their fees once the deal is done. They managed to solve my short-term accommodation problem in Athens, Greece in a tourist season.\r\nLike",
        "photo": "5749.png",
        "source": "google"
    },
    {
        "id": 32,
        "clientName": "Zeeshan Qamar",
        "clientAddress": "Greece",
        "content": "They have a good network in many countries to offer accommodation for short term and long term. They connect you with the owner and get their fees once the deal is done. They managed to solve my short-term accommodation problem in Athens, Greece in a tourist season.",
        "photo": "12181.png",
        "source": "google"
    },
    {
        "id": 29,
        "clientName": "Elisa, Italy",
        "clientAddress": "",
        "content": "Our stay at Mirela's place was great. Apartment was clean, well furnished and equipped with all you need. Mirela welcome us also with fresh fruit and beverages in the fridge .... very recommended",
        "photo": "",
        "source": "google"
    },
    {
        "id": 28,
        "clientName": "Ad Ben, Belgium",
        "clientAddress": "",
        "content": "Very nice place - everything was ready for us. We were surprised about the high commitment of our host (very considerate).",
        "photo": "",
        "source": "google"
    },
    {
        "id": 27,
        "clientName": "Peter, Slovakia",
        "clientAddress": "",
        "content": "10/10 for staff, cleanliness, location, facilities, comfort and value for money. Everything was perfect :)",
        "photo": "",
        "source": "google"
    }


];

 
const SectionClientSay: FC<SectionClientSayProps> = ({ className = "" }) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId();

  useEffect(() => {
    getData()
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      new Glide(`.${UNIQUE_CLASS}`, {
        perView: 1,
      }).mount();
    }
    
  }, []);
  const [dummyData, setDummyData] = useState([])
  const getData = () => {
   // alert('ok');
   let dd=[]
   let url = 'https://admin.vacationsaga.com/api/testionial';
   var response = fetch(url).then(data=> data.json())
   response.then((data)=>{
     data.map((item)=>(
     dd.push({id:item.id,clientName:item.clientName,clientAddress:item.clientAddress,content:item.content,photo:item.photo,source:item.source})
     ))
     setDummyData(dd)
     console.log('api array',dd)
   }).catch(e=>{console.log(e)})
  }
  console.log('static array',DEMO_DATA)
  const renderBg = () => {
    return (
      <div className="hidden md:block">
        <img className="absolute top-9 -left-20" src={clientSay1} alt="" />
        <img
          className="absolute bottom-[100px] right-full mr-40"
          src={clientSay2}
          alt=""
        />
        <img
          className="absolute top-full left-[140px]"
          src={clientSay3}
          alt=""
        />
        <img
          className="absolute -bottom-10 right-[140px]"
          src={clientSay4}
          alt=""
        />
        <img
          className="absolute left-full ml-32 bottom-[80px]"
          src={clientSay5}
          alt=""
        />
        <img className="absolute -right-10 top-10 " src={clientSay6} alt="" />
      </div>
    );
  };
let centerstyle={
  'margin-top': '-6px',
  'margin-right': '-55px',
}

let dummyicon={
  'border-radius': '100%',
  'width': '74px',
  'height': '74px',
}
  return (
    <div
      className={`nc-SectionClientSay relative ${className} `}
      data-nc-id="SectionClientSay"
    >
      <Heading desc="Let's see what people think of VS" isCenter>
        Good news from far away
      </Heading>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        {renderBg()}
       
        <div className={`mt-12 lg:mt-16 relative ${UNIQUE_CLASS}`}>
          <img
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotationImg}
            alt=""
          />
          <img
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotationImg2}
            alt=""
          />
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides ">
              {DEMO_DATA.map((item, index) => (
                
                <li
                  key={index}
                  className="glide__slide flex flex-col items-center text-center"
                >
                  {(() => {
                    let sourcetype
                    let iconstyle
                    if(item.source=='google')
                    {
                      sourcetype='google';
                      iconstyle={
                        'font-size': '16px',
                         'color': 'red',
                         'font-weight':'bold',
                         'border':'solid 1px '
                      }
                    }
                    else{
                      sourcetype='facebook-square';
                      iconstyle={
                        'font-size': '27px',
                         'color': 'rgb(24, 119, 242)',
                         
                      }
                    }
                     if (item.photo=='') {
                      return (
                        <div>
                   <img className="mx-auto" style={dummyicon} src={'https://vacationsaga.com/img/about_img/avatars.jpg'} alt="" />
                   <center style={centerstyle}><i className={'lab la-'+sourcetype} style={iconstyle}></i></center>
                   </div>
                   )
                     }
                     if(item.photo!=''){
                      return (
                        <div>
                        <img className="mx-auto kk" src={'https://admin.vacationsaga.com/public/images/owner/'+item.photo} alt="" />
                        <center style={centerstyle}><i className={'lab la-'+sourcetype} style={iconstyle}></i></center>
                   </div>
                      )
                     
                     }
                     
                  })()}
                   <span className="block text-2xl">{item.content.replace(/<\/?[^>]+(>|$)/g, "")}</span>
                  <span className="block mt-8 text-2xl font-semibold">
                    {item.clientName.replace(/<\/?[^>]+(>|$)/g, "")}
                  </span>
                  <div className="flex items-center space-x-2 text-lg mt-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{item.clientAddress.replace(/<\/?[^>]+(>|$)/g, "")}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="mt-10 glide__bullets flex items-center justify-center"
            data-glide-el="controls[nav]"
          >
            {DEMO_DATA.map((item, index) => (
              <button
                key={index}
                className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
