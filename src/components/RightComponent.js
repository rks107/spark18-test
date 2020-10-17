import React from 'react';

function RightComponent(props) {
    const vehicleName = props.vehicle;
    return (
      <div>
        <h3>{vehicleName}</h3>
      </div>
    );
}

export default RightComponent;