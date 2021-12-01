import React, {useState} from 'react';

import LocationSearch from "./components/locationSearch";
import LocationTable from "./components/locationTable";

function App() {
  const [locations, setLocations] = useState<string[]>([]);
  const addLocation = (location: string) => setLocations([location, ...locations]);

  return (
    <div className="container">
      <h1>Weather App</h1>

      <LocationSearch onSearch={addLocation}/>
      <LocationTable locations={locations}/>
    </div>
  );
}

export default App;