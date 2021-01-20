const input = document.querySelector("input");
const btn = document.querySelector("button");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");
const form = document.querySelector("form");

btn.addEventListener("click", function () {
  if(
    input.value.includes("@") != true ||
    input.value.includes(".") != true ||
    input.value == "" 
  ) {
    errorText.style.display = "block";
    errorText.innerHTML = "Please enter a valid e-mail";
    errorIcon.style.display = "block";
    input.style.borderColor = "hsl(0, 93%, 68%)";
  } else form.submit();
});

input.addEventListener("click", function () {
  errorText.style.display = "none";
  errorIcon.style.display = "none";
  input.style.borderColor = "hsl(0, 36%, 70%)";
});

form.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    return false;
  }
});