let checkLogForm = document.getElementById("submit-name");
if (checkLogForm != null) {
    checkLogForm.onsubmit = (e) => {
        e.preventDefault();
    }
}
function usernameValidation(element) { 
    function checkinputfield(inputfield) { 
        if (inputfield.validity.typeMismatch) {
            inputfield.setCustomValidity("That's not a name!");
        } else if ((inputfield.value.length > 0) && (element.value.length < 4)) {
            inputfield.setCustomValidity("That name is too short!");
        } else if (inputfield.validity.valueMissing) {
            inputfield.setCustomValidity("Just choose a name");
        } else {
            inputfield.setCustomValidity("");
        }
    }
    checkinputfield(element);
    element.addEventListener("input", () => {
        checkinputfield(element);
     });
    return element.reportValidity();
}