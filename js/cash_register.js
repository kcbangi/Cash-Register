'use strict';

console.log("CASH REGISTER CONNECTED");

let cashRegister = (function() {

    let oldDisplay = "";
    let newDisplay = "";
    let operator = "";
    let dolla = 0;

    // Small Screen w/o Comma
    let getOldDisplay = document.querySelector("#history-value");
    function loadDisplay(num) {
        oldDisplay = num;
        getOldDisplay.innerHTML = addComma(oldDisplay);
    };

    // Big Screen w/ Comma
    function getBigDisplay() {
        return document.querySelector("#output-value").innerHTML;
    };
    function printBigDisplay(num) {
        if(num == "") {
            document.querySelector("output-value").innerHTML = num;
        } else {
            document.querySelector("#output-value").innerHTML = addComma(num);
        };
        return num;
    };

    // Add comma 
    function addComma(num) {
        let n = parseFloat(num);
        let value = n.toLocaleString("en");
        return value; 
    };

    // Removes comma 
    function removeComma(num) {
        return parseFloat(num.replace(/,/g,''));
    };

    // Numbers
    let numbers = document.querySelectorAll(".numbers");
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function() {
            let output = removeComma(getBigDisplay());
            output = output + this.id;
            newDisplay = output
            printBigDisplay(output);
            console.log(output)
        });
    };

    // Dot
    // let dot = document.querySelector("#.");
    // dot.addEventListener('click', function() {
    //     console.log(this.id);
    //     // if(this.id === "dot" && oldDisplay.indexOf(".") !== -1) {

    //     // }else {

    //     // }
    // });

    // Clear
    function clearDisplay(){
        oldDisplay = "";
        getOldDisplay.innerHTML = oldDisplay ;
    };

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

    // Balance
    let getBalance = document.querySelector("#balance");
    getBalance.addEventListener("click", function() {
        loadDisplay(dolla);
        console.log("Balance: " + dolla);
    });

    // Deposit
    function sooMatchMani() {
        let depositDolla = calc.add(dolla, newDisplay);
        return loadDisplay(depositDolla);
        
    };
    let getDeposit = document.querySelector("#deposit");
    getDeposit.addEventListener("click", function() {
        sooMatchMani();
        newDisplay = 0;
        dolla = oldDisplay;
        console.log("Diposited: " + oldDisplay);
    });

    // Withdraw
    function noMani() {
        let withdrawDolla = calc.subtract(dolla, newDisplay);
        return loadDisplay(withdrawDolla);
    };
    let getWithdraw = document.querySelector("#withdraw");
    getWithdraw.addEventListener("click", function() {
        noMani();
        newDisplay = 0;
        dolla = oldDisplay;
    });

    let menu1 = document.querySelector("");
    menu1.addEventListener

})();

