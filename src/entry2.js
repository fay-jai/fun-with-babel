import Person from "./person";
import BasicMath from "./math";

const user = new Person({
    name: "Fayjai",
    hobbies: [
        "eating ice cream",
        "drinking milk shakes"
    ]
});

console.log(user.getDescription());
console.log(`${ user.name } likes to have ${ BasicMath.add(3, 3) } meals a day!`);
