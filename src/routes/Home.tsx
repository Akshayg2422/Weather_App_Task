import React from 'react';
import WeatherAlert from '../components/WeatherAlert';
import MultiLocationForecast from '../components/MultiLocationForecast';
import useWeatherData from '../hooks/useWeatherData';

const Home: React.FC = () => {
    const { loading, location } = useWeatherData('Kerala');

    if (loading) {
        return <div className={'loader-overlay '}>
            <div className={'loader'}></div>
        </div>;
    }

    return (
        <div>
            {/* <WeatherAlert /> */}
            <h2>{`Weather location for ${location}`}</h2>
            <MultiLocationForecast />
        </div>
    );
};

export default Home;
