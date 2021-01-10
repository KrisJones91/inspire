import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let todos = ProxyState.todos
  let template = ''
  todos.forEach(todo => {
    template += todo.Template
  })
  document.getElementById('todos').innerHTML = template
}

function _drawRemaining() {
  document.getElementById('remaining').innerHTML = `${todoService.calcChecks()} Remaining`
}


export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on('todos', _drawTodos)
    ProxyState.on('todos', _drawRemaining)
    todoService.getTodos();
    _drawTodos()

  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }

  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form['description'].value,
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }

    // @ts-ignore
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  async toggleTodoStatus(todoId) {
    try {
      await todoService.toggleTodoStatus(todoId);
      //Called drawRemaining in here because we are editing and we want to UPDATE it because we are editing.  
      _drawRemaining()
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}