const persion = {
    name: "Upendra",
    age: 45,
    city: "Patna",
    greet(){
        console.log(`Hello, I am ${this.name } and age is ${this.age} and city is ${this.city}`);
    },
};

persion.greet();

const greetFunction = persion.greet;
greetFunction();

const boundGreet = persion.greet.bind({ name: "John", age: 20, city: "Pune" });
boundGreet();

//bind, call and apply