const submitBtn = document.querySelector("button");
const password = document.getElementById("password");
const repeatedPassword = document.getElementById("repeat_password");
const lastInputDiv = document.querySelector(".pre-last");

submitBtn.addEventListener("click", function () {
  if (password.value !== repeatedPassword.value) {
    const warning = document.createElement("p");
    warning.classList.add("warning-para");
    warning.textContent = "Passwords do not match";
    lastInputDiv.appendChild(warning);
    password.style.color = "red";
  }
});