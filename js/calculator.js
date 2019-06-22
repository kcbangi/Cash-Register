'use strict';

console.log("CALCULATOR CONNECTED");

function getHistory() {
    return document.querySelector("#history-value").innerText;
}
function printHistory(num) {
    document.querySelector("#history-value").innerText = num;
}
function getOutput() {
    return document.querySelector("#output-value").innerText;
}
function printOutput(num) {
    if(num == "") {
        document.querySelector("output-value").innerText = num;
    } else {
        document.querySelector("#output-value").innerText = addComma(num);
    }
}
function addComma(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value; 
}
function removeComma(num) {
    return Number(num.replace(/,/g,''));
}

let operator = document.querySelectorAll(".operator");
for(let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        if(this.id === "clear") {
            printOutput("0");
        }
    });
}
let number = document.querySelectorAll(".number");
for(let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        let output = removeComma(getOutput());
        if(output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}
