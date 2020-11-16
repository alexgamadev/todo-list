
class TodoData {
    constructor(title, notes, checklist){
        this._title = title;
        this._notes = notes;
        this._checklist = checklist;
    };

    get title() {
        return this._title;
    };

    get notes() {
        return this._notes;
    };

    get checklist() {
        return this._checklist;
    };

    set title(title) {
        this._title = title;
    };

    set notes(notes) {
        this._notes = notes;
    };

    addChecklistItem(item) {
        _checklist.push(item);
    }

    removeChecklistItem(item) {
        let index = _checklist.indexof(item);
        _checklist.splice(index, 1);
    }
}

export {TodoData};