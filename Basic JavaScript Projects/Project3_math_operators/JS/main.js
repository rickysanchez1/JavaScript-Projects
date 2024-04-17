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
    let remainder = 15 % 9; // Finding the remainder using the modulus operator
    document.getElementById("modu").innerHTML = "When you divide 15 by 9 you have a remainder of: " + remainder;
}

function negOperator() {
    let x = 15;
    document.getElementById("negoper").innerHTML = -x; // Negation operator negates the value and changes it to the opposite logical value
}

function increaseNum() {
    let A = 7; // Assigning 5 to the variable A
    A++; // Increment operator increases the value by one step up
    document.getElementById("increase").innerHTML = A;
}

function decreaseNum() {
    let B = 15
    B--; // Decrement operator decreases the value by one step down
    document.getElementById("decrease").innerHTML = B;
}

function randNum() {
    document.getElementById("random").innerHTML = Math.random(); // Math.random will generate a random number under 1, by default unless stated otherwise
}
