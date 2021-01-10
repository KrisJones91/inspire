import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  changeWeather() {
    let F = 'f';
    let C = 'c';
    if (ProxyState.weather.type == F) {
      ProxyState.weather.type = C
    } else {
      ProxyState.weather.type = F
    }
    console.log(ProxyState.weather)
  }



}

const weatherService = new WeatherService();
export default weatherService;