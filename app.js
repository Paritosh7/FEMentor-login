var inputs = document.getElementsByTagName("input");
console.log(inputs);
var inputHint = {
  "first-name": "only alphabets are accepted",
  "last-name": "only alphabets are accepted",
  email: "a valid email address is accepted",
  password:
    "minimum 6 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
};

for (let input of inputs) {
  input.addEventListener("click", () => {
    let label = getLabelForInputElement(input);
    removeActive("active");
    showHint(input, label);
    label.classList.remove("active-empty");
    label.classList.add("active");
  });
}

function removeActive(activetype) {
  var activeLabels = document.querySelectorAll(".active");
  activeLabels.forEach((ele) => {
    ele.classList.remove(activetype);
  });
}

/** extracting label from input
 * only 1 label linked to an element (for my usage)
 */
function getLabelForInputElement(input) {
  return input.labels[0];
}

function showHint(input, label) {
  label.textContent = inputHint[input.id];
}

var signUp = document.getElementById("sign-up");
signUp.addEventListener("click", () => {
  for (let input of inputs) {
    console.log(input);
    console.log(`${input.validity.patternMismatch}`);
    let label = getLabelForInputElement(input);
    console.log(input.value.trim());
    if (
      input.validity.patternMismatch ||
      input.value.trim() === "" ||
      input.value == null
    ) {
      {
        console.log(label);
        label.classList.add("active-empty");
        label.textContent = "This can't be empty";
      }
    } else label.classList.remove("active-empty");
  }
});
