let car = "Volvo";
let car2 = "Volvo";
let cat = "meow";
let x = "55";

document.write(typeof car);
document.write("12" + 3); // type coercion will convert the value to the type it chooses. In here it will concatenate 12 and 3 resulting in 123

function nanFunction() {
    document.getElementById("nano").innerHTML = 0 / 0; // this will display Nan because 
}

function nanTrue() {
    document.getElementById("nant").innerHTML = isNaN("String"); // equals false because "String" is not a number
}

function nanFalse() {
    document.getElementById("nanf").innerHTML = isNaN(4); // equals false because 54 is a number
}

document.write(1.797693134862315E3089);
document.write(-1.797693134862315E3089);

document.write(50 > 2); // using boolean logic this will return true because 50 is greater than 2

console.log(55 + 14);

console.log(55 < 55);

document.write(50 == 53);

document.write(50 == 50); 

document.write(car === car2); // same data, same values

document.write(2 === cat); // different data, different values

document.write(55 === x); // different data, same value

document.write(3 === 55); // same data, different value

document.write(5 < 2 && 5 > 2); // Using the && operator to check if both values are true

document.write(5 == 5 && 6 == 6); 

document.write(car == car2 || cat == 55); // Using the || operator to see if one or all is true

function notFunction() {
    document.getElementById("not").innerHTML = !(car == cat); // the ! operator checks to see if something is not true. If something is not true it will return true. confusing...
}

function notFunction2() {
    document.getElementById("not2").innerHTML = !(car == car2);
}


