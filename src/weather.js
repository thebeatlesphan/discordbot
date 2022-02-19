// fetch("https://weather-react-api.now.sh/forecast/coords/40,-73")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

async function getWeatherData() {
  let url = "https://weather-react-api.now.sh/forecast/coords/33,-84";

  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
}

getWeatherData();