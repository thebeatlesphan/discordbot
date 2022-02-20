// fetch("https://weather-react-api.now.sh/forecast/coords/40,-73")
//   .then((response) => response.text())
//   .then((data) => console.log(data));
let summary = {};

async function getWeatherData() {
  let url = "https://weather-react-api.now.sh/forecast/coords/33,-84";

  let response = await fetch(url);
  let data = await response.json();

  summary = {
    "summary": data.currently.summary
  }

  console.log(summary)
  console.log(data)
  return summary
}

getWeatherData()
