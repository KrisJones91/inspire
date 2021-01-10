export default class Todo {
  constructor(data) {
    this._id = data._id;
    this.completed = data.completed
    this.description = data.description

  }

  //where the checkbox and items will go
  get Template() {
    return /*html*/`
        <div class="text-center">
          <label class="form-check-label">
            <p id="remaining"></p>
              <input type="checkbox" class="form-check-input" name="todos" 
                  value="checkedValue" ${this.completed ? "checked" : ""} 
                  onclick="app.todoController.toggleTodoStatus('${this._id}')">${this.description}
              <button class="fas fa-trash text-danger" id="trash"
                  onclick="app.todoController.removeTodo('${this._id}')"></button>
          </label>
        </div>

    
    `
  }

}