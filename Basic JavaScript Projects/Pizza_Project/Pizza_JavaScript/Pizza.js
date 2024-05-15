function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { // this is to determine which checkbox was checked out of the array of class "size"
            var selectedSize = sizeArray[i].value; // this assigns selectedSize with a value from the sizeArray.
            text1 = text1+selectedSize+"<br>"; // You ordered: + designated box checked.
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 3; // this will add to the total price
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; // The price of the pizza size
    console.log(selectedSize+" = $"+sizeTotal+".00"); // console log will keep track of the tab.
    console.log("size text1: "+text1); // You ordered: Pizza size 
    console.log("subtotal: $"+runningTotal+".00"); // Subtotal of our pizza size choice.
    // These variables will get passed on to each function
    getTopping(runningTotal,text1); // this will invoke our getToppings function
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // the .push method allows us to add more items to our array and will allow us to add more than 1 toppings.
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length; // this will assign the value of the amount of items we selected for our pizza toppings
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // if our toppingCount is greater than 1, subtract 1
    } else {
        toppingTotal = 0; // if we only have 1 topping then we pay 0. 1 free topping!
    }
    runningTotal = (runningTotal + toppingTotal); // This expression will add our pizza size to our topping count
    console.log("total selected topping items: "+toppingCount); // This will display how many toppings we picked
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); // total amount of toppings - 1 free topping = $1 per topping
    console.log("topping text1: "+text1); // sum of our choices
    console.log("Purchase Total: "+"$"+runningTotal+".00"); // Grand total of Toppings and pizza size
    document.getElementById("showText").innerHTML=text1; // this will display the items pizza size and items in our HTML id "showText"
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong><h3>"; // This will display our grand total
};
