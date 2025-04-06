function Persion (name, age) {
    this.name = name;
    this.age = age;
}

Persion.prototype.greet = function (){
    console.log(`Hello, my name is ${this.name } and age is ${this.age}`);
}

let upendra = new Persion("Upendra", 45);
upendra.greet();

//[[Prototype]]