import moment from 'moment';

// Function to filter out consecutive duplicate forecasts
export const getUniqueForecasts = (forecasts: any) => {
    const uniqueForecasts = [];
    let lastForecast = null;

    for (const forecast of forecasts) {
        if (!lastForecast || forecast.weather !== lastForecast.weather) {
            uniqueForecasts.push(forecast);
        }
        lastForecast = forecast;
    }

    return uniqueForecasts;
};

// Function to reverse the array
export const reversed = <T>(array: T[]): T[] => {
    return [...array].reverse();
};

// Function to format the date and time
export const formattedDateTime = (dateTimeString: string): string => {
    return moment(dateTimeString, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY hh:mm A");
};



