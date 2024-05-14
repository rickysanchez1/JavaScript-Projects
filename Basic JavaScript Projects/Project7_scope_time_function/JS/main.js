let x = "Global variable"; // this is a Global variables. They can be used by any method
let y = "yes";

function localFunction() {
    let statement = "Local Variable"; // This is a local variable only to be used within the method it was created
    document.getElementById("localvar").innerHTML = statement;
}

function errFunc() {
    console.log(X); // X is not defined so an error will appear in the console log
}

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?"
    }
}

function get_time() {
    if (new Date().getHours() > 12) { // Date getHours() method will return the hour (0 to 23) of a date
        document.getElementById("goodnight").innerHTML = "Good Afternoon"
    }
}

function compareFunction() {
    if (5 > 2) { // This is asking if 5 is greater than 2. if it is, it will perform the next set of instructions below
        document.getElementById("newif").innerHTML = "5 is greater than 2.";
    }
}

function elseStatement() {
    if (15 == 14) {
        document.getElementById("newelse").innerHTML = "15 is equal to 14.";
    }
    else { // this is asking that if the above is not met or true, perform the next set of instructions below.
        document.getElementById("newelse").innerHTML = "15 is not equal to 14.";
    }
}


function circusofvalues() {
    circus = document.getElementById("circus").value;
    if (circus == "Food") { 
        reply = "Ha ha ha ha ha ha ha ha haaa! Kill your cravings at the Circus of Values!!";
    }
    else if (circus == "Supplies") { // The else if are conditional statements that allow more flexibility.
        reply = "Stock up on Supplies!";
    }
    else if (circus == "Items") { // If the if condition has not been met, then it will check if the first else if statement has been met. If it has not, it will move to the next else if statement or if none is present, it will move to the else statement.
        reply = "Grab items while they are hot!";
    }
    else {
        reply = "Come back when you get some money, buddy!"
    }
    document.getElementById("stash").innerHTML = reply;
}

function Time_Function() {
    let Time = new Date().getHours(); // This is setting the value of the date()getHours method. 
    let Reply; // This variable will be used by the conditional statements below. When one is found true, it will use the value that is listed on the condition statement
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}