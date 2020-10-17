import { SELECT_VEHICLE } from "../actions";

const initialState = {
  vehicles: [
    {
      name: "Car",
      Car: ["Maruti Suzuki", "Hundai", "Mahindra", "Tata", "Toyoto", "Ford"],
      selected: false,
    },
    {
      name: "Bike",
      Bike: ["Royal Enfield", "Honda", "Hero", "KTM", "Bajaj"],
      selected: false,
    },
    {
      name: "Bicycle",
      Bicycle: ["Hero", "Atlas", "Avan", "Herculos"],
      selected: false,
    },
  ],
  selectedVehicle: []
};
export default function products(state = initialState, action) {
  switch (action.type) {
    case SELECT_VEHICLE:
      return {
        ...state,
        vehicles: action.vehicles,
        selectedVehicle: action.selectedVehicle,
      };
    default:
      return state;
  }
}
