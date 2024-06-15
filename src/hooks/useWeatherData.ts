import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../redux/weatherSlice';

const useWeatherData = (location: string) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWeatherData = async () => {
      console.log('Fetching weather data for location',location)
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=25085176a8df48ce85744010240606&q=${location}`);
        console.log('Response received:', response)
        const data = await response.json();
        console.log('Data received:', data)
        dispatch(setWeatherData({ location, data }));
        console.log('Dispatching weather data')
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location, dispatch]);

  return {loading,location};
};

export default useWeatherData;
