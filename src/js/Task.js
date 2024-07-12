class Task {
    #desc;
    #status;

    constructor(desc, status) {
        this.#desc = desc;
        this.#status = status;
    }

    get description() {
        return this.#desc;
    }

    get status() {
        return this.#status;
    }
}

export default Task;