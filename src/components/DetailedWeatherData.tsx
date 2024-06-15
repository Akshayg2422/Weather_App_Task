import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const DetailedWeatherData: React.FC = () => {
    const data = useSelector((state: RootState) => state.weather.detailedData);
    console.log('farmer data-->', data)

    return (
        <div className="detailed-weather-data ">
            <div className={'farmer'}>
                <h3>Detailed Weather Data</h3>
                <p>Temperature: {data.temperature}</p>
                <p>Precipitation: {data.precipitation}</p>
                <p>Wind Speed: {data.windSpeed}</p>
            </div>
        </div>
    );
};

export default DetailedWeatherData;
