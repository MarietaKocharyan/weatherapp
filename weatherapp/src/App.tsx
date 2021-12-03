import React, {useState} from 'react';

import WeatherSummary from './components/weatherSummary';
import LocationSearch from "./components/locationSearch";
import LocationTable from "./components/locationTable";
import {searchLocation} from './services/index';
import { WeatherLocation } from './model/index';


function App() {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }


  let addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <div className="container">
      {console.log('currentLocation', currentLocation)}
      <h1>Weather App</h1>

      <LocationSearch onSearch={addLocation}/>
      <LocationTable locations={locations}
                     current={currentLocation}
                     onSelect={location => setCurrentLocation(location)}/>
                           <WeatherSummary location={currentLocation}/>
    </div>
  );
}

export default App;