import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { formattedDateTime, getUniqueForecasts, reversed } from '../utilis/commonMethods';

const MultiLocationForecast: React.FC = () => {
    const forecasts = useSelector((state: RootState) => state.weather.forecasts);
    console.log('event planner', forecasts);

    // Reverse the forecasts array to show the latest weather first
    const reversedForecasts = reversed(forecasts)

    // Filter out consecutive duplicate forecasts
    const uniqueForecasts = getUniqueForecasts(reversedForecasts);

    return (
        <div className="multi-location-forecast container">
            {uniqueForecasts.map((forecast, index) => {
                const { location, weather, condition, localTime } = forecast
                return (
                    <div key={index} className="forecast">
                        <h3>{location}</h3>
                        <span>{formattedDateTime(localTime).slice(0, 10)}</span>
                        <span style={{ fontSize: '10px', margin: '2px' }}>{formattedDateTime(localTime).slice(10, 21)}</span>
                        <p>{weather}</p>
                        <img src={condition} alt="image of weather condition" />
                    </div>
                )
            })}
        </div>
    );
};

export default MultiLocationForecast;
