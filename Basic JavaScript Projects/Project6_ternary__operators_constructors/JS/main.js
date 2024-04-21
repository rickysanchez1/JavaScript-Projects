// let null = true; // I have used an assigned word to a variable and a value... it does not allow the rest of the code to work

// Ternary Operators syntax: variable = (condition) ? expressiontrue : expressionfalse;
function rideFunction() {
    let height, can_ride;
    height = document.getElementById("height").value;// Ternary operators operate on 3 operands.
    can_ride = (height < 52) ? "You are not tall enough":"You are tall enough"; // Tenary operators can be used to replace multiple lines of code with a single line.
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}
document.write(Bigger = (6 > 1) ? "Left is bigger than the right number":"Right number is bigger than the left");

function rockthevote() {
    let age, canvote;
    age = document.getElementById("age").value;
    canvote = (age < 18) ? "You are not old enough ":"You are old enough ";
    document.getElementById("vote").innerHTML = canvote + " to rock the vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; // "this" keyword refers to the current object in this method.
    this.Vehicle_Model = Model; // "this" keyword offers a template until the new object is created from the constructor and use the values of the created object
    this.Vehicle_Year = Year; // 
    this.Vehicle_Color = Color;
}

let Bonnie = new Vehicle("Ford", 730, 1934, "White"); // "new" Keyword is used to create objects from the function that is using them.
let Orenthal = new Vehicle("Ford", "Bronco", 1993, "White"); // each variable here has defined values for each method in the function that will be using it.
let Steve = new Vehicle("Ford", "Mustang", 1968, "Dark Green");
function carFunction() {
    document.getElementById("carinfo").innerHTML = "Bonnie and her friend Clyde drive a " + Bonnie.Vehicle_Color + "-colored " + Bonnie.Vehicle_Make + " " + Bonnie.Vehicle_Model + " manufactured in " + Bonnie.Vehicle_Year;
}

function Manga(Author, Series, Run, Genre) {
    this.Manga_Author = Author; // "this" keyword refers to the current object in this method.
    this.Manga_Series = Series; // "this" keyword offers a template until the new object is created from the constructor and use the values of the created object
    this.Manga_Run = Run;
    this.Manga_Genre = Genre;
}

let Alyssa = new Manga("Hirohiko Araki", "Jojo's Bizarre Adventure", 1987, "Adventure"); // The variable name will take place in "this" in the function it is referred to.
let Jordan = new Manga("Katsuhiro Otomo", "Akira", 1982, "Cyberpunk");
let Ricky = new Manga("Naoki Urasawa", "Pluto", 2003, "Science Fiction Thriller");
let Amber = new Manga("Kazuo Umezu", "Drifint Classroom", 1972, "Horror");
function mangaFunction() {
    document.getElementById("New_and_this").innerHTML = "Ricky's favorite Manga is " + Ricky.Manga_Series + " by author " + Ricky.Manga_Author + ". It was first published in the year " + Ricky.Manga_Run + " and the genre is " + Ricky.Manga_Genre;
}

function Dog(furlength, furcolor, size) {
    this.Dog_furlength = furlength;
    this.Dog_furcolor = furcolor;
    this.Dog_size = size;
}

let doberman = new Dog("short", "dark brown and black", "large");
let golden_retriever = new Dog("Long" , "Golden", "Large");
let dachshund = new Dog("Short", "Brown", "Small");
let chihuahua = new Dog("Short or long", "Various colors", "Toy");
function dogFunction() {
    document.getElementById("doggos").innerHTML = "My favorite dog has " + doberman.Dog_furcolor + " and has very " + doberman.Dog_furlength + ", it is also muscular and kind of a " + doberman.Dog_size + " dog.";
}

