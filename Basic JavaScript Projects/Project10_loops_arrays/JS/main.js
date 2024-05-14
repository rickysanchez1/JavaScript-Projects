function whileLoop() {
    let i = "";
    let h = 1;
    while (h < 11) { // is the value of h less than 11? if true run function below. Continue loop until it returns false
        i += "<br>" + h; // i is empty += will append <br>(break) and display the value of h.
        h++; // This will add 1 to the value of h and then go back to the while loop until false.
    }
    document.getElementById("counter").innerHTML = i; // once the while loop returns false it will abort and run this line
}

function stringCounter() {
    let a = "the .string property will return the length of a string. This string length is: ";
    let b = a.length;
    document.getElementById("stringlength").innerHTML = a + b;
}

let food = ["Gyoza", "Watermelon", "Sausage", "Chicken", "Kale", "Broccoli", "Peanut Butter", "Yogurt"]; // we are creating an array inside this variable
let stuff = ""; // empty string variable
let i; // empty variable to be used in for loop
function forLoop() {
    for (i = 0; i < food.length; i++) { // is i less than the amount created in the food variable (8)? if true, run function
        stuff += food[i] + "<br>"; // "" =+(append) food[value of i to display the index of the element in our food variable] add line break. Add 1 to the value of i and then run function until the foor loop returns false
    } // Block scope is everything contained in for loop curly brakets {}
    document.getElementById("foodlist").innerHTML = stuff;
}

function carFunction() {
    let cars = []; // the cars variable is the object
    cars[0] = "blue car"; // the cars are given indexes
    cars[1] = "red car"; // the colors are the properties of the cars
    cars[2] = "purple car";
    cars[3] = "white car";
    cars[4] = "gray car";
    document.getElementById("car").innerHTML = "I have created several car variables with indexes 0-4 and this cars value is a " + cars[2] + ".";
}

function scopeFunction() {
    let water = "flow" // this function scope is only available within this function
    document.getElementById("water").innerHTML = water;
}


function constFunction() {
    const tools = {type:"Pull Saw", origin:"Japanese", length:"8 inches"}; // the variable name(identifier) cannot be changed but the values can be changed
    tools.type = "Hack saw"; // this is changing the properties value to Hacksaw
    tools.price = "$50"; // Adding a property with a value
    document.getElementById("tools").innerHTML = "The cost of a " + tools.origin + " " + tools.type + " is " + tools.price;
}

document.getElementById("return").innerHTML = returnFunction("hello") // this will invoke the function with a parameter of "hello"

function returnFunction(l) { // This is defining the function of returnFunction and will use the parameter that invoked the function
    return "Return the parameter " + l; // return the string and the parameter as well.
}

let people = { // Object is people
    name: "John", // property : value
    height: "177cm", // property : value
    haircolor: "Auburn", // property : value
    peopleatt: function(){ // this is a method to the people object. Methods are stored within properties as functions
        return this.name + " is " + this.height + " and has " + this.haircolor + " hair."; // this keyword refers to the people object
    }
};

document.getElementById("objects").innerHTML = people.peopleatt();

let breaks = "";
for (let l = 0; l < 10; l++) { // assigning a value to l then if expression is true, run the function. then add 1 to l
    if (l === 4) { break; } // once the value is at 3 jump out of the loop
    breaks += "The number is " + l + "<br>"; // display variable breaks with string and the values of l throughout the loop.
}
document.getElementById("breaks").innerHTML = breaks;

let cont = ""
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; } // if the value reaches 3, continue until until it can no longer be less than 10
    cont += "The number is " + i + "<br>";
}
document.getElementById("cont").innerHTML = cont;
