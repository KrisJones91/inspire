



export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.description = data.description || data.weather[0].description
    this.city = data.name
    this.farenheit = Math.floor(data.main.temp * 9 / 5 - 459.67)
    this.celcius = Math.floor(data.main.temp - 273.15)
    this.img = data.img || data.weather[0].icon
    this.type = "f"
  }


  get Template() {
    return `
        <div class="offset-10 col-2 mt-4 text-dark" onclick="app.weatherController.changeWeather()">
          <div class=" text-center text-white">
            <div class="text-center"><img src="http://openweathermap.org/img/wn/${this.img}.png"></div>
             <p class="mb-0">${this.description}</p>
              <h3 id="change"><b>${this.farenheit}\u00B0F</b></h3>
              <h4>${this.city}</h4>
          </div>
        </div>
    `
  }

}