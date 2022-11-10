function Magazine(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = author; // 2000
}

//prototype
Magazine.prototype.getTitle = function(){
    return `Book title is ${this.title} written by ${this.author} & produced at ${this.year} years`;
};

Magazine.prototype.getYear = function() {
    const year = new Date().getFullYear() - this.year;
    return `This ${this.title} is written by ${this.author} and years = ${year} years`;
};

// constructor
function News(title, author, year, month) {
    Magazine.call(this, title, author, year); //inheritence
    this.month = month;
    this.getTitle = function() {
        return `Book title is ${this.title} written by ${this.author} & producted at ${this.year} years`;
    }
}

News.prototype = Object.create(Magazine.prototype);//inheritence

var page = new News("Myanmar", "U Aung", "2010", "June");

console.log(page.getTitle());
console.log(page.getYear());


var mega = new Magazine("OOP", "Aung Aung", "2000");
console.log(mega.getYear());