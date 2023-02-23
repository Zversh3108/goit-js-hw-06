const refs = {
  formLogin: document.querySelector(".login-form"),
  inputEmail: document.querySelector("[type = email]"),
  inputPassword: document.querySelector("[type = password]"),
  submitButton: document.querySelector("[type = submit]"),
};

refs.formLogin.addEventListener("submit", onFormHandleSubmit);

function onFormHandleSubmit(event) {
  event.preventDefault();
  const userData = {};

  if (refs.inputEmail.value == "" || refs.inputPassword.value == "") {
    alert("всі поля повинні бути заповнені.");
    return;
  }
  userData[refs.inputEmail.type] = refs.inputEmail.value;
  userData[refs.inputPassword.type] = refs.inputPassword.value;

  console.log(userData);
  event.currentTarget.reset();
}
