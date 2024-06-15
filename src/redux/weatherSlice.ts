import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherAlert {
  message: string;
}

interface Forecast {
  location: string;
  weather: string;
  temperature: number;
  condition: string;
  localTime:string;
}

interface DetailedData {
  temperature: number;
  precipitation: number;
  windSpeed: number;
}


interface WeatherState {
  alerts: WeatherAlert[];
  forecasts: Forecast[];
  detailedData: DetailedData;
}

const initialState: WeatherState = {
  alerts: [],
  forecasts: [],
  detailedData: {
    temperature: 0,
    precipitation: 0,
    windSpeed: 0,
  },
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<{ location: string; data: any }>) => {
      const { location, data } = action.payload;
      console.log('reducer called',data)
      state.forecasts.push({
        location,
        weather: data.current.condition.text,
        temperature: data.current.temp_c,
        condition: data.current.condition.icon,
        localTime:data.location.localtime
      });
      state.detailedData = {
        temperature: data.current.temp_c,
        precipitation: data.current.precip_mm,
        windSpeed: data.current.wind_kph,
      };
       // Adding dummy alert and advisory for demonstration
    // state.alerts.push({ message: 'Severe weather warning' });
    },
    setWeatherAlert: (state, action: PayloadAction<{ message: string }>) => {
      state.alerts.push(action.payload);
    },
  },
});

export const { setWeatherData, setWeatherAlert } = weatherSlice.actions;
export default weatherSlice.reducer;
