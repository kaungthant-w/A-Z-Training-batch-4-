//no argument function
function greet1() {
    console.log("Hello, World");
}

greet1();

// one argument function
function greet2(name) {
    console.log("My name is "+ name);
}

greet2("Kyaw Kyaw");

// one argument & default value function
function greet3(name="Kyaw Kyaw") {
    console.log("My name is "+name);
}
greet3();



//multiple argumnet function
function greet4(name, age) {
    console.log("My name is "+ name +"." +" My age is " + age);
}

greet4("Kyaw Myo", 27);

//global variable
var name = "Tun Tun";

// local variable
function test() {
    var name = "aung aung"; // local variable
    console.log(name);
}
test();

// type function vs void function

//type function 
function typeFunction(name) {
    return name;
}
let result = typeFunction("Kaung Thant");
console.log(typeFunction("Kaung Thant"));

//void function
function voidFunction(age) {
    console.log(23);
}

voidFunction();

var greeting = function() {
    console.log("hello!");
};

greeting();

var greetingArr = (name) => {
    console.log(name);
}

greetingArr("Kaung Thant");


var greetingArrow = () => console.log("hello, arrow");
greetingArrow();

var twoSum = (one, two) => console.log( one + two);
twoSum( 32 , 323); 




