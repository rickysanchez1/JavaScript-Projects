function validateForm() {
    let form = document.carForm;
    let fieldsToValidate = ["Favorite Car", "Favorite Color", "Favorite Year"];
  
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

