import fetch from 'node-fetch'; // Importar node-fetch para Node.js 16+

const API_KEY = '0148cba27e634f5b31afd7c2ed79b66c'; // Reemplaza con tu clave de API válida
const BASE_URL = 'https://api.openweathermap.org/';
const BASE_URL_ONECALL = 'https://api.openweathermap.org/data/3.0/onecall';

async function getWeatherByCoordinates(lat, lon, exclude = '') {
    const url = `${BASE_URL_ONECALL}?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=metric`;
    try {
        console.log(`Fetching weather data for coordinates: lat=${lat}, lon=${lon}`); // Logs para depuración
        console.log(`Request URL: ${url}`); // Verificar la URL generada
        const response = await fetch(url); // Usar node-fetch
        console.log(`Response status: ${response.status}`); // Verificar el estado de la respuesta
        if (response.status === 401) {
            throw new Error('Unauthorized: Please check your API key and ensure it has access to the One Call API.');
        }
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`Raw data received:`, data); // Inspeccionar los datos recibidos
        console.log(`Weather at coordinates (lat=${lat}, lon=${lon}):`);
        console.log(`Current Temperature: ${data.current.temp}°C`);
        console.log(`Description: ${data.current.weather[0].description}`);
    } catch (error) {
        console.error(`Error occurred: ${error.message}`); // Mejorar el manejo de errores
    }
}

// Example usage for Córdoba (lat: -31.420083, lon: -64.188776):
getWeatherByCoordinates(-31.420083, -64.188776, 'minutely,hourly,daily,alerts');
