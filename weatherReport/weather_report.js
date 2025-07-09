function showweatherDetails(event) {
      event.preventDefault();
      
      const cityLat = document.getElementById('lat').value;
      const cityLon = document.getElementById('lon').value;
      
      const apiKey = "378cf9f9abe093e8a1f174f21ffdb7e1";
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`;
      
      fetch(apiURL)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById("weatherInfo");
          weatherInfo.innerHTML = `<h2>Weather in ${data.coord.lon}</h2>
                                   <p>Temperature: ${data.main.temp} &#8451;</p>
                                   <p>Weather: ${data.weather[0].description}</p>`;
      });
      
    }
    document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
