// Tenary Operators syntax: variable = (condition) ? expressiontrue : expressionfalse;
function rideFunction() {
    let height, can_ride;
    height = document.getElementById("height").value;// Tenary operators operate on 3 operands.
    can_ride = (height < 52) ? "You are not tall enough":"You are tall enough"; // Tenary operators can be used to replace multiple lines of code with a single line.
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}
document.write(Bigger = (6 > 1) ? "Left is bigger than the right number":"Right number is bigger than the left");

function rockthevote() {
    let age, canvote;
    age = document.getElementById("age").value;// Tenary operators operate on 3 operands.
    canvote = (age < 18) ? "You are not old enough ":"You are old enough "; // Tenary operators can be used to replace multiple lines of code with a single line.
    document.getElementById("vote").innerHTML = canvote + " to vote.";
}