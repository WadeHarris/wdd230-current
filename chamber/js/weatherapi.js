const temp = document.querySelector('#temperature');
const img = document.querySelector('#weather-img');
const description = document.querySelector('#weather-h3');
const windS = document.querySelector('#wind-speed');
const windC = document.querySelector('#weather-N');


// get the the weather data from openweathermap.org

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Maracay&units=imperial&appid=7ef37c61e45f8bf0e9e8fdca462fac21';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const list = data['list'];
            console.log(list); //testing the weather data
            displayWeather(list[0])
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch()

function displayWeather(weatherData) {
    
    // DISPLAY THE IMG AND DESCRITPION OF THE WEATHER
    const desc = weatherData.weather[0].description;
    img.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    img.setAttribute('alt', `${desc} icon`);

    // capitalize the first letter of each word
    const arr = desc.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    const capitalizeDesc = arr.join(" ");
    description.innerHTML = capitalizeDesc;


    // CALCULATE FARENHEIT TO CELCIUS AND DISPLAY IN THE HTML
    const temperature = weatherData.main.temp.toFixed(0);
    const c = (temperature - 32) * 5/9;
    temp.innerHTML = c.toFixed(0);

    
    
    // DISPLAY M/H 
    let mph = weatherData.wind.speed;
    windS.innerHTML = mph.toFixed(0);

    
    // DISPLAY WIND CHILL OR N/A IN THE SCREEN
    if (temperature < 51 && mph > 3) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * mph**0.16 + 0.4275 * f * mph**0.16;
        windC.innerHTML = windChill.toFixed(2);
    } else {
        windC.innerHTML = "N/A";
    }
}