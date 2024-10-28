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
