class Person {
    constructor({ name, hobbies }) {
        this.name = name;
        this.hobbies = hobbies;
    }

    getDescription() {
        const { name, hobbies } = this;
        return `${name} has ${hobbies.length} hobbies: ${hobbies.join(", ")}`;
    }
}

export default Person;
