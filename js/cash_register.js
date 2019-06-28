'use strict';

console.log("CASH REGISTER CONNECTED");

let calc = calculator();
let oldDisplay = "";
let newDisplay = "";
let operator = "";

let getOldDisplay = document.querySelector("#history-value");

function loadDisplay(num) {
    oldDisplay = num
    getOldDisplay.innerText = parseInt(oldDisplay);
};

function getBigDisplay() {
    return document.querySelector("#output-value").innerText;
};
// Print while clicking
function printBigDisplay(num) {
    if(num == "") {
        document.querySelector("output-value").innerText = num;
    } else {
        document.querySelector("#output-value").innerText = addComma(num);
    };
    return num;
};

// Add comma 
function addComma(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value; 
};

// Removes comma 
function removeComma(num) {
    return Number(num.replace(/,/g,''));
};

// Print number to the calc with comma
let number = document.querySelectorAll(".number");
for(let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        let output = removeComma(getBigDisplay());
        output = output + this.id;
        printBigDisplay(output);
        newDisplay = output

    });
};

// Clear
function clearDisplay(){
    oldDisplay = "";
    getOldDisplay.innerHTML = oldDisplay ;
};

// Clear input
let clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    if(this.id === "clear") {
        clearDisplay();
        printBigDisplay(" ");
    };
});

// Operators +, -, *, /, 
let operators = document.querySelectorAll(".operator");
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        if(this.id === "+") {
            loadDisplay(removeComma(getBigDisplay()));
            operator = "+";
        } else if(this.id === "-") {
            loadDisplay(removeComma(getBigDisplay()));
            operator = "-";
        } else if(this.id === "*") {
            loadDisplay(removeComma(getBigDisplay()));
            operator = "*";
        } else if(this.id === "/") {
            loadDisplay(removeComma(getBigDisplay()));
            operator = "/";
        }
        printBigDisplay("0");

    });
};

// Equation
function calculate(operator) {
    switch(operator) {
        case "+" :
            let add = calc.add(oldDisplay, newDisplay);
            loadDisplay(add);
            break;
        case "-" :
            let sub = calc.subtract(oldDisplay, newDisplay);
            loadDisplay(sub);
            break;
        case "*" :
            let mul = calc.multiply(oldDisplay, newDisplay);
            loadDisplay(mul);
            break;
        case "/" :
            let div = calc.divide(oldDisplay, newDisplay);
            loadDisplay(div);
            break;
    };
};

// Equal
let equal = document.querySelector("#equal");
equal.addEventListener("click", function() {
    if(this.id === "equal") {
        calculate(operator);
        printBigDisplay("0");
        newDisplay = 0;
    };
});

function getMemory() {

};
function balance() {

};
function deposit() {

};
function widthraw() {

};
