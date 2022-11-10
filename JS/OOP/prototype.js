//constructor
function Magazine(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getTitle = function() {
    //     return `this title is ${this.title} written by ${this.author} at ${this.year} years`;
    // };
}

Magazine.prototype.getTitle = function() {
    return `Book title is ${this.title} written by ${this.author} & produced at ${this.year} years`;
}

Magazine.prototype.getYear = function() {
    const year = new Date().getFullYear() - this.year;
    return `Book title is ${this.title} written by ${this.author} and years = ${year} years`
    // return year;
}

var mega = new Magazine("OOP", "Aung Aung", "2000");
console.log(mega);

console.log(mega.getTitle());
console.log(mega.title);
console.log(mega.year);

console.log(mega.getYear());

var gega = new Magazine("AI", "Maung Maung", "2020");
console.log(gega.getYear());


