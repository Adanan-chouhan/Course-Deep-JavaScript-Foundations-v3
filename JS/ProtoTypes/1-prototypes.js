// Every function and object in javascript has an property called prototype.

function workshop1(teacher) {
    this.teacher = teacher;
}
workshop1.prototype.ask = function (question) {
    console.log(this.teacher, question);
}

const obj = new workshop1('Kyle')
obj.ask('Is prototype a class');  // kyle Is prototype a class


Array.prototype.add = function () {
    const val = this.reduce((acc, crr) => acc + crr)
    console.log(val)
    return val
}

var arr = [1, 2, 3, 4];
arr.add();



// Example => constructor prototype
function person(first, last, a) {
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

// Prototype method 
person.prototype.fullName = function(){
console.log(this.firstName + " " + this.lastName);
};

let person1 = new person("Adnan","chouhan",20);
let person2 = new person("Arbaaz","khan",18);

console.log(person1);
console.log(person2);