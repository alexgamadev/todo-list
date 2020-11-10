
class ProjectData {
    constructor(name, todos){
        this._name = name;
        this._todos = todos;
    }

    get name() {
        return this._name;
    }

    get todos() {
        return this._todos;
    }

    set name(name) {
        this._name = name;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

export {ProjectData}