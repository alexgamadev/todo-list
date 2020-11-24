import { parseJSON } from 'date-fns';

class TodoData {
    constructor(title, notes, checklist = new Map()){
        this._title = title;
        this._notes = notes;
        this._checklist = checklist;
        this._priority = "0";
    };

    get title() {
        return this._title;
    };

    get notes() {
        return this._notes;
    };

    get priority() {
        switch(this._priority) {
            case "0": 
                return "none";
            case "1": 
                return "low";
            case "2":
                return "medium";
            case "3":
                return "high";
            default:
                return "invalid";
        }
    }

    get checklist() {
        return this._checklist;
    };

    get dueDate() {
        return this._dueDate;
    }

    set title(title) {
        this._title = title;
    };

    set notes(notes) {
        this._notes = notes;
    };

    set checklist(checklist) {
        this._checklist = checklist;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

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

    /* Convert generic object to TodoData */
    static fromObject(object) {
        object.checklist = new Map(JSON.parse(object._checklist));
        object.dueDate = parseJSON(object._dueDate);
        return Object.assign(new TodoData(), object);
    }

}

export {TodoData};