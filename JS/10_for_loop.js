// for(let num = 0; num<=100;num++){
//     console.log(num);
// }

let num1, num2;

// num1 = prompt("Enter number less than 5");
// console.log(typeof num1);

num1 = parseInt(prompt("Enter number1 less than 5"));
// console.log(typeof num1);

while(num1 > 5) {
    num1 = parseInt(prompt("Enter number1 less than  or equal 5"));
}

// console.log(typeof num1);

num2 = parseInt(prompt("Enter number2 less than 5"));
// console.log(typeof num2);

while(num2 <= 5) {
    num2 = parseInt(prompt("Enter number2 greater than 5"));
}

// console.log(typeof num2);

console.log(num1 + num2);
console.log("The End");

for(num1;num1 <=num2;num1++) {
    console.log(num1);
}
console.log("The End");