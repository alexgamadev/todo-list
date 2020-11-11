
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

    get id() {
        return this._id;
    }

    set name(name) {
        this._name = name;
    }

    set id(id){
        this._id = id;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

export {ProjectData}