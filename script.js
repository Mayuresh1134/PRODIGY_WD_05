const apiKey = 'e42a219d5b5c7a651b4016ae8b189fa0';
const weatherInfoContainer = document.getElementById('weather-info');

async function getWeather() {
    const locationInput = document.getElementById('location').value;
    
    if (!locationInput) {
        alert('Please enter a location');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = `
                <h2>Current Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            weatherInfoContainer.innerHTML = weatherInfo;
        } else {
            weatherInfoContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoContainer.innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
    }
}
