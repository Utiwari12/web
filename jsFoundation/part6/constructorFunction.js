
// function greet(name){
//     console.log("Hello, ", name )
//     //return name

// }
// greet("Upendra")


// function Persion(name, age, city){
//     this.name = name
//     this.age = age
//     this.city = city
// }

// function Car(make, model, age){
//     this.make = make
//     this.model = model
//     this.age = age
// }

//How to create object using constructor function
// let myCar = new Car("Toyota", "Corolla", 2024 )
// console.log(myCar);

// let myCar1 = new Car("Tata", "Safari", 2024 )
// console.log(myCar1);

// let myPersion = new Persion("Upendra", 45, "Patna")
// console.log(myPersion);

// function Tea(type, price){
//     this.type = type
//     this.price = price
//     this.describe = function(){
//         return `This is a cup of tea of type ${this.type} and price is ${this.price}`
//     }

// }

// let myTea = new Tea("Lemon Tea", 20)
// console.log(myTea.describe());


// function Animal(species){
//     this.species = species
// }

// Animal.prototype.sound = function(){
//     return `${this.species} makes a sound`
// }

// let dog = new Animal("Dog")
// console.log(dog.sound());

// let cat = new Animal("Cat")
// console.log(cat.sound());

function Drink(name){
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");   
    }
    this.name = name;
}

let tea = new Drink("tea");
let cofee = new Drink("Cofee");
console.log(tea);
console.log(cofee);