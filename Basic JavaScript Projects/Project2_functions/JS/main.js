function firstFunction() { //Declared a variable, firstFunction
    let x = 6; // Assigned 6 value to x variable
    let y = 7; // Assigned 7 value to y variable
    document.getElementById("button").innerHTML = x + y; // Used getElementByID to add x and y
}

function myFunction() {
    let sentence = "I am the first part of the sentence";
    sentence += " I was concatenated";
    document.getElementById('letsadd').innerHTML = sentence;
}

function functionOne(x, y) {
    return x * y;
}

function secondFunction() {
    document.getElementById("two").style.color = "red";
}