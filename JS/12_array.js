//sample array
let number = new Array(2, 3, "mgmg", "10.9", 32);
// console.log(number);
console.log(number.length);

let fruit = ["apple", "orange", "mango", "banana", "watermelon"];

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit.length);

for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

//assiciative array
var associatedArray = [];
associatedArray["name"] = "mgmg";
associatedArray["age"] = 20;
console.log(associatedArray);
console.log(fruit);
console.log(associatedArray["name"]);


var ass1 = {
    name : "Kyaw Kyaw",
    age:30,
    greeting() {
        console.log("Hello World");
    },
    introduce() {
        console.log(`Hello ${this.name}`);
    }
};

console.log(ass1["name"]);
console.log(ass1.name);
console.log(ass1.greeting());
console.log(ass1.introduce());
console.log(ass1.introduce());


//push
let num1 = [2,3,4];
num1.push(3, 34, 45);
console.log(num1);

var num2 = [...num1, 4];
console.log(num2);


let num3 = [1, 2, 3, 4, 5];
let result = num3.map(function(n) {
    return n * 10;
});

console.log(result);



var arr = [10, 30, 40];
[a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);