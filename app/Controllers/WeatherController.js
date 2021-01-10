import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  let template = ''
  if (ProxyState.weather) {
    template = ProxyState.weather.Template
  }
  document.getElementById("weather").innerHTML = template

}

function _drawChange() {
  console.log("drawing change", ProxyState.weather)
  if (ProxyState.weather.type == "f") {
    document.getElementById("change").innerHTML = `${ProxyState.weather.farenheit}\u00B0F`
  } else {
    document.getElementById("change").innerHTML = `${ProxyState.weather.celcius}\u00B0C`
  }

}




export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  changeWeather() {
    try {
      weatherService.changeWeather()
    }
    catch (error) {
      console.error(error)
    }
    _drawChange()
  }
}
