function additionFunc() {
    let addition = 8 + 7;
    document.getElementById("addmath").innerHTML = "8 + 7 = " + addition;
}

function subtractionFunc() {
    let Subtraction = 5 - 2;
    document.getElementById("submath").innerHTML = "5 - 2 = " + Subtraction;
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
    let simplemath = (23 + 15) * 43 / 4 - 9;
    document.getElementById("math").innerHTML = "23 plus 15, multiplied by 43, divided by 5 and then subtracted by 9 equals " + simplemath;
}

function modMath() {
    let remainder = 15 % 9;
    document.getElementById("modu").innerHTML = "When you divide 15 by 9 you have a remainder of: " + remainder;
}

function negOperator() {{
    let x = 15;
    document.getElementById("negoper").innerHTML = -x;
}}