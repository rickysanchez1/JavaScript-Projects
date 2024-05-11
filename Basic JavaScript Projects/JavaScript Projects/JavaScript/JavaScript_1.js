function favFunction() {
    let food_output;
    let foods = document.getElementById("favfood").value;
    let foodchoice = "?? That is also my childs favorite food!";
    switch(foods) {
        case "Watermelon":
            food_output = "Watermelon" + foodchoice;
        break;
        case "Dino bites":
            food_output = "Dino bites" + foodchoice;
        break;
        case "Breakfast sausage":
            food_output = "Breakfast sausage" + foodchoice;
        break;
        case "Ice cream":
            food_output = "Ice cream" + foodchoice;
        break;
        case "Peanut butter and jelly sandwhich":
            food_output = "Peanut butter and jelly sandwhich" + foodchoice;
        break;
        case "Macaroni and cheese":
            food_output = "Macaroni and cheese" + foodchoice;
        break;
        case "Glizzy":
            food_output = "Glizzy" + foodchoice;
        break;
        default:
        food_output = "Please enter the food exactly as its written!";
    }
    document.getElementById("output").innerHTML = food_output;
}

function changeclass() {
    let x = document.getElementsByClassName("Click");
    x[0].innerHTML = "Text has now been changed"; // This will use the x variable and the index value of 0 to execute the string
}

let f = document.getElementById("frame"); 
let fx = f.getContext("2d");
fx.font = "30px Arial"; // Adding font to the canvas
fx.strokeText("Stroke Text", 50, 50); // Added text

let createnew = document.createElement("canvas"); // Created a new canvas element
document.body.appendChild(createnew); // append to body
let cx = createnew.getContext("2d");

cx.fillStyle = "black"; // fill canvas with color specified
cx.fillRect(100,20,150,100); 

let can = document.getElementById("Gradient");
let canfx = can.getContext("2d");

let rad = canfx.createLinearGradient(0, 0, 170, 0);
rad.addColorStop(0, "red");
rad.addColorStop(1/6, "orange");
rad.addColorStop(2/6, "yellow");
rad.addColorStop(3/6, "green");
rad.addColorStop(4/6, "blue");
rad.addColorStop(5/6, "indigo");
rad.addColorStop(6/6, "purple");

canfx.fillStyle = rad;
canfx.fillRect(20, 20, 150, 100);