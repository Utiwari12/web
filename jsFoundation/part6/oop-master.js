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
console.log(myArray.upendra());

let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.upendra());


