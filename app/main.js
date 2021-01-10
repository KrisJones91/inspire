import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";



//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();

  }
}


window["app"] = new App();