import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import Header from "../layouts/header";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
import phonePin from "..//../images/phone.svg";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
import GetDirection from "..//../components/commons/GetDirection";
import Footer from "../layouts/footer";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}



const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, hours, mainPhone, timezone } = result.rawData;
  console.log(result.rawData)
  const formattedPhone = formatPhoneNumber(mainPhone);

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }

  return (  
    <div className={`location result`} id={`result-${result.index}`}>
      <div style={{float:"right"}}>{metersToMiles(result.distance)} miles</div>
      <a href={result.rawData.slug?result.rawData.slug:result.rawData.id}>
        <h3>
        {result.rawData.name}
      </h3>
      </a> 
     
      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}
      
      <Address address={address} />
      
      {/* console.log(address) */}
      <button className="bg-red-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      <GetDirection latitude={result?.rawData?.yextDisplayCoordinate?.latitude} longitude={result?.rawData?.yextDisplayCoordinate?.longitude}/>
      </button>
      
    </div>

   
  );
  
}

   
export default LocationCard;