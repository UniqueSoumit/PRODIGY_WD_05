function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    
    const apiKey = '0d2ca47c3aba11e2deca6283dd0200b3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHtml = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${description}</p>
    `;

    weatherInfoDiv.innerHTML = weatherHtml;
}
