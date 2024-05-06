const btn = document.querySelector(".btn");
const copyEl = document.querySelector(".fa-copy");
const input = document.querySelector(".input");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click", createPassword);

copyEl.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alertContainer.classList.remove("active");
    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 1000);
  }
});

function createPassword() {
  let passwordChars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 14;
  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordChars.length);
    generatedPassword += passwordChars.substring(
      randomNumber,
      randomNumber + 1
    );
  }
  input.value = generatedPassword;
  alertContainer.innerHTML = `${generatedPassword} is copied!`;
}

function copyPassword() {
  input.select();
  navigator.clipboard.writeText(input.value);
}
