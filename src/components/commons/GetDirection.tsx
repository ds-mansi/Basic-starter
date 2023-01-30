import * as React from "react";

type Cta = {
  buttonText: string;
  latitude?: number;
  longitude?: number;
};

const GetDirection = (props: GetDirection) => {
  const { 
    buttonText, 
    latitude,
    longitude 
  } = props;
  
  const GetDirectionUrl = () => { 
  
	if (navigator.geolocation) {
		const error = (error) => {		
		  var message_string = 'Unable to determine your location. please share your location';	
		  if (confirm(message_string) != true) {
			var getDirectionUrl = 'https://www.google.com/maps/dir/?api=1&destination='+latitude+','+longitude;	
			window.open(getDirectionUrl, '_blank');
		  }else{
			  return false;
		  } 		
		}		
		navigator.geolocation.getCurrentPosition(  function(position){			
			let currentLatitude = position.coords.latitude;
			let currentLongitude = position.coords.longitude;
			let getDirectionUrl = 'https://www.google.com/maps/dir/?api=1&destination='+latitude+','+longitude+'&origin='+currentLatitude+','+currentLongitude;		
			window.open(getDirectionUrl, '_blank');		
		}, error, {
			timeout: 10000,
		});
	};	
  }

  return (
    <a onClick={GetDirectionUrl} rel="noopener noreferrer" >
      
	  <button type="button" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">{"Get Direction"}</button>
	  
    </a>
  );
};

export default GetDirection;
