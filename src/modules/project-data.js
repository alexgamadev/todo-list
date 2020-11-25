/* eslint-disable no-underscore-dangle */
class ProjectData {
  constructor(name = '', todos = []) {
    this._name = name;
    this._todos = todos;
    this._isOpen = false;
  }

  get name() {
    return this._name;
  }

  get todos() {
    return this._todos;
  }

  get isEmpty() {
    return this._todos <= 0;
  }

  get isOpen() {
    return this._isOpen;
  }

  set name(name) {
    this._name = name;
  }

  set isOpen(bool) {
    this._isOpen = bool;
  }

  addTodo(todo) {
    this._todos.push(todo);
  }

  loadTodos(todos) {
    this._todos = todos;
  }

  removeTodo(todo) {
    const id = this._todos.indexOf(todo);
    this._todos.splice(id, 1);
  }

  /* Convert generic object to ProjectData */
  static fromObject(object) {
    return Object.assign(new ProjectData(), object);
  }
}

export default ProjectData;
