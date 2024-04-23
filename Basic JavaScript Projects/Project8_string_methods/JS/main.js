let test = "I want my geese to lay gold eggs for easter."

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