var inputElements = document.getElementsByTagName("input");

/** show user the accepted format for inputs */
var acceptedInputHints = {
  "first-name": "only alphabets",
  "last-name": "only alphabets",
  email: "a valid email address - user@example.com",
  password:
    "minimum 6 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
};

/** adding an 'input' even on input elements,
 * showing accepted input values to the user.
 */
for (let input of inputElements) {
  input.addEventListener("input", () => {
    let label = getLabelForInputElement(input);
    /** removes previous accepted user hints. */
    removeAcceptedUserInputHint("active");
    toggleClassOnInputCheck(input, label, true);
    showAcceptedUserInputHint(input, label);
  });
}

/**  to remove accepted input hints */
function removeAcceptedUserInputHint() {
  var activeLabels = document.querySelectorAll(".active");
  activeLabels.forEach((ele) => {
    ele.classList.remove("active");
  });
}

/** showing accepted user input hint */
function showAcceptedUserInputHint(input, label) {
  label.classList.add("active");
  label.textContent = acceptedInputHints[input.id];
}

/** 1. remove class if user input is valid
 *  2. add class if user input is invalid
 */
function toggleClassOnInputCheck(input, label, valid) {
  if (valid) {
    label.classList.remove("active_empty");
    input.classList.remove("active_invalid-input-border");
  } else {
    label.classList.add("active_empty");
    input.classList.add("active_invalid-input-border");
  }
}

/**  fetching label for corresponding input element.
 * only 1 label corresponding to an input element.
 */
function getLabelForInputElement(input) {
  return input.labels[0];
}

/** returns accepted user input string */
function returnAcceptedUserInputString(input) {
  return acceptedInputHints[input.id];
}

var signUp = document.getElementById("sign-up");
signUp.addEventListener("click", () => {
  for (let input of inputElements) {
    let label = getLabelForInputElement(input);
    if (input.validity.patternMismatch) {
      toggleClassOnInputCheck(input, label, false);
      label.textContent = `Please follow the pattern - ${returnAcceptedUserInputString(
        input
      )}`;
    } else if (input.value.trim() === "" || input.value == null) {
      toggleClassOnInputCheck(input, label, false);
      label.textContent = "This can't be empty";
    } else {
      toggleClassOnInputCheck(input, label, true);
    }
  }
});
