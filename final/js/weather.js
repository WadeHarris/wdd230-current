//const url = "https://api.openweathermap.org/data/2.5/weather?q=Grantsville&appid=14dab094a3401eb13cc4a183969c73c9&units=imperial";
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8910&exclude=minutely,hourly&appid=14dab094a3401eb13cc4a183969c73c9&units=imperial";
const currentTemp = document.querySelector('#temp');
const humidity = document.querySelector('#humid');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const dayTwoTemp = document.querySelector("#second-temp");
const secondWeatherIcon = document.querySelector('#second-weather-icon');
const secondCaptionDesc = document.querySelector('#second-desc');
const dayThreeTemp = document.querySelector("#third-temp");
const thirdWeatherIcon = document.querySelector('#third-weather-icon');
const thirdCaptionDesc = document.querySelector('#third-desc');
const dayFourTemp = document.querySelector("#fourth-temp");
const fourthWeatherIcon = document.querySelector('#fourth-weather-icon');
const fourthCaptionDesc = document.querySelector('#fourth-desc');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.current.temp.toFixed(0)}`;
    dayTwoTemp.innerHTML = `${weatherData.daily[0].temp.day.toFixed(0)}`;
    dayThreeTemp.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}`;
    dayFourTemp.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    const hum = weatherData.current.humidity;

    const seciconsrc = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    const secdesc = weatherData.daily[0].weather[0].description;

    const thirdiconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const thirddesc = weatherData.daily[1].weather[0].description;

    const fourthiconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const fourthdesc = weatherData.daily[2].weather[0].description;


    //For a sentence
    const words = desc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const capDesc = words.join(" ");

    const secwords = secdesc.split(" ");
    for (let i = 0; i < secwords.length; i++) {
        secwords[i] = secwords[i][0].toUpperCase() + secwords[i].substr(1);
    }
    const seccapDesc = secwords.join(" ");

    const thirdwords = thirddesc.split(" ");
    for (let i = 0; i < thirdwords.length; i++) {
        thirdwords[i] = thirdwords[i][0].toUpperCase() + thirdwords[i].substr(1);
    }
    const thirdcapDesc = thirdwords.join(" ");

    const fourthwords = fourthdesc.split(" ");
    for (let i = 0; i < fourthwords.length; i++) {
        fourthwords[i] = fourthwords[i][0].toUpperCase() + fourthwords[i].substr(1);
    }
    const fourthcapDesc = fourthwords.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capDesc);
    captionDesc.textContent = capDesc;
    humidity.textContent = hum;

    secondWeatherIcon.setAttribute('src', seciconsrc);
    secondWeatherIcon.setAttribute('alt', seccapDesc);
    secondCaptionDesc.textContent = seccapDesc;

    thirdWeatherIcon.setAttribute('src', thirdiconsrc);
    thirdWeatherIcon.setAttribute('alt', thirdcapDesc);
    thirdCaptionDesc.textContent = thirdcapDesc;

    fourthWeatherIcon.setAttribute('src', fourthiconsrc);
    fourthWeatherIcon.setAttribute('alt', fourthcapDesc);
    fourthCaptionDesc.textContent = fourthcapDesc;
}