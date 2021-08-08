import React from 'react';

class  DetectLocation extends React.Component {

  constructor(props){
super(props);
this.state={
  latitude :null,
  longitude:null,
  userAddress:null
};

this.getLocation = this.getLocation.bind(this);
this.getCoordinates = this.getCoordinates.bind(this);


  }
  // Find corrdinate
 getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleLocationError)
  }
  else{
    alert("Geolocation is not supported by this browser.");
  }
}

// get a latitude & longitude
getCoordinates(position){
  this.setState({
    latitude:position.coords.latitude,
    longitude:position.coords.longitude
  })
}

// Error Message if we couldn't get a coordinate  
 handleLocationError(error){
  
    switch(error.code) {
      case error.PERMISSION_DENIED:
       alert( "User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
      alert( "Location information is unavailable.")
        break;
      case error.TIMEOUT:
       alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
     alert("An unknown error occurred.")
        break;
        default:
          alert("An unknown error occurred")
    }
}

render() {
  return (

     <button onClick={this.getLocation}> Get Coordinates</button>
     {/* after creating API I will send them to database It is just for */}
<p>{this.state.latitude} + {this.state.longitude}</p>
  )

  }  
}


export default DetectLocation;
