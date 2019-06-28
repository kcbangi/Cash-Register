'use strict';

console.log("CALCULATOR CONNECTED");

function calculator() {
   
    let total = 0;
   
    function add(x, y) {
        total = parseFloat(x) + parseFloat(y);
        return total;
    }

    function subtract(x, y) {
        //validator(x,y);
        total = parseFloat(x) -parseFloat(y);
        return total;
    }

    function multiply(x, y) {
        total = parseFloat(x) * parseFloat(y);
        return total;
    }

    function divide(x, y) {
        total = parseFloat(x) / parseFloat(y);
        return total;
    }

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
    };
};
