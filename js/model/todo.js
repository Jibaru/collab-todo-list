
export default class Todo {

    constructor(id, name, description, assignedTo, workgroup){
        this.id = id;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.workgroup = workgroup;
        this.completed = false;
    }

    static empty(){
        return new Todo(undefined, undefined, undefined, undefined);
    }


}