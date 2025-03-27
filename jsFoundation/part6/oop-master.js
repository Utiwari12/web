let car ={
    make: "Toyota",
    model: "Camry",
    year: 2021,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
//console.log(car.start());

function Persion(name, age){
    this.name =name
    this.age = age
}

let myPersion = new Persion("Upendra", 45)
//console.log(myPersion.name, myPersion.age);

//prototype and prototype chain inheritance

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} make a sound`
}

Array.prototype.upendra = function(){
    return `Custom method ${this}`
}

let myArray = [1, 2, 3];
//console.log(myArray.upendra());

let myNewArray = [1, 2, 3, 4, 5, 6];
//console.log(myNewArray.upendra());

class Vehicle {
    constructor(make, model, year){
        this.make =make
        this.model = model
        this.year = year
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

// let myCar = new Vehicle("Toyota", "Camry", 2021)
// console.log(myCar.start());

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla", 2021)
//console.log(myCar.start());
//console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla", 2021)
//console.log(vehOne.make);

// Encapsulation

class BankAccount {
    #balance = 0;

    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return`$ ${this.#balance}`
    }
}

let account = new BankAccount();
//console.log(account.getBalance());

// Abstraction

class coffeeMachine {
    start(){
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee(){
        return `Brewing coffee`;
    }

    pressStartButton(){
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} + ${msgTwo}`
    }
}

//console.log(new coffeeMachine().start());
//console.log(new coffeeMachine().brewCoffee());

let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

//console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
    fly(){
        return `Flying .....`;
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguin can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
//console.log(bird.fly());
//console.log(penguin.fly());

//static methods

class Calculator {
    static add(a, b){
        return a + b
    }

    static subtract(a, b){
        return a - b
    }
}

