let test = "I want my geese to lay gold eggs for easter."
let test2 = 531.4598

function songFunction() {
    let line1 = "Hold your breath. ";
    let line2 = "Make a wish. ";
    let line3 = "Count to three. ";
    let line4 = "Come with me and you'll be...";
    let song = line1.concat(line2, line3, line4); // This variable song will use the value of line1 and the concat method will add the other variables in the order mentioned
    document.getElementById("imagination").innerHTML = song;
}

function withDew() {
    let candy = "Sprinkle it with dew."
    let world = candy.slice(-4); // the slice method will display the parameters given. This one will start at position 10 and end at position 15
    document.getElementById("Candyman").innerHTML = world;
}

function upperFunction () {
    let upper = test.toUpperCase(); // I have added the toUpperCase function to this string to display the whole value in uppercase
    document.getElementById("updog").innerHTML = upper;
}

function searchFunction() {
    let seek = test.search("g"); // the search method will is given the parameter g to search through the variable given, test and return the index of the first occurrence
    document.getElementById("seeking").innerHTML = seek;
}

function toostring() {
    let A = test2.toString();
    document.getElementById("toestring").innerHTML = A.toString(); // the .tostring() method will convert an integer to a string
}

function topre() {
    let B = test2.toPrecision(4);
    document.getElementById("tooprecise").innerHTML = B; // the toprecision method will return a value based on its parameters if given. The number is 531.4598 and the parameter is 4.
}

function twofixed() {
    let C = test2.toFixed(); // the tofixed method will format a number with a specified number of decimal places and returns a string representation of the number
    document.getElementById("toofixed").innerHTML = C;
}

function values() {
    let D = test.valueOf();
    document.getElementById("twovalues").innerHTML = D; // the valueof method will return the primitive vale of the test variable
}