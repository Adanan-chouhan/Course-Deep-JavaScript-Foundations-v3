// Coercion ==> Implicit Coercion, Explicit Corersion

// Exlicit Coercion
// Exlicit Coercion => convert to DataType use predifine function 
let a = 10;
console.log(String(a));  // "10";

let b = String(20);
console.log(b);    // "20"

let c = Number("20");
console.log(c+10) // 30

let d = Number(true);
console.log(d + 5);   // 6

// Implicit Coercion
// Implicit Coercion => convert to DataType not use predifine function use to logic

let equallity = 10;
console.log(`${e}`); // "10"