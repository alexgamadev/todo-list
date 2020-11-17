
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

    addChecklistItem(item, checked) {
        _checklist.set(item, checked);
    }

    removeChecklistItem(item) {
        _checklist.remove(item);
    }
}

export {TodoData};