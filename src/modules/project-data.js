
class ProjectData {
    constructor(name, todos){
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
        return this._todos <= 0 ? true : false;
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

    removeTodo(todo) {
        let id = this._todos.indexOf(todo);
        this._todos.splice(id, 1);
    }

    addTabDOM(tabDOM) {
        this._tabDOM = tabDOM;
    }

    get tabDOM() {
        return this._tabDOM;
    }
}

export {ProjectData}