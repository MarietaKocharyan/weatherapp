import React from "react";
import { Weather, WeatherLocation } from '../model/index'

const key =  '0afaafa226931353a547661af977bcb9';
if (key === undefined) {
  throw new Error('No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY')
}

const keyQuery = `appid=${key}`
const server = 'http://api.openweathermap.org/data/2.5';

export async function searchLocation(term: string): Promise<WeatherLocation | undefined> {
  const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`);
  console.log('result.status', result.status);
  if (result.status !== 200) throw new Error('Failed to read location data');

  return await result.json();
};

export async function readWeather(locationId: number): Promise<Weather> {
  const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric`);

  if (current.status !== 200) throw new Error('Failed to read location data');

  return await current.json();
};

export function getIconUrl(code: string): string {
  return `http://openweathermap.org/img/wn/${code}.png`;
};