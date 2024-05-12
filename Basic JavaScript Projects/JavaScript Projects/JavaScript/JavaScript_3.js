function displayType(dfood) {
    let dog_food = dfood.getAttribute("data-dog_food");
    alert(dog_food + " is a type of " + dfood.innerHTML + " for dogs.");
  }