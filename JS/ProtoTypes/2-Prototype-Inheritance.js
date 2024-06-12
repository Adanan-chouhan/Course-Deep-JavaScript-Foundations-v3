// Protoype inheritance 

// creature Prototype
function creature(Is){
    this.lifeSpan = Is;
}

creature.prototype.breath = function(){
console.log("breathing...");
}

let creature1 = new creature(100);
console.log(creature1);

// Person prtotype
function person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

// Prototype method 
person.prototype.fullName = function(){
console.log(this.firstName + " " + this.lastName);
};


// inherit creature objet method 
person.prototype.__proto__ = Object.create(creature.prototype);

let person1 = new person("Adnan","chouhan",20);
let person2 = new person("Arbaaz","khan",18);

console.log(person1.fullName());
console.log(person2);