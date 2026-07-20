// Arthematic Operators in JavaScript

let a = 10;
let b = 20;
let sum = a+b;
console.log('Sum Operation:', sum);

let difference = a-b;
console.log('Substraction Operation:', difference);

let multiply = a*b;
console.log('Multiplication operation:', multiply);

let divide = a/b;
console.log('Division operation:',divide);

let modulus = a%b;
console.log('Modulus operation:',modulus);

let exponential = a**b;
console.log('exponential operation:',exponential);

// incrementing operators
let x = 5;
y = x++;

let z = 2;
w = ++z;

console.log('postfix incrementing', y,x);
console.log('prefix incrementing:',w,z);

//decrementing

y = x--;
w = --z;

console.log('postfix decrementing',y,x);
console.log('prefix decrementing',w,z);

// Unirary Negation (-) operator
// converts the non numbers into a number

let non_num = "3";
num = -non_num;

console.log('Urinary neagtion(-) operator before and after:', non_num, num);

// Urinary plus (+) operator
// converts the non numbers into numbers but it performs very faster and preffered way to converting something into number

let non_num_2 = "45";
num_1 = +non_num_2;

console.log('Urinary plus (+) operator before and after:', non_num_2, num_1);




// Output: 
// Sum Operation: 30
// Substraction Operation: -10
// Multiplication operation: 200
// Division operation: 0.5
// Modulus operation: 10
// decrementing operation: 100000000000000000000
// postfix incrementing 5 6
// prefix incrementing: 3 3
// postfix decrementing 6 5
// prefix decrementing 2 2
// Urinary neagtion(-) operator before and after: 3 -3
// Urinary plus (+) operator before and after: 45 45






