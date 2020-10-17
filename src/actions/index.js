export const SELECT_VEHICLE = "SELECT_VEHICLE";

export function selectVehicle(vehicles, selectedVehicle) {
  return {
    type: SELECT_VEHICLE,
    vehicles,
    selectedVehicle,
  };
}
