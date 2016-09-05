import Person from "./person";

const user = new Person({
    name: "Willson",
    hobbies: [
        "coding",
        "basketball",
        "weight lifting",
        "teaching"
    ]
});

console.log(user.getDescription());
