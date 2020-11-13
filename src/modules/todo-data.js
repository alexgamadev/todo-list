
class TodoData {
    constructor(title, note){
        this._title = title;
        this._note = note;
    };

    get title() {
        return this._title;
    };

    get note() {
        return this._note;
    };

    set title(title) {
        this._title = title;
    };

    set note(note) {
        this.note = note;
    };
}

export {TodoData};