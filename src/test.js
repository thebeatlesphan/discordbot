
function getWeatherData() {
  let reggie = /\D/g;
  let num = "1f 2"
  num = num.split(' ')
  console.log(num);
  console.log(!reggie.test(num[0]))
}

getWeatherData()
