// let firstNum = document.getElementById("firstNum");
// let secondNum = document.getElementById("secondNum");
let operation = document.getElementById("operation");
let numOneError = document.getElementById("numOneError");
let numTwoError = document.getElementById("numTwoError");
let operatorError = document.getElementById("operatorError");
let numOneStatus,numTwoStatus,operatorStaus=false;

numOneError.style.display = "none";
numTwoError.style.display = "none";
operatorError.style.display = "none";

let btnCalculate = document.getElementById("btnCalculate");
let result = document.getElementById("result");

let finalResult;
btnCalculate.addEventListener("click", function(){
    // console.log("calc");
    
    let num1 = document.getElementById("firstNum");
    let num2 = document.getElementById("secondNum");
    // console.log(typeof firstNum);
    // console.log(firstNum);
    // console.log(secondNum);

    errorFun(num1, num2, operation);
    let firstNum = parseInt(num1.value);
    let secondNum = parseInt(num2.value);


    if(!numOneStatus && !numTwoStatus && !operatorStaus) {
        switch(operation.value) {
            case "add": 
                // console.log(firstNum + secondNum);
                // result.innerHTML = firstNum + secondNum;
                finalResult = firstNum + secondNum;
            break;
            case "minus":
                finalResult = firstNum - secondNum;
            break;
            case "multiply":
                finalResult = firstNum * secondNum;
            break;
            case "division":
                finalResult = firstNum / secondNum;
            break;
            default: 
                // finalResult = firstNum + secondNum;
                console.log("Error something...");
            break;

        }
    
        result.innerHTML = finalResult;
    }
});


function errorFun(num1, num2, operation) {

    if(num1.value =="" || num1.value==null || num1.value==undefined) {
        numOneError.style.display = "block";
        numOneStatus = true;
    } else {
        numOneError.style.display = "none";
        numOneStatus = false;
    }

    if(num2.value =="" || num2.value==null || num2.value==undefined) {
        numTwoError.style.display = "block";
        numTwoStatus = true;
    } else {
        numTwoError.style.display = "none";
        numTwoStatus = false;
    }

    if(operation.value =="empty") {
        operatorError.style.display = "block";
        operatorStaus = true;
    } else {
        operatorError.style.display = "none";
        operatorStaus = false;
    }
}


