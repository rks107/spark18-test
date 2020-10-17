import React, { Component } from 'react';
import {Navbar, LeftComponent, RightComponent} from ".";
import { selectVehicle } from "../actions";


class App extends Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
  }

  onSelectVehicle = (vehicleName, index) => {
    const { vehicles, selectedVehicle } = this.props.store.getState();
    const updatedVehicle = vehicles.map((vehicle) => {
      if(vehicle['name'] === vehicleName){

        const brandName = vehicle[vehicleName][index];
        if (!selectedVehicle.includes(brandName)) {selectedVehicle.push(brandName);}

        return { ...vehicle, selected:true };
      } else {
        return vehicle;
      }
    });
    this.props.store.dispatch(selectVehicle(updatedVehicle, selectedVehicle));

  };

  render() {
    
    const {selectedVehicle} = this.props.store.getState();
    const { vehicles} = this.props.store.getState();
    return (
      <div className='App'>
        <div className='navbar'>
          <Navbar />
        </div>

        <div className='container'>
          <div className='container__left'>
            {vehicles.map((vehicle, index) => (
              <LeftComponent
                vehicle={vehicle}
                key={`vehicle-${index}`}
                onSelectVehicle={this.onSelectVehicle}
              />
            ))}
          </div>

          <div className='container__right'>
            {selectedVehicle.map((vehicle, index) =>
                <RightComponent vehicle={vehicle} key={`vehicle-${index}`} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
