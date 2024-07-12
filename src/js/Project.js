class Project {
    #list = [];
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get tasks() {
        return this.#list;
    }

    addTask(task) {
        this.#list.push(task);
    }
}

export default Project;