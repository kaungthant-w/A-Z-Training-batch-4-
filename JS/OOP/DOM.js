console.log(document.querySelectorAll(".myTitle")[0]);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// document.write("Heading");
console.log(document.URL);
// console.log(document.getElementById("title"));
let h2 = document.getElementById("title");
console.log(h2);
h2.style.color = "white";

let para = document.getElementById("para");
// console.log(para);
para.style.color = "green";


let myTitle = document.getElementsByClassName("myTitle");
console.log(myTitle);
console.log(myTitle.length);
console.log(myTitle[0]);
// myTitle[0].style.color = "orange";
myTitle[0].style.backgroundColor = "red";

let tag1 = document.getElementsByTagName("h2");
tag1[0].style.fontSize = "3rem";


let tag2 = document.getElementsByTagName("p");
tag2[0].style.fontSize = "3rem";

let qTitle = document.querySelector("#title");
qTitle.style.color = "white";

let qPara = document.querySelector("#para");
qPara.style.backgroundColor = "gray";

let qMyTitle = document.querySelector(".myTitle");
qMyTitle.style.color = "blue";

let myPara = document.querySelector(".myPara");
myPara.style.color = "blue";

let h2All = document.querySelectorAll("h2");
console.log(h2All);
h2All[0].style.backgroundColor = "orange";
h2All[1].style.backgroundColor = "green";
h2All[2].style.backgroundColor = "red";