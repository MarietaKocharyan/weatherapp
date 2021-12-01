import React, {FC} from "react";
import {WeatherLocation} from '../model/index'
interface LocationTableProps {
  locations: string[];
  name: WeatherLocation | null;
}

export const LocationTable: FC<LocationTableProps> = ({locations}) =>
  <div>
    <h2>Locations</h2>
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {locations.map((location, index) =>
        <tr key={index}>
          <td>{location.name}</td>
        </tr>
      )}
      </tbody>
    </table>
  </div>;