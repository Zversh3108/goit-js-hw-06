const refs = {
  formLogin: document.querySelector(".login-form"),
  inputEmail: document.querySelector("[type = email]"),
  inputPassword: document.querySelector("[type = password]"),
  submitButton: document.querySelector("[type = submit]"),
};

refs.formLogin.addEventListener("submit", onFormHandleSubmit);

const verificatiion = (inputForm) => {
  if (inputForm.value == "") alert("всі поля повинні бути заповнені.");
};

function onFormHandleSubmit(event) {
  event.preventDefault();
  const userData = {};
  const loginFormData = new FormData(event.currentTarget).forEach(
    (value, name) => {
      userData[name] = value;
    }
  );

  verificatiion(refs.inputPassword);
  verificatiion(refs.inputEmail);

  console.log(userData);
  event.currentTarget.reset();
}
