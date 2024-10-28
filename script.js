const submitBtn = document.querySelector("button");
const password = document.getElementById("password");
const repeatedPassword = document.getElementById("repeat_password");
const lastInputDiv = document.querySelector(".pre-last");

submitBtn.addEventListener("click", function () {
  // Check if warning already exists
  const existingWarning = document.querySelector(".warning-para");
  if (password.value !== repeatedPassword.value) {
    // Only create new warning if it doesn't exists yet
    if (!existingWarning) {
      const warning = document.createElement("p");
      warning.classList.add("warning-para");
      warning.textContent = "*Passwords do not match";
      warning.style.color = "red";
      lastInputDiv.appendChild(warning);
    }
  } else {
    existingWarning.remove();
    const warning = document.createElement("p");
    warning.classList.add("warning-para");
    warning.textContent = "Passwords match!";
    warning.style.color = "#8bc34a";
    lastInputDiv.appendChild(warning);
    submitBtn.type = "submit";
  }
});

const emailInput = document.getElementById("email");
const emailLabel = document.querySelector(".email-label");

emailInput.addEventListener("blur", function () {
  if (!emailInput.checkValidity()) {
    // If email is invalid, update the label text
    emailLabel.textContent = "Email (expected: name@gmail.com)";
    emailLabel.style.color = "#b92326"; // Optional: make it more noticeable
    emailLabel.style.left = "-2px";
  } else {
    // If email is valid, reset the label text
    emailLabel.textContent = "EMAIL";
    emailLabel.style.color = ""; // Reset color if previously changed
    emailLabel.style.left = "-2px";
  }
});
