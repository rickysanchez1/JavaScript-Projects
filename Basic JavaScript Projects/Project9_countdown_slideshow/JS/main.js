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

let slideIndex = 1;
showSlides(slideIndex); // 

// Next/previous controls
function plusSlides(n) { 
  showSlides(slideIndex += n); // this line will invoke the showSlides declaration function and add 1
}

// Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let square = document.getElementsByClassName("square");
  if (n > slides.length) {slideIndex = 1} // if the value of slideIndex is greater than the slides length
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < square.length; i++) {
    square[i].className = square[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  square[slideIndex-1].className += " active";
}

