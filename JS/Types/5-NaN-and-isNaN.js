// NaN & isNaN ==>
// NaN => mean's not a Number
// isNaN => Number ho fasle Number nhi hay to true return kerta hay

let a = "adnan";
let b = a++;
console.log(b); // NaN


let c = isNaN("adnan");
console.log(c); // true  

console.log(isNaN("helo"));          // true
console.log(isNaN(11));              // false
console.log(isNaN(true));            // false
console.log(isNaN(undefined));       // true
console.log(isNaN(null));            // false
console.log(isNaN(NaN));             // true
console.log(isNaN("23o764"));        // true
console.log(isNaN("87465876700"));   // false



