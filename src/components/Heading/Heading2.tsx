import React from "react";
import { ReactNode } from "react";
import moment from "moment";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export interface Heading2Props {
  heading?: ReactNode;
  subHeading?: ReactNode;
  className?: string;
}

const Heading2: React.FC<Heading2Props> = ({
  className = "",
  heading = "Stays in "+cookies.get('stay_temp'),
  subHeading,
}) => {
 // let from=cookies.get('fromdate_temp');
//  let splitfrom=from.split('startDate')
 // var fromdate = moment(splitfrom, "DD.MM.YYYY").format("YYYY-MM-DD");
  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-4xl font-semibold">{heading}</h2>
      {subHeading ? (
        subHeading
      ) : (
        <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
          {cookies.get('stay_temp_length')} stays
          <span className="mx-2">·</span>
         {cookies.get('fromdate_temp')}
   {cookies.get('enddate_temp')}
          <span className="mx-2">·</span>2 Guests
        </span>
      )}
    </div>
  );
};

export default Heading2;
