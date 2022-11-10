class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    setTitle() {
        this.title = "English";
    }

    static show() {
        console.logo("Morning");
    }

    greet() {
        console.log("good luck")
    }
}

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// const book1 = new Book("Myanmar", "Mg Mg", 29900);
// console.log(book1);
// book1.setTitle();


var mega = new Magazine("oop", "aung aung", 2010, "August");
// console.log(mega.greet());
console.log(mega.month);
console.log(mega);