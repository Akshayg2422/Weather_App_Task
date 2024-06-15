import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const WeatherAlert: React.FC = () => {
    const alerts = useSelector((state: RootState) => state.weather.alerts);
    console.log('WeatherAlert-->', alerts)

    return (
        <div className="weather-alert">
            {alerts.length > 0 ? (
                alerts.map((alert, index) => (
                    <div key={index} className="alert">
                        {alert.message}
                    </div>
                ))
            ) : (
                <div>No weather alerts</div>
            )}
        </div>
    );
};

export default WeatherAlert;
