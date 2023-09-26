import React, { FC } from "react";

export interface SaleOffBadgeProps {
  className?: string;
  desc?: string;
}

const SaleOffBadge: FC<SaleOffBadgeProps> = ({
  className = "",
  desc = "",
}) => {
  let ll;
  if(desc==null)
  {
     ll=' Premium'
  }
  else{
    ll=''
  }
  let iconstl={
    'margin-right': '2px',
    'font-size': '15px'
  }
  let stl;
  if(desc==null)
  {
   stl={
    'display':'block',
    'background-color':'#e98421',
   }
  }
  else{
    stl={
      'display':'none',
     }
  }
  return (
    <div
      className={`nc-SaleOffBadge flex items-center justify-center text-xs py-0.5 px-3 bg-red-700 text-red-50 rounded-full ${className}`}
      data-nc-id="SaleOffBadge" style={stl}
    >
     <i style={iconstl} class="las la-crown text-lg"></i>  {ll}
    </div>
  );
};

export default SaleOffBadge;
