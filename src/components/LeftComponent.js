import React from 'react';


function LeftComponent(props){

const handleSelectVehicle = (e, vehicleName, index) => {
  e.preventDefault();
  props.onSelectVehicle(vehicleName, index);
};

//   render() {
    
    const vehicle = props.vehicle;
    const vehicleName = vehicle.name;
    return (
      <div>
        <h3>{vehicleName}</h3>

        {vehicle[vehicleName].map((vehicleBrand, index) => (
          <div key={`vehicleName-${index}`}>
            <img
              alt='selectVehicle'
              className='action-icons'
              src='https://www.flaticon.com/svg/static/icons/svg/64/64571.svg'
              
              onClick={(e) => {
                handleSelectVehicle(e, vehicleName, index);
              }}></img>
           
            {vehicleBrand}
          </div>
        ))}
      </div>
    );
  }
// }

export default LeftComponent;