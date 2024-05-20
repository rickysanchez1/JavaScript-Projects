function validateForm() {
  let form = document.forms;
  let fieldsToValidate = ["First Name", "Last Name", "Phone Number"];

  for (let i = 0; i < fieldsToValidate.length; i++) {
    let field = form[fieldsToValidate[i]];
    if (field.value == "") {
      alert("Please fill out the " + fieldsToValidate[i] + " field.");
      field.focus();
      return false;
    }
  }
  return true;
}

function openPops() {
  document.getElementById("popupform").style.display = "block";
}

function closePops() {
  document.getElementById("popupform").style.display = "none";
}

$(function() {
  $('.slideshow img:gt(0)').hide(); // this will hide all other images in the slideshow class array except the first element
  setInterval(function() {
    $('.slideshow :first-child').fadeOut() // first image of the slideshow array, fadeout
       .next('img').fadeIn()
       .end().appendTo('.slideshow');}, 
    3000); // time it takes to change images
});