import React, {FC} from "react";
import {WeatherLocation} from '../model/index'


interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

const LocationTable: FC<LocationTableProps> = ({locations, current, onSelect}) =>
  <div>
    <h2>Locations</h2>
    {console.log('locations', locations)}
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {locations.map((location, index) =>
        <tr className={current?.id === location.id ? 'table-primary' : ''}
        onClick={() => onSelect(location)}>
      <td>{location.name}</td>
    </tr>
      )}
      </tbody>
    </table>
  </div>;

export default LocationTable;