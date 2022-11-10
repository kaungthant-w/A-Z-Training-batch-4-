// ojbect
var car = new Object();
car.name = "BMW";
car.price = "$30000";

console.log(car);
console.log(car.name);
console.log(car.price);


function book (title, price) {
    this.title = title;
    this.price = price;
}

var result = new book("Myanmar", "1200ks");
console.log(result);

// new book = new Object();
// book.title = title;
// book.price = price;


function person (name, age) {
    this.name = name;
    this.age = age;
}

var person = new person("Kyaw Myint", 28);
console.log(person);
console.log(person.name);
console.log(person.age);


//number
let num = 1.4534243;
console.log(num.toFixed(2));
console.log(num.toFixed(3));
console.log(num.toFixed(5));

//string
var greeting = "Hello World";
var name = "    kyaw kyaw   ";
console.log(greeting[2]);
console.log(greeting[1]);
console.log(greeting[0]);
console.log(greeting[3]);
console.log(greeting[7]);
console.log(greeting.length);
console.log(greeting.substr(0, 3));
console.log(greeting.substr(6, 3));
console.log(name.trim());
console.log(greeting.split());
console.log(greeting.split(" "));
console.log(greeting.split(""));


console.log(greeting.trim());
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

var date = new Date();
console.log(date);

var date2 = "2/4/2021";
console.log(date2);
console.log(date2.split(""));
console.log(date2.split("/"));

[day, month, year] = date2.split("/");
console.log("Day:"+day);
console.log("Month:"+month);
console.log("year:"+year);