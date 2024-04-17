let A = 5; // Assigning 5 to the variable A
A++; // Increment operator increases the value by one step up
document.write(A + " This is increasing variable A by 1. ");

let B = 6
B--; // Decrement operator decreases the value by one step down
document.write(B + " This is decreasing variable B by 1. ");

function additionFunc() { // Creating additionFunc function
    let addition = 8 + 7; // Creating expression in variable addition
    document.getElementById("addmath").innerHTML = "8 + 7 = " + addition; // locating element id addmath, display string of expression and displaying addition variable
}

function subtractionFunc() {
    let Subtraction = 5 - 2;
    document.getElementById("submath").innerHTML = "5 - 2 = " + Subtraction; // locating element id submath, display string of expression and displaying subtraction variable
}

function multiplyFunc() {
    let multiply = 15 * 3;
    document.getElementById("multmath").innerHTML = "15 * 3 = " + multiply;
}

function divideFunc() {
    let divide = 8 / 4;
    document.getElementById("divmath").innerHTML = "8 / 4 = " + divide;
}

function moreMath() {
    let simplemath = (23 + 15) * 43 / 4 - 9; // Assigning longer expressing to simplemath variable
    document.getElementById("math").innerHTML = "23 plus 15, multiplied by 43, divided by 5 and then subtracted by 9 equals " + simplemath;
}

function modMath() {
    let remainder = 15 % 9; // 
    document.getElementById("modu").innerHTML = "When you divide 15 by 9 you have a remainder of: " + remainder;
}

function negOperator() {
    let x = 15;
    document.getElementById("negoper").innerHTML = -x;
}

document.write(Math.pow(9,3));
