import React from "react";
import { ReactNode } from "react";
import moment from "moment";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export interface Heading3Props {
  heading?: ReactNode;
  subHeading?: ReactNode;
  className?: string;
  totalproperty:number;
  name:string;
  
}


const Heading3: React.FC<Heading3Props> = (Heading3Props) => {
 // let from=cookies.get('fromdate_temp');
//  let splitfrom=from.split('startDate')
 // var fromdate = moment(splitfrom, "DD.MM.YYYY").format("YYYY-MM-DD");
  return (
    <div className={`mb-12 lg:mb-16 `}>
      <h2 className="text-4xl font-semibold">Stay in {Heading3Props.name}</h2>
        <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
          {Heading3Props.totalproperty} stays
          <span className="mx-2">·</span>
        </span>
      
    </div>
  );
};

export default Heading3;
