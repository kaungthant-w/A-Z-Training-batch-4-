//constructor
var str1 = "hello, world";
var str2 = new String("Hello, World");

console.log(typeof str1);
console.log(typeof str2);


// object litral

console.log("---Object start---");

const book = {
    title : "English",
    year : "2022",
    getTitle : function () {
        return `This title is ${this.title}`;
    }
}

console.log(book.title);
console.log(book.year);
console.log(book.getTitle());

console.log(Object.keys(book));
console.log(Object.values(book));

book.date = "21/9/2022";
book.shop = "NayLa Shop";

console.log(book.date);
console.log(book.shop);

console.log("---Object End---");

console.log("---constructor Start---");

//constructor
function Magazine (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getTitle = function() {
        return `this title is ${this.title}`;
    };
}


var gema = new Magazine("English", "Mg Mg", "2021");
console.log(gema);
console.log(gema.title);
console.log(gema.author);
console.log(gema.getTitle());



console.log("---constructor End---");