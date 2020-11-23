
class TodoData {
    constructor(title, notes, checklist = new Map()){
        this._title = title;
        this._notes = notes;
        this._checklist = checklist;
        this._priority = 0;
        
    };

    get title() {
        return this._title;
    };

    get notes() {
        return this._notes;
    };

    get priority() {
        switch(this._priority) {
            case 0: 
                return "None";
            case 1: 
                return "Low";
            case 2:
                return "Medium";
            case 3:
                return "High";
            default:
                return "Invalid";
        }
    }

    get checklist() {
        return this._checklist;
    };

    set title(title) {
        this._title = title;
    };

    set notes(notes) {
        this._notes = notes;
    };

    set priority(priority) {
        //Only alow priority between 0 and 3
        if(priority >= 0 && priority <= 3) {
            this._priority = priority;
        }
    }

    addChecklistItem(item, checked) {
        _checklist.set(item, checked);
    }

    removeChecklistItem(item) {
        _checklist.remove(item);
    }
}

export {TodoData};