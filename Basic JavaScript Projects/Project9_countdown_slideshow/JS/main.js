function countdown() {
  let seconds = document.getElementById("seconds").value; // the .value is retrieving the value of the input field

  function tick() {  
    seconds = seconds - 1; // Once the value is created by the input this will reduce that number by 1
    timer.innerHTML = seconds;
    let time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}

let slideIndex = 1; // this is the active photo container
showSlides(slideIndex); // This will invoke the function below with the parameter of the slideIndex variable to display the function automatically

// Next/previous controls
function plusSlides(n) { 
  showSlides(slideIndex += n); // when the prev button is pressed it will -1 from slideindex to display the previous slide container. when the next button is pressed it will advance to the next photo container
}

// Square controls
function currentSlide(n) {
  showSlides(slideIndex = n); // when one of the squares are pressed it will change to the active photocontainer given the parameter and now the slideindex is whatever the corresponding square is, ie:currentSlide(1)
}

function showSlides(n) {
  let i; // creating an i variable to pass values later in the function
  let slides = document.getElementsByClassName("slides"); // this variable is created to control each photo container
  let square = document.getElementsByClassName("square"); // this variable is created to control the square controls 
  if (n > slides.length) {slideIndex = 1} //  if slideIndex is greater than 3 then the slideIndex value is 1
  if (n < 1) {slideIndex = slides.length} // if slideIndex is less than 1 then the value for slideIndex is 3
  for (i = 0; i < slides.length; i++) { // while i is less than slides.length 
    slides[i].style.display = "none"; // slides is an array and give me the value of i. 
  }
  for (i = 0; i < square.length; i++) {
    square[i].className = square[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  square[slideIndex-1].className += " active";
}