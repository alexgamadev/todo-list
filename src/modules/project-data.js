
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

    get isEmpty() {
        return this._todos <= 0 ? true : false;
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

    addTabDOM(tabDOM) {
        this._tabDOM = tabDOM;
    }

    get tabDOM() {
        return this._tabDOM;
    }
}

export {ProjectData}