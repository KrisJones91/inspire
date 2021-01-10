import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
//let url = 'YOURNAME/todos/'
let url = 'kjtodo/todos/'

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    console.log(res.data)
    //TODO Handle this response from the server
    ProxyState.todos = res.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    console.log(res)
    //TODO Handle this response from the server
    //ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed == true) {
      todo.completed = false
    } else {
      todo.completed = true
    }
    console.log(todo)
    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change


  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state

    console.log(todoId)
    let res = await api.delete(url + todoId)
    ProxyState.todos = ProxyState.todos.filter(todo => todo._id != todoId)
  }

  calcChecks() {
    let arr = ProxyState.todos.filter(checks => checks.completed !== true)
    return arr.length
  }


}

const todoService = new TodoService();
export default todoService;