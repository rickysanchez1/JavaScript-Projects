let x = "Global variable";
let y = "yes";

function localFunction() {
    let statement = "Local Variable";
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
    if (new Date().getHours() > 12) {
        document.getElementById("goodnight").innerHTML = "Good Afternoon"
    }
}

function compareFunction() {
    if (5 > 2) {
        document.getElementById("newif").innerHTML = "5 is greater than 2.";
    }
}

function elseStatement() {
    if (15 == 14) {
        document.getElementById("newelse").innerHTML = "15 is equal to 14.";
    }
    else {
        document.getElementById("newelse").innerHTML = "15 is not equal to 14.";
    }
}


function circusofvalues() {
    circus = document.getElementById("circus").value;
    if (circus == "Food") {
        reply = "Ha ha ha ha ha ha ha ha haaa! Kill your cravings at the Circus of Values!!";
    }
    else if (circus == "Supplies") {
        reply = "Stock up on Supplies!";
    }
    else if (circus == "Items") {
        reply = "Grab items while they are hot!";
    }
    else {
        reply = "Come back when you get some money, buddy!"
    }
    document.getElementById("stash").innerHTML = reply;
}
